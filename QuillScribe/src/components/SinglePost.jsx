import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/posts/${id}`);
        setPost(data.post);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 bg-white mt-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-700 leading-7" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </>
  );
}
