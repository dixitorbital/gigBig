import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOrders, intent, confirm } from "../controllers/order.controller.js"; //intent, confirm
import { createOrder } from "../controllers/order.controller.js";

const router = express.Router();

// router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
// router.get("/create-payment-intent/:id", verifyToken, intent); //for test purpose/

// router.post("/", verifyToken, paymentVerification);

router.put("/confirm", verifyToken, confirm); // for test purpose
export default router;
