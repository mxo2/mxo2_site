import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import MegaMenu from "./mega-menu";
import { ContactModal } from "@/components/ui/contact-modal";
import logoImage from "@assets/logo_1751173873529.png";

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navigation = [
    { name: "Solutions", href: "/solutions", hasMegaMenu: true },
    { name: "Products", href: "/products", hasMegaMenu: true },
    { name: "Industries", href: "/industries" },
    { name: "Blogs", href: "/blog", hasMegaMenu: true },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end space-x-6 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              INVESTORS
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              CALL US
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              MARKETPLACE
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              LOG IN & SUPPORT
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-28">
            {/* Logo with AI */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src={logoImage}
                  alt="mxO2 Logo"
                  className="h-20 w-auto"
                />
                <div className="w-px h-10 bg-gray-300"></div>
                <span className="text-xl font-bold animate-bounce bg-gradient-to-r from-red-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-12">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasMegaMenu ? (
                      <button
                        className="flex items-center space-x-1 text-gray-700 hover:text-[hsl(354,87%,51%)] font-opensans font-bold text-base uppercase tracking-wide transition-colors py-6 group"
                        onMouseEnter={() => {
                          setIsMegaMenuOpen(true);
                          setActiveMenu(item.name);
                        }}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-5 h-5 group-hover:rotate-180 transition-transform" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-gray-700 hover:text-[hsl(354,87%,51%)] font-opensans font-bold text-base uppercase tracking-wide transition-colors py-6 ${
                          location === item.href
                            ? "text-[hsl(354,87%,51%)]"
                            : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <ContactModal>
                <Button className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white font-opensans font-bold text-base px-8 py-3">
                  Talk to us
                </Button>
              </ContactModal>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[hsl(354,87%,51%)] transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className={`block text-gray-700 hover:text-[hsl(354,87%,51%)] font-opensans font-medium transition-colors ${
                      location === item.href ? "text-[hsl(354,87%,51%)]" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <ContactModal>
                    <Button className="w-full bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white font-opensans font-medium">
                      Talk to us
                    </Button>
                  </ContactModal>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mega Menu */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        activeMenu={activeMenu}
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => {
          setIsMegaMenuOpen(false);
          setActiveMenu(null);
        }}
      />
    </header>
  );
}
