import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { 
  insertBlogPostSchema, 
  insertPageSchema, 
  insertServiceSchema, 
  insertIndustrySchema, 
  insertTechnologySchema,
  insertChatConversationSchema,
  insertChatLeadSchema
} from "@shared/schema";
import { processChatMessage, generateSessionId } from "./ai-service";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog routes
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/featured", async (req, res) => {
    try {
      const posts = await storage.getFeaturedBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch featured blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid blog post data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create blog post" });
    }
  });

  // Services routes
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  app.get("/api/services/category/:category", async (req, res) => {
    try {
      const services = await storage.getServicesByCategory(req.params.category);
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch services by category" });
    }
  });

  app.post("/api/services", async (req, res) => {
    try {
      const validatedData = insertServiceSchema.parse(req.body);
      const service = await storage.createService(validatedData);
      res.status(201).json(service);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid service data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create service" });
    }
  });

  // Industries routes
  app.get("/api/industries", async (req, res) => {
    try {
      const industries = await storage.getAllIndustries();
      res.json(industries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch industries" });
    }
  });

  app.post("/api/industries", async (req, res) => {
    try {
      const validatedData = insertIndustrySchema.parse(req.body);
      const industry = await storage.createIndustry(validatedData);
      res.status(201).json(industry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid industry data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create industry" });
    }
  });

  // Technologies routes
  app.get("/api/technologies", async (req, res) => {
    try {
      const technologies = await storage.getAllTechnologies();
      res.json(technologies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch technologies" });
    }
  });

  app.get("/api/technologies/featured", async (req, res) => {
    try {
      const technologies = await storage.getFeaturedTechnologies();
      res.json(technologies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch featured technologies" });
    }
  });

  app.post("/api/technologies", async (req, res) => {
    try {
      const validatedData = insertTechnologySchema.parse(req.body);
      const technology = await storage.createTechnology(validatedData);
      res.status(201).json(technology);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid technology data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create technology" });
    }
  });

  // Pages routes
  app.get("/api/pages", async (req, res) => {
    try {
      const pages = await storage.getAllPages();
      res.json(pages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch pages" });
    }
  });

  app.get("/api/pages/:slug", async (req, res) => {
    try {
      const page = await storage.getPageBySlug(req.params.slug);
      if (!page) {
        return res.status(404).json({ error: "Page not found" });
      }
      res.json(page);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch page" });
    }
  });

  app.post("/api/pages", async (req, res) => {
    try {
      const validatedData = insertPageSchema.parse(req.body);
      const page = await storage.createPage(validatedData);
      res.status(201).json(page);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid page data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create page" });
    }
  });

  // Contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with CRM
      
      // For now, we'll just log and respond
      console.log("Contact form submission:", validatedData);
      
      res.status(200).json({ 
        message: "Contact form submitted successfully",
        data: validatedData 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid contact form data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  // Chat API routes
  app.post("/api/chat/message", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Get conversation history
      const conversations = sessionId 
        ? await storage.getChatConversationsBySession(sessionId)
        : [];

      const conversationHistory = conversations.map(conv => [
        { role: 'user' as const, content: conv.userMessage },
        { role: 'assistant' as const, content: conv.botResponse }
      ]).flat();

      // Process message with AI
      const aiResponse = await processChatMessage(message, conversationHistory);

      // Generate session ID if not provided
      const finalSessionId = sessionId || generateSessionId();

      // Save conversation
      const conversation = await storage.createChatConversation({
        sessionId: finalSessionId,
        userMessage: message,
        botResponse: aiResponse.message,
        intent: aiResponse.intent
      });

      res.json({
        response: aiResponse.message,
        sessionId: finalSessionId,
        intent: aiResponse.intent,
        needsUserInfo: aiResponse.needsUserInfo,
        suggestedServices: aiResponse.suggestedServices
      });

    } catch (error) {
      console.error('Chat API Error:', error);
      res.status(500).json({ 
        error: "Sorry, I'm experiencing technical difficulties. Please try again later." 
      });
    }
  });

  app.post("/api/chat/lead", async (req, res) => {
    try {
      const validatedData = insertChatLeadSchema.parse(req.body);
      const lead = await storage.createChatLead(validatedData);
      res.status(201).json(lead);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid lead data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create lead" });
    }
  });

  app.get("/api/chat/leads", async (req, res) => {
    try {
      const leads = await storage.getAllChatLeads();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
