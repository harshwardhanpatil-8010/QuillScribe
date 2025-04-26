import connectDB from "../../utils/connectDB.js";
import Post from "../../models/Post.js";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    await connectDB();
    const { query } = req.query;

    if (!query) return res.status(400).json({ message: "Query is required" });

    const posts = await Post.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
      ],
    }).populate("author", "username email");

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error searching posts" });
  }
}
