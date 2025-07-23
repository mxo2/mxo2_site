import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
}

export default function SEO({
  title = "mxO₂ - AI Powered Digital Transformation Solutions",
  description = "Transform your business with mxO₂'s AI-powered solutions. Expert cloud migration, robotic process automation, cybersecurity, and enterprise workspace solutions for global enterprises.",
  keywords = "AI transformation, cloud migration, robotic process automation, cybersecurity, enterprise workspace, digital transformation, AI solutions, mxO2, maximum oxygen",
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = "/og-image.png"
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'mxO₂ - Maximum Oxygen Inc.');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph tags
    updateMetaTag('og:title', ogTitle || title, 'property');
    updateMetaTag('og:description', ogDescription || description, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', ogUrl || window.location.href, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:site_name', 'mxO₂', 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', '@IncMomentu20798');
    
    // Additional SEO tags
    updateMetaTag('theme-color', '#0891b2'); // Cyan-500
    updateMetaTag('msapplication-TileColor', '#0891b2');
    
    // Structured data for organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "mxO₂ - Maximum Oxygen Inc.",
      "url": "https://mxo2.com",
      "logo": "https://mxo2.com/logo.png",
      "description": description,
      "foundingDate": "2020",
      "sameAs": [
        "https://www.linkedin.com/company/maximum-oxygen-inc",
        "https://twitter.com/IncMomentu20798",
        "https://www.facebook.com/profile.php?id=61566026462109"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9829649640",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "T1 Jagdamba Tower, Amarapali Circle, Vaishali Nagar",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302021",
        "addressCountry": "IN"
      }
    };
    
    // Update structured data
    let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl, ogImage]);

  return null;
}