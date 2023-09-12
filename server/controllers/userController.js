import User from "../models/User.js";
import asyncHandler from "express-async-handler";
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  return res.status(200).json({ message: "User details sent !", users });
});
