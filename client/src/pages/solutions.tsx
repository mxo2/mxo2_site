import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Cloud, Bot, Cpu, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function Solutions() {
  const solutions = [
    {
      icon: Cloud,
      title: "Cloud",
      description: "Maximize potential through cloud adoption, expert migration, and rapid innovation. Our cloud services include migration strategies, optimization, cost auditing, and managed services across AWS and Microsoft Azure platforms.",
      link: "/solutions/cloud",
      services: [
        "Cloud Migration",
        "Cloud Optimization", 
        "Cloud Cost Audit",
        "Managed Cloud Services"
      ]
    },
    {
      icon: Bot,
      title: "Applications",
      description: "Build robust applications tailored to your business needs. From legacy modernization to SaaS development, we deliver scalable solutions using modern frameworks and technologies.",
      link: "/solutions/applications",
      services: [
        "Legacy Application Modernization",
        "SaaS Development",
        "Workflow Automation",
        "ERP Implementation"
      ]
    },
    {
      icon: Cpu,
      title: "AI & IoT",
      description: "Harness the power of artificial intelligence and IoT to transform your operations. We provide RPA solutions, AI model integration, and comprehensive IoT architecture design.",
      link: "/solutions/ai-iot",
      services: [
        "RPA Implementation",
        "AI Model Integration",
        "Data Analytics & Insights",
        "IoT Architecture Design"
      ]
    }
  ];

  return (
    <div className="py-20">
      <SEO 
        title="Enterprise Solutions - Cloud, AI & Applications | mxO₂ Digital Transformation"
        description="Comprehensive enterprise solutions from mxO₂. Cloud migration, AI & IoT integration, and application modernization services. Transform your business with our expert solutions."
        keywords="enterprise solutions, cloud migration, AI integration, application modernization, digital transformation, IoT solutions, business automation, mxO2 services"
        ogTitle="mxO₂ Enterprise Solutions - Transform Your Business"
        ogDescription="Accelerate your digital transformation with mxO₂'s comprehensive cloud, AI, and application solutions designed for modern enterprises."
      />
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6">
              Enterprise <span className="text-cyan">Solutions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation journey and drive business innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-white shadow-lg card-hover border-0">
                <CardContent className="p-8">
                  <div className="bg-cyan w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="font-montserrat font-bold text-2xl text-navy mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-montserrat font-semibold text-navy mb-3">Key Services:</h3>
                    <ul className="space-y-2">
                      {solution.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-cyan rounded-full mr-3"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={solution.link}>
                    <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm flex items-center">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
