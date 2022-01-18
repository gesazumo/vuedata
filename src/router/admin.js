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
		path: 'adm007',
		name: 'adm007',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM007.vue'),
	},
	{
		path: 'adm008',
		name: 'adm008',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM008.vue'),
	},
	{
		path: 'adm010',
		name: 'adm010',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM010.vue'),
	},
	{
		path: 'adm011',
		name: 'adm011',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM011.vue'),
	},
	{
		path: 'adm013',
		name: 'adm013',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM013.vue'),
	},
	{
		path: 'adm019',
		name: 'adm019',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM019.vue'),
	},
	{
		path: 'adm020',
		name: 'adm020',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM020.vue'),
	},
	{
		path: 'adm027',
		name: 'adm027',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM027.vue'),
	},
	{
		path: 'adm021',
		name: 'adm021',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM021.vue'),
	},
	{
		path: 'adm028',
		name: 'adm028',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM028.vue'),
	},
	{
		path: 'adm035',
		name: 'adm035',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM035.vue'),
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
		path: 'adm026',
		name: 'adm026',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM026.vue'),
	},
	{
		path: 'adm0261/:seq',
		name: 'adm0261',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM0261.vue'),
	},
	{
		path: 'adm022',
		name: 'adm022',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM022.vue'),
	},
	{
		path: 'adm018',
		name: 'adm018',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM018.vue'),
	},
	{
		path: 'adm016',
		name: 'adm016',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM016.vue'),
	},
	{
		path: 'adm017',
		name: 'adm017',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM017.vue'),
	},
	{
		path: 'adm024/:seq',
		name: 'adm024',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM024.vue'),
	},
	{
		path: 'adm0221/:seq',
		name: 'adm0221',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM0221.vue'),
	},
	{
		path: 'adm0181/:athId',
		name: 'adm0181',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM0181.vue'),
	},
	{
		path: 'adm029',
		name: 'adm029',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM029.vue'),
	},
	{
		path: 'adm030',
		name: 'adm030',
		meta: { isPublic: true },
		component: () => import('@/views/admin/ADM030.vue'),
	},
]

export default adminRouter
