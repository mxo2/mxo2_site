import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Building, GraduationCap } from "lucide-react";
import { type BlogPost } from "@shared/schema";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Determine icon based on post title/content
  const getPostIcon = (title: string) => {
    if (title.toLowerCase().includes("trading")) return TrendingUp;
    if (title.toLowerCase().includes("street") || title.toLowerCase().includes("municipal")) return Building;
    if (title.toLowerCase().includes("education") || title.toLowerCase().includes("campus")) return GraduationCap;
    return TrendingUp;
  };

  const IconComponent = getPostIcon(post.title);

  return (
    <Card className="bg-white shadow-lg overflow-hidden card-hover border-0">
      <div className="bg-gradient-to-br from-navy to-cyan h-48 flex items-center justify-center">
        <IconComponent className="w-16 h-16 text-white" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-montserrat font-bold text-xl text-navy mb-4 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <Link href={`/blog/${post.slug}`}>
          <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm flex items-center">
            Read More <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
}
