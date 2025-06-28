export default function BlogSection() {
  // Enhanced blog posts with images and categories matching the screenshot
  const insights = [
    {
      id: 1,
      title: "The 2025 State of Cloud Report",
      category: "THOUGHT LEADERSHIP",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60",
      link: "/insights/cloud-report-2025"
    },
    {
      id: 2,
      title: "The Impact of AI on the BFSI Industry",
      category: "BLOG",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60",
      link: "/insights/ai-bfsi-industry"
    },
    {
      id: 3,
      title: "Unlocking Agility: Why Hybrid Cloud is the New Normal",
      category: "BLOG",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=focalpoint&auto=format&q=60",
      link: "/insights/hybrid-cloud-agility"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header with Rackspace Technology logo */}
        <div className="flex items-start mb-16">
          <div className="flex-shrink-0 mr-12">
            <div className="text-2xl font-bold text-gray-900 font-montserrat">
              <span className="text-black">rackspace</span>
              <div className="text-sm font-normal text-gray-600 mt-1">technology.</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Latest insights
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl font-opensans">
              Discover perspectives from industry experts around digital transformation, trends, innovation, operations – all to help you determine your best path forward.
            </p>
          </div>
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
