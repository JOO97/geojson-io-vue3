import { run } from './exec';
import type { TaskFunction } from 'gulp';

import { buildRoot } from './paths';

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) => {
	return Object.assign(fn, { displayName: name });
};

export const runTask = (name: string) => {
	return withTaskName(`shellTask:${name}`, () => run(`npm run build ${name}`, buildRoot));
};
