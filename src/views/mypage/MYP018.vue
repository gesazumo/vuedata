<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My Project</li>
					<li>
						<i class="fa fa-chevron-right"></i> My Project 공유하기
					</li>
				</ul>
				<h3>My Project 공유하기</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no">
					<div class="page_done_tit">
						<CheckLottie />
						<h4>분석결과 CI 변환 요청이 완료되었습니다.</h4>
						<span>
							관리자 검토 후 CI로 변환된 테이블을 다운로드 될
							예정입니다.<br />
							진행사항은 ‘
							<u @click="GoMyPage"> My page </u>
							’에서 확인 할 수 있습니다.
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
									<td>
										{{
											this.shareResult != null
												? this.shareResult.projId
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>프로젝트명</th>
									<td>
										{{
											this.shareResult != null
												? this.shareResult.projName
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>프로젝트 기간</th>
									<td>
										{{
											this.shareResult != null
												? this.shareResult.projTrm
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>프로젝트 설명</th>
									<td>
										{{
											this.shareResult != null
												? this.shareResult.projCtnt
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>공유방식</th>
									<td>
										<p class="font-weight-bold">
											{{
												this.shareResult != null
													? this.shareResult
															.anlsShareModName
													: ''
											}}
										</p>
									</td>
								</tr>
								<tr>
									<th>테이블명</th>
									<td>
										{{
											this.shareResult != null
												? this.shareResult.tagetTblName
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>컬럼명</th>
									<td>
										{{
											this.shareResult != null
												? this.shareResult.tagetClmnName
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>요청사유</th>
									<td>
										{{
											this.shareResult != null
												? this.shareResult
														.aprvalDmndCtnt
												: ''
										}}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn color="primary" large outlined @click="GoHome">
							홈으로 가기
						</v-btn>
						<v-btn color="primary" large @click="GoMyPage">
							My Page 가기
						</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import { selectMyp01302 } from '@/api/modules/mypAPI'

export default {
	data() {
		return {
			dmndRsult: null,
			shareResult: null,
		}
	},

	created() {
		this.dmndRsult = this.$route.params.dmndRsult
		this.init()
	},

	methods: {
		async init() {
			const param = {
				anlsRsultShareId: this.dmndRsult.anlsRsultShareId,
				anlsShareModCd: this.dmndRsult.anlsShareModCd,
				projId: this.dmndRsult.projId,
			}

			try {
				const { data } = await selectMyp01302(param)
				this.shareResult = data.shareResult
				// if (typeof data.shareResult['test'] != 'undefined')
				// 	console.log(this.shareResult['projCtnt'])
				console.log(data)
			} catch (error) {
				console.log('err : ' + error)
			}
		},

		GoHome() {
			this.$router.push({
				name: 'Main',
			})
		},

		// My Prject 화면 이동
		GoMyPage() {},
	},
}
</script>
