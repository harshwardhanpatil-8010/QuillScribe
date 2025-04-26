
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-lg mb-4">Modern Blog</h3>
            <p className="text-sm opacity-80">
              Where great ideas find their voice and stories come to life.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100">Home</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">Blog</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">About</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100">Privacy Policy</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">Terms of Service</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-80 hover:opacity-100">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Modern Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
