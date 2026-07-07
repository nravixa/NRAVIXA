"use client";

import React from "react";
import { NavLinks } from "./NavLinks";
import { Icons } from "../ui/Icons";
import { AnimatedSocialIcon } from "../ui/AnimatedSocialIcon";
import { motion, AnimatePresence, Variants } from "motion/react";

interface SidebarProps {
  isOpen: boolean;
  onClose: (href?: string) => void;
}

const socials: { name: string; href: string; iconName: keyof typeof Icons }[] = [
  { name: "Instagram", href: "https://instagram.com/nravixa", iconName: "Instagram" },
  { name: "Facebook", href: "https://facebook.com/nravixa", iconName: "Facebook" },
  { name: "X", href: "https://x.com/nravixa", iconName: "X" },
  { name: "LinkedIn", href: "https://linkedin.com/company/nravixa", iconName: "LinkedIn" },
  { name: "Reddit", href: "https://reddit.com/user/nravixa", iconName: "Reddit" },
  { name: "GitHub", href: "https://github.com/nravixa", iconName: "GitHub" },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2, // wait for drawer to start opening
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => onClose()}
          />
          
          {/* Sidebar Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // ease-premium equivalent
            className="fixed inset-y-0 left-0 w-full z-50 bg-white shadow-2xl flex flex-col justify-between pt-[100px] md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => onClose()}
              className="absolute top-[24px] right-[24px] p-8 bg-[#f8f8f8] rounded-full text-black hover:bg-black/10 transition-colors duration-300 ease-premium focus:outline-none"
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Stagger Container */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="px-32 w-full flex flex-col items-center h-full justify-between pb-24"
            >
              <nav className="flex flex-col items-center gap-32 text-center w-full mt-32">
                <NavLinks mobile onClick={onClose} variants={staggerItem} />
              </nav>

              {/* Social Icons at the bottom (part of the same stagger) */}
              <div className="w-full flex justify-evenly items-center mt-auto">
                {socials.map((item) => {
                  return (
                    <AnimatedSocialIcon
                      key={item.name}
                      name={item.name}
                      href={item.href}
                      iconName={item.iconName}
                      className="w-24 h-24"
                      containerClassName="text-black transition-all duration-300 ease-premium"
                      variants={staggerItem}
                    />
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
