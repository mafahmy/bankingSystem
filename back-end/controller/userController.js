import User from "../models/userModel.js";
import UserRequestRegister from "../models/userRequestRegister.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/utils.js";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Account from "../models/accountModel.js";

export const seed = expressAsyncHandler(async (req, res) => {
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers });
});

export const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({});

  res.send(users);
});

export const getUsersRegisterRequest = expressAsyncHandler(async (req, res) => {
  const users = await UserRequestRegister.find({});

  res.send(users);
});

export const login = expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const isCorrectPass = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isCorrectPass) {
      const token = generateToken(user);
      const options = {
        expires: new Date(Date.now() + 900000),
        // secure: true,
        httpOnly: true,
      };

      const auth = res.cookie("jwtCook", token, options).status(200).send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isLoggedIn: true,
        status: user.status,
        hasAccount: user.hasAccount,
        //  token: token,
      });
      if (!auth) {
        res.status(401).send({ message: "Token expired" });
      }
      return;
    }
  }
  res.status(401).send({ message: "Invalid email or password" });
});

export const registerRequest = expressAsyncHandler(async (req, res) => {
  let userRegisterRequest = await UserRequestRegister.findOne({
    email: req.body.email,
  });
  if (userRegisterRequest) {
    res
      .status(401)
      .send({ message: "You ALREADY Have A Registered Request Before" });
  } else {
    userRegisterRequest = new UserRequestRegister({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res
      .status(200)
      .send({ message: "Request Success will get to you shortly" });
  }
  await userRegisterRequest.save();
});

export const register = expressAsyncHandler(async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  await UserRequestRegister.findOne({ email: req.body.email }).deleteOne();

  if (user) {
    res.status(401).send({ message: "User with a given email already exist!" });
  } else {
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  }
  await user.save();

  res.send({ message: "User registered successfully" });
});
export const getUserAccounts = expressAsyncHandler(async (req, res) => {
  let accounts = await Account.find({user: req.body.user})
  res.send(accounts)
});
