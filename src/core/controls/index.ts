/*
 * @Author: zhangjm
 * @Date: 2023-05-22 17:13:10
 * @LastEditors: zhangjm
 * @LastEditTime: 2023-05-23 11:03:08
 * @Description:
 */

/**
 * @description 注册controls
 */
import Image from './DistortableImage';
import registerSplitToolbar from './split/SplitToolbar';

const controls: { [key: string]: any } = { Image };

export default (L: any) => {
	registerSplitToolbar(L);
	// 参数校验
	if (
		!L ||
		Object.prototype.toString.call(L) !== '[object Object]' ||
		!L.Draw ||
		Object.prototype.toString.call(L.Draw) !== '[object Object]'
	)
		return;
	//注册
	for (const key in controls) {
		L.Draw[key] = L.Draw.SimpleShape.extend(controls[key](L));
	}
};
