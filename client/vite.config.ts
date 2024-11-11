import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			external: ["bootstrap"],
		},
	},
  preview:{
    port: 10696
  },
	server: {
		port: 10696,
		open: true,
		proxy: {
			"/api": {
				target: "http://localhost:10000",
				changeOrigin: true,
				secure: false,
			},
			"/auth": {
				target: "http://localhost:10000",
				changeOrigin: true,
				secure: false,
			},
			"/openai": {
				target: "http://localhost:10000",
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
