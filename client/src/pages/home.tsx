import Hero from "@/components/sections/hero";
import SolutionsOverview from "@/components/sections/solutions-overview";
import IndustrySolutions from "@/components/sections/industry-solutions";
import TechnologyPartners from "@/components/sections/technology-partners";
import BlogSection from "@/components/sections/blog-section";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Mission Statement Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-semibold text-3xl lg:text-4xl text-gray-800 max-w-4xl mx-auto leading-tight">
            Your mission, brought to life with our hybrid
            <br />
            cloud and AI expertise
          </h2>
        </div>
      </section>
      
      <SolutionsOverview />
      <IndustrySolutions />
      <TechnologyPartners />
      <BlogSection />
      <CTASection />
    </div>
  );
}
