"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Content } from "../layout/Content";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      _gotcha: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setApiError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry.");
      }

      setIsSubmitted(true);
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error: any) {
      setApiError(error.message || "A network error occurred. Please try again.");
    }
  };

  return (
    <Section id="contact" className="bg-white py-96 md:py-160">
      <Container>
        <Content>
          {/* Left Card: Contact Info */}
          <div className="col-span-12 lg:col-span-6 bg-[#fcfcfc] border border-black/10 p-32 md:p-48 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black mb-24">
                Let's create something extraordinary.
              </h2>
              <p className="text-lg text-black/60 max-w-[400px] mb-48">
                Reach out to discuss your next project. We are currently accepting new clients for the upcoming quarter.
              </p>
            </div>

            <div className="flex flex-col gap-32">
              <div className="flex flex-col gap-8">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40">
                  Direct Contact
                </span>
                <span className="text-2xl font-medium tracking-tight text-black">
                  7420008485
                </span>
                <span className="text-2xl font-medium tracking-tight text-black">
                  nravixa@gmail.com
                </span>
              </div>

              <div className="flex flex-wrap gap-16 mt-16">
                <a
                  href="tel:7420008485"
                  className="px-24 py-16 border border-black/20 rounded-full text-black font-medium hover:border-black transition-colors duration-300 ease-premium"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/917420008485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-24 py-16 border border-black/20 rounded-full text-black font-medium hover:border-black transition-colors duration-300 ease-premium"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:nravixa@gmail.com"
                  className="px-24 py-16 border border-black/20 rounded-full text-black font-medium hover:border-black transition-colors duration-300 ease-premium"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: Form */}
          <div className="col-span-12 lg:col-span-6 bg-white border border-black/10 p-32 md:p-48">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-64">
                <h3 className="text-3xl font-bold tracking-tight text-black mb-16">
                  Inquiry Received
                </h3>
                <p className="text-lg text-black/60">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-48 h-full justify-center relative">
                <h3 className="text-2xl font-bold tracking-tight text-black mb-16">
                  Send an Inquiry
                </h3>

                {/* Honeypot Field for Spam Protection */}
                <input 
                  type="text" 
                  {...register("_gotcha")} 
                  className="hidden" 
                  tabIndex={-1} 
                  autoComplete="off" 
                />

                <div className="flex flex-col gap-32">
                  {/* Name Field */}
                  <div className="relative flex flex-col">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name *"
                      {...register("name")}
                      disabled={isSubmitting}
                      className={`w-full bg-transparent border-b py-16 text-lg text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors duration-300 ease-premium disabled:opacity-50 ${
                        errors.name ? "border-red-500" : "border-black/20"
                      }`}
                    />
                    {errors.name && (
                      <span className="absolute -bottom-24 left-0 text-sm text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative flex flex-col">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address *"
                      {...register("email")}
                      disabled={isSubmitting}
                      className={`w-full bg-transparent border-b py-16 text-lg text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors duration-300 ease-premium disabled:opacity-50 ${
                        errors.email ? "border-red-500" : "border-black/20"
                      }`}
                    />
                    {errors.email && (
                      <span className="absolute -bottom-24 left-0 text-sm text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="relative flex flex-col">
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone Number *"
                      {...register("phone")}
                      disabled={isSubmitting}
                      className={`w-full bg-transparent border-b py-16 text-lg text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors duration-300 ease-premium disabled:opacity-50 ${
                        errors.phone ? "border-red-500" : "border-black/20"
                      }`}
                    />
                    {errors.phone && (
                      <span className="absolute -bottom-24 left-0 text-sm text-red-500">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  {/* Business Name Field (Optional) */}
                  <div className="relative flex flex-col">
                    <label htmlFor="businessName" className="sr-only">Business Name</label>
                    <input
                      type="text"
                      id="businessName"
                      placeholder="Business Name (Optional)"
                      {...register("businessName")}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-black/20 py-16 text-lg text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors duration-300 ease-premium disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* API Level Error */}
                {apiError && (
                  <div className="p-16 bg-red-50 border border-red-200 text-red-600 text-sm mt-8">
                    {apiError}
                  </div>
                )}

                <div className="mt-16">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-32 py-16 bg-black text-white rounded-full font-medium text-lg hover:bg-black/80 transition-colors duration-300 ease-premium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Content>
      </Container>
    </Section>
  );
}
