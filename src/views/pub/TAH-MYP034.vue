<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My 결재함</li>
				</ul>
				<h3>My Dataset 업로드 결재 상세</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no"></div>
				<div class="s_body">
					<div class="table_box">
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="300" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>결재 ID</th>
									<td>KBO-C00000001</td>
								</tr>
								<tr>
									<th>프로젝트 ID</th>
									<td>KBO_PROJ_0001</td>
								</tr>
								<tr>
									<th>프로젝트명</th>
									<td>마이데이터 통합 분석 프로젝트</td>
								</tr>
								<tr>
									<th>파일 구분</th>
									<td>분석모델</td>
								</tr>
								<tr>
									<th>첨부파일</th>
									<td>file_name.pdf</td>
								</tr>
								<tr>
									<th>첨부파일</th>
									<td>
										file_name.pdf [3]
										<v-btn
											text
											style="
												min-width: 24px !important;
												max-height: 24px !important;
												padding: 0 !important;
											"
											@click="toggleShow"
										>
											<i class="fa fa-chevron-down"></i>
										</v-btn>
										<div v-if="show" class="file_list">
											<v-btn
												class="close_btn"
												@click="toggleShow"
											>
												<i class="fa fa-times"></i>
											</v-btn>
											<v-list-item-group
												v-model="settings"
												multiple
												active-class=""
											>
												<v-list-item>
													<template
														v-slot:default="{
															active,
														}"
													>
														<v-list-item-action>
															<v-checkbox
																:input-value="
																	active
																"
																hide-details="auto"
															></v-checkbox>
														</v-list-item-action>

														<v-list-item-content>
															<v-list-item-title
																>file_name_01.gif</v-list-item-title
															>
														</v-list-item-content>
													</template>
												</v-list-item>

												<v-list-item>
													<template
														v-slot:default="{
															active,
														}"
													>
														<v-list-item-action>
															<v-checkbox
																:input-value="
																	active
																"
																hide-details="auto"
															></v-checkbox>
														</v-list-item-action>

														<v-list-item-content>
															<v-list-item-title
																>file_name_02.pdf</v-list-item-title
															>
														</v-list-item-content>
													</template>
												</v-list-item>

												<v-list-item>
													<template
														v-slot:default="{
															active,
														}"
													>
														<v-list-item-action>
															<v-checkbox
																:input-value="
																	active
																"
																hide-details="auto"
															></v-checkbox>
														</v-list-item-action>

														<v-list-item-content>
															<v-list-item-title
																>file_name_03.png</v-list-item-title
															>
														</v-list-item-content>
													</template>
												</v-list-item>
											</v-list-item-group>
											<v-row
												align="center"
												style="
													margin-bottom: 0 !important;
												"
											>
												<v-btn
													color="primary"
													small
													outlined
												>
													전체 다운로드
												</v-btn>
												<v-btn color="primary" small>
													다운로드
												</v-btn>
											</v-row>
										</div>
									</td>
								</tr>
								<tr>
									<th>요청자</th>
									<td>최자영(KB국민은행, 데이터기획부)</td>
								</tr>
								<tr>
									<th>요청일시</th>
									<td>2022-00-00 24:00:00</td>
								</tr>
								<tr>
									<th>요청사유</th>
									<td>파일업로드 요청사유</td>
								</tr>
								<tr>
									<th>결재자</th>
									<td>
										강태근(KB국민은행, 데이터엔지니어링부)
									</td>
								</tr>
								<tr>
									<th>결재 현황</th>
									<td>결재중/결재완료/반려</td>
								</tr>
								<tr>
									<th>결재일</th>
									<td>2022-00-00 24:00:00</td>
								</tr>
								<tr>
									<th>반려일</th>
									<td>2022-00-00 24:00:00</td>
								</tr>
								<tr>
									<th>반려사유</th>
									<td>개인정보 포함으로 인해 승인 불가</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn color="primary" large outlined>목록으로</v-btn>
						<v-btn color="primary" large>반려하기</v-btn>
						<v-btn color="primary" large>결재하기</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			date: null,
			project: '',
			projectRules: [value => !!value || '프로젝트명을 입력해 주세요.'],
		}
	},
	methods: {
		toggleShow() {
			this.show = !this.show
		},
	},
}
</script>
