import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/ui/blog-card";
import { type BlogPost } from "@shared/schema";

export default function BlogSection() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/featured"],
    enabled: true,
  });

  // Fallback blog posts based on the real content
  const fallbackPosts = [
    {
      id: 1,
      title: "Revolutionizing Retail Trading: Inside MXO2's Powerful Multi-Platform Algo Trading System",
      excerpt: "Discover how our algorithmic trading platform transforms retail trading with advanced automation and real-time analytics.",
      slug: "revolutionizing-retail-trading",
      featuredImage: null,
      content: "",
      authorId: 1,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "Smart Streets of Jaisalmer: How StreetSync Is Powering GPS-Based Municipal Workforce Management",
      excerpt: "Explore how StreetSync revolutionizes municipal operations with GPS tracking and workforce optimization.",
      slug: "smart-streets-jaisalmer-streetsync",
      featuredImage: null,
      content: "",
      authorId: 1,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: "Empowering Families and Students with AI: The Future of Parenting and Learning Begins at Parallel Campus",
      excerpt: "Learn how AI transforms education through personalized learning experiences and intelligent support systems.",
      slug: "empowering-families-students-ai-parallel-campus",
      featuredImage: null,
      content: "",
      authorId: 1,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  const displayPosts = posts || fallbackPosts;

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
            Related Resources
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Learn more about services to support your cloud adoption and migration.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                <div className="bg-gray-300 h-48"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  <div className="h-3 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded mb-4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {displayPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
