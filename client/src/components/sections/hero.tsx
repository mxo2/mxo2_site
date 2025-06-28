import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import aiEmployeeImage from "@assets/employee-using-ai-computing-simulation-2023-08-23-02-06-48-utc_1751104050861.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-red-600/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Built for{" "}
              <span className="bg-gradient-to-r from-[hsl(220,72%,44%)] to-[hsl(354,87%,51%)] bg-clip-text text-transparent">
                Real-World
              </span>{" "}
              Impact
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-opensans max-w-xl">
              Transform your business with enterprise-grade cloud solutions, AI automation, 
              and cybersecurity that scales with your ambitions.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white px-8 py-4 text-lg font-opensans font-medium"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[hsl(220,72%,44%)] text-[hsl(220,72%,44%)] hover:bg-[hsl(220,72%,44%)] hover:text-white px-8 py-4 text-lg font-opensans font-medium"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="text-sm text-gray-500 font-opensans">
              Trusted by 500+ enterprises worldwide
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aiEmployeeImage}
                alt="Professional working with AI technology"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for better visual effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[hsl(354,87%,51%)] rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[hsl(220,72%,44%)] rounded-full opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}