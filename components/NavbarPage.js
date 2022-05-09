import React from "react";
import Image from "next/image";
// Images
import closeIcon from "../public/NavbarPage/close.svg";
import closeIcon2 from "../public/NavbarPage/close-2.svg";

export const NavbarPage = ({ isDarkMode, handleClose }) => {
	return (
		<div className="absolute top-0 h-screen w-screen grid place-items-center bg-main-white dark:bg-true-black z-10 p-4">
			<span
				className="absolute top-4 left-4 cursor-pointer"
				onClick={handleClose}
			>
				{!isDarkMode && <Image src={closeIcon} alt="" width={22} height={22} />}
				{isDarkMode && <Image src={closeIcon2} alt="" width={22} height={22} />}
			</span>
			<ul
				className={`grid gap-4 underline underline-offset-1 decoration-2 font-bold text-2xl text-transparent ${
					isDarkMode ? "text-transparent-dark" : "text-transparent-light"
				}`}
			>
				<li
					data-title="Home"
					className="relative before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-main-black dark:before:text-main-white cursor-pointer"
				>
					Home
				</li>
				<li
					data-title="Skills"
					className="relative before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-main-black dark:before:text-main-white cursor-pointer"
				>
					Skills
				</li>
				<li
					data-title="Projects"
					className="relative before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-main-black dark:before:text-main-white cursor-pointer"
				>
					Projects
				</li>
				<li
					data-title="Break"
					className="relative before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-main-black dark:before:text-main-white cursor-pointer"
				>
					Break
				</li>
				<li
					data-title="Contact"
					className="relative before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-main-black dark:before:text-main-white cursor-pointer"
				>
					Contact
				</li>
			</ul>
		</div>
	);
};
