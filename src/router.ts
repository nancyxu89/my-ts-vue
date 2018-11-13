/** @format */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PageContainer from './components/PageContainer.vue'

Vue.use(Router)
const router = new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/*',
			component: PageContainer
		}
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (about.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: () =>
		// 		import(/* webpackChunkName: "about" */ './views/About.vue')
		// }
	]
})

router.beforeEach((to: any, from: any, next: Function) => {
	console.log(to)
	next()
})
export default router
