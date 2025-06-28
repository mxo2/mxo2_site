import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import aiEmployeeImage from "@assets/employee-using-ai-computing-simulation-2023-08-23-02-06-48-utc_1751104050861.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-r from-blue-600 via-purple-700 to-red-600 -mt-40 pt-40">
      {/* Background image on the right */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex">
          {/* Left content area with gradient background */}
          <div className="w-3/5 bg-gradient-to-r from-blue-600 via-purple-700 to-red-600"></div>
          
          {/* Right image area with diagonal clip */}
          <div 
            className="flex-1 relative"
            style={{
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <img 
              src={aiEmployeeImage}
              alt="Professional working with AI technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/10 to-blue-900/30"></div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all">
        <ArrowRight className="w-6 h-6 text-white rotate-180" />
      </button>
      <button className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all">
        <ArrowRight className="w-6 h-6 text-white" />
      </button>

      {/* Content overlay */}
      <div className="relative z-10 min-h-[500px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
              Enterprise-Grade AI Agents,
              <br />
              <span className="text-cyan-300">Built for Real-World Impact</span>
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl font-opensans">
              MXO2 and industry partners deliver intelligent solutions with enterprise-grade security, integration, and built-in observability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white font-opensans font-semibold px-8 py-3"
              >
                Read press release
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
      </div>
    </section>
  );
}