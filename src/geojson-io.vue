<!--
 * @Author: zhangjm
 * @Date: 2023-05-22 17:09:55
 * @LastEditors: zhangjm
 * @LastEditTime: 2023-05-23 12:00:10
 * @Description: 
-->
<template>
	<!-- 主面板 -->
	<div class="geo-io" :style="{ height, width }">
		<!-- 地图 -->
		<div class="geo-io-map">
			<Map
				ref="mapRef"
				:style="{ height }"
				@update="updateMapItems"
				:data="model ? model as string: ''"
			/>
		</div>
		<!-- 编辑器 -->
		<div :span="8" :class="['geo-io-editor', 'right', { fold }]" v-if="true">
			<div class="geo-io-editor__content" v-show="!fold">
				<el-tabs type="border-card" class="tab" v-model="activeTab" @tab-remove="handleTabRemove">
					<el-tab-pane :padding="0" disabled>
						<template #label>
							<span></span>
						</template>
					</el-tab-pane>
					<el-tab-pane :padding="0" name="json">
						<template #label>
							<el-icon><Document /></el-icon>
							<span> JSON </span>
							<el-tooltip
								class="item"
								effect="dark"
								content="【ctrl+f】进入检索模式"
								placement="top-start"
							>
								<i class="el-icon-warning-outline" />
							</el-tooltip>
						</template>
					</el-tab-pane>
					<!-- 错误处理 -->
					<el-tab-pane :padding="0" name="geojsonValidate" v-if="errorGeojson" closable>
						<span slot="label"
							><i class="el-icon-error" style="color: #f56c6c" />
							<span> 错误处理 </span>
							<!-- <i
									class="el-icon-document-add"
									style="color: #67c23a"
									v-if="activeTab === 'geojsonValidate' && !checkEditorErrorState()"
									title="合并数据"
									@click.stop="handleMergeBtnClick"
								/> -->
						</span>
					</el-tab-pane>
					<el-tab-pane :padding="0" name="clear" disabled>
						<span slot="label">
							<el-button size="large" @click="clearEditor"
								><i class="el-icon-refresh-left"
							/></el-button>
						</span>
					</el-tab-pane>
				</el-tabs>
				<!-- 工具栏 -->
				<FileBar @import="handleImport" @export="handleExport" />
				<!-- 编辑器 -->
				<Editor
					ref="editorRef"
					:style="{ height }"
					:code="activeTab === 'json' ? model : errorGeojson"
					v-model="model"
					style="flex-grow: 1; overflow: auto"
					class="editor"
				/>
			</div>
			<!-- 展开/收起 -->
			<div class="geo-io-editor__toggle" :style="foldItemStyle" @click="toggleFold">
				<el-icon :size="20" :title="`${fold ? '展开' : '收起'}编辑器`"
					><Expand v-if="!fold" /> <Fold v-else
				/></el-icon>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="geojson-io">
import { saveAs } from 'file-saver';

import { geojsonValidate as validate } from '@/utils/validate';

import Map from './components/map/map.vue';
import Editor from './components/editor.vue';
import FileBar from './components/file-bar.vue';
import {
	MessageBox,
	Message,
	ElTabPane,
	ElTabs,
	ElTooltip,
	ElIcon,
	Document,
	Expand,
	Fold,
} from './components/el';

import { geojsonIoProps, EVENTS, useModel, useMap } from './geojson-io';
import useEditor from './hooks/useEditor';

const props = defineProps(geojsonIoProps);
defineEmits([EVENTS.UPDATE]);

const { model } = useModel(props);
const { mapRef, updateMapItems } = useMap(props, { model });

// 编辑器hook
const {
	editorRef,
	fold,
	foldItemStyle,
	activeTab,
	errorGeojson,
	toggleFold,
	removeErrorTab,
	clearEditor,
	handleTabRemove,
} = useEditor(props, { model, mapRef });

/**
 * 导入
 */
const handleImport = (value: string) => {
	const { valid } = validate(value);
	if (!valid) {
		MessageBox('当前导入的数据存在格式错误，是否进行错误处理?', 'Warning')
			.then(() => {
				errorGeojson.value = value;
				activeTab.value = 'geojsonValidate';
			})
			.catch(() => {
				Message.info('取消导入');
			});
	} else handleMerge(value);
};

/**
 * 导出
 */
const handleExport = () => {
	var blob = new Blob([model.value], {
		type: 'text/plain;charset=utf-8',
	});
	saveAs(blob, `geojson.json`);
};

/**
 * 获取编辑器错误状态
 */
function checkEditorErrorState() {
	// return this.$refs.editor.errorInfo;
}

/**
 * 合并数据
 */
function handleMerge(value: any) {
	const geojson = JSON.parse(value);
	const valueFeatures = geojson.features;
	Message.success({
		message: `成功导入 ${valueFeatures.length} 个元素`,
		duration: 5000,
	});
	const currentGeojson = JSON.parse(geojson.value) as any;
	try {
		if (currentGeojson.features.length) {
			currentGeojson.features.push(...valueFeatures);
			model.value = JSON.stringify(currentGeojson);
		} else model.value = value;
	} catch (error) {
		console.log('error', error);
		model.value = value;
	}
}

/**
 * 点击"错误处理"tab的合并数据按钮
 */
const handleMergeBtnClick = () => {
	const value = errorGeojson.value;
	removeErrorTab();
	handleMerge(value);
};

const flyTo = (position: number | number[][], zoom: number) => mapRef.value?.flyTo(position, zoom);
const openPopup = (index: number) => mapRef.value?.openPopup(index);

defineExpose({
	flyTo,
	openPopup,
});
</script>

<style lang="scss" scoped>
.geo-io {
	display: flex;
	align-items: center;
	justify-content: space-between;

	:deep(.el-tabs__content) {
		display: none;
	}

	&-map {
		position: relative;
		flex: 1;
		height: 100%;
	}

	&-editor {
		width: 25%;
		height: 100%;
		box-shadow: rgb(0 0 0 / 10%) -2px 0px 0px;
		position: relative;

		&__content {
			display: flex;
			flex-direction: column;
			height: 100%;
			position: relative;
			.tab {
				height: 40px;
			}
		}

		&.fold {
			width: 0;
		}

		&__toggle {
			position: absolute;
			z-index: 998;
			width: 40px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			&:hover {
				.fold-icon {
					color: #409eff;
				}
			}
		}
		&__icon {
			color: #333;
			font-size: 20px;
		}
	}
}
</style>
