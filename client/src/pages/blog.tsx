import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
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

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch blog posts
  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/partnership/blogs'],
  });

  // Fetch categories
  const { data: categories = [] } = useQuery<Array<{id: number, name: string}>>({
    queryKey: ['/api/partnership/categories'],
  });

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