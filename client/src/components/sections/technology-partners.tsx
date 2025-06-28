import awsLogoPath from "@assets/aws_1751108372357.png";
import azureLogoPath from "@assets/azure_1751108372358.png";
import openaiLogoPath from "@assets/openai_1751108372360.png";
import dockerLogoPath from "@assets/docker_1751108372359.png";
import uipathLogoPath from "@assets/uipath_1751108372359.png";

const technologies = [
  {
    name: "AWS",
    title: "Cloud Leader",
    subtitle: "Cloud Infrastructure",
    description: "Host, scale, and secure applications using Amazon's cloud platform for AI, SaaS, and enterprise workloads.",
    logo: awsLogoPath,
    link: "Learn More"
  },
  {
    name: "Microsoft Azure",
    title: "Hybrid Cloud & DevOps",
    subtitle: "Enterprise Cloud & DevOps",
    description: "Seamless hybrid cloud, Active Directory, and DevOps for scalable enterprise applications.",
    logo: azureLogoPath,
    link: "Learn More"
  },
  {
    name: "OpenAI & Copilot",
    title: "AI Innovation",
    subtitle: "AI-Powered Productivity",
    description: "Power your business and development teams with OpenAI's intelligent models and Copilot tools for productivity, content, and code.",
    logo: openaiLogoPath,
    link: "Learn More"
  },
  {
    name: "Docker",
    logo: dockerLogoPath,
  },
  {
    name: "Kubernetes",
    logo: null, // Will use text/icon
  },
  {
    name: "UiPath",
    logo: uipathLogoPath,
  },
  {
    name: "PostgreSQL",
    logo: null,
  },
  {
    name: "TensorFlow",
    logo: null,
  },
  {
    name: "Power BI",
    logo: null,
  }
];

export default function TechnologyPartners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Featured Technologies - Top 3 with descriptions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {technologies.slice(0, 3).map((tech, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
            >
              {/* Logo */}
              <div className="mb-4">
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} logo`} 
                  className="w-16 h-10 object-contain"
                />
              </div>
              
              {/* Name */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-montserrat">
                {tech.name}
              </h3>
              
              {/* Title/Category */}
              <h4 className="text-base font-semibold text-gray-800 mb-1 font-montserrat">
                {tech.title}
              </h4>
              
              {/* Subtitle */}
              {tech.subtitle && (
                <p className="text-sm font-semibold text-gray-700 mb-3 font-opensans">
                  {tech.subtitle}
                </p>
              )}
              
              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed font-opensans">
                {tech.description}
              </p>
              
              {/* Link */}
              <a 
                href="#" 
                className="text-sm font-medium text-[hsl(220,72%,44%)] hover:underline font-opensans"
              >
                {tech.link}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Technologies - Simple grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.slice(3).map((tech, index) => (
            <div 
              key={index + 3}
              className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              {tech.logo ? (
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-8 w-auto mb-2 object-contain"
                />
              ) : (
                <div className="h-8 w-8 mb-2 bg-[hsl(220,72%,44%)] rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {tech.name.charAt(0)}
                  </span>
                </div>
              )}
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}