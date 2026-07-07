"use client";

import React from "react";
import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  desc: string;
  image: string;
}

interface AnimatedProjectListProps {
  projects: Project[];
}

export function AnimatedProjectList({ projects }: AnimatedProjectListProps) {
  // Animation variants
  const getVariants = (index: number) => {
    // 0: Left, 1: Right, 2: Left, 3: Right, 4: Bottom
    if (index === 4) {
      return {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
    }
    
    const isLeft = index % 2 === 0;
    return {
      hidden: { opacity: 0, x: isLeft ? -100 : 100 },
      visible: { opacity: 1, x: 0 },
    };
  };

  return (
    <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-32">
      {projects.map((project, index) => {
        // Center the 5th card in a 2-column grid
        const isLastCard = index === 4;
        
        return (
          <motion.div
            key={project.title}
            className={isLastCard ? "md:col-span-2 flex justify-center" : ""}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1], // Custom premium ease-out
              delay: index * 0.2, // Stagger 200ms
            }}
            variants={getVariants(index)}
          >
            <div className={isLastCard ? "w-full md:w-1/2" : "w-full"}>
              <ProjectCard
                title={project.title}
                description={project.desc}
                image={project.image}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
