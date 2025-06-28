import Hero from "@/components/sections/hero";
import AISolutionsBanner from "@/components/sections/ai-solutions-banner";
import SolutionsGrid from "@/components/sections/solutions-grid";
import SolutionsOverview from "@/components/sections/solutions-overview";
import IndustrySolutions from "@/components/sections/industry-solutions";
import TechnologyPartners from "@/components/sections/technology-partners";
import BlogSection from "@/components/sections/blog-section";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <AISolutionsBanner />
      <SolutionsGrid />
      <SolutionsOverview />
      <IndustrySolutions />
      <TechnologyPartners />
      <BlogSection />
      <CTASection />
    </div>
  );
}
