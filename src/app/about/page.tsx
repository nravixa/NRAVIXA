import type { Metadata } from "next";
import { AnimatedBackground } from "@/components/sections/about/AnimatedBackground";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutMissionVision } from "@/components/sections/about/AboutMissionVision";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "About | NRAVIXA",
  description: "We Create Digital Experiences That Accelerate Growth. Learn about our mission, vision, and values.",
};

export default function AboutPage() {
  const marqueeText = "AI • Strategy • Design • Engineering • Automation • Innovation • Growth • ";
  
  return (
    <main className="relative min-h-screen bg-white">
      {/* Global Animated Background for the About Page */}
      <AnimatedBackground />

      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      
      {/* Floating Brand Marquee */}
      <Section className="bg-white relative z-10 border-y border-black/5 overflow-hidden !py-16 md:!py-24 lg:!py-32">
        <div className="relative flex overflow-hidden group">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes infinite-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 25s linear infinite;
              will-change: transform;
            }
          `}} />
          <div className="flex whitespace-nowrap animate-infinite-scroll w-max">
            {/* Render exactly 4 copies for perfect seamless looping on ultrawide monitors */}
            {[...Array(4)].map((_, i) => (
              <span 
                key={i} 
                className="text-4xl md:text-6xl font-bold tracking-tighter text-black/10 uppercase pr-8"
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <AboutValues />
    </main>
  );
}
