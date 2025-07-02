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
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Maximum Oxygen Inc. All rights reserved.
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
    </footer>
  );
}