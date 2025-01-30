import "@mantine/tiptap/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

import "@mantine/core/styles.css";
import "./index.css";

const root = document.getElementById("root");

if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>
	);
}
