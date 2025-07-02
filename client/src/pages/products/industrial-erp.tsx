import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Factory, Cog, BarChart3, Package, Users, Shield, Clock, CheckCircle, Truck, Settings, Database, TrendingUp, Wrench, FileText, Target } from "lucide-react";

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

export default function IndustrialERP() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      reset();
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
          {/* Left Side - Industrial Theme */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center">
            {/* Industrial pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/30 via-transparent to-blue-900/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
            
            {/* Manufacturing grid pattern */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="manufacturing-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <rect width="25" height="25" fill="none" stroke="white" strokeWidth="0.5"/>
                    <circle cx="12.5" cy="12.5" r="2" fill="white" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#manufacturing-grid)" />
              </svg>
            </div>

            <div className="relative z-10 px-8 lg:px-12 max-w-lg">
              <div className="mb-6">
                <Badge className="bg-blue-600 text-white hover:bg-blue-700 mb-6 px-4 py-2">
                  <Factory className="w-4 h-4 mr-2" />
                  Manufacturing ERP Solution
                </Badge>
                
                <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-white mb-4 leading-tight">
                  MXO2 Industrial ERP
                </h1>
                
                <h2 className="font-montserrat text-2xl lg:text-3xl text-white font-medium mb-6">
                  Complete Manufacturing Excellence
                </h2>
                
                <p className="text-xl text-gray-200 mb-8 font-opensans leading-relaxed">
                  Comprehensive enterprise resource planning solution designed for manufacturing operations with integrated production, inventory, and quality management
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                    Schedule Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                    View Features
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Industrial Visualization */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <Factory className="w-24 h-24 text-blue-600" />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Cog className="w-6 h-6 text-green-600 animate-spin" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Inventory</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Analytics</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Manufacturing Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Manufacturing Features</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete manufacturing control with real-time visibility across all production operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Bill of Materials (BOM)</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Multi-level BOMs with hierarchical structure</li>
                  <li>• Raw material specifications and UoMs</li>
                  <li>• Operation sequences and routing</li>
                  <li>• Automated cost estimation</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Production Planning</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Material Requirements Planning (MRP)</li>
                  <li>• Capacity planning and optimization</li>
                  <li>• Work order management</li>
                  <li>• Production scheduling</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Inventory Management</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Real-time stock tracking</li>
                  <li>• Batch and serial number control</li>
                  <li>• Warehouse management</li>
                  <li>• Projected quantity calculation</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Production Control</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Work order tracking and monitoring</li>
                  <li>• Material issue and receipt</li>
                  <li>• Backflushing automation</li>
                  <li>• Job card generation</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Quality Control</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Built-in quality inspection workflows</li>
                  <li>• Defect tracking and analysis</li>
                  <li>• Compliance management</li>
                  <li>• Quality standards enforcement</li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Resource Management</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Workstation setup and configuration</li>
                  <li>• Resource allocation optimization</li>
                  <li>• Bottleneck identification</li>
                  <li>• Equipment utilization tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Types Supported</h2>
              <p className="text-xl text-gray-600">
                Flexible production methodologies for diverse manufacturing requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Make-to-Stock</h3>
                <p className="text-gray-600 text-center">Forecast-based production for inventory management with demand planning</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Make-to-Order</h3>
                <p className="text-gray-600 text-center">Customer-specific manufacturing with customized product configurations</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Engineer-to-Order</h3>
                <p className="text-gray-600 text-center">Custom design and manufacturing for specialized project requirements</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Batch Production</h3>
                <p className="text-gray-600 text-center">Controlled lot-based manufacturing with complete batch traceability</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Process Manufacturing</h3>
                <p className="text-gray-600 text-center">Continuous production workflows for chemical and process industries</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Subcontracting</h3>
                <p className="text-gray-600 text-center">Outsourced manufacturing operations with material supply tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integration</h2>
              <p className="text-xl text-gray-600">
                Connect all business operations with comprehensive module integration
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sales & Purchase Integration</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Demand-driven production from sales orders</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Automated purchase requisitions based on material requirements</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Real-time production status visibility for sales teams</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Supplier coordination and performance tracking</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="text-center">
                  <Truck className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Supply Chain Optimization</h4>
                  <p className="text-gray-600">End-to-end visibility from procurement to delivery with integrated logistics</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-green-50 rounded-xl p-8">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Financial Integration</h4>
                  <p className="text-gray-600">Complete cost accounting with real-time financial reporting and analysis</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Accounting & HR Integration</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Manufacturing cost tracking including materials, labor, and overhead</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Work-in-progress valuation and inventory accounting</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Labor tracking and payroll integration</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Skill management and resource allocation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Advanced Analytics & Reporting</h2>
              <p className="text-xl text-blue-100">
                Data-driven insights for manufacturing excellence and continuous improvement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Production Efficiency</h3>
                <p className="text-blue-100 text-sm">Monitor manufacturing performance metrics and productivity KPIs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cost Analysis</h3>
                <p className="text-blue-100 text-sm">Detailed breakdown of production expenses and profitability analysis</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Inventory Analytics</h3>
                <p className="text-blue-100 text-sm">Stock level optimization, turnover analysis, and demand forecasting</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Resource Utilization</h3>
                <p className="text-blue-100 text-sm">Track equipment efficiency, labor productivity, and capacity utilization</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Manufacturing Operations</h2>
              <p className="text-xl text-gray-600">
                Get started with MXO2 Industrial ERP and optimize your production processes
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose mx<span className="text-cyan-600">O₂</span> Industrial ERP?</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Complete manufacturing visibility and control</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Integrated business operations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Real-time analytics and reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Scalable and customizable platform</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Expert implementation and support</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Implementation Approach</h4>
                  <p className="text-gray-600 text-sm">Our experienced team provides end-to-end implementation with minimal disruption to your operations, including data migration, user training, and ongoing support.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      {...register("company", { required: "Company name is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your manufacturing company"
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
                      placeholder="your.email@company.com"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturing Requirements</label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your manufacturing operations and ERP requirements..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Schedule Demo"}
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