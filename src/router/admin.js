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
]

export default adminRouter
