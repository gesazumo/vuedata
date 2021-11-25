export const pubRouter = [
	{
		path: 'main',
		component: () => import('@/views/pub/Main.vue'),
	},
	{
		path: 'admin',
		component: () => import('@/views/pub/Admin.vue'),
	},
	{
		path: 'error',
		component: () => import('@/views/pub/errorpage.vue'),
	},
	{
		path: 'button',
		component: () => import('@/components/pub/button.vue'),
	},
	{
		path: 'cardlist',
		component: () => import('@/components/pub/cardlist.vue'),
	},
	{
		path: 'check',
		component: () => import('@/components/pub/checkbox.vue'),
	},
	{
		path: 'dropdown',
		component: () => import('@/components/pub/dropdown.vue'),
	},
	{
		path: 'indicator',
		component: () => import('@/components/pub/indicator.vue'),
	},
	{
		path: 'popup',
		component: () => import('@/components/pub/popup.vue'),
	},
	{
		path: 'page',
		component: () => import('@/components/pub/pagination.vue'),
	},
	{
		path: 'toload',
		component: () => import('@/components/pub/toload.vue'),
	},
	{
		path: 'radio',
		component: () => import('@/components/pub/radio.vue'),
	},
	{
		path: 'tab',
		component: () => import('@/components/pub/tab.vue'),
	},
	{
		path: 'table',
		component: () => import('@/components/pub/table.vue'),
	},
	{
		path: 'textarea',
		component: () => import('@/components/pub/textarea.vue'),
	},
	{
		path: 'textfield',
		component: () => import('@/components/pub/texetfield.vue'),
	},
	{
		path: 'toggle',
		component: () => import('@/components/pub/toggle.vue'),
	},
	{
		path: 'tooltip',
		component: () => import('@/components/pub/tooltip.vue'),
	},
	{
		path: 'bar',
		component: () => import('@/components/pub/systembar.vue'),
	},
	{
		path: 'slide',
		component: () => import('@/components/pub/indicator.vue'),
	},
]
