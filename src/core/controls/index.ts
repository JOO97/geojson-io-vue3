/*
 * @Author: zhangjm
 * @Date: 2023-05-22 17:13:10
 * @LastEditors: zhangjm
 * @LastEditTime: 2023-05-22 17:13:21
 * @ScreenCode: 0
 * @ScreenName: xx大屏
 * @OriginUrl: http://datav.aliyun.com/admin/screen/0
 * @Description: 
 */
/**
 * @description 注册controls
 */
import Image from './distortable-image';
import registerSplitToolbar from './split/SplitToolbar';

const controls = { Image };

export default (L) => {
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
