<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>코드 관리</h5>
				<div class="item_box">
					<div class="table_box">
						<p class="pb-4 font-weight-bold">기본 정보</p>
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
										구분
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											placeholder="카테고리를 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										그룹코드 ID
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="그룹코드 ID를 입력하세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										>
											<template slot="append-outer">
												<v-btn
													color="primary"
													dark
													@click="dialog = true"
												>
													중복체크
												</v-btn>
												<v-dialog
													v-model="dialog"
													max-width="300"
												>
													<v-card align="center">
														<v-card-title
															class="
																text-subtitle-1
															"
															align="text-center"
														>
															등록가능한
															그룹코드ID입니다.<br />
															등록하시겠습니까?
														</v-card-title>
														<v-card-text></v-card-text>

														<v-card-actions
															style="
																display: block !important;
															"
														>
															<v-btn
																color="secondary"
																@click="
																	dialog = false
																"
															>
																취소
															</v-btn>
															<v-btn
																color="primary"
																@click="
																	dialog = false
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
										그룹코드명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="그룹코드명을 입력하세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										설명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="설명을 입력하세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
							</tbody>
						</table>
						<p class="pt-10 pb-2 font-weight-bold">코드 정보</p>
						<v-row>
							<v-btn color="primary"> 행추가하기 </v-btn>
							<v-btn color="primary" outlined> 삭제하기 </v-btn>
						</v-row>
						<v-data-table
							:headers="headers"
							:items-per-page="itemsPerPage"
							:single-select="singleSelect"
							show-select
							hide-default-footer
							class="elevation-1"
						>
							<template>요기 행추가 table 넣어주세요</template>
						</v-data-table>
					</div>
				</div>
				<div class="btn_area center pt-8">
					<v-btn color="primary" large outlined> 취소 </v-btn>
					<v-btn color="primary" large> 수정하기 </v-btn>
					<v-btn color="primary" large> 삭제하기 </v-btn>
					<v-btn color="primary" large> 등록하기 </v-btn>
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
			singleSelect: false,
			headers: [
				{
					text: '코드 ID',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '코드명',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '사용여부',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '디스플레이 순서',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '삭제',
					align: 'center',
					sortable: false,
					value: '',
				},
			],
		}
	},
}
</script>
