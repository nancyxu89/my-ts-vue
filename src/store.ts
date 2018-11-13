/** @format */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let packageInfo = require('../package.json')
const UPDATE_THEME = 'update-theme'
export default new Vuex.Store({
	state: {
		user: { name: 'xyy' },
		theme: 'blue',
		packageInfo: packageInfo
	},
	getters: {
		userInfo(state) {
			return state.user
		}
	},
	mutations: {
		[UPDATE_THEME](state, data) {
			state.theme = data
		}
	},
	actions: {
		updateTheme({ commit }, data) {
			commit(UPDATE_THEME, data)
		}
	}
})
