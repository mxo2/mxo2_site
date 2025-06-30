import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Brain, Zap, BarChart3, Target, Shield, Clock, CheckCircle, Smartphone, Mail, MessageSquare, TrendingUp, Eye, Settings, Globe, Star, Activity } from "lucide-react";

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

export default function CRM() {
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
          {/* Left Side - CRM Theme */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center">
            {/* CRM pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/30 via-transparent to-blue-900/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
            
            {/* Customer relationship grid pattern */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="crm-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="3" fill="white" opacity="0.3"/>
                    <line x1="10" y1="10" x2="20" y2="10" stroke="white" strokeWidth="0.5" opacity="0.2"/>
                    <line x1="10" y1="10" x2="10" y2="20" stroke="white" strokeWidth="0.5" opacity="0.2"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#crm-grid)" />
              </svg>
            </div>

            <div className="relative z-10 px-8 lg:px-12 max-w-lg">
              <div className="mb-6">
                <Badge className="bg-blue-600 text-white hover:bg-blue-700 mb-6 px-4 py-2">
                  <Brain className="w-4 h-4 mr-2" />
                  AI-Powered CRM Solution
                </Badge>
                
                <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-white mb-4 leading-tight">
                  mx<span className="text-cyan-300">O₂</span> CRM
                </h1>
                
                <h2 className="font-montserrat text-2xl lg:text-3xl text-white font-medium mb-6">
                  Intelligent Customer Relationships
                </h2>
                
                <p className="text-xl text-gray-200 mb-8 font-opensans leading-relaxed">
                  Advanced CRM platform with AI automation, predictive analytics, and intelligent customer insights for accelerated business growth
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CRM Visualization */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <Users className="w-24 h-24 text-blue-600" />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Lead Scoring</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Analytics</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI-Powered Customer Intelligence</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Transform your customer relationships with advanced artificial intelligence and machine learning capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">AI Lead Scoring</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Intelligent lead prioritization based on behavior</li>
                  <li>• Predictive conversion probability analysis</li>
                  <li>• Automated lead distribution to sales teams</li>
                  <li>• Real-time scoring model updates</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Predictive Analytics</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Sales forecasting with machine learning</li>
                  <li>• Customer churn prediction</li>
                  <li>• Revenue opportunity identification</li>
                  <li>• Market trend analysis</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Customer Segmentation</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• AI-powered behavioral segmentation</li>
                  <li>• Dynamic customer personas</li>
                  <li>• Personalized engagement strategies</li>
                  <li>• Cross-selling opportunity detection</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Conversation Intelligence</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Sentiment analysis for customer interactions</li>
                  <li>• Automated meeting transcription</li>
                  <li>• Communication insights and coaching</li>
                  <li>• Next best action recommendations</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Smart Automation</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Intelligent workflow automation</li>
                  <li>• Personalized email sequences</li>
                  <li>• Automated task assignment</li>
                  <li>• Dynamic content generation</li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Real-time Insights</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Live customer activity tracking</li>
                  <li>• Performance dashboards</li>
                  <li>• Pipeline health monitoring</li>
                  <li>• Instant alert notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core CRM Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete CRM Platform</h2>
              <p className="text-xl text-gray-600">
                Everything you need to manage customers, sales, and grow your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead Management</h3>
                <p className="text-gray-600 text-sm">Capture, track, and convert leads with intelligent automation</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Pipeline</h3>
                <p className="text-gray-600 text-sm">Visual pipeline management with stage progression tracking</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Management</h3>
                <p className="text-gray-600 text-sm">360-degree customer profiles with interaction history</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Integration</h3>
                <p className="text-gray-600 text-sm">Seamless email tracking and automated sequences</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Task Management</h3>
                <p className="text-gray-600 text-sm">Automated task creation and intelligent scheduling</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Forecasting</h3>
                <p className="text-gray-600 text-sm">AI-powered revenue predictions and trend analysis</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Analytics</h3>
                <p className="text-gray-600 text-sm">Deep insights into customer behavior and preferences</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile CRM</h3>
                <p className="text-gray-600 text-sm">Full CRM functionality on mobile with offline access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Workflows */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Automation Workflows</h2>
              <p className="text-xl text-gray-600">
                Streamline your sales process with smart automation that works around the clock
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Lead Nurturing Automation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Automated lead capture from multiple channels</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Personalized email sequences based on behavior</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Intelligent lead scoring and qualification</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Automated handoff to sales team</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl p-8">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart Workflows</h4>
                  <p className="text-gray-600">AI-driven automation that adapts to customer behavior and optimizes engagement timing</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="text-center">
                  <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Predictive Intelligence</h4>
                  <p className="text-gray-600">Machine learning algorithms that predict customer needs and recommend optimal actions</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sales Process Automation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Automated deal progression and stage updates</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Intelligent task creation and assignment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Automated proposal and contract generation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Real-time performance alerts and notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Analytics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Advanced Analytics & Integration</h2>
              <p className="text-xl text-blue-100">
                Connect your entire tech stack and gain deep insights into your sales performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sales Analytics</h3>
                <p className="text-blue-100 text-sm">Revenue tracking, conversion rates, and performance metrics</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Customer Insights</h3>
                <p className="text-blue-100 text-sm">Behavior analysis, satisfaction scores, and loyalty metrics</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Forecasting</h3>
                <p className="text-blue-100 text-sm">AI-powered sales predictions and market trend analysis</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Integrations</h3>
                <p className="text-blue-100 text-sm">Connect with 500+ apps including email, marketing, and accounting</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Settings className="w-12 h-12 text-white mb-4" />
                <h4 className="text-lg font-semibold mb-2">Marketing Automation</h4>
                <p className="text-blue-100 text-sm">Seamless integration with marketing platforms for lead attribution and campaign tracking</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Shield className="w-12 h-12 text-white mb-4" />
                <h4 className="text-lg font-semibold mb-2">Enterprise Security</h4>
                <p className="text-blue-100 text-sm">Bank-level security with encryption, SSO, and compliance certifications</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Star className="w-12 h-12 text-white mb-4" />
                <h4 className="text-lg font-semibold mb-2">Custom Solutions</h4>
                <p className="text-blue-100 text-sm">Tailored CRM configurations and custom integrations for unique business needs</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Customer Relationships</h2>
              <p className="text-xl text-gray-600">
                Start your free trial of MXO2 CRM and experience the power of AI-driven customer management
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose mx<span className="text-cyan-600">O₂</span> CRM?</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">AI-powered automation and intelligence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Complete sales pipeline management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Advanced analytics and reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Seamless third-party integrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Mobile-first design with offline capabilities</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Free Trial Benefits</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 30-day full access to all features</li>
                    <li>• No credit card required</li>
                    <li>• Dedicated onboarding support</li>
                    <li>• Data migration assistance</li>
                  </ul>
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
                      placeholder="Your company name"
                    />
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      {...register("phone", { required: "Phone is required" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current CRM Challenges</label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your current sales process and CRM challenges..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Starting Trial..." : "Start Free Trial"}
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