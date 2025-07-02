export default function VisionMissionValues() {
  return (
    <section className="relative py-20 bg-blue-900 overflow-hidden">
      {/* Prism lines background */}
      <div className="absolute inset-0">
        <svg 
          className="absolute inset-0 w-full h-full opacity-10" 
          preserveAspectRatio="none" 
          viewBox="0 0 1200 800"
        >
          {/* Diagonal prism lines */}
          <g stroke="white" strokeWidth="1" fill="none">
            <line x1="0" y1="100" x2="1200" y2="300" />
            <line x1="0" y1="200" x2="1200" y2="400" />
            <line x1="0" y1="300" x2="1200" y2="500" />
            <line x1="0" y1="400" x2="1200" y2="600" />
            <line x1="0" y1="500" x2="1200" y2="700" />
            
            {/* Reverse diagonal lines */}
            <line x1="0" y1="700" x2="1200" y2="500" />
            <line x1="0" y1="600" x2="1200" y2="400" />
            <line x1="0" y1="500" x2="1200" y2="300" />
            <line x1="0" y1="400" x2="1200" y2="200" />
            <line x1="0" y1="300" x2="1200" y2="100" />
            
            {/* Vertical accent lines */}
            <line x1="200" y1="0" x2="200" y2="800" />
            <line x1="400" y1="0" x2="400" y2="800" />
            <line x1="600" y1="0" x2="600" y2="800" />
            <line x1="800" y1="0" x2="800" y2="800" />
            <line x1="1000" y1="0" x2="1000" y2="800" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Vision */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat">
              Vision
            </h2>
            <p className="text-xl lg:text-2xl text-white leading-relaxed font-opensans max-w-4xl mx-auto">
              Empower businesses to lead in the digital era through innovative, reliable technology solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat">
              Mission
            </h2>
            <p className="text-xl lg:text-2xl text-white leading-relaxed font-opensans max-w-4xl mx-auto">
              Deliver tailored cloud, AI, and automation services that drive efficiency, growth, and lasting impact.
            </p>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 font-montserrat">
              Values
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-montserrat">
                  Innovation
                </h3>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-montserrat">
                  Integrity
                </h3>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-montserrat">
                  Collaboration
                </h3>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-montserrat">
                  Excellence
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}