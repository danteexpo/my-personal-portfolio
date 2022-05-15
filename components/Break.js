import React from "react";
import Image from "next/image";
// Components
import { Game } from "./Game";
// Hooks
import { useMode } from "../hooks/useMode";
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

export const Break = () => {
	const { mode } = useMode();

	return (
		<section className="mt-8">
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
			<div id="break" className="relative -top-1 bg-main-black py-4">
				<div className="max-w-3xl mx-auto flex flex-col items-center gap-1 justify-center md:flex-row md:justify-between">
					<h2
						data-title="Little Break"
						className="relative text-center font-bold text-2xl text-transparent text-transparent-dark before:content-[attr(data-title)] before:absolute before:bottom-[3px] before:text-main-white sm:text-4xl"
					>
						Little Break
					</h2>
					<p className="text-main-white w-60 text-center sm:w-80 md:text-lg md:text-right md:w-[500px]">
						Tired of recruiting developers? Drink some water and take a small
						but fulfilling break by playing this game.
					</p>
				</div>
				<Game />
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
