<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> Analyze</li>
					<li>
						<i class="fa fa-chevron-right"></i> 오픈소스 라이브러리
					</li>
					<li><i class="fa fa-chevron-right"></i> 반입 신청</li>
				</ul>
				<h3>오픈소스 라이브러리 반입 신청</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no">
					<div class="page_done_tit">
						<lottie
							:options="defaultOptions"
							:height="96"
							:width="96"
							v-on:animCreated="handleAnimation"
						/>
						<h4>오픈소스 라이브러리 반입 신청이 완료되었습니다.</h4>
						<span>
							결재 현황 및 분석환경 신청결과는 ‘<u>My Page</u
							>’에서 확인 할 수 있습니다.
						</span>
					</div>
				</div>
				<div class="s_body">
					<div class="table_box">
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="230" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>프로젝트ID</th>
									<td>KBO-PROJ-0001</td>
								</tr>
								<tr>
									<th>패키지그룹</th>
									<td>Phthon</td>
								</tr>
								<tr>
									<th>라이브러리 정보</th>
									<td>Pandas, 1.3.4</td>
								</tr>
								<tr>
									<th>라이브러리 파일명</th>
									<td>pandas-1.3.4-cp37-cp37m-win32.whl</td>
								</tr>
								<tr>
									<th>반입 신청 사유</th>
									<td>반입신청사유</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn class="box" large>홈으로 가기</v-btn>
						<v-btn color="primary" large dark>My Page 가기</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import animationFile from '@/assets/lottie/check.json'

export default {
	name: 'CheckLottie',
	data() {
		return {
			defaultOptions: { animationData: animationFile },
		}
	},
	methods: {
		handleAnimation: function (anim) {
			this.anim = anim
			this.anim.setSpeed(1.5)
		},
	},
}
</script>
