/*
 * @Author: zhangjm
 * @Date: 2023-05-23 11:59:26
 * @LastEditors: zhangjm
 * @LastEditTime: 2023-05-23 12:03:03
 * @Description:
 */
declare module 'geojson-rewind' {
	import { GeoJSON } from 'geojson';

	function geojsonRewind(geojson: GeoJSON, options?: object): GeoJSON;

	export default geojsonRewind;
}
