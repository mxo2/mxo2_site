import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, FileText, Shield, AlertTriangle, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export default function TermsConditions() {
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
                <Scale className="w-4 h-4 mr-2" />
                Legal Terms
              </Badge>
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Terms & Conditions
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Please read these terms carefully before using our services. They govern your relationship with MXO2 Technologies.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-4">
                  These Terms and Conditions ("Terms," "Agreement") govern your use of MXO2 Technologies Private Limited's ("MXO2," "Company," "we," "us," or "our") website, services, and technology solutions. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="mb-4">
                  If you disagree with any part of these terms, you may not access or use our services. These Terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Agreement Points</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-2 border-blue-100 bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Service Agreement</h3>
                    <p className="text-sm text-gray-600">Professional technology consulting and software services</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-green-100 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Intellectual Property</h3>
                    <p className="text-sm text-gray-600">Protection of proprietary technologies and solutions</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-purple-100 bg-purple-50">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">User Responsibilities</h3>
                    <p className="text-sm text-gray-600">Proper use and compliance with service terms</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-orange-100 bg-orange-50">
                  <CardContent className="p-6 text-center">
                    <AlertTriangle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Limitations</h3>
                    <p className="text-sm text-gray-600">Liability limitations and warranty disclaimers</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Definitions</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">"Services"</h4>
                    <p className="text-gray-700 text-sm">Includes all technology consulting, software development, AI solutions, cloud services, and related offerings provided by MXO2.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">"User" or "Client"</h4>
                    <p className="text-gray-700 text-sm">Any individual or entity that accesses or uses our services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">"Content"</h4>
                    <p className="text-gray-700 text-sm">All text, graphics, images, software, data, and other materials appearing on or transmitted through our services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">"Intellectual Property"</h4>
                    <p className="text-gray-700 text-sm">All proprietary technologies, software, methodologies, and know-how owned by MXO2.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Description of Services</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Technology Consulting</h3>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">MXO2 provides professional consulting services including:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Digital transformation strategy and implementation</li>
                      <li>Cloud migration and optimization services</li>
                      <li>AI and machine learning solution development</li>
                      <li>Enterprise software architecture and design</li>
                      <li>Cybersecurity assessment and implementation</li>
                      <li>Process automation and optimization</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Software Solutions</h3>
                  <div className="bg-green-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">Our proprietary software platforms include:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>StreetSync - Municipal workforce management system</li>
                      <li>Parallel Campus - AI-powered educational platform</li>
                      <li>Industrial ERP - Manufacturing management solution</li>
                      <li>MXO2 CRM - Customer relationship management platform</li>
                      <li>Custom enterprise applications and integrations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Support and Maintenance</h3>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">Ongoing support services include:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Technical support and troubleshooting</li>
                      <li>Software updates and security patches</li>
                      <li>Performance monitoring and optimization</li>
                      <li>Training and knowledge transfer</li>
                      <li>System maintenance and backup services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* User Obligations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Obligations and Responsibilities</h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Acceptable Use</h3>
                  <p className="text-gray-700 mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                    <li>Use services for any illegal or unauthorized purpose</li>
                    <li>Attempt to gain unauthorized access to any systems or networks</li>
                    <li>Interfere with or disrupt the integrity or performance of services</li>
                    <li>Reverse engineer, decompile, or disassemble any software</li>
                    <li>Share access credentials with unauthorized parties</li>
                    <li>Use services to transmit malicious code or harmful content</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data and Security</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Maintain the confidentiality of your account credentials</li>
                    <li>• Provide accurate and complete information when required</li>
                    <li>• Promptly notify us of any security breaches or unauthorized access</li>
                    <li>• Comply with applicable data protection and privacy laws</li>
                    <li>• Implement reasonable security measures for your systems</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Cooperation and Communication</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Provide timely responses to information requests</li>
                    <li>• Participate in project meetings and reviews as scheduled</li>
                    <li>• Designate authorized representatives for decision-making</li>
                    <li>• Provide necessary access to systems and data as agreed</li>
                    <li>• Give feedback and approval within agreed timeframes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">MXO2 Intellectual Property</h3>
                  <p className="text-gray-700 mb-4">
                    All content, software, technologies, methodologies, and materials provided by MXO2 are protected by intellectual property laws. This includes:
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Proprietary software platforms and applications</li>
                    <li>• Source code, algorithms, and technical documentation</li>
                    <li>• Trademarks, logos, and brand elements</li>
                    <li>• Methodologies, frameworks, and best practices</li>
                    <li>• Training materials and knowledge resources</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">License Grant</h3>
                  <p className="text-gray-700 text-sm">
                    Subject to these Terms and your payment of applicable fees, MXO2 grants you a limited, non-exclusive, 
                    non-transferable license to use our services solely for your internal business purposes. This license 
                    does not include rights to modify, distribute, or create derivative works.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Data and Content</h3>
                  <p className="text-gray-700 text-sm">
                    You retain ownership of your data and content. By using our services, you grant MXO2 a limited license 
                    to access, process, and store your data solely for the purpose of providing services. We will not use 
                    your confidential data for any other purpose without your explicit consent.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms and Conditions</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Fees and Billing</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Fees are specified in individual service agreements</li>
                    <li>• Payment terms typically 30 days from invoice date</li>
                    <li>• Late payments may incur interest charges</li>
                    <li>• All fees are exclusive of applicable taxes</li>
                    <li>• Changes to fees require written notice</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Refunds and Cancellations</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Refund policies vary by service type</li>
                    <li>• Custom development work is generally non-refundable</li>
                    <li>• Subscription services may have specific cancellation terms</li>
                    <li>• Refund requests must be submitted in writing</li>
                    <li>• Refunds processed within 30 business days when approved</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Warranties and Disclaimers</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Limited Warranty</h3>
                  <p className="text-gray-700 text-sm">
                    MXO2 warrants that our services will be performed in a professional manner consistent with industry standards. 
                    We warrant that our software will substantially conform to documented specifications for a period of 90 days 
                    from delivery.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    EXCEPT AS EXPRESSLY SET FORTH HEREIN, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. 
                    TO THE FULLEST EXTENT PERMITTED BY LAW, MXO2 DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• IMPLIED WARRANTIES OF MERCHANTABILITY</li>
                    <li>• FITNESS FOR A PARTICULAR PURPOSE</li>
                    <li>• NON-INFRINGEMENT</li>
                    <li>• UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                    <li>• ACCURACY OR COMPLETENESS OF CONTENT</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="space-y-4">
                  <p className="text-gray-700 text-sm">
                    <strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MXO2 BE LIABLE FOR:</strong>
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                    <li>• LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
                    <li>• DAMAGES RESULTING FROM UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS</li>
                    <li>• DAMAGES RESULTING FROM ANY BUGS, VIRUSES, OR MALICIOUS CODE</li>
                    <li>• DAMAGES ARISING FROM THIRD-PARTY PRODUCTS OR SERVICES</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-4">
                    <strong>OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATING TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED 
                    THE TOTAL AMOUNT PAID BY YOU TO MXO2 IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 text-sm mb-4">
                  You agree to indemnify, defend, and hold harmless MXO2, its officers, directors, employees, and agents from and against 
                  any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with:
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Your use of our services in violation of these Terms</li>
                  <li>• Your violation of any third-party rights</li>
                  <li>• Your violation of applicable laws or regulations</li>
                  <li>• Any content or data you provide to us</li>
                  <li>• Your negligent acts or omissions</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Termination Rights</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Either party may terminate with written notice</li>
                    <li>• Immediate termination for material breach</li>
                    <li>• Termination for non-payment after cure period</li>
                    <li>• Termination for insolvency or bankruptcy</li>
                    <li>• Subscription services follow specific terms</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Effect of Termination</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• All rights and licenses immediately cease</li>
                    <li>• Outstanding fees become immediately due</li>
                    <li>• Return or destruction of confidential information</li>
                    <li>• Data export assistance (if requested)</li>
                    <li>• Survival of certain provisions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law and Jurisdiction</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 text-sm mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. 
                  Any disputes arising from or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts 
                  located in [Your Jurisdiction], India.
                </p>
                <p className="text-gray-700 text-sm">
                  For international clients, specific jurisdiction and governing law provisions may be outlined in separate service agreements.
                </p>
              </div>
            </div>

            {/* General Provisions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">General Provisions</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Modifications</h3>
                  <p className="text-gray-700 text-sm">
                    We reserve the right to modify these Terms at any time. We will provide notice of material changes by 
                    posting updated Terms on our website or sending email notifications. Your continued use of our services 
                    after changes constitutes acceptance of the modified Terms.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Severability</h3>
                  <p className="text-gray-700 text-sm">
                    If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall 
                    remain in full force and effect. Invalid provisions shall be replaced with valid provisions that most 
                    closely reflect the original intent.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Entire Agreement</h3>
                  <p className="text-gray-700 text-sm">
                    These Terms, together with any specific service agreements, constitute the entire agreement between you and MXO2 
                    regarding our services. They supersede all prior agreements and understandings, whether written or oral.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-6">
                  For questions about these Terms or our services, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Legal Department</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="text-sm">legal@mxo2.com</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone className="w-4 h-4 mr-2" />
                        <span className="text-sm">+91 (XXX) XXX-XXXX</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Business Address</h4>
                    <div className="flex items-start text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                      <span className="text-sm">MXO2 Technologies Private Limited<br />
                      Legal Department<br />
                      [Your Business Address]</span>
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