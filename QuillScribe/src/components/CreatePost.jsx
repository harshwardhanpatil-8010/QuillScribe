import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    setPost({...post, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/posts/create`, post, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("Post created!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create post");
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="title" placeholder="Title" onChange={handleChange} className="border p-2 rounded" required />
          <textarea name="content" placeholder="Content" onChange={handleChange} className="border p-2 rounded h-40" required></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 rounded">Publish</button>
        </form>
      </div>
    </>
  );
}
