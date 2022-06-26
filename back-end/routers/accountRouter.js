import express from "express";
import {
  approveAccount,
  createAccount,
  deleteAccount,
  getAccountRequest,
  getAllAccounts,
} from "../controller/accountController.js";
import { isAuth, isAdmin } from "../utils/utils.js";

const accountRouter = express.Router();

accountRouter.get("/", isAuth, isAdmin, getAllAccounts);
accountRouter.post("/create-account/:id", createAccount);
accountRouter.delete("/delete-acount/:id", isAuth, deleteAccount);
accountRouter.get("/account-request", isAuth, isAdmin, getAccountRequest);
accountRouter.post("/approve-account", approveAccount);

export default accountRouter;
