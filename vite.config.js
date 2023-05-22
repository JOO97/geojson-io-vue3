import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({ customElement: true }),
		typescript({
			declaration: true,
			declarationDir: 'dist/types',
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	build: {
		lib: {
			entry: 'src/main.ts',
			name: 'geojson-io',
			fileName: (format) => `geojson-io-vue.${format}.js`,
		},
	},
	rollupOptions: {
		external: ['vue'],
		output: {
			globals: {
				vue: 'Vue',
			},
		},
	},
});
