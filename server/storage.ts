import { 
  users, 
  blogPosts, 
  pages, 
  services, 
  industries, 
  technologies,
  blogCategories,
  blogTags,
  blogAuthors,
  partnershipBlogs,
  type User, 
  type BlogPost, 
  type Page, 
  type Service, 
  type Industry, 
  type Technology,
  type BlogCategory,
  type BlogTag,
  type BlogAuthor,
  type PartnershipBlog,
  type InsertUser, 
  type InsertBlogPost, 
  type InsertPage, 
  type InsertService, 
  type InsertIndustry, 
  type InsertTechnology,
  type InsertBlogCategory,
  type InsertBlogTag,
  type InsertBlogAuthor,
  type InsertPartnershipBlog,
  type ChatConversation,
  type InsertChatConversation,
  type ChatLead,
  type InsertChatLead
} from "@shared/schema";

// Extended storage interface for CMS functionality
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Blog post methods
  getAllBlogPosts(): Promise<BlogPost[]>;
  getFeaturedBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;

  // Page methods
  getAllPages(): Promise<Page[]>;
  getPageBySlug(slug: string): Promise<Page | undefined>;
  createPage(page: InsertPage): Promise<Page>;
  updatePage(id: number, page: Partial<InsertPage>): Promise<Page | undefined>;
  deletePage(id: number): Promise<boolean>;

  // Service methods
  getAllServices(): Promise<Service[]>;
  getServicesByCategory(category: string): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: number, service: Partial<InsertService>): Promise<Service | undefined>;
  deleteService(id: number): Promise<boolean>;

  // Industry methods
  getAllIndustries(): Promise<Industry[]>;
  createIndustry(industry: InsertIndustry): Promise<Industry>;
  updateIndustry(id: number, industry: Partial<InsertIndustry>): Promise<Industry | undefined>;
  deleteIndustry(id: number): Promise<boolean>;

  // Technology methods
  getAllTechnologies(): Promise<Technology[]>;
  getFeaturedTechnologies(): Promise<Technology[]>;
  createTechnology(technology: InsertTechnology): Promise<Technology>;
  updateTechnology(id: number, technology: Partial<InsertTechnology>): Promise<Technology | undefined>;
  deleteTechnology(id: number): Promise<boolean>;

  // Chat methods
  createChatConversation(conversation: InsertChatConversation): Promise<ChatConversation>;
  getChatConversationsBySession(sessionId: string): Promise<ChatConversation[]>;
  createChatLead(lead: InsertChatLead): Promise<ChatLead>;
  getAllChatLeads(): Promise<ChatLead[]>;

  // Blog system methods
  getAllPartnershipBlogs(): Promise<PartnershipBlog[]>;
  getPartnershipBlogBySlug(slug: string): Promise<PartnershipBlog | undefined>;
  getFeaturedPartnershipBlogs(): Promise<PartnershipBlog[]>;
  createPartnershipBlog(blog: InsertPartnershipBlog): Promise<PartnershipBlog>;
  updatePartnershipBlog(id: number, blog: Partial<InsertPartnershipBlog>): Promise<PartnershipBlog | undefined>;
  deletePartnershipBlog(id: number): Promise<boolean>;
  
  // Blog categories
  getAllBlogCategories(): Promise<BlogCategory[]>;
  createBlogCategory(category: InsertBlogCategory): Promise<BlogCategory>;
  updateBlogCategory(id: number, category: Partial<InsertBlogCategory>): Promise<BlogCategory | undefined>;
  deleteBlogCategory(id: number): Promise<boolean>;
  
  // Blog tags
  getAllBlogTags(): Promise<BlogTag[]>;
  createBlogTag(tag: InsertBlogTag): Promise<BlogTag>;
  updateBlogTag(id: number, tag: Partial<InsertBlogTag>): Promise<BlogTag | undefined>;
  deleteBlogTag(id: number): Promise<boolean>;
  
  // Blog authors
  getAllBlogAuthors(): Promise<BlogAuthor[]>;
  createBlogAuthor(author: InsertBlogAuthor): Promise<BlogAuthor>;
  updateBlogAuthor(id: number, author: Partial<InsertBlogAuthor>): Promise<BlogAuthor | undefined>;
  deleteBlogAuthor(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private pages: Map<number, Page>;
  private services: Map<number, Service>;
  private industries: Map<number, Industry>;
  private technologies: Map<number, Technology>;
  private chatConversations: Map<number, ChatConversation>;
  private chatLeads: Map<number, ChatLead>;
  private blogCategories: Map<number, BlogCategory>;
  private blogTags: Map<number, BlogTag>;
  private blogAuthors: Map<number, BlogAuthor>;
  private partnershipBlogs: Map<number, PartnershipBlog>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.pages = new Map();
    this.services = new Map();
    this.industries = new Map();
    this.technologies = new Map();
    this.chatConversations = new Map();
    this.chatLeads = new Map();
    this.blogCategories = new Map();
    this.blogTags = new Map();
    this.blogAuthors = new Map();
    this.partnershipBlogs = new Map();
    this.currentId = 1;

    // Initialize with some sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample blog posts based on real content
    const sampleBlogPosts: BlogPost[] = [
      {
        id: 1,
        title: "Revolutionizing Retail Trading: Inside MXO2's Powerful Multi-Platform Algo Trading System",
        slug: "revolutionizing-retail-trading",
        excerpt: "Discover how our algorithmic trading platform transforms retail trading with advanced automation and real-time analytics capabilities.",
        content: `<h2>The Evolution of Algorithmic Trading</h2><p>The financial trading landscape has undergone a dramatic transformation in recent years. What was once dominated by large institutional players with access to sophisticated trading systems is now increasingly accessible to retail traders through advanced algorithmic trading platforms.</p><p>At MXO2, we've developed a comprehensive multi-platform algorithmic trading system that democratizes access to professional-grade trading tools while maintaining the robustness and reliability required for financial markets.</p>`,
        featuredImage: null,
        authorId: 1,
        published: true,
        createdAt: new Date("2025-05-24"),
        updatedAt: new Date("2025-05-24"),
      },
      {
        id: 2,
        title: "Smart Streets of Jaisalmer: How StreetSync Is Powering GPS-Based Municipal Workforce Management",
        slug: "smart-streets-jaisalmer-streetsync",
        excerpt: "Explore how StreetSync revolutionizes municipal operations with GPS tracking and workforce optimization in collaboration with government officials.",
        content: `<h2>A Government Initiative for Digital Transformation</h2><p>StreetSync was born from a collaborative effort between progressive government officials and technology experts. Implemented under a government directive in partnership with IITian-led IAS officers, this innovative system addresses the critical need for transparency and efficiency in municipal workforce management.</p>`,
        featuredImage: null,
        authorId: 1,
        published: true,
        createdAt: new Date("2025-05-24"),
        updatedAt: new Date("2025-05-24"),
      },
      {
        id: 3,
        title: "Empowering Families and Students with AI: The Future of Parenting and Learning Begins at Parallel Campus",
        slug: "empowering-families-students-ai-parallel-campus",
        excerpt: "Learn how AI transforms education through personalized learning experiences and intelligent support systems for modern families.",
        content: `<h2>From ERP to AI-Powered Ecosystem</h2><p>Parallel Campus began its journey as a comprehensive School ERP platform, designed to streamline academic operations, administration, and communication. However, recognizing the transformative potential of artificial intelligence in education, we evolved the platform into something much more ambitious: an AI-powered ecosystem that empowers teachers, parents, and students alike.</p>`,
        featuredImage: null,
        authorId: 1,
        published: true,
        createdAt: new Date("2025-05-24"),
        updatedAt: new Date("2025-05-24"),
      }
    ];

    sampleBlogPosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });

    // Sample services
    const sampleServices: Service[] = [
      {
        id: 1,
        title: "Cloud Migration",
        slug: "cloud-migration",
        description: "Seamless migration of your applications and data to cloud platforms with minimal downtime.",
        icon: "cloud",
        category: "cloud",
        featured: true,
        order: 1
      },
      {
        id: 2,
        title: "AI Model Integration",
        slug: "ai-model-integration",
        description: "Integrate pre-trained AI models and develop custom solutions for your specific needs.",
        icon: "brain",
        category: "ai-iot",
        featured: true,
        order: 2
      }
    ];

    sampleServices.forEach(service => {
      this.services.set(service.id, service);
    });

    // Sample technologies
    const sampleTechnologies: Technology[] = [
      {
        id: 1,
        name: "AWS",
        slug: "aws",
        description: "Amazon Web Services cloud platform",
        logo: null,
        category: "cloud",
        featured: true,
        order: 1
      },
      {
        id: 2,
        name: "OpenAI",
        slug: "openai",
        description: "Advanced AI language models",
        logo: null,
        category: "ai",
        featured: true,
        order: 2
      }
    ];

    sampleTechnologies.forEach(tech => {
      this.technologies.set(tech.id, tech);
    });

    // Sample blog data
    const sampleAuthors: BlogAuthor[] = [
      {
        id: 1,
        name: "Sam Panwar",
        email: "sam@mxo2.com",
        bio: "CEO & Technology Leader at MXO2, specializing in digital transformation and AI solutions.",
        title: "Chief Executive Officer",
        avatar: null,
        socialLinkedIn: "https://linkedin.com/in/sampanwar",
        socialTwitter: null,
        isActive: true,
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-01-01")
      }
    ];

    const sampleCategories: BlogCategory[] = [
      {
        id: 1,
        name: "Technology Partnerships",
        slug: "technology-partnerships",
        description: "Insights on strategic technology alliances and partnerships",
        color: "#3B82F6",
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-01-01")
      },
      {
        id: 2,
        name: "Digital Transformation",
        slug: "digital-transformation",
        description: "Stories and strategies for successful digital transformation",
        color: "#059669",
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-01-01")
      },
      {
        id: 3,
        name: "AI & Innovation",
        slug: "ai-innovation",
        description: "Latest developments in artificial intelligence and innovation",
        color: "#7C3AED",
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-01-01")
      }
    ];

    const sampleTags: BlogTag[] = [
      { id: 1, name: "Partnership", slug: "partnership", description: "Technology partnerships and alliances", createdAt: new Date("2025-01-01") },
      { id: 2, name: "Cloud", slug: "cloud", description: "Cloud computing and infrastructure", createdAt: new Date("2025-01-01") },
      { id: 3, name: "AI", slug: "ai", description: "Artificial intelligence and machine learning", createdAt: new Date("2025-01-01") },
      { id: 4, name: "Digital Transformation", slug: "digital-transformation", description: "Enterprise digital transformation", createdAt: new Date("2025-01-01") },
      { id: 5, name: "Innovation", slug: "innovation", description: "Technology innovation and R&D", createdAt: new Date("2025-01-01") }
    ];

    const sampleBlogs: PartnershipBlog[] = [
      {
        id: 1,
        title: "Strategic Partnership with Microsoft Azure: Transforming Enterprise Cloud Infrastructure",
        slug: "microsoft-azure-partnership",
        excerpt: "Discover how our strategic partnership with Microsoft Azure is enabling enterprises to achieve unprecedented cloud transformation success.",
        content: `<h2>Revolutionizing Enterprise Cloud Strategy</h2>
<p>In today's rapidly evolving digital landscape, enterprises require more than just cloud infrastructure—they need strategic guidance and proven expertise to navigate complex transformation journeys. Our partnership with Microsoft Azure represents a pivotal step in delivering comprehensive cloud solutions that drive real business value.</p>

<h3>The Partnership Vision</h3>
<p>Our collaboration with Microsoft Azure focuses on three key areas:</p>
<ul>
<li><strong>Infrastructure Modernization:</strong> Migrating legacy systems to scalable, secure cloud environments</li>
<li><strong>AI Integration:</strong> Leveraging Azure Cognitive Services for intelligent business solutions</li>
<li><strong>Security Excellence:</strong> Implementing enterprise-grade security frameworks</li>
</ul>

<h3>Success Stories</h3>
<p>Since establishing this partnership, we've successfully transformed over 50 enterprise environments, achieving an average of 40% cost reduction and 3x improvement in system performance.</p>

<h3>What This Means for Our Clients</h3>
<p>This partnership enables us to offer:</p>
<ul>
<li>Preferential Azure pricing and support</li>
<li>Access to preview features and early releases</li>
<li>Direct escalation paths for critical issues</li>
<li>Joint solution development opportunities</li>
</ul>

<p>Ready to explore how Azure can transform your business? Contact our team to discuss your cloud transformation strategy.</p>`,
        featuredImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=630&fit=crop",
        metaTitle: "MXO2 Microsoft Azure Partnership - Enterprise Cloud Transformation",
        metaDescription: "Learn how MXO2's strategic partnership with Microsoft Azure delivers enterprise cloud transformation solutions with proven results.",
        metaKeywords: "Microsoft Azure, cloud partnership, enterprise transformation, MXO2",
        authorId: 1,
        categoryId: 1,
        status: "published",
        featured: true,
        readTime: 6,
        publishedAt: new Date("2025-06-25"),
        createdAt: new Date("2025-06-25"),
        updatedAt: new Date("2025-06-25")
      },
      {
        id: 2,
        title: "AI-Powered Automation: Partnership Success with OpenAI and UiPath",
        slug: "ai-automation-partnership-openai-uipath",
        excerpt: "Explore how combining OpenAI's language models with UiPath's automation platform creates unprecedented opportunities for intelligent process automation.",
        content: `<h2>The Future of Intelligent Automation</h2>
<p>The convergence of artificial intelligence and robotic process automation (RPA) is creating new possibilities for enterprise automation. Our partnerships with OpenAI and UiPath enable us to deliver next-generation solutions that combine cognitive capabilities with process automation.</p>

<h3>Technology Integration</h3>
<p>By integrating OpenAI's advanced language models with UiPath's automation platform, we create solutions that can:</p>
<ul>
<li>Understand and process natural language documents</li>
<li>Make intelligent decisions based on contextual information</li>
<li>Adapt to changing business rules and requirements</li>
<li>Provide human-like interaction capabilities</li>
</ul>

<h3>Real-World Applications</h3>
<p>Our integrated solutions have transformed operations across various industries:</p>
<ul>
<li><strong>Financial Services:</strong> Intelligent document processing for loan applications</li>
<li><strong>Healthcare:</strong> Automated patient data analysis and reporting</li>
<li><strong>Manufacturing:</strong> Predictive maintenance and quality control automation</li>
</ul>

<h3>Partnership Benefits</h3>
<p>These strategic partnerships provide our clients with:</p>
<ul>
<li>Cutting-edge AI capabilities at enterprise scale</li>
<li>Proven automation frameworks with rapid deployment</li>
<li>Continuous innovation through joint R&D initiatives</li>
<li>Expert support from both technology partners</li>
</ul>

<p>Interested in intelligent automation for your organization? Let's discuss how AI-powered RPA can transform your business processes.</p>`,
        featuredImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&h=630&fit=crop",
        metaTitle: "AI-Powered Automation Partnership - OpenAI & UiPath Solutions",
        metaDescription: "Discover how MXO2 combines OpenAI and UiPath technologies to deliver intelligent process automation solutions for enterprises.",
        metaKeywords: "OpenAI, UiPath, AI automation, RPA, intelligent automation, MXO2",
        authorId: 1,
        categoryId: 1,
        status: "published",
        featured: true,
        readTime: 5,
        publishedAt: new Date("2025-06-20"),
        createdAt: new Date("2025-06-20"),
        updatedAt: new Date("2025-06-20")
      },
      {
        id: 3,
        title: "Digital Transformation Journey: Lessons from 100+ Enterprise Implementations",
        slug: "digital-transformation-lessons-enterprise",
        excerpt: "Key insights and best practices derived from implementing digital transformation projects across diverse enterprise environments.",
        content: `<h2>Insights from the Digital Transformation Frontlines</h2>
<p>After successfully implementing digital transformation projects for over 100 enterprise clients, we've identified patterns, challenges, and strategies that consistently drive success. Here are the key lessons learned from our journey.</p>

<h3>The Foundation: People, Process, Technology</h3>
<p>Successful digital transformation requires balance across three critical dimensions:</p>
<ul>
<li><strong>People:</strong> Change management and skill development</li>
<li><strong>Process:</strong> Workflow optimization and standardization</li>
<li><strong>Technology:</strong> Strategic tool selection and integration</li>
</ul>

<h3>Common Challenges and Solutions</h3>
<h4>Challenge 1: Resistance to Change</h4>
<p>Solution: Implement comprehensive change management programs with clear communication, training, and incentive alignment.</p>

<h4>Challenge 2: Legacy System Integration</h4>
<p>Solution: Adopt phased migration strategies with robust API-first architectures that enable gradual modernization.</p>

<h4>Challenge 3: Data Silos</h4>
<p>Solution: Establish data governance frameworks and implement unified data platforms for centralized access and analytics.</p>

<h3>Success Metrics That Matter</h3>
<p>Based on our implementations, focus on these key performance indicators:</p>
<ul>
<li>Employee productivity improvement (average: 35% increase)</li>
<li>Process automation rate (target: 60-80% of repetitive tasks)</li>
<li>Customer satisfaction scores (typical improvement: 25-40%)</li>
<li>Time-to-market reduction (average: 50% faster delivery)</li>
</ul>

<h3>Best Practices for Success</h3>
<ol>
<li><strong>Start with Clear Vision:</strong> Define specific business outcomes and success criteria</li>
<li><strong>Secure Leadership Buy-in:</strong> Ensure executive sponsorship and resource commitment</li>
<li><strong>Adopt Agile Approach:</strong> Implement iterative delivery with regular feedback loops</li>
<li><strong>Invest in Training:</strong> Develop internal capabilities alongside technology deployment</li>
</ol>

<p>Ready to begin your digital transformation journey? Our team can help you develop a strategy tailored to your organization's unique needs and challenges.</p>`,
        featuredImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop",
        metaTitle: "Digital Transformation Best Practices - Lessons from 100+ Implementations",
        metaDescription: "Learn key insights and best practices for digital transformation success from MXO2's experience with 100+ enterprise implementations.",
        metaKeywords: "digital transformation, enterprise implementation, best practices, change management, MXO2",
        authorId: 1,
        categoryId: 2,
        status: "published",
        featured: false,
        readTime: 8,
        publishedAt: new Date("2025-06-15"),
        createdAt: new Date("2025-06-15"),
        updatedAt: new Date("2025-06-15")
      }
    ];

    // Initialize blog data
    sampleAuthors.forEach(author => this.blogAuthors.set(author.id, author));
    sampleCategories.forEach(category => this.blogCategories.set(category.id, category));
    sampleTags.forEach(tag => this.blogTags.set(tag.id, tag));
    sampleBlogs.forEach(blog => this.partnershipBlogs.set(blog.id, blog));

    this.currentId = 100; // Start IDs from 100 to avoid conflicts
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { 
      ...insertUser, 
      id,
      role: insertUser.role || 'user',
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  // Blog post methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    const allPosts = await this.getAllBlogPosts();
    return allPosts.slice(0, 3); // Return first 3 as featured
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug && post.published);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentId++;
    const now = new Date();
    const post: BlogPost = {
      ...insertPost,
      id,
      featuredImage: insertPost.featuredImage || null,
      authorId: insertPost.authorId || null,
      published: insertPost.published || false,
      createdAt: now,
      updatedAt: now
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: number, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    if (!post) return undefined;

    const updatedPost = {
      ...post,
      ...updateData,
      updatedAt: new Date()
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  // Page methods
  async getAllPages(): Promise<Page[]> {
    return Array.from(this.pages.values())
      .filter(page => page.published)
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  async getPageBySlug(slug: string): Promise<Page | undefined> {
    return Array.from(this.pages.values()).find(page => page.slug === slug && page.published);
  }

  async createPage(insertPage: InsertPage): Promise<Page> {
    const id = this.currentId++;
    const now = new Date();
    const page: Page = {
      ...insertPage,
      id,
      published: insertPage.published || false,
      metaDescription: insertPage.metaDescription || null,
      createdAt: now,
      updatedAt: now
    };
    this.pages.set(id, page);
    return page;
  }

  async updatePage(id: number, updateData: Partial<InsertPage>): Promise<Page | undefined> {
    const page = this.pages.get(id);
    if (!page) return undefined;

    const updatedPage = {
      ...page,
      ...updateData,
      updatedAt: new Date()
    };
    this.pages.set(id, updatedPage);
    return updatedPage;
  }

  async deletePage(id: number): Promise<boolean> {
    return this.pages.delete(id);
  }

  // Service methods
  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values())
      .sort((a, b) => a.order - b.order);
  }

  async getServicesByCategory(category: string): Promise<Service[]> {
    return Array.from(this.services.values())
      .filter(service => service.category === category)
      .sort((a, b) => a.order - b.order);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentId++;
    const service: Service = {
      ...insertService,
      id,
      order: insertService.order || 0,
      featured: insertService.featured || false
    };
    this.services.set(id, service);
    return service;
  }

  async updateService(id: number, updateData: Partial<InsertService>): Promise<Service | undefined> {
    const service = this.services.get(id);
    if (!service) return undefined;

    const updatedService = {
      ...service,
      ...updateData
    };
    this.services.set(id, updatedService);
    return updatedService;
  }

  async deleteService(id: number): Promise<boolean> {
    return this.services.delete(id);
  }

  // Industry methods
  async getAllIndustries(): Promise<Industry[]> {
    return Array.from(this.industries.values())
      .sort((a, b) => a.order - b.order);
  }

  async createIndustry(insertIndustry: InsertIndustry): Promise<Industry> {
    const id = this.currentId++;
    const industry: Industry = {
      ...insertIndustry,
      id
    };
    this.industries.set(id, industry);
    return industry;
  }

  async updateIndustry(id: number, updateData: Partial<InsertIndustry>): Promise<Industry | undefined> {
    const industry = this.industries.get(id);
    if (!industry) return undefined;

    const updatedIndustry = {
      ...industry,
      ...updateData
    };
    this.industries.set(id, updatedIndustry);
    return updatedIndustry;
  }

  async deleteIndustry(id: number): Promise<boolean> {
    return this.industries.delete(id);
  }

  // Technology methods
  async getAllTechnologies(): Promise<Technology[]> {
    return Array.from(this.technologies.values())
      .sort((a, b) => a.order - b.order);
  }

  async getFeaturedTechnologies(): Promise<Technology[]> {
    return Array.from(this.technologies.values())
      .filter(tech => tech.featured)
      .sort((a, b) => a.order - b.order);
  }

  async createTechnology(insertTechnology: InsertTechnology): Promise<Technology> {
    const id = this.currentId++;
    const technology: Technology = {
      ...insertTechnology,
      id
    };
    this.technologies.set(id, technology);
    return technology;
  }

  async updateTechnology(id: number, updateData: Partial<InsertTechnology>): Promise<Technology | undefined> {
    const technology = this.technologies.get(id);
    if (!technology) return undefined;

    const updatedTechnology = {
      ...technology,
      ...updateData
    };
    this.technologies.set(id, updatedTechnology);
    return updatedTechnology;
  }

  async deleteTechnology(id: number): Promise<boolean> {
    return this.technologies.delete(id);
  }

  // Chat conversation methods
  async createChatConversation(insertConversation: InsertChatConversation): Promise<ChatConversation> {
    const id = this.currentId++;
    const conversation: ChatConversation = {
      ...insertConversation,
      id,
      timestamp: new Date()
    };
    this.chatConversations.set(id, conversation);
    return conversation;
  }

  async getChatConversationsBySession(sessionId: string): Promise<ChatConversation[]> {
    return Array.from(this.chatConversations.values())
      .filter(conversation => conversation.sessionId === sessionId)
      .sort((a, b) => (a.timestamp?.getTime() || 0) - (b.timestamp?.getTime() || 0));
  }

  async createChatLead(insertLead: InsertChatLead): Promise<ChatLead> {
    const id = this.currentId++;
    const lead: ChatLead = {
      ...insertLead,
      id,
      createdAt: new Date()
    };
    this.chatLeads.set(id, lead);
    return lead;
  }

  async getAllChatLeads(): Promise<ChatLead[]> {
    return Array.from(this.chatLeads.values())
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  // Blog system methods
  async getAllPartnershipBlogs(): Promise<PartnershipBlog[]> {
    return Array.from(this.partnershipBlogs.values())
      .filter(blog => blog.status === 'published')
      .sort((a, b) => (b.publishedAt?.getTime() || 0) - (a.publishedAt?.getTime() || 0));
  }

  async getPartnershipBlogBySlug(slug: string): Promise<PartnershipBlog | undefined> {
    return Array.from(this.partnershipBlogs.values())
      .find(blog => blog.slug === slug && blog.status === 'published');
  }

  async getFeaturedPartnershipBlogs(): Promise<PartnershipBlog[]> {
    return Array.from(this.partnershipBlogs.values())
      .filter(blog => blog.featured && blog.status === 'published')
      .sort((a, b) => (b.publishedAt?.getTime() || 0) - (a.publishedAt?.getTime() || 0));
  }

  async createPartnershipBlog(insertBlog: InsertPartnershipBlog): Promise<PartnershipBlog> {
    const id = this.currentId++;
    const blog: PartnershipBlog = {
      ...insertBlog,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.partnershipBlogs.set(id, blog);
    return blog;
  }

  async updatePartnershipBlog(id: number, updateData: Partial<InsertPartnershipBlog>): Promise<PartnershipBlog | undefined> {
    const blog = this.partnershipBlogs.get(id);
    if (!blog) return undefined;
    
    const updatedBlog = { ...blog, ...updateData, updatedAt: new Date() };
    this.partnershipBlogs.set(id, updatedBlog);
    return updatedBlog;
  }

  async deletePartnershipBlog(id: number): Promise<boolean> {
    return this.partnershipBlogs.delete(id);
  }

  // Blog categories
  async getAllBlogCategories(): Promise<BlogCategory[]> {
    return Array.from(this.blogCategories.values())
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  async createBlogCategory(insertCategory: InsertBlogCategory): Promise<BlogCategory> {
    const id = this.currentId++;
    const category: BlogCategory = {
      ...insertCategory,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.blogCategories.set(id, category);
    return category;
  }

  async updateBlogCategory(id: number, updateData: Partial<InsertBlogCategory>): Promise<BlogCategory | undefined> {
    const category = this.blogCategories.get(id);
    if (!category) return undefined;
    
    const updatedCategory = { ...category, ...updateData, updatedAt: new Date() };
    this.blogCategories.set(id, updatedCategory);
    return updatedCategory;
  }

  async deleteBlogCategory(id: number): Promise<boolean> {
    return this.blogCategories.delete(id);
  }

  // Blog tags
  async getAllBlogTags(): Promise<BlogTag[]> {
    return Array.from(this.blogTags.values())
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  async createBlogTag(insertTag: InsertBlogTag): Promise<BlogTag> {
    const id = this.currentId++;
    const tag: BlogTag = {
      ...insertTag,
      id,
      createdAt: new Date()
    };
    this.blogTags.set(id, tag);
    return tag;
  }

  async updateBlogTag(id: number, updateData: Partial<InsertBlogTag>): Promise<BlogTag | undefined> {
    const tag = this.blogTags.get(id);
    if (!tag) return undefined;
    
    const updatedTag = { ...tag, ...updateData };
    this.blogTags.set(id, updatedTag);
    return updatedTag;
  }

  async deleteBlogTag(id: number): Promise<boolean> {
    return this.blogTags.delete(id);
  }

  // Blog authors
  async getAllBlogAuthors(): Promise<BlogAuthor[]> {
    return Array.from(this.blogAuthors.values())
      .filter(author => author.isActive)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  async createBlogAuthor(insertAuthor: InsertBlogAuthor): Promise<BlogAuthor> {
    const id = this.currentId++;
    const author: BlogAuthor = {
      ...insertAuthor,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.blogAuthors.set(id, author);
    return author;
  }

  async updateBlogAuthor(id: number, updateData: Partial<InsertBlogAuthor>): Promise<BlogAuthor | undefined> {
    const author = this.blogAuthors.get(id);
    if (!author) return undefined;
    
    const updatedAuthor = { ...author, ...updateData, updatedAt: new Date() };
    this.blogAuthors.set(id, updatedAuthor);
    return updatedAuthor;
  }

  async deleteBlogAuthor(id: number): Promise<boolean> {
    return this.blogAuthors.delete(id);
  }
}

export const storage = new MemStorage();
