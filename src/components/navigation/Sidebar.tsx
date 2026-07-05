"use client";

import React from "react";
import { NavLinks } from "./NavLinks";
import { Icons } from "../ui/Icons";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const socials = [
  { name: "Instagram", href: "https://instagram.com", icon: Icons.Instagram },
  { name: "GitHub", href: "https://github.com", icon: Icons.GitHub },
  { name: "X", href: "https://x.com", icon: Icons.X },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Icons.LinkedIn },
  { name: "Reddit", href: "https://reddit.com", icon: Icons.Reddit },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay to close sidebar when clicking outside */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      
      {/* Sidebar Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-full z-50 bg-white shadow-2xl flex flex-col justify-between pt-[100px] transition-transform duration-500 ease-premium md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-32 w-full flex flex-col items-center">
          <nav className="flex flex-col items-center gap-32 text-center w-full">
            <NavLinks mobile onClick={onClose} />
            <a
              href="https://wa.me/917420008485?text=Hi!%20%F0%9F%91%8B%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20building%20a%20creative%2C%20modern%2C%20and%20responsive%20website.%20I'd%20love%20to%20discuss%20my%20project.%20Please%20get%20in%20touch%20with%20me."
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="mt-16 w-full text-center px-32 py-16 bg-black text-white text-lg font-medium rounded-full hover:bg-black/80 transition-colors duration-300 ease-premium"
            >
              Start Project
            </a>
          </nav>
        </div>

        {/* Social Icons at the bottom */}
        <div className="w-full bg-[#f8f8f8] border-t border-black/5 py-24 flex justify-evenly items-center mt-auto">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="text-black hover:text-black/60 transition-all duration-300 ease-premium hover:-translate-y-2"
              >
                <Icon className="w-24 h-24" />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
