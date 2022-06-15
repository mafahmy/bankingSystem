import express from "express";
import User from "../models/userModel.js";
import data from "../data.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
const userRouter = express.Router();
import { generateToken, isAuth, isAdmin } from "../utils/utils.js";
import {
  getAllUsers,
  getUsersRegisterRequest,
  login,
  register,
  registerRequest,
  seed,
} from "../controller/userController.js";

userRouter.get("/seed", seed);
userRouter.get("/", isAuth, isAdmin, getAllUsers);
userRouter.get("/registerrequests", isAuth, isAdmin, getUsersRegisterRequest);
userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/registerrequest", registerRequest);

export default userRouter;
