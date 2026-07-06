"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";

const paragraphVariants: Variants = {
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

export function AboutStory() {
  const paragraphs = [
    "We started with one mission: To build websites that are not only visually stunning but also fast, responsive, and focused on delivering real business results.",
    "The digital landscape was filled with generic templates and slow-loading pages. We knew there was a better way—a way to merge striking aesthetics with cutting-edge engineering.",
    "Today, we partner with startups, local businesses, and growing enterprises worldwide. We don't just write code; we craft digital ecosystems designed to convert, engage, and elevate your brand above the noise."
  ];

  return (
    <Section className="bg-white py-96 md:py-160 relative z-10">
      <Container>
        <Content>
          <div className="col-span-12 md:col-span-8 md:col-start-3 flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-48"
            >
              Our Story
            </motion.span>
            
            <div className="flex flex-col gap-48 text-2xl md:text-4xl font-medium tracking-tight text-black leading-snug">
              {paragraphs.map((text, index) => (
                <motion.p
                  key={index}
                  variants={paragraphVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20%" }}
                  className={index === 0 ? "text-black" : "text-black/60 hover:text-black transition-colors duration-500"}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </Content>
      </Container>
    </Section>
  );
}
