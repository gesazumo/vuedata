<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> Analyze</li>
					<li><i class="fa fa-chevron-right"></i> 분석환경신청</li>
				</ul>
				<h3>분석환경신청</h3>
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
						<h4>분석환경신청이 완료되었습니다.</h4>
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
								<col width="310" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>프로젝트ID</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.projId
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>프로젝트명</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.projName
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>프로젝트 기간</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.projTrm
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>프로젝트 설명</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.projCtnt
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>프로젝트 구분</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.projInvlNm
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>프로젝트 팀원</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.tmmmEmpnm
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>분석환경</th>
									<td>
										<span
											v-html="AnlsEvirnSpecInfo()"
										></span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn class="box" large @click="GoHome()"
							>홈으로 가기</v-btn
						>
						<v-btn color="primary" large dark>My Page 가기</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import animationFile from '@/assets/lottie/check.json'
import axios from 'axios'

export default {
	name: 'CheckLottie',
	data() {
		return {
			defaultOptions: { animationData: animationFile },
			aplcnResult: null,
		}
	},

	created() {
		this.init()
	},

	methods: {
		init() {
			const param = {
				projId: this.$route.params.projectId,
			}
			console.log('route.projectId: ' + this.$route.params.projectId)
			const queryString = this.convertUrl(param)

			var url = '/api/analyze/analenvreq/ana004/selectAna00401'

			axios
				.get(url + queryString, {})
				.then(res => {
					this.aplcnResult = res.data.aplcnResult
					console.log(res.data)
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		handleAnimation: function (anim) {
			this.anim = anim
			this.anim.setSpeed(1.5)
		},

		AnlsEvirnSpecInfo() {
			return this.aplcnResult != null
				? this.aplcnResult.anlsEvirnSpecInfo
				: ''
		},

		GoHome() {
			this.$router.push({
				name: 'Main',
			})
		},

		GoMyPage() {},
	},
}
</script>
