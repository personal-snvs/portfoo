"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { 
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiMongodb, 
  SiMysql, SiSqlite, SiPython, SiNodedotjs, SiExpress, SiBootstrap, 
  SiFigma, SiAdobephotoshop, SiGithub, SiGit, SiAdobe, SiHuggingface
} from "react-icons/si";  

export function InfiniteMovingCardDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
    </div>
  );
}

// Technology List with Icons
const testimonials = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Acernity UI", icon: <SiReact className="text-blue-500" /> }, // Placeholder (replace if needed)
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Adobe XD", icon: <SiAdobe className="text-red-500" /> },
  { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-400" /> },
  { name: "Hugging Face", icon: <SiHuggingface className="text-yellow-400" /> }
];

