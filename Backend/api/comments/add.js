import connectDB from "../../utils/connectDB.js";
import Comment from "../../models/Comment.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await connectDB();
    const user = await authMiddleware(req);

    const { text, postId } = req.body;
    if (!text || !postId) return res.status(400).json({ message: "Text and Post ID are required" });

    const newComment = new Comment({
      text,
      author: user._id,
      post: postId,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: "Error adding comment" });
  }
}
