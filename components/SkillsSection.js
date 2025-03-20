"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaDatabase, FaJsSquare, FaFigma } from "react-icons/fa";
import { SiHuggingface, SiAdobexd, SiAdobephotoshop, SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaGithub, FaPython, FaHtml5, FaBootstrap } from "react-icons/fa6";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

// Skill icons list
const skills = [
  { icon: <FaReact size={40} color="#61DAFB" /> },
  { icon: <FaJsSquare size={40} color="#F7DF1E" /> },
  { icon: <FaPython size={40} color="#306998" /> },
  { icon: <FaNodeJs size={40} color="#68A063" /> },
  { icon: <FaHtml5 size={40} color="#E34F26" /> },
  { icon: <FaCss3Alt size={40} color="#2965F1" /> },
  { icon: <SiTailwindcss size={40} color="#06B6D4" /> },
  { icon: <FaBootstrap size={40} color="#7952B3" /> },
  { icon: <FaDatabase size={40} color="#4DB33D" /> },
  { icon: <SiMysql size={50} color="#00758F" /> },
  { icon: <SiMongodb size={40} color="#4DB33D" /> },
  { icon: <SiHuggingface size={40} color="#000000" className="bg-[#FFD21E] rounded-full" /> },
  { icon: <FaGithub size={40} color="#ffffff" /> },
  { icon: <ChartNoAxesColumnIncreasing size={40} color="#FFD21E" /> },
  { icon: <FaFigma size={40} color="#F24E1E" /> },
  { icon: <SiAdobexd size={40} color="#f73fc2" /> },
  { icon: <SiAdobephotoshop size={40} color="#31a8ff" /> },
];

// Duplicate the skills list for smooth infinite scrolling
const infiniteSkills = [...skills, ...skills];

export function SkillsSection() {
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <section id="skills" className="py-20 bg-black text-white overflow-hidden relative">
      {/* Left & Right Gradient Fades for Smooth Visibility */}
      <div className="absolute top-0 left-0 w-10 md:w-20 h-full bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-10 md:w-20 h-full bg-gradient-to-l from-black via-transparent to-transparent z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400">Technologies I work with</p>
        </motion.div>

        {/* Infinite Scrolling Container with Pause on Hover */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)} // Pause animation on hover
          onMouseLeave={() => setIsPaused(false)} // Resume animation on mouse leave
        >
          <motion.div
            className="flex space-x-6 w-max cursor-pointer"
            animate={{ x: isPaused ? "0%" : ["0%", "-50%"] }} // Pause at current position
            transition={{ repeat: isPaused ? 0 : Infinity, duration: 10, ease: "linear" }}
          >
            {infiniteSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-transparent p-2 rounded-lg flex flex-col items-center min-w-[80px] shadow-lg"
              >
                {skill.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
