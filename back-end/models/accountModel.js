import mongoose, { Schema } from "mongoose";
import validator from "validator";

const accountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    accountName: {
      type: String,
      required: true,
      unique: true,
    },
    accountType: {
      type: String,
      enum: ["checking", "saving"],
    },
    accountBalance: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);
const Account = mongoose.model("Account", accountSchema);
export default Account;
