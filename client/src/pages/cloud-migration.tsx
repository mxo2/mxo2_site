import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Cloud, Shield, Zap, Target, CheckCircle, Users, Award, TrendingUp, ChevronDown } from "lucide-react";
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
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <Target className="w-8 h-8 text-white" />
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
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
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
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <Zap className="w-8 h-8 text-white" />
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
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
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

      {/* Our Cloud Migration Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 font-montserrat">
                  Our Cloud Migration Services
                </h2>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="assessment" className="border border-gray-200 rounded-lg bg-white">
                    <AccordionTrigger className="px-6 py-4 bg-blue-600 text-white rounded-t-lg hover:bg-blue-700 [&[data-state=open]]:rounded-b-none">
                      <span className="font-semibold">Assessment and Strategy</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-6 bg-white rounded-b-lg">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-4 font-opensans">
                            Receive a holistic assessment of your IT environment. For a secure, compliant, and unbiased roadmap to the cloud, we'll:
                          </p>
                          <ul className="space-y-3 text-gray-700 font-opensans">
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>Catalog your existing applications, infrastructure and network architecture to help prioritize workloads and applications.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>Determine which cloud platform(s) fit your overall transformation objectives.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>Design a high-level target infrastructure and cloud platform architecture that accommodates your security and risk requirements.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>Assess your existing workloads and predict future cloud consumption to estimate your costs.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>Explore your detailed deployment strategy and migration tools for all applications and future recommendations.</span>
                            </li>
                          </ul>
                          <div className="mt-6">
                            <p className="text-purple-600 font-opensans text-sm">
                              Optimising Your AWS Cloud Migration: 4 Paths for a Successful Move to the Cloud →
                            </p>
                          </div>
                          <div className="mt-4">
                            <p className="text-gray-700 font-opensans text-sm font-semibold">
                              Related Resources:
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <img 
                            src={aiEmployeeImage}
                            alt="Assessment and strategy consultation"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="infrastructure" className="border border-gray-200 rounded-lg bg-white">
                    <AccordionTrigger className="px-6 py-4 bg-blue-600 text-white rounded-t-lg hover:bg-blue-700 [&[data-state=open]]:rounded-b-none">
                      <span className="font-semibold">Infrastructure & Database Migration</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-6 bg-white rounded-b-lg">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-4 font-opensans">
                            Moving your foundation safely and efficiently:
                          </p>
                          <ul className="space-y-3 text-gray-700 font-opensans">
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>Infrastructure Migration ("Lift & Shift") - We migrate VMware or Hyper-V virtual machines into Azure VMs or AWS EC2 with minimal downtime.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>Database Platform Modernization - From SQL Server and Oracle to MySQL and PostgreSQL, we transition both schema and data into managed cloud databases.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>Seamless Cut-Over Planning - Our migration playbook includes runbooks, test scripts, and rollback plans.</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex items-center justify-center">
                          <img 
                            src={aiEmployeeImage}
                            alt="Infrastructure migration in progress"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="application" className="border border-gray-200 rounded-lg bg-white">
                    <AccordionTrigger className="px-6 py-4 bg-blue-600 text-white rounded-t-lg hover:bg-blue-700 [&[data-state=open]]:rounded-b-none">
                      <span className="font-semibold">Application Migration & Modernization</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-6 bg-white rounded-b-lg">
                      <p className="text-gray-700 mb-4 font-opensans">
                        Evolve your apps from monoliths to cloud-native services:
                      </p>
                      <ul className="space-y-3 text-gray-700 font-opensans">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Rehosting for Fast Results - We lift entire application stacks into the cloud "as-is" to realize immediate scalability and cost savings.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Refactoring & Containerization - We break down monolithic apps into microservices or container images, orchestrated by Kubernetes.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Rearchitecting to Cloud-Native - For mission-critical systems, we redesign using serverless functions and event-driven architectures.</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="optimization" className="border border-gray-200 rounded-lg bg-white">
                    <AccordionTrigger className="px-6 py-4 bg-blue-600 text-white rounded-t-lg hover:bg-blue-700 [&[data-state=open]]:rounded-b-none">
                      <span className="font-semibold">Post-Migration Optimization (Cloud CA)</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-6 bg-white rounded-b-lg">
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-700 mb-4 font-opensans">
                            Achieve peak efficiency with ongoing cost and performance tuning:
                          </p>
                          <ul className="space-y-3 text-gray-700 font-opensans">
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>Resource Rightsizing - We continuously analyze CPU, memory, and storage utilization to identify over-provisioned or idle resources.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>FinOps Framework & Governance - With tagging standards, budget alerts, and show-back/charge-back reporting, we embed FinOps best practices.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>Continuous Security & Performance Hardening - We enforce encryption at rest/in transit, fine-grained IAM policies, and vulnerability scanning.</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex items-center justify-center">
                          <img 
                            src={aiEmployeeImage}
                            alt="Cloud optimization and monitoring"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="managed" className="border border-gray-200 rounded-lg bg-white">
                    <AccordionTrigger className="px-6 py-4 bg-blue-600 text-white rounded-t-lg hover:bg-blue-700 [&[data-state=open]]:rounded-b-none">
                      <span className="font-semibold">Managed Cloud Operations</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-6 bg-white rounded-b-lg">
                      <p className="text-gray-700 mb-4 font-opensans">
                        Full-lifecycle support so you can focus on innovation:
                      </p>
                      <ul className="space-y-3 text-gray-700 font-opensans">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>24x7 Monitoring & Incident Response - Our NOC leverages Azure Monitor, AWS CloudWatch, and third-party tools to detect anomalies and trigger alerts.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Backup, DR & Cross-Region Failover - We implement fully automated backups, periodic DR drills, and cross-region replication strategies.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Patch Management & Compliance Reporting - Regular OS and platform patching is orchestrated with automated approval workflows.</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="infrastructure" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12 bg-gray-100 p-1 rounded-lg">
                <TabsTrigger value="infrastructure" className="font-opensans font-medium text-sm">
                  Infrastructure Migration
                </TabsTrigger>
                <TabsTrigger value="database" className="font-opensans font-medium text-sm">
                  Database Migration
                </TabsTrigger>
                <TabsTrigger value="application" className="font-opensans font-medium text-sm">
                  Application Migration
                </TabsTrigger>
                <TabsTrigger value="office365" className="font-opensans font-medium text-sm">
                  Office 365 Migration
                </TabsTrigger>
              </TabsList>

              <TabsContent value="infrastructure" className="mt-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-blue-600 mb-4 font-montserrat">
                      Infrastructure Migration
                    </h3>
                    <p className="text-blue-600 mb-8 font-opensans">
                      Migrate your servers, storage, and network to Azure or AWS with confidence and minimal downtime.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Lift & Shift:</h4>
                        <p className="text-gray-700 mb-4 font-opensans">
                          Automate VM replication (Azure Migrate/AWS SMS) and cut over during planned windows.
                        </p>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Network & Security:</h4>
                        <p className="text-gray-700 font-opensans">
                          Mirror your topology in VNet/VPC, set up VPN/Direct Connect, and enforce cloud-native firewall rules.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Right-Size & Replatform:</h4>
                        <p className="text-gray-700 mb-4 font-opensans">
                          Convert images to cloud format, choose optimal VM families, and tier storage for cost and performance.
                        </p>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">High Availability & DR:</h4>
                        <p className="text-gray-700 font-opensans">
                          Spread critical workloads across availability zones, enable automated failover, and run periodic DR drills.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <img 
                      src={aiEmployeeImage}
                      alt="Infrastructure migration visualization"
                      className="w-full max-w-sm rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="database" className="mt-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-blue-600 mb-4 font-montserrat">
                      Database Migration
                    </h3>
                    <p className="text-blue-600 mb-8 font-opensans">
                      Seamlessly move your on-premises databases to managed cloud services with minimal downtime and complete data integrity.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Assessment & Planning:</h4>
                        <p className="text-gray-700 mb-4 font-opensans">
                          Inventory schemas, stored procedures, and data volumes; choose the right target (Azure SQL, Amazon RDS, Aurora).
                        </p>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Continuous Data Replication:</h4>
                        <p className="text-gray-700 font-opensans">
                          Set up near-real-time change data capture to keep source and target in sync until cut-over.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Schema Conversion & Compatibility:</h4>
                        <p className="text-gray-700 mb-4 font-opensans">
                          Use tools (Azure DMS, AWS SCT) to translate objects and SQL dialects, then validate with automated tests.
                        </p>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Post-Migration Optimization:</h4>
                        <p className="text-gray-700 font-opensans">
                          Tune indexes, update statistics, enable automated backups & point-in-time recovery, and configure monitoring/alerts.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <img 
                      src={aiEmployeeImage}
                      alt="Database migration process"
                      className="w-full max-w-sm rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="application" className="mt-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-blue-600 mb-4 font-montserrat">
                      Application Migration
                    </h3>
                    <p className="text-blue-600 mb-8 font-opensans">
                      Move your legacy applications into the cloud—quickly, securely, and with minimal refactor effort.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Assess & Plan:</h4>
                        <p className="text-gray-700 mb-4 font-opensans">
                          Map out all application components, dependencies, and business requirements to decide between rehosting, refactoring, or replatforming.
                        </p>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Modernize & Integrate:</h4>
                        <p className="text-gray-700 font-opensans">
                          • PaaS/Serverless: Migrate core modules to managed platforms (App Service, Elastic Beanstalk) or Functions/Lambda to cut ops overhead.
                          <br /><br />
                          • API Enablement: Swap hard-coded links for REST/GraphQL or event-driven integrations (Event Grid, SNS/SQS).
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Rehost & Refactor:</h4>
                        <p className="text-gray-700 mb-4 font-opensans">
                          Lift & Shift: Move applications "as-is" onto cloud VMs or managed app services for rapid scalability.
                          <br /><br />
                          • Containerize: Break monoliths into Docker/Kubernetes containers (AKS/EKS) to improve portability and resilience.
                        </p>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Validate & Optimize:</h4>
                        <p className="text-gray-700 font-opensans">
                          • Run blue-green or canary deployments, functional tests, and performance benchmarks for zero-downtime cut-over.
                          <br /><br />
                          • Tune autoscaling, logging, and monitoring (App Insights, CloudWatch) to ensure smooth, cost-effective operation.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <img 
                      src={aiEmployeeImage}
                      alt="Application migration and modernization"
                      className="w-full max-w-sm rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="office365" className="mt-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-blue-600 mb-4 font-montserrat">
                      Office 365 Migration
                    </h3>
                    <p className="text-blue-600 mb-8 font-opensans">
                      Migrate your servers, storage, and network to Azure or AWS with confidence and minimal downtime.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Assess & Plan:</h4>
                        <p className="text-gray-700 mb-4 font-opensans">
                          Audit current email, file shares, and collaboration workloads.
                          <br /><br />
                          Define business goals, user groups, and required Office 365 licenses.
                          <br /><br />
                          Map dependencies (mailboxes, public folders, OneDrive, Teams chat) and set success criteria.
                        </p>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Data Migration:</h4>
                        <p className="text-gray-700 font-opensans">
                          Email: Migrate mailboxes via cutover, staged, or hybrid Exchange migration.
                          <br /><br />
                          Files: Sync or bulk-migrate file shares and home drives to OneDrive and SharePoint Online.
                          <br /><br />
                          Collaboration: Transition Skype for Business to Teams, preserving chat history where possible.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Prepare & Configure:</h4>
                        <p className="text-gray-700 mb-4 font-opensans">
                          Provision your Office 365 tenant and assign domains.
                          <br /><br />
                          Configure Azure AD Connect for secure directory sync and SSO.
                          <br /><br />
                          Set up Exchange Online policies, Teams configuration, and security controls (MFA, DLP, retention).
                        </p>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-4 font-montserrat">Validate, Train & Optimize:</h4>
                        <p className="text-gray-700 font-opensans">
                          Conduct pilot user tests: send/receive mail, access files, join Teams meetings.
                          <br /><br />
                          Provide end-user training on Outlook, OneDrive, Teams, and SharePoint best practices.
                          <br /><br />
                          Monitor adoption metrics, tune security settings, and refine governance (naming conventions, retention).
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <img 
                      src={aiEmployeeImage}
                      alt="Office 365 migration and collaboration"
                      className="w-full max-w-sm rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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