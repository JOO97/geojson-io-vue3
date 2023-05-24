import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollup } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/rollup';
import esbuild from 'rollup-plugin-esbuild';
import { parallel } from 'gulp';
// import glob from 'fast-glob';
import postcss from 'rollup-plugin-postcss'; //支持文件中导入.css文件
import { plusRoot, vpOutput, withTaskName, writeBundles, formatBundleFilename } from '../utils';
import { target, PKG_BANNER, PKG_GLOBAL_NAME } from '../build.info';

// MD 与 ESM 两种格式。
async function buildFullEntry(minify: boolean) {
	const bundle = await rollup({
		input: path.resolve(plusRoot, 'index.ts'), // 组合集合入口
		plugins: [
			DefineOptions(),
			vue({
				isProduction: true,
			}),
			nodeResolve({
				extensions: ['.mjs', '.js', '.json', '.ts'],
			}),
			postcss(),
			commonjs(),
			esbuild({
				exclude: [],
				minify,
				sourceMap: minify,
				target,
				loaders: {
					'.vue': 'ts',
				},
				define: {
					'process.env.NODE_ENV': JSON.stringify('production'),
				},
			}),
		],
		external: (id: string) => /^vue/.test(id) || /^@plus/.test(id),
	});
	await writeBundles(bundle, [
		{
			format: 'umd',
			file: path.resolve(vpOutput, 'dist', formatBundleFilename('index.full', minify, 'js')),
			exports: 'named',
			name: PKG_GLOBAL_NAME,
			globals: {
				vue: 'Vue',
			},
			sourcemap: minify,
			banner: PKG_BANNER,
		},
		{
			format: 'esm',
			file: path.resolve(vpOutput, 'dist', formatBundleFilename('index.full', minify, 'mjs')),
			sourcemap: minify,
			banner: PKG_BANNER,
		},
	]);
}
//, buildFullLocale(minify)
export const buildFull = (minify: boolean) => async () => Promise.all([buildFullEntry(minify)]);

// 全量打包(压缩、未压缩两个版本)
export const buildFullBundle = parallel(
	withTaskName('buildFullMinified', buildFull(true)),
	withTaskName('buildFull', buildFull(false))
);
