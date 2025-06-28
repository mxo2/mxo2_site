import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Building, GraduationCap, MapPin } from "lucide-react";

export default function IndustrySolutions() {
  const industries = [
    {
      icon: Building,
      title: "Enterprise Platforms",
      description: "Streamline operations with robust ERP and CRM systems tailored for education, manufacturing, and government sectors. We specialize in ERPNext customization, deployment, and workflow automation.",
      link: "/industries"
    },
    {
      icon: GraduationCap,
      title: "Parallel Campus",
      description: "AI-powered tools for modern parenting, student self-study, and teacher enablement. Parallel Campus transforms how families, schools, and educators engage with learning.",
      link: "/industries"
    },
    {
      icon: MapPin,
      title: "StreetSync",
      description: "Smart GPS-based employee tracking designed for municipal and field workforce management. Real-time location, geofencing, and work verification for street-level operations.",
      link: "/industries"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
            Industry-Focused Solutions
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-light-gray card-hover border-0">
              <CardContent className="p-8">
                <div className="bg-navy w-full h-48 rounded-lg mb-6 flex items-center justify-center">
                  <industry.icon className="w-16 h-16 text-cyan" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-navy mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <Link href={industry.link}>
                  <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm">
                    Learn More
                  </a>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
