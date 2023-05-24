import type { OutputOptions, RollupBuild } from 'rollup';

import { epPackage, getPackageDependencies } from '../utils';

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
	return Promise.all(options.map((option) => bundle.write(option)));
}
export function formatBundleFilename(name: string, minify: boolean, ext: string) {
	return `${name}${minify ? '.min' : ''}.${ext}`;
}
/**
 * 返回需要排除的依赖包数组
 * @param options
 */
export const generateExternal = async (options: { full: boolean }) => {
	const { dependencies, peerDependencies } = getPackageDependencies(epPackage);
	return (id: string) => {
		const packages: string[] = peerDependencies;
		if (!options.full) {
			packages.push('@vue', ...dependencies);
		}
		return [...new Set(packages)].some((pkg) => id === pkg || id.startsWith(`${pkg}/`));
	};
};
