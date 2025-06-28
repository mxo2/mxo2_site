import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import MegaMenu from "./mega-menu";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Solutions", href: "/solutions", hasMegaMenu: true },
    { name: "Industries", href: "/industries" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const utilityLinks = [
    { name: "Call Us", href: "tel:+1234567890", icon: Phone },
    { name: "Investors", href: "#" },
    { name: "Marketplace", href: "#" },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-navy text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end space-x-6 text-sm">
            {utilityLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan transition-colors flex items-center gap-1"
              >
                {link.icon && <link.icon className="w-3 h-3" />}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <a className="text-2xl font-montserrat font-bold text-navy">
                MXO<span className="text-cyan">2</span>
              </a>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative nav-item group">
                  <Link href={item.href}>
                    <a
                      className={`font-montserrat font-semibold hover:text-cyan transition-colors uppercase tracking-wider text-sm flex items-center ${
                        location === item.href ? "text-cyan" : "text-navy"
                      }`}
                    >
                      {item.name}
                      {item.hasMegaMenu && (
                        <svg
                          className="ml-1 w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </a>
                  </Link>
                  {item.hasMegaMenu && <MegaMenu />}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button className="bg-cyan hover:bg-navy text-white font-montserrat font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-navy" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className="text-lg font-montserrat font-semibold text-navy hover:text-cyan transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    <div className="pt-4 border-t">
                      <Link href="/contact">
                        <Button 
                          className="w-full bg-cyan hover:bg-navy text-white font-montserrat font-semibold"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
