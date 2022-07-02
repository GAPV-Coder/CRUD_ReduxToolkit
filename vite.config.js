import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://GAPV-Coder.github.io/CRUD_ReduxToolkit/",
	plugins: [react()]
});
