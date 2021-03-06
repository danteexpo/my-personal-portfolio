// React & Next
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Hooks
import { useMode } from "../hooks/useMode";
// Images
import GitHub from "../public/Presentation/Links/Github.svg";
import SophosProject from "../public/Projects/favicon-sophos.svg";
import FacebookProject from "../public/Projects/favicon-facebook-clone.svg";
import NetflixProject from "../public/Projects/favicon-netflix-clone.svg";
import RickAndMortyProject from "../public/Projects/favicon-rick-and-morty.svg";
import TeamworkProject from "../public/Projects/favicon-teamwork.svg";
import MagicMatchProject from "../public/Projects/favicon-magic.svg";
import CryptoProject from "../public/Projects/favicon-crypto-app.svg";
import ExpenseProject from "../public/Projects/favicon-expense-tracker.svg";
// Framer Motion
import { motion } from "framer-motion";

const projects = [
  {
    id: 100,
    title: "Sophos & Licencias Online",
    link: "https://www.licenciasonline.com/sophos/soluciones/",
    github: "#",
    imgSrc: SophosProject,
    techs: ["real-world app"]
  },
  {
    id: 0,
    title: "Facebook Clone",
    link: "https://de-facebook-clone.netlify.app/",
    github: "https://github.com/danteexpo/facebook-clone",
    imgSrc: FacebookProject,
    techs: ["react", "fire-base", "sass"]
  },
  {
    id: 1,
    title: "Netflix Clone",
    link: "https://de-netflix-clone.netlify.app/",
    github: "https://github.com/danteexpo/netflix-clone-app",
    imgSrc: NetflixProject,
    techs: ["nextjs", "tailwind-CSS", "swiper"]
  },
  {
    id: 2,
    title: "Rick & Morty Wiki",
    link: "https://de-rick-and-morty-wiki.netlify.app/",
    github: "https://github.com/danteexpo/rick-morty-wiki",
    imgSrc: RickAndMortyProject,
    techs: ["react", "rick&morty-api", "sass", "bootstrap"]
  },
  {
    id: 3,
    title: "TeamWork",
    link: "https://de-teamwork.netlify.app/",
    github: "https://github.com/danteexpo/teamwork",
    imgSrc: TeamworkProject,
    techs: ["react", "firebase"]
  },
  {
    id: 4,
    title: "Magic Match",
    link: "https://de-magic-match.netlify.app/",
    github: "https://github.com/danteexpo/magic-match",
    imgSrc: MagicMatchProject,
    techs: ["react"]
  },
  {
    id: 5,
    title: "Expense Tracker",
    link: "https://de-my-tracker.netlify.app",
    github: "https://github.com/danteexpo/expensetracker-auth",
    imgSrc: ExpenseProject,
    techs: ["react", "firebase"]
  },
  {
    id: 6,
    title: "Crypto World",
    link: "https://de-crypto-world.netlify.app",
    github: "https://github.com/danteexpo/crypto-app",
    imgSrc: CryptoProject,
    techs: ["react", "axios", "coin-gecko api"]
  }
];

export const Projects = () => {
  const { mode } = useMode();
  const [showAll, setShowAll] = useState(false);

  const handleMore = () => {
    setShowAll(prevState => (prevState ? false : true));
  };

  return (
    <div
      id="projects"
      className="mt-10 sm:mt-16 grid grid-cols-1 place-items-center max-w-3xl mx-auto mb-10 sm:mb-16"
    >
      <h2
        data-title="Projects"
        className={`relative w-min font-bold text-2xl text-transparent ${
          mode === "dark" ? "text-transparent-dark" : "text-transparent-light"
        } before:content-[attr(data-title)] before:absolute before:bottom-[3px] before:text-main-black dark:before:text-main-white sm:text-3xl md:text-4xl`}
      >
        Projects
      </h2>

      <section
        className={`max-w-xl p-2 flex flex-col sm:p-8 sm:flex-row sm:overflow-x-scroll md:max-w-2xl lg:max-w-3xl card-list ${
          mode === "light" ? "card-list-light" : "card-list-dark"
        }`}
      >
        {projects.map(project => (
          <article
            key={project.id}
            className={`min-w-[250px] w-[280px] p-6 mb-4 rounded-2xl bg-main-black flex flex-col duration-200 snap-start clear-both relative md:h-[350px] md:w-[400px] md:mb-0 card ${
              project.id >= 3 ? (showAll ? "" : "hidden sm:block") : ""
            }`}
          >
            <header className="mb-auto card-header">
              <a
                className="text-sm text-[#7a7a8c]"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.id >= 100
                  ? project.link.substring(0, 31)
                  : project.link}
              </a>
              <a href={project.link} target="_blank" rel="noreferrer">
                <h2 className="pt-4 text-xl mt-1 mb-auto text-[#7a7a8c] border-none inline-block cursor-pointer">
                  {project.title}
                </h2>
              </a>
            </header>
            <div className="mt-12 mx-0 mb-0 flex items-center gap-4 relative">
              <motion.a
                className="relative w-10 h-10 cursor-pointer rounded-full"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 }
                }}
              >
                <Image src={project.imgSrc} alt={project.title} layout="fill" />
              </motion.a>
              {project.id >= 100 ? (
                ""
              ) : (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-10 h-10 cursor-pointer rounded-full"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Image src={GitHub} alt="Github link" layout="fill" />
                </motion.a>
              )}
            </div>
            <div className="mt-4 pt-2 pb-4 leading-8 tags">
              {project.techs.map((tech, i) => (
                <p
                  key={i}
                  className="inline font-bold text-xs text-[#7a7a8c] uppercase border-[3px] border-[#494949] rounded-full pt-1 pb-1 px-3 relative cursor-pointer"
                >
                  {tech}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>
      <div className="sm:hidden" onClick={handleMore}>
        {showAll && (
          <Link href="#projects">
            <p
              className={`${
                mode === "light" ? "text-[#0000EE]" : "text-[#ffffff]"
              } opacity-80 hover:opacity-100 cursor-pointer`}
            >
              See Less...
            </p>
          </Link>
        )}
        {!showAll && (
          <p
            className={`${
              mode === "light" ? "text-[#0000EE]" : "text-[#ffffff]"
            } opacity-80 hover:opacity-100 cursor-pointer`}
          >
            See More...
          </p>
        )}
      </div>
    </div>
  );
};
