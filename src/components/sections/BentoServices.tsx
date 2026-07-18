"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";

interface BentoCardProps {
  title: string;
  description: string;
  glowColor: string;
  spanClass: string;
  index: number;
  children?: React.ReactNode;
}

const BentoCard = ({ title, description, glowColor, spanClass, index, children }: BentoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: index * 0.12,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      borderColor: "rgba(255, 255, 255, 0.18)",
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    tap: {
      scale: 0.98,
      y: 0,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-30px", amount: 0.15 }}
      whileHover="hover"
      whileTap="tap"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={`group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]/60 backdrop-blur-xl p-32 flex flex-col justify-between cursor-pointer transition-colors duration-300 w-full ${spanClass}`}
      style={{
        // Set glow-color for spotlight effect
        ["--glow-color" as any]: glowColor,
      }}
    >
      {/* Mouse Spot-light Glow Effect */}
      <motion.div
        variants={{
          hover: { opacity: 1 },
          tap: { opacity: 1 },
          rest: { opacity: 0 },
          hidden: { opacity: 0 },
          visible: { opacity: 0 }
        }}
        className="absolute -inset-px rounded-[24px] bg-[radial-gradient(600px_circle_at_var(--x,0px)_var(--y,0px),var(--glow-color),transparent_40%)] pointer-events-none -z-10"
      />

      {/* Internal ambient radial glow (always slightly visible) */}
      <div 
        className="absolute -top-40 -right-40 w-160 h-160 rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none -z-10"
        style={{ backgroundColor: glowColor.replace("0.15", "0.3").replace("0.2", "0.4") }}
      />

      {/* Decorative Grid Lines inside Card */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 -z-10 pointer-events-none" />

      {/* Card Content & Graphics */}
      <div className="w-full h-full flex flex-col justify-between gap-32 relative z-10">
        {/* Children contains the custom premium graphic */}
        {children}

        {/* Text Details & Action Button */}
        <div className="flex flex-col gap-12 mt-auto">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              {title}
            </h3>
            {/* Premium arrow animation */}
            <div className="w-40 h-40 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:text-black">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
              >
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="text-[14px] md:text-[15px] leading-relaxed text-white/60 max-w-[480px]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const BentoServices = () => {

  return (
    <section className="relative w-full bg-[#050505] text-white py-96 md:py-128 lg:py-160 overflow-hidden">
      {/* Self-contained CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bento-float-slow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes bento-float-medium {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.05); }
        }
        .bento-animate-float-slow {
          animation: bento-float-slow 20s infinite ease-in-out;
        }
        .bento-animate-float-medium {
          animation: bento-float-medium 15s infinite ease-in-out;
        }
        .bento-grid-bg {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}} />

      {/* Background Texture & Gradients */}
      <div className="absolute inset-0 bento-grid-bg opacity-70 pointer-events-none -z-20" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/70 to-[#050505] pointer-events-none -z-20" />

      {/* Ambient Floating Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[130px] bento-animate-float-slow pointer-events-none -z-20" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[150px] bento-animate-float-medium pointer-events-none -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none -z-20" />

      {/* Main Container */}
      <div className="w-full max-w-[1400px] mx-auto px-24 md:px-48 lg:px-64">
        {/* Section Header */}
        <div className="mb-64 md:mb-80 flex flex-col max-w-[600px]">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-16">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            What We Offer
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-32 w-full">
          {/* Card 1: Website Development (Large - Spans 3 cols on desktop) */}
          <BentoCard
            title="Website Development"
            description="Responsive, high-performance websites built using the latest React and Next.js frameworks with clean, modular, and SEO-friendly code."
            glowColor="rgba(59, 130, 246, 0.15)" // Blue
            spanClass="col-span-1 md:col-span-1 lg:col-span-3 h-auto min-h-[420px]"
            index={0}
          >
            {/* Visual Graphic */}
            <div className="w-full flex justify-between items-start">
              {/* Icon */}
              <div className="w-48 h-48 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>

              {/* Graphic container (hidden on mobile, visible on desktop/tablet) */}
              <div className="hidden sm:block relative w-[320px] md:w-[380px] h-[180px] rounded-xl border border-white/[0.08] bg-black/60 p-16 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                {/* Code Window Header */}
                <div className="flex items-center gap-8 mb-12 border-b border-white/[0.08] pb-8">
                  <div className="w-8 h-8 rounded-full bg-red-500/60" />
                  <div className="w-8 h-8 rounded-full bg-yellow-500/60" />
                  <div className="w-8 h-8 rounded-full bg-green-500/60" />
                  <span className="text-[10px] text-white/30 ml-8 font-mono">App.tsx</span>
                </div>
                {/* Code lines mockup */}
                <pre className="text-[10px] font-mono text-white/50 leading-relaxed overflow-hidden">
                  <code>
                    <span className="text-blue-400">const</span> <span className="text-yellow-400">WebDev</span> = () =&gt; &#123;<br />
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-teal-400">div</span> <span className="text-pink-400">className</span>=<span className="text-green-400">"premium-web"</span>&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-yellow-400">NextJS</span> <span className="text-pink-400">performance</span>=&#123;<span className="text-orange-400">100</span>&#125; /&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-teal-400">div</span>&gt;<br />
                    &nbsp;&nbsp;);<br />
                    &#125;;
                  </code>
                </pre>
                {/* Ambient glow behind graphic */}
                <div className="absolute -bottom-40 -right-40 w-120 h-120 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none" />
              </div>
            </div>
          </BentoCard>

          {/* Card 2: UI/UX Design (Small - Spans 1 col on desktop) */}
          <BentoCard
            title="UI/UX Design"
            description="Design experiences that are intuitive, engaging, and focused on customer conversion."
            glowColor="rgba(139, 92, 246, 0.15)" // Purple
            spanClass="col-span-1 md:col-span-1 lg:col-span-1 h-auto min-h-[420px]"
            index={1}
          >
            {/* Visual Graphic */}
            <div className="w-full flex flex-col gap-24">
              <div className="w-48 h-48 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" />
                </svg>
              </div>

              {/* Graphic */}
              <div className="relative w-full h-[140px] rounded-xl border border-white/[0.05] bg-black/40 overflow-hidden flex items-center justify-center shadow-inner">
                {/* Figma layout mock */}
                <div className="w-[120px] h-[90px] rounded border border-white/[0.1] bg-black/60 relative flex flex-col p-8">
                  <div className="w-full h-8 rounded bg-white/[0.04] mb-8" />
                  <div className="flex gap-4 mb-8">
                    <div className="w-20 h-20 rounded bg-purple-500/20 border border-purple-500/30" />
                    <div className="w-40 h-8 rounded bg-white/[0.04]" />
                  </div>
                  <div className="w-full h-12 rounded bg-purple-500/40 mt-auto" />
                </div>
                {/* Custom Cursor Tag */}
                <div className="absolute top-[50%] left-[60%] flex items-center gap-4 bg-purple-500 text-white text-[8px] font-medium px-6 py-2 rounded shadow-lg animate-pulse">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><path d="M0,0 L6,3 L3,3.5 L0,6 Z" /></svg>
                  Designer
                </div>
                {/* Background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />
              </div>
            </div>
          </BentoCard>

          {/* Card 3: E-Commerce (Medium - Spans 2 cols on desktop) */}
          <BentoCard
            title="E-Commerce"
            description="Launch your online store with secure payment integration, inventory management, and an exceptional shopping experience."
            glowColor="rgba(20, 184, 166, 0.15)" // Teal
            spanClass="col-span-1 md:col-span-1 lg:col-span-2 h-auto min-h-[380px]"
            index={2}
          >
            {/* Visual Graphic */}
            <div className="w-full flex justify-between items-start">
              <div className="w-48 h-48 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>

              {/* Checkout Form Mockup */}
              <div className="hidden sm:block relative w-[220px] h-[160px] rounded-xl border border-white/[0.08] bg-black/60 p-16 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <span className="text-[10px] text-white/40 block mb-12 uppercase tracking-wider font-semibold">Payment</span>
                {/* Visual Cards representation */}
                <div className="w-full h-40 rounded-lg bg-gradient-to-r from-teal-500/30 to-blue-500/30 border border-teal-500/20 p-8 flex flex-col justify-between mb-12">
                  <div className="w-24 h-16 rounded bg-white/20" />
                  <div className="flex justify-between items-center text-[7px] font-mono text-white/50">
                    <span>•••• •••• •••• 4820</span>
                    <span>12/28</span>
                  </div>
                </div>
                {/* Simple buy button */}
                <div className="w-full h-24 rounded bg-teal-500 flex items-center justify-center text-[9px] font-bold text-black transition-colors duration-300 group-hover:bg-teal-400 cursor-pointer">
                  Pay Now
                </div>
                <div className="absolute -bottom-40 -left-40 w-100 h-100 bg-teal-500/20 rounded-full blur-[40px] pointer-events-none" />
              </div>
            </div>
          </BentoCard>

          {/* Card 4: SEO & Speed (Medium - Spans 2 cols on desktop) */}
          <BentoCard
            title="SEO & Speed"
            description="Build websites that search engines love with optimized structure, metadata, and blazing-fast loading speeds."
            glowColor="rgba(16, 185, 129, 0.15)" // Green
            spanClass="col-span-1 md:col-span-1 lg:col-span-2 h-auto min-h-[380px]"
            index={3}
          >
            {/* Visual Graphic */}
            <div className="w-full flex justify-between items-start">
              <div className="w-48 h-48 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>

              {/* Circular Dial Graphic */}
              <div className="hidden sm:flex items-center gap-16 relative w-[220px] h-[140px] rounded-xl border border-white/[0.08] bg-black/60 p-16 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Speed gauge SVG */}
                <div className="relative w-72 h-72 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="36" cy="36" r="32" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="36" 
                      cy="36" 
                      r="32" 
                      stroke="#10b981" 
                      strokeWidth="6" 
                      fill="transparent" 
                      strokeDasharray="200" 
                      strokeDashoffset="0"
                      className="transition-all duration-[1500ms] group-hover:stroke-emerald-400"
                    />
                  </svg>
                  <span className="absolute text-sm font-bold text-emerald-400 font-mono">100</span>
                </div>
                {/* Core Web Vitals labels */}
                <div className="flex flex-col gap-4 text-[9px] font-mono text-white/50">
                  <div className="flex items-center gap-4">
                    <span className="w-6 h-6 rounded-full bg-emerald-500" />
                    <span>LCP: 0.8s</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-6 h-6 rounded-full bg-emerald-500" />
                    <span>FID: 12ms</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-6 h-6 rounded-full bg-emerald-500" />
                    <span>CLS: 0.0</span>
                  </div>
                </div>
                <div className="absolute -bottom-40 -right-40 w-100 h-100 bg-emerald-500/20 rounded-full blur-[40px] pointer-events-none" />
              </div>
            </div>
          </BentoCard>

          {/* Card 5: Branding & Identity (Small - Spans 1 col on desktop) */}
          <BentoCard
            title="Branding"
            description="Craft cohesive, modern, and memorable brand identities that differentiate your business in the digital landscape."
            glowColor="rgba(245, 158, 11, 0.15)" // Amber
            spanClass="col-span-1 md:col-span-1 lg:col-span-1 h-auto min-h-[420px]"
            index={4}
          >
            {/* Visual Graphic */}
            <div className="w-full flex flex-col gap-24">
              <div className="w-48 h-48 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              {/* Graphic */}
              <div className="relative w-full h-[140px] rounded-xl border border-white/[0.05] bg-black/40 overflow-hidden flex items-center justify-center">
                {/* Glowing emblem geometry */}
                <div className="relative w-72 h-72 flex items-center justify-center">
                  <div className="absolute inset-0 rounded bg-gradient-to-tr from-amber-500 to-yellow-300 border border-amber-400/50 opacity-40 rotate-45 transition-transform duration-1000 group-hover:rotate-90" />
                  <div className="absolute inset-8 rounded bg-black border border-white/[0.1] rotate-45 flex items-center justify-center text-[18px] font-bold text-white transition-transform duration-1000 group-hover:rotate-[135deg]">
                    N
                  </div>
                </div>
                {/* Background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)] pointer-events-none" />
              </div>
            </div>
          </BentoCard>

          {/* Card 6: Web Applications (Large - Spans 3 cols on desktop) */}
          <BentoCard
            title="Web Applications"
            description="Custom, highly interactive web applications built with Next.js and modern frameworks to solve complex business needs."
            glowColor="rgba(236, 72, 153, 0.15)" // Pink
            spanClass="col-span-1 md:col-span-1 lg:col-span-3 h-auto min-h-[420px]"
            index={5}
          >
            {/* Visual Graphic */}
            <div className="w-full flex justify-between items-start">
              <div className="w-48 h-48 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="9" y1="9" x2="21" y2="9" />
                </svg>
              </div>

              {/* SaaS Dashboard mockup */}
              <div className="hidden sm:block relative w-[320px] md:w-[380px] h-[180px] rounded-xl border border-white/[0.08] bg-black/60 p-16 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                {/* Top header row */}
                <div className="flex justify-between items-center mb-16 pb-8 border-b border-white/[0.08]">
                  <span className="text-[10px] text-white/50 font-bold">Analytics Dashboard</span>
                  <div className="w-40 h-12 rounded bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-[7px] text-pink-300">Live</div>
                </div>
                {/* Metrics and Chart */}
                <div className="grid grid-cols-3 gap-12 mb-16">
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded p-6 flex flex-col gap-4">
                    <span className="text-[6px] text-white/40">Users</span>
                    <span className="text-[11px] font-bold text-white">12.8K</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded p-6 flex flex-col gap-4">
                    <span className="text-[6px] text-white/40">Revenue</span>
                    <span className="text-[11px] font-bold text-white">$45.2K</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded p-6 flex flex-col gap-4">
                    <span className="text-[6px] text-white/40">Uptime</span>
                    <span className="text-[11px] font-bold text-green-400">99.9%</span>
                  </div>
                </div>
                {/* SVG Area Chart */}
                <svg className="w-full h-40 overflow-visible text-pink-500">
                  <path 
                    d="M0,35 Q30,10 60,25 T120,5 T180,20 T240,10 T300,15 L300,40 L0,40 Z" 
                    fill="url(#pink-grad)" 
                    opacity="0.2"
                  />
                  <path 
                    d="M0,35 Q30,10 60,25 T120,5 T180,20 T240,10 T300,15" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="pink-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute -bottom-40 -right-40 w-120 h-120 bg-pink-500/20 rounded-full blur-[40px] pointer-events-none" />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};
