<template>
	<div style="display: flex">
		<GeojsonIo
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
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import GeojsonIo from '../../src/main';

const geojsonIoRef = ref<typeof GeojsonIo | null>(null);

const config = reactive({
	fileBar: true,
	editor: true,
});
const value = ref(
	`{
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"properties": {
				"_name": "data 1",
				"_gid": "102"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [118.14856, 24.501676]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"_name": "data 2",
				"_gid": "102"
			},
			"geometry": {
				"type": "LineString",
				"coordinates": [
					[118.147875, 24.504874],
					[118.1473, 24.504034],
					[118.149758, 24.503663],
					[118.150026, 24.504078],
					[118.149769, 24.504752],
					[118.147864, 24.504898],
					[118.148626, 24.505264]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"_name": "data 3",
				"_gid": "103"
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": [
					[
						[118.143765, 24.505386],
						[118.143551, 24.502858],
						[118.14532, 24.500652],
						[118.146749, 24.50562],
						[118.146921, 24.507173],
						[118.143175, 24.507592],
						[118.142209, 24.503834],
						[118.143765, 24.505386]
					]
				]
			}
		}
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
