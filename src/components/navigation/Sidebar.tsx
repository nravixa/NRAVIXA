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
  { name: "Facebook", href: "https://facebook.com", icon: Icons.Facebook },
  { name: "GitHub", href: "https://github.com", icon: Icons.GitHub },
  { name: "X", href: "https://x.com", icon: Icons.X },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Icons.LinkedIn },
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
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[24px] right-[24px] p-8 bg-[#f8f8f8] rounded-full text-black hover:bg-black/10 transition-colors duration-300 ease-premium focus:outline-none"
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="px-32 w-full flex flex-col items-center">
          <nav className="flex flex-col items-center gap-32 text-center w-full">
            <NavLinks mobile onClick={onClose} />
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
