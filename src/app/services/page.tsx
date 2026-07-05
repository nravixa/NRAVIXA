import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";
import { ExpandableCardText } from "@/components/ui/ExpandableCardText";
import { ScrollVelocity } from "@/components/ui/ScrollVelocity";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | NRAVIXA",
  description: "Digital Solutions That Help Businesses Grow. From stunning websites to complete digital solutions.",
};

const offerings = [
  {
    title: "Website Design",
    desc: "Beautiful, modern, and user-friendly website designs that create a strong first impression and improve user experience.",
  },
  {
    title: "Website Development",
    desc: "Responsive, high-performance websites built using the latest technologies with clean, scalable code.",
  },
  {
    title: "E-Commerce Development",
    desc: "Launch your online store with secure payment integration, inventory management, and an exceptional shopping experience.",
  },
  {
    title: "Responsive Design",
    desc: "Every website is optimized for desktops, tablets, and smartphones to ensure a seamless experience across all devices.",
  },
  {
    title: "Performance Optimization",
    desc: "Improve loading speed, Core Web Vitals, SEO performance, and overall user satisfaction.",
  },
  {
    title: "SEO Optimization",
    desc: "Build websites that search engines love with optimized structure, metadata, and performance.",
  },
  {
    title: "UI/UX Design",
    desc: "Design experiences that are intuitive, engaging, and focused on customer conversion.",
  },
  {
    title: "Website Maintenance",
    desc: "Regular updates, backups, bug fixes, security monitoring, and ongoing technical support.",
  },
];

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
      <Section className="bg-black text-white pt-160 pb-96 md:pt-200 md:pb-160">
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

      {/* What We Offer Section */}
      <Section className="bg-white py-96 md:py-160">
        <Container>
          <Content>
            <div className="col-span-12 mb-64 flex flex-col">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-16">
                Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
                What We Offer
              </h2>
            </div>
            
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
              {offerings.map((offer, index) => (
                <div
                  key={offer.title}
                  className="bg-[#fffaf3] p-48 transition-all duration-300 ease-premium hover:-translate-y-4 hover:shadow-xl group"
                >
                  <span className="text-sm font-medium text-black/40 group-hover:text-black/60 transition-colors duration-300 mb-32 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-black mb-16">
                    {offer.title}
                  </h3>
                  <ExpandableCardText>
                    <p className="text-black/60 leading-relaxed">
                      {offer.desc}
                    </p>
                  </ExpandableCardText>
                </div>
              ))}
            </div>
          </Content>
        </Container>
      </Section>

      {/* Why Choose Us & Technologies Section */}
      <Section className="bg-[#111] text-white py-96 md:py-160">
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
