import { ref, computed, getCurrentInstance } from 'vue';
import type { ExtractPropTypes, PropType } from 'vue';

export const defaultOptions = {
	base: {
		center: [24.46, 118.1],
		zoom: 13,
		maxZoom: 20,
		attributionControl: false,
		contextmenu: true,
	},
	draw: {
		image: true,
	},
	markerSize: 40,
    hash: false
};

export const mapProps = {
	data: {
		type: String,
		default: `{
  "type": "FeatureCollection",
  "features": []
}`,
	},
	options: {
		type: Object,
		default: () => defaultOptions,
	},
};

export const useDrawControl = (props: mapProps, { L, map }: { L: any; map: any }) => {};

export type mapProps = ExtractPropTypes<typeof mapProps>;
