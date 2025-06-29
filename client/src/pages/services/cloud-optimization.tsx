import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, DollarSign, Zap, Target, CheckCircle, Users, TrendingUp } from "lucide-react";
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

export default function CloudOptimization() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", { ...data, service: "Cloud Optimization" });
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
                Cloud Optimization
                <br />
                <span className="text-green-300">Maximize Performance, Minimize Costs</span>
              </h1>
              
              <p className="text-lg lg:text-xl mb-8 text-green-100 leading-relaxed max-w-3xl mx-auto font-opensans">
                Enhance performance and reduce cloud infrastructure costs with our comprehensive optimization strategies and monitoring solutions.
              </p>
              
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                Start Optimization
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
              Why Cloud Optimization Matters
            </h2>
            <div className="prose prose-lg max-w-none font-opensans text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Cloud optimization is crucial for organizations looking to maximize their return on cloud investments while ensuring peak performance and security.
              </p>
              <p className="mb-6">
                Our comprehensive cloud optimization services help businesses reduce costs by up to 40% while improving application performance, enhancing security posture, and ensuring scalability for future growth.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Cost Reduction</h3>
                  <p>Save 30-40% on cloud spending through intelligent resource optimization</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Performance Boost</h3>
                  <p>Improve application response times by up to 60% with optimized configurations</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Right-Sizing</h3>
                  <p>Match resources exactly to workload requirements for maximum efficiency</p>
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
              Our Cloud Optimization Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Cost Analysis & Monitoring</h3>
                <p className="text-gray-700">Comprehensive cost tracking, budget alerts, and spending optimization recommendations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Resource Right-Sizing</h3>
                <p className="text-gray-700">Optimize instance types, storage, and compute resources to match actual usage patterns.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Auto-Scaling Configuration</h3>
                <p className="text-gray-700">Implement intelligent auto-scaling to handle traffic spikes while minimizing costs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Performance Tuning</h3>
                <p className="text-gray-700">Database optimization, application tuning, and network performance improvements.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Reserved Instance Strategy</h3>
                <p className="text-gray-700">Strategic planning for reserved instances and savings plans to maximize discounts.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Continuous Monitoring</h3>
                <p className="text-gray-700">24/7 monitoring with proactive alerts and optimization recommendations.</p>
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
              Our Optimization Approach
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-bold text-xl mb-3">Assessment</h3>
                <p className="text-gray-700">Comprehensive analysis of your current cloud infrastructure, costs, and performance metrics.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-bold text-xl mb-3">Strategy</h3>
                <p className="text-gray-700">Develop customized optimization strategy based on your business goals and technical requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-bold text-xl mb-3">Implementation</h3>
                <p className="text-gray-700">Execute optimization plan with minimal disruption to your operations and business continuity.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-bold text-xl mb-3">Monitor</h3>
                <p className="text-gray-700">Continuous monitoring and ongoing optimization to ensure sustained performance and cost savings.</p>
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
              Ready to Optimize Your Cloud?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let our experts analyze your cloud infrastructure and provide a customized optimization strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4">
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Talk to Expert
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
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your cloud optimization needs..."
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