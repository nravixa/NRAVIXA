"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most websites are completed within 1–4 weeks, depending on project complexity.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes! We can modernize, improve, and optimize your existing website.",
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Absolutely. Every website we build is fully responsive and optimized for all screen sizes.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes, we offer ongoing maintenance, updates, security monitoring, and technical support after launch.",
  },
];

const benefits = [
  "Free Project Consultation",
  "Fast Response Time",
  "Transparent Pricing",
  "Custom Solutions",
  "No Hidden Charges",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for now since we're building the UI
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-black text-white pt-160 pb-96 md:pt-200 md:pb-160">
        <Container>
          <Content>
            <div className="col-span-12 md:col-span-10 flex flex-col justify-center">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-32">
                Contact Us
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-32 max-w-[900px]">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-[600px] leading-relaxed">
                Have an idea? Need a business website? Looking to redesign your existing website? We're here to help.
              </p>
            </div>
          </Content>
        </Container>
      </Section>

      {/* Main Contact Section */}
      <Section className="bg-white py-96 md:py-160">
        <Container>
          <Content>
            {/* Left Column: Info & FAQs */}
            <div className="col-span-12 md:col-span-5 flex flex-col mb-96 md:mb-0">
              <div className="mb-64">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-32 block">
                  Contact Information
                </span>
                <div className="flex flex-col gap-32">
                  <div>
                    <h4 className="text-sm font-bold tracking-wider text-black/40 uppercase mb-8">Location</h4>
                    <p className="text-xl font-medium text-black">Pune, Maharashtra, India</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wider text-black/40 uppercase mb-8">Email</h4>
                    <a href="mailto:nravixa@gmail.com" className="text-xl font-medium text-black hover:text-black/60 transition-colors">
                      nravixa@gmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wider text-black/40 uppercase mb-8">Phone</h4>
                    <a href="tel:+917420008485" className="text-xl font-medium text-black hover:text-black/60 transition-colors">
                      +91 74200 08485
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-64">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-32 block">
                  Why Contact Us?
                </span>
                <ul className="flex flex-col gap-16">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-16">
                      <div className="w-8 h-8 rounded-full bg-black shrink-0" />
                      <span className="text-lg font-medium text-black/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-32 block">
                  FAQ
                </span>
                <div className="flex flex-col gap-32">
                  {faqs.map((faq, i) => (
                    <div key={i} className="flex flex-col gap-8">
                      <h4 className="text-xl font-bold tracking-tight text-black">{faq.q}</h4>
                      <p className="text-black/60 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="bg-[#f9f9f9] p-32 md:p-64 border border-black/5">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-32 block">
                  Get in Touch
                </span>

                {submitted ? (
                  <div className="py-64 flex flex-col items-center justify-center text-center h-full">
                    <div className="w-64 h-64 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-32">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold mb-16">Message Sent</h3>
                    <p className="text-black/60">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-32">
                    <div className="flex flex-col gap-8">
                      <label htmlFor="name" className="text-sm font-medium text-black">Full Name *</label>
                      <input required type="text" id="name" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none" placeholder="John Doe" />
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="email" className="text-sm font-medium text-black">Email Address *</label>
                      <input required type="email" id="email" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none" placeholder="john@example.com" />
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="phone" className="text-sm font-medium text-black">Phone Number *</label>
                      <input required type="tel" id="phone" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none" placeholder="+1 (555) 000-0000" />
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="company" className="text-sm font-medium text-black">Company Name (Optional)</label>
                      <input type="text" id="company" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none" placeholder="Your Company" />
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="service" className="text-sm font-medium text-black">Service Required *</label>
                      <select required id="service" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none appearance-none">
                        <option value="" disabled selected>Select a service</option>
                        <option value="website-design">Website Design</option>
                        <option value="website-development">Website Development</option>
                        <option value="ecommerce">E-Commerce Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="budget" className="text-sm font-medium text-black">Project Budget (Optional)</label>
                      <input type="text" id="budget" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none" placeholder="$5k - $10k" />
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="message" className="text-sm font-medium text-black">Message *</label>
                      <textarea required id="message" rows={4} className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors resize-none rounded-none" placeholder="Tell us about your project..."></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-32 w-full bg-black text-white py-24 rounded-full font-medium text-lg hover:bg-black/80 transition-all duration-300 ease-premium disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Content>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-black text-white py-96 md:py-160 border-t border-white/10 text-center">
        <Container>
          <Content>
            <div className="col-span-12 flex flex-col items-center">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-48 max-w-[800px]">
                Ready to Grow Your Business Online?
              </h2>
              <p className="text-xl text-white/60 mb-64 max-w-[600px]">
                Let's create a website that reflects your brand, engages your audience, and drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-16 justify-center w-full">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-48 py-24 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-all duration-300 ease-premium"
                >
                  Start Your Project
                </button>
                <a
                  href="https://wa.me/917420008485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-48 py-24 bg-transparent text-white border border-white/30 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 ease-premium"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Content>
        </Container>
      </Section>
    </>
  );
}
