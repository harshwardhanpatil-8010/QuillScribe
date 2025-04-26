
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import CreatePost from "./components/CreatePost";
import Register from "./components/Register";
import ViewPost from "./components/viewPost";




const App = () => {
  return (
    <Routes>

   <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route path="/create-post" element={<CreatePost />} /> 
       <Route path="/post/:id" element={<ViewPost />} />
    </Routes>
  );
};

export default App;

