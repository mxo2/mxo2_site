import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

export interface ChatContext {
  services: string[];
  products: string[];
  industries: string[];
  companyInfo: string;
}

export interface ChatResponse {
  message: string;
  intent: 'sales' | 'support' | 'general';
  needsUserInfo?: boolean;
  suggestedServices?: string[];
}

const COMPANY_CONTEXT = `
MXO2 Technologies is a leading digital transformation company specializing in:

SERVICES:
- Cloud Optimization: AWS, Azure, Google Cloud migration and optimization
- AI & Automation: Robotic Process Automation (RPA), AI integration
- Legacy Application Modernization: Modernizing outdated systems
- Trading Automation: Automated trading platforms and strategies
- Data Analytics: Business intelligence and data insights
- SaaS Development: Custom software as a service solutions

PRODUCTS:
- Street Sync: AI-powered urban planning and traffic management platform
- Parallel Campus AI: Educational AI platform for personalized learning
- Industrial ERP: Comprehensive enterprise resource planning for manufacturing
- CRM with AI: Customer relationship management with AI-powered insights

INDUSTRIES SERVED:
- Healthcare: Digital transformation for medical institutions
- Manufacturing: Industrial automation and optimization
- Finance: Trading platforms and financial analytics
- Retail: E-commerce and customer analytics solutions
- Government: Smart city and public service solutions

COMPANY VALUES:
- Innovation-driven technology solutions
- Scalable and secure implementations
- Industry-specific expertise
- 24/7 support and maintenance
- Proven track record with Fortune 500 companies
`;

function getFallbackResponse(userMessage: string): ChatResponse {
  const message = userMessage.toLowerCase();
  
  // Sales inquiries
  if (message.includes('sales') || message.includes('price') || message.includes('cost') || message.includes('service')) {
    return {
      message: "I'd be happy to help you learn about MXO2's services! We specialize in digital transformation including Cloud Optimization, AI & Automation, Legacy Application Modernization, and more. Could you share your name and email so our sales team can provide you with detailed information and pricing?",
      intent: 'sales',
      needsUserInfo: true,
      suggestedServices: ['Cloud Optimization', 'AI Integration', 'Legacy Modernization']
    };
  }
  
  // Support inquiries
  if (message.includes('support') || message.includes('help') || message.includes('problem') || message.includes('issue')) {
    return {
      message: "I'm here to help with any technical support questions! For immediate assistance, you can contact our support team at support@mxo2.com or describe your specific issue and I'll do my best to guide you.",
      intent: 'support'
    };
  }
  
  // Product inquiries
  if (message.includes('product') || message.includes('street sync') || message.includes('parallel campus') || message.includes('erp') || message.includes('crm')) {
    return {
      message: "We offer several innovative products: Street Sync for urban planning, Parallel Campus AI for education, Industrial ERP for manufacturing, and CRM with AI integration. Which product interests you most?",
      intent: 'sales',
      suggestedServices: ['Street Sync', 'Parallel Campus AI', 'Industrial ERP', 'CRM with AI']
    };
  }
  
  // General greeting or unknown
  return {
    message: "Welcome to MXO2! I'm here to help you with information about our digital transformation services and support. Are you interested in learning about our solutions, need technical support, or have questions about our products?",
    intent: 'general'
  };
}

export async function processChatMessage(
  userMessage: string,
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>
): Promise<ChatResponse> {
  
  // If OpenAI is not available, use fallback response
  if (!openai) {
    console.log('OpenAI API not available, using fallback response');
    return getFallbackResponse(userMessage);
  }

  try {
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: `You are an AI assistant for MXO2 Technologies, a digital transformation company. Your role is to help visitors with sales inquiries and support questions.

${COMPANY_CONTEXT}

INSTRUCTIONS:
1. Determine the user's intent: 'sales', 'support', or 'general'
2. For sales inquiries:
   - Ask for name and email if not provided
   - Identify which services they're interested in
   - Provide relevant information about our solutions
   - Schedule consultations or demos
3. For support inquiries:
   - Help with technical questions about our services
   - Provide documentation and guidance
   - Escalate complex issues to our support team
4. Keep responses conversational, helpful, and professional
5. Always mention relevant services/products when appropriate
6. If user shows sales interest, mark needsUserInfo=true to capture lead information

Respond with JSON in this format:
{
  "message": "Your response message",
  "intent": "sales|support|general",
  "needsUserInfo": true/false,
  "suggestedServices": ["service1", "service2"]
}`
      },
      ...conversationHistory,
      {
        role: "user",
        content: userMessage
      }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 500
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    
    return {
      message: result.message || "I'm here to help! How can I assist you with MXO2's services today?",
      intent: result.intent || 'general',
      needsUserInfo: result.needsUserInfo || false,
      suggestedServices: result.suggestedServices || []
    };

  } catch (error) {
    console.error('AI Service Error:', error);
    return {
      message: "I'm experiencing some technical difficulties. Please contact our support team directly for immediate assistance.",
      intent: 'general',
      needsUserInfo: false
    };
  }
}

export function generateSessionId(): string {
  return `chat_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}