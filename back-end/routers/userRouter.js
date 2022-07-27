import express from "express";

const userRouter = express.Router();
import { isAuth, isAdmin } from "../utils/utils.js";
import {
  getAllUsers,
  getUserAccounts,
  getUsersRegisterRequest,
  login,
  register,
  registerRequest,
  seed,
} from "../controller/userController.js";

userRouter.get("/seed", seed);
userRouter.get("/", isAuth, isAdmin, getAllUsers);
userRouter.get("/registerrequests", isAuth, isAdmin, getUsersRegisterRequest);
userRouter.get("/get-user-accounts", isAuth, getUserAccounts)
userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/registerrequest", registerRequest);

export default userRouter;
