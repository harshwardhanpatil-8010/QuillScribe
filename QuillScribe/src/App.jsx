
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import CreatePost from "./components/CreatePost";
import Register from "./components/Register";
import ViewPost from "./components/viewPost";
import PrivacyPolicy from "./components/privacypolicy";
import TermsOfUse from "./components/Termsofservice";
import CookiePolicy from "./components/cookiePolicy";




const App = () => {
  return (
    <Routes>

   <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/create-post" element={<CreatePost />} /> 
       <Route path="/post/:id" element={<ViewPost />} />
       <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
       <Route path="/termsofuse" element={<TermsOfUse/>}/>
       <Route path="/cookie-policy" element={<CookiePolicy />} />
    </Routes>
  );
};

export default App;

