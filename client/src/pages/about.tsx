import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Target, Rocket, Handshake } from "lucide-react";
import samImage from "@assets/sam_1751113238654.png";
import clientsImage from "@assets/clients 1_1751112968066.jpg";
import instructureImage from "@assets/instracture_3_1751112701698.jpg";
import designImage from "@assets/design_1751110232480.png";

export default function About() {
  const [activeToggle, setActiveToggle] = useState<'clients' | 'media' | 'products' | 'approach' | 'leadership'>('clients');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Left side - Gradient */}
          <div className="w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 flex items-center justify-center text-white">
            <div className="text-center px-8">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 font-montserrat leading-tight">
                Built by Tech Entrepreneurs, for Digital Innovators
              </h1>
              <p className="text-lg lg:text-xl font-opensans opacity-90 mb-4">
                Steering the Oxygen Flow
              </p>
              <p className="text-base font-opensans opacity-80">
                Sam Panwar - CEO & Founder of MXO2
              </p>
            </div>
          </div>
          
          {/* Right side - Founder Profile */}
          <div className="w-1/2 relative bg-gray-100 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src={samImage}
                  alt="Sam Panwar - CEO & Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-montserrat mb-1">Sam Panwar</h3>
              <p className="text-gray-600 font-opensans text-sm mb-3">CEO, Founder</p>
              <p className="text-xs text-gray-700 font-opensans leading-relaxed">
                IT visionary with 17 years experience turning complex challenges into scalable solutions. 
                Founder of MXO2 and Parallel Campus, empowering organizations with AI, cloud, and automation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Diagonal separator */}
        <div className="absolute top-0 left-1/2 w-32 h-full bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 transform -skew-x-12 -translate-x-16"></div>
      </section>

      {/* Detailed Sam Panwar Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={samImage}
                    alt="Sam Panwar - CEO & Founder of MXO2" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                  Sam Panwar - CEO & Founder of MXO2
                </h2>
                <h3 className="text-xl font-bold text-blue-600 mb-6 font-montserrat">
                  Sam Panwar - CEO, Founder
                </h3>
                <p className="text-gray-700 font-opensans leading-relaxed text-lg">
                  I'm Sam Panwar, an IT visionary and entrepreneur with 17 years of experience turning complex 
                  challenges into simple, scalable solutions. As the founder of Maximum Oxygen Inc. (MXO2)—named 
                  one of CIO Applications' Top 10 AI Solution Providers—and Parallel Campus, I empower organizations 
                  worldwide to leverage cloud architectures, AI, blockchain, and automation for real, measurable impact.
                </p>
                <p className="text-gray-700 font-opensans leading-relaxed text-lg mt-4">
                  When I'm not architecting end-to-end digital platforms or guiding startups to market-fit, you'll 
                  find me mentoring emerging tech talent at hackathons and community events.
                </p>
              </div>
            </div>
          </div>
        </div>
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
              Delivering Digital Excellence Since 2010
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Years of Innovation</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-200">Successful Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Enterprise Clients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Global Support Coverage</div>
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
              Why Organizations Choose MXO2
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Target className="text-white w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">Proven Expertise</h4>
                <p className="text-gray-700 font-opensans">
                  15 years of experience delivering AI, cloud, and automation solutions across multiple industries 
                  with measurable business outcomes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Rocket className="text-white w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">Innovation-First</h4>
                <p className="text-gray-700 font-opensans">
                  Featured among CIO Applications' Top 10 AI Solution Providers, consistently pushing the 
                  boundaries of what technology can achieve.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Handshake className="text-white w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">Partnership Approach</h4>
                <p className="text-gray-700 font-opensans">
                  We work as an extension of your team, providing dedicated support and transparent 
                  communication throughout every project.
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
                <div className="w-12 h-12 bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                  <Target className="text-white w-6 h-6" />
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
                <div className="w-12 h-12 bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                  <Rocket className="text-white w-6 h-6" />
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
                <div className="w-12 h-12 bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                  <Handshake className="text-white w-6 h-6" />
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
                <div className="w-12 h-12 bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                  <Target className="text-white w-6 h-6" />
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
                <div className="w-12 h-12 bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                  <Handshake className="text-white w-6 h-6" />
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
                <div className="w-12 h-12 bg-blue-900 rounded-lg mb-4 flex items-center justify-center">
                  <Rocket className="text-white w-6 h-6" />
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
              MXO2 Technology Solutions Portfolio
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-opensans">
              Comprehensive technology services covering AI, cloud migration, automation, and digital transformation
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">AI</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                  Artificial Intelligence
                </h4>
                <p className="text-gray-700 font-opensans">
                  Machine learning, neural networks, and intelligent automation solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">Cloud</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                  Cloud Migration
                </h4>
                <p className="text-gray-700 font-opensans">
                  AWS, Azure, and multi-cloud architecture deployment and optimization.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">RPA</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                  Process Automation
                </h4>
                <p className="text-gray-700 font-opensans">
                  Robotic process automation using UiPath and custom automation frameworks.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">Data</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                  Analytics & BI
                </h4>
                <p className="text-gray-700 font-opensans">
                  Business intelligence, data visualization, and predictive analytics solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}