import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function MegaMenu() {
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Column 1 - Solutions by Technology */}
          <div>
            <h3 className="font-opensans font-semibold text-lg text-gray-900 mb-4 tracking-wide">Solutions by Technology</h3>
            <div className="space-y-3">
              <div>
                <Link href="/solutions/cloud">
                  <div className="group/item cursor-pointer">
                    <h4 className="font-opensans font-medium text-base text-blue-600 group-hover/item:text-red-600 transition-colors mb-1">
                      Cloud
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed pr-4">
                      Enable cloud adoption and transformation
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="/solutions/applications">
                  <div className="group/item cursor-pointer">
                    <h4 className="font-opensans font-medium text-base text-blue-600 group-hover/item:text-red-600 transition-colors mb-1">
                      Applications
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed pr-4">
                      Deploy cloud native and SaaS solutions
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="/solutions/ai">
                  <div className="group/item cursor-pointer">
                    <h4 className="font-opensans font-medium text-base text-blue-600 group-hover/item:text-red-600 transition-colors mb-1">
                      AI
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed pr-4">
                      Accelerate secure, responsible AI adoption
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="/solutions/data">
                  <div className="group/item cursor-pointer">
                    <h4 className="font-opensans font-medium text-base text-blue-600 group-hover/item:text-red-600 transition-colors mb-1">
                      Data
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed pr-4">
                      Gain actionable insights with data management
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="/solutions/cybersecurity">
                  <div className="group/item cursor-pointer">
                    <h4 className="font-opensans font-medium text-base text-blue-600 group-hover/item:text-red-600 transition-colors mb-1">
                      Cyber Security & Resilience
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed pr-4">
                      Evolve from monitoring to automating
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2 - Solutions by Industry */}
          <div>
            <h3 className="font-opensans font-semibold text-lg text-gray-900 mb-4 tracking-wide">Solutions by Industry</h3>
            <div className="space-y-3">
              <div>
                <Link href="/industries/financial-services">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Financial Services
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/industries/healthcare">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Healthcare
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/industries/retail">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Retail & E-commerce
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/industries/manufacturing">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Manufacturing
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/industries/public-sector">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Public Sector
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/industries">
                  <h4 className="font-opensans font-medium text-base text-red-600 hover:text-red-700 transition-colors">
                    View all industries →
                  </h4>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3 - Professional Services */}
          <div>
            <h3 className="font-opensans font-semibold text-lg text-gray-900 mb-4 tracking-wide">Professional Services</h3>
            <div className="space-y-3">
              <div>
                <Link href="/services/cloud-adoption">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Cloud Adoption & Migration
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/services/managed-services">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Managed Services
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/services/consulting">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Consulting & Advisory
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/services/optimization">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Cloud Optimization
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/services/security">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Security Services
                  </h4>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4 - Technology Partners */}
          <div>
            <h3 className="font-opensans font-semibold text-lg text-gray-900 mb-4 tracking-wide">Technology Partners</h3>
            <div className="space-y-3">
              <div>
                <Link href="/technology/aws">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Amazon Web Services
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/technology/azure">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Microsoft Azure
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/technology/google-cloud">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Google Cloud
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/technology/vmware">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    VMware
                  </h4>
                </Link>
              </div>

              <div>
                <Link href="/technology/private-cloud">
                  <h4 className="font-opensans font-medium text-base text-blue-600 hover:text-red-600 transition-colors">
                    Private Cloud
                  </h4>
                </Link>
              </div>

              <div className="pt-2">
                <Link href="/technology">
                  <h4 className="font-opensans font-medium text-base text-red-600 hover:text-red-700 transition-colors">
                    View all technologies →
                  </h4>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom section with featured content */}
        <div className="border-t border-gray-200 mt-6 pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-opensans font-semibold text-base text-gray-900 mb-2">Featured Solution</h4>
              <p className="text-sm text-gray-600 mb-3">
                Discover how our AI-powered cloud solutions can transform your business operations.
              </p>
              <Link href="/solutions/ai-cloud">
                <span className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700">
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-opensans font-semibold text-base text-gray-900 mb-2">Latest Insights</h4>
              <p className="text-sm text-gray-600 mb-3">
                Read our latest research on cloud transformation and AI adoption trends.
              </p>
              <Link href="/blog">
                <span className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                  Read insights
                  <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}