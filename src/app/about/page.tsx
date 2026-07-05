import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | NRAVIXA",
  description: "We Create Websites That Grow Businesses. We're passionate about designing and developing digital experiences.",
};

const values = [
  "Innovation",
  "Transparency",
  "Quality",
  "Creativity",
  "Customer First",
  "Continuous Learning",
];

const trustFactors = [
  "Personalized Solutions",
  "Transparent Communication",
  "Modern Technologies",
  "On-Time Delivery",
  "Dedicated Support",
  "Performance-Focused Development",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-black text-white pt-160 pb-96 md:pt-200 md:pb-160">
        <Container>
          <Content>
            <div className="col-span-12 md:col-span-10 flex flex-col justify-center">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-32">
                About Us
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-32 max-w-[900px]">
                We Create Websites That Grow Businesses
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-[700px] leading-relaxed">
                We're passionate about designing and developing digital experiences that help businesses establish a strong online presence.
              </p>
            </div>
          </Content>
        </Container>
      </Section>

      {/* Our Story Section */}
      <Section className="bg-white py-96 md:py-160">
        <Container>
          <Content>
            <div className="col-span-12 md:col-span-8 flex flex-col">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-32">
                Our Story
              </span>
              <p className="text-2xl md:text-3xl font-medium tracking-tight text-black leading-snug mb-32">
                We started with one mission: To build websites that are not only visually stunning but also fast, responsive, and focused on delivering real business results.
              </p>
              <p className="text-lg text-black/60 leading-relaxed max-w-[600px]">
                Whether you're a startup, local business, or growing company, we create solutions tailored to your goals.
              </p>
            </div>
          </Content>
        </Container>
      </Section>

      {/* Mission & Vision Section */}
      <Section className="bg-[#f9f9f9] py-96 md:py-160 border-y border-black/5">
        <Container>
          <Content>
            <div className="col-span-12 md:col-span-6 flex flex-col mb-64 md:mb-0 md:pr-48">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-16 block">
                Our Mission
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-24">
                To empower businesses with innovative digital solutions that increase visibility, generate leads, and create lasting customer experiences.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col md:pl-48 md:border-l border-black/10">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-16 block">
                Our Vision
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-24">
                To become a trusted digital partner for businesses worldwide by delivering high-quality websites and exceptional customer service.
              </h2>
            </div>
          </Content>
        </Container>
      </Section>

      {/* Core Values & Trust Section */}
      <Section className="bg-black text-white py-96 md:py-160">
        <Container>
          <Content>
            <div className="col-span-12 md:col-span-6 mb-96 md:mb-0">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-16 block">
                Our Principles
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-48">
                Our Values
              </h2>
              <div className="grid grid-cols-2 gap-32">
                {values.map((value) => (
                  <div key={value} className="flex items-center gap-16">
                    <div className="w-8 h-8 rounded-full bg-white" />
                    <span className="text-lg font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-16 block">
                The NRAVIXA Difference
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-48">
                Why Businesses Trust Us
              </h2>
              <ul className="flex flex-col gap-24">
                {trustFactors.map((factor) => (
                  <li key={factor} className="flex items-center gap-16">
                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-lg text-white/80">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Content>
        </Container>
      </Section>
    </>
  );
}
