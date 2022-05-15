// React & Next
import Head from "next/head";
import { useState, useEffect } from "react";
// Components
import { Break } from "../components/Break";
import { Navbar } from "../components/Navbar";
import { NavbarPage } from "../components/NavbarPage";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { useMode } from "../hooks/useMode";
import { BackTop } from "../components/BackTop";
// React Spring
import { animated, useSpring } from "@react-spring/web";

export default function Home() {
	const [isClosed, setIsClosed] = useState(true);
	const { mode } = useMode();

	// React Spring
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
	});

	const handleClose = () => {
		setIsClosed(prevState => (prevState ? false : true));
	};

	useEffect(() => {
		document.documentElement.className = mode === "light" ? "light" : "dark";
	}, [mode]);

	return (
		<animated.div
			className={`${mode === "dark" ? "dark" : ""} relative min-w-[280px]`}
			style={props}
		>
			<Head>
				<title>Dante Expósito | Portfolio</title>
				<meta
					name="description"
					content="A Unique Frontend Web Developer Portfolio."
				/>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			{!isClosed && <NavbarPage handleClose={handleClose} />}
			{isClosed && (
				<>
					<Navbar handleClose={handleClose} />
					<BackTop />
					<Presentation />
					<Projects />
					<Break />
					<Contact />
				</>
			)}
		</animated.div>
	);
}
