"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Content } from "../layout/Content";
import brewCafeImg from "../images/brew-cafe.jpeg";
import modernHotelImg from "../images/modern-hotel.jpeg";
import ashqImg from "../images/Ashq.jpeg";

const concepts = [
  {
    title: "Brew & Bloom",
    category: "Concept Project",
    description: "An elegant, highly immersive digital experience designed for high-end boutique coffee shops.",
    alignLeft: true,
    link: "https://brew-bloom-lime.vercel.app/",
    image: brewCafeImg.src,
  },
  {
    title: "Modern Restaurant Concept",
    category: "Concept Project",
    description: "A dark-mode, editorial-style reservation and menu platform for Michelin-star dining.",
    alignLeft: false,
    link: "#",
    image: modernHotelImg.src,
  },
  {
    title: "Ashq",
    category: "Concept Project",
    description: "A conversion-focused, typography-driven marketing page for modern tech startups.",
    alignLeft: true,
    link: "#",
    image: ashqImg.src,
  },
];

const AnimatedConceptImage = React.memo(function AnimatedConceptImage({ image, title }: { image: string, title: string }) {
  const [animationKey, setAnimationKey] = React.useState(0);

  const handleClick = () => {
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center bg-black/5 overflow-hidden cursor-pointer" 
      onClick={handleClick}
    >
      <motion.div 
        key={animationKey}
        // If it's the initial render (key 0), start at scale 1. 
        // If clicked (key > 0), play the scale animation.
        initial={{ scale: 1 }}
        animate={animationKey > 0 ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ 
          duration: 1.6, 
          ease: [0.16, 1, 0.3, 1], // Matches ease-premium
          times: [0, 0.5, 1]
        }}
        style={{ willChange: "transform" }}
        className="w-full h-full relative"
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        ) : (
          <span className="text-black/20 font-medium tracking-widest text-sm uppercase relative z-10 flex h-full items-center justify-center">
            Image Placeholder
          </span>
        )}
      </motion.div>
    </div>
  );
});

export const Concepts = React.memo(function Concepts() {
  return (
    <Section id="concepts" className="bg-white !pt-0">
      <Container>
        <Content>
          <div className="col-span-12 mb-64">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black mb-16">
              Selected Concepts
            </h2>
            <p className="text-lg text-black/60 max-w-[600px]">
              A collection of purely conceptual projects exploring interaction, typography, and premium web design.
            </p>
          </div>

          <div className="col-span-12 flex flex-col gap-96 md:gap-160">
            {concepts.map((concept, index) => (
              <div
                key={concept.title}
                className={`flex flex-col gap-32 md:gap-64 items-center group ${
                  concept.alignLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Visual Placeholder Block */}
                <div className="w-full md:w-2/3 aspect-[4/3] bg-[#f8f8f8] border border-black/5 overflow-hidden relative cursor-pointer">
                  <AnimatedConceptImage image={concept.image} title={concept.title} />
                </div>

                {/* Content Block */}
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-16">
                    {concept.category} &mdash; 0{index + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-24">
                    {concept.title}
                  </h3>
                  <p className="text-lg text-black/60 mb-48 leading-relaxed">
                    {concept.description}
                  </p>
                  
                  <a
                    href={concept.link}
                    target={concept.link !== "#" ? "_blank" : undefined}
                    rel={concept.link !== "#" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-16 font-medium text-black group/btn"
                  >
                    <span className="relative overflow-hidden">
                      <span className="block transition-transform duration-300 ease-premium group-hover/btn:-translate-y-full">
                        View Concept
                      </span>
                      <span className="absolute inset-0 block transition-transform duration-300 ease-premium translate-y-full group-hover/btn:translate-y-0">
                        View Concept
                      </span>
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 ease-premium group-hover/btn:translate-x-4"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L19"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Content>
      </Container>
    </Section>
  );
});
