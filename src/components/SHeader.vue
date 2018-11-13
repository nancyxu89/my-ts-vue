<template>
<header class="s-header">
    <div class="project-info">{{$store.state.packageInfo.name}}</div>
    <nav class="header-nav">
        <span @click="toggleTheme"><i></i>toggle</span>
        <router-link v-for="menu in menus" :key="menu.name" :to="menu.to">{{menu.name}}</router-link>
    </nav>
    <div class="user-info">
        <span>{{userName}}</span>
    </div>
</header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import mixin from '../mixins'
@Component({
	mixins: [mixin]
})
export default class SHeader extends Vue {
	name: String = 'sHeader'
	userName: String = this.$store.state.packageInfo.owner
	menus: Array<Object> = [
		{ name: 'Home', to: '/' },
		{ name: 'About', to: '/about' },
		{ name: 'Page3', to: '/page3' }
	]
}
</script>
<style lang="scss" scoped>
.s-header {
	height: 50px;
	line-height: 50px;
	.project-info,
	.header-nav,
	.user-info {
		display: inline-block;
		box-sizing: border-box;
	}
	.project-info {
		width: 230px;
	}
	.header-nav {
		width: calc(100% - 330px);
		text-align: left;
	}
	.user-info {
		width: 100px;
	}
	a {
		font-weight: bold;
		color: #2c3e50;

		& .router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
