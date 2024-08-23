import express from "express";
import {
  deleteUser,
  findallusers,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();
router.get("/", findallusers);
router.get("/:id", getUser);
router.delete("/:id", verifyToken, deleteUser); // first middleware is run then the callback

export default router;
