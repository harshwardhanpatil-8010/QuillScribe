
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate  } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login");
    };
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="font-sans text-xl">
        QuillScribe
        </a>
        <div className="hidden md:flex items-center gap-8">
        {token ? (
          <>
            <Link to="/create-post" className="text-black">Create Post</Link>
            <button onClick={handleLogout} className="text-black">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-black">Login</Link>
            <Link to="/register" className="text-black">Register</Link>
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
