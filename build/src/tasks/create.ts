/**
 * 创建 dataV component
 * 1. nvm use 10.12.0
 * 2. datav init
 * 3. npm i
 * 4. npm i vue visix-ui
 * 5. sn datav cpn
 */

/**
 * 1. props、emits、expose需要定义在.ts或.js文件中
 * 2. props.styleProps-style 其他props-opt
 * 3. emits-events expose-publishHandler
 */

import fs from 'fs/promises';
import path from 'path';
import minimist from 'minimist';
import { src, lastRun } from 'gulp';

import { epPackage, projRoot, getPackageManifest, run } from '../index';

/**
 * 写入文件
 * @param filePath
 * @param content
 * @param space
 * @returns
 */
const updatePkg = (filePath, content, space = 2) => {
	return new Promise(async (resolve, reject) => {
		try {
			await fs.writeFile(filePath, JSON.stringify(content, null, space));
			resolve(true);
		} catch (error) {
			reject(error);
		}
	});
};

/**
 * 解析命令行参数
 * 参数说明:
 * 1. -n xxx 组件名称(不带前缀)
 */
const parseArgs = (): {
	name: string;
} => {
	try {
		const args = minimist(process.argv.slice(3));
		const { _, n } = args;
		if (!n) throw Error();
		return {
			name: n,
		};
	} catch (error) {
		return {
			name: '',
		};
	}
};

/* 创建dataV component */
export const createDataVCpn = async (): Promise<void> => {
	try {
		//1 参数解析
		const { name } = parseArgs();
		//2 run sn cli
		const snCliPath = path.resolve(__dirname, 'C:/Users/LEGION/Desktop/jOO/CODE/sn-dev-cli/bin/sn.js');
		await run(`node ${snCliPath} datav ${name}`);
	} catch (error) {
		console.log(error);
	}
};
