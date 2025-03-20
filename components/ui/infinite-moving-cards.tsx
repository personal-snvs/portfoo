"use client";

import { cn } from "@/lib/utils";
import React from "react";

// Define the expected structure for items
export const InfiniteMovingCards = ({
  items = [],
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { name: string; icon: React.ReactNode }[]; // Add `icon` property
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const speeds = { fast: 10, normal: 50, slow: 80 }; // Speed in seconds

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left & Right Gradient Fades for Smooth Visibility */}
      <div className="absolute top-0 left-0 w-10 md:w-20 h-full bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-10 md:w-20 h-full bg-gradient-to-l from-black via-transparent to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Container */}
      <div
        className={cn(
          "flex gap-4 md:gap-6 w-max flex-nowrap animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          className
        )}
        style={{
          animationDuration: `${speeds[speed]}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {items.concat(items).map((item, idx) => (
          <div
            key={idx}
            className=" flex flex-row w-[200px] md:w-[250px] lg:w-[300px] shrink-0 rounded-xl border border-gray-600 bg-gradient-to-b from-gray-900 to-black shadow-lg items-center justify-center p-4 md:p-6"
          >
            {item.icon && <div className="text-4xl md:text-5xl mb-2">{item.icon}</div>}
            <span className="text-sm md:text-base lg:text-lg font-semibold text-white text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Add CSS for infinite scrolling */}
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            display: flex;
            white-space: nowrap;
            animation: marquee linear infinite;
          }
        `}
      </style>
    </div>
  );
};
