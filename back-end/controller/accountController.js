import User from "../models/userModel.js";
import Account from "../models/accountModel.js";
import expressAsyncHandler from "express-async-handler";
import UserAccountRequest from "../models/userAccountRequest.js";


export const getAllAccounts = expressAsyncHandler(async () => {});

export const createAccount = expressAsyncHandler(async (req, res) => {
  let userAccountRequest = await UserAccountRequest.findOne({
    accountName: req.body.accountName,
  });

  let userId = await User.findById(req.params.id);
  if (userAccountRequest) {
    res.status(401).send({ message: "This name is used" });
  } else if (userId) {
    userAccountRequest = new UserAccountRequest({
      user: userId,  
      accountName: req.body.accountName,
      accountType: req.body.accountType,
      accountBalance: req.body.accountBalance,
    });
    res
      .status(200)
      .send({ message: "Request Success will get to you shortly" });
    await userAccountRequest.save();
  } else {
    res.status(400).send({ message: "No id found" });
  }
});

export const deleteAccount = expressAsyncHandler(async () => {});

export const getAccountRequest = expressAsyncHandler(async (req, res) => {
  const accountRequest = await UserAccountRequest.find({});
  res.send(accountRequest);
});

export const approveAccount = expressAsyncHandler(async (req, res) => {
  let account = await Account.findOne({
    accountName: req.body.accountName,
  });

  let accountRequest = await UserAccountRequest.findOne({
    accountName: req.body.accountName,
  });

  console.log(accountRequest)
  if (account) {
    res.status(401).send({ message: "Used account name" });
  } else {
    account = new Account({
        user: accountRequest.user,
        accountName: accountRequest.accountName,
        accountBalance: accountRequest.accountBalance,
        accountType: accountRequest.accountType
    });
    res.status(200).send({ message: "Account created successfully" });
    await account.save();
  }
});
