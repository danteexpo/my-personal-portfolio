import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en" translate="no">
			<Head>
				<meta property="og:title" content="Dante Expósito" />
				<meta property="og:type" content="Portfolio" />
				<meta property="og:url" content="https://www.danteexpo.com/" />
				<meta property="og:image" content="https://i.imgur.com/30oilmT.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
