import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, MessageCircle, Send, Bot, User, Minimize2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  intent?: string;
  suggestedServices?: string[];
}

interface ChatResponse {
  response: string;
  sessionId: string;
  intent: string;
  needsUserInfo?: boolean;
  suggestedServices?: string[];
}

interface LeadForm {
  name: string;
  email: string;
  servicesInterested: string[];
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadForm, setLeadForm] = useState<LeadForm>({
    name: "",
    email: "",
    servicesInterested: []
  });
  const [hasShownInitial, setHasShownInitial] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open chatbot after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownInitial) {
        setIsOpen(true);
        setHasShownInitial(true);
        // Add welcome message
        setMessages([{
          id: `welcome-${Date.now()}`,
          type: 'bot',
          content: "Hi! I'm here to help you learn about MXO2's digital transformation solutions. Are you interested in our services or do you need support with an existing project?",
          timestamp: new Date()
        }]);
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [hasShownInitial]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest("/api/chat/message", {
        method: "POST",
        body: JSON.stringify({ message, sessionId })
      });
      return response as ChatResponse;
    },
    onSuccess: (data) => {
      setSessionId(data.sessionId);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: data.response,
        timestamp: new Date(),
        intent: data.intent,
        suggestedServices: data.suggestedServices
      };
      setMessages(prev => [...prev, botMessage]);

      // Show lead form if AI suggests collecting user info for sales
      if (data.needsUserInfo && data.intent === 'sales') {
        setShowLeadForm(true);
        if (data.suggestedServices) {
          setLeadForm(prev => ({
            ...prev,
            servicesInterested: data.suggestedServices || []
          }));
        }
      }
    }
  });

  const leadMutation = useMutation({
    mutationFn: async (leadData: LeadForm) => {
      const response = await apiRequest("/api/chat/lead", {
        method: "POST",
        body: JSON.stringify({
          ...leadData,
          conversationId: sessionId,
          source: "chatbot"
        })
      });
      return response;
    },
    onSuccess: () => {
      setShowLeadForm(false);
      const thankYouMessage: Message = {
        id: `thanks-${Date.now()}`,
        type: 'bot',
        content: "Thank you for your interest! Our team will contact you within 24 hours to discuss your requirements. Is there anything else I can help you with today?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, thankYouMessage]);
    }
  });

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    chatMutation.mutate(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadForm.name && leadForm.email) {
      leadMutation.mutate(leadForm);
    }
  };

  const toggleServiceInterest = (service: string) => {
    setLeadForm(prev => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter(s => s !== service)
        : [...prev.servicesInterested, service]
    }));
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
          {messages.length > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 p-0 flex items-center justify-center text-xs">
              {messages.filter(m => m.type === 'bot').length}
            </Badge>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-96 h-[500px] shadow-xl border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <CardTitle className="text-lg">MXO2 Assistant</CardTitle>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(true)}
                className="text-white hover:bg-blue-800 p-1"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-800 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <p className="text-blue-100 text-sm">
            Sales & Support • Online now
          </p>
        </CardHeader>

        <CardContent className="p-0 h-[400px] flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  {message.suggestedServices && message.suggestedServices.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {message.suggestedServices.map((service) => (
                        <Badge
                          key={service}
                          variant="secondary"
                          className="text-xs"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                {message.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            {chatMutation.isPending && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Lead Form */}
          {showLeadForm && (
            <div className="border-t p-4 bg-blue-50">
              <h4 className="font-semibold text-sm mb-3">Let's connect!</h4>
              <form onSubmit={handleLeadSubmit} className="space-y-2">
                <Input
                  placeholder="Your name"
                  value={leadForm.name}
                  onChange={(e) => setLeadForm(prev => ({ ...prev, name: e.target.value }))}
                  className="text-sm"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={leadForm.email}
                  onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                  className="text-sm"
                  required
                />
                {leadForm.servicesInterested.length > 0 && (
                  <div className="text-xs text-gray-600">
                    Interested services: {leadForm.servicesInterested.join(", ")}
                  </div>
                )}
                <div className="flex gap-2">
                  <Button type="submit" size="sm" disabled={leadMutation.isPending}>
                    Submit
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowLeadForm(false)}
                  >
                    Later
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={chatMutation.isPending}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || chatMutation.isPending}
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}