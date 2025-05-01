import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/posts/getAll`);
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      if (query.trim() === "") {
        await fetchPosts();
        return;
      }
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/posts/search?query=${query}`);
      setPosts(res.data);
    } catch (err) {
      console.error("Error searching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="py-30 bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-5xl mb-16 text-center font-bold text-gray-800 drop-shadow-sm">
          Featured Stories
        </h2>
        
        <div className="flex gap-4 mb-12 max-w-2xl mx-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search posts..."
            className="border-2 p-4 rounded-xl flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          <button 
            onClick={handleSearch}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition duration-300 ease-in-out disabled:opacity-50 font-semibold shadow-md hover:shadow-lg"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-600 py-12 text-xl">
            No posts found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <Link to={`/post/${post._id}`} key={post._id} className="transform hover:scale-102 transition duration-300">
                <div className="h-full p-6 border rounded-xl shadow-md hover:shadow-xl bg-white flex flex-col">
                  {post.imageUrl && (
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3 flex-grow mb-4">
                    {post.content}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                      Read more 
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;