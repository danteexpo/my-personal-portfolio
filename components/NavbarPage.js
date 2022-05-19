// React & Next
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Hooks
import { useMode } from "../hooks/useMode";
// Images
import closeIcon from "../public/NavbarPage/close.svg";
import closeIcon2 from "../public/NavbarPage/close-2.svg";

const links = [
	{ id: 0, name: "Home" },
	{ id: 1, name: "Skills" },
	{ id: 2, name: "Projects" },
	{ id: 3, name: "Break" },
	{ id: 4, name: "Contact" },
];

export const NavbarPage = ({ handleClose }) => {
	const { mode } = useMode();

	return (
		<div className="absolute top-0 h-screen w-screen grid place-items-center bg-main-white dark:bg-true-black z-10 p-4">
			<span
				className="absolute top-4 left-4 cursor-pointer"
				onClick={handleClose}
			>
				{mode === "light" && (
					<Image src={closeIcon} alt="See page" width={22} height={22} />
				)}
				{mode === "dark" && (
					<Image src={closeIcon2} alt="See page" width={22} height={22} />
				)}
			</span>
			<ul
				className={`grid gap-4 underline underline-offset-1 decoration-2 font-bold text-2xl text-transparent ${
					mode === "dark" ? "text-transparent-dark" : "text-transparent-light"
				}`}
			>
				{links.map(link => (
					<Link href={`#${link.name.toLowerCase()}`} key={link.id}>
						<li
							onClick={handleClose}
							data-title={link.name}
							className="relative before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-main-black dark:before:text-main-white cursor-pointer"
						>
							{link.name}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};
