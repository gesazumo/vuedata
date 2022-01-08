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
								<td>{{ param.company }}</td>
								<th>부서</th>
								<td>{{ param.department }}</td>
							</tr>
							<tr>
								<th>이름</th>
								<td>{{ param.name }}</td>
								<th>사번</th>
								<td>{{ param.reqemp }}</td>
							</tr>
							<tr>
								<th>구분</th>
								<td colspan="3">{{ param.dstic }}</td>
							</tr>
							<tr>
								<th>문의내용</th>
								<td colspan="3">{{ param.qatext }}</td>
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
				<v-btn color="primary" dark outlined @click="$router.go()">
					취소
				</v-btn>
				<v-btn color="primary" dark v-if="!isCreate"> 삭제하기 </v-btn>
				<v-btn color="primary" dark @click="doReply">
					{{ isCreate ? '등록하기' : '수정하기' }}
				</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
import {
	deleteQnaApi,
	getQnaDetailApi,
	qnaReplyApi,
} from '@/api/modules/qnaAPI'
import { VueEditor } from 'vue2-editor'
export default {
	components: {
		VueEditor,
	},
	data() {
		return {
			isCreate: true,
			checkMainText: false,
			isMainTextEmpty: true,
			seq: null,
			param: {
				company: null,
				department: null,
				name: null,
				reqemp: null,
				dstic: null,
				qatext: null,
				maintext: null,
				answeremp: '답변자',
			},
		}
	},
	async created() {
		const { seq } = this.$route.params
		try {
			const { data } = await getQnaDetailApi(seq)
			console.log(data)

			this.seq = seq
			this.param.company = data.company
			this.param.department = '없어'
			this.param.name = '없어'
			this.param.reqemp = data.reqemp
			this.param.dstic = data.dstic
			this.param.qatext = data.qatext
			this.param.maintext = data.answertext

			if (data.answertext) this.isCreate = false
		} catch (err) {
			this.$showError('존재하지 않는 문의사항입니다.')
			this.$router.push({ name: 'adm023' })
			console.log(err)
		}
	},
	watch: {
		'param.maintext'() {
			this.isMainTextEmpty =
				document
					.getElementsByClassName('ql-editor')[0]
					?.outerText.trim() == ''
					? true
					: false
		},
		checkMainText(value) {
			if (value) {
				this.isMainTextEmpty = document.getElementsByClassName(
					'ql-editor',
				)[0]?.outerText
					? false
					: true
			}
		},
	},
	methods: {
		async doDelete() {
			if (
				!(await this.$confirm(
					'선택 항목을 삭제하시겠습니까?',
					'삭제하기',
				))
			)
				return
			try {
				const { data } = await deleteQnaApi([this.seq])
				console.log(data)
				this.$showInfo('삭제되었습니다.')
				this.$router.push({ name: 'adm023' })
			} catch (error) {
				this.$showError(this.apiErrorMsg_Blue)
				console.log('deleteQnaApi :' + error)
			}
		},
		async doReply() {
			this.checkMainText = true
			if (this.isMainTextEmpty) return
			if (!this.$refs.form.validate()) return
			if (
				!(await this.$confirm(
					this.isCreate
						? '답변을 등록하시겠습니까?'
						: '답변을 수정하시겠습니까?',
					this.isCreate ? '등록하기' : '수정하기',
				))
			)
				return
			try {
				await qnaReplyApi({ seq: this.seq, ...this.param })
				this.$showInfo(
					this.isCreate ? '등록되었습니다.' : '수정되었습니다.',
				)
				this.$router.push({ name: 'adm023' })
			} catch (error) {
				this.$showInfo(this.isCreate ? '등록실패. ' : '수정실패')
				console.log(error)
			}
		},
	},
}
</script>

<style></style>
