import Image from "next/image";
import Link from "next/link";
import React from "react";
import backTop from "../public/back-top.svg";

export const BackTop = () => {
	return (
		<Link href="#navbar">
			<span className="fixed bottom-4 right-4 rounded-full cursor-pointer z-20">
				<Image src={backTop} alt="Scroll to top" width={48} height={48} />
			</span>
		</Link>
	);
};
