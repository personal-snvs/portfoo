import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram, 
  IconBrandLinkedin,
  IconHome,
  IconFileInvoice,
  IconFolderCode,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        <IconFolderCode className="h-full w-full text-green-300 " />
      ),
      href: "#projects",
    },
    {
      title: "Resume",
      icon: (
        <IconFileInvoice className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-[#77a0f9] dark:text-linkedin-300" />
      ),
      href: "https://www.linkedin.com/in/shanmuka-s-5b3150223/",
    },

    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-[#E4405F]" />
      ),
      href: "https://instagram.com/snvs_komal/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/shanmukavenkat/",
      
    },
  ];
  return (
    (<div className="flex items-end justify-end h-auto w-auto">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
         />
    </div>)
  );
}
