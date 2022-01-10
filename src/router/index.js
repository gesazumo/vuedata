import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '@/views/Container.vue'
import { pubRouter } from './pub'
import commonRouter from './commonRouter'
import store from '@/store'
import methods from '@/methods'

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

router.beforeEach(async (to, from, next) => {
	// 공통코드 없으면
	// 호출 후 통과
	// 있으면
	// 아래로

	if (store.getters['commonCodeStore/cmCodeExist']) {
		if (to.meta.isPublic) {
			return next()
		}
		if (!store.getters.getAccessToken) {
			return next({ path: 'login' })
		}
	} else {
		try {
			await store.dispatch('commonCodeStore/fetchCmCode')
			console.log('공통코드 다 받아옴')
			next()
		} catch (error) {
			methods.$showError(
				this.apiErrorMsg_Pink + ' : 공통코드 받아오기 실패!',
			)
			console.log('commonCodeStore/fetchCmCode :' + error)
		}
	}
	return next()
})

export default router
