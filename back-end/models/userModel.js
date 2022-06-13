import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Email is invalid"],
    },
    password: { type: String, required: true},
    isAdmin: { type: Boolean, required: true, default: false },
    isLoggedIn: { type: Boolean, required: true, default: false },
    status: { type: String, required: true, default: "active", enum: ['active', 'inActive', 'suspended'] },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
export default User;
