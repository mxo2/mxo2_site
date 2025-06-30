import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { 
  Calendar, 
  User, 
  ChevronRight,
  Linkedin, 
  Twitter, 
  Facebook, 
  Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
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

// Sample AI blog post with comprehensive content
const aiBlogPost: BlogPost = {
  id: 1,
  title: "AI-Powered Digital Transformation: How Machine Learning is Revolutionizing Enterprise Operations",
  slug: "ai-powered-digital-transformation",
  excerpt: "Discover how artificial intelligence and machine learning technologies are reshaping enterprise operations, driving efficiency, and creating competitive advantages in today's digital economy.",
  content: `
    <p>Artificial Intelligence has moved beyond the realm of science fiction to become a cornerstone of modern enterprise operations. From automating routine tasks to providing deep insights through data analysis, AI is fundamentally transforming how businesses operate, compete, and deliver value to customers.</p>

    <h2>The Current State of AI in Enterprise</h2>
    
    <p>Today's enterprises are leveraging AI technologies across multiple domains. Machine learning algorithms analyze vast datasets to uncover patterns and insights that would be impossible for human analysts to detect. Natural language processing enables intelligent customer service through chatbots and automated response systems. Computer vision technologies are revolutionizing quality control in manufacturing and retail operations.</p>
    
    <p>The adoption rate of AI technologies in enterprise environments has accelerated dramatically. According to recent industry research, over 80% of large enterprises have either implemented or are actively piloting AI solutions across their operations.</p>

    <h2>Key Areas of AI Implementation</h2>

    <h3>Predictive Analytics and Forecasting</h3>
    <p>AI-powered predictive analytics systems are transforming how enterprises approach planning and decision-making. By analyzing historical data, market trends, and external factors, these systems can forecast demand, predict equipment failures, and identify potential risks before they materialize.</p>
    
    <p>Manufacturing companies use predictive maintenance algorithms to reduce equipment downtime by up to 50%, while retail organizations leverage demand forecasting to optimize inventory levels and reduce waste.</p>

    <h3>Process Automation and Optimization</h3>
    <p>Robotic Process Automation (RPA) combined with AI capabilities is streamlining repetitive tasks across industries. Unlike traditional automation, AI-powered RPA can handle unstructured data, make decisions based on context, and adapt to changing conditions.</p>
    
    <p>Financial services organizations are using intelligent automation to process loan applications, detect fraudulent transactions, and ensure regulatory compliance. These systems can process thousands of transactions per hour with accuracy rates exceeding 99%.</p>

    <h3>Customer Experience Enhancement</h3>
    <p>AI is revolutionizing customer interactions through personalized experiences and intelligent support systems. Recommendation engines analyze customer behavior and preferences to suggest relevant products and services, while conversational AI platforms provide 24/7 customer support.</p>
    
    <p>E-commerce platforms using AI-powered personalization see conversion rate improvements of 15-30%, while companies implementing intelligent chatbots report customer satisfaction scores exceeding traditional support channels.</p>

    <h2>Implementation Challenges and Solutions</h2>

    <h3>Data Quality and Governance</h3>
    <p>The success of AI implementations heavily depends on data quality. Organizations must establish robust data governance frameworks, implement data cleaning processes, and ensure consistent data collection across all touchpoints.</p>
    
    <p>Successful AI projects typically invest 60-80% of their effort in data preparation and quality assurance. This includes establishing data pipelines, implementing validation rules, and creating standardized data formats across the organization.</p>

    <h3>Skills and Talent Acquisition</h3>
    <p>The AI talent shortage remains a significant challenge for many organizations. Companies are addressing this through a combination of hiring specialized talent, upskilling existing employees, and partnering with AI service providers.</p>
    
    <p>Leading organizations are creating internal AI centers of excellence, providing training programs for technical teams, and establishing partnerships with universities to develop AI talent pipelines.</p>

    <h3>Ethical AI and Responsible Implementation</h3>
    <p>As AI systems become more prevalent, organizations must address ethical considerations including bias prevention, transparency, and accountability. This requires establishing AI governance frameworks and implementing explainable AI technologies.</p>
    
    <p>Companies are developing AI ethics committees, implementing bias detection tools, and ensuring their AI systems provide explainable decisions, particularly in regulated industries like healthcare and financial services.</p>

    <h2>Measuring AI Success and ROI</h2>

    <p>Successful AI implementations require clear metrics and measurement frameworks. Organizations should establish baseline performance indicators before AI deployment and track improvements across multiple dimensions:</p>

    <ul>
      <li><strong>Operational Efficiency:</strong> Reduction in processing time, error rates, and manual effort</li>
      <li><strong>Revenue Impact:</strong> Increased sales conversion, customer retention, and new revenue streams</li>
      <li><strong>Cost Savings:</strong> Reduced operational costs, lower error correction expenses, and improved resource utilization</li>
      <li><strong>Customer Satisfaction:</strong> Improved service quality, faster response times, and personalized experiences</li>
    </ul>

    <p>Industry leaders report ROI from AI implementations ranging from 300% to 1000% within the first two years, with payback periods typically between 6-18 months for well-executed projects.</p>

    <h2>The Future of AI in Enterprise</h2>

    <h3>Emerging Technologies and Trends</h3>
    <p>The next wave of AI innovation will be driven by advances in several key areas. Generative AI technologies are enabling new forms of content creation and automated code generation. Federated learning approaches allow organizations to collaborate on AI model development while maintaining data privacy.</p>
    
    <p>Edge AI is bringing intelligence closer to data sources, enabling real-time decision making in IoT environments and reducing dependency on cloud connectivity. Quantum machine learning promises to solve complex optimization problems that are intractable with classical computing approaches.</p>

    <h3>Industry-Specific AI Solutions</h3>
    <p>AI adoption is becoming increasingly specialized by industry vertical. Healthcare organizations are leveraging AI for drug discovery, diagnostic imaging, and personalized treatment plans. Manufacturing companies are implementing AI-powered quality control and supply chain optimization.</p>
    
    <p>Financial services are using AI for algorithmic trading, risk assessment, and regulatory compliance. Retail organizations are deploying AI for inventory optimization, dynamic pricing, and personalized marketing campaigns.</p>

    <h2>Best Practices for AI Implementation</h2>

    <h3>Start with Clear Business Objectives</h3>
    <p>Successful AI projects begin with clearly defined business problems and measurable objectives. Organizations should identify specific pain points where AI can provide significant value and establish success metrics before beginning implementation.</p>

    <h3>Adopt a Phased Approach</h3>
    <p>Rather than attempting organization-wide AI transformation, successful companies start with pilot projects in specific departments or use cases. This allows for learning, refinement, and demonstration of value before scaling to broader implementations.</p>

    <h3>Invest in Infrastructure and Platforms</h3>
    <p>AI implementations require robust technical infrastructure including data storage, processing capabilities, and model deployment platforms. Organizations should invest in scalable cloud infrastructure and MLOps platforms to support long-term AI initiatives.</p>

    <h3>Foster a Data-Driven Culture</h3>
    <p>AI success requires cultural transformation alongside technological implementation. Organizations must foster data-driven decision making, encourage experimentation, and provide training to help employees work effectively with AI systems.</p>

    <h2>Conclusion: Embracing the AI-Powered Future</h2>

    <p>Artificial Intelligence is no longer a competitive advantage – it's becoming a competitive necessity. Organizations that successfully implement AI technologies will be better positioned to adapt to changing market conditions, serve customers more effectively, and operate more efficiently.</p>
    
    <p>The key to AI success lies not just in the technology itself, but in how organizations approach implementation: with clear objectives, robust data foundations, skilled teams, and a commitment to continuous learning and improvement.</p>
    
    <p>As AI technologies continue to evolve, enterprises that establish strong AI capabilities today will be best positioned to leverage future innovations and maintain competitive leadership in their respective markets.</p>
  `,
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
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;

  // For now, we'll use the sample AI blog post for any slug
  // In a real implementation, this would fetch from the API
  const post = aiBlogPost;

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

  // Sample recent posts for sidebar
  const recentPosts = [
    {
      id: 2,
      title: "Cloud Migration Strategies for Legacy Systems",
      slug: "cloud-migration-strategies",
      publishedAt: "2025-06-28T00:00:00Z",
      category: "Cloud Solutions",
      featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Remote Teams",
      slug: "cybersecurity-remote-teams",
      publishedAt: "2025-06-25T00:00:00Z",
      category: "Cybersecurity",
      featuredImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      title: "The Future of Robotic Process Automation",
      slug: "future-rpa",
      publishedAt: "2025-06-22T00:00:00Z",
      category: "Automation",
      featuredImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop"
    }
  ];

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
            {post.category?.name || "AI & Innovation"}
          </Link>
        </div>
      </div>

      {/* Main Article Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            {post.author && (
              <>
                <span>by</span>
                <span className="font-medium">
                  {post.author.name}{post.author.title && `, ${post.author.title}`}
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
              onClick={() => window.open(`https://twitter.com/share?url=${window.location.href}&text=${post.title}`, '_blank')}
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
            <span className="text-xs text-gray-500 ml-2">Link Copied!</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <img 
            src={post.featuredImage} 
            alt={post.title}
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
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:text-gray-700 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Article Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200 not-prose">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
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
                {recentPosts.map((recentPost) => (
                  <article key={recentPost.id} className="group">
                    <div className="flex items-start space-x-3">
                      {recentPost.featuredImage && (
                        <img 
                          src={recentPost.featuredImage} 
                          alt={recentPost.title}
                          className="w-16 h-16 object-cover rounded flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-[hsl(208,70%,56%)] mb-1">
                          {recentPost.category}
                        </div>
                        <Link 
                          href={`/blog/${recentPost.slug}`}
                          className="block"
                        >
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[hsl(354,87%,51%)] line-clamp-2 mb-1">
                            {recentPost.title}
                          </h4>
                        </Link>
                        <time className="text-xs text-gray-500">
                          {formatDate(recentPost.publishedAt)}
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
                {["AI & Innovation", "Cloud Solutions", "Cybersecurity", "Automation", "Digital Transformation"].map((category) => (
                  <Link 
                    key={category} 
                    href={`/blog?category=${category}`}
                    className="block text-sm text-gray-700 hover:text-[hsl(354,87%,51%)] hover:bg-white px-3 py-2 rounded transition-colors"
                  >
                    {category}
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