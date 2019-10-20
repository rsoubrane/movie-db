import { Grid as MUIGrid } from "@material-ui/core";

import styled from "styled-components";

const cover =
	"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const backDropBG = "rgba(0,0,0,0.7)";

export const Root = styled.div`
	width: 100%;
	height: 100vh;
	text-align: left;
	position: relative;
	background: url(${cover});
	background-size: cover;
	background-position: center;
	color: #ffffff;
`;

export const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: ${backDropBG};
`;

export const Grid = styled(MUIGrid)`
	height: 100%;
	z-index: 2;
	position: relative;
`;

export const connectionStyles = ({ breakpoints, palette }) => {
	return {
		appBar: {
			background: "none"
		},
		toolbar: {
			minHeight: 64
		},
		brand: {
			color: "#ffffff",
			fontWeight: 900
		},
		logo: {
			width: 40,
			height: 40,
			marginLeft: "auto",
			[breakpoints.up("sm")]: {
				marginRight: "auto"
			}
		},
		mlNormal: {
			marginLeft: 16
		},
		content: {
			padding: 16
		},
		input: {
			background: "rgba(255,255,255,0.16)",
			"&:hover": {
				background: "rgba(255,255,255,0.24)"
			},
			"&$focused": {
				background: "rgba(255,255,255,0.24)"
			}
		},
		inputInput: {
			color: "#ffffff"
		},
		underline: {
			"&:after": {
				borderColor: palette.primary.light
			}
		},
		focused: {},
		inputLabel: {
			color: "#ffffff",
			opacity: 0.8,
			"&$focused": {
				opacity: 1,
				color: "#ffffff"
			}
		},
		checkbox: {
			color: "rgba(255,255,255,0.87)"
		},
		checkboxLabel: {
			color: "rgba(255,255,255,0.87)"
		},
		grey: {
			color: "#c5c5c5"
		},
		buttonLabel: {
			textTransform: "none"
		},
		bottomSignUp: {
			textAlign: "center",
			marginTop: 24,
			marginBottom: 16
		},
		forgetPassword: {
			textAlign: "center",
			color: "#ffffff",
			[breakpoints.only("xs")]: {
				position: "absolute",
				bottom: 32,
				left: "50%",
				transform: "translateX(-50%)"
			},
			[breakpoints.up("sm")]: {
				marginTop: 40
			}
		}
	};
};
