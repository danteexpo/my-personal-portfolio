import React from "react";
// Hooks
import { useMode } from "../hooks/useMode";

export const Footer = () => {
	const { mode } = useMode();

	return (
		<div
			className={`mx-auto max-w-sm pb-4 bg-[#3c3c3c] text-main-white text-center font-light sm:font-normal sm:pt-4 sm:bg-transparent sm:-top-0 ${
				mode === "dark" ? "sm:text-main-white" : "sm:text-main-black"
			}`}
		>
			<div className="relative -top-4 bg-[#3c3c3c] sm:hidden">
				<p>© 2022 Dante Expósito.</p>
				<p>All Rights Reserved</p>
			</div>
			<p className="hidden sm:block">© 2022 Dante Expósito.</p>
			<p className="hidden sm:block">All Rights Reserved</p>
		</div>
	);
};
