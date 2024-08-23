import express from "express";
const router = express.Router();
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";
router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig); // need to provide the gig id as params
router.get("/single/:id", getGig);
router.get("/", getGigs);
export default router;
