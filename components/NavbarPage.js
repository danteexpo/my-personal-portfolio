import React from "react";
import Image from "next/image";
import closeIcon from "../public/close.svg";

export const NavbarPage = ({ handleClose }) => {
	return (
		<div className="absolute top-0 h-screen w-screen grid place-items-center bg-[#eaeaea] z-10 p-4">
			<span
				className="absolute top-4 left-4 cursor-pointer"
				onClick={handleClose}
			>
				<Image src={closeIcon} alt="" width={22} height={22} />
			</span>
			<ul className="grid gap-4 underline underline-offset-1 decoration-2 font-bold text-2xl">
				<li
					data-title="Home"
					className="relative text-transparent  before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-[#191919]  cursor-pointer"
				>
					Home
				</li>
				<li
					data-title="Skills"
					className="relative text-transparent  before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-[#191919]  cursor-pointer"
				>
					Skills
				</li>
				<li
					data-title="Projects"
					className="relative text-transparent  before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-[#191919]  cursor-pointer"
				>
					Projects
				</li>
				<li
					data-title="Break"
					className="relative text-transparent  before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-[#191919]  cursor-pointer"
				>
					Break
				</li>
				<li
					data-title="Contact"
					className="relative text-transparent  before:content-[attr(data-title)] before:absolute before:top-0 before:left-[-2px] before:text-[#191919]  cursor-pointer"
				>
					Contact
				</li>
			</ul>
		</div>
	);
};
