import connectDB from "../../utils/connectDB.js";
import Post from "../../models/Post.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

export default async function handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();

  try {
    await connectDB();
    const user = await authMiddleware(req);

    const { id } = req.query;
    const { title, content } = req.body;

    const post = await Post.findById(id);

    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.author.toString() !== user._id.toString())
      return res.status(403).json({ message: "Unauthorized to update this post" });

    post.title = title || post.title;
    post.content = content || post.content;

    await post.save();
    res.status(200).json({ message: "Post updated successfully ✅", post });
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
}
