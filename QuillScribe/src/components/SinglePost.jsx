import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/posts/${id}`);
        setPost(data.post);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }, [id]);

  if (!post) return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          {post.coverImage && (
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-64 object-cover"
            />
          )}
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
              {post.author && (
                <div className="flex items-center">
                  <img 
                    src={post.author.avatar || "https://via.placeholder.com/40"} 
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span>{post.author.name}</span>
                </div>
              )}
              {post.date && (
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
              {post.readTime && (
                <span>{post.readTime} min read</span>
              )}
            </div>

            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {post.tags && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}
