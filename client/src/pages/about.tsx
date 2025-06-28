import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function About() {
  const [activeToggle, setActiveToggle] = useState<'clients' | 'media' | 'products'>('clients');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Left side - Gradient */}
          <div className="w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 flex items-center justify-center text-white">
            <div className="text-center px-8">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-montserrat leading-tight">
                Know MXO2 Better
              </h1>
              <p className="text-xl lg:text-2xl font-opensans opacity-90">
                Empower your digital transformation, your way, with AI-driven solutions you trust!
              </p>
            </div>
          </div>
          
          {/* Right side - Infrastructure Image */}
          <div className="w-1/2 relative">
            <img 
              src="/assets/instracture_3_1751112701698.jpg" 
              alt="Infrastructure team training" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
        </div>
        
        {/* Diagonal separator */}
        <div className="absolute top-0 left-1/2 w-32 h-full bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 transform -skew-x-12 -translate-x-16"></div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">Vision</h3>
                <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-gray-700 font-opensans text-lg">
                  Help enterprises increase their digital transformation profitability through AI-driven innovation.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">Mission</h3>
                <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
                <p className="text-gray-700 font-opensans text-lg">
                  Push limits of what AI, cloud, and automation platforms can do for business growth.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">Values</h3>
                <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
                <p className="text-gray-700 font-opensans text-lg">
                  Excellence, Innovation, Agility, and Transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-montserrat">
              Global Enterprises Trust MXO2
            </h2>
            
            <div className="prose prose-lg max-w-none font-opensans text-gray-700 leading-relaxed space-y-6 text-left">
              <p className="text-xl text-center mb-8">
                Founded in 2010, Maximum Oxygen Inc. (MXO2) has earned its place among <strong>CIO Applications' Top 10 AI Solution Providers</strong> by delivering forward-thinking software and IT services worldwide.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-blue-600 mb-4 font-montserrat">Trusted by Industry Leaders</h4>
                  <p>
                    Over the past decade, we've partnered with enterprises, governments, institutions and startups to build 
                    transformative digital solutions—from AI, blockchain and cloud platforms to CRM, e-commerce, and automation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-purple-600 mb-4 font-montserrat">Measurable Business Impact</h4>
                  <p>
                    Our work drives real business impact by streamlining operations, fortifying security, boosting transparency 
                    and elevating customer experiences across multiple industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 font-montserrat">
              Every month, MXO2 processes $10M+ in Digital Transformation Value
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-blue-200">Annual revenue processed for clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Team size - 60% in AI/Cloud R&D</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-blue-200">Platform end users across 4 continents</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Years of industry expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-montserrat text-center">
              Built by Tech Entrepreneurs, for Digital Innovators
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center font-opensans">
              Steering the Oxygen Flow
            </p>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                    <img 
                      src="/assets/sam_1751113238654.png" 
                      alt="Sam Panwar - CEO & Founder of MXO2" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">Sam Panwar</h3>
                  <p className="text-blue-600 font-semibold mb-4">CEO, Founder</p>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <p className="text-gray-700 font-opensans leading-relaxed text-lg">
                  I'm Sam Panwar, an IT visionary and entrepreneur with 17 years of experience turning complex challenges 
                  into simple, scalable solutions. As the founder of Maximum Oxygen Inc. (MXO2)—named one of CIO Applications' 
                  Top 10 AI Solution Providers—and Parallel Campus, I empower organizations worldwide to leverage cloud 
                  architectures, AI, blockchain, and automation for real, measurable impact. When I'm not architecting 
                  end-to-end digital platforms or guiding startups to market-fit, you'll find me mentoring emerging tech 
                  talent at hackathons and community events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 font-montserrat text-center">
              Recommended by Digital Transformation Leaders
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-6xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 font-opensans text-lg mb-6 leading-relaxed">
                  MXO2's AI automation and cloud migration services have increased our operational efficiency by 40% 
                  and reduced our infrastructure costs significantly.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">RK</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 font-montserrat">Rajesh Kumar</h5>
                    <p className="text-gray-600 text-sm">CTO, Enterprise Solutions Ltd</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-6xl text-purple-600 mb-4">"</div>
                <p className="text-gray-700 font-opensans text-lg mb-6 leading-relaxed">
                  MXO2's wide range of technology integrations and AI solutions have completely automated our 
                  business processes and improved decision-making across all departments.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AS</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 font-montserrat">Anita Sharma</h5>
                    <p className="text-gray-600 text-sm">Director of Operations, TechFlow Industries</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-6xl text-red-600 mb-4">"</div>
                <p className="text-gray-700 font-opensans text-lg mb-6 leading-relaxed">
                  We saw digital transformation ROI of 300% within 18 months of implementing MXO2's 
                  comprehensive AI and cloud solutions.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MG</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 font-montserrat">Michael Gupta</h5>
                    <p className="text-gray-600 text-sm">CEO, InnovateNow Corp</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-6xl text-teal-600 mb-4">"</div>
                <p className="text-gray-700 font-opensans text-lg mb-6 leading-relaxed">
                  We rate MXO2 Cloud and AI Automation 9/10 on ease-of-use and 10/10 on recommendation scale. 
                  Outstanding technical expertise and support.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">LP</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 font-montserrat">Lisa Patel</h5>
                    <p className="text-gray-600 text-sm">Head of Digital Innovation, Global Systems Inc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat text-center">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center font-opensans">
              Our approach is rooted in <strong>partnership, precision, and progress</strong>. We don't just implement 
              technology — we align it with your business vision to ensure tangible outcomes.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">
                  Understand First, Build Second
                </h4>
                <p className="text-gray-700 font-opensans">
                  We start by deeply understanding your goals, operations, and challenges. Every solution is crafted 
                  with context — no guesswork, no templates.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">🔧</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">
                  Modular & Scalable Solutions
                </h4>
                <p className="text-gray-700 font-opensans">
                  We design future-ready systems using flexible architectures. Whether it's ERP, cloud, or AI – 
                  our solutions evolve as your business grows.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">
                  Rapid Development, Continuous Improvement
                </h4>
                <p className="text-gray-700 font-opensans">
                  Using agile and DevOps practices, we deliver fast without compromising quality. Iterative 
                  development and feedback loops ensure you're always in control.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-teal-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">🏭</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">
                  Industry-Centric Customization
                </h4>
                <p className="text-gray-700 font-opensans">
                  From manufacturing to education, government to fintech — we tailor technology to industry-specific 
                  workflows and compliance needs.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">
                  Transparent Collaboration
                </h4>
                <p className="text-gray-700 font-opensans">
                  We work as an extension of your team — with open communication, dedicated account managers, 
                  and clear milestones.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">📊</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">
                  Measurable Impact
                </h4>
                <p className="text-gray-700 font-opensans">
                  We focus on outcomes — increased efficiency, reduced costs, better decision-making, and competitive 
                  advantage. We define success together, then deliver it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition - Toggle Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-montserrat text-center">
              Our Network & Recognition
            </h2>
            
            {/* Toggle Buttons */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setActiveToggle('clients')}
                  className={`px-6 py-3 rounded-md font-semibold font-opensans transition-all ${
                    activeToggle === 'clients'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Clients
                </button>
                <button
                  onClick={() => setActiveToggle('media')}
                  className={`px-6 py-3 rounded-md font-semibold font-opensans transition-all ${
                    activeToggle === 'media'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Media & Events
                </button>
                <button
                  onClick={() => setActiveToggle('products')}
                  className={`px-6 py-3 rounded-md font-semibold font-opensans transition-all ${
                    activeToggle === 'products'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Our Products
                </button>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="bg-gray-50 rounded-lg p-8 min-h-[400px]">
              {activeToggle === 'clients' && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Our Clients</h3>
                  <div className="bg-white rounded-lg p-6">
                    <img 
                      src="/assets/clients 1_1751112968066.jpg" 
                      alt="MXO2 Client Portfolio - Trusted by enterprises, governments, and startups worldwide" 
                      className="w-full max-w-4xl mx-auto rounded-lg"
                    />
                    <p className="text-gray-600 font-opensans mt-4">
                      Trusted by enterprises, governments, and startups worldwide
                    </p>
                  </div>
                </div>
              )}
              
              {activeToggle === 'media' && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Media & Events</h3>
                  <div className="bg-white rounded-lg p-6">
                    <img 
                      src="/assets/Screenshot 2025-06-28 at 5.47.32 PM_1751113062048.png" 
                      alt="MXO2 Media Coverage and Events - Featured in leading publications and industry conferences" 
                      className="w-full max-w-4xl mx-auto rounded-lg"
                    />
                    <p className="text-gray-600 font-opensans mt-4">
                      Featured in leading tech publications and industry conferences including BETT London, Terra Sapiens Education, and National Conference events
                    </p>
                  </div>
                </div>
              )}
              
              {activeToggle === 'products' && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">Our Products</h3>
                  <div className="flex items-center justify-center h-64 bg-white rounded-lg border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-red-600 text-2xl">🚀</span>
                      </div>
                      <p className="text-gray-500 font-opensans">Product showcase images will be displayed here</p>
                      <p className="text-sm text-gray-400 mt-2">Building innovative products like Parallel Campus and StreetSync</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-12 text-center">
              <Badge variant="secondary" className="text-lg py-2 px-6 bg-blue-100 text-blue-800">
                CIO Applications' Top 10 AI Solution Providers
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Results Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Does MXO2 improve business profitability?
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-opensans">
              Our clients consistently achieve measurable results through our AI-driven digital transformation solutions
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">40%*</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                  Operational Efficiency Gain
                </h4>
                <p className="text-gray-700 font-opensans">
                  Automated processes with AI-driven optimization and cloud integration.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">50%*</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                  Infrastructure Cost Reduction
                </h4>
                <p className="text-gray-700 font-opensans">
                  Reduced operational overhead through cloud migration and automation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">300%*</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                  Digital Transformation ROI
                </h4>
                <p className="text-gray-700 font-opensans">
                  Strong AI capabilities with measurable business impact and growth.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">10K+*</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                  Global Platform Users
                </h4>
                <p className="text-gray-700 font-opensans">
                  Users across 4 continents trust our comprehensive technology solutions.
                </p>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-8 font-opensans">
              *Source: Case studies of Enterprise Solutions Ltd, TechFlow Industries, InnovateNow Corp
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}