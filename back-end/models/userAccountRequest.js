import mongoose from "mongoose";

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

const UserAccountRequest = mongoose.model("UserAccountRequest", accountSchema);
export default UserAccountRequest;
