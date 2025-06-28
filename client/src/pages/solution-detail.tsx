import { useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Cloud, Bot, Cpu, Check, ArrowRight } from "lucide-react";

export default function SolutionDetail() {
  const params = useParams();
  const category = params.category;

  const solutionData = {
    cloud: {
      icon: Cloud,
      title: "Cloud Solutions",
      subtitle: "Maximize potential through cloud adoption, expert migration, and rapid innovation",
      services: [
        {
          title: "Cloud Migration",
          description: "Seamless migration of your applications and data to cloud platforms with minimal downtime and maximum efficiency."
        },
        {
          title: "Cloud Optimization",
          description: "Optimize your cloud resources for performance, cost-effectiveness, and scalability."
        },
        {
          title: "Cloud Cost Audit",
          description: "Comprehensive analysis and optimization of your cloud spending to reduce costs while maintaining performance."
        },
        {
          title: "Managed Cloud Services",
          description: "24/7 monitoring, management, and support for your cloud infrastructure and applications."
        }
      ],
      technologies: [
        { name: "Microsoft Azure", description: "Enterprise-grade cloud platform" },
        { name: "AWS", description: "Leading cloud infrastructure provider" },
        { name: "DevOps & CI/CD", description: "Automated deployment pipelines" },
        { name: "Terraform", description: "Infrastructure as Code" },
        { name: "Docker", description: "Containerization platform" },
        { name: "Kubernetes", description: "Container orchestration" }
      ]
    },
    applications: {
      icon: Bot,
      title: "Application Development",
      subtitle: "Build robust, scalable applications tailored to your business needs",
      services: [
        {
          title: "Legacy Application Modernization",
          description: "Transform legacy systems into modern, cloud-native applications with improved performance and scalability."
        },
        {
          title: "SaaS Development",
          description: "Build multi-tenant SaaS applications with modern architecture and robust security."
        },
        {
          title: "Workflow Automation",
          description: "Automate business processes to improve efficiency and reduce manual tasks."
        },
        {
          title: "ERP Implementation",
          description: "Custom ERP solutions using ERPNext and other modern platforms."
        }
      ],
      technologies: [
        { name: "React.js / Vue.js / Next.js", description: "Modern frontend frameworks" },
        { name: "Node.js / Django / Laravel", description: "Backend development frameworks" },
        { name: "ERPNext", description: "Open-source ERP platform" },
        { name: "PostgreSQL", description: "Advanced relational database" },
        { name: "MongoDB", description: "NoSQL document database" },
        { name: "Redis", description: "In-memory data store" }
      ]
    },
    "ai-iot": {
      icon: Cpu,
      title: "AI & IoT Solutions",
      subtitle: "Harness artificial intelligence and IoT to transform your operations",
      services: [
        {
          title: "RPA Implementation",
          description: "Automate repetitive tasks with intelligent bots integrated into your existing systems."
        },
        {
          title: "AI Model Integration",
          description: "Integrate pre-trained AI models and develop custom solutions for your specific needs."
        },
        {
          title: "Data Analytics & Insights",
          description: "Turn raw data into actionable insights with advanced analytics and visualization."
        },
        {
          title: "IoT Architecture Design",
          description: "Design and implement IoT solutions for real-time monitoring and control."
        }
      ],
      technologies: [
        { name: "OpenAI", description: "Advanced AI language models" },
        { name: "TensorFlow", description: "Machine learning platform" },
        { name: "Scikit-Learn", description: "Machine learning library" },
        { name: "MQTT", description: "IoT messaging protocol" },
        { name: "Power BI", description: "Business intelligence platform" },
        { name: "Looker", description: "Modern BI and data platform" }
      ]
    }
  };

  const solution = solutionData[category as keyof typeof solutionData];

  if (!solution) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Solution not found</h1>
          <Link href="/solutions">
            <Button>Back to Solutions</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-cyan w-20 h-20 rounded-full flex items-center justify-center">
              <solution.icon className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6">
              {solution.title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              {solution.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
              Our Services
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {solution.services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="bg-cyan w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-xl text-navy mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
              Technology Stack
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver robust and scalable solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {solution.technologies.map((tech, index) => (
              <Card key={index} className="bg-light-gray border-0 card-hover">
                <CardContent className="p-6">
                  <h4 className="font-montserrat font-semibold text-navy mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our {solution.title.toLowerCase()} can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-cyan hover:bg-white hover:text-navy text-white font-montserrat font-semibold"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/solutions">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white hover:bg-white hover:text-navy text-white font-montserrat font-semibold"
                >
                  View All Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
