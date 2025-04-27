import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-200 shadow-lg">
      <div className="container mx-auto px-8 h-24 flex items-center justify-between">
        <a 
          href="/" 
          className="font-sans text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent hover:opacity-90 transition-all duration-300 ease-in-out"
        >
          QuillScribe
        </a>
        <div className="hidden md:flex items-center gap-10">
          {token ? (
            <>
              <Link 
                to="/create-post" 
                className="text-gray-700 hover:text-purple-600 font-semibold transition-all duration-300 ease-in-out hover:scale-105"
              >
                Create Post
              </Link>
              <Button 
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 rounded-full px-8 py-2.5 font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-purple-600 font-semibold transition-all duration-300 ease-in-out hover:scale-105"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 rounded-full px-8 py-2.5 font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
              >
                Register
              </Link>
            </>
          )}
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-100 transition-colors duration-300">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
