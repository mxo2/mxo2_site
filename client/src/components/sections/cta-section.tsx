import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
            Get in Touch with Maximum Oxygen Team: <span className="text-cyan">Elevate Your IT Experience</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions? Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-cyan hover:bg-white hover:text-navy text-white font-montserrat font-semibold"
              >
                Let's Talk
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white hover:bg-white hover:text-navy text-white font-montserrat font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
