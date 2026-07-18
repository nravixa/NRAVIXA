import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";
import { BentoServices } from "@/components/sections/BentoServices";
import { ScrollVelocity } from "@/components/ui/ScrollVelocity";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | NRAVIXA",
  description: "Digital Solutions That Help Businesses Grow. From stunning websites to complete digital solutions.",
};

const features = [
  "Custom Design",
  "Fast Delivery",
  "Mobile Friendly",
  "SEO Ready",
  "Secure Development",
  "Affordable Pricing",
  "Modern Technologies",
  "Lifetime Support Guidance",
];



export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="hero" className="bg-black text-white">
        <Container>
          <Content>
            <div className="col-span-12 md:col-span-10 flex flex-col justify-center">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-32">
                Our Services
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-32 max-w-[900px]">
                Digital Solutions That Help Businesses Grow
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-[700px] mb-48 leading-relaxed">
                From stunning websites to complete digital solutions, we build products that are fast, modern, scalable, and designed to convert visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-16">
                <a
                  href="/contact"
                  className="px-32 py-16 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-all duration-300 ease-premium inline-flex items-center justify-center"
                >
                  Get a Free Quote
                </a>
                <Link
                  href="/work"
                  className="px-32 py-16 bg-transparent text-white border border-white/30 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 ease-premium inline-flex items-center justify-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </Content>
        </Container>
      </Section>

      {/* What We Offer Section - Redesigned premium Bento Grid */}
      <BentoServices />

      {/* Why Choose Us & Technologies Section */}
      <Section className="bg-[#111] text-white">
        <Container>
          <Content>
            <div className="col-span-12 flex flex-col items-center text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-16 block">
                The Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-48">
                Why Choose Us?
              </h2>
              <div className="w-full mt-32">
                <ScrollVelocity 
                  texts={[
                    features.slice(0, 4).join("  •  "),
                    features.slice(4).join("  •  ")
                  ]} 
                  className="text-white/80 px-32"
                  velocity={80}
                  numCopies={4}
                />
              </div>
            </div>
          </Content>
        </Container>
      </Section>
    </>
  );
}
