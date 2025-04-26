import jwt from "jsonwebtoken";
import User from "../models/User.js";
import connectDB from "../utils/connectDB.js";

export default async function authMiddleware(req) {
  try {
    await connectDB();
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("No token provided");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) throw new Error("User not found");

    return user;
  } catch (error) {
    throw new Error("Not authorized");
  }
}
