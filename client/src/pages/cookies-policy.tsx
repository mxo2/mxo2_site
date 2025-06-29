import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, Settings, BarChart3, Shield, Eye, Zap, Mail, Phone, MapPin, CheckCircle, X } from "lucide-react";

export default function CookiesPolicy() {
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
                <Cookie className="w-4 h-4 mr-2" />
                Cookies & Tracking
              </Badge>
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Cookies Policy
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Learn how we use cookies and similar technologies to enhance your experience and improve our services.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-4">
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
                </p>
                <p className="mb-4">
                  This Cookies Policy explains how MXO2 Technologies Private Limited ("MXO2," "we," "us," or "our") uses cookies and 
                  similar tracking technologies on our website and services. By continuing to use our website, you consent to our use 
                  of cookies as described in this policy.
                </p>
              </div>
            </div>

            {/* Cookie Types Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-2 border-green-100 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Essential</h3>
                    <p className="text-sm text-gray-600">Required for basic website functionality</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-blue-100 bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                    <p className="text-sm text-gray-600">Help us understand website usage and performance</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-purple-100 bg-purple-50">
                  <CardContent className="p-6 text-center">
                    <Settings className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Functional</h3>
                    <p className="text-sm text-gray-600">Remember your preferences and settings</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-orange-100 bg-orange-50">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Marketing</h3>
                    <p className="text-sm text-gray-600">Deliver relevant content and advertisements</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Detailed Cookie Categories */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Categories Explained</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Essential Cookies (Always Active)</h3>
                  <div className="bg-green-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      These cookies are necessary for our website to function properly and cannot be switched off. 
                      They are usually set in response to actions you take such as logging in, filling out forms, or setting privacy preferences.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• User authentication and session management</li>
                          <li>• Shopping cart functionality</li>
                          <li>• Security and fraud prevention</li>
                          <li>• Load balancing and performance</li>
                          <li>• GDPR consent management</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• <code>JSESSIONID</code> - Session management</li>
                          <li>• <code>auth_token</code> - User authentication</li>
                          <li>• <code>csrf_token</code> - Security protection</li>
                          <li>• <code>consent_preferences</code> - Cookie consent</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Analytics Cookies</h3>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. 
                      They help us improve our website performance and user experience.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Website traffic analysis</li>
                          <li>• Page performance monitoring</li>
                          <li>• User behavior insights</li>
                          <li>• A/B testing and optimization</li>
                          <li>• Error tracking and debugging</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Third-Party Services:</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Google Analytics 4</li>
                          <li>• Google Tag Manager</li>
                          <li>• Hotjar (heatmaps and recordings)</li>
                          <li>• Microsoft Clarity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Functional Cookies</h3>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers 
                      whose services we have added to our pages.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Language and region preferences</li>
                          <li>• Theme and display settings</li>
                          <li>• Remember form data</li>
                          <li>• Chat widget functionality</li>
                          <li>• Video and social media embeds</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• <code>preferred_language</code> - Language setting</li>
                          <li>• <code>theme_mode</code> - Dark/light mode</li>
                          <li>• <code>form_data</code> - Saved form information</li>
                          <li>• <code>chat_session</code> - Support chat state</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Marketing and Advertising Cookies</h3>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      These cookies are used to deliver relevant advertisements and track advertising campaign performance. 
                      They may also be used to limit the number of times you see an advertisement.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Targeted advertising</li>
                          <li>• Retargeting and remarketing</li>
                          <li>• Campaign performance tracking</li>
                          <li>• Interest-based content delivery</li>
                          <li>• Social media integration</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Partners:</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Google Ads and DoubleClick</li>
                          <li>• LinkedIn Marketing Solutions</li>
                          <li>• Facebook Pixel</li>
                          <li>• Twitter Advertising</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Cookie Consent Manager</h3>
                  <p className="text-gray-700 mb-4">
                    You can manage your cookie preferences at any time using our cookie consent manager. Click the button below to open your preferences:
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Cookie Preferences
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Browser Settings</h3>
                  <p className="text-gray-700 mb-4">
                    You can also control cookies through your browser settings. Here's how to manage cookies in popular browsers:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Desktop Browsers:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
                        <li>• <strong>Firefox:</strong> Preferences → Privacy & Security</li>
                        <li>• <strong>Safari:</strong> Preferences → Privacy</li>
                        <li>• <strong>Edge:</strong> Settings → Cookies and site permissions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Mobile Browsers:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• <strong>Chrome Mobile:</strong> Settings → Site settings → Cookies</li>
                        <li>• <strong>Safari iOS:</strong> Settings → Safari → Privacy & Security</li>
                        <li>• <strong>Samsung Internet:</strong> Settings → Sites and downloads</li>
                        <li>• <strong>Firefox Mobile:</strong> Settings → Data Management</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Notice</h3>
                  <p className="text-gray-700 text-sm">
                    Disabling certain cookies may limit the functionality of our website. Essential cookies cannot be disabled as they are 
                    necessary for the website to function properly. If you disable analytics or functional cookies, you may experience 
                    reduced functionality or a less personalized experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services and Cookies</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-6">
                    We use various third-party services that may set cookies on your device. These services have their own privacy policies and cookie practices:
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Google Services</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Google Tag Manager</li>
                        <li>• Google Ads</li>
                        <li>• reCAPTCHA</li>
                      </ul>
                      <a href="https://policies.google.com/privacy" className="text-blue-600 text-sm hover:underline">View Google Privacy Policy</a>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Microsoft Services</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Microsoft Clarity</li>
                        <li>• LinkedIn Insights</li>
                        <li>• Azure Application Insights</li>
                      </ul>
                      <a href="https://privacy.microsoft.com/" className="text-blue-600 text-sm hover:underline">View Microsoft Privacy Policy</a>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Facebook Pixel</li>
                        <li>• LinkedIn Marketing</li>
                        <li>• Twitter Analytics</li>
                        <li>• YouTube Embeds</li>
                      </ul>
                      <p className="text-gray-600 text-sm">See respective platform policies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Retention Periods</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Different types of cookies have different retention periods:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Session Cookies</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Temporary cookies that are deleted when you close your browser.
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Authentication tokens</li>
                      <li>• Shopping cart contents</li>
                      <li>• Form data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Persistent Cookies</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Remain on your device for a specified period or until manually deleted.
                    </p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Preferences: Up to 1 year</li>
                      <li>• Analytics: Up to 2 years</li>
                      <li>• Marketing: Up to 2 years</li>
                      <li>• Functional: Up to 6 months</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Data Security</h2>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Measures</h3>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• <strong>Secure flag:</strong> Cookies transmitted only over HTTPS</li>
                      <li>• <strong>HttpOnly flag:</strong> Prevents client-side script access</li>
                      <li>• <strong>SameSite attribute:</strong> Protection against CSRF attacks</li>
                      <li>• <strong>Encryption:</strong> Sensitive cookie data is encrypted</li>
                      <li>• <strong>Regular audits:</strong> Periodic security assessments</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Protection</h3>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• No personally identifiable information in cookies</li>
                      <li>• Data minimization principles applied</li>
                      <li>• Regular data purging and cleanup</li>
                      <li>• Compliance with GDPR and CCPA</li>
                      <li>• Transparent data processing practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates and Changes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Cookies Policy</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify you of any changes by:
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Posting the updated policy on our website</li>
                  <li>• Updating the "Last Updated" date</li>
                  <li>• Sending email notifications for significant changes</li>
                  <li>• Displaying prominent notices on our website</li>
                  <li>• Requesting renewed consent when required</li>
                </ul>
                <p className="text-gray-700 mt-4 text-sm">
                  We recommend reviewing this policy periodically to stay informed about our cookie practices.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Cookies</h2>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-6">
                  If you have questions about our use of cookies or this policy, please contact us:
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
                        For specific questions about data processing and cookie preferences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-blue-200">
                  <div className="flex items-start text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                    <span className="text-sm">
                      MXO2 Technologies Private Limited<br />
                      Privacy Department<br />
                      [Your Business Address]
                    </span>
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