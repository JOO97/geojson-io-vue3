<!--
 * @Author: zhangjm
 * @Date: 2023-05-22 17:09:55
 * @LastEditors: zhangjm
 * @LastEditTime: 2023-05-23 12:00:10
 * @Description: 
-->
<template>
	<!-- 主面板 -->
	<el-row class="geojson-main" :style="{ height, width }">
		<!-- 地图 -->
		<el-col class="map-view" :span="mapPanelSpan">
			<Map ref="mapRef" :style="{ height }" @update="updateMapItems" :data="geojson" />
		</el-col>
		<!-- 编辑器 -->
		<el-col v-if="editorView" :span="8" :class="['editor-view', 'right', { fold }]">
			<div class="editor-view_content">
				<el-tabs type="border-card" class="tab" v-model="activeTab" @tab-remove="handleTabRemove">
					<el-tab-pane :padding="0" name="expand" disabled>
						<span slot="label"><i class="el-icon-date" style="opacity: 0" /></span>
					</el-tab-pane>
					<el-tab-pane :padding="0" name="json">
						<span slot="label"
							><i class="el-icon-date" />
							<span> JSON </span>
							<el-tooltip
								class="item"
								effect="dark"
								content="【ctrl+f】进入检索模式"
								placement="top-start"
							>
								<i class="el-icon-warning-outline" />
							</el-tooltip>
						</span>
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
					style="flex-grow: 1; overflow: auto"
					:data="activeTab === 'json' ? geojson : errorGeojson"
					class="editor"
				/>
			</div>
			<!-- 展开/收起 -->
			<div class="fold-item" :style="foldItemStyle" @click="toggleFold">
				<i
					:class="['fold-icon', `el-icon-s-${!fold ? 'un' : ''}fold`]"
					:title="`${fold ? '展开' : '收起'}编辑器`"
				/>
			</div>
		</el-col>
	</el-row>
</template>

<script setup lang="ts" name="geojson-io">
import { ref, computed } from 'vue';

import { saveAs } from 'file-saver';
import geojsonhint from 'geojsonhint';

import Map from './components/map.vue';
import Editor from './components/editor.vue';
import FileBar from './components/file-bar.vue';
import { MessageBox, Message, ElTabPane, ElCol, ElTabs, ElRow, ElTooltip } from './components/el';

import { geojsonIoProps, defaultData, EVENTS, useModel, useMap } from './geojson-io';
import useEditor from './hooks/useEditor';

const props = defineProps(geojsonIoProps);
defineEmits([EVENTS.UPDATE]);

const geojson = ref(defaultData);

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
 * 地图面板span
 */
const mapPanelSpan = computed(() => {
	if (!props.editorView || fold.value) return 24;
	return 16;
});

/**
 * 导入
 */
const handleImport = (value: string) => {
	if (!validate(value)) {
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
	var blob = new Blob([geojson.value], {
		type: 'text/plain;charset=utf-8',
	});
	saveAs(blob, `geojson.json`);
};

/**
 * geojson校验
 */
const validate = (value: string) => {
	const err = geojsonhint.hint(value);
	if (err && err.length) return false;
	return true;
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
			geojson.value = JSON.stringify(currentGeojson);
		} else geojson.value = value;
	} catch (error) {
		console.log('error', error);
		geojson.value = value;
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

defineExpose({
	flyTo,
});
</script>

<style lang="scss" scoped>
.geojson-main {
	::v-deep .el-tabs__content {
		display: none;
	}

	.map-view {
		position: relative;
		height: 100%;
	}

	.editor-view {
		height: 100%;
		box-shadow: rgb(0 0 0 / 10%) -2px 0px 0px;
		position: relative;

		&_content {
			display: flex;
			flex-direction: column;
			height: 100%;
			position: relative;
			.tab {
				height: 40px;
			}
		}

		// 折叠状态
		&.fold {
			width: 0;
			.tab {
				display: none;
			}
		}

		.fold {
			&-item {
				position: absolute;
				z-index: 998;
				background: #f5f7fa;
				padding: 10px;
				cursor: pointer;
				&:hover {
					.fold-icon {
						color: #409eff;
					}
				}
			}
			&-icon {
				color: #333;
				font-size: 20px;
			}
		}
	}
}
</style>
