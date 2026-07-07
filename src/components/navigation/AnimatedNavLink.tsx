"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "motion/react";
import { useRouter } from "next/navigation";

interface AnimatedNavLinkProps extends React.ComponentProps<typeof motion.a> {
  name: string;
  href: string;
  onClick?: () => void; // Optional custom click handler (e.g., closing menu)
  isActive?: boolean;
  isScrolled?: boolean;
  mobile?: boolean;
}

export const AnimatedNavLink = React.memo(function AnimatedNavLink({
  name,
  href,
  onClick,
  isActive = false,
  isScrolled = false,
  mobile = false,
  variants,
  ...rest
}: AnimatedNavLinkProps) {
  const router = useRouter();
  const controls = useAnimation();
  const pulseControls = useAnimation();
  const [isPlaying, setIsPlaying] = useState(false);

  // Define text colors based on state
  const activeColor = mobile ? "#000000" : isScrolled ? "#000000" : "#ffffff";
  const inactiveColor = mobile ? "#6b7280" : isScrolled ? "#6b7280" : "#9ca3af";
  const hoverColor = mobile ? "#1f2937" : isScrolled ? "#1f2937" : "#e5e7eb";

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isPlaying) return;
    
    setIsPlaying(true);

    // Pulse ring
    pulseControls.set({ scale: 1, opacity: 0.2 });
    pulseControls.start({
      scale: 1.5,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    });

    // Bounce animation
    await controls.start({
      scale: [1, 0.95, 1.05, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });

    setIsPlaying(false);

    // Call optional onClick (like close sidebar)
    if (onClick) {
      onClick();
    }

    // Delay navigation very slightly if needed, but we already awaited controls
    router.push(href);
  };

  const textClass = mobile
    ? `text-4xl tracking-tight ${isActive ? "font-semibold" : "font-medium"}`
    : `text-sm ${isActive ? "font-semibold" : "font-medium"}`;

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      variants={variants}
      {...rest}
      className={`relative inline-flex items-center justify-center cursor-pointer ${textClass}`}
      style={{ WebkitTapHighlightColor: "transparent", color: isActive ? activeColor : inactiveColor }}
      animate={controls}
      whileHover={{
        scale: 1.08,
        y: -3,
        color: hoverColor,
        textShadow: `0px 4px 12px ${mobile ? "rgba(0,0,0,0.1)" : isScrolled ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.2)"}`,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse Ring */}
      <motion.div
        animate={pulseControls}
        initial={{ opacity: 0, scale: 1 }}
        className="absolute inset-0 rounded-lg z-0 pointer-events-none"
        style={{
          boxShadow: `0 0 0 2px ${activeColor}`,
        }}
      />
      
      <span className="relative z-10 transition-colors duration-300">
        {name}
      </span>
    </motion.a>
  );
});
