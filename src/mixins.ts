/** @format */

import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Mixin extends Vue {
	toggleTheme(): void {
		let theme = this.theme === 's-blue' ? 'red' : 'blue'
		this.$store.dispatch('updateTheme', theme)
	}
	setTheme(theme: String): void {
		this.$store.dispatch('updateTheme', theme)
	}
	get theme(): String {
		return this.$store.state.theme === 'blue' ? 's-blue' : 's-red'
	}
}
