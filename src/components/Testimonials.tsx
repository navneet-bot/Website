import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Developer',
      company: 'Tech Solutions Pvt Ltd',
      image:
        'https://images.unsplash.com/photo-1659353221012-4b03d33347d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHlvdW5nfGVufDF8fHx8MTc3MTYxMzgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content:
        'Job Jockey helped me land my first job as a fresher. The training and interview preparation support was exceptional. Within 3 weeks, I had multiple offers!',
      rating: 5,
    },
    {
      name: 'Rajesh Patil',
      role: 'HR Manager',
      company: 'BPO Services Inc',
      image:
        'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NzE1NzI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content:
        'We needed to hire 50+ BPO executives urgently. Job Jockey delivered quality candidates within our timeline. Their screening process is thorough and reliable.',
      rating: 5,
    },
    {
      name: 'Sneha Deshmukh',
      role: 'Junior Analyst',
      company: 'Financial Services Ltd',
      image:
        'https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjByZWNydWl0bWVudCUyMGludGVydmlldyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzE2MTM4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content:
        'The personalized career guidance I received from Job Jockey was invaluable. They matched my skills perfectly with the right company. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Amit Kulkarni',
      role: 'Tech Lead',
      company: 'Innovation Labs',
      image:
        'https://images.unsplash.com/photo-1759310610480-48649b55fbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzE2MTM4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content:
        'As a hiring manager, I appreciate Job Jockey\'s understanding of tech roles. They only send us candidates who truly match our requirements. Time-saving and efficient!',
      rating: 5,
    },
    {
      name: 'Neha Joshi',
      role: 'Customer Support Lead',
      company: 'E-commerce Solutions',
      image:
        'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzE1MjMxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content:
        'Job Jockey transformed my career! From being unemployed to landing a leadership role, their support throughout the process was outstanding. Forever grateful!',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Operations Director',
      company: 'Manufacturing Group',
      image:
        'https://images.unsplash.com/photo-1766740606233-6573571caa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2UlMjBwdW5lJTIwaW5kaWF8ZW58MXx8fHwxNzcxNjEzODMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content:
        'Professional, prompt, and committed to excellence. Job Jockey has become our go-to recruitment partner for all our hiring needs across departments.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#0A1F44]/5 rounded-full mb-6">
            <span className="text-[#0A1F44] font-semibold text-sm">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Trusted by Professionals Across Pune
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hear from candidates and companies who have experienced our
            exceptional service first-hand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#0A1F44]/20 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-[#0A1F44]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#0A1F44]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#0A1F44]/5 rounded-2xl">
            <Star size={24} className="fill-yellow-400 text-yellow-400" />
            <div className="text-left">
              <div className="font-bold text-[#0A1F44] text-xl">4.9/5.0</div>
              <div className="text-sm text-gray-600">
                Average Rating from 200+ Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
