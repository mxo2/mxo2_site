export default function VisionMissionValues() {
  return (
    <section className="relative py-12 bg-blue-900 overflow-hidden">
      {/* Simplified background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
          <g stroke="white" strokeWidth="1" fill="none">
            <line x1="0" y1="100" x2="1200" y2="200" />
            <line x1="0" y1="200" x2="1200" y2="300" />
            <line x1="400" y1="0" x2="400" y2="400" />
            <line x1="800" y1="0" x2="800" y2="400" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Title and Mission */}
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Our Mission & Values
          </h2>
          <p className="text-lg text-white leading-relaxed font-opensans mb-8 max-w-3xl mx-auto">
            To empower businesses with innovative AI, cloud, and automation solutions that drive digital transformation and sustainable growth.
          </p>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2 font-montserrat">
                Innovation
              </h3>
              <p className="text-sm text-gray-300 font-opensans">
                Cutting-edge solutions for tomorrow's challenges
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2 font-montserrat">
                Integrity
              </h3>
              <p className="text-sm text-gray-300 font-opensans">
                Honest partnerships built on trust
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2 font-montserrat">
                Excellence
              </h3>
              <p className="text-sm text-gray-300 font-opensans">
                Delivering exceptional results every time
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2 font-montserrat">
                Collaboration
              </h3>
              <p className="text-sm text-gray-300 font-opensans">
                Working together to achieve success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}