import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/button";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Button onClick={() => ""}>кнпока</Button>
	</React.StrictMode>,
);
