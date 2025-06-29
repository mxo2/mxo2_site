import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock, Shield, Users, CheckCircle, BarChart3, Eye } from "lucide-react";
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

export default function StreetSync() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify({ ...data, service: "Street Sync GPS Tracking" }),
      });
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
      <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-r from-emerald-600 via-green-700 to-teal-800 -mt-40 pt-40">
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
                <MapPin className="w-4 h-4 mr-2" />
                GPS-Based Tracking Solution
              </Badge>
              
              <h1 className="font-montserrat font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
                Street Sync Tracker
                <br />
                <span className="text-emerald-300">Efficient Street Cleaning & Employee Management</span>
              </h1>
              
              <p className="text-lg lg:text-xl mb-8 text-emerald-100 leading-relaxed max-w-3xl mx-auto font-opensans">
                Real-time GPS tracking for efficient route management with live updates on location, work status, and comprehensive employee performance monitoring.
              </p>
              
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                Get Street Sync Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Street Sync Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Why Street Sync Tracker?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-emerald-50 rounded-lg">
                <BarChart3 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Increased Productivity</h3>
                <p className="text-gray-700">Streamline routes and reduce idle time, boosting the overall efficiency of street sweepers.</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Real-Time Monitoring</h3>
                <p className="text-gray-700">Track employee location and progress in real-time, ensuring compliance with daily tasks.</p>
              </div>
              
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Cost-Effective Operations</h3>
                <p className="text-gray-700">Optimize manpower allocation, reduce operational costs, and improve service delivery.</p>
              </div>
              
              <div className="text-center p-6 bg-emerald-50 rounded-lg">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Accountability</h3>
                <p className="text-gray-700">Automatic recording of work data for accurate payroll and compliance checks.</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Public Satisfaction</h3>
                <p className="text-gray-700">Enhanced visibility of municipal cleaning operations, leading to improved public perception and trust.</p>
              </div>
              
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <Clock className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Time Tracking</h3>
                <p className="text-gray-700">Detailed logs of time spent at each location, ensuring optimal productivity and accurate reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Comprehensive GPS Employee Tracking for Sweepers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Real-Time GPS Tracking</h3>
                <p className="text-gray-700">Efficient route management with live updates on location and work status for all field employees.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Employee Performance Monitoring</h3>
                <p className="text-gray-700">Monitor employee performance and time management with detailed analytics and reporting.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Accurate Reporting</h3>
                <p className="text-gray-700">Precise reporting of hours worked and areas covered for compliance and payroll accuracy.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Geofencing & Zones</h3>
                <p className="text-gray-700">Define work areas and receive alerts when employees enter or exit designated zones.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Mobile App Integration</h3>
                <p className="text-gray-700">Intuitive mobile app for field staff with easy-to-use interface for non-technical employees.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">Cloud-Based Dashboard</h3>
                <p className="text-gray-700">Real-time access to employee locations, geofence activity, and status alerts from any device.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Advanced Device Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Long-Lasting Battery</h3>
                <p className="text-sm text-gray-600">Inbuilt battery for extended tracking periods</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Voice Monitoring</h3>
                <p className="text-sm text-gray-600">Inbuilt voice monitoring mic for communication</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Panic Alerts</h3>
                <p className="text-sm text-gray-600">Emergency panic button for worker safety</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Two-Way Calling</h3>
                <p className="text-sm text-gray-600">Direct communication between field and office</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Asset Tracking</h3>
                <p className="text-sm text-gray-600">Track equipment and vehicle locations</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">History Playback</h3>
                <p className="text-sm text-gray-600">Review historical movement and activity data</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Emergency Response</h3>
                <p className="text-sm text-gray-600">Quick response system for emergencies</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Lightweight Design</h3>
                <p className="text-sm text-gray-600">Portable and easy to carry for field workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              Seamless Integration & Scalable Support
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-bold text-xl mb-3">Quick Setup</h3>
                <p className="text-gray-700">Plug-and-play installation on sweeper equipment with minimal downtime and hassle-free GPS device setup.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-bold text-xl mb-3">Mobile App Training</h3>
                <p className="text-gray-700">Intuitive mobile app designed for ease of use by non-technical employees to ensure accurate tracking.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-bold text-xl mb-3">Dashboard Access</h3>
                <p className="text-gray-700">Cloud-based dashboard for managers with real-time access to employee locations and geofence activity.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-bold text-xl mb-3">Ongoing Support</h3>
                <p className="text-gray-700">24/7 dedicated support with ongoing technical assistance and training to resolve issues quickly and effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
              Ready to Transform Your Street Cleaning Operations?
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Future-ready and scalable solution that easily expands to support additional wards, routes, or employee roles as your municipality grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4">
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4">
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
              Get Street Sync for Your Municipality
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="your.email@municipality.gov"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Municipality/Company</label>
                  <input
                    {...register("company")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your municipality or organization"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="+91 98296 49640"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Tell us about your street cleaning tracking requirements..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Request Street Sync Demo"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}