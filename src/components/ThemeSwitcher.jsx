import React from "react";

//Styled Component
import { NavLink } from "../styles/Layout";

//Styles
import { useTheme } from "../utils/ThemeContext";
import { withTheme } from "styled-components";

function ThemeSwitcher(props) {
	const themeToggle = useTheme();

	// `Button` onClick calls themeState.toggle()
	return (
		<NavLink onClick={() => themeToggle.toggle()}>
			{props.theme.mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
		</NavLink>
	);
}

export default withTheme(ThemeSwitcher);
