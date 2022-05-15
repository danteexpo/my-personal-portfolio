import "../styles/globals.css";
import { ModeProvider } from "../context/ModeContext";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ModeProvider>
				<Component {...pageProps} />
			</ModeProvider>
		</>
	);
}

export default MyApp;
