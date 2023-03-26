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
			assets: "/src/assets",
			components: "/src/components",
			types: "/src/types",
			utils: "/src/utils",
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
