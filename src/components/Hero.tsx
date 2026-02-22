import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1F44] via-[#0d2a5a] to-[#0A1F44]"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Sparkles size={16} className="text-white" />
              <span className="text-white text-sm font-medium">
                Pune's Trusted Recruitment Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Connecting Talent with{' '}
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Opportunity
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Empowering freshers and companies in Pune with recruitment,
              training, and internship support for sustainable growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-white text-[#0A1F44] rounded-xl hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl font-semibold text-lg flex items-center justify-center gap-2"
              >
                Apply for Jobs
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all border border-white/20 font-semibold text-lg"
              >
                Hire Talent
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto lg:mx-0">
              <div>
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-white/70 text-sm">Placements</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">100+</div>
                <div className="text-white/70 text-sm">Companies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">95%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Floating Cards */}
              <div className="relative">
                {/* Card 1 */}
                <div className="absolute top-0 left-0 w-64 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="text-white/70 text-sm mb-2">IT Hiring</div>
                  <div className="text-white text-xl font-semibold">
                    Tech Talent Pool
                  </div>
                </div>

                {/* Card 2 */}
                <div className="absolute top-20 right-0 w-64 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="text-white/70 text-sm mb-2">
                    Fresher Placement
                  </div>
                  <div className="text-white text-xl font-semibold">
                    Launch Your Career
                  </div>
                </div>

                {/* Card 3 */}
                <div className="absolute top-40 left-12 w-64 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-white/70 text-sm mb-2">BPO Recruitment</div>
                  <div className="text-white text-xl font-semibold">
                    Scale Your Team
                  </div>
                </div>

                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20"
        >
          <path
            d="M0 0L60 8.88889C120 17.7778 240 35.5556 360 35.5556C480 35.5556 600 17.7778 720 13.3333C840 8.88889 960 17.7778 1080 26.6667C1200 35.5556 1320 44.4444 1380 48.8889L1440 53.3333V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
