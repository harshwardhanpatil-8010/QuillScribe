import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  const fetchPost = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/posts/getById/${id}`);
    setPost(res.data);
  };

  const fetchComments = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/comments/${id}`);
    setComments(res.data);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Login first to comment");

    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/comments/add`, {
      postId: id,
      content: comment
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setComment("");
    fetchComments();
  };

  if (!post) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-700 mb-6">{post.content}</p>

        <form onSubmit={handleComment} className="flex gap-2 mb-6">
          <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." className="border p-2 flex-1 rounded" required />
          <button type="submit" className="bg-blue-500 text-white px-4 rounded">Post</button>
        </form>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          {comments.map((c, i) => (
            <div key={i} className="border p-2 rounded mb-2">
              {c.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
