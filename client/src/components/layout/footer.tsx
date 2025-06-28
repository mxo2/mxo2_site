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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/">
                <a className="text-3xl font-montserrat font-bold">
                  MXO<span className="text-cyan">2</span>
                </a>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge AI tools, cloud solutions, and intelligent automation for digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-cyan hover:bg-white hover:text-cyan w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 uppercase">Solutions</h3>
            <ul className="space-y-3">
              {footerSections.solutions.map((item) => (
                <li key={item}>
                  <Link href="/solutions">
                    <a className="text-gray-400 hover:text-cyan transition-colors">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 uppercase">Industries</h3>
            <ul className="space-y-3">
              {footerSections.industries.map((item) => (
                <li key={item}>
                  <Link href="/industries">
                    <a className="text-gray-400 hover:text-cyan transition-colors">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 uppercase">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((item) => (
                <li key={item}>
                  <Link href={item === "About Us" ? "/about" : item === "Blog" ? "/blog" : item === "Contact Us" ? "/contact" : "#"}>
                    <a className="text-gray-400 hover:text-cyan transition-colors">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 MXO2. All rights reserved. | Maximum Oxygen Inc.
            </p>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
