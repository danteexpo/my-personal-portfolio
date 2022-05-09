import React from "react";
import Image from "next/image";
// Images
import burgerIcon from "../public/Navbar/burger.svg";
import burgerIcon2 from "../public/Navbar/burger-2.svg";
import moonIcon from "../public/Navbar/moon.svg";
import sunIcon from "../public/Navbar/sun.svg";

export const Navbar = ({ isDarkMode, handleMode, handleClose }) => {
	return (
		<>
			<nav className="flex justify-between items-center m-4 max-w-3xl md:mx-auto">
				<span
					className="grid place-items-center cursor-pointer sm:hidden"
					onClick={handleClose}
				>
					{isDarkMode && (
						<Image src={burgerIcon2} alt="" width={22} height={20} />
					)}
					{!isDarkMode && (
						<Image src={burgerIcon} alt="" width={22} height={20} />
					)}
				</span>
				<span className="hidden sm:flex justify-center items-center gap-4 font-medium">
					<p className="cursor-pointer">Home</p>
					<p className="cursor-pointer">Skills</p>
					<p className="cursor-pointer">Projects</p>
					<p className="cursor-pointer">Break</p>
					<p className="cursor-pointer">Contact</p>
				</span>
				<span
					className="grid place-items-center relative w-8 h-8 rounded-full cursor-pointer sm:w-10 sm:h-10 hover:ring-2 hover:ring-gray-light dark:hover:ring-gray-dark"
					onClick={handleMode}
				>
					{isDarkMode && <Image src={sunIcon} alt="" layout="fill" />}
					{!isDarkMode && <Image src={moonIcon} alt="" layout="fill" />}
				</span>
			</nav>
		</>
	);
};
