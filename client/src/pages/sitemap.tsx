import { Link } from "wouter";
import { ExternalLink, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function Sitemap() {
  const siteStructure = {
    "Main Pages": [
      { title: "Home", url: "/", description: "AI-powered digital transformation solutions for enterprises" },
      { title: "About Us", url: "/about", description: "Learn about our team, mission, and company values" },
      { title: "Contact", url: "/contact", description: "Get in touch with our global team for consultation" }
    ],
    "Solutions": [
      { title: "Solutions Overview", url: "/solutions", description: "Comprehensive enterprise technology solutions" },
      { title: "Cloud Solutions", url: "/solutions/cloud", description: "Cloud migration, optimization, and managed services" },
      { title: "Applications", url: "/solutions/applications", description: "Legacy modernization and SaaS development" },
      { title: "AI & IoT", url: "/solutions/ai-iot", description: "AI integration and IoT architecture solutions" },
      { title: "Cloud Optimization", url: "/solutions/cloud-optimization", description: "Maximize cloud potential and reduce costs" },
      { title: "Robotic Process Automation", url: "/solutions/rpa", description: "Intelligent automation for business processes" },
      { title: "Legacy Modernization", url: "/solutions/legacy-modernization", description: "Transform legacy applications for modern needs" }
    ],
    "Products": [
      { title: "mxO₂ Workspace", url: "/workspace", description: "Enterprise email and collaboration platform" }
    ],
    "Industries": [
      { title: "Industry Solutions", url: "/industries", description: "Specialized solutions for various industries" }
    ],
    "Blog & Insights": [
      { title: "Blog Home", url: "/blog", description: "Latest insights on digital transformation and AI" },
      { title: "AI-Powered Digital Transformation", url: "/blog/ai-powered-digital-transformation", description: "Comprehensive guide to enterprise AI transformation" },
      { title: "AI-Powered Cloud Migration", url: "/blog/ai-powered-cloud-migration", description: "How AI reduces cloud migration costs by 40%" },
      { title: "RPA in Manufacturing", url: "/blog/robotic-process-automation-manufacturing", description: "Robotic process automation strategies for manufacturing" },
      { title: "Multi-Cloud Strategy", url: "/blog/multi-cloud-strategy-ai-orchestration", description: "AI orchestration in multi-cloud environments" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Sitemap - mxO₂ Website Navigation | All Pages & Content"
        description="Complete sitemap of mxO₂ website including all pages, solutions, products, blog articles, and resources for digital transformation services."
        keywords="mxO2 sitemap, website navigation, site structure, digital transformation pages, AI solutions content, enterprise services map"
        ogTitle="mxO₂ Sitemap - Complete Website Navigation"
        ogDescription="Explore all pages and content on mxO₂ website. Find solutions, products, blog insights, and resources for enterprise digital transformation."
      />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-opensans font-bold text-4xl lg:text-6xl mb-6 text-white">
              Website <span className="text-cyan-400">Sitemap</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed font-opensans">
              Navigate through all pages and content on the mx<span className="text-cyan-400">O₂</span> website
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {Object.entries(siteStructure).map(([section, pages]) => (
              <div key={section} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-opensans border-b-2 border-cyan-500 pb-4">
                  {section}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pages.map((page, index) => (
                    <Link 
                      key={index} 
                      href={page.url}
                      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 hover:border-cyan-500"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 font-opensans">
                          {page.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-cyan-500 flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-gray-600 text-sm font-opensans leading-relaxed">
                        {page.description}
                      </p>
                      <div className="mt-4 text-cyan-600 text-sm font-medium">
                        {page.url}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XML Sitemap Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-opensans">
              XML Sitemap for Search Engines
            </h2>
            <p className="text-gray-600 mb-8 font-opensans">
              For SEO purposes and search engine crawling, you can access our XML sitemap file.
            </p>
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View XML Sitemap
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-opensans font-bold text-3xl lg:text-4xl mb-6 text-white">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto font-opensans">
              Can't find what you're looking for? Our team is here to help you navigate our solutions and find the right fit for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-opensans font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Contact Our Team
                </button>
              </Link>
              <Link href="/blog">
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-opensans font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Read Our Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}