import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";

export default function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: ""
  });
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    setPost({...post, [e.target.name]: e.target.value});
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white text-center">
              Create New Post
            </h1>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-8" encType="multipart/form-data">
            <div>
              <label htmlFor="title" className="block text-lg font-semibold text-gray-800 mb-2">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter an engaging title..."
                onChange={handleChange}
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 text-gray-700"
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-lg font-semibold text-gray-800 mb-2">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                placeholder="Share your thoughts..."
                onChange={handleChange}
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 h-72 resize-none text-gray-700"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="image" className="block text-lg font-semibold text-gray-800 mb-2">
                Upload Image
              </label>
              <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-200 border-dashed rounded-lg hover:border-blue-400 transition-colors duration-200">
                <div className="space-y-2 text-center">
                  <div className="flex flex-col items-center">
                    {previewUrl ? (
                      <img src={previewUrl} alt="Preview" className="h-40 w-auto mb-4 rounded-lg" />
                    ) : (
                      <svg className="h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    <input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="image"
                      className="cursor-pointer text-sm text-blue-600 hover:text-blue-700"
                    >
                      <span>Upload a file</span>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-6 py-3 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium transition duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-200 transform hover:scale-105"
              >
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
