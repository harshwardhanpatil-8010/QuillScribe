import connectDB from "../../utils/connectDB.js";
import Post from "../../models/Post.js";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    await connectDB();
    const { id } = req.query;

    const post = await Post.findById(id).populate("author", "username email");
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post" });
  }
}
