<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>FAQ 수정</h5>
			<v-form ref="form">
				<div class="item_box">
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
									<th>
										구분 <span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											:items="$getCmCode('TAH000053')"
											placeholder="카테고리를 선택하세요"
											single-line
											outlined
											return-object
											item-text="cmnCdNm"
											item-value="cmnCd"
											v-model="param.dstic"
											hide-details="auto"
											:rules="category_rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										질문 <span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="질문을 입력하세요"
											single-line
											clearable
											outlined
											v-model="param.ques"
											:rules="questions_rule"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										답변
										<span class="asterisk">필수</span>
									</th>
									<td>
										<vue-editor
											@blur="checkMainText = true"
											v-model="param.maintext"
											outlined
											clearable
											id="abc"
										></vue-editor>
										<div
											class="v-messages__message"
											v-if="
												checkMainText && isMainTextEmpty
											"
										>
											본문입력은 필수입니다.
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="btn_area">
					<v-btn
						color="primary"
						dark
						large
						outlined
						@click="$router.go(-1)"
					>
						취소
					</v-btn>
					<v-btn color="primary" dark large @click="doUpdate">
						수정하기
					</v-btn>
				</div>
			</v-form>
		</div>
	</div>
</template>

<script>
import { updateFaqApi, getFaqDetailApi } from '@/api/modules/faqAPI'
import { VueEditor } from 'vue2-editor'
export default {
	components: {
		VueEditor,
	},
	data() {
		return {
			seq: null,
			checkMainText: false,
			isMainTextEmpty: true,
			param: {
				maintext: null,
				dstic: null,
				ques: null,
			},
			category_rules: [this.requiredValid('카테고리를 선택해 주세요.')],
			questions_rule: [this.requiredValid('질문을 입력해 주세요.')],
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
		async doUpdate() {
			this.checkMainText = true
			if (this.isMainTextEmpty) return
			if (!this.$refs.form.validate()) return
			if (!(await this.$confirm('FAQ를 수정하시겠습니까?', '수정하기')))
				return

			try {
				await updateFaqApi({ ...this.param, seq: this.seq })
				this.$showInfo('수정되었습니다.')
				this.$router.push({ name: 'adm025' })
			} catch (error) {
				this.$showInfo('수정실패. ')
				console.log(error)
			}
		},
	},
	async created() {
		const { seq } = this.$route.params
		this.seq = seq
		try {
			const { data } = await getFaqDetailApi(seq)
			this.param = {
				maintext: data.answertext,
				dstic: data.dstic,
				ques: data.ques,
			}
		} catch (err) {
			this.$showError('존재하지 않는 게시물입니다.')
			this.$router.push({ name: 'adm025' })
			console.log(err)
		}
	},
}
</script>

<style></style>
