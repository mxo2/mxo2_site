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
                Fueling Growth with Digital Oxygen
              </h1>
              <p className="text-xl lg:text-2xl font-opensans opacity-90">
                Empowering the Future with Technology-Driven Innovation
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-montserrat">
              Revitalize Your Business with IT Excellence
            </h2>
            
            <div className="prose prose-lg max-w-none font-opensans text-gray-700 leading-relaxed space-y-6">
              <p>
                Founded in 2010, Maximum Oxygen Inc. (MXO2) has earned its place among CIO Applications' 
                <strong> Top 10 AI Solution Providers</strong> by delivering forward-thinking software and IT services worldwide.
              </p>
              
              <p>
                Over the past decade, we've partnered with enterprises, governments, institutions and startups to build 
                transformative digital solutions—from AI, blockchain and cloud platforms to CRM, e-commerce, digital forensics 
                and robotic process automation (RPA). Our work drives real business impact by streamlining operations, 
                fortifying security, boosting transparency and elevating customer experiences.
              </p>
              
              <p>
                At MXO2, technology is more than a support function—it's the very oxygen that powers innovation. We collaborate 
                closely with each client to craft tailored strategies, blending cutting-edge tools with practical business logic. 
                Whether you're modernizing ERP, automating trading workflows, digitizing government services or launching your 
                next SaaS offering, MXO2 delivers the vision, agility and execution to help you compete—and lead—in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 font-montserrat text-center">
              Steering the Oxygen Flow
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">SP</span>
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

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">V</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">VISION</h3>
                <p className="text-gray-700 font-opensans leading-relaxed">
                  Empower businesses with innovative, scalable technology that drives growth in a digital world.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">MISSION</h3>
                <p className="text-gray-700 font-opensans leading-relaxed">
                  Provide tailored cloud, AI, and automation solutions that enhance efficiency, security, and long-term value.
                </p>
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
                  <div className="flex items-center justify-center h-64 bg-white rounded-lg border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-purple-600 text-2xl">📺</span>
                      </div>
                      <p className="text-gray-500 font-opensans">Media coverage and event photos will be displayed here</p>
                      <p className="text-sm text-gray-400 mt-2">Featured in leading tech publications and industry conferences</p>
                    </div>
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
    </div>
  );
}