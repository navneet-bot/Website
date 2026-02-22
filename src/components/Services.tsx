import React from 'react';
import {
  Code,
  Headphones,
  Users,
  GraduationCap,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'IT Hiring',
      description:
        'Connect with top tech talent across development, design, and engineering roles. We specialize in matching skilled professionals with innovative companies.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Headphones,
      title: 'BPO Recruitment',
      description:
        'Scale your customer service operations with qualified BPO professionals. From voice to non-voice roles, we deliver quality candidates quickly.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Bulk Hiring',
      description:
        'Need to expand your team rapidly? Our bulk hiring solutions ensure you get quality candidates at scale, without compromising on standards.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: GraduationCap,
      title: 'Fresher Placement',
      description:
        'Launch your career with confidence. We help fresh graduates find their first professional role and prepare them for workplace success.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Briefcase,
      title: 'Executive Search',
      description:
        'Find senior-level talent for leadership positions. Our executive search service identifies experienced professionals for strategic roles.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: TrendingUp,
      title: 'Training & Development',
      description:
        'Upskill your workforce or prepare for new opportunities with our tailored training programs in technical and soft skills.',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#0A1F44]/5 rounded-full mb-6">
            <span className="text-[#0A1F44] font-semibold text-sm">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Comprehensive Recruitment Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From IT specialists to BPO professionals, we deliver tailored
            recruitment services that meet your unique business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0A1F44]/20"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon size={28} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-[#0A1F44] to-[#0A1F44]/50 transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-[#0A1F44] text-white rounded-xl hover:bg-[#0A1F44]/90 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
