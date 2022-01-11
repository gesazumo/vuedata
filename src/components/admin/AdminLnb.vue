<template>
	<div id="lnb">
		<ul>
			<li>
				<a href="#none" @click="showMetaSubMenu = !showMetaSubMenu"
					>메타관리</a
				>
				<ul v-if="showMetaSubMenu">
					<li><router-link to="adm001">단어관리</router-link></li>
					<li><a href="#none">인스턴스코드관리</a></li>
					<li><a href="#none">메타관리</a></li>
				</ul>
			</li>

			<li>
				<a href="#none" @click="showMoniSubMenu = !showMoniSubMenu"
					>모니터링</a
				>
				<ul v-if="showMoniSubMenu">
					<li><a href="#none">포털 로그인 이력</a></li>
					<li><a href="#none">포털 로그인 접속이력</a></li>
					<li><a href="#none">SageMaker 접속이력</a></li>
					<li><a href="#none">데이터 처리현황</a></li>
					<li><a href="#none">시스템 현황</a></li>
					<li><a href="#none">장애감지</a></li>
					<li><a href="#none">리소스사용(계열사별)</a></li>
				</ul>
			</li>
			<li>
				<a href="#none" @click="showDashSubMenu = !showDashSubMenu"
					>대시보드 관리</a
				>
			</li>
			<li>
				<a href="#none" @click="showMenuSubMenu = !showMenuSubMenu"
					>메뉴관리</a
				>
				<ul v-if="showMenuSubMenu">
					<li><a href="#none">메뉴 리스트</a></li>
					<li><a href="#none">메뉴관리</a></li>
				</ul>
			</li>
			<li>
				<a href="#none" @click="showAuthSubMenu = !showAuthSubMenu"
					>권한관리</a
				>
				<ul v-if="showAuthSubMenu">
					<li><a href="#none">사용자별 화면권한 리스트</a></li>
					<li><a href="#none">권한관리</a></li>
				</ul>
			</li>
			<li>
				<a href="#none" @click="showCodeSubMenu = !showCodeSubMenu"
					>코드관리</a
				>
				<ul v-if="showCodeSubMenu">
					<li><a href="#none">코드조회</a></li>
					<li><a href="#none">코드관리</a></li>
				</ul>
			</li>
			<li>
				<a href="#none" @click="showBoardSubMenu = !showBoardSubMenu"
					>게시판관리</a
				>
				<ul v-if="showBoardSubMenu">
					<li>
						<router-link :to="{ name: 'adm021' }"
							>공지사항 관리</router-link
						>
					</li>
					<li>
						<router-link :to="{ name: 'adm023' }"
							>Q &amp; A 관리</router-link
						>
					</li>
					<li>
						<router-link :to="{ name: 'adm025' }"
							>FAQ 관리</router-link
						>
					</li>
					<li>
						<router-link to="adm027"
							>사이트 리포트 관리</router-link
						>
					</li>
					<li><a href="#none">자료실 관리</a></li>
					<li><a href="#none">댓글 관리</a></li>
				</ul>
			</li>
			<li>
				<a
					href="#none"
					@click="showPaymentSubMenu = !showPaymentSubMenu"
					>결재관리</a
				>
				<ul v-if="showPaymentSubMenu">
					<li><a href="#none">결재라인 관리</a></li>
				</ul>
			</li>
			<li>
				<a href="#none" @click="showLibSubMenu = !showLibSubMenu"
					>라이브러리</a
				>
				<ul v-if="showLibSubMenu">
					<li><a href="#none">오픈소스 라이브러리 관리</a></li>
				</ul>
			</li>
			<li @click="showAwsSubMenu = !showAwsSubMenu">
				<a href="#none">AWS 실행관리</a>
			</li>
			<li @click="showNotiSubMenu = !showNotiSubMenu">
				<a href="#none">알림현황</a>
			</li>
			<li @click="showUserSubMenu = !showUserSubMenu">
				<a href="#none">사용자관리</a>
			</li>
			<li @click="showBoardSituSubMenu = !showBoardSituSubMenu">
				<a href="#none">게시판현황</a>
			</li>
			<li @click="showPaymentSituSubMenu = !showPaymentSituSubMenu">
				<a href="#none">결재현황</a>
			</li>
			<li @click="showProjectSubMenu = !showProjectSubMenu">
				<a href="#none">프로젝트관리</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'AdminLnb',
	data() {
		return {
			showMetaSubMenu: false,
			showMoniSubMenu: false,
			showDashSubMenu: false,
			showMenuSubMenu: false,
			showAuthSubMenu: false,
			showCodeSubMenu: false,
			showBoardSubMenu: false,
			showPaymentSubMenu: false,
			showLibSubMenu: false,
			showAwsSubMenu: false,
			showNotiSubMenu: false,
			showUserSubMenu: false,
			showBoardSituSubMenu: false,
			showPaymentSituSubMenu: false,
			showProjectSubMenu: false,
		}
	},
}
</script>

<style></style>
