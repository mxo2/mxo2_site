import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Target, Award, ArrowRight } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay at the forefront of technology, continuously exploring new solutions to solve complex business challenges."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our mission. We build lasting partnerships by delivering solutions that drive real business value."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    }
  ];

  const team = [
    {
      name: "Technology Leadership",
      role: "Expert Engineers & Architects",
      description: "Our team consists of experienced software engineers, cloud architects, and AI specialists with deep industry expertise."
    },
    {
      name: "Project Management",
      role: "Agile Delivery Experts",
      description: "Certified project managers who ensure on-time delivery and seamless communication throughout your project lifecycle."
    },
    {
      name: "Industry Specialists",
      role: "Domain Experts",
      description: "Professionals with deep knowledge across manufacturing, education, government, finance, and technology sectors."
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6">
              About <span className="text-cyan">MXO2</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Maximum Oxygen Inc. - Breathing life into businesses through innovative technology solutions and expert digital transformation services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Founded with a vision to democratize access to cutting-edge technology, MXO2 has grown from a small team of passionate engineers to a comprehensive technology partner for businesses worldwide.
                  </p>
                  <p>
                    We believe that every business, regardless of size, should have access to enterprise-grade solutions that drive growth, improve efficiency, and create competitive advantages in today's digital landscape.
                  </p>
                  <p>
                    Our name, "Maximum Oxygen," reflects our commitment to breathing new life into businesses through innovative technology solutions, much like oxygen revitalizes and energizes living systems.
                  </p>
                </div>
              </div>
              <div className="bg-light-gray rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-cyan mb-2">500+</div>
                    <div className="text-navy font-montserrat font-semibold">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan mb-2">50+</div>
                    <div className="text-navy font-montserrat font-semibold">Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan mb-2">10+</div>
                    <div className="text-navy font-montserrat font-semibold">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan mb-2">24/7</div>
                    <div className="text-navy font-montserrat font-semibold">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
              Our Values
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients, partners, and team members.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-lg card-hover border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-cyan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
              Our Team
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              A diverse group of technology experts, industry specialists, and creative problem-solvers dedicated to your success.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-light-gray border-0">
                <CardContent className="p-8">
                  <h3 className="font-montserrat font-bold text-xl text-navy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan font-opensans font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-8">
              Our Mission
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
              To empower businesses with cutting-edge AI tools, cloud solutions, and intelligent automation that drive smarter decisions, faster workflows, and scalable innovation in an increasingly digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-cyan hover:bg-white hover:text-navy text-white font-montserrat font-semibold"
                >
                  Work With Us
                </Button>
              </Link>
              <Link href="/solutions">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white hover:bg-white hover:text-navy text-white font-montserrat font-semibold"
                >
                  Our Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
              What We Do Best
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-xl text-navy mb-4">
                  Custom Development Solutions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We build robust web, mobile, and cloud-native applications tailored to your business logic and industry workflows. From MVPs to enterprise platforms — our agile teams deliver scalable and secure digital products that accelerate growth.
                </p>
                <Link href="/solutions">
                  <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-xl text-navy mb-4">
                  RPA & Intelligent Automation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Unlock efficiency through Robotic Process Automation (RPA) powered by AI. We automate repetitive tasks, streamline business processes, and integrate bots into ERP, CRM, and third-party systems to boost productivity and reduce operational costs.
                </p>
                <Link href="/solutions">
                  <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-xl text-navy mb-4">
                  API & System Integrations
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Connect your business systems seamlessly with our API-first development approach. We design, implement, and secure integrations across payment gateways, ERPs, CRMs, IoT devices, and custom platforms to ensure smooth data flow and performance.
                </p>
                <Link href="/solutions">
                  <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-xl text-navy mb-4">
                  Cloud Migration & Management
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Accelerate your digital transformation with expert cloud migration and management services. We help you leverage AWS, Microsoft Azure, and other leading platforms to improve scalability, security, and cost-effectiveness.
                </p>
                <Link href="/solutions">
                  <a className="font-montserrat font-semibold text-cyan hover:text-navy transition-colors uppercase text-sm flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
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
