import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Content } from "./Content";
import { Icons } from "../ui/Icons";
import { AnimatedSocialIcon } from "../ui/AnimatedSocialIcon";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socials: { name: string; href: string; iconName: keyof typeof Icons }[] = [
  { name: "Instagram", href: "https://instagram.com/nravixa", iconName: "Instagram" },
  { name: "Facebook", href: "https://facebook.com/nravixa", iconName: "Facebook" },
  { name: "X", href: "https://x.com/nravixa", iconName: "X" },
  { name: "LinkedIn", href: "https://linkedin.com/company/nravixa", iconName: "LinkedIn" },
  { name: "Reddit", href: "https://reddit.com/user/nravixa", iconName: "Reddit" },
  { name: "GitHub", href: "https://github.com/nravixa", iconName: "GitHub" },
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
                  return (
                    <li key={item.name}>
                      <AnimatedSocialIcon
                        name={item.name}
                        href={item.href}
                        iconName={item.iconName}
                        className="w-24 h-24"
                        containerClassName="p-8 rounded-full bg-white/5 text-white/60 transition-all duration-300 ease-premium"
                      />
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
