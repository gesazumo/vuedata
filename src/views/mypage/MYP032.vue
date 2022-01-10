<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My 결재함</li>
				</ul>
				<h3>분석환경신청 결재상세</h3>
			</div>
			<div class="subcontents">
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
									<th>결재 ID</th>
									<td>KBO-C00000001</td>
								</tr>
								<tr>
									<th>프로젝트 ID</th>
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
								<tr>
									<th>요청자</th>
									<td>최자영(KB국민은행, 데이터기획부)</td>
								</tr>
								<tr>
									<th>요청일시</th>
									<td>2022-00-00 21:00:00</td>
								</tr>
								<tr>
									<th>결재자</th>
									<td>
										강태근(KB국민은행, 데이터엔지니어링부)
									</td>
								</tr>
								<tr>
									<th>결재현황</th>
									<td>{{ PaymentStatus() }}</td>
								</tr>
								<tr v-if="aprvalStusDstcd == 2">
									<th>결재일</th>
									<td>2022-00-00 21:00:00</td>
								</tr>
								<tr v-if="aprvalStusDstcd == 3">
									<th>반려일</th>
									<td>2022-00-00 21:00:00</td>
								</tr>
								<tr v-if="aprvalStusDstcd == 3">
									<th>반려사유</th>
									<td>개인정보 포함으로 인해 승인 불가</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn color="primary" large outlined>목록으로</v-btn>
						<v-btn color="primary" large v-if="aprvalStusDstcd == 1"
							>반려하기</v-btn
						>
						<v-btn color="primary" large v-if="aprvalStusDstcd == 1"
							>결재하기</v-btn
						>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			aplcnResult: null,
			aprvalStusDstcd: 0,
		}
	},

	created() {
		this.aprvalStusDstcd = 1 //this.$route.params.aprvalStusDstcd
		this.init()
	},

	methods: {
		init() {
			const param = {
				aprvalId: 'KB0-C00000001',
				aprvalBzwkCd: 'C',
			}

			const queryString = this.convertUrl(param)

			var url = '/api/mypage/myaprval/myp032/selectMyp03201'

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

		AnlsEvirnSpecInfo() {
			return this.aplcnResult != null
				? this.aplcnResult.anlsEvirnSpecInfo
				: ''
		},

		PaymentStatus() {
			if (this.aprvalStusDstcd == 1) return '결재중'
			else if (this.aprvalStusDstcd == 2) return '결재완료'
			else if (this.aprvalStusDstcd == 3) return '반려'
			else return ''
		},
	},
}
</script>
