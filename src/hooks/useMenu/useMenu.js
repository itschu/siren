import { createContext, useContext, useState } from "react";
const Provider = createContext();

const Menu = ({ children }) => {
	const [menuState, setMenuState] = useState(false);
	return (
		<Provider.Provider value={{ menuState, setMenuState }}>
			{children}
		</Provider.Provider>
	);
};

const useMenu = () => useContext(Provider);

export { Menu, useMenu };
