import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '@/views/Container.vue'
import { pubRouter } from './pub'
import commonRouter from './commonRouter'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'Login',
		meta: { isPublic: true },
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/',
		meta: { isPublic: true },
		component: Container,
		children: commonRouter,
	},
	{
		path: '*',
		meta: { isPublic: true },
		component: () => import('@/views/error/PageNotFound.vue'),
	},
	{
		path: '/pub',
		meta: { isPublic: true },
		component: () => import('@/views/pub/Pub.vue'),
		children: pubRouter,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	return next()
	// if (to.meta.isPublic) {
	// 	return next()
	// }

	// // todo check localState
	// if (!store.getters.getAccessToken) {
	// 	return next({ path: 'login' })
	// }

	// return next()
})

export default router
