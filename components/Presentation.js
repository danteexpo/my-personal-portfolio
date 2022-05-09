import React, { useEffect } from "react";
import Image from "next/image";
import KUTE from "kute.js";
// Images
import myPicture from "../public/Presentation/picture.svg";
import JavaScriptIcon from "../public/Presentation/Techs/JavaScript.svg";
import ReactIcon from "../public/Presentation/Techs/React.svg";
import ReduxIcon from "../public/Presentation/Techs/Redux.svg";
import topLayeredWaves from "../public/Presentation/Waves/top-layered-waves.svg";
import bottomLayeredWaves from "../public/Presentation/Waves/bottom-layered-waves.svg";

export const Presentation = ({ isDarkMode }) => {
	useEffect(() => {
		KUTE.fromTo(
			"#blob1",
			{ path: "#blob1" },
			{ path: "#blob2" },
			{ repeat: 999, duration: 3000, yoyo: true },
		).start();
	}, []);

	return (
		<main className="mt-20">
			<span className="mx-auto grid place-items-center relative w-56 h-56">
				<Image src={myPicture} alt="" layout="fill" priority />
			</span>
			<section className="mt-8">
				<Image src={topLayeredWaves} alt="" layout="responsive" />
				<div className="relative -top-1 text-center bg-main-black text-main-white">
					<div className="pt-4 pb-2 mx-auto w-32 flex justify-between items-center">
						<span className="grid place-items-center relative w-8 h-8">
							<Image src={JavaScriptIcon} alt="" layout="fill" />
						</span>
						<span className="grid place-items-center relative w-8 h-8">
							<Image src={ReactIcon} alt="" layout="fill" />
						</span>
						<span className="grid place-items-center relative w-8 h-8">
							<Image src={ReduxIcon} alt="" layout="fill" />
						</span>
					</div>
					<h1 className="font-bold text-2xl">I&apos;m Dante Expósito</h1>
					<p className="font-light text-sm w-56 mx-auto">
						A self-taught front-end web developer, who loves to design and build
						web applications.
					</p>
					<div className="pt-8 flex flex-col justify-center items-center">
						<h2
							data-title="Skills"
							className={`relative w-min font-bold text-2xl text-transparent ${
								isDarkMode ? "text-transparent-light" : "text-transparent-dark"
							} before:content-[attr(data-title)] before:absolute before:bottom-[3px] before:text-main-white dark:before:text-main-black`}
						>
							Skills
						</h2>

						{/* BLOB ANIMATION */}
						<div className="hidden absolute translate-y-4">
							<svg
								id="visual"
								viewBox="0 0 540 960"
								width="270"
								height="480"
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
									transform="translate(288.2130571255992 478.7639759064784)"
									style={{ visibility: "hidden" }}
								>
									<path
										id="blob2"
										d="M96.5 -97.7C125.2 -67.9 148.6 -33.9 163.5 14.8C178.3 63.6 184.6 127.3 155.9 149.8C127.3 172.3 63.6 153.6 12.4 141.3C-38.9 128.9 -77.8 122.8 -120.8 100.3C-163.8 77.8 -210.9 38.9 -212.4 -1.5C-214 -42 -169.9 -83.9 -126.9 -113.7C-83.9 -143.6 -42 -161.3 -4 -157.3C33.9 -153.3 67.9 -127.5 96.5 -97.7"
										fill="#494949"
									></path>
								</g>
							</svg>
						</div>

						<div>Skills</div>
						<div>Squares</div>
					</div>
				</div>
				<span className="relative -top-2">
					<Image src={bottomLayeredWaves} alt="" layout="responsive" />
				</span>
			</section>
		</main>
	);
};
