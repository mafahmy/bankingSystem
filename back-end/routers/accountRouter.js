import express from "express";
import {
  approveAccount,
  createAccount,
  deleteAccount,
  getAccountRequest,
  getAllAccounts,
} from "../controller/accountController";
import { isAuth, isAdmin } from "../utils/utils";

const accountRouter = express.Router();

accountRouter.get("/", isAuth, isAdmin, getAllAccounts);
accountRouter.post("/createaccount", createAccount);
accountRouter.delete("/deleteacount/:id", isAuth, deleteAccount);
accountRouter.get("/accountrequest", isAuth, isAdmin, getAccountRequest);
accountRouter.get("/approveaccount/:id", isAuth, isAdmin, approveAccount);

export default accountRouter;
