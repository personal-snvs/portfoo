import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new.tsx";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Cover } from "@/components/ui/cover";
const words =`I’m a MERN Developer passionate about AI, UI/UX design, Data Science, and Power BI, crafting smart and seamless experiences 🚀  `
export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text  bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
       👋  Hello! there   <br /><Cover>  I am S N V S KOMAL</Cover>
        </h1>
        <TextGenerateEffect words={words} className="mt-4 font-normal text-[12px] sm:text-base text-neutral-300 max-w-lg mx-auto"/> 
      </div>
    </div>
  );
}
