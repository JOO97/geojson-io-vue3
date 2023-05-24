// import consola from 'consola';
// import chalk from 'chalk';
import { rollup } from 'rollup';
// Vite 官方插件，把 Vue SFC 编译为 JavaScript 代码。
import vue from '@vitejs/plugin-vue';
// Vite 官方插件，支持 Vue JSX 语法
import vueJsx from '@vitejs/plugin-vue-jsx';
import glob from 'fast-glob';

// 该插件的功能定义组件的name, 还可以定义组件的props、emits、render
// 使用方式
/* <script setup lang="ts">
        defineOptions({
            name: 'App'
        })
    </script>
*/
import DefineOptions from 'unplugin-vue-define-options/rollup';

/*
  Rollup 官方插件，让 Rollup 支持 Node.js 的解析算法，用于解析 node_modules。
  extensions 选项：默认是不包含 .ts 后缀名的，所以需要手动加上
*/
import { nodeResolve } from '@rollup/plugin-node-resolve';
// Rollup 官方插件，用于将 CommonJS 模块转换为 ES6，这样就可以被 Rollup 解析
import commonjs from '@rollup/plugin-commonjs';
// 用于把 TypeScript 转换为 JavaScript，并可以用于压缩代码、转换语法。基于 ESBuild，速度极快
import esbuild from 'rollup-plugin-esbuild'; // 替代rollup-plugin-typescript2, @rollup/plugin-typescript and rollup-plugin-terser组合功能
import { excludeFiles, writeBundles, pkgRoot, plusRoot, generateExternal } from '../utils';
import { buildConfigEntries, target } from '../build.info';
import type { OutputOptions } from 'rollup';

export const buildModules = async () => {
	const input = excludeFiles(
		await glob('**/*.{js,ts,vue}', {
			cwd: pkgRoot,
			absolute: true,
			onlyFiles: true,
		})
	);

	const bundle = await rollup({
		input,
		plugins: [
			DefineOptions(),
			vue({
				isProduction: false,
			}),
			vueJsx(),
			nodeResolve({
				extensions: ['.mjs', '.js', '.json', '.ts'],
			}),
			commonjs(),
			// 转换ESNext和TypeScript代码
			esbuild({
				sourceMap: false,
				target,
				tsconfig: 'tsconfig.json', // default
				minify: true, //process.env.NODE_ENV === 'production',
				define: {
					__VERSION__: '"snxun.com"',
				},
				banner: `/* 我是一个banner */`,
				exclude: ['node_modules'],
				loaders: {
					// 通过 @vitejs/plugin-vue 插件编译后，Vue SFC 就是普通的 JavaScript 代码了，但是其后缀还是 .vue 。所以需要添加 '.vue': 'ts',，把 .vue 文件看作普通的 .js 文件。
					//  Add .vue files support
					'.vue': 'ts',
					// Enable JSX in .js files too
					'.js': 'jsx',
				},
			}),
		],
		external: await generateExternal({ full: false }),
		treeshake: true,
	});
	await writeBundles(
		bundle,
		buildConfigEntries.map(([module, config]): OutputOptions => {
			return {
				format: config.format,
				dir: config.output.path,
				exports: module === 'cjs' ? 'named' : undefined,
				// 开启后，构建产物将保持与源码一样的文件结构。

				// 可以理解为仅把 Vue SFC、TypeScript 等转换成了 JavaScript 代码，其他不变
				preserveModules: true,
				preserveModulesRoot: plusRoot,
				sourcemap: false,
				entryFileNames: `[name].${config.ext}`,
			};
		})
	);
};
