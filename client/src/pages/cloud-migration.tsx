import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud, Shield, Zap, Target, CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import aiEmployeeImage from "@assets/employee-using-ai-computing-simulation-2023-08-23-02-06-48-utc_1751104050861.jpg";
import awsLogo from "@assets/aws_1751108372357.png";
import azureLogo from "@assets/azure_1751108372358.png";

export default function CloudMigration() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 -mt-40 pt-40">
        {/* Background pattern */}
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

        {/* Content */}
        <div className="relative z-10 min-h-[600px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud Migration Experts
                </Badge>
                
                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
                  Seamless Cloud Migration
                  <br />
                  <span className="text-cyan-300">Without the Risk</span>
                </h1>
                
                <p className="text-lg lg:text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl font-opensans">
                  Transform your infrastructure with enterprise-grade cloud migration services. 
                  Zero downtime, maximum security, and guaranteed performance optimization.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
                    Start Your Migration
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                    Free Assessment
                  </Button>
                </div>
                
                <div className="flex items-center space-x-6 text-blue-200">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-opensans">Zero Downtime</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="font-opensans">Enterprise Security</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="font-opensans">Certified Experts</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={aiEmployeeImage}
                    alt="Cloud migration technology and infrastructure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime SLA</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Multi-Cloud Migration Excellence
            </h2>
            <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
              Certified experts in all major cloud platforms with proven migration methodologies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <img src={awsLogo} alt="AWS" className="w-12 h-12 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-montserrat">Amazon Web Services</h3>
                  <p className="text-gray-600 font-opensans">AWS Advanced Consulting Partner</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700 font-opensans">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  EC2, RDS, S3, Lambda migration expertise
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Well-Architected Framework implementation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Cost optimization and right-sizing
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <img src={azureLogo} alt="Microsoft Azure" className="w-12 h-12 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-montserrat">Microsoft Azure</h3>
                  <p className="text-gray-600 font-opensans">Gold Cloud Platform Partner</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700 font-opensans">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Azure Virtual Machines, SQL Database, Storage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  Hybrid cloud and Active Directory integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  DevOps and automation pipelines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Our Proven Migration Process
            </h2>
            <p className="text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
              A systematic approach that minimizes risk and maximizes business value
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Phase 1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">Assessment & Planning</h3>
              <p className="text-gray-600 font-opensans leading-relaxed">
                Comprehensive infrastructure audit, application dependencies mapping, and detailed migration roadmap creation.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Shield className="w-10 h-10 text-purple-600" />
              </div>
              <div className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Phase 2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">Security & Compliance</h3>
              <p className="text-gray-600 font-opensans leading-relaxed">
                Implementation of security frameworks, compliance requirements, and data protection protocols.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Zap className="w-10 h-10 text-green-600" />
              </div>
              <div className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Phase 3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">Migration Execution</h3>
              <p className="text-gray-600 font-opensans leading-relaxed">
                Phased migration with continuous monitoring, testing, and rollback capabilities to ensure zero downtime.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <TrendingUp className="w-10 h-10 text-red-600" />
              </div>
              <div className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Phase 4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">Optimization & Support</h3>
              <p className="text-gray-600 font-opensans leading-relaxed">
                Post-migration optimization, performance tuning, cost management, and ongoing 24/7 support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-montserrat">
              Why Choose MXO2 for Cloud Migration?
            </h2>
            <p className="text-xl text-blue-100 font-opensans max-w-3xl mx-auto">
              Proven expertise, enterprise-grade security, and guaranteed business continuity
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="text-cyan-300 mb-6">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">Zero-Risk Migration</h3>
              <p className="text-blue-100 font-opensans leading-relaxed">
                Comprehensive backup strategies, rollback procedures, and disaster recovery planning ensure your business never stops running.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="text-green-300 mb-6">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">Expert Team</h3>
              <p className="text-blue-100 font-opensans leading-relaxed">
                AWS and Azure certified architects with 15+ years of enterprise migration experience across Fortune 500 companies.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="text-yellow-300 mb-6">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">Proven Results</h3>
              <p className="text-blue-100 font-opensans leading-relaxed">
                98% client retention rate, 40% average cost reduction, and 100% on-time delivery record across all migration projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-montserrat">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-opensans max-w-3xl mx-auto">
            Get a free migration assessment and discover how MXO2 can transform your infrastructure while reducing costs and improving performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg">
              Get Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
              Download Migration Guide
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">100+</div>
              <div className="text-gray-400 font-opensans">Successful Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400 font-opensans">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400 font-opensans">Expert Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}