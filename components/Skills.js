// React & Next
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// Libraries
import KUTE from 'kute.js';
// Hooks
import { useMode } from '../hooks/useMode';
// Techs
import GithubIcon from '../public/Presentation/Links/Github.svg';
import LinkedinIcon from '../public/Presentation/Links/Linkedin.svg';
import ResumeIcon from '../public/Presentation/Links/Resume.svg';
// Waves
import topLayeredWaves from '../public/Presentation/Waves/top-layered-waves.svg';
import bottomLayeredWaves from '../public/Presentation/Waves/bottom-layered-waves.svg';
import topDarkLayeredWaves from '../public/Presentation/Waves/top-dark-layered-waves.svg';
import bottomDarkLayeredWaves from '../public/Presentation/Waves/bottom-dark-layered-waves.svg';
// Tablet Waves
import tabletTopLayeredWaves from '../public/Presentation/Waves/tablet-top-layered-waves.svg';
import tabletBottomLayeredWaves from '../public/Presentation/Waves/tablet-bottom-layered-waves.svg';
import tabletTopDarkLayeredWaves from '../public/Presentation/Waves/tablet-top-dark-layered-waves.svg';
import tabletBottomDarkLayeredWaves from '../public/Presentation/Waves/tablet-bottom-dark-layered-waves.svg';
// Desktop Waves
import desktopTopLayeredWaves from '../public/Presentation/Waves/desktop-top-layered-waves.svg';
import desktopBottomLayeredWaves from '../public/Presentation/Waves/desktop-bottom-layered-waves.svg';
import desktopTopDarkLayeredWaves from '../public/Presentation/Waves/desktop-top-dark-layered-waves.svg';
import desktopBottomDarkLayeredWaves from '../public/Presentation/Waves/desktop-bottom-dark-layered-waves.svg';
// Blob Techs
import HTMLTech from '../public/Presentation/BlobTechs/HTML.svg';
import CSSTech from '../public/Presentation/BlobTechs/CSS.svg';
import SassTech from '../public/Presentation/BlobTechs/Sass.svg';
import FirebaseTech from '../public/Presentation/BlobTechs/Firebase.svg';
import TailwindTech from '../public/Presentation/BlobTechs/TailwindCSS.svg';
import ReactTech from '../public/Presentation/BlobTechs/React.svg';
import JavaScriptTech from '../public/Presentation/BlobTechs/Javascript.svg';
import MotionTech from '../public/Presentation/BlobTechs/Motion.svg';
import NextTech from '../public/Presentation/BlobTechs/Next.svg';
import FigmaTech from '../public/Presentation/BlobTechs/Figma.svg';
import GitTech from '../public/Presentation/BlobTechs/Git.svg';
// Framer Motion
import { motion } from 'framer-motion';

const icons = [
  {
    id: 0,
    src: LinkedinIcon,
    link: 'https://www.linkedin.com/in/danteexposito/',
  },
  { id: 1, src: GithubIcon, link: 'https://github.com/danteexpo' },
  {
    id: 2,
    src: ResumeIcon,
    link: 'https://docs.google.com/document/d/13WfY4hwWSzz77P_BCD2dDJVlw44ESNJqeyRvQTkcKvc/edit?usp=sharing',
  },
];

const techs = [
  {
    id: 0,
    src: HTMLTech,
    name: 'HTML',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    id: 1,
    src: CSSTech,
    name: 'CSS',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    id: 2,
    src: JavaScriptTech,
    name: 'JavaScript',
    link: 'https://www.javascript.com/',
  },
  { id: 3, src: ReactTech, name: 'React', link: 'https://reactjs.org/' },
  { id: 4, src: NextTech, name: 'Next.js', link: 'https://nextjs.org/' },
  {
    id: 5,
    src: TailwindTech,
    name: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
  },
  { id: 6, src: SassTech, name: 'Sass', link: 'https://sass-lang.com/' },
  {
    id: 7,
    src: MotionTech,
    name: 'Motion',
    link: 'https://www.framer.com/motion/',
  },
  {
    id: 8,
    src: FirebaseTech,
    name: 'Firebase',
    link: 'https://firebase.google.com/',
  },
  { id: 9, src: GitTech, name: 'Git', link: 'https://git-scm.com/' },
  { id: 10, src: FigmaTech, name: 'Figma', link: 'https://www.figma.com/' },
];

export const Skills = () => {
  const { mode } = useMode();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 2000, yoyo: true }
    ).start();
  }, []);

  useEffect(() => {
    setOpacity(0);
    setTimeout(() => setOpacity(100), 300);
  }, [mode]);

  return (
    <section
      id="skills"
      className={`${
        opacity === 0 ? 'opacity-0' : 'opacity-100'
      } mt-16 transition-opacity duration-100`}
    >
      {mode === 'light' && (
        <>
          <span className="sm:hidden">
            <Image src={topLayeredWaves} alt="" layout="responsive" />
          </span>
          <span className="hidden sm:block 2xl:hidden">
            <Image src={tabletTopLayeredWaves} alt="" layout="responsive" />
          </span>
          <span className="hidden 2xl:block">
            <Image src={desktopTopLayeredWaves} alt="" layout="responsive" />
          </span>
        </>
      )}
      {mode === 'dark' && (
        <>
          <span className="sm:hidden">
            <Image src={topDarkLayeredWaves} alt="" layout="responsive" />
          </span>
          <span className="hidden sm:block 2xl:hidden">
            <Image src={tabletTopDarkLayeredWaves} alt="" layout="responsive" />
          </span>
          <span className="hidden 2xl:block">
            <Image
              src={desktopTopDarkLayeredWaves}
              alt=""
              layout="responsive"
            />
          </span>
        </>
      )}

      <div className="relative -top-1 text-center bg-main-black text-main-white sm:py-3 md:py-6">
        <div className="max-w-3xl mx-auto">
          <div className="pt-4 pb-2 mx-auto w-32 flex justify-between items-center sm:hidden">
            {icons.map((icon) => (
              <a
                key={icon.id}
                href={icon.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="grid place-items-center relative w-8 h-8">
                  <Image src={icon.src} alt="" layout="fill" />
                </span>
              </a>
            ))}
          </div>
          <h2 className="font-bold text-2xl sm:hidden">
            I&apos;m Dante Expósito
          </h2>
          <p className="font-light text-sm w-56 mx-auto sm:hidden">
            A self-taught front-end web developer, who loves to design and build
            web applications.
          </p>
          <div className="pt-8 pb-8 flex flex-col justify-center items-center sm:px-4 sm:pt-0 md:px-0">
            <div className="flex flex-col justify-center items-center">
              <h2
                data-title="Skills"
                className="relative w-min font-bold text-2xl my-4 text-transparent text-transparent-dark before:content-[attr(data-title)] before:absolute before:bottom-[3px] before:text-main-white sm:text-3xl md:text-4xl"
              >
                Skills
              </h2>

              {/* BLOB ANIMATION */}
              <div className="absolute translate-y-12 -translate-x-2 sm:hidden">
                <svg
                  id="visual"
                  viewBox="0 0 540 960"
                  width="296"
                  height="526"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <g transform="translate(282.56650255055445 468.0417354940722)">
                    <path
                      id="blob1"
                      d="M151 -148.2C181.9 -120.2 183.4 -60.1 169.3 -14.1C155.2 31.8 125.3 63.6 94.5 103.5C63.6 143.3 31.8 191.2 -7.8 198.9C-47.4 206.7 -94.8 174.4 -130.9 134.6C-167.1 94.8 -192 47.4 -200.2 -8.1C-208.3 -63.6 -199.6 -127.3 -163.4 -155.3C-127.3 -183.3 -63.6 -175.6 -1.8 -173.9C60.1 -172.1 120.2 -176.2 151 -148.2"
                      fill="#494949"
                    ></path>
                  </g>
                  <g
                    transform="translate(236.81854344419713 496.0499895737718)"
                    style={{ visibility: 'hidden' }}
                  >
                    <path
                      id="blob2"
                      d="M117.9 -118.4C162.2 -73.5 214.1 -36.8 227.5 13.4C241 63.6 215.9 127.3 171.6 157.1C127.3 186.9 63.6 183 4.5 178.5C-54.7 174 -109.4 169 -138.2 139.2C-167 109.4 -170 54.7 -158.6 11.4C-147.2 -31.8 -121.3 -63.6 -92.5 -108.5C-63.6 -153.3 -31.8 -211.2 2.5 -213.6C36.8 -216.1 73.5 -163.2 117.9 -118.4"
                      fill="#808080"
                    ></path>
                  </g>
                </svg>
              </div>

              {/* BLOB SKILLS */}
              <div className="pt-6 pb-2 grid place-items-center gap-6 grid-cols-6 sm:grid-cols-8 md:grid-cols-12 sm:gap-8">
                {techs.map((tech) => (
                  <div
                    key={tech.id}
                    className={`flex flex-col justify-center items-center gap-2 col-span-2 ${
                      tech.id === 9
                        ? 'col-start-2 sm:col-start-4 md:col-start-8'
                        : ''
                    } ${tech.id === 8 ? 'sm:col-start-2 md:col-start-6' : ''} ${
                      tech.id === 6 ? 'md:col-start-2' : ''
                    }`}
                  >
                    <motion.a
                      href={tech.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <span
                        className={`grid place-items-center relative w-10 h-10 cursor-pointer sm:w-12 sm:h-12`}
                      >
                        <Image src={tech.src} alt={tech.name} layout="fill" />
                      </span>
                    </motion.a>
                    <p className="hidden sm:block font-light">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="relative -top-3">
        {mode === 'light' && (
          <>
            <span className="sm:hidden">
              <Image src={bottomLayeredWaves} alt="" layout="responsive" />
            </span>
            <span className="hidden sm:block 2xl:hidden">
              <Image
                src={tabletBottomLayeredWaves}
                alt=""
                layout="responsive"
              />
            </span>
            <span className="hidden 2xl:block">
              <Image
                src={desktopBottomLayeredWaves}
                alt=""
                layout="responsive"
              />
            </span>
          </>
        )}
        {mode === 'dark' && (
          <>
            <span className="sm:hidden">
              <Image src={bottomDarkLayeredWaves} alt="" layout="responsive" />
            </span>
            <span className="hidden sm:block 2xl:hidden">
              <Image
                src={tabletBottomDarkLayeredWaves}
                alt=""
                layout="responsive"
              />
            </span>
            <span className="hidden 2xl:block">
              <Image
                src={desktopBottomDarkLayeredWaves}
                alt=""
                layout="responsive"
              />
            </span>
          </>
        )}
      </span>
    </section>
  );
};
