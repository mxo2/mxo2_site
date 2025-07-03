import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud, Shield, Database, Cpu, CheckCircle, Users, Award } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function MicrosoftAzure() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", { ...data, service: "Microsoft Azure Solutions" });
    },
    onSuccess: () => {
      reset();
      alert("Thank you! We'll contact you soon.");
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 -mt-40 pt-40">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 min-h-[500px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Microsoft Azure Partner
              </Badge>
              
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
                Microsoft Azure
                <br />
                <span className="text-blue-300">Enterprise Cloud Excellence</span>
              </h1>
              
              <p className="text-lg lg:text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto font-opensans">
                Scalable, enterprise-grade cloud platform for all workloads. Deploy, manage, and scale applications with Microsoft's comprehensive cloud ecosystem.
              </p>
              
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                Start with Azure
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-8 text-center">
              Why Choose Microsoft Azure?
            </h2>
            <div className="prose prose-lg max-w-none font-opensans text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Microsoft Azure provides a comprehensive cloud computing platform with over 200 services, enabling organizations to build, deploy, and manage applications at global scale.
              </p>
              <p className="mb-6">
                As Microsoft Azure experts, we help organizations leverage Azure's full potential for digital transformation, from infrastructure migration to advanced AI and analytics solutions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Enterprise Security</h3>
                  <p>Multi-layered security with compliance certifications for regulated industries</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Hybrid Capabilities</h3>
                  <p>Seamless integration between on-premises and cloud environments</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">AI & Analytics</h3>
                  <p>Built-in AI services and advanced analytics for intelligent applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Our Azure Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Azure Migration</h3>
                <p className="text-gray-700">Complete migration strategy and execution from on-premises to Azure cloud infrastructure.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Azure DevOps</h3>
                <p className="text-gray-700">CI/CD pipelines, infrastructure as code, and automated deployment strategies.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Azure Kubernetes Service</h3>
                <p className="text-gray-700">Container orchestration and microservices architecture implementation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Azure AI Services</h3>
                <p className="text-gray-700">Machine learning, cognitive services, and AI model deployment and management.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Azure Security Center</h3>
                <p className="text-gray-700">Comprehensive security monitoring, threat detection, and compliance management.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Azure Cost Management</h3>
                <p className="text-gray-700">Cost optimization, budget controls, and spending analysis for maximum ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Our Azure Implementation Approach
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-bold text-xl mb-3">Assessment</h3>
                <p className="text-gray-700">Evaluate current infrastructure and design Azure architecture aligned with business goals.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-bold text-xl mb-3">Planning</h3>
                <p className="text-gray-700">Create detailed migration plan with timeline, resource allocation, and risk mitigation strategies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-bold text-xl mb-3">Implementation</h3>
                <p className="text-gray-700">Execute Azure deployment with best practices, security controls, and performance optimization.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-bold text-xl mb-3">Optimization</h3>
                <p className="text-gray-700">Continuous monitoring, cost optimization, and performance tuning for sustained excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talk to Us Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
              Ready to Transform with Azure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let our Azure experts design and implement a cloud strategy that accelerates your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4">
                Get Azure Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Talk to Azure Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-8 text-center">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    {...register("company")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98XXX XXXXX"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your Azure requirements..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}