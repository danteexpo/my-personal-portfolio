import { useState, useEffect } from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { NavbarPage } from "../components/NavbarPage";

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
		<div className={`${isDarkMode ? "dark" : ""}`}>
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
				<div>
					<Navbar
						isDarkMode={isDarkMode}
						handleMode={handleMode}
						handleClose={handleClose}
					/>
					<div>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
						<h2>fjdskla</h2>
					</div>
				</div>
			)}
		</div>
	);
}
