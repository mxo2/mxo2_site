import ServiceCard from "@/components/ui/service-card";
import { Cloud, Bot, Shield, BarChart3 } from "lucide-react";

export default function SolutionsOverview() {
  const solutions = [
    {
      icon: Cloud,
      title: "Cloud",
      description: "Maximize potential through cloud adoption, expert migration, and rapid innovation",
      link: "/solutions/cloud"
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Build smarter systems with AI, machine learning, and intelligent automation to streamline operations, reduce cost, and improve decision-making.",
      link: "/solutions/applications"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Safeguard your business with enterprise-grade security, data privacy compliance (GDPR, SOC 2), and AI governance frameworks.",
      link: "/solutions/ai-iot"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Turn raw data into actionable insights with predictive analytics, real-time dashboards, and scalable data pipelines.",
      link: "/solutions/cloud"
    }
  ];

  return (
    <section className="py-20 bg-light-gray skew-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
            Oxygenating Your Business with Our Solutions
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Maximize potential through expert solutions that drive innovation, streamline operations, and secure your digital transformation journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <ServiceCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
