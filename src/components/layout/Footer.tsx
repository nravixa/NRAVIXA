import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Content } from "./Content";
import { Icons } from "../ui/Icons";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "Instagram", href: "https://instagram.com", icon: Icons.Instagram },
  { name: "GitHub", href: "https://github.com", icon: Icons.GitHub },
  { name: "X", href: "https://x.com", icon: Icons.X },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Icons.LinkedIn },
  { name: "Reddit", href: "https://reddit.com", icon: Icons.Reddit },
];

export function Footer() {
  return (
    <footer className="bg-black text-white py-24 md:py-32">
      <Container>
        <Content>
          {/* Column 1: Brand */}
          <div className="col-span-12 flex flex-col items-center mb-24">
            <h2 className="text-4xl font-bold tracking-tighter mb-24 text-center">
              NRAVIXA
            </h2>
          </div>

          {/* Copyright Row */}
          <div className="col-span-12 pt-24 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-center md:text-left text-white/40 text-sm">
              &copy; {new Date().getFullYear()} NRAVIXA. All rights reserved.
            </div>
            
            {/* Socials Centered */}
            <div className="flex-1 flex justify-center my-16 md:my-0">
              <ul className="flex flex-row gap-24">
                {socials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-12 text-white/60 hover:text-white transition-all duration-300 ease-premium"
                        aria-label={item.name}
                      >
                        <span className="p-8 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300 ease-premium group-hover:scale-110">
                          <Icon className="w-24 h-24" />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex-1 text-center md:text-right text-white/40 text-sm">
              Crafted with precision.
            </div>
          </div>
        </Content>
      </Container>
    </footer>
  );
}
