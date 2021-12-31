<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>테이블 등록 및 수정</h5>
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
									<th>
										구분 <span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											label="마이데이터"
											:items="items_01"
											placeholder="카테고리를 선택하세요"
											single-line
											outlined
											v-model="category"
											:rules="[
												rules.required,
												rules.category_rule,
											]"
											hide-details="auto"
										></v-select>
									</td>
									<th>
										계열사구분
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											label="그룹공통"
											:items="items_02"
											placeholder="계열사를 선택하세요"
											single-line
											outlined
											v-model="group_corp"
											:rules="[
												rules.required,
												rules.group_corp_rule,
											]"
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										마이데이터 업권
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											label="공통업권"
											:items="items_03"
											placeholder="마이데이터 업권을 선택하세요"
											single-line
											outlined
											v-model="mydata_01"
											:rules="[
												rules.required,
												rules.mydata_01_rule,
											]"
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										특화데이터 구분
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											:items="items_04"
											placeholder="특화데이터 구분을 선택하세요"
											single-line
											outlined
											v-model="mydata_04"
											:rules="[
												rules.required,
												rules.mydata_04_rule,
											]"
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										Feature Store 구분
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											:items="items_04"
											placeholder="Feature Store 구분을 선택하세요"
											single-line
											outlined
											v-model="mydata_04"
											:rules="[
												rules.required,
												rules.mydata_04_rule,
											]"
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										테이블명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											label="TCTAHES01"
											placeholder="테이블명을 입력해 주세요"
											single-line
											clearable
											outlined
											v-model="mydata_04"
											:rules="[
												rules.required,
												rules.mydata_04_rule,
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
															테이블명입니다.<br />
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
									<th>
										테이블한글명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											label="마이데이터 가입자 정보"
											placeholder="테이블한글명을 입력해 주세요"
											single-line
											clearable
											outlined
											v-model="mydata_05"
											:rules="[
												rules.required,
												rules.mydata_05_rule,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										테이블 정의
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											label="마이데이터 서비스 가입자 통계 수집을 위한 테이블입니다"
											placeholder="테이블 정의를 입력해 주세요"
											single-line
											clearable
											outlined
											v-model="mydata_06"
											:rules="[
												rules.required,
												rules.mydata_06_rule,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										보관기간
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											label="999"
											placeholder="보관기간을 입력해 주세요"
											single-line
											clearable
											outlined
											v-model="mydata_07"
											:rules="[
												rules.required,
												rules.mydata_07_rule,
											]"
											hide-details="auto"
											style="width: 312px"
										>
											<template slot="append-outer">
												<div
													style="
														line-height: 40px;
														padding-left: 10px;
													"
												>
													개월
												</div>
											</template>
										</v-text-field>
									</td>
									<th>
										전송주기
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											label="일"
											:items="items_05"
											placeholder="전송주기를 선택해 주세요"
											single-line
											outlined
											v-model="mydata_05"
											:rules="[
												rules.required,
												rules.mydata_05_rule,
											]"
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										타켓파일경로
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											label="/data/{KXX, KBO}/RCV/"
											placeholder="타겟파일경로를 입력해 주세요"
											single-line
											clearable
											outlined
											v-model="file_01"
											:rules="[
												rules.required,
												rules.file_01_rule,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										타켓파일명1
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											label="KBO_KFG_D_IRP-001_001_YYYYMMDD.dat"
											placeholder="타겟파일명을 입력해 주세요"
											single-line
											clearable
											outlined
											v-model="file_02"
											:rules="[
												rules.required,
												rules.file_02_rule,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>타켓파일명2</th>
									<td colspan="3">
										<v-text-field
											label="KBO_KFG_D_IRP-001_001_YYYYMMDD.chk"
											placeholder="타겟파일명을 입력해 주세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>파티션테이블 여부</th>
									<td colspan="3">
										<v-radio-group row hide-details="auto">
											<v-radio label="No"></v-radio>
											<v-radio label="Yes"></v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>
										파티션타입내용
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="파티션 타입내용을 입력 하세요"
											single-line
											clearable
											outlined
											v-model="type_desc"
											:rules="[
												rules.required,
												rules.type_desc_rule,
											]"
											hide-details="auto"
										></v-text-field>
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
								답변을 등록하시겠습니까?
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
			items_01: [],
			items_02: [],
			items_03: [],
			rules: {
				category_rule: value => !!value || '카테고리를 선택해 주세요.',
				group_corp_rule: value => !!value || '계열사를 선택해 주세요.',
			},
		}
	},
}
</script>
