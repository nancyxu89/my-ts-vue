<template>
    <nav class="s-left-menu">
        <ul>
            <li v-for="menu in menus" :key="menu.name">{{menu.name}}</li>
        </ul>
    </nav>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class SLeftMenu extends Vue {
	name: string = 'leftMenu'
	@Prop() menus!: Array<Object>
}
</script>
<style lang="scss" scoped>
.s-left-menu {
	display: inline-block;
	width: 230px;
	float: left;
	background-color: #efefef;
}
</style>
