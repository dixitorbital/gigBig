import Razorpay from "razorpay";
import Orders from "../models/order.model";
import express from "express";

import { register, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();
const razorpay = new Razorpay({
  key_id: process.env.razorpay_key_id,
  key_secret: process.env.razorpay_key_secret,
});

router.get("/pay:id", async (req, res, next) => {
  const options = {
    amount: 50000, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  const order = await razorpay.orders.create(options, function (err, order) {
    console.log(order);
  });
});
