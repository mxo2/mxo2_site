import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/ui/blog-card";
import { Card, CardContent } from "@/components/ui/card";
import { type BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
    enabled: true,
  });

  // Fallback blog posts based on real content
  const fallbackPosts: BlogPost[] = [
    {
      id: 1,
      title: "Revolutionizing Retail Trading: Inside MXO2's Powerful Multi-Platform Algo Trading System",
      excerpt: "Discover how our algorithmic trading platform transforms retail trading with advanced automation and real-time analytics capabilities.",
      slug: "revolutionizing-retail-trading",
      content: "Our algorithmic trading system represents a breakthrough in retail trading technology...",
      featuredImage: null,
      authorId: 1,
      published: true,
      createdAt: new Date("2025-05-24"),
      updatedAt: new Date("2025-05-24"),
    },
    {
      id: 2,
      title: "Smart Streets of Jaisalmer: How StreetSync Is Powering GPS-Based Municipal Workforce Management",
      excerpt: "Explore how StreetSync revolutionizes municipal operations with GPS tracking and workforce optimization in collaboration with government officials.",
      slug: "smart-streets-jaisalmer-streetsync",
      content: "StreetSync was implemented under a government directive...",
      featuredImage: null,
      authorId: 1,
      published: true,
      createdAt: new Date("2025-05-24"),
      updatedAt: new Date("2025-05-24"),
    },
    {
      id: 3,
      title: "Empowering Families and Students with AI: The Future of Parenting and Learning Begins at Parallel Campus",
      excerpt: "Learn how AI transforms education through personalized learning experiences and intelligent support systems for modern families.",
      slug: "empowering-families-students-ai-parallel-campus",
      content: "Parallel Campus began as a robust School ERP platform...",
      featuredImage: null,
      authorId: 1,
      published: true,
      createdAt: new Date("2025-05-24"),
      updatedAt: new Date("2025-05-24"),
    },
    {
      id: 4,
      title: "The Future of Cloud Infrastructure: Hybrid Solutions for Enterprise Growth",
      excerpt: "Understanding how hybrid cloud solutions provide the flexibility and scalability needed for modern enterprise operations.",
      slug: "future-cloud-infrastructure-hybrid-solutions",
      content: "As businesses continue to evolve in the digital age...",
      featuredImage: null,
      authorId: 1,
      published: true,
      createdAt: new Date("2025-05-20"),
      updatedAt: new Date("2025-05-20"),
    },
    {
      id: 5,
      title: "AI-Powered Business Process Automation: ROI and Implementation Strategies",
      excerpt: "A comprehensive guide to implementing AI and RPA solutions that deliver measurable business value and operational efficiency.",
      slug: "ai-powered-business-process-automation",
      content: "Business process automation has evolved significantly...",
      featuredImage: null,
      authorId: 1,
      published: true,
      createdAt: new Date("2025-05-18"),
      updatedAt: new Date("2025-05-18"),
    },
    {
      id: 6,
      title: "Cybersecurity in the Age of Remote Work: Best Practices and Technologies",
      excerpt: "Essential cybersecurity strategies and technologies to protect your business in an increasingly connected and remote world.",
      slug: "cybersecurity-remote-work-best-practices",
      content: "The shift to remote work has fundamentally changed...",
      featuredImage: null,
      authorId: 1,
      published: true,
      createdAt: new Date("2025-05-15"),
      updatedAt: new Date("2025-05-15"),
    }
  ];

  const displayPosts = posts || fallbackPosts;

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6">
              Insights & <span className="text-cyan">Resources</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Stay informed with the latest trends, best practices, and thought leadership in technology and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {displayPosts.length > 0 && (
        <section className="py-20 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
                Featured Article
              </h2>
            </div>
            
            <Card className="bg-white shadow-lg overflow-hidden max-w-4xl mx-auto border-0">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-navy to-cyan flex items-center justify-center p-12">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold">AI</span>
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl">Featured Story</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-montserrat font-bold text-2xl text-navy mb-4">
                    {displayPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {displayPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>Published: {new Date(displayPosts[0].createdAt).toLocaleDateString()}</span>
                  </div>
                  <a 
                    href={`/blog/${displayPosts[0].slug}`}
                    className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm"
                  >
                    Read Full Article →
                  </a>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
              Latest Articles
            </h2>
          </div>
          
          {isLoading ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
              {displayPosts.slice(1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
