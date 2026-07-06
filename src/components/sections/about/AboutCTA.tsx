"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

export function AboutCTA() {
  return (
    <Section className="bg-white py-96 md:py-160 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-gradient-to-b from-blue-100/50 to-purple-100/50 blur-[120px] rounded-full pointer-events-none z-0" />

      <Container>
        <Content>
          <div className="col-span-12 flex flex-col items-center text-center relative z-10">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-32 max-w-[800px] leading-[1.1]"
            >
              Ready to elevate your digital presence?
            </motion.h2>
            
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-black/60 mb-48 max-w-[600px] leading-relaxed"
            >
              Let&apos;s collaborate to build something extraordinary. Our team is ready to turn your vision into reality.
            </motion.p>
            
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact" className="group relative inline-flex items-center justify-center">
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-black rounded-full blur-md opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 ease-out" />
                
                {/* Button */}
                <div className="relative px-48 py-20 bg-black text-white rounded-full font-medium tracking-wide flex items-center gap-12 group-hover:bg-[#111] group-hover:-translate-y-1 transition-all duration-300 ease-out">
                  Start a Project
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-4"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </Content>
      </Container>
    </Section>
  );
}
