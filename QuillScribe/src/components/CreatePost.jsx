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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden ">
            <div className="bg-blue-600 px-8 py-8">
              <h1 className="text-4xl font-extrabold text-white text-center tracking-wide">
                Create Your Story
              </h1>
              <p className="text-blue-100 text-center mt-2">Share your thoughts with the world</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-10 space-y-8" encType="multipart/form-data">
              <div className="space-y-2">
                <label htmlFor="title" className="block text-xl font-bold text-gray-800">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter an engaging title..."
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-gray-200 px-5 py-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 text-gray-700 text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="content" className="block text-xl font-bold text-gray-800">
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  placeholder="Share your thoughts..."
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-gray-200 px-5 py-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 h-80 resize-none text-gray-700 text-lg"
                  required
                ></textarea>
              </div>

              <div className="space-y-2">
                <label htmlFor="image" className="block text-xl font-bold text-gray-800">
                  Cover Image
                </label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-200 border-dashed rounded-xl hover:border-blue-400 transition-all duration-300 bg-gray-50">
                  <div className="space-y-2 text-center">
                    <div className="flex flex-col items-center">
                      {previewUrl ? (
                        <img src={previewUrl} alt="Preview" className="h-48 w-auto mb-4 rounded-lg shadow-lg" />
                      ) : (
                        <svg className="h-16 w-16 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
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
                        required
                      />
                      <label
                        htmlFor="image"
                        className="cursor-pointer text-base font-medium text-blue-600 hover:text-blue-700"
                      >
                        <span>Upload a file</span>
                        <p className="text-sm text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="px-8 py-4 rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 font-semibold transition-all duration-300 hover:shadow-md cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Publish Story
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
