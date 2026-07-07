"use client";

import React, { useState, memo } from "react";
import Image from "next/image";

interface FlipCardProps {
  title: string;
  frontText: string;
  backTitle: string;
  backText: string;
  index: number;
}

export const FlipCard = memo(function FlipCard({ title, frontText, backTitle, backText, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const toggleFlip = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setIsFlipped(!isFlipped);
    
    setTimeout(() => {
      setIsFlipping(false);
    }, 700);
  };

  const patterns = [
    "linear-gradient(115deg, #4fd1c5 30%, transparent 30%), linear-gradient(250deg, #9f7aea 30%, transparent 30%), linear-gradient(55deg, #f56565 40%, transparent 40%), #2c7a7b",
    "linear-gradient(135deg, #ed8936 30%, transparent 30%), linear-gradient(225deg, #4299e1 40%, transparent 40%), linear-gradient(45deg, #2b6cb0 30%, transparent 30%), #dd6b20",
    "linear-gradient(105deg, #f687b3 35%, transparent 35%), linear-gradient(285deg, #f6e05e 35%, transparent 35%), linear-gradient(15deg, #4fd1c5 35%, transparent 35%), #d53f8c",
    "linear-gradient(45deg, #68d391 25%, transparent 25%), linear-gradient(-45deg, #9f7aea 35%, transparent 35%), linear-gradient(135deg, #38a169 30%, transparent 30%), #805ad5",
    "linear-gradient(120deg, #f56565 30%, transparent 30%), linear-gradient(240deg, #ecc94b 40%, transparent 40%), linear-gradient(60deg, #c53030 30%, transparent 30%), #d69e2e",
    "linear-gradient(135deg, #63b3ed 30%, transparent 30%), linear-gradient(225deg, #319795 30%, transparent 30%), linear-gradient(315deg, #2b6cb0 40%, transparent 40%), #2c7a7b",
    "linear-gradient(150deg, #b794f4 35%, transparent 35%), linear-gradient(270deg, #f687b3 30%, transparent 30%), linear-gradient(30deg, #805ad5 35%, transparent 35%), #d53f8c",
    "linear-gradient(135deg, #38b2ac 30%, transparent 30%), linear-gradient(225deg, #ed8936 40%, transparent 40%), linear-gradient(45deg, #2c7a7b 30%, transparent 30%), #dd6b20"
  ];

  return (
    <div 
      className="w-full h-[250px] [perspective:1000px] group cursor-pointer"
      onClick={toggleFlip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFlip();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={isFlipped ? "Flip Card Back" : "Flip Card"}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(-180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 flex rounded-xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] [backface-visibility:hidden]">
          <div className="w-[35%] relative flex items-end" style={{ background: patterns[index % patterns.length] }}>
            {/* Numbering removed */}
          </div>

          <div className="w-[65%] flex flex-col justify-between p-24">


            <div>
              <h3 className="text-xl font-bold text-black mb-8">{title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{frontText}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex rounded-xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="w-full flex flex-col justify-between p-24">


            <div className="flex-1 mt-16 overflow-y-auto">
              <b className="text-black font-bold text-lg block mb-8">{backTitle}</b>
              <p className="text-black/70 text-sm leading-relaxed">{backText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
