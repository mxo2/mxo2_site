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

## Current Implementation Status

**Completed:**
- Rackspace-inspired design with exact color matching
- 4-column mega menu structure
- Enhanced hero section with gradient design
- Footer with Rackspace navy styling
- Basic CMS database schema with content blocks
- Admin authentication pages
- User role management system

**In Progress:**
- Complete admin panel dashboard
- Content management interface
- Menu management system
- Page builder with drag-and-drop functionality

**Next Steps:**
- Authentication API endpoints
- Content block management
- SEO meta management
- Resource hub with searchable content

## User Preferences

Preferred communication style: Simple, everyday language.
**NEW REQUIREMENT**: Complete enterprise-grade CMS system with:
- Secure admin panel matching Rackspace aesthetics
- Dynamic page building capabilities
- SEO optimization tools
- Resource management (blogs, guides, whitepapers)
- User management with roles/permissions
- All content editable without coding