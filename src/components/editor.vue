<template>
	<div id="editor" :class="{ 'is-error': errorContent }">
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
			:options="editorOptions"
			:extensions="extensions"
		/>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

// import '@codemirror/addon/fold/foldgutter.css';
// import '@codemirror/addon/fold/foldcode';
// import '@codemirror/addon/fold/foldgutter';
// import '@codemirror/addon/fold/brace-fold';
// import '@codemirror/addon/fold/comment-fold';
// import '@codemirror/addon/fold/markdown-fold';
// import '@codemirror/addon/fold/xml-fold';
// import '@codemirror/addon/fold/indent-fold';

//检索
// import '@codemirror/addon/scroll/annotatescrollbar.js';
// import '@codemirror/addon/search/matchesonscrollbar.js';
// import '@codemirror/addon/search/match-highlighter.js';
// import '@codemirror/addon/search/jump-to-line.js';
// import '@codemirror/addon/dialog/dialog.js';
// import '@codemirror/addon/dialog/dialog.css';
// import '@codemirror/addon/search/searchcursor.js';
// import '@codemirror/addon/search/search.js';

import { ElAlert } from './el';
import validate from '@/utils/editor-validate'; //校验

const defaultData = `{
    "type": "FeatureCollection",
    "features": [
    ]
}
`;

const props = defineProps({
	data: {
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

//防抖
function debounce(fn: any, delay: any) {
	let timer: any = null;
	return function (this: any) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, arguments);
		}, delay);
	};
}

// 编辑器配置
const editorOptions = {
	mode: 'application/json',
	tabSize: 2,
	lineNumbers: true,
	line: true,
	styleActiveLine: true,
	styleSelectedText: true,
	theme: 'eclipse',
	// extraKeys: {
	//   'Ctrl-S': this.saveAction,
	//   'Cmd-S': this.saveAction
	// },
	fallthrough: ['default'],
	autofocus: window === window.top,
	highlightDifferences: true,
	autocorrect: true,
	foldGutter: true,
	lineWrapping: true,
	gutters: ['error', 'CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
};
const extensions = [javascript(), oneDark];

const codemirrorRef = ref<any>(null);
const errorInfo = ref<null | { message: string; line: number }>(null); //编辑器错误信息

const value = computed({
	get: () => {
		let r = '';
		try {
			// 格式化
			r = JSON.stringify(JSON.parse(props.data), null, 2);
		} catch (error) {
			r = props.data;
		}
		return r;
	},
	set: (value) => {
		onChange(value);
	},
});

const codemirror = computed(() => {
	return codemirrorRef.value.codemirror;
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
	onChange = debounce((value: string) => {
		validate(codemirror, (err: any) => {
			errorInfo.value = err;
			if (!err) {
				$emit('change', value);
			}
		});
	}, 200);
};

/**
 * 重置编辑器内容
 */
const reset = () => {
	codemirror.value.doc.setValue(defaultData);
};

onMounted(() => init());

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
</style>
