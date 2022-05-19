import "../styles/globals.css";
// Context
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
