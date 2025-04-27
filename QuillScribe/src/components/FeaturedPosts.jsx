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
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl mb-12 text-center font-bold">Featured Stories</h2>
        
        <div className="flex gap-4 mb-8 max-w-2xl mx-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search posts..."
            className="border p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={handleSearch}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-200 ease-in-out disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-600 py-8">
            No posts found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <Link to={`/post/${post._id}`} key={post._id} className="transform hover:scale-105 transition duration-200">
                <div className="p-6 border rounded-lg shadow-sm hover:shadow-md bg-white">
                {post.imageUrl && (
                   <img src={post.imageUrl} alt="Post" className="w-full h-auto rounded-md" />
                            )}

                  <h2 className="text-xl font-semibold mb-3 text-gray-800">{post.title}</h2>
                  <p className="text-gray-600 line-clamp-3">{post.content}</p>
                  <div className="mt-4 text-blue-600 hover:text-blue-700">Read more →</div>
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
