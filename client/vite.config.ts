import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			external: ["bootstrap"],
		},
	},
	preview: {
		port: 3000,
	},
	server: {
		port: 3000,
		open: true,
		proxy: {
			"/api": {
				target: "http://localhost:3001",
				changeOrigin: true,
				secure: false,
			},
			"/auth": {
				target: "http://localhost:3001",
				changeOrigin: true,
				secure: false,
			},
			"/openai": {
				target: "http://localhost:3001",
				changeOrigin: true,
				secure: false,
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				includePaths: ["./node_modules"],
			},
		},
	},
});
