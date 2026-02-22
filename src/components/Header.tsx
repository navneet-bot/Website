import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-[#0A1F44] tracking-tight"
            >
              Job Jockey
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium"
            >
              Hire Talent
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-[#0A1F44] text-white rounded-lg hover:bg-[#0A1F44]/90 transition-all shadow-md hover:shadow-lg font-medium"
            >
              Apply for Jobs
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0A1F44]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium text-left"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#0A1F44] hover:text-[#0A1F44]/70 transition-colors font-medium text-left"
            >
              Contact
            </button>
            <div className="flex flex-col space-y-3 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 text-[#0A1F44] border border-[#0A1F44] rounded-lg hover:bg-[#0A1F44]/5 transition-all font-medium"
              >
                Hire Talent
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-[#0A1F44] text-white rounded-lg hover:bg-[#0A1F44]/90 transition-all shadow-md font-medium"
              >
                Apply for Jobs
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
