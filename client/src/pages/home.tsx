import Hero from "@/components/sections/hero";
import AISolutionsBanner from "@/components/sections/ai-solutions-banner";
import SolutionsGrid from "@/components/sections/solutions-grid";
import ProductsToggle from "@/components/sections/products-toggle";
import TechnologyPartners from "@/components/sections/technology-partners";
import BlogSection from "@/components/sections/blog-section";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <AISolutionsBanner />
      <SolutionsGrid />
      <ProductsToggle />
      <TechnologyPartners />
      <BlogSection />
      <CTASection />
    </div>
  );
}
