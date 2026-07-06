import React from "react";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Content } from "../layout/Content";
import DecayCard from "../ui/DecayCard";

const services = [
  { title: "Business Websites", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop" },
  { title: "Cafe Websites", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop" },
  { title: "Restaurant Websites", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" },
  { title: "Landing Pages", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
  { title: "Portfolio Websites", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop" },
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
              <DecayCard
                key={service.title}
                width="100%"
                height="400px"
                image={service.image}
              >
                <div className="flex flex-col h-full justify-between w-full">
                  <span className="text-sm font-medium text-white/80">
                    0{index + 1}
                  </span>
                  
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white max-w-[200px] leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </DecayCard>
            ))}
          </div>
        </Content>
      </Container>
    </Section>
  );
}
