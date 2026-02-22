import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Job Jockey</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Connecting talent with opportunity in Pune. Your trusted
              recruitment partner for IT, BPO, and corporate hiring.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Linkedin size={18} />
              </button>
              <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Instagram size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/70">IT Hiring</li>
              <li className="text-white/70">BPO Recruitment</li>
              <li className="text-white/70">Bulk Hiring</li>
              <li className="text-white/70">Fresher Placement</li>
              <li className="text-white/70">Executive Search</li>
              <li className="text-white/70">Training & Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 text-white/70 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-white/70 text-sm">+91 63760 64290</span>
                  <span className="text-white/70 text-sm">+91 87994 58253</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-white/70" />
                <span className="text-white/70 text-sm">info@jobjockey.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Job Jockey. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-white/70 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
