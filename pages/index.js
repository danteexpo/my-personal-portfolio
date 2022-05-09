import Head from "next/head";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { NavbarPage } from "../components/NavbarPage";
import { Presentation } from "../components/Presentation";

export default function Home() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isClosed, setIsClosed] = useState(true);

	const handleMode = () => {
		setIsDarkMode(prevState => (prevState ? false : true));
	};

	const handleClose = () => {
		setIsClosed(prevState => (prevState ? false : true));
	};

	useEffect(() => {
		document.documentElement.className = isDarkMode ? "dark" : "light";
	}, [isDarkMode]);

	return (
		<div className={`${isDarkMode ? "dark" : ""} min-w-[320px]`}>
			<Head>
				<title>Dante Expósito | Portfolio</title>
				<meta
					name="description"
					content="A Unique Frontend Web Developer Portfolio."
				/>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			{/* MOBILE NAVBAR CONDITIONAL */}
			{!isClosed && (
				<NavbarPage isDarkMode={isDarkMode} handleClose={handleClose} />
			)}
			{isClosed && (
				<div>
					<Navbar
						isDarkMode={isDarkMode}
						handleMode={handleMode}
						handleClose={handleClose}
					/>
					<Presentation isDarkMode={isDarkMode} />
				</div>
			)}
			Redux, preguntas y codewars
		</div>
	);
}
