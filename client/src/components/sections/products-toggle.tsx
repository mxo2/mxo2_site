import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import streetSyncImage from "@assets/services_1751110232462.png";
import parallelCampusLogo from "@assets/pc_logo_1751112090621.png";

export default function ProductsToggle() {
  const [activeProduct, setActiveProduct] = useState<"street-sync" | "parallel-campus">("street-sync");

  const streetSyncProduct = {
    title: "StreetSync – Smart Municipal Workforce Management",
    description: "StreetSync was implemented under a government directive in collaboration with IITian-led IAS officers to streamline municipal workforce operations. The system enables real-time GPS tracking, geo-fenced attendance, and daily activity monitoring for sanitation workers.",
    features: [
      "Catalog your existing applications, infrastructure and network architecture to help prioritize workloads and applications.",
      "Determine which cloud platform(s) fit your overall transformation objectives.",
      "Design a high-level target infrastructure and cloud platform architecture that accommodates your security and risk requirements.",
      "Assess your existing workloads and predict future cloud consumption to estimate your costs.",
      "Explore your detailed deployment strategy and migration tools for all applications and future recommendations."
    ],
    subtitle: "Empowering Municipal Workforce",
    tagline: "GPS-based Tracking Solution for Efficient Street Cleaning and Employee Management",
    image: streetSyncImage
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
    image: parallelCampusLogo
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
                    <p className="text-gray-700 leading-relaxed font-opensans mb-6">
                      {streetSyncProduct.description}
                    </p>
                    <ul className="space-y-4">
                      {streetSyncProduct.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-3 h-3 bg-purple-600 mr-4 mt-1 flex-shrink-0"></div>
                          <span className="text-gray-700 font-opensans leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Right - Image area */}
                  <div className="flex-shrink-0 w-80">
                    <img 
                      src="/assets/Screenshot 2025-05-16 at 10.40.01 PM.png_1751112067831.webp" 
                      alt="StreetSync - Municipal worker with GPS tracking" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex gap-8">
                  {/* Left - Content */}
                  <div className="flex-1">
                    <p className="text-gray-700 mb-6 font-opensans leading-relaxed">
                      {parallelCampusProduct.description}
                    </p>
                    <ul className="space-y-4">
                      {parallelCampusProduct.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-3 h-3 bg-purple-600 mr-4 mt-1 flex-shrink-0"></div>
                          <span className="text-gray-700 font-opensans leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Right - Logo area */}
                  <div className="flex-shrink-0 w-80 bg-black rounded-lg p-8 flex items-center justify-center">
                    <img 
                      src="/assets/logo_hd_1751112107139.png" 
                      alt="Parallel Campus - Beyond Education" 
                      className="max-w-full max-h-48 object-contain"
                    />
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