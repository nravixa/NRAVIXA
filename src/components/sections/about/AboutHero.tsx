"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export function AboutHero() {
  const headlineWords = "We Create Digital Experiences That Accelerate Growth".split(" ");

  return (
    <Section className="relative bg-black text-white pt-160 pb-96 md:pt-240 md:pb-160 overflow-hidden">
      {/* Subtle Hero Glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-gradient-to-b from-white/10 to-transparent blur-3xl rounded-full z-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <Container className="relative z-10">
        <Content>
          <div className="col-span-12 flex flex-col justify-center items-center text-center">
            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-48 max-w-[1000px] flex flex-wrap justify-center gap-x-[0.3em] gap-y-8"
            >
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={headlineVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textFadeUp}
              className="max-w-[700px]"
            >
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
                We&apos;re a team of passionate strategists, designers, and engineers dedicated to building premium websites and applications that define the modern web.
              </p>
            </motion.div>
          </div>
        </Content>
      </Container>
    </Section>
  );
}
