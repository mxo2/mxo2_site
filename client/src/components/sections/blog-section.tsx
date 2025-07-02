export default function BlogSection() {
  // AI, cloud migration, and robotics focused insights
  const insights = [
    {
      id: 1,
      title: "AI-Powered Cloud Migration: Reducing Costs by 40% with Intelligent Automation",
      category: "CLOUD MIGRATION",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60",
      link: "/insights/ai-cloud-migration-automation"
    },
    {
      id: 2,
      title: "Robotic Process Automation: Transforming Manufacturing Operations with AI",
      category: "ROBOTICS & AI",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60",
      link: "/insights/rpa-manufacturing-ai"
    },
    {
      id: 3,
      title: "Multi-Cloud Strategy: How AI Orchestration Optimizes Workload Distribution",
      category: "AI SOLUTIONS",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60",
      link: "/insights/ai-multi-cloud-orchestration"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Latest insights
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl font-opensans">
            Discover expert perspectives on AI implementation, cloud migration strategies, and robotics automation – helping you navigate your digital transformation journey.
          </p>
        </div>
        
        {/* Insights Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <article key={insight.id} className="group">
              {/* Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Category */}
              <div className="text-sm font-bold text-[hsl(354,87%,51%)] mb-2 uppercase tracking-wide font-opensans">
                {insight.category}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight font-montserrat group-hover:text-[hsl(354,87%,51%)] transition-colors">
                {insight.title}
              </h3>
              
              {/* Learn More Link */}
              <a 
                href={insight.link}
                className="text-[hsl(354,87%,51%)] font-medium hover:underline font-opensans group"
              >
                Learn more <span className="ml-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
