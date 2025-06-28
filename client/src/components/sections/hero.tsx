import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cloud, Bot, Shield, BarChart3 } from "lucide-react";

export default function Hero() {
  const features = [
    { icon: Cloud, title: "Cloud Solutions" },
    { icon: Bot, title: "AI & Automation" },
    { icon: Shield, title: "Cybersecurity" },
    { icon: BarChart3, title: "Data Analytics" },
  ];

  return (
    <section className="hero-gradient text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl leading-tight mb-6">
              Breathing Life Into <span className="text-cyan">Businesses</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Empower your business with cutting-edge AI tools — from intelligent automation to real-time data insights — driving smarter decisions, faster workflows, and scalable innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/solutions">
                <Button 
                  size="lg" 
                  className="bg-cyan hover:bg-white hover:text-navy text-white font-montserrat font-semibold"
                >
                  Learn More
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white hover:bg-white hover:text-navy text-white font-montserrat font-semibold"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-cyan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-montserrat font-semibold text-lg">{feature.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
