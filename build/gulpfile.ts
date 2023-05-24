import path, { resolve } from 'path';
import { copy } from 'fs-extra';

import { parallel, series } from 'gulp';
import { copyFile, cp, mkdir } from 'fs/promises';

import {
	run,
	withTaskName,
	runTask,
	vpOutput,
	buildOutput,
	buildConfig,
	epPackage,
	projRoot,
} from './src';

import type { TaskFunction } from 'gulp';

/**
 * 复制package.json、README.md、global.d.ts文件到指定目录
 */
export const copyFiles = () =>
	Promise.all([
		copyFile(epPackage, path.join(buildOutput, 'package.json')),
		copyFile(path.resolve(projRoot, 'README.md'), path.resolve(buildOutput, 'README.md')),
		copyFile(path.resolve(projRoot, 'typings'), path.resolve(buildOutput, 'typings')),
	]);

/**
 * 拷贝types声明文件
 */
export const copyTypesDefinitions: TaskFunction = (done) => {
	const src = path.resolve(buildOutput, 'types');
	const copyTypes = (module: string) =>
		withTaskName(`copyTypes:${module}`, () =>
			copy(src, buildConfig[module].output.path, { recursive: true })
		);
	return parallel(copyTypes('esm'), copyTypes('cjs'))(done);
};

export default series(
	withTaskName('cleanDist', async () => run('rm -rf ./dist')),
	withTaskName('createOutput', () => mkdir(vpOutput, { recursive: true })), // recursive:递归创建目录
	// parallel(),
	// runTask('buildModules'), // 按组件模块打包
	// runTask('buildFullBundle'), // 全量打包
	// runTask('generateTypesDefinitions') // 类型声明产物
	//拷贝文件
	parallel(copyFiles)
);

export * from './src';
