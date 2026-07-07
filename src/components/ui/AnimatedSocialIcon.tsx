"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "motion/react";
import { Icons } from "./Icons";

const BRAND_COLORS: Record<string, string> = {
  Instagram: "#E1306C",
  Facebook: "#1877F2",
  X: "#1DA1F2", // Vibrant blue for visibility
  LinkedIn: "#0A66C2",
  Reddit: "#FF4500",
  GitHub: "#A0A0A0", // Neutral grey for dark/light contrast
};

interface AnimatedSocialIconProps extends React.ComponentProps<typeof motion.a> {
  name: string;
  href: string;
  iconName: keyof typeof Icons;
  className?: string; // e.g. w-24 h-24
  containerClassName?: string;
}

export const AnimatedSocialIcon = React.memo(function AnimatedSocialIcon({
  name,
  href,
  iconName,
  className = "w-24 h-24",
  containerClassName = "",
  variants,
  ...rest
}: AnimatedSocialIconProps) {
  const Icon = Icons[iconName];
  const controls = useAnimation();
  const pulseControls = useAnimation();
  const [isPlaying, setIsPlaying] = useState(false);
  const brandColor = BRAND_COLORS[name] || "#1DA1F2"; // Default fallback

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isPlaying) return;
    
    setIsPlaying(true);

    // Trigger pulse ring
    pulseControls.set({ scale: 1, opacity: 0.5 });
    pulseControls.start({
      scale: 1.8,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    });

    // Trigger bounce and rotate animation
    await controls.start({
      scale: [1, 0.95, 1.2, 1],
      rotate: [0, -10, 10, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    setIsPlaying(false);
    
    // Open link after animation completes
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      variants={variants}
      {...rest}
      aria-label={name}
      className={`relative inline-flex items-center justify-center ${containerClassName}`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Pulse Ring (absolute behind the icon) */}
      <motion.div
        animate={pulseControls}
        initial={{ opacity: 0, scale: 1 }}
        className="absolute inset-0 rounded-full z-0 pointer-events-none"
        style={{
          boxShadow: `0 0 0 2px ${brandColor}`,
        }}
      />

      {/* Actual Icon Wrapper */}
      <motion.div
        animate={controls}
        whileHover={{
          scale: 1.15,
          y: -5,
          rotate: [0, 8, -4, 0], // Small wiggle returning to 0
          color: brandColor,
          filter: `drop-shadow(0px 4px 8px ${brandColor})`,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.95 }}
        style={{ color: "inherit", willChange: "transform, filter, color" }}
        className="relative z-10 flex items-center justify-center transition-colors duration-300"
      >
        <Icon className={className} />
      </motion.div>
    </motion.a>
  );
});
