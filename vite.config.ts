import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
            		@import "./src/styles/colors.scss";
            	`,
			},
		},
	},
	plugins: [svgr(), react(), dts()],
	build: {
		emptyOutDir: true,
		lib: {
			name: "webli-ui",
			entry: path.resolve(__dirname, "src/index.ts"),
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
