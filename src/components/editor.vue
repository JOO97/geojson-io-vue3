<template>
	<div id="editor" :class="{ 'is-error': errorContent }">
		{{ errorInfo?.line }}
		<!-- 错误提示 -->
		<el-alert
			v-if="errorContent"
			:title="errorContent"
			type="error"
			show-icon
			class="alert"
			:closable="false"
		/>
		<!-- 编辑器 -->
		<Codemirror
			ref="codemirrorRef"
			v-model="value"
			v-bind="editorOptions"
			:extensions="extensions"
			@ready="handleReady"
			@update="handleStateUpdate"
		/>
	</div>
</template>

<script lang="ts" setup>
import { ref, shallowRef, computed, onMounted, nextTick } from 'vue';
import { EditorView, ViewUpdate, lineNumbers, gutter, GutterMarker } from '@codemirror/view';
import { redo, undo } from '@codemirror/commands';
import { linter, Diagnostic } from '@codemirror/lint';
import { json } from '@codemirror/lang-json';
import { Codemirror } from 'vue-codemirror';

import { debounce } from 'lodash-es';

import { ElAlert } from '@/components/el';
import { geojsonHint } from '@/utils/validate'; //校验

const defaultData = `{
    "type": "FeatureCollection",
    "features": [
    ]
}
`;

const props = defineProps({
	code: {
		type: String,
		required: false,
		default: `{
    "type": "FeatureCollection",
    "features": [
    ]
}`,
	},
});
const $emit = defineEmits(['change']);

const cmView = shallowRef<EditorView>();

const emptyMarker = new (class extends GutterMarker {
	toDOM() {
		var marker = document.createElement('abbr');
		marker.title = errorInfo.value?.message || '';
		marker.className = 'editor-error-marker';
		marker.style.color = '#dd6688';
		marker.innerHTML = `●`;
		return marker;
	}
})();

// 编辑器配置
const editorOptions = {
	tabSize: 2,
	lineNumbers: true,
	line: true,
};

const extensions = [
	json(),
	lineNumbers(),
	// FIXME:
	gutter({
		class: 'cm-mygutter',
		lineMarker: (view, line) => {
			validateEditorValue(view.state.toJSON().doc, (err: any) => {
				errorInfo.value = err;
			});
			if (errorInfo.value && line.from <= errorInfo.value?.line && line.to >= errorInfo.value?.line)
				return emptyMarker;
			return null;
		},
	}),
];

const codemirrorRef = ref<typeof Codemirror>();
const errorInfo = ref<null | { message: string; line: number }>(null); //编辑器错误信息

const value = computed({
	get: () => {
		let r = '';
		try {
			// 格式化
			r = JSON.stringify(JSON.parse(props.code), null, 2);
		} catch (error) {
			r = props.code;
		}
		return r;
	},
	set: (value) => {
		onChange(value);
	},
});

const codemirror = computed(() => {
	return codemirrorRef.value?.codemirror;
});

const errorContent = computed(() => {
	if (!errorInfo.value) return '';
	let msg = '';
	if (errorInfo.value.line !== undefined) msg += `line ${errorInfo.value.line}: `;
	if (errorInfo.value.message) msg += errorInfo.value.message.replace('\n', '');
	return msg;
});

let onChange: any = null;

/**
 * 初始化编辑器
 */
const init = () => {
	onChange = debounce((val: string) => {
		if (!errorInfo) $emit('change', value);
		// validateEditorValue(val, (err: any) => {
		// 	errorInfo.value = err;
		// 	if (!err) {
		// 		$emit('change', value);
		// 	}
		// });
	}, 200);
};

/* 编辑器加载完成 */
const handleReady = (result: any) => {
	console.log('result', result);
	cmView.value = result.view;
};

/* 编辑器状态更新 */
const handleStateUpdate = (viewUpdate: ViewUpdate) => {
	console.log('cmView', cmView.value, viewUpdate);
	// selected
	// const ranges = viewUpdate.state.selection.ranges;
	// state.selected = ranges.reduce((plus, range) => plus + range.to - range.from, 0);
	// state.cursor = ranges[0].anchor;
	// // length
	// state.length = viewUpdate.state.doc.length;
	// state.lines = viewUpdate.state.doc.lines;
	// log('viewUpdate', viewUpdate)
};

const validateEditorValue = (val: string, callback: any) => {
	const err = geojsonHint(val);
	// editor.doc.clearGutter('error');
	if (err instanceof Error) {
		// handleError(err.message, editor);
		const { message, line } = err as typeof err & { line: number };
		return callback({
			class: 'icon-circle-blank',
			title: 'invalid JSON',
			message,
			line: handleLine(line, message),
		});
	} else if (err.length) {
		// handleErrors(err, editor);
		const { message, line } = err[0];
		return callback({
			class: 'icon-circle-blank',
			title: 'invalid GeoJSON',
			message,
			line: handleLine(line, message),
		});
	} else {
		try {
			const gj = JSON.parse(val);
			return callback(null, gj);
		} catch (e) {
			//TODO editor错误类型3 未复现
			return callback({
				class: 'icon-circle-blank',
				title: 'invalid GeoJSON',
				message: 'invalid GeoJSON',
			});
		}
	}
};

/**
 * 处理错误行数
 */
function handleLine(line: number, message: string): number {
	return message.indexOf('line') !== -1 ? parseInt(message.split(':')[0].split('line ')[1]) : line;
}

//创建错误标记
function makeMarker(msg: string) {
	var marker = document.createElement('abbr');
	marker.title = msg;
	marker.className = 'editor-error-marker';
	marker.style.color = '#dd6688';
	marker.innerHTML = `●`;
	return marker;
}

function handleError(msg: string, editor: any) {
	const match = msg.match(/line (\d+)/);
	if (match && match[1]) {
		editor.doc.clearGutter('error');
		editor.setGutterMarker(parseInt(match[1], 10) - 1, 'error', makeMarker(msg));
	}
}

function handleErrors(errors: any[], editor: any) {
	editor.doc.clearGutter('error');
	errors.forEach(function (e) {
		editor.setGutterMarker(e.line, 'error', makeMarker(e.message));
	});
}

/**
 * 重置编辑器内容
 */
const reset = () => {
	// codemirror.value.doc.setValue(defaultData);
	value.value = defaultData;
};

onMounted(() => nextTick(() => init()));

defineExpose({ reset });
</script>

<style lang="scss">
#editor.is-error {
	position: relative;
	padding-top: 58px;
}
.alert {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
}
.vue-codemirror {
	height: 100%;
}
.CodeMirror {
	height: 100%;
	font-family: 'm_1regular', monospace;
	line-height: 1.5em;
	&-gutters {
		background: #fff;
	}
}

.cm-mygutter {
	min-width: 20px;
}
</style>
