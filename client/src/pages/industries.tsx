import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Building, 
  Heart, 
  Landmark, 
  ShoppingCart, 
  TrendingUp, 
  Smartphone, 
  ArrowRight, 
  Factory,
  Shield,
  Zap,
  Brain,
  Globe,
  CheckCircle,
  BarChart3,
  Users,
  Settings,
  Cloud
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Transform patient care with AI-driven diagnostics, telehealth platforms, and secure healthcare data management systems.",
      features: [
        "AI-powered medical diagnostics",
        "Telehealth platform development", 
        "Electronic health records (EHR)",
        "Healthcare cybersecurity",
        "Patient data analytics",
        "Medical device integration"
      ],
      growth: "8% CAGR",
      marketValue: "$144B by 2028",
      keyTrends: ["AI diagnostics adoption", "Telehealth expansion", "IoT medical devices"],
      color: "bg-red-50 border-red-200"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Enable Industry 4.0 transformation with IoT integration, predictive maintenance, and intelligent supply chain optimization.",
      features: [
        "Industry 4.0 implementation",
        "IoT sensor networks",
        "Predictive maintenance systems",
        "Digital twin technology",
        "Supply chain digitization",
        "Robotic process automation"
      ],
      growth: "11.2% CAGR",
      marketValue: "$3.7T potential value",
      keyTrends: ["Smart factory adoption", "AI demand forecasting", "Digital twins"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      description: "Secure financial operations with advanced cybersecurity, regulatory compliance, and AI-powered fraud detection systems.",
      features: [
        "Advanced cybersecurity solutions",
        "AI fraud detection",
        "Regulatory compliance automation",
        "Cloud transformation",
        "Blockchain integration",
        "Intelligent document processing"
      ],
      growth: "13.3% CAGR",
      marketValue: "$186B by 2029",
      keyTrends: ["Cloud-first initiatives", "AI compliance tools", "Zero-trust security"],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: ShoppingCart,
      title: "Retail & Consumer Goods",
      description: "Enhance customer experience with omnichannel platforms, personalization engines, and intelligent inventory management.",
      features: [
        "E-commerce platform development",
        "Omnichannel integration",
        "AI-powered personalization",
        "Inventory optimization",
        "Customer analytics",
        "Mobile commerce solutions"
      ],
      growth: "Digital transformation focus",
      marketValue: "50% marketing investment",
      keyTrends: ["Personalization engines", "Mobile commerce", "Supply chain visibility"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: Landmark,
      title: "Government & Public Sector",
      description: "Modernize public services with digital transformation, citizen service platforms, and secure government cloud solutions.",
      features: [
        "Digital modernization",
        "Citizen service platforms",
        "Government cloud migration",
        "Digital identity systems",
        "Data analytics for governance",
        "Cybersecurity for public sector"
      ],
      growth: "Cloud-first policies",
      marketValue: "Federal AI initiatives",
      keyTrends: ["Digital citizen services", "AI governance", "Cloud migration"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: Smartphone,
      title: "Technology & Telecommunications",
      description: "Accelerate innovation with 5G networks, IoT platforms, and next-generation software development solutions.",
      features: [
        "5G network infrastructure",
        "IoT platform development",
        "Software development acceleration",
        "API management",
        "DevOps automation",
        "Edge computing solutions"
      ],
      growth: "67% AI impact expected",
      marketValue: "Leading AI adoption",
      keyTrends: ["5G deployment", "Edge computing", "AI integration"],
      color: "bg-teal-50 border-teal-200"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden -mt-40 pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/30 via-transparent to-blue-900/40"></div>
        <div className="relative z-10 min-h-[500px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-blue-600 text-white hover:bg-blue-700 mb-6 px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                Industry Expertise
              </Badge>
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Transforming Industries with Technology
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
                Specialized solutions tailored to the unique challenges and opportunities across diverse industries, powered by AI and cloud technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Market Leadership Across Sectors</h2>
              <p className="text-xl text-gray-600">
                Driving digital transformation in high-growth industries with proven expertise and innovative solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$383B</h3>
                <p className="text-gray-600">Digital Transformation Market</p>
                <Badge className="bg-green-100 text-green-800 mt-2">11.2% CAGR</Badge>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$186B</h3>
                <p className="text-gray-600">IT Consulting by 2029</p>
                <Badge className="bg-blue-100 text-blue-800 mt-2">13.3% CAGR</Badge>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">35%</h3>
                <p className="text-gray-600">Companies Using AI</p>
                <Badge className="bg-purple-100 text-purple-800 mt-2">Rapidly Growing</Badge>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$1.3T</h3>
                <p className="text-gray-600">Global Cloud Spending</p>
                <Badge className="bg-orange-100 text-orange-800 mt-2">By 2025</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
              <p className="text-xl text-gray-600">
                Comprehensive technology solutions designed for industry-specific challenges
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className={`${industry.color} border-2 shadow-lg hover:shadow-xl transition-shadow`}>
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                          <industry.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-2xl text-gray-900 mb-1">
                            {industry.title}
                          </h3>
                          <div className="flex space-x-2">
                            <Badge className="bg-blue-100 text-blue-800 text-xs">
                              {industry.growth}
                            </Badge>
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              {industry.marketValue}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.features.slice(0, 6).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Trends:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.keyTrends.map((trend, trendIndex) => (
                          <Badge key={trendIndex} className="bg-gray-100 text-gray-700 text-xs">
                            {trend}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <a className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                        Explore Industry Solutions <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Leadership */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Technology Leadership</h2>
              <p className="text-xl text-blue-100">
                Advanced capabilities driving transformation across all industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Brain className="w-12 h-12 text-white mb-4" />
                <h4 className="text-lg font-semibold mb-2">Artificial Intelligence</h4>
                <p className="text-blue-100 text-sm">Machine learning, predictive analytics, and intelligent automation for data-driven insights</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Cloud className="w-12 h-12 text-white mb-4" />
                <h4 className="text-lg font-semibold mb-2">Cloud Architecture</h4>
                <p className="text-blue-100 text-sm">Scalable cloud solutions on AWS, Azure, and hybrid environments for optimal performance</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Shield className="w-12 h-12 text-white mb-4" />
                <h4 className="text-lg font-semibold mb-2">Cybersecurity</h4>
                <p className="text-blue-100 text-sm">Advanced security frameworks, zero-trust architecture, and compliance management</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Settings className="w-12 h-12 text-white mb-4" />
                <h4 className="text-lg font-semibold mb-2">Process Automation</h4>
                <p className="text-blue-100 text-sm">Intelligent workflows, robotic process automation, and business process optimization</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Users className="w-12 h-12 text-white mb-4" />
                <h4 className="text-lg font-semibold mb-2">Digital Experience</h4>
                <p className="text-blue-100 text-sm">User-centric design, mobile applications, and omnichannel customer experiences</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <BarChart3 className="w-12 h-12 text-white mb-4" />
                <h4 className="text-lg font-semibold mb-2">Data Analytics</h4>
                <p className="text-blue-100 text-sm">Business intelligence, real-time analytics, and data visualization for strategic decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Success Stories</h2>
              <p className="text-xl text-gray-600">
                Real-world transformations across sectors, delivering measurable business value
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Government Success */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Landmark className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    StreetSync - Municipal Workforce Management
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Government collaboration implementing real-time GPS tracking and geo-fenced attendance for municipal sanitation workers, streamlining operations across multiple cities.
                  </p>
                  <div className="mb-4">
                    <Badge className="bg-orange-100 text-orange-800 text-xs mr-2">Government</Badge>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">GPS Tracking</Badge>
                  </div>
                  <Link href="/products/street-sync">
                    <a className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors text-sm">
                      View Solution <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>

              {/* Education Success */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Parallel Campus - AI School Ecosystem
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    AI-powered education platform serving 1M+ students with smart classroom planning, learning analytics, and AI-driven support for teachers and parents.
                  </p>
                  <div className="mb-4">
                    <Badge className="bg-purple-100 text-purple-800 text-xs mr-2">Education</Badge>
                    <Badge className="bg-green-100 text-green-800 text-xs">1M+ Users</Badge>
                  </div>
                  <Link href="/products/parallel-campus">
                    <a className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors text-sm">
                      View Solution <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>

              {/* Manufacturing Success */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Industrial ERP - Manufacturing Excellence
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Comprehensive ERP solution for manufacturing with production planning, inventory management, and quality control systems integrated with IoT sensors.
                  </p>
                  <div className="mb-4">
                    <Badge className="bg-blue-100 text-blue-800 text-xs mr-2">Manufacturing</Badge>
                    <Badge className="bg-teal-100 text-teal-800 text-xs">IoT Integration</Badge>
                  </div>
                  <Link href="/products/industrial-erp">
                    <a className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors text-sm">
                      View Solution <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our industry-specific solutions can accelerate your digital transformation and drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                Download Industry Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
