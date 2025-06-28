import { Button } from "@/components/ui/button";

export default function AISolutionsBanner() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
          AI Powered Solutions to Transform Your Business
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-opensans">
          Empower your business with cutting-edge AI tools — from intelligent automation to real-time data insights — driving smarter 
          decisions, faster workflows, and scalable innovation.
        </p>
        
        <Button 
          size="lg" 
          className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white px-8 py-3 text-lg font-opensans font-medium"
        >
          Learn more
        </Button>
      </div>
    </section>
  );
}