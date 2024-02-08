import express from "express";
import {
  login,
  register,
  logout,
  getUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);

export default router;
