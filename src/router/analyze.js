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
]

export default analyzeRouter
