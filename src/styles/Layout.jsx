import styled from "styled-components";
import Div100vh from "react-div-100vh";

import { backgroundColor, textColor, cardBackground } from "./Theme";
import { Card as ReactCard, DropdownMenu as ReactDropMenu, NavLink as ReactNavLink } from "reactstrap";

export const Wrapper = styled.div`
	background-color: ${backgroundColor} !important;
	color: ${textColor} !important;
`;

export const GlobalContainer = styled.div`
	height: 100%;
	width: 100vw;
	margin: 0;
`;

export const ConnectionContainer = styled(GlobalContainer)`
	background: url("https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
	background-size: cover;
	background-position: center;
`;

export const Card = styled(ReactCard)`
	background: ${cardBackground};
	width: 100%;
`;

export const NavLink = styled(ReactNavLink)`
	color: ${textColor} !important;
`;

export const DropdownMenu = styled(ReactDropMenu)`
	background-color: ${cardBackground};
`;
