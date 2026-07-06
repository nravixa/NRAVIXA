import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export function ProjectCard({ title, description, image, link = "#" }: ProjectCardProps) {
  return (
    <Link href={link} className="relative w-full h-[360px] rounded-[15px] overflow-hidden flex items-end p-24 cursor-pointer transition-transform duration-400 ease-[ease] shadow-[0_7px_15px_rgba(0,0,0,0.15)] group hover:-translate-y-5 block">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 ease-[ease] z-10 group-hover:opacity-100 pointer-events-none" />
      
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[ease] z-0 group-hover:scale-110"
      />
      
      {/* Info Content */}
      <div className="relative z-20 text-white translate-y-[40px] opacity-0 transition-all duration-500 ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 w-full">
        <h3 className="mb-10 text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-[15px] leading-relaxed mb-20 text-white/90">{description}</p>
        <button className="px-20 py-10 border-none rounded bg-white text-black font-bold cursor-pointer transition-all duration-300 hover:bg-black hover:text-white">
          Read More
        </button>
      </div>
    </Link>
  );
}
