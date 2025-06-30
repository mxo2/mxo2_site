interface FrappeLead {
  lead_name: string;
  email_id: string;
  company_name?: string;
  mobile_no?: string;
  source?: string;
  status: string;
  custom_service_interest?: string;
  custom_message?: string;
  lead_owner?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

interface ChatLeadData {
  name: string;
  email: string;
  servicesInterested?: string[] | null | undefined;
  conversationId?: string | null | undefined;
  notes?: string | null | undefined;
}

export class FrappeCRMService {
  private baseUrl: string;
  private apiKey?: string;
  private apiSecret?: string;

  constructor() {
    this.baseUrl = 'https://crm.mxo2.com';
    this.apiKey = process.env.FRAPPE_API_KEY;
    this.apiSecret = process.env.FRAPPE_API_SECRET;
  }

  private getAuthHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (this.apiKey && this.apiSecret) {
      // Use API Key authentication
      headers['Authorization'] = `token ${this.apiKey}:${this.apiSecret}`;
    }

    return headers;
  }

  private mapContactFormToLead(formData: ContactFormData): FrappeLead {
    return {
      lead_name: formData.name,
      email_id: formData.email,
      company_name: formData.company || '',
      mobile_no: formData.phone || '',
      status: 'Lead', // Default status for new leads
      custom_service_interest: formData.service || '',
      custom_message: formData.message || '',
      lead_owner: 'Administrator' // Default lead owner, can be configured
    };
  }

  private mapChatLeadToLead(chatData: ChatLeadData): FrappeLead {
    const servicesText = chatData.servicesInterested?.join(', ') || '';
    const notes = `Chat Lead from O2 Assist Chatbot
Conversation ID: ${chatData.conversationId || 'N/A'}
Services Interested: ${servicesText}
Additional Notes: ${chatData.notes || 'None'}`;

    return {
      lead_name: chatData.name,
      email_id: chatData.email,
      company_name: '',
      mobile_no: '',
      status: 'Lead',
      custom_service_interest: servicesText,
      custom_message: notes,
      lead_owner: 'Administrator'
    };
  }

  async createLead(formData: ContactFormData): Promise<{ success: boolean; leadId?: string; error?: string }> {
    try {
      const leadData = this.mapContactFormToLead(formData);
      
      console.log('Sending lead to Frappe CRM:', leadData);

      const response = await fetch(`${this.baseUrl}/api/resource/Lead`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(leadData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Frappe CRM API Error:', response.status, errorText);
        
        // If authentication fails, provide helpful error message
        if (response.status === 401 || response.status === 403) {
          return {
            success: false,
            error: 'CRM authentication failed. Please check API credentials.'
          };
        }
        
        return {
          success: false,
          error: `CRM API error: ${response.status} ${response.statusText}`
        };
      }

      const result = await response.json();
      console.log('Lead created successfully in Frappe CRM:', result);

      return {
        success: true,
        leadId: result.data?.name || result.name
      };

    } catch (error) {
      console.error('Error creating lead in Frappe CRM:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  async createChatLead(chatData: ChatLeadData): Promise<{ success: boolean; leadId?: string; error?: string }> {
    try {
      const leadData = this.mapChatLeadToLead(chatData);
      
      console.log('Sending chat lead to Frappe CRM:', leadData);

      const response = await fetch(`${this.baseUrl}/api/resource/Lead`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(leadData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Frappe CRM API Error (Chat Lead):', response.status, errorText);
        
        if (response.status === 401 || response.status === 403) {
          return {
            success: false,
            error: 'CRM authentication failed. Please check API credentials.'
          };
        }
        
        return {
          success: false,
          error: `CRM API error: ${response.status} ${response.statusText}`
        };
      }

      const result = await response.json();
      console.log('Chat lead created successfully in Frappe CRM:', result);

      return {
        success: true,
        leadId: result.data?.name || result.name
      };

    } catch (error) {
      console.error('Error creating chat lead in Frappe CRM:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/method/ping`, {
        method: 'GET',
        headers: this.getAuthHeaders()
      });

      if (!response.ok) {
        return {
          success: false,
          error: `Connection failed: ${response.status} ${response.statusText}`
        };
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Connection failed'
      };
    }
  }
}

export const frappeCRM = new FrappeCRMService();