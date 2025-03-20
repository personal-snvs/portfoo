import DecryptedText from '@/components/ui/DecryptedTextOne/DecryptedText';
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function DecryptedTextDemo() {
  return (
    <BackgroundLines className="relative">
      <div className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 relative">
        {/* ABOUT ME Heading */}
        <h2 className="absolute top-6 left-6 text-xl sm:text-2xl md:text-3xl font-bold text-white">
          ABOUT ME
        </h2>

        {/* Decrypted Text Container */}
        <div className="max-w-4xl text-left text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed">
          <DecryptedText
            text="I’m S N V S Komal, a Full Stack MERN Developer passionate about building dynamic and scalable web applications. With a keen eye for design, I specialize in UI/UX to create seamless user experiences. I explore the world of Data Science, leveraging insights for smarter solutions, and I'm a Power BI Enthusiast, transforming raw data into meaningful visualizations. Always eager to innovate and push boundaries in tech!"
            speed={200}
            maxIterations={20}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            color="#1F2937"
          />
        </div>
      </div>
    </BackgroundLines>
  );
}
