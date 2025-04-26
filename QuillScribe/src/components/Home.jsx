
import Navbar from "../components/Navbar";

import HeroSection from "./HeroSection";
import FeaturedPosts from "./FeaturedPosts";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function Home() {

  return (
    <>
     <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection/>
        <FeaturedPosts/>
        <Newsletter/>
      </main>
      <Footer />
    </div>
    </>
  );
}
