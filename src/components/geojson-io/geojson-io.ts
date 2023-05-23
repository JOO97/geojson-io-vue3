import { ref, computed, getCurrentInstance } from 'vue';
import type { ExtractPropTypes, PropType, ShallowRef } from 'vue';
import type GeojsonIo from './geojson-io.vue';

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

export type geojsonIoProps = ExtractPropTypes<typeof geojsonIoProps>;
export type geojsonIoInstance = InstanceType<typeof GeojsonIo>;
