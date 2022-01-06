const adminRouter = [
	{
		path: '',
		redirect: 'adm001',
	},
	{
		path: 'adm001',
		name: 'adm001',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM001.vue'),
	},
	{
		path: 'adm002',
		name: 'adm002',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM002.vue'),
	},
	{
		path: 'adm003',
		name: 'adm003',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM003.vue'),
	},
	{
		path: 'adm004',
		name: 'adm004',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM004.vue'),
	},
	{
		path: 'adm005',
		name: 'adm005',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM005.vue'),
	},
	{
		path: 'adm006',
		name: 'adm006',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM006.vue'),
	},
	{
		path: 'adm021',
		name: 'adm021',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM021.vue'),
	},
	{
		path: 'adm037',
		name: 'adm037',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM037.vue'),
	},
	{
		path: 'adm038',
		name: 'adm038',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM038.vue'),
	},
	{
		path: 'adm068',
		name: 'adm068',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM068.vue'),
	},
	{
		path: 'adm069',
		name: 'adm069',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM069.vue'),
	},
	{
		path: 'adm021',
		name: 'adm021',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM021.vue'),
	},
	{
		path: 'adm023',
		name: 'adm023',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM023.vue'),
	},
	{
		path: 'adm025',
		name: 'adm025',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM025.vue'),
	},
	{
		path: 'adm022',
		name: 'adm022',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM022.vue'),
	},
	{
		path: 'adm0221/:seq',
		name: 'adm0221',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM0221.vue'),
	},
]

export default adminRouter
