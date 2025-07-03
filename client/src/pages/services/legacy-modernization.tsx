import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, RefreshCw, Shield, Layers, Zap, CheckCircle, Users, Code } from "lucide-react";
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

export default function LegacyModernization() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", { ...data, service: "Legacy Application Modernization" });
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
      <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-r from-blue-600 via-purple-700 to-red-600 -mt-40 pt-40">
        <div className="relative z-10 min-h-[500px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
                Legacy Application Modernization
              </h1>
              
              <p className="text-lg lg:text-xl mb-8 text-orange-100 leading-relaxed max-w-3xl mx-auto font-opensans">
                Upgrade outdated software to modern, scalable platforms that drive business growth and competitive advantage.
              </p>
              
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                Start Modernization
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-8 text-center">
              Why Modernize Legacy Applications?
            </h2>
            <div className="prose prose-lg max-w-none font-opensans text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Legacy applications often become bottlenecks that limit business agility, increase security risks, and drain IT resources through expensive maintenance.
              </p>
              <p className="mb-6">
                Our modernization approach transforms your existing applications into scalable, secure, and maintainable solutions that leverage modern architectures, cloud technologies, and best practices.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Enhanced Security</h3>
                  <p>Modern security frameworks and compliance standards</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Layers className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Scalable Architecture</h3>
                  <p>Cloud-native design for unlimited growth potential</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Improved Performance</h3>
                  <p>Faster response times and better user experience</p>
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
              Our Modernization Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Legacy Assessment</h3>
                <p className="text-gray-700">Comprehensive analysis of existing applications, dependencies, and modernization roadmap.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Architecture Redesign</h3>
                <p className="text-gray-700">Transform monolithic applications into microservices and cloud-native architectures.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Database Migration</h3>
                <p className="text-gray-700">Migrate from legacy databases to modern, scalable cloud database solutions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">API Integration</h3>
                <p className="text-gray-700">Build RESTful APIs and integrate with modern third-party services and platforms.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">UI/UX Modernization</h3>
                <p className="text-gray-700">Update user interfaces with modern, responsive design and improved user experience.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Performance Optimization</h3>
                <p className="text-gray-700">Optimize application performance, reduce load times, and improve scalability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Our Modernization Approach
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-bold text-xl mb-3">Analyze</h3>
                <p className="text-gray-700">Deep dive into your legacy applications to understand architecture, dependencies, and business logic.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-bold text-xl mb-3">Plan</h3>
                <p className="text-gray-700">Create a comprehensive modernization strategy with risk mitigation and timeline planning.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-bold text-xl mb-3">Transform</h3>
                <p className="text-gray-700">Execute modernization using proven methodologies with minimal business disruption.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-bold text-xl mb-3">Optimize</h3>
                <p className="text-gray-700">Fine-tune performance, implement monitoring, and provide ongoing support and enhancement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talk to Us Section */}
      <section className="py-16 bg-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
              Ready to Modernize Your Applications?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Transform your legacy systems into modern, scalable solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4">
                Get Modernization Plan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Talk to Architect
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+91 98XXX XXXXX"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your legacy applications and modernization goals..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4"
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