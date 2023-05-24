<!--
 * @Author: zhangjm
 * @Date: 2023-05-23 11:09:27
 * @LastEditors: zhangjm
 * @LastEditTime: 2023-05-23 13:37:15
 * @Description: 
-->
<template>
	<div style="display: flex">
		<GeojsonIo
			ref="geojsonIoRef"
			height="500px"
			width="1000px"
			v-model="value"
			style="flex-shrink: 0"
		/>
		<div>{{ value }}</div>
		<button @click="flyTo">123</button>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import GeojsonIo from '../dist/geojson-io/geojson-io.vue';

const geojsonIoRef = ref<typeof GeojsonIo | null>(null);
const value = ref('123');
const flyTo = () => {
	geojsonIoRef.value!.flyTo([
		[118.105602, 24.5048],
		[118.162594, 24.488086],
		[118.158817, 24.474025],
		[118.0826, 24.470744],
		[118.093929, 24.486524],
		[118.094616, 24.50152],
	]);
};
</script>
