import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
const Provider = createContext();

const Menu = ({ children }) => {
	const [menuState, setMenuState] = useState(false);
	const router = useRouter();
	const handleRouteChange = () => setMenuState(false);

	useEffect(() => {
		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [router]);

	return (
		<Provider.Provider value={{ menuState, setMenuState }}>
			{children}
		</Provider.Provider>
	);
};

const useMenu = () => useContext(Provider);

export { Menu, useMenu };
