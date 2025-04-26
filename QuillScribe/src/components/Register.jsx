import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, formData);
      toast.success("Registered successfully! Please login.");  // ✅ show success
      navigate("/login"); 
    }catch (error) {
        console.error(error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Registration failed");
      }
      
  };

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
