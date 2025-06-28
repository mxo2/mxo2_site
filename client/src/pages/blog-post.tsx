import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Calendar, User, TrendingUp, Building, GraduationCap } from "lucide-react";
import { type BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${slug}`],
    enabled: !!slug,
  });

  // Fallback content for the actual blog posts
  const fallbackPosts: Record<string, BlogPost> = {
    "revolutionizing-retail-trading": {
      id: 1,
      title: "Revolutionizing Retail Trading: Inside MXO2's Powerful Multi-Platform Algo Trading System",
      excerpt: "Discover how our algorithmic trading platform transforms retail trading with advanced automation and real-time analytics.",
      slug: "revolutionizing-retail-trading",
      content: `
        <h2>The Evolution of Algorithmic Trading</h2>
        <p>The financial trading landscape has undergone a dramatic transformation in recent years. What was once dominated by large institutional players with access to sophisticated trading systems is now increasingly accessible to retail traders through advanced algorithmic trading platforms.</p>
        
        <p>At MXO2, we've developed a comprehensive multi-platform algorithmic trading system that democratizes access to professional-grade trading tools while maintaining the robustness and reliability required for financial markets.</p>
        
        <h2>Key Features of Our Trading Platform</h2>
        <p>Our algorithmic trading system incorporates several cutting-edge features:</p>
        <ul>
          <li><strong>Real-time Market Analysis:</strong> Advanced algorithms continuously analyze market conditions, identifying opportunities and potential risks.</li>
          <li><strong>Multi-Asset Support:</strong> Trade across various asset classes including stocks, forex, commodities, and cryptocurrencies.</li>
          <li><strong>Risk Management:</strong> Sophisticated risk management tools help protect capital and optimize returns.</li>
          <li><strong>Backtesting Capabilities:</strong> Test strategies against historical data before deploying them in live markets.</li>
        </ul>
        
        <h2>Technology Stack</h2>
        <p>Our platform leverages modern technologies to ensure reliability, speed, and scalability:</p>
        <ul>
          <li>Cloud-native architecture for global accessibility</li>
          <li>Machine learning algorithms for pattern recognition</li>
          <li>Real-time data processing engines</li>
          <li>Advanced security protocols for financial data protection</li>
        </ul>
        
        <h2>Impact and Results</h2>
        <p>Since its launch, our algorithmic trading platform has processed millions of transactions, helping retail traders achieve better outcomes through systematic, emotion-free trading approaches. The platform's performance metrics demonstrate significant improvements in trading efficiency and risk-adjusted returns.</p>
        
        <p>As we continue to evolve the platform, we remain committed to making sophisticated trading tools accessible to traders of all levels while maintaining the highest standards of security and reliability.</p>
      `,
      featuredImage: null,
      authorId: 1,
      published: true,
      createdAt: new Date("2025-05-24"),
      updatedAt: new Date("2025-05-24"),
    },
    "smart-streets-jaisalmer-streetsync": {
      id: 2,
      title: "Smart Streets of Jaisalmer: How StreetSync Is Powering GPS-Based Municipal Workforce Management",
      excerpt: "Explore how StreetSync revolutionizes municipal operations with GPS tracking and workforce optimization.",
      slug: "smart-streets-jaisalmer-streetsync",
      content: `
        <h2>A Government Initiative for Digital Transformation</h2>
        <p>StreetSync was born from a collaborative effort between progressive government officials and technology experts. Implemented under a government directive in partnership with IITian-led IAS officers, this innovative system addresses the critical need for transparency and efficiency in municipal workforce management.</p>
        
        <p>The city of Jaisalmer, known for its rich cultural heritage, has become a pioneer in adopting digital solutions for municipal operations, setting an example for other cities across India.</p>
        
        <h2>Key Features of StreetSync</h2>
        <p>StreetSync incorporates several advanced features designed specifically for municipal workforce management:</p>
        <ul>
          <li><strong>Real-time GPS Tracking:</strong> Monitor the location and movement of field workers in real-time</li>
          <li><strong>Geo-fenced Attendance:</strong> Automated attendance marking when workers enter designated work areas</li>
          <li><strong>Daily Activity Monitoring:</strong> Track and record daily tasks and activities performed by each worker</li>
          <li><strong>Performance Analytics:</strong> Generate insights on workforce productivity and efficiency</li>
          <li><strong>Transparent Reporting:</strong> Provide detailed reports to municipal authorities and citizens</li>
        </ul>
        
        <h2>Implementation Challenges and Solutions</h2>
        <p>Implementing a digital solution in municipal operations required addressing several challenges:</p>
        <ul>
          <li><strong>Technology Adoption:</strong> Training sanitation workers to use mobile devices and GPS systems</li>
          <li><strong>Data Privacy:</strong> Ensuring worker privacy while maintaining operational transparency</li>
          <li><strong>Infrastructure:</strong> Establishing reliable connectivity across urban wards</li>
          <li><strong>Change Management:</strong> Gaining buy-in from both workers and management</li>
        </ul>
        
        <h2>Measurable Impact</h2>
        <p>The deployment of StreetSync has yielded significant improvements:</p>
        <ul>
          <li>40% reduction in absenteeism among sanitation workers</li>
          <li>Enhanced transparency in municipal operations</li>
          <li>Improved public satisfaction with cleanliness services</li>
          <li>Data-driven decision making for resource allocation</li>
          <li>Better accountability and performance tracking</li>
        </ul>
        
        <h2>Future Expansion</h2>
        <p>Based on the success in Jaisalmer, StreetSync is being evaluated for implementation in other municipalities. The system's modular design allows for customization based on local requirements and operational needs.</p>
        
        <p>This initiative demonstrates how technology can transform public services, creating more efficient, transparent, and accountable municipal operations that ultimately benefit citizens and improve quality of life.</p>
      `,
      featuredImage: null,
      authorId: 1,
      published: true,
      createdAt: new Date("2025-05-24"),
      updatedAt: new Date("2025-05-24"),
    },
    "empowering-families-students-ai-parallel-campus": {
      id: 3,
      title: "Empowering Families and Students with AI: The Future of Parenting and Learning Begins at Parallel Campus",
      excerpt: "Learn how AI transforms education through personalized learning experiences and intelligent support systems.",
      slug: "empowering-families-students-ai-parallel-campus",
      content: `
        <h2>From ERP to AI-Powered Ecosystem</h2>
        <p>Parallel Campus began its journey as a comprehensive School ERP platform, designed to streamline academic operations, administration, and communication. However, recognizing the transformative potential of artificial intelligence in education, we evolved the platform into something much more ambitious: an AI-powered ecosystem that empowers teachers, parents, and students alike.</p>
        
        <h2>AI Tools for Modern Teaching</h2>
        <p>Teachers are at the heart of the educational process, and Parallel Campus provides them with intelligent tools to enhance their effectiveness:</p>
        <ul>
          <li><strong>Smart Classroom Planning:</strong> AI assists in creating lesson plans tailored to student learning patterns and curriculum requirements</li>
          <li><strong>Student Performance Tracking:</strong> Advanced analytics identify students who may need additional support or are ready for advanced challenges</li>
          <li><strong>Automated Reporting:</strong> Generate comprehensive progress reports with insights and recommendations</li>
          <li><strong>Content Personalization:</strong> Suggest teaching materials and activities based on individual student needs</li>
        </ul>
        
        <h2>Empowering Parents with AI Insights</h2>
        <p>Parenting in the digital age requires new tools and insights. Parallel Campus provides parents with:</p>
        <ul>
          <li><strong>Behavioral Insights:</strong> Understanding patterns in their child's academic and social behavior</li>
          <li><strong>Learning Analytics:</strong> Detailed analysis of learning progress and areas for improvement</li>
          <li><strong>AI-Driven Parenting Support:</strong> Personalized recommendations for supporting their child's development</li>
          <li><strong>Communication Enhancement:</strong> Better tools for staying connected with teachers and school administrators</li>
        </ul>
        
        <h2>Student-Centric AI Learning</h2>
        <p>Students benefit from AI copilots that provide:</p>
        <ul>
          <li><strong>Self-Learning Assistance:</strong> Intelligent tutoring systems that adapt to individual learning styles</li>
          <li><strong>Content Summarization:</strong> AI helps distill complex information into digestible summaries</li>
          <li><strong>Interactive Study Support:</strong> Engaging, personalized study sessions that make learning enjoyable</li>
          <li><strong>Progress Tracking:</strong> Real-time feedback on academic performance and study habits</li>
        </ul>
        
        <h2>The Technology Behind the Magic</h2>
        <p>Parallel Campus leverages cutting-edge AI technologies:</p>
        <ul>
          <li>Natural Language Processing for content analysis and generation</li>
          <li>Machine Learning algorithms for personalized learning paths</li>
          <li>Predictive analytics for early intervention</li>
          <li>Computer vision for automated assessment and engagement tracking</li>
        </ul>
        
        <h2>Impact on Educational Outcomes</h2>
        <p>Early implementations of Parallel Campus have shown promising results:</p>
        <ul>
          <li>Improved student engagement and learning outcomes</li>
          <li>Enhanced parent involvement in their child's education</li>
          <li>More efficient administrative processes for schools</li>
          <li>Data-driven insights leading to better educational strategies</li>
        </ul>
        
        <h2>The Future of Connected Education</h2>
        <p>Parallel Campus represents our vision of the future: a connected, data-informed educational experience that adapts to the needs of modern learning environments. By combining traditional ERP functionality with intelligent automation and generative AI, we're creating a platform that not only manages education but actively enhances it.</p>
        
        <p>As we continue to develop and refine these AI capabilities, our goal remains clear: to empower every stakeholder in the educational process with the tools and insights they need to succeed in an increasingly complex world.</p>
      `,
      featuredImage: null,
      authorId: 1,
      published: true,
      createdAt: new Date("2025-05-24"),
      updatedAt: new Date("2025-05-24"),
    }
  };

  const displayPost = post || (slug ? fallbackPosts[slug] : null);

  const getPostIcon = (title: string) => {
    if (title.toLowerCase().includes("trading")) return TrendingUp;
    if (title.toLowerCase().includes("street") || title.toLowerCase().includes("municipal")) return Building;
    if (title.toLowerCase().includes("education") || title.toLowerCase().includes("campus")) return GraduationCap;
    return TrendingUp;
  };

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-4"></div>
              <div className="h-64 bg-gray-300 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!displayPost) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Post not found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = getPostIcon(displayPost.title);

  return (
    <div className="py-20">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="text-navy hover:text-cyan">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <header className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-cyan w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-montserrat font-bold text-3xl lg:text-5xl mb-6 leading-tight">
              {displayPost.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {displayPost.excerpt}
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-300">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(displayPost.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>MXO2 Team</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8 lg:p-12">
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-montserrat prose-headings:text-navy prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:text-gray-600 prose-li:text-gray-600"
                  dangerouslySetInnerHTML={{ __html: displayPost.content }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-2xl text-navy mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.values(fallbackPosts)
                .filter(p => p.slug !== slug)
                .slice(0, 2)
                .map((relatedPost) => {
                  const RelatedIcon = getPostIcon(relatedPost.title);
                  return (
                    <Card key={relatedPost.id} className="bg-white shadow-lg card-hover border-0">
                      <CardContent className="p-6">
                        <div className="bg-gradient-to-br from-navy to-cyan h-32 rounded-lg mb-4 flex items-center justify-center">
                          <RelatedIcon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="font-montserrat font-semibold text-lg text-navy mb-3 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors text-sm">
                            Read More →
                          </a>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
