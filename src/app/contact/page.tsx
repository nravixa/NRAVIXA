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
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const countryCode = formData.get("countryCode") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const service = formData.get("service") as string;
    const budget = formData.get("budget") as string;
    const message = formData.get("message") as string;
    
    const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${countryCode} ${phone}\n` +
      `Company: ${company || 'N/A'}\n` +
      `Service Required: ${service}\n` +
      `Budget: ${budget || 'N/A'}\n\n` +
      `Message:\n${message}`
    );
    
    const mailtoUrl = `mailto:nravixa@gmail.com?subject=${subject}&body=${body}`;
    const link = document.createElement("a");
    link.href = mailtoUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
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
                    <a 
                      href="https://maps.google.com/?q=Pune,+Maharashtra,+India" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-black hover:text-black/60 transition-colors"
                    >
                      Pune, Maharashtra, India
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wider text-black/40 uppercase mb-8">Email</h4>
                    <a href="mailto:nravixa@gmail.com?subject=Project%20Inquiry&body=Hi!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." className="text-xl font-medium text-black hover:text-black/60 transition-colors">
                      nravixa@gmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wider text-black/40 uppercase mb-16 block">Direct Contact</h4>
                    <div className="flex flex-wrap gap-16 mt-8">
                      <a 
                        href="tel:+917420008485" 
                        className="inline-flex items-center justify-center px-32 py-16 border border-black/20 rounded-full text-black font-medium hover:border-black transition-colors duration-300 ease-premium"
                      >
                        Call Me
                      </a>
                      <a 
                        href="https://wa.me/917420008485?text=Hi!%20%E2%9C%A8%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20building%20a%20creative%2C%20modern%2C%20and%20responsive%20website.%20I'd%20love%20to%20discuss%20my%20project.%20Please%20get%20in%20touch%20with%20me." 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-32 py-16 bg-black border border-black rounded-full text-white font-medium hover:bg-black/80 transition-colors duration-300 ease-premium"
                      >
                        WhatsApp
                      </a>
                    </div>
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
              <div className="bg-white p-32 md:p-64 border border-black/5">
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
                      <input required type="text" id="name" name="name" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none text-black placeholder:text-black/40" placeholder="John Doe" />
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="email" className="text-sm font-medium text-black">Email Address *</label>
                      <input required type="email" id="email" name="email" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none text-black placeholder:text-black/40" placeholder="john@example.com" />
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="phone" className="text-sm font-medium text-black">Phone Number *</label>
                      <div className="flex w-full border-b border-black/20 pb-16 pt-8 focus-within:border-black transition-colors rounded-none">
                        <select
                          name="countryCode"
                          id="countryCode"
                          className="bg-transparent border-none outline-none text-black pr-8 font-medium cursor-pointer"
                          defaultValue="+91"
                        >
                          <option value="+1">+1 (US)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+91">+91 (IN)</option>
                          <option value="+61">+61 (AU)</option>
                          <option value="+81">+81 (JP)</option>
                          <option value="+49">+49 (DE)</option>
                          <option value="+33">+33 (FR)</option>
                          <option value="+971">+971 (AE)</option>
                        </select>
                        <input required type="tel" id="phone" name="phone" className="w-full bg-transparent border-none outline-none text-black placeholder:text-black/40 pl-8 border-l border-black/20" placeholder="(555) 000-0000" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="company" className="text-sm font-medium text-black">Company Name (Optional)</label>
                      <input type="text" id="company" name="company" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none text-black placeholder:text-black/40" placeholder="Your Company" />
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="service" className="text-sm font-medium text-black">Service Required *</label>
                      <select required id="service" name="service" defaultValue="" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none appearance-none text-black">
                        <option value="" disabled>Select a service</option>
                        <option value="website-design">Website Design</option>
                        <option value="website-development">Website Development</option>
                        <option value="ecommerce">E-Commerce Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="budget" className="text-sm font-medium text-black">Project Budget (Optional)</label>
                      <select id="budget" name="budget" defaultValue="" className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors rounded-none appearance-none text-black">
                        <option value="" disabled>Select your budget range</option>
                        <option value="Less than $1,000">Less than $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-8">
                      <label htmlFor="message" className="text-sm font-medium text-black">Message *</label>
                      <textarea required id="message" name="message" rows={4} className="w-full bg-transparent border-b border-black/20 pb-16 pt-8 focus:border-black outline-none transition-colors resize-none rounded-none text-black placeholder:text-black/40" placeholder="Tell us about your project..."></textarea>
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
                  href="https://wa.me/917420008485?text=Hi!%20%E2%9C%A8%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20building%20a%20creative%2C%20modern%2C%20and%20responsive%20website.%20I'd%20love%20to%20discuss%20my%20project.%20Please%20get%20in%20touch%20with%20me."
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
