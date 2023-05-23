<!--
 * @Author: zhangjm
 * @Date: 2023-05-23 11:09:27
 * @LastEditors: zhangjm
 * @LastEditTime: 2023-05-23 13:37:15
 * @Description: 
-->
<template>
	<div>
		<GeojsonIo height="500px" width="500px" v-model="value" />
		<div>{{ value }}</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import GeojsonIo from '@/components/geojson-io/index.vue';

const value = ref('123');
</script>
