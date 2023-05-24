import fs from 'fs/promises';
import path from 'path';
import minimist from 'minimist';
import { src, lastRun } from 'gulp';

import { epPackage, projRoot, getPackageManifest, run } from '../index';
import options from './publish-options.json';

interface IDataVOption {
	dir: string;
	nodeVersion: string;
	regex: string;
}

//指定当前需要更新的datav组件的目录名称
//指定需要排除的datav组件名称

const getNewVersionNumber = (version, step) => {
	const versionArr = version.split('.');
	const lastNum: number = Number(versionArr[versionArr.length - 1 || 0] || 0);
	versionArr.splice(2, 1, lastNum + step + '');
	return versionArr.join('.');
};

/**
 * 更新package.json中的版本号
 * @param pkgPath
 */
export const updatePkgVersion = async (pkgPath, num = 1, setVersion: string = '') => {
	const manifest = getPackageManifest(pkgPath);
	if (!num && !setVersion) return manifest.version;
	const version = setVersion ? setVersion : getNewVersionNumber(manifest?.version || '0.0.1', num);
	manifest.version = version;
	await updatePkg(pkgPath, manifest).catch((error) => {
		throw Error(error);
	});
	return version;
};

/**
 * 写入文件
 * @param filePath
 * @param content
 * @param space
 * @returns
 */
export const updatePkg = (filePath, content, space = 2) => {
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
 * 1. --includes=vi-voice 指定本次需要操作的文件名称, 指定多个文件的话需要以逗号分割
 * 2. --excludes=vi-text 指定本次不需要操作的文件名称, 指定多个文件的话需要以逗号分割
 * 3. --publish 需要发布
 */
const parseArgs = (): {
	includes: string[];
	excludes: string[];
	publish: boolean;
} => {
	try {
		const args = minimist(process.argv.slice(3));
		const { _, includes = '', excludes = '', publish = undefined, dev = undefined } = args;
		const includeNames: string[] = [],
			excludeNames: string[] = [];
		if (includes) includeNames.push(...includes.split(',').filter((s: string) => s));
		if (excludes) excludeNames.push(...excludes.split(',').filter((s: string) => s));
		return {
			includes: includeNames,
			excludes: excludeNames,
			publish: publish !== undefined,
		};
	} catch (error) {
		return {
			includes: [],
			excludes: [],
			publish: false,
		};
	}
};

/* dataV组件包版本更新和发布 */
export const dataVPackageUpdateAndPublish = async (pkgVersion) => {
	const { includes, excludes, publish } = parseArgs();
	const { nodeVersion, dataV } = options;

	const { name: pkgName = '' } = getPackageManifest(epPackage);
	if (!pkgName) throw Error('package.json: package name should not be empty');

	const dir = dataV['dir'];
	let folders = await fs.readdir(dir); //组件目录

	folders = folders
		// .filter((n) => {
		// 	if (dataV['regex']) return n.match(dataV['regex']);
		// 	return true;
		// })
		.filter((n) => {
			if (excludes.length && excludes.includes(n)) return false;
			if (includes.length && !includes.includes(n)) return false;
			return true;
		});
	if (folders && !folders.length) return console.log('No folder matched');
	else console.log('match folders: ', folders.join(', '));

	const abPath = path.resolve(__dirname, path.relative(__dirname, dir)); //组件库到datav组件库的路径
	(async function iterator(i) {
		if (i == folders.length) {
			//切换回使用的node版本
			await run(`nvm use ${nodeVersion}`);
			console.log('finish publish');
			return;
		}
		const _cpnPath = path.join(abPath, folders[i]); //单个组件的路径
		const _pkgPath = path.join(_cpnPath, 'package.json'); //单个组件对应package.json的路径
		console.log('_cpnPath', _cpnPath);
		const stats = await fs.stat(_pkgPath).catch((err) => {
			throw new Error(err);
		});

		//存在package.json
		if (stats && stats.isFile()) {
			try {
				//1. 更新dataV组件版本号
				await updatePkgVersion(_pkgPath, 1);
				//2. 更新visix-ui依赖包版本
				const manifest = getPackageManifest(_pkgPath);
				if (!manifest) throw Error();
				if (!manifest.dependencies) manifest.dependencies = {};
				manifest.dependencies[pkgName] = pkgVersion;
				if (!manifest.scripts || !manifest.scripts.publish) {
					if (!manifest.scripts) manifest.scripts = {};
					manifest.scripts['publish'] = 'npx datav publish';
				}
				await updatePkg(_pkgPath, manifest);
				//3. 删除.cubecache
				await run(`rm -rf  ${path.join(_cpnPath, '.cubecache')}`);
				// await run(`rm -rf  ${path.join(_cpnPath, 'node_modules')}`);
				//5. 依赖包更新到最新版本
				await run(`npm --prefix ${_cpnPath} i ${pkgName}@${pkgVersion} --save`);
				// await run(`npm --prefix ${_cpnPath} i`);
				//4. 切换dataV使用的node版本
				await run(`nvm use ${dataV.nodeVersion}`);
				//6. 发布dataV组件包
				if (publish) await run(`npm --prefix ${_cpnPath} run publish`);
			} catch (error) {
				console.log('error', error);
				await run(`nvm use ${nodeVersion}`);
				throw Error();
			}
		}
		iterator(i + 1);
	})(0);
};

/** 组件库版本更新和发布 */
export const publish = async (): Promise<void> => {
	const _currentVersion = await updatePkgVersion(epPackage, 0); //记录当前版本
	try {
		//1 更新版本号
		await updatePkgVersion(epPackage);
		//2 打包
		await run(`npm --prefix ${projRoot} run build`);
		//3 组件包发布到npm
		await run(`npm --prefix ${projRoot} publish`); //NOTE: 脚本名称不要与npm已有的命令同名 否则会导致任务死循环
		//4 dataV组件包版本更新和发布
		await publishDataV();
	} catch (error) {
		console.log('error', error);
		//报错的话回退版本号
		await updatePkgVersion(epPackage, 0, _currentVersion);
	}
};

/** dataV组件包版本更新和发布 */
export const publishDataV = async (): Promise<void> => {
	try {
		//1 获取当前版本号
		const version = await updatePkgVersion(epPackage, 0);
		//2 更新dataV组件包并发布
		await dataVPackageUpdateAndPublish(version);
	} catch (error) {
		console.log(error);
	}
};

export const test = () => {
	return src(epPackage, { since: lastRun(test) });
};
