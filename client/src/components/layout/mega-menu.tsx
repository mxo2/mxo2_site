import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface MegaMenuProps {
  isOpen: boolean;
  activeMenu: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MegaMenu({ isOpen, activeMenu, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState("Cloud");
  
  if (!isOpen) return null;

  // Products data
  const products = [
    {
      name: "mxO₂ Workspace",
      href: "/workspace",
      description: "Complete business communication platform with email, calendar, and collaboration tools",
      icon: "💼"
    },
    {
      name: "Street Sync",
      href: "/products/street-sync",
      description: "Smart traffic management and urban mobility solutions",
      icon: "🚦"
    },
    {
      name: "Parallel Campus AI",
      href: "/products/parallel-campus", 
      description: "AI-powered education platform for intelligent learning",
      icon: "🎓"
    },
    {
      name: "Industrial ERP",
      href: "/products/industrial-erp",
      description: "Enterprise resource planning for manufacturing excellence",
      icon: "🏭"
    },
    {
      name: "CRM",
      href: "/products/crm",
      description: "Customer relationship management with AI insights",
      icon: "👥"
    }
  ];

  // Render Products menu
  if (activeMenu === "Products") {
    return (
      <div
        className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-2xl border border-gray-200 rounded-lg z-40 min-w-[800px] max-w-4xl"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="px-6 py-6">
          <div className="mb-6">
            <h2 className="font-opensans font-bold text-lg text-gray-900 mb-2 uppercase tracking-wide">
              PRODUCTS
            </h2>
            <p className="text-sm text-gray-600">Innovative solutions designed to transform your business operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <Link 
                key={product.name} 
                href={product.href}
                className="group block"
              >
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl flex-shrink-0">{product.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-[hsl(208,70%,56%)] group-hover:text-[hsl(354,87%,51%)] transition-colors mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <div className="flex items-center justify-center space-x-4">
              <Link 
                href="/contact"
                className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white px-4 py-2 rounded-md font-opensans font-medium transition-colors text-sm"
              >
                Talk to an Expert
              </Link>
              <Link 
                href="/products"
                className="text-[hsl(220,72%,44%)] hover:text-[hsl(220,72%,35%)] font-opensans font-medium transition-colors text-sm"
              >
                View All Products →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Solutions menu (default)
  if (activeMenu === "Solutions" || activeMenu === null) {
    const menuData = {
      "Cloud": {
        services: [
          { name: "Cloud Migration", href: "/cloud-migration", description: "Seamless, secure transitions to Azure and AWS environments." },
          { name: "Cloud Optimization", href: "/services/cloud-optimization", description: "Enhance performance and reduce cloud infrastructure costs." },
          { name: "Cloud Cost Audit (Cloud CA)", href: "/services/cloud-audit", description: "Detailed audits ensuring financial transparency and cost-efficiency." },
          { name: "Managed Cloud Services", href: "/services/managed-cloud", description: "Full lifecycle management for infrastructure and apps in the cloud." }
        ],
        technologies: [
          { name: "Microsoft Azure", href: "/technology/azure", description: "Scalable, enterprise-grade cloud for all workloads." },
          { name: "Amazon Web Services (AWS)", href: "/technology/aws", description: "Trusted cloud platform for compute, storage, and analytics." },
          { name: "DevOps & CI/CD", href: "/technology/devops", description: "Automate builds, deployments, and infrastructure with best practices." },
          { name: "Terraform / Docker / Kubernetes", href: "/technology/infrastructure", description: "Tools for orchestrating and managing cloud-native environments." }
        ]
      },
      "AI & IoT": {
        services: [
          { name: "Robotic Process Automation (RPA)", href: "/services/rpa", description: "Automate repetitive tasks with intelligent bots." },
          { name: "AI Model Integration", href: "/services/ai-integration", description: "Deploy NLP, prediction, and classification models in production." },
          { name: "Trading Automation Platform", href: "/services/trading-automation", description: "Automate trading strategies across Python, AmiBroker, TradingView, and Excel." },
          { name: "Data Analytics & Insights", href: "/services/data-analytics", description: "Derive actionable intelligence from structured and unstructured data." },
          { name: "IoT Architecture Design", href: "/services/iot-architecture", description: "Build connected systems for real-time monitoring and control." }
        ],
        technologies: [
          { name: "OpenAI / TensorFlow / Scikit-Learn", href: "/technology/ai-frameworks", description: "AI model training and inference frameworks." },
          { name: "MQTT / Edge Devices / REST", href: "/technology/iot", description: "Protocols and systems for efficient communication." },
          { name: "Power BI / Looker / Pandas", href: "/technology/analytics", description: "Visualization and analytical tools for data-rich dashboards." }
        ]
      },
      "Applications": {
        services: [
          { name: "Legacy Application Modernization", href: "/services/legacy-modernization", description: "Upgrade outdated software to modern, scalable platforms." },
          { name: "SaaS Application Development", href: "/services/saas-development", description: "Design, build, and manage scalable multi-tenant SaaS platforms." },
          { name: "Workflow Automation", href: "/services/workflow-automation", description: "Digitize manual business processes to enhance productivity." },
          { name: "ERP Implementation", href: "/services/erp-implementation", description: "Deploy and tailor ERP systems for manufacturing, education, government." }
        ],
        technologies: [
          { name: "Frontend Frameworks", href: "/technology/frontend", description: "React.js / Vue.js / Next.js – Build dynamic, responsive interfaces with modern JavaScript stacks." },
          { name: "Backend Technologies", href: "/technology/backend", description: "Node.js / Django / Frappe / Laravel– Secure and scalable server-side frameworks for high-load applications." },
          { name: "ERP Platform", href: "/technology/erp", description: "Powerful open-source ERP system tailored for industries like manufacturing, education, and public services." },
          { name: "Database Systems", href: "/technology/databases", description: "PostgreSQL / MariaDB / MongoDB / Redis – Robust, scalable data storage options for structured and unstructured data." }
        ]
      }
    };

    return (
      <div
        className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-2xl border border-gray-200 rounded-lg z-40 min-w-[800px] max-w-4xl"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="px-6 py-6">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              {Object.keys(menuData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 border font-montserrat font-medium transition-colors ${
                    activeTab === tab
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-800 text-gray-800 hover:border-blue-600 hover:text-blue-600 bg-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services Column */}
            <div>
              <h3 className="font-opensans font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">
                Services
              </h3>
              <ul className="space-y-3">
                {menuData[activeTab as keyof typeof menuData].services.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className="group block text-gray-700 hover:text-[hsl(354,87%,51%)] transition-colors font-opensans"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <span className="text-sm font-semibold block text-[hsl(208,70%,56%)] group-hover:text-[hsl(354,87%,51%)]">
                            {item.name}
                          </span>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity mt-1 ml-2 flex-shrink-0" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Column */}
            <div>
              <h3 className="font-opensans font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">
                Technologies
              </h3>
              <ul className="space-y-3">
                {menuData[activeTab as keyof typeof menuData].technologies.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className="group block text-gray-700 hover:text-[hsl(354,87%,51%)] transition-colors font-opensans"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <span className="text-sm font-semibold block text-[hsl(208,70%,56%)] group-hover:text-[hsl(354,87%,51%)]">
                            {item.name}
                          </span>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity mt-1 ml-2 flex-shrink-0" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <div className="flex items-center justify-center space-x-4">
              <Link 
                href="/contact"
                className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white px-4 py-2 rounded-md font-opensans font-medium transition-colors text-sm"
              >
                Talk to an Expert
              </Link>
              <Link 
                href="/solutions"
                className="text-[hsl(220,72%,44%)] hover:text-[hsl(220,72%,35%)] font-opensans font-medium transition-colors text-sm"
              >
                View All Solutions →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Blogs menu
  if (activeMenu === "Blogs") {
    const blogArticles = [
      {
        title: "AI-Powered Digital Transformation: How Machine Learning is Revolutionizing Enterprise Operations",
        href: "/blog/ai-powered-digital-transformation",
        category: "AI & Innovation",
        readTime: "12 min read",
        date: "June 30, 2025",
        excerpt: "Discover how artificial intelligence and machine learning technologies are reshaping enterprise operations, driving efficiency, and creating competitive advantages."
      },
      {
        title: "AI-Powered Cloud Migration: Reducing Costs by 40% with Intelligent Automation",
        href: "/blog/ai-cloud-migration-automation", 
        category: "Cloud Migration",
        readTime: "15 min read",
        date: "June 28, 2025",
        excerpt: "Learn how AI-driven automation transforms cloud migration strategies, delivering significant cost savings and improved performance."
      },
      {
        title: "Robotic Process Automation: Transforming Manufacturing Operations with AI",
        href: "/blog/rpa-manufacturing-ai",
        category: "Robotics & AI", 
        readTime: "18 min read",
        date: "June 25, 2025",
        excerpt: "Explore how intelligent RPA solutions are revolutionizing manufacturing processes, improving quality control, and driving operational efficiency."
      },
      {
        title: "Multi-Cloud Strategy: How AI Orchestration Optimizes Workload Distribution",
        href: "/blog/ai-multi-cloud-orchestration",
        category: "AI Solutions",
        readTime: "16 min read", 
        date: "June 22, 2025",
        excerpt: "Discover how AI-powered multi-cloud orchestration delivers optimal performance and cost efficiency by intelligently distributing workloads."
      }
    ];

    const blogCategories = [
      { name: "AI & Innovation", count: 12, href: "/blog?category=ai-innovation" },
      { name: "Cloud Migration", count: 8, href: "/blog?category=cloud-migration" },
      { name: "Robotics & AI", count: 15, href: "/blog?category=robotics-ai" },
      { name: "Cybersecurity", count: 6, href: "/blog?category=cybersecurity" },
      { name: "Digital Transformation", count: 10, href: "/blog?category=digital-transformation" }
    ];

    return (
      <div
        className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-2xl border border-gray-200 rounded-lg z-40 min-w-[900px] max-w-5xl"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="px-6 py-6">
          <div className="mb-6">
            <h2 className="font-opensans font-bold text-lg text-gray-900 mb-2 uppercase tracking-wide">
              BLOG & INSIGHTS
            </h2>
            <p className="text-sm text-gray-600">Expert perspectives on AI, cloud migration, and digital transformation</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Articles */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-sm text-gray-900 mb-4 uppercase tracking-wide">Latest Articles</h3>
              <div className="space-y-4">
                {blogArticles.map((article) => (
                  <Link 
                    key={article.href} 
                    href={article.href}
                    className="group block"
                  >
                    <div className="flex flex-col space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="bg-[hsl(208,70%,56%)] text-white px-2 py-1 rounded text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-gray-500">{article.readTime}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">{article.date}</span>
                      </div>
                      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-[hsl(354,87%,51%)] transition-colors leading-tight">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories & Actions */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-4 uppercase tracking-wide">Categories</h3>
                <div className="space-y-2">
                  {blogCategories.map((category) => (
                    <Link 
                      key={category.name} 
                      href={category.href}
                      className="flex items-center justify-between py-2 px-3 rounded hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-sm text-gray-700 group-hover:text-[hsl(354,87%,51%)] transition-colors">
                        {category.name}
                      </span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="space-y-3">
                  <Link 
                    href="/blog"
                    className="block w-full bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white px-4 py-2 rounded-md font-opensans font-medium transition-colors text-sm text-center"
                  >
                    View All Articles
                  </Link>
                  <Link 
                    href="/contact"
                    className="block w-full text-[hsl(220,72%,44%)] hover:text-[hsl(220,72%,35%)] font-opensans font-medium transition-colors text-sm text-center"
                  >
                    Subscribe to Newsletter →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}