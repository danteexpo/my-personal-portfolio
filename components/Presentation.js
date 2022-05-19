// React & Next
import React from "react";
import Image from "next/image";
// Components
import { Skills } from "./Skills";
// Hooks
import { useMode } from "../hooks/useMode";
// Images
import myPicture from "../public/Presentation/picture.svg";
// Techs
import JavaScriptIcon from "../public/Presentation/Techs/JavaScript.svg";
import JavaScriptBlackIcon from "../public/Presentation/Techs/JavaScript-black.svg";
import ReactIcon from "../public/Presentation/Techs/React.svg";
import ReactBlackIcon from "../public/Presentation/Techs/React-black.svg";
import ReduxIcon from "../public/Presentation/Techs/Redux.svg";
import ReduxBlackIcon from "../public/Presentation/Techs/Redux-black.svg";

export const Presentation = () => {
	const { mode } = useMode();

	return (
		<main id="home" className="mt-20">
			<section className="sm:flex sm:px-4 sm:justify-between sm:w-full max-w-3xl md:px-0 md:mx-auto">
				<div className="hidden sm:flex sm:flex-col">
					<div className="pt-4 pb-2 w-32 flex justify-between items-center">
						<span className="grid place-items-center relative w-8 h-8">
							{mode === "light" && (
								<Image src={JavaScriptBlackIcon} alt="" layout="fill" />
							)}
							{mode === "dark" && (
								<Image src={JavaScriptIcon} alt="" layout="fill" />
							)}
						</span>
						<span className="grid place-items-center relative w-8 h-8">
							{mode === "light" && (
								<Image src={ReactBlackIcon} alt="" layout="fill" />
							)}
							{mode === "dark" && (
								<Image src={ReactIcon} alt="" layout="fill" />
							)}
						</span>
						<span className="grid place-items-center relative w-8 h-8">
							{mode === "light" && (
								<Image src={ReduxBlackIcon} alt="" layout="fill" />
							)}
							{mode === "dark" && (
								<Image src={ReduxIcon} alt="" layout="fill" />
							)}
						</span>
					</div>
					<h1 className="font-bold text-3xl lg:text-4xl">
						I&apos;m Dante Expósito
					</h1>
					<p className="font-light text-lg w-72 lg:text-xl lg:w-80">
						A self-taught front-end web developer, who loves to design and build
						web applications.
					</p>
				</div>

				<span className="mx-auto grid place-items-center relative w-56 h-56 sm:mx-0">
					<Image src={myPicture} alt="" layout="fill" />
				</span>
			</section>

			<Skills />
		</main>
	);
};
