import connectDB from "../../utils/connectDB.js";
import Post from "../../models/Post.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

export default async function handler(req, res) {
  if (req.method !== "DELETE") return res.status(405).end();

  try {
    await connectDB();
    const user = await authMiddleware(req);

    const { id } = req.query;
    const post = await Post.findById(id);

    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.author.toString() !== user._id.toString())
      return res.status(403).json({ message: "Unauthorized to delete this post" });

    await post.deleteOne();
    res.status(200).json({ message: "Post deleted successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
}
