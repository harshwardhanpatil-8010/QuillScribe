import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedPosts = () => {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      fetchPosts();
    }, []);
  
    const fetchPosts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/posts/getAll`);
      setPosts(res.data);
    };
  
    const handleSearch = async () => {
      if (query.trim() === "") {
        fetchPosts();
        return;
      }
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/posts/search?query=${query}`);
      setPosts(res.data);
    };
    return (
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl mb-12 text-center">Featured Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            className="border p-2 rounded flex-1"
          />
          <button onClick={handleSearch} className="bg-blue-600 text-white px-4 rounded">Search</button>
        </div>
        <div className="grid gap-4">
          {posts.map(post => (
            <Link to={`/post/${post._id}`} key={post._id}>
              <div className="p-4 border rounded hover:bg-gray-100">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedPosts;
  