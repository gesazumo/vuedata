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
		path: 'ana006',
		name: 'ana006',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANA006.vue'),
	},
	{
		path: 'ana007',
		name: 'ana007',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANA007.vue'),
	},
	{
		path: 'ana008',
		name: 'ana008',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANA008.vue'),
	},
	{
		path: 'ana009',
		name: 'ana009',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANA009.vue'),
	},
	{
		path: 'ana010',
		name: 'ana010',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANA010.vue'),
	},
	{
		path: 'anatest',
		name: 'anatest',
		meta: { isPublic: true },
		component: () => import('@/views/analyze/ANAtest.vue'),
	},
]

export default analyzeRouter
