
import { Route, Routes } from "react-router-dom";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";




const App = () => {
  return (
    <Routes>
      <Route index element={

    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection/>
        <FeaturedPosts/>
        <Newsletter/>
      </main>
      <Footer />
    </div>
      }/>
      <Route path={'/login'} element={
        <div>login</div>
      }/>
    </Routes>
  );
};

export default App;

