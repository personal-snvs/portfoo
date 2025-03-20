'use client';
import { motion } from 'framer-motion';
import {  Menu, X } from "lucide-react";
import { useState } from "react";
import {  LinkedinIcon, MailIcon, FileText } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';
import { ProjectsSection } from '@/components/ProjectsSection';
import {SkillsSection}  from '@/components/SkillsSection';
import { SpotlightPreview } from '@/components/SpotlightPreview';
import { FloatingDockDemo } from '@/components/FloatingDockDemo';
import { TimelineDemo } from '@/components/TimelineDemo';
import { TracingBeam } from "@/components/ui/tracing-beam";
import  ImageMasking  from "@/components/ImageMasking";    
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo';  
import Image from 'next/image';
import editsImageOne from '../media-src/editsImageOne.png';
import { BackgroundBeamsDemo } from '@/components/BackgroundBeamsDemo';
import ClickSpark from "@/components/ui/ClickSpark/ClickSpark";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <ClickSpark
  sparkColor='#2c35ea'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
      <main className="min-h-screen bg-black">
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Left Side: Avatar + Portfolio Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          {/* Instagram-Style Avatar */}
          <div className="relative">
            <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-tr from-instagram to-linkedin">
              <Image
                src={editsImageOne}
                alt="Profile"
                className="w-[58px] h-[58px] rounded-full object-cover border-2 border-black"
              />
            </div>
          </div>

          {/* Portfolio Name + Availability */}
          <div>
            <h2 className="text-white text-1xl font-bold">S N V S KOMAL</h2>
            <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#00ff00]"></span>
            <p className="text-[12px] text-gray-300">Available for Hire</p>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-4 space-y-3 bg-black/80 backdrop-blur-md rounded-lg">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </a>
        </div>
      )}
    </div>
  </nav>

        {/* Hero Section */}
        <div className="relative w-full h-screen">
          <SpotlightPreview
            className="absolute hidden sm:block -top-40 left-10 sm:-left-20 md:-left-32 lg:-top-20 xl:-top-10 h-screen"
            fill="white" 
          />
        </div>
       
        <SkillsSection />
        {/*Apple Card Carosuel effect*/}
        <AppleCardsCarouselDemo />
       {/*Apple Card Carosuel effect*/}
       {/* Only enable TracingBeam on screens larger than 'sm' */}
      <div className="hidden sm:block">
        <TracingBeam className="max-w-5xl mx-auto px-4">
          <TimelineDemo />
        </TracingBeam>
      </div>
      {/* Only enable TracingBeam on screens larger than 'sm' */}
      {/* Show TimelineDemo normally on mobile (without TracingBeam) */}
      <div className="sm:hidden">
        <TimelineDemo />
      </div>

        <ProjectsSection />
    
       
        
        <BackgroundBeamsDemo />

        <div className='flex items-center justify-center'>
          <FloatingDockDemo />
        </div>
        <div className='flex items-center justify-center'>
          <ImageMasking />
        </div>

        {/* Footer */}
        <footer className="bg-black text-white py-9 -z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="https://github.com/shanmukavenkat/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/shanmuka-s-5b3150223/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <LinkedinIcon className="w-6 h-6" />
              </a> <a href="https://instagram.com/snvs_komal/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Instagram className="w-6 h-6" />
              </a>

              
              <a href="mailto:shanmukavenkatkomal@gmail.com" className="hover:text-gray-400">
                <MailIcon className="w-6 h-6" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FileText className="w-6 h-6" />
              </a>
            </div>

            {/* Footer Text */}
            <div className="text-gray-400 text-center sm:text-right">
              ⏳ Time waits for no one, make every second count 🚀
            </div>

          </div>
          </div>
        </footer>

      </main>
      </ClickSpark>
    </>
  );
}
