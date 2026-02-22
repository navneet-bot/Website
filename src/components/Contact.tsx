import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "jobseeker",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "jobseeker",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#0A1F44]/5 rounded-full mb-6">
            <span className="text-[#0A1F44] font-semibold text-sm">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Reach out to us today and discover how we can help
            you achieve your career or hiring goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-[#0A1F44] to-[#0d2a5a] rounded-2xl p-8 md:p-10 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">
                Get in Touch
              </h3>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">
                      Phone
                    </div>
                    <div className="text-white/80">+91 63760 64290</div>
                    <div className="text-white/80">+91 87994 58253</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">
                      Email
                    </div>
                    <div className="text-white/80">
                      info@jobjockey.in
                    </div>
                    <div className="text-white/80">
                      careers@jobjockey.in
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-6 border-t border-white/20">
                <div className="font-semibold mb-3">
                  Business Hours
                </div>
                <div className="text-white/80 space-y-1">
                  <div>Monday - Friday: 9:00 AM - 7:00 PM</div>
                  <div>Saturday: 9:00 AM - 5:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle
                    size={40}
                    className="text-green-600"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-600 text-center">
                  Thank you for reaching out. We'll get back to
                  you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#0A1F44] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A1F44] focus:ring-2 focus:ring-[#0A1F44]/20 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#0A1F44] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A1F44] focus:ring-2 focus:ring-[#0A1F44]/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#0A1F44] mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A1F44] focus:ring-2 focus:ring-[#0A1F44]/20 outline-none transition-all"
                    placeholder="+91 63760 64290"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-semibold text-[#0A1F44] mb-2"
                  >
                    I am a *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A1F44] focus:ring-2 focus:ring-[#0A1F44]/20 outline-none transition-all"
                  >
                    <option value="jobseeker">
                      Job Seeker
                    </option>
                    <option value="employer">
                      Employer / Company
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#0A1F44] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0A1F44] focus:ring-2 focus:ring-[#0A1F44]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#0A1F44] text-white rounded-xl hover:bg-[#0A1F44]/90 transition-all shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}