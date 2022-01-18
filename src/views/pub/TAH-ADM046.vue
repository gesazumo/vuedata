<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>마이데이터, 특화데이터 컨텐츠 관리</h5>
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
											placeholder="카테고리를 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
									<th>
										상세 구분
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											placeholder="상세구분을 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										제목
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="제목을 입력하세요"
											single-line
											outlined
											clearable
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										설명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-textarea
											placeholder="설명을 입력하세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										>
										</v-textarea>
									</td>
								</tr>
								<tr>
									<th>
										썸네일 이미지
										<span class="asterisk">필수</span>
										<v-tooltip
											right
											content-class="secondary tooltip-right"
										>
											<template
												v-slot:activator="{ on, attrs }"
											>
												<v-btn
													v-bind="attrs"
													v-on="on"
													icon
													style="
														background: none !important;
													"
												>
													<i
														class="
															fas
															fa-question-circle
														"
													></i>
												</v-btn>
											</template>
											<div>
												<p
													class="title"
													style="
														color: #fff !important;
														font-size: 16px !important;
													"
												></p>
												<span>
													썸네일 이미지 등록을 위한
													주의사항을 확인하세요.
												</span>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										파일첨부 component
										<!--파일첨부 component는 태우 대리님께-->
									</td>
								</tr>
								<tr>
									<th>
										배너 이미지
										<span class="asterisk">필수</span>
										<v-tooltip
											right
											content-class="secondary tooltip-right"
										>
											<template
												v-slot:activator="{ on, attrs }"
											>
												<v-btn
													v-bind="attrs"
													v-on="on"
													icon
													style="
														background: none !important;
													"
												>
													<i
														class="
															fas
															fa-question-circle
														"
													></i>
												</v-btn>
											</template>
											<div>
												<p
													class="title"
													style="
														color: #fff !important;
														font-size: 16px !important;
													"
												></p>
												<span>
													배너 이미지 등록을 위한
													주의사항을 확인하세요.
												</span>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										파일첨부 component
										<!--파일첨부 component는 태우 대리님께-->
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="btn_area" align="center">
					<v-btn color="primary" large outlined> 취소 </v-btn>
					<v-btn color="primary" large> 등록하기 </v-btn>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {}
	},
}
</script>
