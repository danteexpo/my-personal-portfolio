// React & Next
import React from "react";
// Hooks
import { useMode } from "../hooks/useMode";
// Icons
import GithubIconLight from "../public/Presentation/Icons/Github-light.svg";
import GithubIconDark from "../public/Presentation/Icons/Github-dark.svg";
import LinkedinIcon from "../public/Presentation/Icons/Linkedin-icon.svg";
import ResumeIcon from "../public/Presentation/Icons/Resume-icon.svg";
import Image from "next/image";
// Framer Motion
import { motion } from "framer-motion";

const icons = [
  {
    id: 0,
    name: "LinkedIn",
    src: LinkedinIcon,
    altSrc: LinkedinIcon,
    link: "https://www.linkedin.com/in/danteexposito/"
  },
  {
    id: 1,
    name: "GitHub",
    src: GithubIconLight,
    altSrc: GithubIconDark,
    link: "https://github.com/danteexpo"
  },
  {
    id: 2,
    name: "Resume/CV",
    src: ResumeIcon,
    altSrc: ResumeIcon,
    link: "https://drive.google.com/file/d/1inD9qtkd1Awv4FsXX7YA8vb2lqUBBHnX/view?usp=sharing"
  }
];

export const Footer = () => {
  const { mode } = useMode();

  return (
    <div
      className={`mx-auto max-w-sm pb-4 bg-[#3c3c3c] text-main-white text-center font-light sm:font-normal sm:pt-4 sm:bg-transparent sm:-top-0 ${
        mode === "dark" ? "sm:text-main-white" : "sm:text-main-black"
      }`}
    >
      <div className="relative -top-4 bg-[#3c3c3c] sm:hidden">
        <p>© 2022 Dante Expósito.</p>
        <p>All Rights Reserved</p>
      </div>
      <div className="mx-auto w-32 justify-between items-center hidden sm:flex sm:pb-4">
        {icons.map(icon => (
          <motion.a 
            key={icon.id} 
            href={icon.link} 
            target="_blank" 
            rel="noreferrer" 
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 }
            }}
          >
            <span
              data-tooltip={icon.name}
              className="grid place-items-center relative w-8 h-8 tooltipClass1"
            >
              <Image
                src={mode === "light" ? icon.src : icon.altSrc}
                alt=""
                layout="fill"
              />
            </span>
          </motion.a>
        ))}
      </div>
      <p className="hidden sm:block">© 2022 Dante Expósito.</p>
      <p className="hidden sm:block">All Rights Reserved</p>
    </div>
  );
};
