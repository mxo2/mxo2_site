import { useState } from "react";

export default function SolutionsGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      title: "Cloud",
      description: "Maximize potential through cloud adoption, expert migration, and rapid innovation",
      link: "More On cloud Solutions",
      bgColor: "bg-white",
      hoverBgColor: "bg-blue-600"
    },
    {
      title: "AI & Automation",
      description: "Build smarter systems with AI, machine learning, and intelligent automation to streamline operations, reduce cost, and improve decision-making",
      link: "Explore AI solutions",
      bgColor: "bg-gray-100",
      hoverBgColor: "bg-blue-600"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Safeguard your business with enterprise-grade security, data privacy compliance (GDPR, SOC 2), and AI governance frameworks.",
      link: "Learn about Cyber Security",
      bgColor: "bg-blue-600",
      hoverBgColor: "bg-blue-700"
    },
    {
      title: "Data & Analytics",
      description: "Turn raw data into actionable insights with predictive analytics, real-time dashboards, and scalable data pipelines.",
      link: "Learn about Data",
      bgColor: "bg-gray-100",
      hoverBgColor: "bg-blue-600"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'hsl(224, 46%, 22%)' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - O2 Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="text-8xl lg:text-9xl font-bold text-cyan-400 opacity-90">
                <span className="text-cyan-300">oxygen</span>
                <div className="text-6xl lg:text-7xl -mt-4">
                  <span style={{ backgroundColor: 'hsl(224, 46%, 22%)', color: 'hsl(224, 46%, 22%)' }}>.</span>
                  <span className="text-cyan-400">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Solutions Grid */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-montserrat">
              Oxygenating Your Business with Our Solutions
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                    hoveredCard === index 
                      ? `${solution.hoverBgColor} text-white` 
                      : solution.bgColor === 'bg-blue-600' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-900'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <h3 className="text-lg font-bold mb-3 font-montserrat">
                    {solution.title}
                  </h3>
                  
                  <p className="text-sm mb-4 leading-relaxed font-opensans">
                    {solution.description}
                  </p>
                  
                  <a 
                    href="#" 
                    className={`text-sm font-medium hover:underline transition-colors ${
                      hoveredCard === index || solution.bgColor === 'bg-blue-600'
                        ? 'text-cyan-300' 
                        : 'text-[hsl(354,87%,51%)]'
                    }`}
                  >
                    {solution.link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}