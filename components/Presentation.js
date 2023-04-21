// React & Next
import React from 'react';
import Image from 'next/image';
// Components
import { Skills } from './Skills';
// Hooks
import { useMode } from '../hooks/useMode';
// Images
import myPicture from '../public/Presentation/picture.svg';
// Icons
import GithubIconLight from '../public/Presentation/Icons/Github-light.svg';
import GithubIconDark from '../public/Presentation/Icons/Github-dark.svg';
import LinkedinIcon from '../public/Presentation/Icons/Linkedin-icon.svg';
import ResumeIcon from '../public/Presentation/Icons/Resume-icon.svg';
// Framer Motion
import { motion } from 'framer-motion';

const icons = [
  {
    id: 0,
    name: 'LinkedIn',
    src: LinkedinIcon,
    altSrc: LinkedinIcon,
    link: 'https://www.linkedin.com/in/danteexposito/',
  },
  {
    id: 1,
    name: 'GitHub',
    src: GithubIconLight,
    altSrc: GithubIconDark,
    link: 'https://github.com/danteexpo',
  },
  {
    id: 2,
    name: 'Resume/CV',
    src: ResumeIcon,
    altSrc: ResumeIcon,
    link: 'https://docs.google.com/document/d/13WfY4hwWSzz77P_BCD2dDJVlw44ESNJqeyRvQTkcKvc/edit?usp=sharing',
  },
];

export const Presentation = () => {
  const { mode } = useMode();

  return (
    <main id="home" className="mt-20">
      <section className="sm:flex sm:px-4 sm:items-center sm:justify-between sm:w-full max-w-3xl md:px-0 md:mx-auto">
        <div className="hidden sm:flex sm:flex-col">
          <h1 className="font-bold text-3xl lg:text-4xl">
            I&apos;m Dante Expósito
          </h1>
          <p className="pt-3 pb-6 font-light text-lg w-72 lg:text-xl lg:w-80">
            A self-taught front-end web developer, who loves to design and build
            web applications.
          </p>
          <div className="w-32 flex justify-between items-center">
            {icons.map((icon) => (
              <motion.a
                key={icon.id}
                href={icon.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <span
                  data-tooltip={icon.name}
                  className="grid place-items-center relative w-8 h-8 tooltipClass"
                >
                  <Image
                    src={mode === 'light' ? icon.src : icon.altSrc}
                    alt=""
                    layout="fill"
                  />
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <span className="mx-auto grid place-items-center relative w-56 h-56 sm:mx-0">
          <Image src={myPicture} alt="" layout="fill" />
        </span>
      </section>

      <Skills />
    </main>
  );
};
