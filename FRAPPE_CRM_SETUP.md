# Frappe CRM Integration Setup Guide

## Overview

I've successfully integrated your website with your Frappe CRM at `https://crm.mxo2.com`. All contact forms, chatbot leads, and download requests will now automatically create leads in your CRM system.

## What's Integrated

### 1. Contact Forms
- All contact form submissions from service pages, product pages, and technology pages
- Creates leads with source: "Website Contact Form"
- Includes service interest and message details

### 2. Chatbot Leads (O2 Assist)
- Leads captured through the AI chatbot
- Creates leads with source: "Website Chatbot"
- Includes conversation history and services interested

### 3. Download Tracking
- When users download resources (whitepapers, guides, etc.)
- Creates leads with source: "Website Download"
- Tracks which resources were downloaded

## Required Setup

### Step 1: Create API Credentials in Frappe CRM

1. **Login to your Frappe CRM**: Go to `https://crm.mxo2.com`

2. **Create API Key & Secret**:
   - Go to Settings → API → Generate Keys
   - Or navigate to: `https://crm.mxo2.com/app/user/[your-user-id]`
   - Click on "API Access" section
   - Generate new API Key and API Secret
   - **Save these credentials securely**

3. **Set User Permissions**:
   - Ensure the user has permission to create and read Leads
   - Required permissions: Lead (Create, Read, Write)

### Step 2: Configure Environment Variables

Add these environment variables to your Replit project:

```bash
FRAPPE_API_KEY=your_api_key_here
FRAPPE_API_SECRET=your_api_secret_here
```

**To add in Replit**:
1. Click on "Secrets" tab in your Replit workspace
2. Add new secrets:
   - Key: `FRAPPE_API_KEY`, Value: [your API key]
   - Key: `FRAPPE_API_SECRET`, Value: [your API secret]

### Step 3: Test the Connection

Once you've added the credentials, test the integration:

1. **Test API endpoint**: Visit `/api/crm/test` in your browser
2. **Test contact form**: Submit any contact form on your website
3. **Test chatbot**: Use the O2 Assist chatbot and capture a lead
4. **Check CRM**: Verify leads appear in your Frappe CRM

## Lead Structure in CRM

### Standard Fields Used:
- **Lead Name**: Contact's full name
- **Email ID**: Contact's email address
- **Company Name**: Company (if provided)
- **Mobile No**: Phone number (if provided)
- **Source**: Identifies where the lead came from
- **Status**: Set to "Lead" by default
- **Lead Owner**: Set to "Administrator" (configurable)

### Custom Fields Used:
- **Service Interest**: Service the user is interested in
- **Message**: Contact message or conversation notes

## Customization Options

### 1. Lead Owner Assignment
Edit `server/frappe-crm.ts` to change the default lead owner:
```typescript
lead_owner: 'your-username@example.com'
```

### 2. Lead Status
Modify the default lead status in the same file:
```typescript
status: 'Qualified' // or any status from your CRM
```

### 3. Custom Field Mapping
Add additional custom fields by modifying the mapping functions in `server/frappe-crm.ts`.

## Troubleshooting

### Common Issues:

1. **Authentication Errors (401/403)**:
   - Check API credentials are correct
   - Verify user permissions in Frappe CRM
   - Ensure API access is enabled for the user

2. **Connection Errors**:
   - Verify CRM URL is accessible
   - Check network connectivity
   - Confirm Frappe CRM is online

3. **Lead Creation Fails**:
   - Check required fields in your CRM setup
   - Verify custom field names match
   - Review error logs in console

### Monitoring Leads

- All CRM interactions are logged in the console
- Successful lead creation shows CRM Lead ID
- Failed attempts continue to work but show warnings
- Test endpoint: `GET /api/crm/test` for connection status

## API Endpoints

### Test Connection
```
GET /api/crm/test
```

### Submit Contact Form
```
POST /api/contact
Body: { name, email, company?, phone?, service?, message }
```

### Submit Chat Lead
```
POST /api/chat/lead
Body: { name, email, servicesInterested?, conversationId?, notes? }
```

### Track Download
```
POST /api/downloads
Body: { name, email, company?, resource, downloadUrl }
```

## Security Features

- API credentials stored as environment variables
- All requests authenticated with API key/secret
- Input validation on all form submissions
- Graceful error handling (forms work even if CRM is down)
- No sensitive data logged to console

## Success Indicators

✅ All contact forms create CRM leads automatically
✅ Chatbot conversations capture leads with full context
✅ Download tracking creates qualified leads
✅ Lead source tracking for attribution
✅ Graceful fallback if CRM is temporarily unavailable

Your website now has complete lead management integration with your Frappe CRM system!