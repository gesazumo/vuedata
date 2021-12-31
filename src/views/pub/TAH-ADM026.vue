<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>FAQ 등록 및 수정</h5>
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
											:items="items_01"
											placeholder="카테고리를 선택하세요"
											single-line
											outlined
											v-model="category"
											:rules="[
												rules.required,
												rules.category_rules,
											]"
											hide-details="auto"
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
											v-model="questions"
											:rules="[
												rules.required,
												rules.questions_rule,
											]"
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
										<v-textarea
											placeholder="답변을 입력하세요/Editor"
											clearable
											outlined
											v-model="reply"
											:rules="[
												rules.required,
												rules.reply_rule,
											]"
											hide-details="auto"
										></v-textarea>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="btn_area">
					<v-btn color="primary" dark large outlined> 취소 </v-btn>
					<v-btn color="primary" dark large> 수정하기 </v-btn>
					<v-btn color="primary" dark large @click="dialog = true">
						등록하기
					</v-btn>
					<v-dialog v-model="dialog" max-width="350">
						<v-card align="center">
							<v-card-title
								class="text-subtitle-1"
								align="text-center"
							>
								FAQ를 등록하시겠습니까?
							</v-card-title>
							<v-card-text></v-card-text>

							<v-card-actions>
								<v-spacer></v-spacer>

								<v-btn
									color="primary"
									dark
									outlined
									@click="dialog = false"
								>
									취소
								</v-btn>

								<v-btn
									color="primary"
									dark
									@click="dialog = false"
								>
									등록하기
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
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
			items_01: [
				'전체',
				'포털 이용',
				'데이터 권한 신청',
				'분석환경 활용',
				'기타',
			],
			rules: {
				category_rules: value => !!value || '카테고리를 선택해 주세요.',
				questions_rule: value => !!value || '질문을 입력해 주세요.',
				reply_rule: value => !!value || '답변을 입력해 주세요.',
			},
		}
	},
}
</script>
