import { ref, computed } from 'vue';
import type Editor from '@/components/editor.vue';

import { geojsonIoProps } from '../geojson-io';

export default (props: typeof geojsonIoProps, { geojson, mapRef }) => {
	const editorRef = ref<typeof Editor | null>(null);

	//当前tab
	const activeTab = ref('json');
	//当前收展状态
	const fold = ref(false);
	// 错误处理中的数据
	const errorGeojson = ref('');

	// 收展按钮的样式
	const foldItemStyle = computed(() => {
		return { left: !fold.value ? '8px' : `-${180 + 46}px`, top: !fold.value ? '-1px' : 0 };
	});

	/**
	 * 切换右面板收展状态
	 */
	const toggleFold = () => {
		fold.value = !fold.value;
		//NOTE: 需要延迟
		setTimeout(() => {
			mapRef.value?.invalidateSize(true);
		}, 20);
	};

	/**
	 * 编辑器值更新
	 * @param value
	 */
	const handleEditorChange = (value: string) => {
		if (activeTab.value === 'json') geojson.value = value;
		else errorGeojson.value = value;
	};

	/**
	 * 移除"错误处理"tab
	 */
	const removeErrorTab = () => {
		errorGeojson.value = '';
		activeTab.value = 'json';
	};

	return {
		editorRef,
		fold,
		foldItemStyle,
		activeTab,
		errorGeojson,
		handleEditorChange,
		toggleFold,
		removeErrorTab,
	};
};
