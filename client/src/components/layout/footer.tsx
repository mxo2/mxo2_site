import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Consulting & Advisory Services */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              CONSULTING & ADVISORY
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/services/startup-strategy" className="hover:text-white transition-colors">Startup Strategy</Link></li>
              <li><Link href="/services/digital-forensics" className="hover:text-white transition-colors">Digital Forensics & Incident Response</Link></li>
              <li><Link href="/services/rpa-roadmap" className="hover:text-white transition-colors">RPA & Automation Roadmap</Link></li>
            </ul>
          </div>
          
          {/* Cloud Services */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              CLOUD SERVICES
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/services/cloud-readiness" className="hover:text-white transition-colors">Cloud Readiness Assessment</Link></li>
              <li><Link href="/services/cloud-migration" className="hover:text-white transition-colors">Cloud Migration & Adoption</Link></li>
              <li><Link href="/services/cloud-optimization" className="hover:text-white transition-colors">Cloud Optimization & FinOps</Link></li>
            </ul>
          </div>
          
          {/* Application Services */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              APPLICATION SERVICES
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/services/saas-development" className="hover:text-white transition-colors">Custom SaaS Development</Link></li>
              <li><Link href="/services/api-integration" className="hover:text-white transition-colors">API Integration & Webhooks</Link></li>
              <li><Link href="/services/app-modernization" className="hover:text-white transition-colors">Legacy App Modernization</Link></li>
            </ul>
          </div>
          
          {/* Innovation & Emerging Tech */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              INNOVATION & EMERGING TECH
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/services/ai-ml-solutions" className="hover:text-white transition-colors">AI & ML Solution Design</Link></li>
              <li><Link href="/services/iot-architecture" className="hover:text-white transition-colors">IoT System Architecture</Link></li>
              <li><Link href="/services/blockchain-consulting" className="hover:text-white transition-colors">Blockchain & DLT Consulting</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Legal Links Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookies-policy" className="hover:text-white transition-colors">
                Cookies Policy
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright and Compliance */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div>
              © 2025 MXO2 Technologies Private Limited. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>SOC 2 Type II</span>
            </div>
          </div>
          
          {/* Terms Acceptance Notice */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500 text-center md:text-left">
            <p>
              By using this website, you agree to our 
              <Link href="/terms-conditions" className="text-blue-400 hover:text-blue-300 ml-1 mr-1">Terms & Conditions</Link>
              and acknowledge our 
              <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 ml-1 mr-1">Privacy Policy</Link>
              and 
              <Link href="/cookies-policy" className="text-blue-400 hover:text-blue-300 ml-1">Cookies Policy</Link>.
              We use cookies to enhance your experience and analyze site usage.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}