<template>
  <div class="about">
    <h1>This is an about page {{msg}}</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

Component.registerHooks([
	'beforeRouteEnter',
	'beforeRouteLeave',
	'beforeRouteUpdate' // for vue-router 2.2+
])

@Component
export default class About extends Vue {
	msg: String = 'hello ts'
	created() {
		this.$message({
			message: '恭喜你，这是一条成功消息',
			type: 'success'
		})
	}

	beforeRouteEnter(to: any, from: any, next: Function) {
		console.log('beforeRouteEnter')
		next()
	}
}
</script>
