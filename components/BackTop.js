import Image from "next/image";
import React from "react";
import backTop from "../public/back-top.svg";

export const BackTop = () => {
	const handleScroll = () => {
		window.scrollTo(0, 0);
	};

	return (
		<span
			className="fixed bottom-4 right-4 rounded-full cursor-pointer z-20"
			onClick={handleScroll}
		>
			<Image src={backTop} alt="Scroll to top" width={48} height={48} />
		</span>
	);
};
