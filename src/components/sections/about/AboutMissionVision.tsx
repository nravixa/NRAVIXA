"use client";

import React, { useState } from "react";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

function MissionCard() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={!isAnimating ? { y: -8, scale: 1.02 } : {}}
      onClick={handleClick}
      animate={
        isAnimating
          ? {
              scale: [1, 1.03, 1],
              rotateX: [0, 6, -4, 0],
              rotateY: [0, -6, 4, 0],
              boxShadow: [
                "0px 4px 10px rgba(0,0,0,0.05)",
                "0px 20px 50px rgba(59, 130, 246, 0.4)",
                "0px 4px 10px rgba(0,0,0,0.05)",
              ],
            }
          : { rotateX: 0, rotateY: 0 }
      }
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className="group flex flex-col bg-white p-48 md:p-64 rounded-3xl border border-black/5 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out relative overflow-hidden cursor-pointer w-full"
    >
      {/* Lightning Flash Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? [0, 0.8, 0, 0.5, 0] : 0 }}
        transition={{ duration: 0.6, times: [0, 0.15, 0.3, 0.45, 1] }}
        className="absolute inset-0 bg-blue-500 mix-blend-overlay pointer-events-none z-20"
      />

      {/* Hover Glow Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <motion.div
        animate={
          isAnimating
            ? {
                backgroundColor: ["#f4f4f5", "#eff6ff", "#f4f4f5"],
                boxShadow: [
                  "0px 0px 0px rgba(59,130,246,0)",
                  "0px 0px 30px rgba(59,130,246,0.8)",
                  "0px 0px 0px rgba(59,130,246,0)",
                ],
              }
            : {}
        }
        transition={{ duration: 1.2 }}
        className="w-64 h-64 rounded-full bg-[#f4f4f5] flex items-center justify-center mb-32 shrink-0 group-hover:bg-blue-50 transition-colors duration-500 relative z-30"
      >
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={
            isAnimating
              ? {
                  scale: [1, 1.4, 0.9, 1.2, 1],
                  filter: [
                    "drop-shadow(0px 0px 0px rgba(59,130,246,0))",
                    "drop-shadow(0px 0px 10px rgba(59,130,246,1))",
                    "drop-shadow(0px 0px 0px rgba(59,130,246,0))",
                  ],
                }
              : {}
          }
          transition={{ duration: 1.2, times: [0, 0.2, 0.4, 0.6, 1] }}
          className="text-black transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:text-blue-600"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </motion.svg>
      </motion.div>
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-16 block relative z-10">
        Our Mission
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-24 relative z-10 leading-snug">
        To empower businesses with innovative digital solutions that increase visibility, generate leads, and create lasting customer experiences.
      </h2>
    </motion.div>
  );
}

function VisionCard() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
      whileHover={!isAnimating ? { y: -8, scale: 1.02 } : {}}
      onClick={handleClick}
      animate={
        isAnimating
          ? {
              scale: [1, 1.03, 1],
              rotateX: [0, -5, 5, 0],
              rotateY: [0, 7, -5, 0],
              boxShadow: [
                "0px 4px 10px rgba(0,0,0,0.05)",
                "0px 20px 50px rgba(168, 85, 247, 0.4)",
                "0px 4px 10px rgba(0,0,0,0.05)",
              ],
            }
          : { rotateX: 0, rotateY: 0 }
      }
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className="group flex flex-col bg-white p-48 md:p-64 rounded-3xl border border-black/5 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out relative overflow-hidden cursor-pointer w-full"
    >
      {/* Light Shimmer Sweep */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={isAnimating ? { x: "200%", opacity: [0, 1, 1, 0] } : { x: "-100%", opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 z-20 pointer-events-none mix-blend-overlay"
      />

      {/* Soft Glow overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? [0, 0.4, 0] : 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-purple-500/20 pointer-events-none z-10"
      />

      {/* Hover Glow Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <motion.div
        animate={
          isAnimating
            ? {
                backgroundColor: ["#f4f4f5", "#faf5ff", "#f4f4f5"],
              }
            : {}
        }
        transition={{ duration: 1.2 }}
        className="w-64 h-64 rounded-full bg-[#f4f4f5] flex items-center justify-center mb-32 shrink-0 group-hover:bg-purple-50 transition-colors duration-500 relative z-30"
      >
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={
            isAnimating
              ? {
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 1.2 }}
          className="text-black transition-transform duration-500 ease-out group-hover:scale-110 group-hover:text-purple-600 origin-center"
        >
          {/* Outer Eye - Blinks by scaling Y */}
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isAnimating ? { scaleY: [1, 0.1, 1, 1, 0.1, 1] } : {}}
            transition={{ duration: 1.2, times: [0, 0.2, 0.4, 0.7, 0.9, 1] }}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            style={{ originY: "12px" }}
          />
        </motion.svg>
      </motion.div>
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-16 block relative z-10">
        Our Vision
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-24 relative z-10 leading-snug">
        To become a trusted digital partner for businesses worldwide by delivering high-quality websites and exceptional customer service.
      </h2>
    </motion.div>
  );
}

export function AboutMissionVision() {
  return (
    <Section className="bg-[#f9f9f9] relative z-10 border-y border-black/5 overflow-hidden !py-32 md:!py-48 lg:!py-64">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <Content>
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-32 relative z-10">
            <MissionCard />
            <VisionCard />
          </div>
        </Content>
      </Container>
    </Section>
  );
}
