import { useState } from "react";
import { Link } from "wouter";
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ChevronRight, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Link as LinkIcon,
  Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string | null;
  author: {
    name: string;
    title: string;
    avatar: string | null;
  } | null;
  category: {
    name: string;
    color: string;
  } | null;
  tags: Array<{
    name: string;
    slug: string;
  }>;
  readTime: number;
  publishedAt: string;
  featured: boolean;
}

// Our comprehensive blog posts data
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "AI-Powered Digital Transformation: How Machine Learning is Revolutionizing Enterprise Operations",
    slug: "ai-powered-digital-transformation",
    excerpt: "Discover how artificial intelligence and machine learning technologies are reshaping enterprise operations, driving efficiency, and creating competitive advantages in today's digital economy.",
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    author: {
      name: "Dr. Sarah Chen",
      title: "AI Solutions Architect, MXO2",
      avatar: null
    },
    category: {
      name: "AI & Innovation",
      color: "#3B82F6"
    },
    tags: [
      { name: "Artificial Intelligence", slug: "ai" },
      { name: "Machine Learning", slug: "ml" },
      { name: "Digital Transformation", slug: "digital-transformation" },
      { name: "Enterprise", slug: "enterprise" }
    ],
    readTime: 12,
    publishedAt: "2025-06-30T10:00:00Z",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Cloud Migration: Reducing Costs by 40% with Intelligent Automation",
    slug: "ai-cloud-migration-automation",
    excerpt: "Learn how AI-driven automation transforms cloud migration strategies, delivering significant cost savings and improved performance through intelligent workload optimization.",
    featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    author: {
      name: "Michael Rodriguez",
      title: "Cloud Migration Specialist, MXO2",
      avatar: null
    },
    category: {
      name: "Cloud Migration",
      color: "#10B981"
    },
    tags: [
      { name: "Cloud Migration", slug: "cloud-migration" },
      { name: "AI Automation", slug: "ai-automation" },
      { name: "Cost Optimization", slug: "cost-optimization" },
      { name: "Infrastructure", slug: "infrastructure" }
    ],
    readTime: 15,
    publishedAt: "2025-06-28T10:00:00Z",
    featured: false
  },
  {
    id: 3,
    title: "Robotic Process Automation: Transforming Manufacturing Operations with AI",
    slug: "rpa-manufacturing-ai",
    excerpt: "Explore how intelligent RPA solutions are revolutionizing manufacturing processes, improving quality control, and driving operational efficiency through advanced automation technologies.",
    featuredImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    author: {
      name: "Jennifer Walsh",
      title: "Robotics Engineering Lead, MXO2",
      avatar: null
    },
    category: {
      name: "Robotics & AI",
      color: "#8B5CF6"
    },
    tags: [
      { name: "Robotic Process Automation", slug: "rpa" },
      { name: "Manufacturing", slug: "manufacturing" },
      { name: "AI Automation", slug: "ai-automation" },
      { name: "Industry 4.0", slug: "industry-40" }
    ],
    readTime: 18,
    publishedAt: "2025-06-25T10:00:00Z",
    featured: false
  },
  {
    id: 4,
    title: "Multi-Cloud Strategy: How AI Orchestration Optimizes Workload Distribution",
    slug: "ai-multi-cloud-orchestration",
    excerpt: "Discover how AI-powered multi-cloud orchestration delivers optimal performance and cost efficiency by intelligently distributing workloads across multiple cloud providers.",
    featuredImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
    author: {
      name: "David Kumar",
      title: "Multi-Cloud Solutions Architect, MXO2",
      avatar: null
    },
    category: {
      name: "AI Solutions",
      color: "#F59E0B"
    },
    tags: [
      { name: "Multi-Cloud", slug: "multi-cloud" },
      { name: "AI Orchestration", slug: "ai-orchestration" },
      { name: "Cloud Strategy", slug: "cloud-strategy" },
      { name: "Cost Optimization", slug: "cost-optimization" }
    ],
    readTime: 16,
    publishedAt: "2025-06-22T10:00:00Z",
    featured: false
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  // Use our static blog posts data
  const blogPosts = blogPostsData;
  const isLoading = false;

  // Static categories based on our blog posts
  const categories = [
    { id: 1, name: "AI & Innovation" },
    { id: 2, name: "Cloud Migration" },
    { id: 3, name: "Robotics & AI" },
    { id: 4, name: "AI Solutions" }
  ];

  // Get recent posts for sidebar (latest 5)
  const recentPosts = blogPosts.slice(0, 5);

  // Featured post (first post)
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200"></div>
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!featuredPost) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Blog Posts Available</h2>
          <p className="text-gray-600">Check back soon for the latest insights and updates.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded">
        Skip to main content
      </a>

      {/* Category Badge */}
      <div className="bg-[hsl(208,70%,56%)] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="text-sm font-medium hover:underline"
          >
            {featuredPost.category?.name || "Blog Insights"}
          </Link>
        </div>
      </div>

      {/* Main Article Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {featuredPost.title}
          </h1>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
            <time dateTime={featuredPost.publishedAt}>
              {formatDate(featuredPost.publishedAt)}
            </time>
            {featuredPost.author && (
              <>
                <span>by</span>
                <span className="font-medium">
                  {featuredPost.author.name}{featuredPost.author.title && `, ${featuredPost.author.title}`}
                </span>
              </>
            )}
          </div>

          {/* Social Sharing */}
          <div className="flex items-center gap-3 mb-8">
            <Button
              variant="outline"
              size="sm"
              className="p-2"
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="p-2"
              onClick={() => window.open(`https://twitter.com/share?url=${window.location.href}&text=${featuredPost.title}`, '_blank')}
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="p-2"
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
            >
              <Facebook className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="p-2"
              onClick={copyToClipboard}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {featuredPost.featuredImage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <img 
            src={featuredPost.featuredImage} 
            alt={featuredPost.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Newsletter Subscription Banner */}
      <div className="bg-[hsl(354,87%,51%)] text-white mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">Subscribe to the MXO2 Insights Newsletter</h3>
              <p className="text-sm opacity-90">Stay updated with the latest technology insights and industry trends</p>
            </div>
            <Button 
              variant="secondary" 
              className="bg-white text-[hsl(354,87%,51%)] hover:bg-gray-100 font-medium"
            >
              Subscribe now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: featuredPost.excerpt }}
              />
              
              {/* Article Tags */}
              {featuredPost.tags && featuredPost.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <Link 
                        key={tag.slug} 
                        href={`/blog?tag=${tag.slug}`}
                        className="inline-block"
                      >
                        <Badge 
                          variant="secondary" 
                          className="hover:bg-gray-200 cursor-pointer"
                        >
                          {tag.name}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Recent Posts */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <article key={post.id} className="group">
                    <div className="flex items-start space-x-3">
                      {post.featuredImage && (
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        {post.category && (
                          <div className="text-xs font-medium text-[hsl(208,70%,56%)] mb-1">
                            {post.category.name}
                          </div>
                        )}
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="block"
                        >
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[hsl(354,87%,51%)] line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                        </Link>
                        <time className="text-xs text-gray-500">
                          {formatDate(post.publishedAt)}
                        </time>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link 
                    key={category.id} 
                    href={`/blog?category=${category.name}`}
                    className="block text-sm text-gray-700 hover:text-[hsl(354,87%,51%)] hover:bg-white px-3 py-2 rounded transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}