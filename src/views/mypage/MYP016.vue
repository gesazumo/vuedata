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
						<h4>My Project 공유 신청이 완료되었습니다.</h4>
						<span>
							관리자 검토 후 ‘
							<u @click="GoAnaModel">
								Explore &gt; 분석모델 페이지
							</u>
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
									<th>공유범위</th>
									<td>
										{{
											this.shareResult != null
												? this.shareResult
														.anlsShareRangName
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>공유 카테고리</th>
									<td>
										<p class="font-weight-bold">
											{{
												this.shareResult != null
													? this.shareResult
															.anlsShareCgryName
													: ''
											}}
										</p>
									</td>
								</tr>
								<tr>
									<th>대시보드명</th>
									<td>
										{{
											this.shareResult != null
												? this.shareResult
														.anlsRsultShareName
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>대시보드 설명</th>
									<td>
										{{
											this.shareResult != null
												? this.shareResult
														.anlsRsultShareDesc
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>대시보드 URL</th>
									<td>
										{{
											this.shareResult != null
												? this.shareResult.dshbUrlAddr
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
import { selectMyp01301 } from '@/api/modules/mypAPI'

export default {
	data() {
		return {
			shareResult: null,
		}
	},

	created() {
		this.init()
	},

	methods: {
		async init() {
			const param = {
				anlsRsultShareId: 'KB0-PRTL-0004',
				anlsShareCgryCd: 'SC4',
				anlsShareModCd: 'SM1',
				projId: 'KB0-PROJ-0004',
			}

			try {
				const { data } = await selectMyp01301(param)
				this.shareResult = data.shareResult
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

		// 분설모델 화면 이동
		GoAnaModel() {},
	},
}
</script>
