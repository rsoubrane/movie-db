//React
import React from "react";
import ReactDOM from "react-dom";

//Imports
import App from "./App";

//Theme
import { MyThemeProvider } from "./utils/ThemeContext";

//Service Worker
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<MyThemeProvider>
		<App />
	</MyThemeProvider>,
	document.getElementById("root")
);

serviceWorker.unregister();
