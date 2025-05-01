import connectDB from "../../utils/connectDB.js";
import User from "../../models/User.js";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    try {
     
      await connectDB();

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

     
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);


      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

     
      await newUser.save();


      return res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
