import connectDB from "../../utils/connectDB.js";
import User from "../../models/User.js";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    try {
      // Connect to the database
      await connectDB();

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password before saving
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Create new user instance
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      // Save new user to the database
      await newUser.save();

      // Send success response
      return res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
