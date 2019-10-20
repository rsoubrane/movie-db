import React, { useState } from "react";

//Styled Component
import { Wrapper } from "../styles/Layout";

//Style
import { ThemeProvider } from "styled-components";

//Define our toggle context, with a default empty toggle function
const ThemeToggleContext = React.createContext();

//Define exportable useContext hook object
export const useTheme = () => React.useContext(ThemeToggleContext);

//Define MyThemeProvider
export const MyThemeProvider = ({ children }) => {
	const stored = localStorage.getItem("themeMode");
	if (!stored) {
		localStorage.setItem("themeMode", "light");
	}

	const [themeState, setThemeState] = useState({
		mode: stored ? stored : "light"
	});

	//Define the toggle function and update the state
	const toggle = () => {
		const mode = themeState.mode === "light" ? `dark` : `light`;
		localStorage.setItem("themeMode", mode);
		setThemeState({ mode: mode });
	};

	//Render both contexts, thw wrapper and the children
	return (
		<ThemeToggleContext.Provider value={{ toggle: toggle }}>
			<ThemeProvider
				theme={{
					mode: themeState.mode
				}}>
				<Wrapper>{children}</Wrapper>
			</ThemeProvider>
		</ThemeToggleContext.Provider>
	);
};

export default ThemeProvider;
