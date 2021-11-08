import Vue from 'vue'
import VueRouter from 'vue-router'
import { pubRouter } from './pub'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/pub',
		component: () => import('@/views/pub/Pub.vue'),
		children: pubRouter,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
