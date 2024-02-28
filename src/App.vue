<template>
	<router-view v-slot="{ Component }">
		<keep-alive :include="includeList">
			<component :is="Component" />
		</keep-alive>
	</router-view>
</template>
<script setup lang="ts">
import { setupMapState } from '@/utils/setupStore'
const { includeList } = setupMapState('keepAlive', ['includeList'])
</script>
<style lang="scss">
@import '@/assets/css/font.scss';
html, body, #app {
  height: 100%;
}
</style>
