"use client";

import { motion } from "motion/react";
import React from "react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-white">
      {/* Circle 1 */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-300/10 blur-[80px]"
        style={{ willChange: "transform" }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Circle 2 */}
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-300/10 blur-[90px]"
        style={{ willChange: "transform" }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Circle 3 */}
      <motion.div
        className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-teal-200/10 blur-[100px]"
        style={{ willChange: "transform" }}
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
}
