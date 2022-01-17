import adminRouter from './admin'
import shareRouter from './share'
import supportRouter from './support'
import analyzeRouter from './analyze'
import exploreRouter from './explore'
import mypageRouter from './mypage'

const commonRouter = [
	{
		path: 'admin',
		name: 'admin',
		component: () => import('@/views/admin/AdminIndex.vue'),
		children: adminRouter,
	},
	{
		path: '',
		redirect: 'main',
	},
	{
		path: 'main',
		name: 'Main',
		meta: { isPublic: false },
		component: () => import('@/views/MainA.vue'),
	},
	{
		path: '/explore',
		component: () => import('@/views/explore/ExploreIndex.vue'),
		children: exploreRouter,
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
		path: '/mypage',
		component: () => import('@/views/mypage/MyPageIndex.vue'),
		children: mypageRouter,
	},
]

export default commonRouter
