import React from "react";

import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
	return (
		<BrowserRouter>
			<Routes />
			<GlobalStyles />
		</BrowserRouter>
	);
}

export default App;
