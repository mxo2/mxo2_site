import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Search, Calendar, User, Clock, ArrowRight, Filter, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function Partnership() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  // Fetch blog posts
  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/partnership/blogs', searchTerm, selectedCategory, selectedTag],
  });

  // Fetch categories for filter
  const { data: categories = [] } = useQuery<Array<{id: number, name: string}>>({
    queryKey: ['/api/partnership/categories'],
  });

  // Fetch tags for filter
  const { data: tags = [] } = useQuery<Array<{id: number, name: string}>>({
    queryKey: ['/api/partnership/tags'],
  });

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category?.name === selectedCategory;
    const matchesTag = selectedTag === "all" || post.tags.some(tag => tag.name === selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded w-1/3"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-lg shadow-sm border">
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[hsl(220,72%,44%)] to-[hsl(220,72%,35%)] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
              Blog
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 font-opensans max-w-3xl mx-auto leading-relaxed">
              Discover the latest in technology partnerships, industry insights, and innovation stories 
              that drive digital transformation success.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-50 border-gray-300 focus:border-blue-500"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-600">Filter by:</span>
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category: any) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Tag" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tags</SelectItem>
                    {tags.map((tag: any) => (
                      <SelectItem key={tag.id} value={tag.name}>
                        {tag.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              {searchTerm && ` for "${searchTerm}"`}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-montserrat">
                Featured Articles
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <article key={post.id} className="group">
                    <Link href={`/partnership/blog/${post.slug}`}>
                      <a className="block bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                        {post.featuredImage && (
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {post.category && (
                              <Badge 
                                className="absolute top-4 left-4 text-white font-medium"
                                style={{ backgroundColor: post.category.color }}
                              >
                                {post.category.name}
                              </Badge>
                            )}
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p className="text-gray-600 mb-4 font-opensans leading-relaxed">
                              {post.excerpt}
                            </p>
                          )}
                          
                          {/* Author and meta */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {post.author?.avatar && (
                                <img
                                  src={post.author.avatar}
                                  alt={post.author.name}
                                  className="w-8 h-8 rounded-full"
                                />
                              )}
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {post.author?.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {post.author?.title}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 flex items-center space-x-3">
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {formatDate(post.publishedAt)}
                              </span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime} min
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {featuredPosts.length > 0 && (
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-montserrat">
                Latest Articles
              </h2>
            )}
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="group">
                    <Link href={`/partnership/blog/${post.slug}`}>
                      <a className="block bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                        {post.featuredImage && (
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {post.category && (
                              <Badge 
                                className="absolute top-3 left-3 text-white text-xs font-medium"
                                style={{ backgroundColor: post.category.color }}
                              >
                                {post.category.name}
                              </Badge>
                            )}
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 font-montserrat group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p className="text-gray-600 text-sm mb-4 font-opensans leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}
                          
                          {/* Tags */}
                          {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-4">
                              {post.tags.slice(0, 3).map((tag) => (
                                <Badge 
                                  key={tag.slug} 
                                  variant="secondary" 
                                  className="text-xs"
                                >
                                  #{tag.name}
                                </Badge>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center space-x-2">
                              {post.author?.avatar && (
                                <img
                                  src={post.author.avatar}
                                  alt={post.author.name}
                                  className="w-6 h-6 rounded-full"
                                />
                              )}
                              <span>{post.author?.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span>{formatDate(post.publishedAt)}</span>
                              <span>•</span>
                              <span>{post.readTime} min</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-montserrat">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-opensans">
              Join leading organizations in their digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white px-8"
              >
                Explore Partnership
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}