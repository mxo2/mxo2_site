import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function MegaMenu() {
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 border-red-600 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Primary Categories */}
          <div className="space-y-7">
            {/* Cloud */}
            <div className="border-l-4 border-red-600 pl-5">
              <Link href="/solutions/cloud">
                <div className="cursor-pointer group">
                  <div className="flex items-center mb-3">
                    <h3 className="font-montserrat font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors tracking-wide">
                      CLOUD <ChevronRight className="w-4 h-4 ml-2 inline" />
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pr-4">
                    Enable cloud adoption and transformation and optimize cloud strategies
                  </p>
                </div>
              </Link>
            </div>

            {/* Applications */}
            <div className="border-l-4 border-gray-300 pl-5">
              <Link href="/solutions/applications">
                <div className="cursor-pointer group">
                  <div className="flex items-center mb-3">
                    <h3 className="font-montserrat font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors tracking-wide">
                      APPLICATIONS <ChevronRight className="w-4 h-4 ml-2 inline" />
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pr-4">
                    Deploy cloud native and SaaS solutions to increase efficiency and reliability
                  </p>
                </div>
              </Link>
            </div>

            {/* AI */}
            <div className="border-l-4 border-gray-300 pl-5">
              <Link href="/solutions/ai">
                <div className="cursor-pointer group">
                  <div className="flex items-center mb-3">
                    <h3 className="font-montserrat font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors tracking-wide">
                      AI <ChevronRight className="w-4 h-4 ml-2 inline" />
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pr-4">
                    Accelerating the secure, responsible and sustainable adoption of AI solutions
                  </p>
                </div>
              </Link>
            </div>

            {/* Data */}
            <div className="border-l-4 border-gray-300 pl-5">
              <Link href="/solutions/data">
                <div className="cursor-pointer group">
                  <div className="flex items-center mb-3">
                    <h3 className="font-montserrat font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors tracking-wide">
                      DATA <ChevronRight className="w-4 h-4 ml-2 inline" />
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pr-4">
                    Gain actionable insights with data management, engineering, intelligence and powerful AI/machine learning toolkits
                  </p>
                </div>
              </Link>
            </div>

            {/* Cyber Security & Resilience */}
            <div className="border-l-4 border-gray-300 pl-5">
              <Link href="/solutions/cybersecurity">
                <div className="cursor-pointer group">
                  <div className="flex items-center mb-3">
                    <h3 className="font-montserrat font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors tracking-wide">
                      CYBER SECURITY & RESILIENCE <ChevronRight className="w-4 h-4 ml-2 inline" />
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pr-4">
                    Evolve from monitoring to automating, preventing attacks while maintaining compliance
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Middle Column - Services */}
          <div>
            <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-6 tracking-wide">SERVICES</h3>
            <div className="space-y-5">
              <div className="group">
                <Link href="/services/cloud-adoption">
                  <h4 className="font-semibold text-red-600 hover:text-red-700 mb-2 text-base">Cloud Adoption and Migration</h4>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Customized cloud migrations with an automation and cloud native focus
                </p>
              </div>

              <div>
                <Link href="/services/elastic-engineering">
                  <h4 className="font-semibold text-red-600 hover:text-red-700 mb-1">MXO2 Elastic Engineering for Hyperscalers</h4>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Continuously manage and evolve your environment to cloud native
                </p>
              </div>

              <div>
                <Link href="/services/modern-operations">
                  <h4 className="font-semibold text-red-600 hover:text-red-700 mb-1">MXO2 Modern Operations</h4>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  24x7x365 cloud services approach to operational and system administration support
                </p>
              </div>

              <div>
                <Link href="/services/vmware-engineering">
                  <h4 className="font-semibold text-red-600 hover:text-red-700 mb-1">MXO2 Elastic Engineering for VMware</h4>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Modernize your workloads on VMware without disruption to platform and team
                </p>
              </div>

              <div>
                <Link href="/services/managed-cloud">
                  <h4 className="font-semibold text-red-600 hover:text-red-700 mb-1">MXO2 Managed Cloud</h4>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Fully outsource the management and operations of enterprise cloud environments
                </p>
              </div>

              <div>
                <Link href="/services/cloud-optimization">
                  <h4 className="font-semibold text-red-600 hover:text-red-700 mb-1">Cloud Optimization</h4>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ongoing optimization to ensure the most cost-effective architecture
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Technology */}
          <div>
            <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-6 tracking-wide">TECHNOLOGY</h3>
            <div className="space-y-5">
              <div className="group">
                <Link href="/technology/private-cloud">
                  <h4 className="font-semibold text-red-600 hover:text-red-700 mb-2 text-base">Private Cloud</h4>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Secured and dedicated private cloud platforms
                </p>
              </div>

              <div className="group">
                <Link href="/technology/spot">
                  <h4 className="font-semibold text-red-600 hover:text-red-700 mb-2 text-base">MXO2 Spot</h4>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cloud infrastructure auctioned in an open market. Delivered as turnkey, fully managed Kubernetes clusters.
                </p>
              </div>

              <div className="group">
                <Link href="/technology/public-cloud">
                  <h4 className="font-semibold text-red-600 hover:text-red-700 mb-2 text-base">Public Cloud</h4>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Migration, management and governance across leading cloud platforms.
                </p>
              </div>

              <div className="group">
                <Link href="/technology/hybrid-cloud">
                  <h4 className="font-semibold text-red-600 hover:text-red-700 mb-2 text-base">Hybrid Cloud</h4>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Enable hybrid cloud to improve performance and optimize costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
