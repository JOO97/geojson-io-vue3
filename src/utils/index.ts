import { defaultsDeep, cloneDeep, random } from 'lodash-es';

export const createUuid = (from: number = 5000000000, to: number = 59999999999) =>
	random(from, to > from ? to : from + 9999999999).toString();
