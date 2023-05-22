<template>
	<!-- 主面板 -->
	<div class="main" :style="{ height, width }">
		<el-row class="main-content" type="flex" :style="{ height, width }">
			<el-col :span="fold ? 24 : 16" style="position: relative">
				<Map
					ref="mapRef"
					:style="{ height }"
					@update="updateMapItems"
					:data="geojson"
					:hideGoogle="hideGoogle"
				/>
			</el-col>
			<el-col
				:span="8"
				style="height: 100%;box-shadow;rgb(0 0 0 / 10%) -2px 0px 0px"
				:class="['right', { fold: fold }]"
			>
				<div class="right-content">
					<el-tabs
						ref="tabRef"
						type="border-card"
						class="tab"
						style="height: 40px"
						v-model="activeTab"
						@tab-remove="handleTabRemove"
					>
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
								<i
									class="el-icon-document-add"
									style="color: #67c23a"
									v-if="activeTab === 'geojsonValidate' && !checkEditorErrorState()"
									title="合并数据"
									@click.stop="handleMergeBtnClick"
								/>
							</span>
						</el-tab-pane>
						<!-- <el-tab-pane :padding="0" name="clear" disabled>
              <span slot="label">
                <el-button size="large" @click="handleResetData"
                  ><i class="el-icon-refresh-left"
                /></el-button>
              </span>
            </el-tab-pane> -->
					</el-tabs>
					<!-- 工具栏 -->
					<FileBar @import="handleImport" @export="handleExport" />
					<!-- 编辑器 -->
					<Editor
						ref="editor"
						:style="{ height }"
						style="flex-grow: 1; overflow: auto"
						:data="activeTab === 'json' ? geojson : errorGeojson"
						@change="handleEditor"
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
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { MessageBox, Message,ElTabPane,ElCol, ElTabs, ElRow, ElTooltip  } from './components/el/index';
import { saveAs } from 'file-saver';
import geojsonhint from 'geojsonhint';

import Map from './components/map.vue';
import Editor from './components/editor.vue';
import FileBar from './components/file-bar.vue';

const defaultData = `{
  "type": "FeatureCollection",
  "features": []
}`;

const props = defineProps({
	height: {
		type: String,
		default: '100%',
	},
	width: {
		type: String,
		default: '100%',
	},
	hideGoogle: {
		type: Boolean,
		default: true,
	},
});

//当前tab
const activeTab = ref('json');
const geojson = ref(defaultData);
//当前收展状态
const fold = ref(false);
// 错误处理中的数据
const errorGeojson = ref('');

const mapRef = ref(null);
const tabRef = ref(null);

// 收展按钮的样式
const foldItemStyle = computed(() => {
	return { left: !fold.value ? '8px' : `-${180 + 46}px`, top: !fold.value ? '-1px' : 0 };
});

/**
 * 地图绘制元素更新
 * @param data
 */
const updateMapItems = (data: object) => {
	geojson.value = data ? JSON.stringify(data, null, 4) : '';
};

/**
 * 编辑器值更新
 * @param value
 */
const handleEditor = (value: string) => {
	if (activeTab.value === 'json') geojson.value = value;
	else errorGeojson.value = value;
};

/**
 * 导入
 */
function handleImport(value: string) {
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
}
/**
 * 导出
 */
function handleExport() {
	var blob = new Blob([geojson.value], {
		type: 'text/plain;charset=utf-8',
	});
	saveAs(blob, `geojson.json`);
}
/**
 * 切换右面板收展状态
 */
function toggleFold() {
	fold.value = !fold.value;
	//NOTE: 需要延迟
	setTimeout(() => {
		this.$refs.map.invalidateSize(true);
	}, 20);
}
/**
 * 重置当前数据
 * FIXME: 数据重置后地图元素没有清空
 */
function handleResetData() {
	// this.geojson = defaultData
	// this.$refs.editor.reset()
}
/**
 * geojson校验
 */
function validate(value: string) {
	var err = geojsonhint.hint(value);
	if (err && err.length) return false;
	return true;
}
/**
 * 移除tab
 */
function handleTabRemove(name: string) {
	if (name !== 'geojsonValidate') return;
	removeErrorTab();
}
/**
 * 获取编辑器错误状态
 */
function checkEditorErrorState() {
	return this.$refs.editor.errorInfo;
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
function handleMergeBtnClick() {
	const value = errorGeojson.value;
	removeErrorTab();
	handleMerge(value);
}
/**
 * 移除"错误处理"tab
 */
function removeErrorTab() {
	errorGeojson.value = '';
	activeTab.value = 'json';
}
</script>

<style lang="scss">
.main {
	&-content {
		.el-tabs__content {
			display: none;
		}

		.right {
			position: relative;
			// transition: width 0.4s;
			// 收展item
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
			&.fold {
				width: 0;
				.tab {
					display: none;
				}
			}
			&-content {
				display: flex;
				flex-direction: column;
				height: 100%;
				position: relative;
			}
		}
	}
}
</style>
