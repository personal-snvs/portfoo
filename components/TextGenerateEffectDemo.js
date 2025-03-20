"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `I'm S N V S Komal, a Full Stack MERN Developer passionate about building dynamic and scalable web applications. With a keen eye for design, I specialize in UI/UX to create seamless user experiences. I explore the world of Data Science, leveraging insights for smarter solutions, and I'm a Power BI Enthusiast, transforming raw data into meaningful visualizations. Always eager to innovate and push boundaries in tech!`;
const  words_one = `About Me`;
export function TextGenerateEffectDemo() {
  return (
    <>
        {/* Reduced space below ABOUT ME */}
        <div className="lg:text-center md:text-left sm:text-left">
          <TextGenerateEffect words={words_one} />  
          <TextGenerateEffect words={words} />
        </div>

     
    </>
  );
}
