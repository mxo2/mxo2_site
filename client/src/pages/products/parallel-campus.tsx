import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Cloud, Shield, BarChart3, Globe, Smartphone, CheckCircle, Zap, GraduationCap, Building, Monitor } from "lucide-react";

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

export default function ParallelCampus() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      reset();
      // You could add a toast notification here
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-[500px] overflow-hidden -mt-40 pt-40">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Left Side - Education Theme */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center">
            {/* Educational pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/30 via-transparent to-blue-900/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
            
            {/* Education grid pattern */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="edu-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="none" stroke="white" strokeWidth="0.5"/>
                    <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#edu-grid)" />
              </svg>
            </div>

            <div className="relative z-10 px-8 lg:px-12 max-w-lg">
              <div className="mb-6">
                <Badge className="bg-blue-600 text-white hover:bg-blue-700 mb-6 px-4 py-2">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Cloud-Based Education Platform
                </Badge>
                
                <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-white mb-4 leading-tight">
                  Parallel Campus
                </h1>
                
                <h2 className="font-montserrat text-2xl lg:text-3xl text-white font-medium mb-6">
                  Beyond Education
                </h2>
                
                <p className="text-xl text-gray-200 mb-8 font-opensans leading-relaxed">
                  Always available and extensible Cloud Platform that simplifies education process and provides true learning management
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                    Request Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Education Illustration */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <GraduationCap className="w-24 h-24 text-blue-600" />
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Learning</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Community</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <Cloud className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Parallel Campus</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Easy mode of integration in education ecosystem through common integrated platform. 
                This helps to drive desired results through discipline and motivated environment without high pressure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Leading Cloud ERP</h3>
                <p className="text-gray-600 text-sm">Microsoft Tested & Listed ERP Solution</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3000+ Installs</h3>
                <p className="text-gray-600 text-sm">Over 1M+ Students Worldwide</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Footprint</h3>
                <p className="text-gray-600 text-sm">Multi-Language Support</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Uptime</h3>
                <p className="text-gray-600 text-sm">Hacker Safe Data Protection</p>
              </div>
            </div>

            {/* What We Improve */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-8">What are we going to improve?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Discipline</h4>
                  <p className="text-blue-100">Structured learning environment</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Motivation</h4>
                  <p className="text-blue-100">Engaging educational experience</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Attention</h4>
                  <p className="text-blue-100">Focused learning approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions For All</h2>
              <p className="text-xl text-gray-600">
                Comprehensive education management for every type of institution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Kids Campus</h3>
                <p className="text-gray-600 text-center">For Play group Schools</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">School Campus</h3>
                <p className="text-gray-600 text-center">For K-12 Schools</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">College Campus</h3>
                <p className="text-gray-600 text-center">Degree, Medical colleges</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Private Institutes</h3>
                <p className="text-gray-600 text-center">Institute chains</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">University Campus</h3>
                <p className="text-gray-600 text-center">Large institutes</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Online Campus</h3>
                <p className="text-gray-600 text-center">Online Classes, cloud platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Management</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Deeper insight into corporate relations, admissions, enrollment, recruiting</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Student & teacher performance tracking</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Facilities & asset management</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Hacker Safe Data Protection</h4>
                  <p className="text-gray-600">100% Uptime - More Secure, More Powerful On Cloud Infrastructure</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-green-50 rounded-xl p-8">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Pay As You Go</h4>
                  <p className="text-gray-600">Flexible Payment Option with Detail Analysis For Management</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Staff Management</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Unified view of employees (HR, Librarian, Assistant, Admin, Management)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Attendance, Time table, meetings, salary tracking</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Student & Parent Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Mobile attendance register, Build & Track Assignments</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Create Tests, Grades & Report cards</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Access from any web-based device anywhere, anytime</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl p-8">
                <div className="text-center">
                  <Cloud className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Ready-made SAAS Application</h4>
                  <p className="text-gray-600">No Hardware, No Software, No Installation Required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started with Parallel Campus</h2>
              <p className="text-xl text-gray-600">
                Transform your educational institution with our comprehensive cloud platform
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Sales@parallelcampus.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">+91-8529745949 India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Headquartered in Jaipur, India</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">Fast Implementation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">Cloud Application</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">Powerful BI/MIS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Institution Name</label>
                    <input
                      type="text"
                      {...register("company", { required: "Institution name is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your institution name"
                    />
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@institution.edu"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      {...register("phone", { required: "Phone is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your institution's needs..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Request Demo"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}