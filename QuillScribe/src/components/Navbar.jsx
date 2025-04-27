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
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="/" 
          className="font-sans text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          QuillScribe
        </a>
        <div className="hidden md:flex items-center gap-8">
          {token ? (
            <>
              <Link 
                to="/create-post" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Create Post
              </Link>
              <Button 
                onClick={handleLogout}
                className="bg-red-500 text-white hover:bg-red-600 rounded-full px-6 py-2 transition-colors"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-6 py-2 transition-colors"
              >
                Register
              </Link>
            </>
          )}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
