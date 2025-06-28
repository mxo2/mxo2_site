import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-700 to-red-600 min-h-[600px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Navigation Arrows */}
      <button className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="container mx-auto px-4 relative z-10 min-h-[600px] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
              Enterprise-Grade AI Solutions,
              <br />
              <span className="text-cyan-300">Built for Real-World Impact</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
              MXO2 and industry partners deliver intelligent solutions with enterprise-grade security, integration, and built-in observability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-montserrat font-semibold px-8 py-3"
              >
                Read press release
              </Button>
            </div>
          </div>
          
          {/* Right Content - Professional Image Area */}
          <div className="relative">
            <div className="relative bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20">
              {/* Technology Logos */}
              <div className="absolute top-4 right-4 flex items-center space-x-4">
                <div className="bg-white rounded-lg px-3 py-1">
                  <span className="font-montserrat font-bold text-gray-800">MXO<span className="text-cyan-600">2</span></span>
                </div>
                <div className="bg-white rounded-lg px-3 py-1">
                  <span className="font-montserrat font-bold text-gray-800">AI.tech</span>
                </div>
              </div>

              {/* Professional Business Scene */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
                {/* Simulated office background with geometric patterns */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full -translate-y-8 translate-x-8 opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full translate-y-4 -translate-x-4 opacity-30"></div>
                
                {/* Central professional figure representation */}
                <div className="relative z-10 text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-2xl mx-auto w-48 h-48 flex items-center justify-center mb-4">
                    <div className="text-6xl font-bold bg-gradient-to-br from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                      AI
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                    <span className="text-gray-700 font-semibold">Enterprise Solutions</span>
                  </div>
                </div>

                {/* Floating tech elements */}
                <div className="absolute top-12 left-8 bg-white rounded-lg p-2 shadow-lg">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                </div>
                <div className="absolute bottom-12 right-8 bg-white rounded-lg p-2 shadow-lg">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                </div>
                <div className="absolute top-20 right-12 bg-white rounded-lg p-2 shadow-lg">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
      </div>
    </section>
  );
}
