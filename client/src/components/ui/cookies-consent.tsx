import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, Settings, X } from "lucide-react";
import { Link } from "wouter";

export function CookiesConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const saveSettings = (settings: { analytics: boolean; marketing: boolean; functional: boolean }) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      ...settings,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto border border-gray-300 shadow-2xl">
        <CardContent className="p-6">
          {!showSettings ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">We use cookies to enhance your experience</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    This website uses cookies to improve functionality, analyze traffic, and provide personalized content. 
                    By continuing to use our site, you consent to our use of cookies.
                  </p>
                  <p className="text-xs text-gray-500">
                    Learn more in our{" "}
                    <Link href="/cookies-policy" className="text-blue-600 hover:underline">
                      Cookies Policy
                    </Link>
                    {" "}and{" "}
                    <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 lg:flex-col xl:flex-row">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowSettings(true)}
                  className="text-xs"
                >
                  <Settings className="w-3 h-3 mr-1" />
                  Manage
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={acceptNecessary}
                  className="text-xs"
                >
                  Necessary Only
                </Button>
                <Button
                  size="sm"
                  onClick={acceptAll}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
                >
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            <CookieSettings 
              onSave={saveSettings} 
              onBack={() => setShowSettings(false)}
              onClose={() => setIsVisible(false)}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

interface CookieSettingsProps {
  onSave: (settings: { analytics: boolean; marketing: boolean; functional: boolean }) => void;
  onBack: () => void;
  onClose: () => void;
}

function CookieSettings({ onSave, onBack, onClose }: CookieSettingsProps) {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [functional, setFunctional] = useState(true);

  const handleSave = () => {
    onSave({ analytics, marketing, functional });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Cookie Preferences</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900 text-sm">Necessary Cookies</h4>
            <p className="text-xs text-gray-600">Required for basic website functionality</p>
          </div>
          <div className="text-xs text-gray-500 font-medium">Always Active</div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900 text-sm">Analytics Cookies</h4>
            <p className="text-xs text-gray-600">Help us understand website usage and performance</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900 text-sm">Functional Cookies</h4>
            <p className="text-xs text-gray-600">Enable enhanced functionality and personalization</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={functional}
              onChange={(e) => setFunctional(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900 text-sm">Marketing Cookies</h4>
            <p className="text-xs text-gray-600">Used for targeted advertising and content</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 justify-end">
        <Button size="sm" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button size="sm" onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white">
          Save Preferences
        </Button>
      </div>
    </div>
  );
}