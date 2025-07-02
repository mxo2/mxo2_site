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
    services: [
      {
        category: "Data Engineering",
        items: [
          { name: "Data Strategy and Consulting", href: "/services/data-strategy" },
          { name: "ETL/ELT Modernization", href: "/services/etl-modernization" },
          { name: "Enterprise Data Analytics", href: "/services/enterprise-analytics" },
          { name: "Data Integration & Governance", href: "/services/data-integration" },
          { name: "AI-Powered DataOps", href: "/services/dataops" }
        ]
      },
      {
        category: "Artificial Intelligence & ML",
        items: [
          { name: "Generative AI Solutions", href: "/services/generative-ai" },
          { name: "AIOps", href: "/services/aiops" },
          { name: "Predictive Analytics", href: "/services/predictive-analytics" },
          { name: "Computer Vision", href: "/services/computer-vision" },
          { name: "AI-Powered Migrations", href: "/services/ai-migrations" }
        ]
      },
      {
        category: "Cloud Infrastructure",
        items: [
          { name: "Cloud Migration", href: "/services/cloud-migration" },
          { name: "Enterprise Landing Zone", href: "/services/enterprise-zone" },
          { name: "Security & Compliance", href: "/services/security" },
          { name: "DevOps & Automation", href: "/services/devops" },
          { name: "Multi-Cloud Strategy", href: "/services/multi-cloud" }
        ]
      },
      {
        category: "Business Intelligence",
        items: [
          { name: "Power BI Solutions", href: "/services/power-bi" },
          { name: "Advanced Analytics", href: "/services/advanced-analytics" },
          { name: "Real-time Dashboards", href: "/services/dashboards" },
          { name: "Self-Service BI", href: "/services/self-service-bi" },
          { name: "Data Visualization", href: "/services/data-viz" }
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
        <div className="grid grid-cols-4 gap-8">
          {menuData.services.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-montserrat font-bold text-lg text-gray-900 border-b border-[hsl(354,87%,51%)] pb-2">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href}>
                      <a className="group flex items-center justify-between text-gray-700 hover:text-[hsl(354,87%,51%)] transition-colors font-opensans">
                        <span className="text-sm">{item.name}</span>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
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