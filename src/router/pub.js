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
		path: 'ana004', //Analyze 분석환경신청 신청정보입력
		component: () => import('@/views/pub/TAH-ANA004.vue'),
	},
	{
		path: 'adm027', //Admin 게시판관리 인사이트 리포트 관리
		component: () => import('@/views/pub/TAH-ADM027.vue'),
	},
	{
		path: 'adm028', //Admin 게시판관리 인사이트 등록수정
		component: () => import('@/views/pub/TAH-ADM028.vue'),
	},
	{
		path: 'adm037', //Admin 라이브러리 오픈소스라이브러리 관리
		component: () => import('@/views/pub/TAH-ADM037.vue'),
	},
	{
		path: 'adm038', //Admin 라이브러리 오픈소스라이브러리 등록수정
		component: () => import('@/views/pub/TAH-ADM038.vue'),
	},
	{
		path: 'adm003', //Admin 메타관리 인스턴스조회
		component: () => import('@/views/pub/TAH-ADM003.vue'),
	},
	{
		path: 'adm004', //Admin 메타관리 인스턴스 등록수정
		component: () => import('@/views/pub/TAH-ADM004.vue'),
	},
	{
		path: 'adm021', //Admin 게시판관리 공지사항 관리
		component: () => import('@/views/pub/TAH-ADM021.vue'),
	},
	{
		path: 'adm022', //Admin 게시판관리 공지사항 등록수정
		component: () => import('@/views/pub/TAH-ADM022.vue'),
	},
	{
		path: 'adm023', //Admin 게시판관리 문의하기 관리
		component: () => import('@/views/pub/TAH-ADM023.vue'),
	},
	{
		path: 'adm024', //Admin 게시판관리 문의하기 등록수정
		component: () => import('@/views/pub/TAH-ADM024.vue'),
	},
	{
		path: 'adm025', //Admin 게시판관리 FAQ 관리
		component: () => import('@/views/pub/TAH-ADM025.vue'),
	},
	{
		path: 'adm026', //Admin 게시판관리 FAQ 등록수정
		component: () => import('@/views/pub/TAH-ADM026.vue'),
	},
	{
		path: 'adm005', //Admin 메타관리 테이블관리
		component: () => import('@/views/pub/TAH-ADM005.vue'),
	},
	{
		path: 'adm006', //Admin 메타관리 테이블 등록수정
		component: () => import('@/views/pub/TAH-ADM006.vue'),
	},
]
