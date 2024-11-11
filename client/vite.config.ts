import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			external: ["bootstrap"],
		},
	},
	server: {
		open: true,
		proxy: {
			"/api": {
				target: "https://moody-lawj.onrender.com/api",
				changeOrigin: true,
				secure: false,
			},
			"/auth": {
				target: "https://moody-lawj.onrender.com/auth",
				changeOrigin: true,
				secure: false,
			},
			"/openai": {
				target: "https://moody-lawj.onrender.com/openai",
				changeOrigin: true,
				secure: false,
			}
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
