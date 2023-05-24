import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import vueTsc from 'vue-tsc';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// vueTsc({
		// 	root: resolve(__dirname, 'src'), // 指定源代码根目录
		// 	outDir: 'dist', // 指定输出目录
		// 	deleteOutputPath: true, // 构建前删除输出目录中的文件
		// 	declaration: true, // 生成类型声明文件
		// 	watch: process.env.NODE_ENV === 'development', // 开发模式下监听文件变化
		// }),
		VueSetupExtend(),
		dts({
			outputDir: resolve(__dirname, './dist/types'),
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	build: {
		// sourcemap: true,
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			name: 'geojson-io',
			fileName: (format) => `geojson-io.${format}.js`,
		},
		rollupOptions: {
			external: ['vue', 'element-plus'],
			output: {
				globals: {
					vue: 'Vue',
					'element-plus': 'ElementPlus',
				},
			},
		},
	},
});
