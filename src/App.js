import React from "react";

//Actions
import { logoutUser } from "./actions/userActions";

//Components
import AuthRoute from "./utils/AuthRoute";

//Pages
import Home from "./pages/Home";
import Connection from "./pages/Connection/Connection";

//Utils
import jwtDecode from "jwt-decode";
import axios from "axios";

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Style
import "./App.css";
import { withTheme } from "styled-components";

function App() {
	let authenticated;
	const token = localStorage.FBIdToken;
	if (token) {
		const decodedToken = jwtDecode(token);
		if (decodedToken.exp * 1000 < Date.now()) {
			window.location.href = "/login";
		} else {
			authenticated = true;
			axios.defaults.headers.common["Authorization"] = token;
		}
	}

	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} authenticated={authenticated} eyeColor={"blue"} />
				<AuthRoute exact path='/login' component={Connection} />
				<AuthRoute exact path='/signup' component={Connection} />
			</Switch>
		</Router>
	);
}

export default withTheme(App);
