<template>
<div style="color:red">
path {{msg}}
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
Component.registerHooks([
	'beforeRouteEnter',
	'beforeRouteLeave',
	'beforeRouteUpdate' // for vue-router 2.2+
])
@Component
export default class PageContainer extends Vue {
	name: string = 'PageContainer'
	msg: string = ''
	@Watch('$route', { immediate: true, deep: true })
	$routeChange(to: any, from: any) {
		console.info(to)
		this.msg = to.path
	}

	created() {
		//		this.msg = 'test'
	}
}
</script>
