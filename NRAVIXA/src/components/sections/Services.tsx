import React from "react";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Content } from "../layout/Content";

const services = [
  "Business Websites",
  "Cafe Websites",
  "Restaurant Websites",
  "Landing Pages",
  "Portfolio Websites",
];

export function Services() {
  return (
    <Section id="services" className="bg-white py-96 md:py-160">
      <Container>
        <Content>
          <div className="col-span-12 mb-64 flex flex-col">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/40 mb-16">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black">
              Our Expertise
            </h2>
          </div>

          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
            {services.map((service, index) => (
              <div
                key={service}
                className="bg-white p-32 border border-black/10 transition-all duration-300 ease-premium hover:border-black hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group"
              >
                <div className="flex flex-col h-full justify-between gap-64">
                  {/* Editorial Numbering */}
                  <span className="text-sm font-medium text-black/40 group-hover:text-black/60 transition-colors duration-300">
                    0{index + 1}
                  </span>
                  
                  {/* Service Title & Minimal Arrow */}
                  <div className="flex items-end justify-between">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black max-w-[200px]">
                      {service}
                    </h3>
                    <div className="w-[24px] h-[24px] flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-premium">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Content>
      </Container>
    </Section>
  );
}
