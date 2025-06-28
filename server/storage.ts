import { 
  users, 
  blogPosts, 
  pages, 
  services, 
  industries, 
  technologies,
  type User, 
  type BlogPost, 
  type Page, 
  type Service, 
  type Industry, 
  type Technology,
  type InsertUser, 
  type InsertBlogPost, 
  type InsertPage, 
  type InsertService, 
  type InsertIndustry, 
  type InsertTechnology 
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
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private pages: Map<number, Page>;
  private services: Map<number, Service>;
  private industries: Map<number, Industry>;
  private technologies: Map<number, Technology>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.pages = new Map();
    this.services = new Map();
    this.industries = new Map();
    this.technologies = new Map();
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

    this.currentId = 10; // Start IDs from 10 to avoid conflicts
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
      id
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
}

export const storage = new MemStorage();
