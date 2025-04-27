import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/posts/${id}`);
      console.log(res.data);
      setPost(res.data.post);
      setComments(res.data.comments);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Login first to comment");
  
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/comments/add`, {
        postId: id,
        text: comment
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setComment("");
      fetchPost(); 
    } catch (error) {
      console.error("Error adding comment:", error.response?.data || error.message);
    }
  };

  if (!post) return <div className="flex items-center justify-center h-screen">
  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
</div>;

  return (
    <>
     
      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

        {post.imageUrl && (
          <img src={post.imageUrl} alt="Post" className="mb-4 rounded" />
        )}

        <p className="text-gray-700 mb-6">{post.content}</p>

        <form onSubmit={handleComment} className="flex gap-2 mb-6">
          <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." className="border p-2 flex-1 rounded" required />
          <button type="submit" className="bg-blue-500 text-white px-4 rounded">Post</button>
        </form>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          {comments.map((c, i) => (
            <div key={i} className="border p-2 rounded mb-2">
              {c.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
