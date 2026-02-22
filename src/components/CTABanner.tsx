import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTABanner() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#0A1F44] via-[#0d2a5a] to-[#0A1F44] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <Sparkles size={16} className="text-white" />
          <span className="text-white text-sm font-medium">
            Start Your Journey Today
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Take the Next Step?
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
          Whether you're looking for your dream job or the perfect candidate,
          we're here to make it happen.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-white text-[#0A1F44] rounded-xl hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl font-semibold text-lg flex items-center gap-2"
          >
            Get Started Now
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all border border-white/20 font-semibold text-lg"
          >
            Contact Our Team
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
              500+
            </div>
            <div className="text-white/70 text-sm">Successful Placements</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
              100+
            </div>
            <div className="text-white/70 text-sm">Partner Companies</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
              95%
            </div>
            <div className="text-white/70 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
