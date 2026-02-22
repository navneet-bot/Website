import React from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Target,
      title: 'Recruitment Excellence',
      description: 'Matching the right talent with the right opportunities',
    },
    {
      icon: Users,
      title: 'Training Programs',
      description: 'Comprehensive skill development for career readiness',
    },
    {
      icon: TrendingUp,
      title: 'Internship Support',
      description: 'Bridging the gap between learning and employment',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous screening and verification processes',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-[#0A1F44]/5 rounded-full mb-6">
              <span className="text-[#0A1F44] font-semibold text-sm">
                About Job Jockey
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
              Your Trusted Partner in Career Growth
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Pune, Job Jockey is a premier recruitment agency
              dedicated to connecting talented individuals with leading
              companies across India. We specialize in empowering freshers and
              experienced professionals alike.
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our comprehensive approach combines strategic recruitment,
              professional training, and internship opportunities to ensure
              sustainable career growth for candidates and optimal talent
              acquisition for businesses.
            </p>

            {/* Experience Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#0A1F44]/5 rounded-2xl mb-12">
              <div className="text-3xl font-bold text-[#0A1F44]">3+</div>
              <div className="text-left">
                <div className="text-sm font-semibold text-[#0A1F44]">Years</div>
                <div className="text-xs text-gray-600">Experience</div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 hover:bg-[#0A1F44]/5 transition-colors border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#0A1F44] flex items-center justify-center">
                      <item.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-[#0A1F44] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
