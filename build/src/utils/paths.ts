// 路径集合
import { resolve } from 'path';

// 项目地址
export const projRoot = resolve(__dirname, '..', '..', '..');
// packages
export const pkgRoot = resolve(projRoot, 'packages');
// 组件包
export const compRoot = resolve(pkgRoot, 'src');
// 集合
export const plusRoot = resolve(pkgRoot, 'src/geojson-io');

// 打包构建
export const buildRoot = resolve(projRoot, 'build');

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist');
export const vpOutput = buildOutput;

//package.json
export const epPackage = resolve(projRoot, 'package.json');
