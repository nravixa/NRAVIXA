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
      countryCode: "+91",
      phone: "",
      businessName: "",
      _gotcha: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setApiError(null);
    try {
      if (data._gotcha) return;
      
      const subject = encodeURIComponent(`New Inquiry from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.countryCode} ${data.phone || 'N/A'}\n` +
        `Business Name: ${data.businessName || 'N/A'}`
      );
      
      const mailtoUrl = `mailto:nravixa@gmail.com?subject=${subject}&body=${body}`;
      const link = document.createElement("a");
      link.href = mailtoUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSubmitted(true);
      reset();
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      const errMessage = error instanceof Error ? error.message : "An error occurred. Please try again.";
      setApiError(errMessage);
    }
  };

  return (
    <Section id="contact" className="bg-white py-96 md:py-160">
      <Container>
        <Content>
          {/* Left Card: Contact Info */}
          <div className="col-span-12 lg:col-span-6 bg-white border border-black/10 p-32 md:p-48 flex flex-col justify-between h-full">
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
                <a href="tel:+917420008485" className="text-2xl font-medium tracking-tight text-black hover:text-black/60 transition-colors">
                  +91 7420008485
                </a>
                <a href="mailto:nravixa@gmail.com?subject=Project%20Inquiry&body=Hi!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." className="text-2xl font-medium tracking-tight text-black hover:text-black/60 transition-colors">
                  nravixa@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap gap-16 mt-16">
                <a
                  href="tel:+917420008485"
                  className="px-24 py-16 border border-black/20 rounded-full text-black font-medium hover:border-black transition-colors duration-300 ease-premium"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/917420008485?text=Hi!%20%E2%9C%A8%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20building%20a%20creative%2C%20modern%2C%20and%20responsive%20website.%20I'd%20love%20to%20discuss%20my%20project.%20Please%20get%20in%20touch%20with%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-24 py-16 border border-black/20 rounded-full text-black font-medium hover:border-black transition-colors duration-300 ease-premium"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:nravixa@gmail.com?subject=Project%20Inquiry&body=Hi!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
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
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-48 h-full justify-center relative" suppressHydrationWarning>
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
                    <div className={`flex w-full border-b py-16 transition-colors duration-300 ease-premium ${
                      errors.phone ? "border-red-500" : "border-black/20 focus-within:border-black"
                    }`}>
                      <select
                        {...register("countryCode")}
                        className="bg-white border-none outline-none text-lg text-black pr-8 font-medium cursor-pointer appearance-none md:appearance-auto"
                        disabled={isSubmitting}
                      >
                        <option value="+1">+1 (US/CA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+91">+91 (IN)</option>
                        <option value="+61">+61 (AU)</option>
                        <option value="+81">+81 (JP)</option>
                        <option value="+49">+49 (DE)</option>
                        <option value="+33">+33 (FR)</option>
                        <option value="+971">+971 (AE)</option>
                        <option value="+86">+86 (CN)</option>
                        <option value="+55">+55 (BR)</option>
                        <option value="+7">+7 (RU/KZ)</option>
                        <option value="+39">+39 (IT)</option>
                        <option value="+34">+34 (ES)</option>
                        <option value="+82">+82 (KR)</option>
                        <option value="+52">+52 (MX)</option>
                        <option value="+62">+62 (ID)</option>
                        <option value="+90">+90 (TR)</option>
                        <option value="+31">+31 (NL)</option>
                        <option value="+41">+41 (CH)</option>
                        <option value="+46">+46 (SE)</option>
                        <option value="+48">+48 (PL)</option>
                        <option value="+32">+32 (BE)</option>
                        <option value="+43">+43 (AT)</option>
                        <option value="+45">+45 (DK)</option>
                        <option value="+358">+358 (FI)</option>
                        <option value="+47">+47 (NO)</option>
                        <option value="+353">+353 (IE)</option>
                        <option value="+64">+64 (NZ)</option>
                        <option value="+65">+65 (SG)</option>
                        <option value="+60">+60 (MY)</option>
                        <option value="+63">+63 (PH)</option>
                        <option value="+66">+66 (TH)</option>
                        <option value="+84">+84 (VN)</option>
                        <option value="+92">+92 (PK)</option>
                        <option value="+880">+880 (BD)</option>
                        <option value="+94">+94 (LK)</option>
                        <option value="+972">+972 (IL)</option>
                        <option value="+966">+966 (SA)</option>
                        <option value="+27">+27 (ZA)</option>
                        <option value="+20">+20 (EG)</option>
                        <option value="+234">+234 (NG)</option>
                        <option value="+254">+254 (KE)</option>
                        <option value="+54">+54 (AR)</option>
                        <option value="+56">+56 (CL)</option>
                        <option value="+57">+57 (CO)</option>
                        <option value="+51">+51 (PE)</option>
                        <option value="+58">+58 (VE)</option>
                        <option value="+380">+380 (UA)</option>
                        <option value="+420">+420 (CZ)</option>
                        <option value="+30">+30 (GR)</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Phone Number *"
                        {...register("phone")}
                        disabled={isSubmitting}
                        className="w-full bg-transparent border-none outline-none text-lg text-black placeholder-black/30 pl-8 border-l border-black/20 disabled:opacity-50"
                      />
                    </div>
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
