import React, { useEffect } from "react";
import Image from "next/image";
// Libraries
import KUTE from "kute.js";
import VanillaTilt from "vanilla-tilt";
// Hooks
import { useMode } from "../hooks/useMode";
// Techs
import JavaScriptIcon from "../public/Presentation/Techs/JavaScript.svg";
import ReactIcon from "../public/Presentation/Techs/React.svg";
import ReduxIcon from "../public/Presentation/Techs/Redux.svg";
// Waves
import topLayeredWaves from "../public/Presentation/Waves/top-layered-waves.svg";
import bottomLayeredWaves from "../public/Presentation/Waves/bottom-layered-waves.svg";
import topDarkLayeredWaves from "../public/Presentation/Waves/top-dark-layered-waves.svg";
import bottomDarkLayeredWaves from "../public/Presentation/Waves/bottom-dark-layered-waves.svg";
// Tablet Waves
import tabletTopLayeredWaves from "../public/Presentation/Waves/tablet-top-layered-waves.svg";
import tabletBottomLayeredWaves from "../public/Presentation/Waves/tablet-bottom-layered-waves.svg";
import tabletTopDarkLayeredWaves from "../public/Presentation/Waves/tablet-top-dark-layered-waves.svg";
import tabletBottomDarkLayeredWaves from "../public/Presentation/Waves/tablet-bottom-dark-layered-waves.svg";
// Desktop Waves
import desktopTopLayeredWaves from "../public/Presentation/Waves/desktop-top-layered-waves.svg";
import desktopBottomLayeredWaves from "../public/Presentation/Waves/desktop-bottom-layered-waves.svg";
import desktopTopDarkLayeredWaves from "../public/Presentation/Waves/desktop-top-dark-layered-waves.svg";
import desktopBottomDarkLayeredWaves from "../public/Presentation/Waves/desktop-bottom-dark-layered-waves.svg";
// Blob Techs
import SassTech from "../public/Presentation/BlobTechs/Sass.svg";
import BootstrapTech from "../public/Presentation/BlobTechs/Bootstrap.svg";
import TailwindTech from "../public/Presentation/BlobTechs/TailwindCSS.svg";
import ReactTech from "../public/Presentation/BlobTechs/React.svg";
import JavaScriptTech from "../public/Presentation/BlobTechs/Javascript.svg";
import ReduxTech from "../public/Presentation/BlobTechs/Redux.svg";
import NextTech from "../public/Presentation/BlobTechs/Next.svg";
import FigmaTech from "../public/Presentation/BlobTechs/Figma.svg";
import GitTech from "../public/Presentation/BlobTechs/Git.svg";
// Links
import GithubLink from "../public/Presentation/Links/Github.svg";
import LinkedinLink from "../public/Presentation/Links/Linkedin.svg";
import ResumeLink from "../public/Presentation/Links/Resume.svg";

const icons = [
	{ id: 0, src: JavaScriptIcon },
	{ id: 1, src: ReactIcon },
	{ id: 2, src: ReduxIcon },
];

const techs = [
	{ id: 0, src: SassTech, name: "Sass", link: "https://sass-lang.com/" },
	{
		id: 1,
		src: BootstrapTech,
		name: "Boostrap",
		link: "https://getbootstrap.com/",
	},
	{
		id: 2,
		src: TailwindTech,
		name: "Tailwind",
		link: "https://tailwindcss.com/",
	},
	{ id: 3, src: ReactTech, name: "React", link: "https://reactjs.org/" },
	{
		id: 4,
		src: JavaScriptTech,
		name: "JavaScript",
		link: "https://www.javascript.com/",
	},
	{ id: 5, src: ReduxTech, name: "Redux", link: "https://redux.js.org/" },
	{ id: 6, src: NextTech, name: "Next.js", link: "https://nextjs.org/" },
	{ id: 7, src: FigmaTech, name: "Figma", link: "https://www.figma.com/" },
	{ id: 8, src: GitTech, name: "Git", link: "https://git-scm.com/" },
];

const linkSquares = [
	{
		id: 0,
		src: GithubLink,
		name: "GitHub",
		bg: "bg-true-black",
		link: "https://github.com/danteexpo",
	},
	{
		id: 1,
		src: LinkedinLink,
		name: "LinkedIn",
		bg: "bg-linkedin-blue",
		link: "https://www.linkedin.com/in/danteexposito/",
	},
	{
		id: 2,
		src: ResumeLink,
		name: "Resume",
		bg: "bg-resume-red",
		link: "https://drive.google.com/file/d/1taSI2I2FheKriIZd24thGPJKp5x5IuNS/view?usp=sharing",
	},
];

export const Skills = () => {
	const { mode } = useMode();

	useEffect(() => {
		KUTE.fromTo(
			"#blob1",
			{ path: "#blob1" },
			{ path: "#blob2" },
			{ repeat: 999, duration: 2000, yoyo: true },
		).start();
		VanillaTilt.init(document.querySelectorAll(".square-box"), {
			max: 25,
			speed: 400,
		});
	}, []);

	return (
		<section id="skills" className="mt-16">
			{mode === "light" && (
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
			{mode === "dark" && (
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
						{icons.map(icon => (
							<span
								key={icon.id}
								className="grid place-items-center relative w-8 h-8"
							>
								<Image src={icon.src} alt="" layout="fill" />
							</span>
						))}
					</div>
					<h2 className="font-bold text-2xl sm:hidden">
						I&apos;m Dante Expósito
					</h2>
					<p className="font-light text-sm w-56 mx-auto sm:hidden">
						A self-taught front-end web developer, who loves to design and build
						web applications.
					</p>
					<div className="pt-8 flex flex-col justify-center items-center sm:flex-row sm:px-4 sm:justify-between sm:pt-0 md:px-0">
						<div className="flex flex-col justify-center items-center sm:flex-row">
							<h2
								data-title="Skills"
								className="relative w-min font-bold text-2xl text-transparent text-transparent-dark before:content-[attr(data-title)] before:absolute before:bottom-[3px] before:text-main-white sm:rotate-[270deg] sm:text-4xl"
							>
								Skills
							</h2>
							{/* BLOB ANIMATION */}
							<div className="absolute translate-y-8 -translate-x-4 sm:hidden">
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
										style={{ visibility: "hidden" }}
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
							<div className="py-4 grid place-items-center gap-8 grid-cols-3 sm:gap-14 md:gap-x-28 sm:mr-auto">
								{techs.map(tech => (
									<a
										key={tech.id}
										href={tech.link}
										target="_blank"
										rel="noreferrer"
									>
										<span
											data-tooltip={tech.name}
											className={`grid place-items-center relative w-10 h-10 cursor-pointer sm:w-12 sm:h-12 sm:opacity-80 sm:hover:opacity-100 tooltipClass`}
										>
											<Image src={tech.src} alt={tech.name} layout="fill" />
										</span>
									</a>
								))}
							</div>
						</div>
						<div className="pt-8 flex flex-col justify-center items-center sm:pt-0 sm:flex-row">
							<h2
								data-title="Links"
								className="relative w-min font-bold text-2xl text-transparent text-transparent-dark before:content-[attr(data-title)] before:absolute before:bottom-[3px] before:text-main-white sm:rotate-[270deg] sm:text-4xl"
							>
								Links
							</h2>
							{/* LINK SQUARES */}
							<div className="py-4 grid place-items-center gap-4 grid-cols-3 sm:grid-cols-1 sm:py-0">
								{linkSquares.map(square => (
									<a
										href={square.link}
										target="_blank"
										rel="noreferrer"
										key={square.id}
										className={`flex flex-col justify-between items-center py-1 ${square.bg} w-20 h-20 cursor-pointer square-box`}
									>
										<span className="grid place-items-center relative top-0 w-12 h-12">
											<Image src={square.src} alt={square.name} layout="fill" />
										</span>
										<p className="text-sm font-light">{square.name}</p>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<span className="relative -top-3">
				{mode === "light" && (
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
				{mode === "dark" && (
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
