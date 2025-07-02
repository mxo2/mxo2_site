import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud, Shield, Database, Zap, CheckCircle, Users, Server } from "lucide-react";
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

export default function AmazonAWS() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", { ...data, service: "Amazon Web Services (AWS)" });
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
      <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-r from-orange-600 via-amber-700 to-yellow-800 -mt-40 pt-40">
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
                AWS Certified Partner
              </Badge>
              
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
                Amazon Web Services
                <br />
                <span className="text-orange-300">Trusted Cloud Platform</span>
              </h1>
              
              <p className="text-lg lg:text-xl mb-8 text-orange-100 leading-relaxed max-w-3xl mx-auto font-opensans">
                Trusted cloud platform for compute, storage, and analytics. Build, deploy, and scale applications with the world's most comprehensive cloud platform.
              </p>
              
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                Get Started with AWS
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
              Why Choose Amazon Web Services?
            </h2>
            <div className="prose prose-lg max-w-none font-opensans text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Amazon Web Services offers the most mature, feature-rich cloud platform with over 200 fully featured services, global infrastructure, and unmatched reliability.
              </p>
              <p className="mb-6">
                As AWS certified experts, we help organizations leverage AWS's comprehensive ecosystem for digital transformation, from simple web applications to complex enterprise solutions with machine learning and analytics.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Server className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Global Infrastructure</h3>
                  <p>99+ availability zones across 30+ regions worldwide with low-latency access</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Security & Compliance</h3>
                  <p>Bank-level security with SOC, HIPAA, PCI DSS, and other compliance certifications</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Innovation Velocity</h3>
                  <p>Rapid deployment, auto-scaling, and cutting-edge services for faster time-to-market</p>
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
              Our AWS Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">EC2 & Infrastructure</h3>
                <p className="text-gray-700">Compute instances, auto-scaling groups, load balancers, and VPC networking setup.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">AWS Lambda & Serverless</h3>
                <p className="text-gray-700">Function-as-a-Service, API Gateway, and event-driven serverless architectures.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">RDS & Database Services</h3>
                <p className="text-gray-700">Managed databases, DynamoDB, Aurora, and data warehouse solutions with Redshift.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">S3 & Storage Solutions</h3>
                <p className="text-gray-700">Object storage, content delivery, backup strategies, and data archiving solutions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Machine Learning Services</h3>
                <p className="text-gray-700">SageMaker, Rekognition, Comprehend, and custom ML model deployment.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">DevOps & CI/CD</h3>
                <p className="text-gray-700">CodePipeline, CodeBuild, CloudFormation, and infrastructure automation.</p>
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
              Our AWS Implementation Approach
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-bold text-xl mb-3">Assessment</h3>
                <p className="text-gray-700">Evaluate workloads, design AWS architecture, and create migration strategy aligned with business objectives.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-bold text-xl mb-3">Foundation</h3>
                <p className="text-gray-700">Set up AWS accounts, VPC networking, security groups, and compliance frameworks.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-bold text-xl mb-3">Migration</h3>
                <p className="text-gray-700">Execute phased migration with minimal downtime using AWS migration tools and best practices.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-bold text-xl mb-3">Optimization</h3>
                <p className="text-gray-700">Cost optimization, performance tuning, and implementation of advanced AWS services.</p>
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
              Ready to Transform with AWS?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Leverage the power of AWS with our certified experts to accelerate your cloud journey and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4">
                Get AWS Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Talk to AWS Expert
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
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your AWS requirements..."
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