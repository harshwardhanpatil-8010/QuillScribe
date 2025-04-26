import connectDB from "../../utils/connectDB.js";
import Post from "../../models/Post.js";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    await connectDB();

    const posts = await Post.find()
      .populate("author", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
}
