export const pubRouter = [
	{
		path: 'main',
		component: () => import('@/views/pub/Main.vue'),
	},
	{
		path: 'mainb',
		component: () => import('@/views/pub/MainB.vue'),
	},
	//error
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
	//login
	{
		path: 'scr001', //로그인
		component: () => import('@/views/pub/TAH-SCR001.vue'),
	},
	//Admin
	{
		path: 'admin',
		component: () => import('@/views/pub/Admin.vue'),
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
		path: 'adm003', //Admin 메타관리 인스턴스조회
		component: () => import('@/views/pub/TAH-ADM003.vue'),
	},
	{
		path: 'adm004', //Admin 메타관리 인스턴스 등록수정
		component: () => import('@/views/pub/TAH-ADM004.vue'),
	},
	{
		path: 'adm005', //Admin 메타관리 테이블관리
		component: () => import('@/views/pub/TAH-ADM005.vue'),
	},
	{
		path: 'adm006', //Admin 메타관리 테이블 등록수정
		component: () => import('@/views/pub/TAH-ADM006.vue'),
	},
	{
		path: 'adm016', //Admin 포털관리 메뉴관리
		component: () => import('@/views/pub/TAH-ADM016.vue'),
	},
	{
		path: 'adm017', //Admin 포털관리 권한조회
		component: () => import('@/views/pub/TAH-ADM017.vue'),
	},
	{
		path: 'adm018', //Admin 포털관리 권한관리
		component: () => import('@/views/pub/TAH-ADM018.vue'),
	},
	{
		path: 'adm019', //Admin 포털관리 코드조회
		component: () => import('@/views/pub/TAH-ADM019.vue'),
	},
	{
		path: 'adm020', //Admin 포털관리 코드관리
		component: () => import('@/views/pub/TAH-ADM020.vue'),
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
		path: 'adm027', //Admin 게시판관리 인사이트 리포트 관리
		component: () => import('@/views/pub/TAH-ADM027.vue'),
	},
	{
		path: 'adm028', //Admin 게시판관리 인사이트 등록수정
		component: () => import('@/views/pub/TAH-ADM028.vue'),
	},
	{
		path: 'adm029', //Admin 게시판관리 자료실 조회
		component: () => import('@/views/pub/TAH-ADM029.vue'),
	},
	{
		path: 'adm030', //Admin 게시판관리 자료실 관리
		component: () => import('@/views/pub/TAH-ADM030.vue'),
	},
	{
		path: 'adm035', //Admin 게시판관리 결재라인 조회
		component: () => import('@/views/pub/TAH-ADM035.vue'),
	},
	{
		path: 'adm036', //Admin 게시판관리 결재라인 관리
		component: () => import('@/views/pub/TAH-ADM036.vue'),
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
		path: 'adm045', //Analyze 오픈소스 라이브러리 반입신청완료
		component: () => import('@/views/pub/TAH-ADM045.vue'),
	},
	{
		path: 'adm046', //Analyze 오픈소스 라이브러리 반입신청완료
		component: () => import('@/views/pub/TAH-ADM046.vue'),
	},
	{
		path: 'adm068', //Admin 메타관리 컬럼명 조회
		component: () => import('@/views/pub/TAH-ADM068.vue'),
	},
	{
		path: 'adm069', //Admin 메타관리 인스턴스명 조회
		component: () => import('@/views/pub/TAH-ADM069.vue'),
	},
	//Analyze
	{
		path: 'ana002', //Analyze 분석환경신청 약관동의
		component: () => import('@/views/pub/TAH-ANA002.vue'),
	},
	{
		path: 'ana003', //Analyze 분석환경신청 신청정보입력
		component: () => import('@/views/pub/TAH-ANA003.vue'),
	},
	{
		path: 'ana005', //Analyze 분석환경신청 팀원선택
		component: () => import('@/views/pub/TAH-ANA005.vue'),
	},
	{
		path: 'ana006', //Analyze 분석환경신청 프로젝트 생성 확인
		component: () => import('@/views/pub/TAH-ANA006.vue'),
	},
	{
		path: 'ana004', //Analyze 분석환경신청 신청정보입력
		component: () => import('@/views/pub/TAH-ANA004.vue'),
	},
	{
		path: 'ana007', //Analyze 오픈소스 라이브러리 리스트
		component: () => import('@/views/pub/TAH-ANA007.vue'),
	},
	{
		path: 'ana008', //Analyze 오픈소스 라이브러리 상세
		component: () => import('@/views/pub/TAH-ANA008.vue'),
	},
	{
		path: 'ana009', //Analyze 오픈소스 라이브러리 반입신청
		component: () => import('@/views/pub/TAH-ANA009.vue'),
	},
	{
		path: 'ana010', //Analyze 오픈소스 라이브러리 반입신청완료
		component: () => import('@/views/pub/TAH-ANA010.vue'),
	},
	//Explore
	{
		path: 'exp001', //Explore sub Main
		component: () => import('@/views/pub/TAH-EXP001.vue'),
	},
	{
		path: 'exp004', //Explore 테이블권한 신청
		component: () => import('@/views/pub/TAH-EXP004.vue'),
	},
	{
		path: 'exp007', //Explore 테이블권한 신청 완료
		component: () => import('@/views/pub/TAH-EXP007.vue'),
	},
	//My page
	{
		path: 'myp012', //My page  My Project 공유하기
		component: () => import('@/views/pub/TAH-MYP012.vue'),
	},
	{
		path: 'myp013', //My page  My Project 공유하기 완료
		component: () => import('@/views/pub/TAH-MYP013.vue'),
	},
	{
		path: 'myp014', //My page  My Project 공유하기 완료
		component: () => import('@/views/pub/TAH-MYP014.vue'),
	},
	{
		path: 'myp015', //My page  My Project 공유하기 완료
		component: () => import('@/views/pub/TAH-MYP015.vue'),
	},
	{
		path: 'myp016', //My page  My Project 공유하기 완료
		component: () => import('@/views/pub/TAH-MYP016.vue'),
	},
	{
		path: 'myp017', //My page  My Project 공유하기 완료
		component: () => import('@/views/pub/TAH-MYP017.vue'),
	},
	{
		path: 'myp018', //My page  My Project 공유하기 완료
		component: () => import('@/views/pub/TAH-MYP018.vue'),
	},
	{
		path: 'myp022', //My page  My Dataset 업로드
		component: () => import('@/views/pub/TAH-MYP022.vue'),
	},
	{
		path: 'myp026', //My page  파일 업로드 요청 확인 팝업
		component: () => import('@/views/pub/TAH-MYP026.vue'),
	},
	{
		path: 'myp027', //My page  My Dashboard My Dataset업로드
		component: () => import('@/views/pub/TAH-MYP027.vue'),
	},
	{
		path: 'myp032', //My page  My결재함 분석환경신청 결재상세
		component: () => import('@/views/pub/TAH-MYP032.vue'),
	},
	{
		path: 'myp033', //My page  My결재함 데이터 결재상세
		component: () => import('@/views/pub/TAH-MYP033.vue'),
	},
	{
		path: 'myp034', //My page  My결재함 데이터업로드 결재 상세
		component: () => import('@/views/pub/TAH-MYP034.vue'),
	},
	{
		path: 'myp037', //My page  My결재함 메타테이블 결재 상세
		component: () => import('@/views/pub/TAH-MYP037.vue'),
	},
	{
		path: 'sup001', //Support sub main
		component: () => import('@/views/pub/TAH-SUP001.vue'),
	},
]
