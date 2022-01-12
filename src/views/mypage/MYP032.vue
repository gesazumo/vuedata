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
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.dmndEmpInfo
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>요청일시</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.dmndYms
												: ''
										}}
									</td>
								</tr>

								<tr>
									<th>결재자</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.aprvalEmpInfo
												: ''
										}}
									</td>
								</tr>
								<tr>
									<th>결재현황</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.aprvalStusNm
												: ''
										}}
									</td>
								</tr>
								<tr
									v-if="
										aprvalStusDstcd == 2 ||
										aprvalStusDstcd == 4
									"
								>
									<th>결재일</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.aprvalYms
												: ''
										}}
									</td>
								</tr>
								<tr v-if="aprvalStusDstcd == 5">
									<th>반려일</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.retunzYms
												: ''
										}}
									</td>
								</tr>
								<tr v-if="aprvalStusDstcd == 5">
									<th>반려사유</th>
									<td>
										{{
											this.aplcnResult != null
												? this.aplcnResult.retunResnCtnt
												: ''
										}}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn color="primary" large outlined>목록으로</v-btn>
						<v-btn
							color="primary"
							large
							v-if="aprvalStusDstcd == 1"
						>
							반려하기
						</v-btn>
						<v-btn
							color="primary"
							large
							v-if="aprvalStusDstcd == 1"
						>
							결재하기
						</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
// import axios from 'axios'
import { selectMyp03201 } from '@/api/modules/mypAPI'
import { updateMyp03501 } from '@/api/modules/mypAPI'

export default {
	data() {
		return {
			aplcnResult: null,
			aprvalStusDstcd: 0,
		}
	},

	created() {
		this.init()
	},

	methods: {
		async init() {
			const param = {
				aprvalId: 'KB0-C00000001',
				aprvalBzwkCd: 'C',
			}

			try {
				const { data } = await selectMyp03201(param)
				this.aplcnResult = data.aplcnResult
				this.aprvalStusDstcd = this.aplcnResult.aprvalStusCd
				console.log(data)
			} catch (error) {
				console.log('err : ' + error)
			}
		},

		async Approval() {
			const param = {
				aprvalId: 'KB0-C00000001',
				aprvalBzwkCd: 'C',
				bzwkzDstcd: '',
			}

			try {
				const { data } = await updateMyp03501(param)
				if (data.aprvalId) this.$showInfo('결재가 완료 되었습니다.')
				console.log(data)
			} catch (error) {
				console.log('err : ' + error)
			}
		},

		AnlsEvirnSpecInfo() {
			return this.aplcnResult != null
				? this.aplcnResult.anlsEvirnSpecInfo
				: ''
		},
	},
}
</script>
