import adminRouter from './admin'
import shareRouter from './share'
import supportRouter from './support'
import analyzeRouter from './analyze'
import exploreRouter from './explore'

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
		name: 'main',
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
]

export default commonRouter
