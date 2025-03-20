"use client";
import React, { useState } from "react";
import { Github, Star, Linkedin,  } from "lucide-react";
import { Instagram } from 'lucide-react';
import { Liquid } from "@/components/ui/liquid-gradient";

const COLORS = {
  color1: "#FFFFFF",
  color2: "#1E10C5",
  color3: "#9089E2",
  color4: "#FCFCFE",
  color5: "#F9F9FD",
  color6: "#B2B8E7",
  color7: "#0E2DCB",
  color8: "#0017E9",
  color9: "#4743EF",
  color10: "#7D7BF4",
  color11: "#0B06FC",
  color12: "#C5C1EA",
  color13: "#1403DE",
  color14: "#B6BAF6",
  color15: "#C1BEEB",
  color16: "#290ECB",
  color17: "#3F4CC0",
};

const SocialButton = ({ href, icon, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block sm:w-36 w-14 h-[2.7em] mx-auto group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
        <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]"></span>
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <Liquid isHovered={isHovered} colors={COLORS} />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px]"></div>
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]"></span>
        <span className="absolute inset-0 rounded-lg bg-black"></span>
        <Liquid isHovered={isHovered} colors={COLORS} />
      </div>
      <button
        className="absolute inset-0 rounded-lg bg-transparent cursor-pointer"
        aria-label={label}
        type="button"
      >
        <span className="flex items-center justify-between px-4 gap-2 rounded-lg group-hover:text-yellow-400 text-white text-xl font-semibold tracking-wide whitespace-nowrap">
          {icon}
          <span className="sm:inline-block hidden">{label}</span>
        </span>
      </button>
    </a>
  );
};

const GitHubButton = () => {
  return (
    <div className="flex justify-center space-x-4">
      <SocialButton
        href="https://github.com/ui-layouts/uilayouts"
        icon={<Github className="group-hover:fill-yellow-400 fill-white w-6 h-6 flex-shrink-0" />}
        label="GitHub"
      />
      <SocialButton
        href="https://linkedin.com"
        icon={<Linkedin className="group-hover:fill-yellow-400 fill-white w-6 h-6 flex-shrink-0" />}
        label="LinkedIn"
      />
      <SocialButton
        href="https://instagram.com"
        icon={<Instagram className="group-hover:fill-yellow-400 fill-white w-6 h-6 flex-shrink-0" />}
        label="Instagram"
      />
    </div>
  );
};

export default GitHubButton;
