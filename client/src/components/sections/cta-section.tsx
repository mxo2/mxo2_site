import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-white relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 80,100 0,100" fill="rgba(255,255,255,0.1)" />
            <polygon points="20,0 100,0 100,60 40,100" fill="rgba(255,255,255,0.05)" />
            <polygon points="60,0 100,20 100,100 80,100" fill="rgba(255,255,255,0.08)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left side - Content */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-montserrat">
              Ready to start the conversation?
            </h2>
            <p className="text-lg mb-0 max-w-lg font-opensans opacity-90">
              We're experts on your side, doing what it takes to get the job done right — from the first consultation to your daily operations.
            </p>
          </div>
          
          {/* Right side - CTA Button */}
          <div className="flex-shrink-0 ml-8">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 px-8 py-3 text-lg font-semibold font-montserrat"
              >
                Let's talk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
