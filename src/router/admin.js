const adminRouter = [
	{
		path: 'adm027', //Admin 게시판관리 인사이트 리포트 관리
		component: () => import('@/views/admin/ADM027.vue'),
	},
	{
		path: 'adm028', //Admin 게시판관리 인사이트 등록 및 수정
		component: () => import('@/views/admin/ADM028.vue'),
	},
]

export default adminRouter
