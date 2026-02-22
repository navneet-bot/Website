import React from 'react';
import { Shield, Zap, ThumbsUp, Users, Target, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description:
        '3+ years of proven excellence in recruitment with verified placements',
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description:
        'Quick hiring process without compromising on candidate quality',
    },
    {
      icon: ThumbsUp,
      title: 'Quality Candidates',
      description:
        'Rigorous screening and assessment to ensure perfect matches',
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description:
        'Dedicated support throughout the entire recruitment journey',
    },
    {
      icon: Target,
      title: 'Industry Expertise',
      description:
        'Deep knowledge across IT, BPO, and corporate hiring sectors',
    },
    {
      icon: Award,
      title: 'Success Guarantee',
      description:
        '95% placement success rate with long-term candidate retention',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#0A1F44]/5 rounded-full mb-6">
            <span className="text-[#0A1F44] font-semibold text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Your Success is Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We go beyond traditional recruitment to deliver exceptional value
            and lasting partnerships.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#0A1F44]/30 transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#0A1F44] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon size={26} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#0A1F44]/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-2">
              500+
            </div>
            <div className="text-gray-600 font-medium">Successful Placements</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-2">
              100+
            </div>
            <div className="text-gray-600 font-medium">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-2">
              95%
            </div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-2">
              3+
            </div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
