/**
 * 导入package.json文件
 */
export const getPackageManifest = (pkgPath: string) => {
	return require(pkgPath);
};

/**
 * 获取package.json的dependencies、peerDependencies
 */
export const getPackageDependencies = (
	pkgPath: string
): Record<'dependencies' | 'peerDependencies', string[]> => {
	const manifest = getPackageManifest(pkgPath);
	const { dependencies = {}, peerDependencies = {} } = manifest;

	return {
		dependencies: Object.keys(dependencies),
		peerDependencies: Object.keys(peerDependencies),
	};
};
