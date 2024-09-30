import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import dts from 'vite-plugin-dts';
import copyFiles from 'vite-plugin-copy-files';

import { visualizer } from 'rollup-plugin-visualizer';

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
			entryRoot: resolve(__dirname, './src'),
			outputDir: resolve(__dirname, './dist/typings'),
			cleanVueFileName: true, //是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
			insertTypesEntry: false,
			copyDtsFiles: true,
		}),
		copyFiles({
			include: [/package.json/, /README.md/],
			// formatFilePath: (file: string) => resolve(__dirname, `./dist/${file}`),
		}),
		visualizer({
			emitFile: true,
			filename: 'stats.html',
		}),
		// chunkSplitPlugin(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'geojson-io',
			fileName: (format) => `geojson-io.${format}.js`,
		},
		rollupOptions: {
			external: ['vue', 'element-plus'],
			output: {
				assetFileNames: `geojson-io.[ext]`,
				globals: {
					vue: 'Vue',
					'element-plus': 'ElementPlus',
				},
			},
			treeshake: true,
		},
		watch: {
			include: 'src/*',
			skipWrite: true,
		},
	},
	server: {
		fs: {
			// 允许为项目根目录的上一级提供服务
			allow: ['..'],
		},
	},
});
