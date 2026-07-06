import type { Metadata } from "next";
import { AnimatedBackground } from "@/components/sections/about/AnimatedBackground";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutMissionVision } from "@/components/sections/about/AboutMissionVision";
import { AboutStats } from "@/components/sections/about/AboutStats";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { ScrollVelocity } from "@/components/ui/ScrollVelocity";

export const metadata: Metadata = {
  title: "About | NRAVIXA",
  description: "We Create Digital Experiences That Accelerate Growth. Learn about our mission, vision, and values.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Global Animated Background for the About Page */}
      <AnimatedBackground />

      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutStats />
      
      {/* Floating Brand Marquee */}
      <div className="py-64 md:py-96 bg-white relative z-10 border-y border-black/5 overflow-hidden">
        <ScrollVelocity
          texts={["AI • Strategy • Design • Engineering • Automation • Innovation • Growth • "]}
          velocity={0.3}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-black/10 uppercase"
        />
      </div>

      <AboutValues />
    </main>
  );
}
