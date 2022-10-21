import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyled from "./styles/Global/GlobalStyled";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<GlobalStyled />
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
