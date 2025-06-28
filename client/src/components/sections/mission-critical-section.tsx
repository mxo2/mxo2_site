import { Button } from "@/components/ui/button";

export default function MissionCriticalSection() {
  const services = [
    {
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.763 10.036c.284 0 .576-.05.85-.15-.438-1.564-.588-3.284-.588-4.912 0-1.564.15-3.134.438-4.661-.488-.15-.999-.213-1.487-.213C2.65.1.1 2.65.1 5.976s2.55 5.876 5.876 5.876l.787-.001zm8.474 0c.325.1.617.15.901.15 3.326 0 5.876-2.55 5.876-5.876S19.464.1 16.138.1c-.488 0-.999.063-1.487.213.287 1.527.437 3.097.437 4.661 0 1.628-.15 3.348-.588 4.912l.737.15zm-7.611 3.85c-.637 3.1-1.638 6.076-2.664 8.25-.325.688-.613 1.289-.825 1.739-.1.225-.175.4-.225.525-.013.05-.025.087-.025.1 0 .05.025.087.063.087.188 0 .95-.737 2.163-2.6 1.289-1.976 2.8-5.048 3.525-8.197l-2.012 0zm5.225 0c.725 3.149 2.236 6.221 3.525 8.197 1.213 1.863 1.975 2.6 2.163 2.6.038 0 .063-.037.063-.087 0-.013-.013-.05-.025-.1-.05-.125-.125-.3-.225-.525-.212-.45-.5-1.051-.825-1.739-1.026-2.174-2.027-5.15-2.664-8.25l-2.012-.096z"/>
        </svg>
      ),
      title: "AWS – Cloud Leader",
      subtitle: "Cloud Infrastructure",
      description: "Host, scale, and secure applications using Amazon's cloud platform for AI, SaaS, and enterprise workloads.",
      link: "Explore AWS solutions"
    },
    {
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"/>
        </svg>
      ),
      title: "Microsoft Azure – Hybrid Cloud & DevOps",
      subtitle: "Enterprise Cloud & DevOps",
      description: "Seamless hybrid cloud, Active Directory, and DevOps for scalable enterprise applications.",
      link: "Learn Azure integration"
    },
    {
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: "UiPath",
      subtitle: "Robotic Process Automation",
      description: "Automate repetitive tasks with bots integrated into your ERP, CRM, and backend workflows.",
      link: "Discover RPA capabilities"
    },
    {
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.888 4.36a5.99 5.99 0 0 0-2.681 6.886 6.004 6.004 0 0 0 .847 2.739 5.98 5.98 0 0 0 .5 4.881 6.05 6.05 0 0 0 6.497 2.9 6.056 6.056 0 0 0 10.29-2.3 5.991 5.991 0 0 0 2.681-6.886 6.003 6.003 0 0 0-.847-2.739z"/>
        </svg>
      ),
      title: "OpenAI & Copilot",
      subtitle: "",
      description: "Power your business and development teams with OpenAI's intelligent models and Copilot tools for productivity, content, and code.",
      link: "Learn about AI solutions"
    },
    {
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.135a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186zm5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.135a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zM16.92 5.79h2.118a.186.186 0 0 0 .186-.185V3.716a.186.186 0 0 0-.186-.185H16.92a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V3.716a.185.185 0 0 0-.184-.185h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V3.716a.185.185 0 0 0-.185-.185h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V3.716a.185.185 0 0 0-.184-.185H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V3.716a.185.185 0 0 0-.185-.185H5.135a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185z"/>
        </svg>
      ),
      title: "Docker + Kubernetes – Modern DevOps Stack",
      subtitle: "",
      description: "Enable containerized microservices and multi-cloud deployment.",
      link: "Learn about solutions"
    },
    {
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.894 18.894c-3.073 3.073-8.715 3.073-11.788 0s-3.073-8.715 0-11.788 8.715-3.073 11.788 0 3.073 8.715 0 11.788z"/>
          <path d="M12 6.5c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5-2.462-5.5-5.5-5.5zm0 9c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"/>
        </svg>
      ),
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
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
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                {/* Logo */}
                <div className="text-[hsl(220,72%,44%)] mb-4">
                  {service.logo}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-montserrat">
                  {service.title}
                </h3>
                
                {/* Subtitle */}
                {service.subtitle && (
                  <p className="text-sm font-semibold text-gray-700 mb-3 font-opensans">
                    {service.subtitle}
                  </p>
                )}
                
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed font-opensans whitespace-pre-line">
                  {service.description}
                </p>
                
                {/* Link */}
                <a 
                  href="#" 
                  className="text-sm font-medium text-[hsl(220,72%,44%)] hover:underline font-opensans"
                >
                  {service.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}