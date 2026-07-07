"use client";

import React, { useState, memo } from "react";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";

const values = [
  {
    title: "Innovation",
    desc: "We push boundaries with modern frameworks and forward-thinking design.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    )
  },
  {
    title: "Transparency",
    desc: "Clear communication, honest timelines, and no hidden surprises.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12c3.5-6 16.5-6 20 0-3.5 6-16.5 6-20 0z" />
      </svg>
    )
  },
  {
    title: "Quality First",
    desc: "Every pixel and line of code undergoes rigorous review before launch.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  },
  {
    title: "Customer Success",
    desc: "Your growth is our ultimate metric. We win when you win.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardEntranceVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AnimatedValueCard = memo(function AnimatedValueCard({ value }: { value: typeof values[0] }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  let animateProps = {};
  let overlay = null;
  let duration = 1.2;

  switch (value.title) {
    case "Innovation":
      animateProps = isAnimating
        ? {
            scale: [1, 1.03, 1],
            rotateX: [0, 5, -5, 0],
            rotateY: [0, -5, 5, 0],
            boxShadow: [
              "0px 4px 10px rgba(0,0,0,0.05)",
              "0px 15px 40px rgba(59, 130, 246, 0.4)",
              "0px 4px 10px rgba(0,0,0,0.05)",
            ],
          }
        : { rotateX: 0, rotateY: 0 };
      overlay = (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnimating ? [0, 1, 0] : 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-blue-500/10 pointer-events-none z-0"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={isAnimating ? { x: "200%" } : { x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 z-20 pointer-events-none mix-blend-overlay"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isAnimating ? { scale: [0, 1.5, 2], opacity: [0, 1, 0] } : {}}
            transition={{ duration: 0.8 }}
            className="absolute top-[48px] left-[32px] w-48 h-48 rounded-full border border-blue-400 pointer-events-none z-10"
          />
        </>
      );
      break;

    case "Transparency":
      duration = 1;
      animateProps = isAnimating
        ? {
            scale: [1, 1.02, 1],
            opacity: [1, 0.6, 1],
            boxShadow: [
              "0px 4px 10px rgba(0,0,0,0.05)",
              "0px 10px 30px rgba(255, 255, 255, 1)",
              "0px 4px 10px rgba(0,0,0,0.05)",
            ],
          }
        : {};
      overlay = (
        <motion.div
          initial={{ x: "-100%" }}
          animate={isAnimating ? { x: "200%" } : { x: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 backdrop-blur-[2px] z-20 pointer-events-none"
        />
      );
      break;

    case "Quality First":
      animateProps = isAnimating
        ? {
            scale: [1, 1.05, 0.95, 1],
            boxShadow: [
              "0px 4px 10px rgba(0,0,0,0.05)",
              "0px 15px 40px rgba(234, 179, 8, 0.4)",
              "0px 4px 10px rgba(0,0,0,0.05)",
            ],
          }
        : {};
      overlay = (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnimating ? [0, 1, 0] : 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-yellow-500/10 pointer-events-none z-0"
          />
          <motion.div
            initial={{ top: "-100%", left: "-100%" }}
            animate={isAnimating ? { top: "200%", left: "200%" } : { top: "-100%", left: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute w-[150%] h-[150%] bg-gradient-to-br from-transparent via-yellow-200/40 to-transparent z-20 pointer-events-none mix-blend-overlay"
          />
        </>
      );
      break;

    case "Customer Success":
      animateProps = isAnimating
        ? {
            scale: [1, 1.04, 1],
            boxShadow: [
              "0px 4px 10px rgba(0,0,0,0.05)",
              "0px 15px 40px rgba(34, 197, 94, 0.3)",
              "0px 4px 10px rgba(0,0,0,0.05)",
            ],
          }
        : {};
      overlay = (
        <>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isAnimating ? { scale: [0, 4], opacity: [0.6, 0] } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-green-400 z-0 pointer-events-none"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={isAnimating ? { x: "200%" } : { x: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-20 pointer-events-none mix-blend-overlay"
          />
        </>
      );
      break;
  }

  return (
    <motion.div
      whileHover={!isAnimating ? { y: -8, scale: 1.02 } : {}}
      onClick={handleClick}
      animate={animateProps}
      transition={{ duration, ease: "easeInOut" }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className="group h-full relative bg-white p-32 md:p-40 rounded-2xl border border-black/5 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:border-black/10 overflow-hidden flex flex-col cursor-pointer"
    >
      {overlay}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="w-48 h-48 rounded-xl bg-[#f4f4f5] flex items-center justify-center mb-24 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300 relative z-10 shrink-0">
        <div className="transition-transform duration-500 ease-out group-hover:scale-110">
          {value.icon}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col pointer-events-none">
        <h3 className="text-xl font-bold tracking-tight text-black mb-16">
          {value.title}
        </h3>
        <p className="text-black/60 leading-relaxed text-sm flex-1">
          {value.desc}
        </p>
      </div>
    </motion.div>
  );
});

export const AboutValues = memo(function AboutValues() {
  return (
    <Section className="bg-white relative z-10 border-y border-black/5 !py-32 md:!py-48 lg:!py-64">
      <Container>
        <Content>
          <div className="col-span-12 mb-64 flex flex-col items-center text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-16">
              Our Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
              Why Choose Us
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={cardEntranceVariants} className="h-full">
                <AnimatedValueCard value={value} />
              </motion.div>
            ))}
          </motion.div>
        </Content>
      </Container>
    </Section>
  );
});
