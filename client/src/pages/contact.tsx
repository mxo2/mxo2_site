import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, Building, Users, Award } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest! We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Innovation Drive", "Tech Hub, Silicon Valley", "CA 94025, United States"]
    },
    {
      icon: Phone,
      title: "Phone & Fax",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568 (Fax)", "24/7 Support Available"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@mxo2.com", "support@mxo2.com", "careers@mxo2.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM PST", "Saturday: 10:00 AM - 4:00 PM PST", "Sunday: Closed"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Building,
      title: "Enterprise Experience",
      description: "Over 10 years of experience delivering enterprise-grade solutions to Fortune 500 companies."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with deep expertise in cloud, AI, and modern application development."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "500+ successful projects delivered with 99% client satisfaction and long-term partnerships."
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6">
              Contact <span className="text-cyan">MXO2</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Ready to transform your business with cutting-edge technology? Let's start the conversation and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="font-montserrat font-bold text-2xl text-navy mb-6">
                  Get In Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-opensans font-semibold text-navy">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                        className="font-opensans"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-opensans font-semibold text-navy">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                        className="font-opensans"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="font-opensans font-semibold text-navy">
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company"
                        className="font-opensans"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-opensans font-semibold text-navy">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="font-opensans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="font-opensans font-semibold text-navy">
                      Service of Interest
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="font-opensans">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cloud">Cloud Solutions</SelectItem>
                        <SelectItem value="ai-automation">AI & Automation</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                        <SelectItem value="data-analytics">Data Analytics</SelectItem>
                        <SelectItem value="custom-development">Custom Development</SelectItem>
                        <SelectItem value="erp-implementation">ERP Implementation</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-opensans font-semibold text-navy">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project requirements, timeline, and how we can help you achieve your goals..."
                      rows={6}
                      required
                      className="font-opensans"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-cyan hover:bg-navy text-white font-montserrat font-semibold py-3"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="font-montserrat font-bold text-2xl text-navy mb-6">
                Contact Information
              </h2>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-cyan w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-navy mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-6 uppercase">
              Why Choose MXO2?
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results for your organization.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-light-gray border-0 card-hover">
                <CardContent className="p-8 text-center">
                  <div className="bg-cyan w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-navy mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
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
              Ready to Start Your <span className="text-cyan">Digital Transformation?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a free consultation to discuss your project requirements and learn how we can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-cyan hover:bg-white hover:text-navy text-white font-montserrat font-semibold"
              >
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white hover:bg-white hover:text-navy text-white font-montserrat font-semibold"
              >
                Download Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
