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
		path: 'adm008',
		name: 'adm008',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM008.vue'),
	},
	{
		path: 'adm027',
		name: 'adm027',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM027.vue'),
	},
	{
		path: 'adm028',
		name: 'adm028',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM028.vue'),
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
		path: 'adm021',
		name: 'adm021',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM021.vue'),
	},
	{
		path: 'adm025',
		name: 'adm025',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM025.vue'),
	},
]

export default adminRouter
