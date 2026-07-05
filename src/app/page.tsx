import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";
import { Services } from "@/components/sections/Services";
import { Concepts } from "@/components/sections/Concepts";
import { Contact } from "@/components/sections/Contact";
import { HeroVideo } from "@/components/ui/HeroVideo";

export default function Home() {
  return (
    <>
      <Section id="hero" className="min-h-screen flex items-center py-96 md:py-160 relative overflow-hidden">
        {/* Background Video */}
        <HeroVideo />
        {/* Subtle dark overlay for readability if needed */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        <Container className="relative z-10">
          <Content>
            {/* 
              Editorial layout:
              - Left aligned with massive typography.
              - Utilizing 10 out of 12 columns on large screens to create negative space on the right.
            */}
            <div className="col-span-12 lg:col-span-10 flex flex-col justify-center text-white">
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white mb-32 max-w-[1000px]">
                Helping Businesses Grow Through Modern Web Experiences
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80 max-w-[700px] mb-48">
                Premium websites crafted to elevate brands, strengthen digital presence, and help businesses grow.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-16">
                <a
                  href="https://wa.me/917420008485?text=Hi!%20%E2%9C%A8%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20building%20a%20creative%2C%20modern%2C%20and%20responsive%20website.%20I'd%20love%20to%20discuss%20my%20project.%20Please%20get%20in%20touch%20with%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-32 py-16 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-colors duration-300 ease-premium inline-flex items-center justify-center gap-8 group"
                >
                  <span>WhatsApp Us</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 ease-premium group-hover:translate-x-4"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#services"
                  className="px-32 py-16 bg-transparent text-white border border-white/30 rounded-full font-medium text-lg hover:bg-white/10 hover:border-white/50 transition-colors duration-300 ease-premium inline-flex items-center justify-center text-center w-full sm:w-auto"
                >
                  Explore Work
                </a>
              </div>
            </div>
          </Content>
        </Container>
      </Section>
      <Services />
      <Concepts />
      <Contact />
    </>
  );
}
