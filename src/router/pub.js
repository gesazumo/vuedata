export const pubRouter = [
	{
		path: 'main',
		component: () => import('@/views/pub/Main.vue'),
	},
	{
		path: 'mainb',
		component: () => import('@/views/pub/MainB.vue'),
	},
	{
		path: 'admin',
		component: () => import('@/views/pub/Admin.vue'),
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
	{
		path: 'error1', //대체페이지(페이지없음)
		component: () => import('@/views/pub/TAH-COM002.vue'),
	},
	{
		path: 'error2', //대체페이지(접속오류)
		component: () => import('@/views/pub/TAH-COM003.vue'),
	},
	{
		path: 'error3', //대체페이지(권한없음)
		component: () => import('@/views/pub/TAH-COM004.vue'),
	},
	{
		path: 'adm001', //Admin 메타관리 단어관리
		component: () => import('@/views/pub/TAH-ADM001.vue'),
	},
	{
		path: 'adm002', //Admin 메타관리 단어등록수정
		component: () => import('@/views/pub/TAH-ADM002.vue'),
	},
	{
		path: 'ana002', //Analyze 분석환경신청 약관동의
		component: () => import('@/views/pub/TAH-ANA002.vue'),
	},
	{
		path: 'ana003', //Analyze 분석환경신청 신청정보입력
		component: () => import('@/views/pub/TAH-ANA003.vue'),
	},
	{
		path: 'adm027', //Admin 게시판관리 인사이트 리포트 관리
		component: () => import('@/views/pub/TAH-ADM027.vue'),
	},
	{
		path: 'adm028', //Admin 게시판관리 인사이트 등록 및 수정
		component: () => import('@/views/pub/TAH-ADM028.vue'),
	},
]
