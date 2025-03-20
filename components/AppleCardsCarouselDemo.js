"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Money from '../media-src/money.png';
import FullMoney from '../media-src/FullMoney.png';
import Ipl from '../media-src/ipl.png';
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} className="" />
  ));

  return (
    <div id="projects" className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        PROJECTS
      </h2>
      <Carousel items={cards}  />
    </div>
  );
}

const DummyContent = ({ link,src }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" >
      <div className=" p-8 md:p-14 rounded-3xl  cursor-pointer hover:scale-105 transition-transform duration-300    backdrop-blur-[20px] backdrop-saturate-[200%] bg-[#dfcef9d9] bg-opacity-0border border-opacity-20 border-[#ffffffd0]">
        <p className="text-dark-600 dark:text-emerald-200 text-base md:text-2xl font-sans max-w-3xl mx-auto ">
          <span className="font-bold text-center text-neutral-700 dark:text-neutral-200">
            Explore this project in detail.
          </span>{" "}
          Click to view the full project page.
        </p>
        <Image
          src={src || "/default-image.png"} // Dynamic local image path
          alt="Project preview"
          height={500}
          width={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-cover rounded-lg"
        />
      </div>
    </a>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/images/ai-project.jpg", // Local image
    content: <DummyContent link="https://your-ai-project.com" />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/images/productivity.jpg",
    content: <DummyContent link="https://your-productivity-tool.com" />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/images/apple-vision.jpg",
    content: <DummyContent link="https://your-apple-vision.com" />,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/images/maps-iphone.jpg",
    content: <DummyContent link="https://your-maps-project.com" />,
  },
  {
    category: "IPL",
    title: "IPL Dashboard for cricket fans.",
    src: Ipl, // Imported image
    content: <DummyContent link="https://snvsipl.ccbp.tech" src={Ipl} />,
  },
  {
    category: "Money Management",
    title: "Manage your finances with ease.",
    src: Money, // Imported image
    content: <DummyContent link="https://snvs-money-manager.netlify.app/" src={FullMoney}/>,
  },
];

/*<div class="relative h-screen">
  <!-- Background Pattern -->
  <div class="absolute inset-0">
    <div class="relative h-full w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
    <div></div>
    
  </div>
  </div>
  bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]
  <!-- Hero Content -->
  <div class="relative z-10 flex h-full flex-col items-center justify-center px-4">
    <div class="max-w-3xl text-center">
      <h1 class="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
        Your Next Great
        <span class="text-sky-900">Project</span>
      </h1>
      <p class="mx-auto mb-8 max-w-2xl text-lg text-slate-700">
        Build modern and beautiful websites with this collection of stunning background patterns. 
        Perfect for landing pages, apps, and dashboards.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <button class="rounded-lg px-6 py-3 font-medium bg-sky-900 text-white hover:bg-sky-800">
          Get Started
        </button>
        <button class="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div> */