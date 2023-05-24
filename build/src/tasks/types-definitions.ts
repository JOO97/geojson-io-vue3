import process from 'process';
import path from 'path';
import fs from 'fs/promises';
import consola from 'consola';
import * as vueCompiler from 'vue/compiler-sfc';

import glob from 'fast-glob';
import chalk from 'chalk';
import typeUnsafe from '../type-unsafe.json';

import { Project } from 'ts-morph';
import type { SourceFile } from 'ts-morph';

import { projRoot, pkgRoot, plusRoot, buildOutput, excludeFiles, pathRewriter } from '../utils';

const typeUnsafePaths = typeUnsafe.map((_path) => {
	let paths = path.resolve(projRoot, _path);
	if (_path.endsWith('/')) paths += path.sep;
	return paths;
});

export const generateTypesDefinitions = async () => {
	// 创建一个 Project 并指定配置，用于覆盖 tsconfig.json 的配置
	const project = new Project({
		compilerOptions: {
			// 仅生成声名文件
			emitDeclarationOnly: true,
			// 输出目录
			outDir: path.resolve(buildOutput, 'types'),
			//
			baseUrl: plusRoot,
			paths: {
				'@visix-ui/*': ['packages/*'],
			},
			preserveSymlinks: true,
			types: [path.resolve(projRoot, 'typings/env'), 'unplugin-vue-define-options'],
		},
		// tsconfig配置文件
		tsConfigFilePath: path.resolve(projRoot, 'tsconfig.json'),

		// 设true的目的是，我们需要手动选择文件到编译器中。通过 glob 匹配所有源码文件，并过滤掉仅用于测试与开发的文件。获取到文件列表后，需要把文件添加到 TypeScript 编译器中。
		skipAddingFilesFromTsConfig: true,
	});
	// 获取packages目录下的 .vue 和 .ts 文件
	const globAnyFile = '**/*.{js?(x),ts?(x),vue}';
	const filePaths = excludeFiles(
		await glob([globAnyFile, '!plus/**/*'], {
			cwd: pkgRoot,
			absolute: true,
			onlyFiles: true,
		})
	);
	//console.log('//////////////////////////////////////2', filePaths);
	// 获取packages/plus目录下的文件
	const epPaths = excludeFiles(
		await glob(globAnyFile, {
			cwd: plusRoot,
			onlyFiles: true,
		})
	);
	// console.log('//////////////////////////////////////3', epPaths);
	const sourceFiles: SourceFile[] = [];
	await Promise.all([
		...filePaths.map(async (file) => {
			//if (file.endsWith('.vue')) {
			if (/\.vue$/.test(file)) {
				//   对于 vue 文件，借助 @vue/compiler-sfc 的 parse 进行解析
				//   值得注意的是 Vue SFC 不可以直接添加到编译器中，因为 TypeScript 无法解析它。所以需要使用 vue/compiler-sfc 中的 parse 和 compileScript 把 script 块中的代码提取出来，并编译 <script setup> 的代码。之后再添加到编译器中
				const content = await fs.readFile(file, 'utf-8');
				const sfc = vueCompiler.parse(content);

				//console.log('编译', file, sfc);
				const { script, scriptSetup } = sfc.descriptor;
				if (script || scriptSetup) {
					let content = script?.content ?? '';

					if (scriptSetup) {
						const compiled = vueCompiler.compileScript(sfc.descriptor, {
							id: 'xxx',
						});
						content += compiled.content;
					}
					// 创建一个同路径的同名 ts/js 的映射文件
					const lang = scriptSetup?.lang || script?.lang || 'js';

					const url = `${path.relative(process.cwd(), file)}.${lang}`;

					const sourceFile = project.createSourceFile(url, content);
					//console.log('||||', url, sourceFile);
					sourceFiles.push(sourceFile);
				}
			} else {
				// 如果是 ts 文件则直接添加即可
				const sourceFile = project.addSourceFileAtPath(file);
				sourceFiles.push(sourceFile);
			}
		}),
		...epPaths.map(async (file) => {
			const content = await fs.readFile(path.resolve(plusRoot, file), 'utf-8');
			sourceFiles.push(project.createSourceFile(path.resolve(pkgRoot, file), content));
		}),
	]);
	//console.log('//////////////////////////////////////4');
	// 因为 Element Plus 的代码目前还有 TypeScript 类型产物，但已经重构完成了部分文件。这个文件就是记录已重构完成的列表。为了在生成 .d.ts 是针对这部分文件做异常处理。
	const diagnostics = project.getPreEmitDiagnostics().filter((diagnostic) => {
		const filePath = diagnostic.getSourceFile()?.getFilePath()!;
		if (!filePath) return false;
		const file = path.normalize(filePath);
		return !typeUnsafePaths.some((safePath) => file.startsWith(safePath));
	});
	// console.log('//////////////////////////////////////5', diagnostics.length);
	if (diagnostics.length > 0) {
		// 输出解析过程中的错误信息
		consola.error(project.formatDiagnosticsWithColorAndContext(diagnostics));
		const err = new Error('Failed to generate dts.');
		consola.error(err);
		throw err;
	}
	// console.log('//////////////////////////////////////6');
	await project.emit({
		emitOnlyDtsFiles: true,
	});
	// 随后将解析完的文件写道打包路径
	const tasks = sourceFiles.map(async (sourceFile) => {
		const relativePath = path.relative(pkgRoot, sourceFile.getFilePath());

		consola.trace(chalk.yellow(`Generating definition for file: ${chalk.bold(relativePath)}`));

		const emitOutput = sourceFile.getEmitOutput();

		const emitFiles = emitOutput.getOutputFiles();

		if (emitFiles.length === 0) {
			// todo?：utils产生es和lib两个版本
			// throw new Error(`Emit no file: ${chalk.bold(relativePath)}`);
			//consola.error(chalk.red(`Emit no file: ${chalk.bold(relativePath)}`));
		}

		const tasks = emitFiles.map(async (outputFile) => {
			const filepath = outputFile.getFilePath();
			await fs.mkdir(path.dirname(filepath), {
				recursive: true,
			});

			await fs.writeFile(filepath, pathRewriter('esm')(outputFile.getText()), 'utf8');
			consola.success(chalk.green(`Definition for file: ${chalk.bold(relativePath)} generated`));
		});

		await Promise.all(tasks);
	});

	await Promise.all(tasks);
};
