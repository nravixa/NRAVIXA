import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const ProjectCard = memo(function ProjectCard({ title, description, image, link = "#" }: ProjectCardProps) {
  return (
    <Link href={link} className="relative w-full h-[360px] rounded-[15px] overflow-hidden flex items-end p-24 cursor-pointer transition-transform duration-400 ease-[ease] shadow-[0_7px_15px_rgba(0,0,0,0.15)] group md:hover:-translate-y-5 block">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 md:opacity-0 opacity-100 transition-opacity duration-500 ease-[ease] z-10 md:group-hover:opacity-100 pointer-events-none" />
      
      {/* Background Image */}
      <Image 
        src={image} 
        alt={title} 
        fill
        className="object-cover transition-transform duration-500 ease-[ease] z-0 md:group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Info Content */}
      <div className="relative z-20 text-white md:translate-y-[40px] translate-y-0 md:opacity-0 opacity-100 transition-all duration-500 ease-[ease] md:group-hover:translate-y-0 md:group-hover:opacity-100 w-full">
        <h3 className="mb-10 text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-[15px] leading-relaxed mb-20 text-white/90">{description}</p>
      </div>
    </Link>
  );
});
