import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import typescript from '@rollup/plugin-typescript';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		typescript({
			declaration: true,
			declarationDir: 'dist/types',
		}),
		VueSetupExtend(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	build: {
		sourcemap: true,
		// lib: {
		// 	entry: 'src/main.ts',
		// 	name: 'geojson-io',
		// 	fileName: (format) => `geojson-io.${format}.js`,
		// },
	},
	// rollupOptions: {
	// 	external: ['vue', 'element-plus'],
	// 	output: {
	// 		globals: {
	// 			vue: 'Vue',
	// 		},
	// 	},
	// },
});
