import Vue from 'vue'
import VueRouter from 'vue-router'
import analyzeRouter from './analyze'
import exploreRouter from './explore'
import { pubRouter } from './pub'
import shareRouter from './share'
import supportRouter from './support'
import adminRouter from './admin'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '*',
		component: () => import('@/views/error/PageNotFound.vue'),
	},
	{
		path: '/explore',
		component: () => import('@/views/explore/ExploreIndex.vue'),
		children: exploreRouter,
		beforeEnter: (to, from, next) => {
			console.log(to)
			console.log(from)
			console.log(next)
			// next(error)
			next(false)
		},
	},
	{
		path: '/analyze',
		component: () => import('@/views/analyze/AnalyzeIndex.vue'),
		children: analyzeRouter,
	},
	{
		path: '/share',
		component: () => import('@/views/share/ShareIndex.vue'),
		children: shareRouter,
	},
	{
		path: '/support',
		component: () => import('@/views/support/SupportIndex.vue'),
		children: supportRouter,
	},
	{
		path: '/pub',
		component: () => import('@/views/pub/Pub.vue'),
		children: pubRouter,
	},
	{
		path: '/admin',
		name: 'admin',
		meta: { isPublic: false },
		component: () => import('@/views/admin/AdminIndex.vue'),
		children: adminRouter,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
