import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import GraduationArt from "@/media-src/GraduationArt.svg";
import Books from "@/media-src/Books.svg";
import School from "@/media-src/School.svg";
export function TimelineDemo() {
  const data = [
    {
      title: "Bachelor of Technology 2021-25",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Graduated from Vasireddy Venkatadri Institute of Technology (VVIT) with a CSM Computer Science Engineering specialization in Artificial Intelligence and Machine Learning.
            Passionate about building innovative digital solutions and learning new technologies
          </p>
            <div className="grid gap-4">
            <GraduationArt 
            className="a w-full text-black transition-all duration-300 hover:text-[#F0806C]" />
            </div>
        </div>
      ),
    },
    {
      title: "Higher Secondary Classes 2019-21",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
Completed Higher Secondary education in the MPC stream at Sri Chaitanya Junior College, Machilipatnam          </p>
            <div className="grid gap-4">
            <Books 
            className="a w-full text-black transition-all duration-300 hover:text-[#F0806C]" />
            </div>
        </div>
      ),
    },
    {
      title: "Secondary Education 2018-19",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Completed secondary education at St. Vincent Pallotti School, Pedana, Andhra Pradesh, India, building a strong academic foundation
          </p>
        
          <div className="grid gap-4">
            <School 
            className="a w-full text-black transition-all duration-300 hover:text-[#F0806C]" />
            </div>
        </div>
      ),
    },
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
