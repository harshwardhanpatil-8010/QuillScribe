import connectDB from "../../utils/connectDB.js";
import Post from "../../models/Post.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await connectDB();
    const user = await authMiddleware(req);

    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ message: "Title and content are required" });

    const newPost = new Post({
      title,
      content,
      author: user._id,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
