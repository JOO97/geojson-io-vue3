import path from 'path';
import type { ModuleFormat } from 'rollup';

import { vpOutput } from './utils/paths';

export const PKG_NAME = 'visix-ui';
export const PKG_BANNER = `/* snxun.com */`;
export const PKG_GLOBAL_NAME = 'VI'; // UMD全局库名称

export const modules = ['esm', 'cjs'] as const; // as const 变成只读

export type Module = typeof modules[number];
export interface BuildInfo {
	module: 'ESNext' | 'CommonJS';
	format: ModuleFormat;
	ext: 'mjs' | 'cjs' | 'js';
	output: {
		/** e.g: `es` */
		name: string;
		/** e.g: `dist/visix-ui/es` */
		path: string;
	};
	bundle: {
		/** e.g: `visix-ui/es` */
		path: string;
	};
}

// Record<关键字key,value>
export const buildConfig: Record<Module, BuildInfo> = {
	// esm格式
	esm: {
		module: 'ESNext',
		format: 'esm',
		ext: 'mjs',
		output: {
			name: 'es',
			path: path.resolve(vpOutput, 'es'),
		},
		bundle: {
			path: `${PKG_NAME}/es`,
		},
	},
	// CommonJS规范格式
	cjs: {
		module: 'CommonJS',
		format: 'cjs',
		ext: 'js',
		output: {
			name: 'lib',
			path: path.resolve(vpOutput, 'lib'),
		},
		bundle: {
			path: `${PKG_NAME}/lib`,
		},
	},
};
export const buildConfigEntries = Object.entries(buildConfig) as BuildConfigEntries;

export type BuildConfig = typeof buildConfig;
export type BuildConfigEntries = [Module, BuildInfo][];

export const target = 'es2018';
