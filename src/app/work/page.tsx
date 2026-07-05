import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Content } from "@/components/layout/Content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | NRAVIXA",
  description: "Turning Ideas into Digital Experiences. Every project reflects our commitment to quality.",
};

const projects = [
  {
    title: "Corporate Websites",
    desc: "Professional business websites designed to establish credibility and generate leads.",
  },
  {
    title: "Portfolio Websites",
    desc: "Personal branding websites for developers, designers, photographers, and professionals.",
  },
  {
    title: "E-Commerce Stores",
    desc: "Secure online shopping platforms with payment integration and product management.",
  },
  {
    title: "Startup Landing Pages",
    desc: "High-converting landing pages built to launch products and attract customers.",
  },
  {
    title: "Custom Web Applications",
    desc: "Tailored solutions built specifically around your business workflow and requirements.",
  },
];

const processSteps = [
  { step: "1. Discovery", desc: "Understanding your business goals and requirements." },
  { step: "2. Planning", desc: "Creating the project roadmap and wireframes." },
  { step: "3. Design", desc: "Crafting visually appealing UI/UX." },
  { step: "4. Development", desc: "Building scalable and responsive solutions." },
  { step: "5. Testing", desc: "Ensuring quality, performance, and security." },
  { step: "6. Launch", desc: "Deploying your project with ongoing support." },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "100%", label: "Responsive Websites" },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-black text-white pt-160 pb-96 md:pt-200 md:pb-160">
        <Container>
          <Content>
            <div className="col-span-12 md:col-span-10 flex flex-col justify-center">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-32">
                Our Work
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-32 max-w-[900px]">
                Turning Ideas into Digital Experiences
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-[600px] leading-relaxed">
                Every project reflects our commitment to quality, creativity, and performance.
              </p>
            </div>
          </Content>
        </Container>
      </Section>

      {/* Featured Projects Section */}
      <Section className="bg-white py-96 md:py-160">
        <Container>
          <Content>
            <div className="col-span-12 mb-64 flex flex-col">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-16">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
                Featured Projects
              </h2>
            </div>
            
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group bg-white p-48 border border-black/10 transition-all duration-300 ease-premium hover:border-black hover:-translate-y-4 hover:shadow-xl flex flex-col justify-between"
                >
                  <div className="w-12 h-12 bg-black rounded-full mb-64 transition-transform duration-300 group-hover:scale-150 origin-bottom-left" />
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-black mb-16">
                      {project.title}
                    </h3>
                    <p className="text-black/60 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Content>
        </Container>
      </Section>

      {/* Our Process Section */}
      <Section className="bg-[#f9f9f9] py-96 md:py-160 border-y border-black/5">
        <Container>
          <Content>
            <div className="col-span-12 md:col-span-4 mb-64 md:mb-0">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-16 block">
                Methodology
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
                Our Process
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <div className="flex flex-col gap-32">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="flex flex-col md:flex-row md:items-center gap-16 md:gap-32 pb-32 border-b border-black/10 last:border-0 last:pb-0">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black shrink-0 md:w-[200px]">
                      {step.step}
                    </h3>
                    <p className="text-black/60 text-lg">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Content>
        </Container>
      </Section>

      {/* Statistics Section */}
      <Section className="bg-black text-white py-96 md:py-160">
        <Container>
          <Content>
            <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-48 text-center md:text-left">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-5xl md:text-6xl font-bold tracking-tighter mb-16">
                    {stat.value}
                  </span>
                  <span className="text-white/60 font-medium tracking-wide uppercase text-xs">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Content>
        </Container>
      </Section>
    </>
  );
}
