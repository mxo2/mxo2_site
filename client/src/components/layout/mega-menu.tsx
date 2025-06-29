import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  if (!isOpen) return null;

  const menuData = {
    sections: [
      {
        title: "Services",
        categories: [
          {
            category: "Cloud",
            items: [
              { name: "Cloud Migration", href: "/cloud-migration", description: "Seamless, secure transitions to Azure and AWS environments." },
              { name: "Cloud Optimization", href: "/services/cloud-optimization", description: "Enhance performance and reduce cloud infrastructure costs." },
              { name: "Cloud Cost Audit (Cloud CA)", href: "/services/cloud-audit", description: "Detailed audits ensuring financial transparency and cost-efficiency." },
              { name: "Managed Cloud Services", href: "/services/managed-cloud", description: "Full lifecycle management for infrastructure and apps in the cloud." }
            ]
          },
          {
            category: "AI & IoT",
            items: [
              { name: "Robotic Process Automation (RPA)", href: "/services/rpa", description: "Automate repetitive tasks with intelligent bots." },
              { name: "AI Model Integration", href: "/services/ai-integration", description: "Deploy NLP, prediction, and classification models in production." },
              { name: "Data Analytics & Insights", href: "/services/data-analytics", description: "Derive actionable intelligence from structured and unstructured data." },
              { name: "IoT Architecture Design", href: "/services/iot-architecture", description: "Build connected systems for real-time monitoring and control." }
            ]
          },
          {
            category: "Applications",
            items: [
              { name: "Legacy Application Modernization", href: "/services/legacy-modernization", description: "Upgrade outdated software to modern, scalable platforms." },
              { name: "SaaS Application Development", href: "/services/saas-development", description: "Design, build, and manage scalable multi-tenant SaaS platforms." },
              { name: "Workflow Automation", href: "/services/workflow-automation", description: "Digitize manual business processes to enhance productivity." },
              { name: "ERP Implementation", href: "/services/erp-implementation", description: "Deploy and tailor ERP systems for manufacturing, education, government." },
              { name: "Ecommerce Development", href: "/services/ecommerce", description: "Build secure, high-performance online storefronts with integrated payments." }
            ]
          }
        ]
      },
      {
        title: "Technology",
        categories: [
          {
            category: "Cloud Platforms",
            items: [
              { name: "Microsoft Azure", href: "/technology/azure", description: "Scalable, enterprise-grade cloud for all workloads." },
              { name: "Amazon Web Services (AWS)", href: "/technology/aws", description: "Trusted cloud platform for compute, storage, and analytics." },
              { name: "DevOps & CI/CD", href: "/technology/devops", description: "Automate builds, deployments, and infrastructure with best practices." },
              { name: "Terraform / Docker / Kubernetes", href: "/technology/infrastructure", description: "Tools for orchestrating and managing cloud-native environments." }
            ]
          },
          {
            category: "AI & Data",
            items: [
              { name: "OpenAI / TensorFlow / Scikit-Learn", href: "/technology/ai-frameworks", description: "AI model training and inference frameworks." },
              { name: "MQTT / Edge Devices / REST", href: "/technology/iot", description: "Protocols and systems for efficient communication." },
              { name: "Power BI / Looker / Pandas", href: "/technology/analytics", description: "Visualization and analytical tools for data-rich dashboards." }
            ]
          },
          {
            category: "Development",
            items: [
              { name: "Frontend Frameworks", href: "/technology/frontend", description: "React.js / Vue.js / Next.js – Build dynamic, responsive interfaces with modern JavaScript stacks." },
              { name: "Backend Technologies", href: "/technology/backend", description: "Node.js / Django / Frappe / Laravel– Secure and scalable server-side frameworks for high-load applications." },
              { name: "ERP Platform", href: "/technology/erp", description: "Powerful open-source ERP system tailored for industries like manufacturing, education, and public services." },
              { name: "Database Systems", href: "/technology/databases", description: "PostgreSQL / MariaDB / MongoDB / Redis – Robust, scalable data storage options for structured and unstructured data." }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-16">
          {menuData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="font-montserrat font-bold text-xl text-gray-900 mb-6 text-center underline decoration-[hsl(354,87%,51%)] decoration-2">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {section.categories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-3">
                    <h3 className="font-montserrat font-bold text-base text-gray-900 border-b border-[hsl(354,87%,51%)] pb-1">
                      {category.category}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link href={item.href}>
                            <a className="group block text-gray-700 hover:text-[hsl(354,87%,51%)] transition-colors font-opensans">
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
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-600 font-opensans">
                <span className="font-semibold text-gray-900">Need help choosing?</span> Our experts can guide you to the right solution.
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/contact">
                <a className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white px-6 py-2 rounded-md font-opensans font-medium transition-colors">
                  Talk to an Expert
                </a>
              </Link>
              <Link href="/solutions">
                <a className="text-[hsl(220,72%,44%)] hover:text-[hsl(220,72%,35%)] font-opensans font-medium transition-colors">
                  View All Solutions →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}