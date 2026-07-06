"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 12, suffix: "", label: "Industries Served" },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const statItem: Variants = {
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

export function AboutStats() {
  return (
    <Section className="bg-white py-96 md:py-160 relative z-10">
      <Container>
        <Content>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-48 text-center md:text-left"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={statItem} className="flex flex-col">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-16 flex items-center justify-center md:justify-start text-black">
                  <CountUp to={stat.value} duration={2} />
                  <span>{stat.suffix}</span>
                </span>
                <span className="text-black/60 font-medium tracking-wide uppercase text-xs md:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </Content>
      </Container>
    </Section>
  );
}
