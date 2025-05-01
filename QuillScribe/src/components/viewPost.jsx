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
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/comments/add`,
        {
          postId: id,
          text: comment,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setComment("");
      fetchPost();
    } catch (error) {
      console.error("Error adding comment:", error.response?.data || error.message);
    }
  };

  if (!post)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <article className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-[1.01]">
        {post.imageUrl && (
          <div className="w-full h-[500px] relative">
            <img src={post.imageUrl} alt="Post" className="w-full h-full object-cover hover:opacity-95 transition-opacity" />
          </div>
        )}

        <div className="p-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">{post.title}</h1>

          <div className="flex items-center text-gray-600 text-base mb-8">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {new Date(post.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            {post.author && (
              <>
                <span className="mx-3">•</span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {post.author.username || "Anonymous"}
                </span>
              </>
            )}
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">{post.content}</p>
          </div>
        </div>

        <div className="p-10 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comments</h2>

          <form onSubmit={handleComment} className="mb-10">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full p-6 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 resize-none text-gray-700 text-lg transition-all"
              rows="4"
              required
            />
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:ring-4 focus:ring-blue-500/20"
            >
              Post Comment
            </button>
          </form>

          <div className="space-y-6">
            {comments.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-700 text-lg">{c.text}</p>
                {c.author && (
                  <div className="flex items-center mt-4 text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{c.author.username || "Anonymous"}</span>
                    {c.createdAt && (
                      <span className="ml-4 text-sm">
                        {new Date(c.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
