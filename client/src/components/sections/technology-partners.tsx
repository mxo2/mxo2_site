import TechnologyCard from "@/components/ui/technology-card";
import { Cloud, Server, Brain, Database, Bot, BarChart3 } from "lucide-react";

export default function TechnologyPartners() {
  const technologies = [
    {
      icon: Cloud,
      name: "AWS",
      subtitle: "Cloud Leader",
      title: "Cloud Infrastructure",
      description: "Host, scale, and secure applications using Amazon's cloud platform for AI, SaaS, and enterprise workloads.",
      link: "/solutions/cloud"
    },
    {
      icon: Server,
      name: "Microsoft Azure",
      subtitle: "Hybrid Cloud & DevOps",
      title: "Enterprise Cloud & DevOps",
      description: "Seamless hybrid cloud, Active Directory, and DevOps for scalable enterprise applications.",
      link: "/solutions/cloud"
    },
    {
      icon: Brain,
      name: "OpenAI & Copilot",
      subtitle: "AI Innovation",
      title: "AI-Powered Productivity",
      description: "Power your business and development teams with OpenAI's intelligent models and Copilot tools for productivity, content, and code.",
      link: "/solutions/ai-iot"
    }
  ];

  const additionalTechs = [
    { icon: Server, name: "Docker" },
    { icon: Database, name: "Kubernetes" },
    { icon: Bot, name: "UiPath" },
    { icon: Database, name: "PostgreSQL" },
    { icon: Brain, name: "TensorFlow" },
    { icon: BarChart3, name: "Power BI" },
  ];

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6 uppercase">
            Mission-Critical Demands Perfection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            When You're Running Mission-Critical Systems, We're the Perfectionists Behind the Scenes...
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} {...tech} />
          ))}
        </div>
        
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-8 items-center">
          {additionalTechs.map((tech, index) => (
            <div key={index} className="text-center logo-hover">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-2">
                <tech.icon className="w-12 h-12 text-cyan mx-auto" />
              </div>
              <p className="text-sm font-opensans">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
