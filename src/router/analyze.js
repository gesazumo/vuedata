const analyzeRouter = [
	{
		path: 'ana002',
		name: 'ana002',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANA002.vue'),
	},
	{
		path: 'ana003',
		name: 'ana003',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANA003.vue'),
	},
	{
		path: 'ana004',
		name: 'ana004',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANA004.vue'),
		props: true,
	},
	{
		path: 'ana005',
		name: 'ana005',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANA005.vue'),
	},
	{
		path: 'ana006',
		name: 'ana006',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANA006.vue'),
	},
	{
		path: 'anatest',
		name: 'anatest',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANAtest.vue'),
	},
]

export default analyzeRouter
