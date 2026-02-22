import React from 'react';
import { UserPlus, Search, Video, Award } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Register',
      description:
        'Submit your application or job requirements through our easy online portal',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      icon: Search,
      title: 'Screening',
      description:
        'Our experts review profiles and conduct thorough background verification',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '03',
      icon: Video,
      title: 'Interview',
      description:
        'Coordinate interviews between candidates and companies for the perfect match',
      color: 'from-green-500 to-green-600',
    },
    {
      number: '04',
      icon: Award,
      title: 'Placement',
      description:
        'Successful onboarding with continuous support for long-term success',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0A1F44 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-[#0A1F44]/5 rounded-full mb-6">
            <span className="text-[#0A1F44] font-semibold text-sm">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Simple Steps to Success
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our streamlined 4-step process ensures efficiency and quality at
            every stage of recruitment.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 rounded-full"></div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Icon Circle */}
                <div className="flex justify-center mb-8">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl border-4 border-white z-10`}
                  >
                    <step.icon size={32} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-gray-200 mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="text-3xl font-bold text-gray-200 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-transparent transform translate-y-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your journey with us?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-[#0A1F44] text-white rounded-xl hover:bg-[#0A1F44]/90 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            Begin Your Application
          </button>
        </div>
      </div>
    </section>
  );
}
