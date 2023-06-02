import { ref, computed, getCurrentInstance } from 'vue';
import type { ExtractPropTypes, PropType } from 'vue';
import type GeojsonIo from './geojson-io.vue';
import type Map from './components/map.vue';

const definePropType = <T>(val: any): PropType<T> => val;

export const defaultData = `{
  "type": "FeatureCollection",
  "features": []
}`;

export const EVENTS = {
	UPDATE: 'update:modelValue',
};

export const geojsonIoProps = {
	modelValue: {
		type: definePropType<string | number | null | undefined>([String, Number, Object]),
		default: '',
	},
	height: {
		type: String,
		default: '500px',
	},
	width: {
		type: String,
		default: '500px',
	},
	// 是否使用编辑面板
	editorView: {
		type: Boolean,
		default: false,
	},
};

/**
 * model hook
 * @param props
 * @returns
 */
export const useModel = (props: geojsonIoProps) => {
	const selfModel = ref<any>(defaultData);
	const { emit } = getCurrentInstance()!;
	const model = computed({
		get() {
			return props.modelValue ?? selfModel.value;
		},
		set(val: unknown) {
			emit(EVENTS.UPDATE, val);
			selfModel.value = val;
		},
	});
	return {
		model,
	};
};

/**
 * map hook
 * @param props
 * @returns
 */
export const useMap = (props: geojsonIoProps, { model }: Partial<ReturnType<typeof useModel>>) => {
	const mapRef = ref<typeof Map | null>(null);

	/**
	 * 地图绘制元素数据更新
	 * @param data
	 */
	const updateMapItems = (data: object) => {
		console.log('updateMapItems', data);
		model!.value = data ? JSON.stringify(data, null, 4) : '';
	};

	return { mapRef, updateMapItems };
};

export type geojsonIoProps = ExtractPropTypes<typeof geojsonIoProps>;
export type geojsonIoInstance = InstanceType<typeof GeojsonIo>;