// import { buildConfig } from '../build.info';
import type { Module } from '../build.info';
// /** used for type generator */
export const pathRewriter = (module: Module) => {
	// const config = buildConfig[module];
	return (id: string) => {
		// id = id.replaceAll(`${PKG_PREFIX}/theme-chalk`, 'element-plus/theme-chalk');
		// id = id.replaceAll(`${PKG_PREFIX}/`, `${config.bundle.path}/`);
		return id;
	};
};
