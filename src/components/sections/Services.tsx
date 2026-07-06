import React from "react";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Content } from "../layout/Content";

import businessImg from "../images/business-website.jpg";
import cafeImg from "../images/cafe-website.jpg";
import restaurantImg from "../images/hotel-website.jpg"; // Using hotel for restaurant as it's the available file
import landingImg from "../images/landing-page.jpg";
import portfolioImg from "../images/portfolio.jpg";

const services = [
  { title: "Business Websites", image: businessImg.src },
  { title: "Cafe Websites", image: cafeImg.src },
  { title: "Restaurant Websites", image: restaurantImg.src },
  { title: "Landing Pages", image: landingImg.src },
  { title: "Portfolio Websites", image: portfolioImg.src },
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
                key={service.title}
                className="relative w-full h-[400px] overflow-hidden group cursor-pointer rounded-none"
              >
                {/* Background Image with slight zoom on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-premium group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 ease-premium group-hover:bg-black/10" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between w-full p-32">
                  <span className="text-sm font-medium text-white/90">
                    0{index + 1}
                  </span>
                  
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white max-w-[200px] leading-tight">
                      {service.title}
                    </h3>
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
