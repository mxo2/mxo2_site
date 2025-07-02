import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Mail, Phone, MapPin, Eye, Lock, Users, Database } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] overflow-hidden -mt-40 pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/30 via-transparent to-blue-900/40"></div>
        <div className="relative z-10 min-h-[400px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-blue-600 text-white hover:bg-blue-700 mb-6 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Data Protection
              </Badge>
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Your privacy and data security are fundamental to our business. Learn how we protect and handle your information.
              </p>
              <div className="mt-6 text-sm text-gray-300">
                <p>Last Updated: June 29, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-4">
                  MXO2 Technologies Private Limited ("MXO2," "we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our technology solutions.
                </p>
                <p className="mb-4">
                  This policy applies to all MXO2 services, including our AI-powered platforms, cloud solutions, enterprise software, and consulting services. By using our services, you consent to the practices described in this Privacy Policy.
                </p>
              </div>
            </div>

            {/* Quick Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy at a Glance</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-2 border-blue-100 bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                    <p className="text-sm text-gray-600">Clear information about data collection and usage</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-green-100 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                    <p className="text-sm text-gray-600">Enterprise-grade security measures and encryption</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-purple-100 bg-purple-50">
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Control</h3>
                    <p className="text-sm text-gray-600">You control your data and privacy preferences</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-orange-100 bg-orange-50">
                  <CardContent className="p-6 text-center">
                    <Database className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Compliance</h3>
                    <p className="text-sm text-gray-600">GDPR, CCPA, and industry standard compliance</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Personal Information</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">We collect personal information you voluntarily provide when you:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Create an account or register for our services</li>
                      <li>Contact us through forms, email, or phone</li>
                      <li>Subscribe to our newsletters or marketing communications</li>
                      <li>Participate in surveys, webinars, or events</li>
                      <li>Apply for employment opportunities</li>
                    </ul>
                    <p className="text-gray-700 mt-4">This may include: name, email address, phone number, company information, job title, billing address, and payment information.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Technical Information</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">We automatically collect technical information when you use our services:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>IP address, browser type, and operating system</li>
                      <li>Device identifiers and hardware information</li>
                      <li>Usage patterns, clickstream data, and page views</li>
                      <li>Location data (when permitted)</li>
                      <li>Log files and performance metrics</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Business Information</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">For enterprise clients, we may collect:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Company details and organizational structure</li>
                      <li>Project requirements and specifications</li>
                      <li>Usage data from implemented solutions</li>
                      <li>Performance metrics and analytics</li>
                      <li>Communication records and support interactions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Delivery</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Provide and maintain our technology solutions</li>
                    <li>• Process transactions and billing</li>
                    <li>• Deliver customer support and technical assistance</li>
                    <li>• Customize and improve user experience</li>
                    <li>• Monitor system performance and security</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Communication</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Send service updates and notifications</li>
                    <li>• Respond to inquiries and support requests</li>
                    <li>• Share relevant industry insights and resources</li>
                    <li>• Invite to events, webinars, and training</li>
                    <li>• Marketing communications (with consent)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Operations</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Analyze usage patterns and trends</li>
                    <li>• Conduct research and development</li>
                    <li>• Improve our products and services</li>
                    <li>• Ensure security and prevent fraud</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal & Compliance</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Meet regulatory requirements</li>
                    <li>• Respond to legal requests</li>
                    <li>• Protect rights and property</li>
                    <li>• Investigate security incidents</li>
                    <li>• Enforce terms of service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  <strong>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</strong>
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">We may share information in these situations:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Service Providers:</strong> Trusted partners who assist in delivering our services (cloud hosting, payment processing, analytics)</li>
                    <li><strong>Business Partners:</strong> Technology partners when implementing joint solutions (with your consent)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                    <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
                    <li><strong>Consent:</strong> Any other purpose with your explicit consent</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  We implement comprehensive security measures to protect your personal information:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Safeguards</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• 256-bit SSL/TLS encryption</li>
                      <li>• Multi-factor authentication</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Secure cloud infrastructure (AWS/Azure)</li>
                      <li>• Data encryption at rest and in transit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Operational Safeguards</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Access controls and user permissions</li>
                      <li>• Employee training on data protection</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular backups and disaster recovery</li>
                      <li>• Compliance with industry standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Subject Rights (GDPR/CCPA)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• <strong>Access:</strong> Request information about your data</li>
                      <li>• <strong>Correction:</strong> Update inaccurate information</li>
                      <li>• <strong>Deletion:</strong> Request removal of your data</li>
                      <li>• <strong>Portability:</strong> Receive your data in a portable format</li>
                    </ul>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• <strong>Restriction:</strong> Limit how we use your data</li>
                      <li>• <strong>Objection:</strong> Opt-out of certain processing</li>
                      <li>• <strong>Withdraw Consent:</strong> Revoke previously given consent</li>
                      <li>• <strong>Complaint:</strong> File complaints with supervisory authorities</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Marketing Communications</h3>
                  <p className="text-gray-700 text-sm">
                    You can opt-out of marketing communications at any time by clicking "unsubscribe" in emails, 
                    updating your account preferences, or contacting us directly. Note that you may still receive 
                    service-related communications necessary for your account.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Retention Periods:</h4>
                    <ul className="text-gray-700 text-sm mt-2 space-y-1">
                      <li>• <strong>Account Information:</strong> Until account closure + 3 years</li>
                      <li>• <strong>Transaction Records:</strong> 7 years (legal requirement)</li>
                      <li>• <strong>Marketing Data:</strong> Until consent withdrawal + 1 year</li>
                      <li>• <strong>Support Communications:</strong> 3 years after resolution</li>
                      <li>• <strong>Usage Analytics:</strong> 2 years (anonymized)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  MXO2 operates globally and may transfer your personal information to countries outside your jurisdiction. 
                  We ensure appropriate safeguards are in place for international transfers:
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                  <li>• Adequacy decisions by relevant data protection authorities</li>
                  <li>• Binding Corporate Rules where applicable</li>
                  <li>• Explicit consent for specific transfers when required</li>
                </ul>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-gray-700">
                  Our services are not intended for children under 13 (or the minimum age in your jurisdiction). 
                  We do not knowingly collect personal information from children. If you believe we have collected 
                  information from a child, please contact us immediately, and we will take steps to delete such information.
                </p>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Privacy Policy</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. 
                  We will notify you of significant changes by:
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Posting the updated policy on our website</li>
                  <li>• Sending email notifications for material changes</li>
                  <li>• Providing in-app notifications where applicable</li>
                  <li>• Updating the "Last Modified" date at the top of this policy</li>
                </ul>
                <p className="text-gray-700 mt-4 text-sm">
                  Your continued use of our services after policy updates constitutes acceptance of the changes.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-6">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">General Inquiries</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="text-sm">privacy@mxo2.com</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone className="w-4 h-4 mr-2" />
                        <span className="text-sm">+91 (XXX) XXX-XXXX</span>
                      </div>
                      <div className="flex items-start text-gray-700">
                        <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                        <span className="text-sm">MXO2 Technologies Private Limited<br />
                        Data Protection Office<br />
                        [Your Business Address]</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Data Protection Officer</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="text-sm">dpo@mxo2.com</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        For specific data protection inquiries, GDPR requests, or to exercise your rights under applicable privacy laws.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}