import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name cannot be empty"],
    },
    email: {
      type: String,
      required: [true, "User email cannot be empty"],
      validate: {
        validator: validator.isEmail,
        message: "not a valid email",
      },
      unique: true,
    },
    contact: {
      type: String,
      required: [true, "User Mobile Number cannot be empty"],
      unique: true,
      maxlength: 10,
      minlength: 10,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateAccessToken = async function () {
  return await jwt.sign(
    { userId: this._id, role: this.role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export default mongoose.model("User", UserSchema);
