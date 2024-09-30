<template>
	<div style="display: flex">
		<GeojsonIO
			ref="geojsonIoRef"
			height="500px"
			width="100%"
			style="flex-shrink: 0"
			v-model="value"
			v-bind="config"
		/>
		<!-- <div>{{ value }}</div>
		<button @click="test">test</button> -->
	</div>
	<!-- <GeojsonIo
		ref="geojsonIoRef"
		height="500px"
		width="50%"
		style="flex-shrink: 0"
		v-model="value"
		v-bind="config"
		:modules="['fileBar', 'editor']"
	/> -->
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { GeojsonIO } from '../../src/index';

const geojsonIoRef = ref<typeof GeojsonIO | null>(null);

const config = reactive({
	fileBar: true,
	editor: false,
});
const value = ref(
	`{
	"type": "FeatureCollection",
	"features": [
		
	]
}`
);

let index = 0;
const test = () => {
	// geojsonIoRef.value!.openPopup(index);
	// geojsonIoRef.value!.flyTo([
	// 	[118.105602, 24.5048],
	// 	[118.162594, 24.488086],
	// 	[118.158817, 24.474025],
	// 	[118.0826, 24.470744],
	// 	[118.093929, 24.486524],
	// 	[118.094616, 24.50152],
	// ]);
	value.value = `{"type":"FeatureCollection","features":[]}`;
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
</style>
