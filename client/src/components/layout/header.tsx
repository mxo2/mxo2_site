import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import MegaMenu from "./mega-menu";
import logoImage from "@assets/4ukey-for-android-mac_1751100463325.png";

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "/solutions", hasMegaMenu: true },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Partnership", href: "/partnership" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end space-x-6 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">INVESTORS</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">CALL US</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">MARKETPLACE</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">LOG IN & SUPPORT</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center space-x-3">
                <img 
                  src={logoImage} 
                  alt="MXO2 Logo" 
                  className="h-24 w-auto"
                />
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasMegaMenu ? (
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-[hsl(354,87%,51%)] font-opensans font-medium transition-colors py-6 group"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <Link href={item.href}>
                    <a
                      className={`text-gray-700 hover:text-[hsl(354,87%,51%)] font-opensans font-medium transition-colors py-6 ${
                        location === item.href ? "text-[hsl(354,87%,51%)]" : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white font-opensans font-medium">
              Talk to us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[hsl(354,87%,51%)] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={`block text-gray-700 hover:text-[hsl(354,87%,51%)] font-opensans font-medium transition-colors ${
                      location === item.href ? "text-[hsl(354,87%,51%)]" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-[hsl(354,87%,51%)] text-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,51%)] hover:text-white font-opensans font-medium"
                >
                  Login
                </Button>
                <Button className="w-full bg-[hsl(354,87%,51%)] hover:bg-[hsl(354,87%,45%)] text-white font-opensans font-medium">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Mega Menu */}
      <MegaMenu 
        isOpen={isMegaMenuOpen} 
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      />
    </header>
  );
}