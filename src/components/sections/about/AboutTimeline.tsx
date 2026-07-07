"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    desc: "Founded with a vision to redefine digital experiences for modern brands.",
  },
  {
    year: "2021",
    title: "First Major Launch",
    desc: "Successfully delivered our first enterprise-level e-commerce platform.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    desc: "Grew our team of engineers and designers to tackle complex web applications.",
  },
  {
    year: "2024",
    title: "Global Reach",
    desc: "Partnered with international clients across 12 different industries.",
  },
];

export function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section className="bg-black text-white relative z-10 overflow-hidden">
      <Container>
        <Content>
          <div className="col-span-12 mb-64 text-center flex flex-col items-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-16">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
              Company Timeline
            </h2>
          </div>

          <div ref={containerRef} className="col-span-12 md:col-span-8 md:col-start-3 relative">
            {/* The Background Line */}
            <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />
            
            {/* The Animated Line */}
            <motion.div 
              className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white origin-top"
              style={{ scaleY }}
            />

            <div className="flex flex-col gap-64 md:gap-96 relative z-10 py-32">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? "md:justify-start" : "md:justify-end"} relative pl-80 md:pl-0`}
                  >
                    {/* Marker */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-[18px] h-[18px] rounded-full bg-black border-4 border-white z-20 top-[6px] md:top-auto" />
                    
                    {/* Content */}
                    <div className={`md:w-1/2 flex flex-col ${isEven ? "md:pr-64 md:text-right" : "md:pl-64 md:text-left"}`}>
                      <span className="text-4xl font-bold tracking-tighter text-white/20 mb-8 font-mono">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight mb-16 text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Content>
      </Container>
    </Section>
  );
}
