<template>
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
									현재 PROJ-003 프로젝트 수행을 위해 SageMaker
									Studio를 신청하여 사용중에 있습니다. <br />
									추가적으로 프로젝트 계획이 잡혀서 Notebook을
									사용하고자 합니다. <br />
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
									<vue-editor
										@blur="checkMainText = true"
										v-model="param.maintext"
										outlined
										clearable
										id="abc"
									></vue-editor>
									<div
										class="v-messages__message"
										v-if="checkMainText && isMainTextEmpty"
									>
										본문입력은 필수입니다.
									</div>
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
</template>

<script>
import { getQnaDetailApi } from '~/src/api/modules/qnaAPI'

export default {
	async created() {
		const { seq } = this.$route.params
		try {
			const { data } = await getQnaDetailApi(seq)
			this.param = {
				seq: seq,
				dstic: data.dstic,
				kategorie: data.kategorie,
				eventend: data.eventend
					? this.formatDate(data.eventend, '-')
					: null,
				title: data.title,
				posting: data.posting,
				startdate: data.startdate
					? this.formatDate(data.startdate, '-')
					: null,
				enddate: data.enddate
					? this.formatDate(data.enddate, '-')
					: null,
				maintext: data.maintext,
			}
		} catch (err) {
			this.$showError('존재하지 않는 게시물입니다.')
			this.$router.push({ name: 'adm021' })
			console.log(err)
		}
	},
}
</script>

<style></style>
