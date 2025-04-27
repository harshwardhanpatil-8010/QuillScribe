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
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setPost({...post, [e.target.name]: e.target.value});
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append('title', post.title);
      formData.append('content', post.content);
      if (image) {
        formData.append('image', image);
      }

      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/posts/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
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
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Create New Post
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter your post title"
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                placeholder="Write your post content here..."
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border h-64 resize-none"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Upload Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
            </div>
            <div className="flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
