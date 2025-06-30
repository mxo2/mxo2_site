# MXO2 Business Website - Replit.md

## Overview

This is a modern business website for MXO2, a technology consulting company specializing in AI-powered solutions. The project is built as a full-stack application with a React frontend and Express.js backend, designed to showcase MXO2's services across cloud solutions, AI & automation, cybersecurity, and data analytics.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom brand styling
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the stack
- **API Design**: RESTful API with structured routes
- **Development**: Hot module replacement via Vite integration

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via DATABASE_URL)
- **Migrations**: Drizzle-kit for schema management
- **Connection**: Neon Database serverless driver

## Key Components

### Frontend Components
- **Layout Components**: Header with mega-menu, footer, responsive navigation
- **Page Components**: Home, Solutions, Industries, Blog, About, Contact
- **UI Components**: Custom cards, buttons, forms built on Shadcn/ui
- **Sections**: Hero, solutions overview, industry solutions, technology partners

### Backend Components
- **Routes**: Blog management, page management, service management, contact forms
- **Storage Layer**: Abstract storage interface for CMS functionality
- **Middleware**: Request logging, JSON parsing, error handling

### Shared Schema
- **Database Tables**: Users, blog posts, pages, services, industries, technologies
- **Type Safety**: Zod validation schemas for all data structures
- **Insert Types**: Type-safe insert operations for all entities

## Data Flow

1. **Client Requests**: React components use TanStack Query to fetch data
2. **API Layer**: Express routes handle HTTP requests and validate data
3. **Storage Layer**: Abstract storage interface manages database operations
4. **Database**: PostgreSQL stores all content and user data
5. **Response**: JSON responses sent back to React components

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Fast build tool and dev server
- **typescript**: Type safety across the stack
- **drizzle-kit**: Database schema management

## Deployment Strategy

### Build Process
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: ESBuild bundles Express server to `dist/index.js`
- **Production**: Single Node.js process serves both static files and API

### Environment Configuration
- **Development**: `npm run dev` - runs with tsx and hot reload
- **Production**: `npm run build && npm start` - optimized builds
- **Database**: Requires `DATABASE_URL` environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Static file serving capability

## Changelog

Changelog:
- June 28, 2025. Initial Rackspace-inspired design setup with mega menu and basic CMS structure
- June 28, 2025. **MAJOR EXPANSION**: Adding comprehensive CMS system based on detailed user requirements:
  - Complete admin authentication system with secure login
  - Dynamic content blocks for flexible page building
  - Menu management system for navigation
  - Enhanced user roles (admin, editor, user)
  - Admin dashboard with statistics and quick actions
  - Page template system with multiple layouts
  - Complete color scheme matching Rackspace exactly
  - Open Sans typography implementation
- June 30, 2025. **MAJOR CRM INTEGRATION**: Complete Frappe CRM integration at https://crm.mxo2.com:
  - Automatic lead creation for all website interactions
  - Contact form submissions sync with detailed service interests
  - AI chatbot leads include conversation history and preferences
  - Download tracking creates qualified leads with resource attribution
  - Comprehensive error handling and graceful fallbacks
  - Lead source tracking for marketing attribution
- June 30, 2025. **CONTACT FORM INTEGRATION & FIXES**: Complete contact form modal implementation:
  - Fixed all DOM nesting warnings throughout mega menu and navigation
  - Contact form modal integrated with "Talk to Us" buttons (desktop and mobile)
  - Improved form validation with real-time feedback for message length
  - Updated Frappe CRM credentials (API Key: 11c13aab471ad84)
  - Contact form validation working correctly (10-character minimum message requirement)
  - CRM integration functional but blocked by user permissions in Frappe
- June 30, 2025. **CRM INTEGRATION FULLY OPERATIONAL**: Complete Frappe CRM integration success:
  - Environment variables updated with correct API credentials
  - All contact forms now automatically create leads in Frappe CRM
  - Lead IDs: O2-LEAD-2025-00001, O2-LEAD-2025-00002 successfully created
  - Full data synchronization including service interests and contact details
  - AI chatbot lead capture also ready for automatic CRM sync
- June 30, 2025. **PARTNERSHIP BLOG SYSTEM COMPLETE**: Full blog system implementation:
  - Complete blog database schema with posts, categories, tags, and authors
  - Partnership blog page with Rackspace-style design and search/filtering
  - API endpoints for blog management and content retrieval
  - Sample enterprise content including Azure partnerships and AI automation
  - Page title changed from "Partnership Insights" to "Blog" per user request
  - Navigation menu updated from "Partnership" to "Blogs" for clarity
- June 30, 2025. **MXO2 WORKSPACE PRODUCT PAGE**: New business communication platform:
  - Complete product page with title "Oxygen to your MX Record"
  - Adapted SmarterMail content structure for MXO2 Workspace branding
  - Enterprise email server, calendaring, chat, video conferencing features
  - Cross-platform support (Linux, Windows, Docker, Cloud)
  - Security & compliance section (SOX, HIPAA, GDPR)
  - Added to Products mega menu as flagship offering
  - Page accessible at /workspace route
- June 30, 2025. **RACKSPACE-STYLE BLOG REDESIGN**: Complete blog system overhaul:
  - Redesigned blog page to match Rackspace blog layout exactly
  - Added comprehensive AI blog post with 3,000+ words of enterprise AI content
  - Implemented social sharing buttons (LinkedIn, Twitter, Facebook, copy link)
  - Added professional sidebar with recent posts and category navigation
  - Newsletter subscription banner with MXO2 branding
  - Featured article layout with author information and publication date
  - All blog posts now display comprehensive AI-focused content
- June 30, 2025. **COMPREHENSIVE BLOG CONTENT SYSTEM**: Complete blog topics implementation:
  - Created 4 comprehensive blog posts with 3,000+ words each covering all major topics
  - AI-Powered Digital Transformation (12-min read, 3,000+ words)
  - AI-Powered Cloud Migration: 40% Cost Reduction (15-min read, 4,000+ words)
  - Robotic Process Automation in Manufacturing (18-min read, 4,500+ words)
  - Multi-Cloud Strategy with AI Orchestration (16-min read, 4,200+ words)
  - Updated home page insights section to link directly to blog posts
  - All content follows Rackspace professional design and layout standards
  - Individual blog post pages accessible via /blog/[slug] format
  - Cross-linked recent posts in sidebar for improved navigation

## Current Implementation Status

**Completed:**
- Rackspace-inspired design with exact color matching
- Enhanced header with transparent PNG logo and AI text animation
- Tabbed mega menu with Cloud, AI & IoT, and Applications sections
- Compact mission/vision/values section inspired by wiplon.com
- Individual service pages following cloud migration template:
  - Cloud Optimization (green theme)
  - Robotic Process Automation (purple theme)  
  - Legacy Application Modernization (orange theme)
- Service page structure: banner, description, services provided, approach, contact form
- Professional routing for all service pages

**Completed:**
- AI-enabled chatbot "O2 Assist" with full OpenAI integration for sales and support
- Database integration for chat conversation storage and lead capture
- Intelligent fallback system for when OpenAI API is unavailable  
- Automatic popup after 30 seconds with sales inquiry detection
- Lead capture forms with service interest tracking
- **MAJOR INTEGRATION**: Complete Frappe CRM integration with automatic lead creation:
  - All contact forms send leads to CRM automatically
  - Chatbot leads sync with conversation history and service interests
  - Download tracking creates qualified leads in CRM
  - Multiple lead sources (Website Contact Form, Website Chatbot, Website Download)
  - Graceful fallback when CRM is temporarily unavailable
  - Comprehensive logging and error handling

**Next Steps:**
- Complete remaining service pages from mega menu
- Create technology showcase pages
- Expand AI chatbot with more service-specific responses
- Add download tracking for whitepapers and case studies

## User Preferences

Preferred communication style: Simple, everyday language.
**NEW REQUIREMENT**: Complete enterprise-grade CMS system with:
- Secure admin panel matching Rackspace aesthetics
- Dynamic page building capabilities
- SEO optimization tools
- Resource management (blogs, guides, whitepapers)
- User management with roles/permissions
- All content editable without coding