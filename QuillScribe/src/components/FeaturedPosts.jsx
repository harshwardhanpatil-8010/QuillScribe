
const FeaturedPosts = () => {
    const posts = [
      {
        id: 1,
        title: "The Future of Web Development",
        excerpt: "Exploring the latest trends and technologies shaping the web.",
        author: "Sarah Johnson",
        date: "Apr 20, 2025",
        category: "Technology",
      },
      {
        id: 2,
        title: "Mindful Living in a Digital Age",
        excerpt: "How to maintain balance in an increasingly connected world.",
        author: "Michael Chen",
        date: "Apr 22, 2025",
        category: "Lifestyle",
      },
      {
        id: 3,
        title: "Sustainable Business Practices",
        excerpt: "Building companies that thrive while protecting our planet.",
        author: "Emma Davis",
        date: "Apr 23, 2025",
        category: "Business",
      },
    ];
  
    return (
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl mb-12 text-center">Featured Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-accent mb-2">{post.category}</div>
                <h3 className="font-display text-xl mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedPosts;
  