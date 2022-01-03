<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>문의하기 등록 및 수정</h5>
				<div class="item_box">
					<div class="table_box">
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="230" />
								<col width="" />
								<col width="230" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>회사명</th>
									<td>KB국민은행</td>
									<th>부서</th>
									<td>경영연구소</td>
								</tr>
								<tr>
									<th>이름</th>
									<td>김국민</td>
									<th>사번</th>
									<td>H00000</td>
								</tr>
								<tr>
									<th>구분</th>
									<td colspan="3">분석 환경 활용</td>
								</tr>
								<tr>
									<th>문의내용</th>
									<td colspan="3">
										안녕하세요, <br />
										현재 PROJ-003 프로젝트 수행을 위해
										SageMaker Studio를 신청하여 사용중에
										있습니다. <br />
										추가적으로 프로젝트 계획이 잡혀서
										Notebook을 사용하고자 합니다. <br />
										한 사람이 동시에 2개 분석환경 신청이
										가능한지 문의드립니다. <br />
										감사합니다.
									</td>
								</tr>
								<tr>
									<th>
										답변
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-textarea
											placeholder="답변을 입력하세요/Editor"
											clearable
											outlined
											v-model="reply"
											:rules="replyRules"
											hide-details="auto"
										></v-textarea>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="btn_area center">
					<v-btn color="primary" dark outlined> 취소 </v-btn>
					<v-btn color="primary" dark> 수정하기 </v-btn>
					<v-btn color="primary" dark> 등록하기 </v-btn>
				</div>
			</div>
		</div>
	</v-app>
</template>
<script>
export default {
	data() {
		return {
			dialog: false,
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			reply: '',
			replyRules: [v => !!v || '답변을 입력해 주세요.'],
		}
	},
}
</script>
