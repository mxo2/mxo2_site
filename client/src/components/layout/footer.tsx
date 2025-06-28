import { Link } from "wouter";
import { Linkedin, Twitter, Facebook, Github } from "lucide-react";

export default function Footer() {
  const footerSections = {
    solutions: [
      "Cloud Services",
      "AI & Automation", 
      "Cybersecurity",
      "Data Analytics",
      "Custom Development",
      "System Integration"
    ],
    industries: [
      "Manufacturing",
      "Education",
      "Government & Export",
      "Retail & eCommerce",
      "Trading & Finance",
      "Fintech"
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "Blog",
      "Contact Us",
      "Privacy Policy"
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-[hsl(215,28%,17%)] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/">
                <a className="text-3xl font-opensans font-bold">
                  MXO<span className="text-[hsl(354,87%,51%)]">2</span>
                </a>
              </Link>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed font-opensans">
              Empowering businesses with cutting-edge AI tools, cloud solutions, and intelligent automation for digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-[hsl(354,87%,51%)] hover:bg-white hover:text-[hsl(354,87%,51%)] w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-opensans font-semibold text-lg mb-6 text-white">Solutions</h3>
            <ul className="space-y-3">
              {footerSections.solutions.map((item) => (
                <li key={item}>
                  <Link href="/solutions">
                    <a className="text-gray-300 hover:text-[hsl(354,87%,51%)] transition-colors font-opensans">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-opensans font-semibold text-lg mb-6 text-white">Industries</h3>
            <ul className="space-y-3">
              {footerSections.industries.map((item) => (
                <li key={item}>
                  <Link href="/industries">
                    <a className="text-gray-300 hover:text-[hsl(354,87%,51%)] transition-colors font-opensans">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-opensans font-semibold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((item) => (
                <li key={item}>
                  <Link href={item === "About Us" ? "/about" : item === "Blog" ? "/blog" : item === "Contact Us" ? "/contact" : "#"}>
                    <a className="text-gray-300 hover:text-[hsl(354,87%,51%)] transition-colors font-opensans">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm font-opensans">
              © 2025 MXO2. All rights reserved. | Maximum Oxygen Inc.
            </p>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-[hsl(354,87%,51%)] transition-colors font-opensans">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(354,87%,51%)] transition-colors font-opensans">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(354,87%,51%)] transition-colors font-opensans">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
