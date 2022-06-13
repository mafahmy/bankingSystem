import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken, isAuth, isAdmin } from "../utils/utils.js";
import expressAsyncHandler from "express-async-handler";

export const seed = expressAsyncHandler(async (req, res) => {
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers });
});

export const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({});

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
      res.cookie("jwtCook", token, options).status(200).send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isLoggedIn: true,
        status: user.status,
        //  token: token,
      });
      return;
    }
  }
  res.status(401).send({ message: "Invalid email or password" });
});

export const register = expressAsyncHandler(async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(401).send({ message: "User with a given email already exist!" });
  } else {
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
  }
  const createdUser = await user.save();
  // res.send({
  //   _id: createdUser._id,
  //   name: createdUser.name,
  //   email: createdUser.email,
  //   isAdmin: createdUser.isAdmin,
  //   isLoggedIn: createdUser.isLoggedIn,
  //   status: createdUser.status,
  //   // token: token,
  // });
});
