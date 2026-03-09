import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
      <SpeedInsights />
    </div>
  );
}
