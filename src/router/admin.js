const adminRouter = [
	{
		path: 'adm001',
		component: () => import('@/views/admin/ADM001.vue'),
	},
	{
		path: 'adm002',
		component: () => import('@/views/admin/ADM002.vue'),
	},
	{
		path: 'adm027',
		component: () => import('@/views/admin/ADM027.vue'),
	},
	{
		path: 'adm028',
		component: () => import('@/views/admin/ADM028.vue'),
	},
]

export default adminRouter
