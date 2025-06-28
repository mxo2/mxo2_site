import { Button } from "@/components/ui/button";
import awsLogoPath from "@assets/aws_1751108372357.png";
import azureLogoPath from "@assets/azure_1751108372358.png";
import langchainLogoPath from "@assets/langchain_1751108372358.png";
import dockerLogoPath from "@assets/docker_1751108372359.png";
import uipathLogoPath from "@assets/uipath_1751108372359.png";
import openaiLogoPath from "@assets/openai_1751108372360.png";

export default function MissionCriticalSection() {
  const services = [
    {
      logoSrc: awsLogoPath,
      title: "AWS – Cloud Leader",
      subtitle: "Cloud Infrastructure",
      description: "Host, scale, and secure applications using Amazon's cloud platform for AI, SaaS, and enterprise workloads.",
      link: "Explore AWS solutions"
    },
    {
      logoSrc: azureLogoPath,
      title: "Microsoft Azure – Hybrid Cloud & DevOps",
      subtitle: "Enterprise Cloud & DevOps",
      description: "Seamless hybrid cloud, Active Directory, and DevOps for scalable enterprise applications.",
      link: "Learn Azure integration"
    },
    {
      logoSrc: uipathLogoPath,
      title: "UiPath",
      subtitle: "Robotic Process Automation",
      description: "Automate repetitive tasks with bots integrated into your ERP, CRM, and backend workflows.",
      link: "Discover RPA capabilities"
    },
    {
      logoSrc: openaiLogoPath,
      title: "OpenAI & Copilot",
      subtitle: "",
      description: "Power your business and development teams with OpenAI's intelligent models and Copilot tools for productivity, content, and code.",
      link: "Learn about AI solutions"
    },
    {
      logoSrc: dockerLogoPath,
      title: "Docker + Kubernetes – Modern DevOps Stack",
      subtitle: "",
      description: "Enable containerized microservices and multi-cloud deployment.",
      link: "Learn about solutions"
    },
    {
      logoSrc: langchainLogoPath,
      title: "Custom AI & LLM Workflows",
      subtitle: "",
      description: "• Pre-trained NLP models (Hugging Face)\n• LLM chaining and orchestration (LangChain)",
      link: "Learn about AI solutions"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Mission Statement */}
          <div className="lg:pr-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
              Mission-Critical<br />
              Demands Perfection
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 font-opensans leading-relaxed">
                When You're Running Mission-Critical Systems, We're the Perfectionists Behind the Scenes...
              </p>
            </div>
          </div>

          {/* Right side - Services Grid */}
          <div className="space-y-4">
            {/* Top row - 2 cards */}
            <div className="grid grid-cols-2 gap-4">
              {services.slice(0, 2).map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                >
                  {/* Logo */}
                  <div className="mb-3">
                    <img 
                      src={service.logoSrc} 
                      alt={`${service.title} logo`} 
                      className="w-12 h-8 object-contain"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-bold text-gray-900 mb-2 font-montserrat">
                    {service.title}
                  </h3>
                  
                  {/* Subtitle */}
                  {service.subtitle && (
                    <p className="text-xs font-semibold text-gray-700 mb-2 font-opensans">
                      {service.subtitle}
                    </p>
                  )}
                  
                  {/* Description */}
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed font-opensans whitespace-pre-line">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <a 
                    href="#" 
                    className="text-xs font-medium text-[hsl(220,72%,44%)] hover:underline font-opensans"
                  >
                    {service.link}
                  </a>
                </div>
              ))}
            </div>

            {/* Middle row - 2 cards */}
            <div className="grid grid-cols-2 gap-4">
              {services.slice(2, 4).map((service, index) => (
                <div 
                  key={index + 2} 
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                >
                  {/* Logo */}
                  <div className="mb-3">
                    <img 
                      src={service.logoSrc} 
                      alt={`${service.title} logo`} 
                      className="w-12 h-8 object-contain"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-bold text-gray-900 mb-2 font-montserrat">
                    {service.title}
                  </h3>
                  
                  {/* Subtitle */}
                  {service.subtitle && (
                    <p className="text-xs font-semibold text-gray-700 mb-2 font-opensans">
                      {service.subtitle}
                    </p>
                  )}
                  
                  {/* Description */}
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed font-opensans whitespace-pre-line">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <a 
                    href="#" 
                    className="text-xs font-medium text-[hsl(220,72%,44%)] hover:underline font-opensans"
                  >
                    {service.link}
                  </a>
                </div>
              ))}
            </div>

            {/* Bottom row - 2 cards */}
            <div className="grid grid-cols-2 gap-4">
              {services.slice(4, 6).map((service, index) => (
                <div 
                  key={index + 4} 
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                >
                  {/* Logo */}
                  <div className="mb-3">
                    <img 
                      src={service.logoSrc} 
                      alt={`${service.title} logo`} 
                      className="w-12 h-8 object-contain"
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-bold text-gray-900 mb-2 font-montserrat">
                    {service.title}
                  </h3>
                  
                  {/* Subtitle */}
                  {service.subtitle && (
                    <p className="text-xs font-semibold text-gray-700 mb-2 font-opensans">
                      {service.subtitle}
                    </p>
                  )}
                  
                  {/* Description */}
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed font-opensans whitespace-pre-line">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <a 
                    href="#" 
                    className="text-xs font-medium text-[hsl(220,72%,44%)] hover:underline font-opensans"
                  >
                    {service.link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}