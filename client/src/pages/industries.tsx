import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Building, GraduationCap, Landmark, ShoppingCart, TrendingUp, Smartphone, ArrowRight } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Building,
      title: "Manufacturing",
      description: "Streamline operations with ERP systems, IoT monitoring, and predictive maintenance solutions designed for modern manufacturing environments.",
      features: ["ERP Implementation", "IoT Monitoring", "Predictive Maintenance", "Supply Chain Optimization"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Transform educational institutions with AI-powered learning platforms, student management systems, and administrative automation.",
      features: ["Student Management", "AI Tutoring", "Administrative Automation", "Learning Analytics"]
    },
    {
      icon: Landmark,
      title: "Government & Export",
      description: "Enhance public services with secure, compliant solutions for government agencies and export businesses.",
      features: ["Compliance Management", "Data Security", "Workflow Automation", "Citizen Services"]
    },
    {
      icon: ShoppingCart,
      title: "Retail & eCommerce",
      description: "Drive sales and customer engagement with modern eCommerce platforms, inventory management, and customer analytics.",
      features: ["eCommerce Platforms", "Inventory Management", "Customer Analytics", "Payment Integration"]
    },
    {
      icon: TrendingUp,
      title: "Trading & Finance",
      description: "Accelerate financial operations with algorithmic trading systems, risk management, and compliance solutions.",
      features: ["Algorithmic Trading", "Risk Management", "Compliance Automation", "Financial Analytics"]
    },
    {
      icon: Smartphone,
      title: "Fintech",
      description: "Build next-generation financial services with secure payment systems, digital wallets, and regulatory compliance.",
      features: ["Payment Systems", "Digital Wallets", "Regulatory Compliance", "Mobile Banking"]
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6">
              Industry <span className="text-cyan">Expertise</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Specialized solutions tailored to the unique challenges and opportunities in your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-white shadow-lg card-hover border-0">
                <CardContent className="p-8">
                  <div className="bg-cyan w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-montserrat font-bold text-2xl text-navy mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-montserrat font-semibold text-navy mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-cyan rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact">
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

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
              Success Stories
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              See how we've helped organizations transform their operations and achieve their goals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* StreetSync Case Study */}
            <Card className="bg-light-gray border-0">
              <CardContent className="p-8">
                <div className="bg-navy w-full h-48 rounded-lg mb-6 flex items-center justify-center">
                  <Building className="w-16 h-16 text-cyan" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-navy mb-4">
                  StreetSync – Smart Municipal Workforce Management
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  StreetSync was implemented under a government directive in collaboration with IITian-led IAS officers to streamline municipal workforce operations. The system enables real-time GPS tracking, geo-fenced attendance, and daily activity monitoring for sanitation workers.
                </p>
                <Link href="/blog/smart-streets-jaisalmer-streetsync">
                  <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm flex items-center">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>

            {/* Parallel Campus Case Study */}
            <Card className="bg-light-gray border-0">
              <CardContent className="p-8">
                <div className="bg-navy w-full h-48 rounded-lg mb-6 flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-cyan" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-navy mb-4">
                  Parallel Campus – AI-Driven School Ecosystem
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Parallel Campus began as a robust School ERP platform and has evolved into an AI-powered ecosystem designed to empower teachers, parents, and students with smart tools for classroom planning, learning analytics, and AI-driven support.
                </p>
                <Link href="/blog/empowering-families-students-ai-parallel-campus">
                  <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm flex items-center">
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
