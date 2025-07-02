import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  role: text("role").notNull().default("user"), // admin, editor, user
  firstName: text("first_name"),
  lastName: text("last_name"),
  lastLogin: timestamp("last_login"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// CMS Content Blocks for flexible page building
export const contentBlocks = pgTable("content_blocks", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // hero, features, testimonials, cta, text, image
  title: text("title"),
  content: text("content"),
  imageUrl: text("image_url"),
  buttonText: text("button_text"),
  buttonUrl: text("button_url"),
  order: integer("order").notNull().default(0),
  pageId: integer("page_id").references(() => pages.id),
  published: boolean("published").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Menu system for dynamic navigation
export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  url: text("url").notNull(),
  parentId: integer("parent_id").references(() => menuItems.id),
  order: integer("order").notNull().default(0),
  icon: text("icon"),
  description: text("description"),
  featured: boolean("featured").notNull().default(false),
  megaMenu: boolean("mega_menu").notNull().default(false),
  published: boolean("published").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  featuredImage: text("featured_image"),
  authorId: integer("author_id").references(() => users.id),
  published: boolean("published").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  metaDescription: text("meta_description"),
  published: boolean("published").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  category: text("category").notNull(), // cloud, applications, ai-iot
  featured: boolean("featured").notNull().default(false),
  order: integer("order").notNull().default(0),
});

export const industries = pgTable("industries", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  featuredImage: text("featured_image"),
  content: text("content").notNull(),
  order: integer("order").notNull().default(0),
});

export const technologies = pgTable("technologies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  logo: text("logo"),
  category: text("category").notNull(),
  featured: boolean("featured").notNull().default(false),
  order: integer("order").notNull().default(0),
});

export const chatConversations = pgTable("chat_conversations", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  userMessage: text("user_message").notNull(),
  botResponse: text("bot_response").notNull(),
  intent: text("intent"), // sales, support, general
  timestamp: timestamp("timestamp").defaultNow(),
  userEmail: text("user_email"),
  userName: text("user_name"),
  servicesInterested: text("services_interested").array(),
});

export const chatLeads = pgTable("chat_leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  servicesInterested: text("services_interested").array(),
  conversationId: text("conversation_id"),
  source: text("source").default("chatbot"),
  status: text("status").default("new"), // new, contacted, qualified, closed
  createdAt: timestamp("created_at").defaultNow(),
  notes: text("notes"),
});

// Blog system tables for Partnership section
export const blogCategories = pgTable("blog_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  color: text("color").default("#3B82F6"), // Default blue color
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const blogTags = pgTable("blog_tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow()
});

export const blogAuthors = pgTable("blog_authors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  bio: text("bio"),
  title: text("title"), // Job title
  avatar: text("avatar"),
  socialLinkedIn: text("social_linkedin"),
  socialTwitter: text("social_twitter"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const partnershipBlogs = pgTable("partnership_blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  featuredImage: text("featured_image"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"),
  authorId: integer("author_id").references(() => blogAuthors.id),
  categoryId: integer("category_id").references(() => blogCategories.id),
  status: text("status").default("draft"), // draft, published, archived
  featured: boolean("featured").default(false),
  readTime: integer("read_time"), // Estimated read time in minutes
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const blogPostTags = pgTable("blog_post_tags", {
  id: serial("id").primaryKey(),
  blogId: integer("blog_id").references(() => partnershipBlogs.id, { onDelete: "cascade" }),
  tagId: integer("tag_id").references(() => blogTags.id, { onDelete: "cascade" })
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertPageSchema = createInsertSchema(pages).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertServiceSchema = createInsertSchema(services).omit({
  id: true,
});

export const insertIndustrySchema = createInsertSchema(industries).omit({
  id: true,
});

export const insertTechnologySchema = createInsertSchema(technologies).omit({
  id: true,
});

export const insertContentBlockSchema = createInsertSchema(contentBlocks).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true,
  createdAt: true,
});

export const insertChatConversationSchema = createInsertSchema(chatConversations).omit({
  id: true,
  timestamp: true,
});

export const insertChatLeadSchema = createInsertSchema(chatLeads).omit({
  id: true,
  createdAt: true,
});

// Blog system insert schemas
export const insertBlogCategorySchema = createInsertSchema(blogCategories).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertBlogTagSchema = createInsertSchema(blogTags).omit({
  id: true,
  createdAt: true,
});

export const insertBlogAuthorSchema = createInsertSchema(blogAuthors).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertPartnershipBlogSchema = createInsertSchema(partnershipBlogs).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertBlogPostTagSchema = createInsertSchema(blogPostTags).omit({
  id: true,
});

export type User = typeof users.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type Page = typeof pages.$inferSelect;
export type Service = typeof services.$inferSelect;
export type Industry = typeof industries.$inferSelect;
export type Technology = typeof technologies.$inferSelect;
export type ContentBlock = typeof contentBlocks.$inferSelect;
export type MenuItem = typeof menuItems.$inferSelect;
export type ChatConversation = typeof chatConversations.$inferSelect;
export type ChatLead = typeof chatLeads.$inferSelect;

// Blog system types
export type BlogCategory = typeof blogCategories.$inferSelect;
export type BlogTag = typeof blogTags.$inferSelect;
export type BlogAuthor = typeof blogAuthors.$inferSelect;
export type PartnershipBlog = typeof partnershipBlogs.$inferSelect;
export type BlogPostTag = typeof blogPostTags.$inferSelect;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type InsertPage = z.infer<typeof insertPageSchema>;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type InsertIndustry = z.infer<typeof insertIndustrySchema>;
export type InsertTechnology = z.infer<typeof insertTechnologySchema>;
export type InsertContentBlock = z.infer<typeof insertContentBlockSchema>;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type InsertChatConversation = z.infer<typeof insertChatConversationSchema>;
export type InsertChatLead = z.infer<typeof insertChatLeadSchema>;

// Blog system insert types
export type InsertBlogCategory = z.infer<typeof insertBlogCategorySchema>;
export type InsertBlogTag = z.infer<typeof insertBlogTagSchema>;
export type InsertBlogAuthor = z.infer<typeof insertBlogAuthorSchema>;
export type InsertPartnershipBlog = z.infer<typeof insertPartnershipBlogSchema>;
export type InsertBlogPostTag = z.infer<typeof insertBlogPostTagSchema>;
