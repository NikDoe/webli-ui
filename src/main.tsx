import React from "react";
import ReactDOM from "react-dom/client";
import { FormField } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<FormField type="text" />
		<FormField type="password" />
	</React.StrictMode>,
);
