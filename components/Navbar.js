import React from "react";
import Image from "next/image";
import Link from "next/link";
// Hooks
import { useMode } from "../hooks/useMode";
// Images
import burgerIcon from "../public/Navbar/burger.svg";
import burgerIcon2 from "../public/Navbar/burger-2.svg";
import moonIcon from "../public/Navbar/moon.svg";
import sunIcon from "../public/Navbar/sun.svg";

const links = [
	{ id: 0, name: "Home" },
	{ id: 1, name: "Skills" },
	{ id: 2, name: "Projects" },
	{ id: 3, name: "Break" },
	{ id: 4, name: "Contact" },
];

export const Navbar = ({ handleClose }) => {
	const { changeMode, mode } = useMode();

	return (
		<>
			<nav className="flex justify-between items-center m-4 max-w-3xl md:mx-auto">
				<span
					className="grid place-items-center cursor-pointer sm:hidden"
					onClick={handleClose}
				>
					{mode === "light" && (
						<Image src={burgerIcon} alt="See links" width={22} height={20} />
					)}
					{mode === "dark" && (
						<Image src={burgerIcon2} alt="See links" width={22} height={20} />
					)}
				</span>
				<span className="hidden sm:flex justify-center items-center gap-4 font-medium">
					{links.map(link => (
						<Link href={`#${link.name.toLowerCase()}`} key={link.id}>
							<p className="cursor-pointer hover:underline hover:underline-offset-1 hover:decoration-2">
								{link.name}
							</p>
						</Link>
					))}
				</span>
				<span
					className="grid place-items-center relative w-8 h-8 rounded-full cursor-pointer sm:w-10 sm:h-10 hover:ring-2 hover:ring-gray-light dark:hover:ring-gray-dark"
					onClick={() => changeMode(mode === "light" ? "dark" : "light")}
				>
					{mode === "light" && (
						<Image src={moonIcon} alt="Dark mode" layout="fill" />
					)}
					{mode === "dark" && (
						<Image src={sunIcon} alt="Light mode" layout="fill" />
					)}
				</span>
			</nav>
		</>
	);
};
