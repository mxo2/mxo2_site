import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactModal } from "@/components/ui/contact-modal";
import { 
  Mail, 
  Calendar, 
  MessageCircle, 
  Video, 
  Shield, 
  Users, 
  Smartphone, 
  Settings,
  Cloud,
  Lock,
  Zap,
  CheckCircle,
  Monitor,
  Globe
} from "lucide-react";

export default function Workspace() {
  const [activeTab, setActiveTab] = useState("email");

  const features = [
    {
      icon: Mail,
      title: "Enterprise Email Server",
      description: "Complete email solution with MAPI support, IMAP, POP, EAS, EWS protocols for seamless integration with any email client."
    },
    {
      icon: Calendar,
      title: "Advanced Calendaring",
      description: "Organizational calendars, conference room scheduling, shared calendars with seamless mobile and desktop integration."
    },
    {
      icon: MessageCircle,
      title: "Instant Messaging",
      description: "Real-time team communication with integrated chat, file sharing, and collaboration tools."
    },
    {
      icon: Video,
      title: "Online Meetings",
      description: "Audio/video conferencing with screen sharing, recording capabilities, and meeting management."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Industry-standard spam filtering, antivirus protection, encryption, and compliance features for SOX, HIPAA, GDPR."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Shared contacts, tasks, notes, file storage, and organizational tools for seamless teamwork."
    }
  ];

  const integrations = [
    { name: "Cloud Storage", items: ["Dropbox", "Google Drive", "OneDrive", "mxO₂ File Storage"] },
    { name: "Communication", items: ["Live Chat", "Video Conferencing", "Voice Calls"] },
    { name: "AI Tools", items: ["OpenAI ChatGPT", "Document Analysis", "Smart Automation"] },
    { name: "Document Collaboration", items: ["Real-time Editing", "Version Control", "Collaborative Workspace"] },
    { name: "Email Clients", items: ["Outlook", "Apple Mail", "Thunderbird", "Mobile Apps"] }
  ];

  const platforms = [
    { name: "Linux", description: "Ubuntu, Debian, CentOS support" },
    { name: "Windows", description: "Windows Server 2016+ compatibility" },
    { name: "Docker", description: "Containerized deployment" },
    { name: "Cloud", description: "AWS, Azure, GCP ready" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[hsl(220,72%,44%)] to-[hsl(220,72%,35%)] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-montserrat leading-tight">
                  Oxygen to your 
                  <span className="block text-cyan-300">MX Record</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 font-opensans mb-8 leading-relaxed">
                  mx<span className="text-cyan-300">O₂</span> Workspace is the complete business communication platform that powers your organization with enterprise-grade email, collaboration, and productivity tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ContactModal>
                    <Button size="lg" className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white font-opensans font-bold text-lg px-8 py-4">
                      Try Free for 30 Days
                    </Button>
                  </ContactModal>
                  <ContactModal>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-opensans font-bold text-lg px-8 py-4">
                      Request Demo
                    </Button>
                  </ContactModal>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-5 h-5" />
                          <span className="font-medium">MXO2 Workspace</span>
                        </div>
                        <div className="flex space-x-2">
                          <Calendar className="w-4 h-4" />
                          <MessageCircle className="w-4 h-4" />
                          <Video className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-white/20 rounded p-2 text-sm">📧 Enterprise Email Server</div>
                        <div className="bg-white/20 rounded p-2 text-sm">📅 Advanced Calendaring</div>
                        <div className="bg-white/20 rounded p-2 text-sm">💬 Team Collaboration</div>
                        <div className="bg-white/20 rounded p-2 text-sm">🎥 Video Conferencing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                The Microsoft Exchange Alternative
              </h2>
              <p className="text-xl text-gray-600 font-opensans max-w-4xl mx-auto">
                MXO2 Workspace is the only cross-platform email and collaboration server with native MAPI support, 
                offering Microsoft Exchange level features at a fraction of the cost.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-montserrat">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 font-opensans">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                  Linux and Windows Ready
                </h2>
                <p className="text-xl text-gray-600 font-opensans mb-8">
                  The only cross-platform email and collaboration server that offers Microsoft Exchange 
                  level features and functionality for Linux and Windows Server administrators.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Monitor className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">{platform.name}</div>
                        <div className="text-sm text-gray-600">{platform.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Cross-Platform Compatibility</div>
                        <div className="text-gray-600">Deploy anywhere, manage everywhere</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Native MAPI Support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Docker Container Support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">No Additional Software Required</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Enterprise-Grade Security</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Client Compatibility Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
              Any Email Client on Any OS
            </h2>
            <p className="text-xl text-gray-600 font-opensans mb-12 max-w-4xl mx-auto">
              With support for all major email protocols including IMAP, POP, EAS, EWS, WebDAV, and MAPI, 
              you have your choice of desktop or mobile client, regardless of your operating system.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { name: "Outlook", platforms: "Windows & macOS" },
                { name: "Apple Mail", platforms: "macOS & iOS" },
                { name: "Thunderbird", platforms: "Cross-platform" },
                { name: "Mobile Apps", platforms: "iOS & Android" }
              ].map((client, index) => (
                <Card key={index} className="border-0 shadow-md bg-white">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-montserrat">{client.name}</CardTitle>
                    <CardDescription className="font-opensans">{client.platforms}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 font-montserrat">Native MAPI Support</h3>
              <p className="text-lg font-opensans">
                MXO2 Workspace is the only email server outside of Exchange that offers native MAPI support, 
                making it the perfect Microsoft Exchange alternative without requiring plugins or custom clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Enterprise Security</div>
                        <div className="text-gray-600">Industry-standard protection</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Lock className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">Advanced Spam Filtering</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Lock className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">Enterprise Antivirus</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Lock className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">Message Encryption</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Lock className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">Compliance Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                  Security & Compliance
                </h2>
                <p className="text-xl text-gray-600 font-opensans mb-6">
                  MXO2 Workspace was architected to meet the highest security and compliance standards, 
                  including SOX, HIPAA, GDPR, and other regulatory requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Email Archiving</div>
                      <div className="text-gray-600">Complete message tracking and storage for compliance</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Auditor Access</div>
                      <div className="text-gray-600">Comprehensive logging and audit trails</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Password Policies</div>
                      <div className="text-gray-600">Strict password requirements and enforcement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                The mx<span className="text-cyan-600">O₂</span> Marketplace
              </h2>
              <p className="text-xl text-gray-600 font-opensans max-w-4xl mx-auto">
                Expand your workspace capabilities with our marketplace of integrations and add-ons. 
                Build a complete business platform that rivals Microsoft 365.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-blue-600">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700 font-opensans">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-montserrat">
              Ready to Transform Your Business Communication?
            </h2>
            <p className="text-xl font-opensans mb-8">
              Start your 30-day free trial today and experience the power of MXO2 Workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactModal>
                <Button size="lg" className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white font-opensans font-bold text-lg px-8 py-4">
                  Start Free Trial
                </Button>
              </ContactModal>
              <ContactModal>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-opensans font-bold text-lg px-8 py-4">
                  Schedule Demo
                </Button>
              </ContactModal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}