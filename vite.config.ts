import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		emptyOutDir: true,
		lib: {
			name: "webli-ui",
			entry: path.resolve(__dirname, "src/index.ts"),
			formats: ["umd"],
			fileName: "index",
		},
		rollupOptions: {
			external: ["react"],
			output: {
				globals: {
					react: "react",
				},
			},
		},
	},
});
