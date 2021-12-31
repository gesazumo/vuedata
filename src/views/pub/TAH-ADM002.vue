<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>단어 등록 및 수정</h5>
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
										한글단어명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="한글단어명을 입력해 주세요"
											single-line
											clearable
											outlined
											v-model="word_01"
											:rules="[
												rules.required,
												rules.word_01,
											]"
											hide-details="auto"
										>
											<template slot="append-outer">
												<v-btn
													color="primary"
													dark
													@click="dialog_chk = true"
												>
													중복체크
												</v-btn>
												<v-dialog
													v-model="dialog_chk"
													max-width="350"
												>
													<v-card align="center">
														<v-card-title
															class="
																text-subtitle-1
															"
															align="text-center"
														>
															등록가능한
															인스턴스명입니다.<br />
															등록하시겠습니까?
														</v-card-title>
														<v-card-text></v-card-text>

														<v-card-actions>
															<v-spacer></v-spacer>
															<v-btn
																color="primary"
																dark
																@click="
																	dialog_chk = false
																"
															>
																확인
															</v-btn>
														</v-card-actions>
													</v-card>
												</v-dialog>
											</template>
										</v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										영문단어명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="영문단어명을 입력해 주세요"
											single-line
											clearable
											outlined
											v-model="word_02"
											:rules="[
												rules.required,
												rules.word_02,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										영문약어명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="영문약어명을 입력해 주세요"
											single-line
											clearable
											outlined
											v-model="word_03"
											:rules="[
												rules.required,
												rules.word_03,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										단어구분
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-radio-group row hide-details="auto">
											<v-radio label="단일어"></v-radio>
											<v-radio label="복합어"></v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>
										정의 <span class="asterisk">필수</span>
									</th>
									<td>
										<v-textarea
											placeholder="단어정의를 입력하세요/Editor"
											clearable
											outlined
											v-model="word_04"
											:rules="[
												rules.required,
												rules.word_04,
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
					<v-btn
						color="primary"
						outlined
						large
						@click="dialog = true"
					>
						삭제하기
					</v-btn>
					<v-dialog v-model="dialog" max-width="350">
						<v-card align="center">
							<v-card-title class="text-subtitle-1">
								선택 항목을 삭제하시겠습니까?
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
									삭제하기
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
					<v-btn color="primary" outlined large> 수정하기 </v-btn>
					<v-btn color="primary" dark large> 등록하기 </v-btn>
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
			rules: {
				word_01: value => !!value || '한글단어명을 입력해 주세요.',
				word_02: value =>
					!!value || '영문단어명을 입력해 주세요. (대소문자 구분)',
				word_03: value =>
					!!value ||
					'영문약어명을 입력해 주세요. (대소문자 구분, 공백불가)',
				word_04: value => !!value || '단어정의를 입력해 주세요.',
			},
		}
	},
}
</script>
