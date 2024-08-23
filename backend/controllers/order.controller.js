import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";
import User from "../models/user.model.js";
import Razorpay from "razorpay";
import express from "express";
import crypto from "crypto";
// import { register, login, logout } from "../controllers/auth.controller.js";

// const router = express.Router();

// import Stripe from "stripe";

export const intent = async (req, res, next) => {
  // const stripe = new Stripe(process.env.STRIPE);

  const gig = await Gig.findById(req.params.id);
  console.log(gig);
  const razorpay = new Razorpay({
    key_id: process.env.razorpay_key_id,
    key_secret: process.env.razorpay_key_secret,
  });
  const options = {
    amount: Number(gig.price * 100), // amount in the smallest currency unit
    currency: "INR",
    payment_capture: 1,
    // receipt: `order_rcptid_11${gig.title}${req.userId}`,
  };
  async function createorder() {
    try {
      const order = await razorpay.orders.create(options);
      // console.log("Order created using async/await: ", order);
      return order; // If you need to return the order for further use
    } catch (err) {
      console.error("Error creating order: ", err);
    }
  }
  // const order = await razorpay.orders.create(options);
  const order = await createorder();
  console.log(order);
  console.log("ur order from razroapy : ✌️");

  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: gig.price * 100,
  //   currency: "usd",
  //   automatic_payment_methods: {
  //     enabled: true,
  //   },
  // });

  const newOrder = new Order({
    gigId: gig._id,
    image: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    order_id: order.id,
    payment_id: "temp",
    payment_sign: "temp",
  });
  try {
    await newOrder.save();
    res.status(200).send(order);
  } catch (err) {
    console.log(" order controller me intent wale function me error 🫡🫡");
    console.log(err);
  }
};

export const createOrder = async (req, res, next) => {
  const gig = await Gig.findById(req.params.gigId);
  const newOrder = new Order({
    gigId: gig._id,
    image: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: "sample payment intent",
  });

  try {
    const result = await newOrder.save();
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

export const getOrders = async (req, res, next) => {
  const currentUser = await User.findById(req.userId);
  console.log(currentUser.username);
  try {
    const orders = await Order.find({
      ...(currentUser.isSeller
        ? { sellerId: currentUser._id }
        : { buyerId: currentUser._id }),
      isCompleted: true,
    });
    // console.log(currentUser);
    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};
export const confirm = async (req, res, next) => {
  // const gigid=req.params.id;
  // const gig = await Gig.findById(req.params.id);
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;
  // console.log(" i am here in confirm function");
  const body_data = razorpay_order_id + "|" + razorpay_payment_id;
  const expect = crypto
    .createHmac("sha256", process.env.razorpay_key_secret)
    .update(body_data)
    .digest("hex");
  const isvalid = expect === razorpay_signature;
  if (isvalid) {
    try {
      const orders = await Order.findOneAndUpdate(
        {
          // payment_intent: req.body.payment_intent,
          order_id: razorpay_order_id,
        },
        {
          $set: {
            isCompleted: true,
            payment_id: razorpay_payment_id,
            payment_sign: razorpay_signature,
          },
        }
      );

      // res.redirect("http://localhost:5173/gigs");
    } catch (err) {
      next(err);
    }
  } else {
    console.log(
      "something went wrong while confirming the order on razorpay server 🥲"
    );
  }
};
