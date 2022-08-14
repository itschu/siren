import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { Menu } from "@/hooks/useMenu";

function MyApp({ Component, pageProps }) {
	return (
		<Menu>
			<NextNProgress />
			<Component {...pageProps} />
		</Menu>
	);
}

export default MyApp;
