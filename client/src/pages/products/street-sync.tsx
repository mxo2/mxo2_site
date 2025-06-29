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
      {/* Hero Banner - MXO2 Branding */}
      <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 -mt-40 pt-40">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 min-h-[600px] flex items-center">
          <div className="container mx-auto px-4">
            {/* MXO2 Branding Header */}
            <div className="text-center mb-16">
              <h2 className="font-montserrat text-2xl lg:text-3xl text-white mb-2">
                Breathing Life into Businesses:
              </h2>
              <h3 className="font-montserrat text-xl lg:text-2xl text-blue-300 mb-1">
                Maximum Oxygen Inc's Decade-Long
              </h3>
              <h3 className="font-montserrat text-xl lg:text-2xl text-blue-300">
                Journey in IT Solutions<sup className="text-sm">TM</sup>
              </h3>
            </div>

            {/* Main Product Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Product Info */}
              <div className="text-white">
                <Badge className="bg-emerald-600 text-white hover:bg-emerald-700 mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  GPS-Based Tracking Solution
                </Badge>
                
                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl leading-tight mb-6">
                  Street Sync Tracker
                </h1>
                
                <h2 className="text-2xl lg:text-3xl text-emerald-300 mb-8 font-opensans">
                  GPS-based Tracking Solution for Efficient Street Cleaning and Employee Management
                </h2>

                {/* Key Features List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <p className="text-lg">Real-time GPS tracking for efficient route management</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <p className="text-lg">Provides live updates on location and work status</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <p className="text-lg">Monitors employee performance and time management</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <p className="text-lg">Accurate reporting of hours worked and areas covered</p>
                  </div>
                </div>
                
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                  Get Street Sync Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Right Column - Visual Representation */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="font-bold text-2xl text-white mb-6 text-center">
                    Comprehensive GPS Employee Tracking for Sweepers
                  </h3>
                  
                  {/* Dashboard Preview Mockup */}
                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <div className="bg-emerald-500 h-2 w-full rounded mb-2"></div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-blue-400 h-16 rounded flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-green-400 h-16 rounded flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-yellow-400 h-16 rounded flex items-center justify-center">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="bg-gray-700 h-12 rounded mb-2"></div>
                    <div className="bg-gray-700 h-8 rounded"></div>
                  </div>
                  
                  <p className="text-center text-blue-200 text-sm">
                    Real-time dashboard for monitoring street cleaning operations
                  </p>
                </div>
              </div>
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

      {/* Dashboard Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-4 text-center">
              Our Solutions Dashboard
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Complete monitoring and management system for street cleaning operations
            </p>

            {/* Dashboard Preview */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Dashboard Mockup */}
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="bg-blue-600 text-white p-3 rounded-lg mb-4">
                    <h3 className="font-bold text-lg">Manager Dashboard</h3>
                  </div>
                  
                  {/* Dashboard Elements */}
                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-white text-sm">Device Battery Level</span>
                      </div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="text-white text-sm">Geofencing Area</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-white text-sm">Employee Live Location</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-4">
                      <span className="text-emerald-400 text-sm font-medium">Employee In Their Area</span>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-4">
                      <span className="text-blue-400 text-sm font-medium">Employee Total Duration in Location</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Features */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-4">Centralized Management</h3>
                    <p className="text-gray-700 mb-4">This centralized dashboard allows office managers to:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>Monitor Live Location of all field employees in real time</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>View Geofenced Areas to ensure employees stay within assigned zones</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>Track Live Activity on the Map, including route movement and stopovers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>Check Device Status: Active, Idle, or Offline</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>Make Informed Decisions using visual maps, live status, and device analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Dashboard Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Employee Visit History */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-xl mb-4">Employee Visit History</h3>
                <p className="text-gray-600 mb-4">Stops • Idle Time • Movement Tracking</p>
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="space-y-2">
                    <div className="bg-blue-500 h-3 rounded w-full"></div>
                    <div className="bg-green-500 h-3 rounded w-3/4"></div>
                    <div className="bg-yellow-500 h-3 rounded w-1/2"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  This section displays the detailed history of an employee's movement including daily, weekly, and 30-day logs showing routes taken, idle durations, and stop locations.
                </p>
              </div>

              {/* Geofencing Window */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-xl mb-4">Geofencing Window</h3>
                <p className="text-gray-600 mb-4">Satellite View • Easy Fence Creation</p>
                <div className="bg-gray-100 rounded-lg p-4 mb-4 relative">
                  <div className="absolute inset-4 border-2 border-dashed border-emerald-500 rounded"></div>
                  <div className="h-24 bg-gradient-to-br from-green-200 to-blue-200 rounded"></div>
                </div>
                <p className="text-sm text-gray-600">
                  This section demonstrates how to define a geofence around a specific location using satellite imagery for precision and ease.
                </p>
              </div>
            </div>

            {/* Live Tracking Features */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Employee Live Location */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-xl mb-4">Employee Live Location</h3>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-400 text-sm">Battery: 85%</span>
                    <span className="text-blue-400 text-sm">Speed: 12 km/h</span>
                  </div>
                  <div className="bg-gray-700 h-16 rounded flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-emerald-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  This section displays the real-time location of each device, along with technical metrics such as battery status, speed, and sensor activity.
                </p>
              </div>

              {/* Street View */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-xl mb-4">Street View</h3>
                <div className="bg-gradient-to-b from-blue-400 to-green-400 rounded-lg p-4 mb-4">
                  <div className="bg-white/20 h-16 rounded flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  This section provides a real-time street-level view of the location where the device is currently active, enhancing situational awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
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