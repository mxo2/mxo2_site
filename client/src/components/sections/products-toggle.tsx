import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ProductsToggle() {
  const [activeProduct, setActiveProduct] = useState<"street-sync" | "parallel-campus">("street-sync");

  const streetSyncProduct = {
    title: "StreetSync – Smart Municipal Workforce Management",
    description: "StreetSync was implemented under a government directive in collaboration with IITian-led IAS officers to streamline municipal workforce operations. The system enables real-time GPS tracking, geo-fenced attendance, and daily activity monitoring for sanitation workers. Deployed across select urban wards, StreetSync has improved transparency, reduced absenteeism, and empowered authorities with data-driven insights — transforming how municipalities manage their field teams.",
    subtitle: "Empowering Municipal Workforce",
    tagline: "GPS-based Tracking Solution for Efficient Street Cleaning and Employee Management",
    image: "/api/placeholder/400/250"
  };

  const parallelCampusProduct = {
    title: "Parallel Campus – AI-Driven School Ecosystem",
    description: "Parallel Campus began as a robust School ERP platform, streamlining academic operations, administration, and communication. Today, it has evolved into an AI-powered ecosystem designed to empower teachers, students, and parents alike.",
    features: [
      "For teachers: Smart tools for classroom planning, student performance tracking, and automated reporting.",
      "For parents: Behavior insights, learning analytics, and AI-driven parenting support tailored to their child's development.",
      "For students: Self-learning assistance, content summarization, and interactive study support through AI copilots.",
      "By combining ERP functionality with intelligent automation and generative AI, Parallel Campus transforms traditional education into a connected, data-informed experience for modern learning environments."
    ],
    subtitle: "Beyond Education",
    image: "/api/placeholder/400/250"
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-8">
          {/* Left side - Use Cases title */}
          <div className="flex-shrink-0">
            <h2 className="text-4xl font-bold text-gray-900 font-montserrat">
              Use Cases
            </h2>
          </div>

          {/* Right side - Product toggles and content */}
          <div className="flex-1">
            {/* Toggle Buttons */}
            <div className="space-y-2 mb-8">
              <button
                onClick={() => setActiveProduct("street-sync")}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-lg transition-colors ${
                  activeProduct === "street-sync"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <span className="font-semibold">Street Sync</span>
                {activeProduct === "street-sync" ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              
              <button
                onClick={() => setActiveProduct("parallel-campus")}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-lg transition-colors ${
                  activeProduct === "parallel-campus"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <span className="font-semibold">Parallel Campus</span>
                {activeProduct === "parallel-campus" ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Product Content */}
            <div className="bg-white rounded-lg p-8 shadow-sm border">
              {activeProduct === "street-sync" ? (
                <div className="flex gap-8">
                  {/* Left - Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                      {streetSyncProduct.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-opensans">
                      {streetSyncProduct.description}
                    </p>
                  </div>
                  
                  {/* Right - Image/Logo area */}
                  <div className="flex-shrink-0 w-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white flex flex-col justify-center items-center text-center">
                    <div className="text-3xl font-bold mb-2 font-montserrat">
                      StreetSync
                    </div>
                    <div className="text-sm opacity-90">
                      {streetSyncProduct.subtitle}
                    </div>
                    <div className="text-xs mt-4 opacity-80">
                      {streetSyncProduct.tagline}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-8">
                  {/* Left - Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                      {parallelCampusProduct.title}
                    </h3>
                    <p className="text-gray-700 mb-4 font-opensans">
                      {parallelCampusProduct.description}
                    </p>
                    <ul className="space-y-3">
                      {parallelCampusProduct.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 font-opensans">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Right - Logo */}
                  <div className="flex-shrink-0 w-64 bg-gradient-to-br from-teal-600 to-blue-700 rounded-lg p-6 text-white flex flex-col justify-center items-center text-center">
                    <div className="text-2xl font-bold mb-2 font-montserrat">
                      Parallel<br />Campus
                    </div>
                    <div className="text-sm opacity-90">
                      {parallelCampusProduct.subtitle}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}