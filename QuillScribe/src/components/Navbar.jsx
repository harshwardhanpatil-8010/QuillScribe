
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl">
        QuillScribe
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm hover:text-accent">Home</a>
          <a href="#" className="text-sm hover:text-accent">Blog</a>
          <Link to="/login" className="text-sm hover:text-accent">Login</Link>
          <Button variant="default" size="sm">Subscribe</Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
