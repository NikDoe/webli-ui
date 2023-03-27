import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

import path from "path";

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "./src/styles/global.scss";
            		@import "./src/styles/colors.scss";
            	`,
			},
		},
	},
	plugins: [svgr(), react(), dts()],
	resolve: {
		alias: {
			assets: path.resolve(__dirname, "./src/assets"),
			components: path.resolve(__dirname, "./src/components"),
			types: path.resolve(__dirname, "./src/types"),
			utils: path.resolve(__dirname, "./src/utils"),
		},
	},
	build: {
		emptyOutDir: true,
		lib: {
			name: "webli-ui",
			entry: path.resolve(__dirname, "src/index.ts"),
			fileName: "index",
		},
		rollupOptions: {
			external: ["react", "react-transition-group"],
			output: {
				globals: {
					react: "react",
					"react-transition-group": "ReactTransitionGroup",
				},
			},
		},
	},
});
