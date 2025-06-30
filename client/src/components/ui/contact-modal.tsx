import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MessageSquare } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactModalProps {
  children: React.ReactNode;
  triggerText?: string;
}

export function ContactModal({ children, triggerText = "Talk to Us" }: ContactModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
      
      return response.json();
    },
    onSuccess: (response: any) => {
      toast({
        title: "Message Sent Successfully!",
        description: response.crmSync 
          ? "Your message has been sent and added to our CRM system." 
          : "Your message has been sent. We'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: ""
      });
      setOpen(false);
    },
    onError: (error: any) => {
      console.error("Contact form error:", error);
      toast({
        title: "Error Sending Message",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and message.",
        variant: "destructive"
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const services = [
    "Cloud Optimization",
    "AI & Automation Solutions", 
    "Robotic Process Automation",
    "Legacy Application Modernization",
    "Cybersecurity Solutions",
    "Data Analytics & Insights",
    "Digital Transformation",
    "Custom Software Development",
    "Cloud Migration",
    "IT Consulting",
    "Other"
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1e3a8a] flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            Get in Touch
          </DialogTitle>
          <p className="text-gray-600">
            Ready to transform your business with AI-powered solutions? Let's discuss your needs.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Company Field */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company Name
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Your Company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="pl-10 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
                />
              </div>
            </div>
          </div>

          {/* Service Interest */}
          <div className="space-y-2">
            <Label htmlFor="service" className="text-sm font-medium text-gray-700">
              Service of Interest
            </Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]">
                <SelectValue placeholder="Select a service..." />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project or business needs..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="min-h-[120px] border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a] resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={contactMutation.isPending}
              className="px-8 bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
            >
              {contactMutation.isPending ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600 text-center">
            <p className="font-medium mb-2">Prefer to reach out directly?</p>
            <div className="flex justify-center space-x-6">
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                info@mxo2.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                +44 (0) 20 1234 5678
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}