interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

interface BlogNewProps {
  posts: BlogPost[];
}

export default function BlogNew({ posts }: BlogNewProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section id="blog" className="py-32 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-gray-400 text-sm font-mono mb-8 tracking-widest">
          // BLOG
        </div>

        {/* Background Text */}
        <div 
          className="text-9xl font-bold mb-8 opacity-5 select-none"
          style={{
            WebkitTextStroke: '2px #e5e7eb',
            WebkitTextFillColor: 'transparent',
          }}
        >
          BLOG
        </div>

        <h2 className="text-5xl font-bold text-gray-900 mb-4 -mt-20">Latest Blog Posts</h2>
        <p className="text-gray-600 mb-16 max-w-2xl">
          Thoughts, tutorials, and insights about development
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
            >
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20">
                  📝
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-full shadow">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-3">Posted on {formatDate(post.date)}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-gray-900 font-medium hover:gap-2 transition-all"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

