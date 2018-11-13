<template>
    <div id="app" :class="theme">
        <s-header></s-header>
        <div class="s-main clearfix">
            <s-left-menu :menus.sync="menus"></s-left-menu>
            <router-view class="s-container"/>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { SHeader, SLeftMenu } from './components/index'
import mixin from './mixins'
@Component({
	components: { SHeader, SLeftMenu },
	mixins: [mixin]
})
export default class App extends Vue {
	menus: Array<Object> = [
		{ name: 'Home', to: '/' },
		{ name: 'About', to: '/about' }
	]
	@Watch('$route', { immediate: true, deep: true })
	$routeChange(to: any, from: any) {
		console.log('enter the ' + to.name + 'page')
	}
	created() {
		console.log(this.$store.getters.userInfo)
	}
}
</script>

<style lang="scss">
@import './assets/css/app.scss';
* {
	padding: 0;
	margin: 0;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
