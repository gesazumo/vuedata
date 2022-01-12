<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>자료실 관리</h5>
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
										카테고리
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											placeholder="카테고리를 선택하세요"
											outlined
											hide-details="auto"
											style="width: 385px"
										></v-select>
										<!-- 수정화면에서 text-field로 변경
										<v-text-field
											label="분석가 포털 사용자 매뉴얼"
											outlined
											hide-details="auto"
											style="width: 385px"
										>
										</v-text-field>
										-->
									</td>
								</tr>
								<tr>
									<th>
										버전
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
												>
													매뉴얼 버전 관리 가이드를
													확인하세요.
												</p>
												<span>
													최초 등록시 1.0 버전으로
													등록하며, <br />
													Minor 수정은 1.1, 1.2 ...
													1.9 버전으로 업데이트,
													<br />
													Major tnwjddms 2.0, 3.0
													버전으로 업데이트.
												</span>
											</div>
										</v-tooltip>
									</th>
									<td>
										<v-text-field
											placeholder="버전을 입력하세요"
											single-line
											outlined
											hide-details="auto"
											style="
												float: left;
												width: 300px !important;
											"
										></v-text-field>
										<v-btn
											color="primary"
											small
											outlined
											style="
												float: left;
												height: 40px !important;
												margin: 0 5px;
											"
											@click="dialog = true"
										>
											버전 업데이트 하기
										</v-btn>
										<v-dialog
											v-model="dialog"
											max-width="280"
										>
											<v-card align="center">
												<v-card-title
													class="text-subtitle-1"
												>
													매뉴얼 버전을<br />
													업데이트 하시겠습니까?
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
														업데이트하기
													</v-btn>
												</v-card-actions>
											</v-card>
										</v-dialog>
										<div class="ver_txt">
											<i
												class="
													fas
													fa-exclamation-circle
												"
											></i>
											현재 등록된 버전이 없습니다.
											<!--현재 등록된 최종 버전은 1.3.000 입니다.-->
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div
					style="
						position: relative;
						display: inline-block;
						width: 100%;
						height: 100%;
						min-height: 100%;
						margin-top: 20px;
					"
				>
					<div class="menu_lst">
						<v-row>
							<v-btn small outlined @click="closeAllTreeview()"
								>모두 접기</v-btn
							>
							<v-btn small outlined @click="openAllTreeview()"
								>모두 펼치기</v-btn
							>
							<v-btn color="primary" small outlined>
								추가하기
							</v-btn>
						</v-row>
						<v-treeview
							ref="treeview"
							:active.sync="active"
							item-key="id"
							item-text="name"
							hoverable
							activatable
							:items="listItems"
						></v-treeview>
					</div>
					<div class="menu_view">
						<div>
							<div class="table_box">
								<p class="pt-2 pb-4 font-weight-bold">
									기본 정보
									<v-btn
										color="primary"
										dark
										small
										outlined
										style="float: right"
									>
										삭제하기
									</v-btn>
									<v-btn
										color="primary"
										dark
										small
										outlined
										style="float: right"
									>
										수정하기
									</v-btn>
								</p>

								{{ active[0] }}
								<table class="tb_write">
									<caption>
										table caption
									</caption>
									<colgroup>
										<col width="160" />
										<col width="" />
									</colgroup>
									<tbody>
										<tr>
											<th>
												목차 Depth
												<span class="asterisk"
													>필수</span
												>
											</th>
											<td>
												<v-select
													placeholder="목차 Depth를 선택하세요"
													single-line
													outlined
													hide-details="auto"
												></v-select>
											</td>
										</tr>
										<tr>
											<th>
												상위 목차
												<span class="asterisk"
													>필수</span
												>
											</th>
											<td>
												<v-row>
													<v-select
														placeholder="1 Depth 메뉴"
														single-line
														outlined
														hide-details="auto"
														style="
															width: 120px;
															margin-right: 8px;
														"
													></v-select>
													<v-select
														placeholder="2 Depth 메뉴"
														single-line
														outlined
														hide-details="auto"
														style="width: 120px"
													></v-select>
												</v-row>
											</td>
										</tr>
										<tr>
											<th>
												메뉴 순서
												<span class="asterisk"
													>필수</span
												>
											</th>
											<td>
												<v-select
													placeholder="메뉴 순서를 선택하세요"
													single-line
													outlined
													hide-details="auto"
													style="width: 225px"
												></v-select>
											</td>
										</tr>
										<tr>
											<th>
												목차 ID
												<span class="asterisk"
													>필수</span
												>
											</th>
											<td>
												<v-text-field
													placeholder="목차 ID를 입력하세요"
													single-line
													outlined
													hide-details="auto"
												></v-text-field>
											</td>
										</tr>
										<tr>
											<th>
												제목
												<span class="asterisk"
													>필수</span
												>
											</th>
											<td>
												<v-text-field
													placeholder="제목을 입력하세요"
													single-line
													outlined
													hide-details="auto"
												></v-text-field>
											</td>
										</tr>
										<tr>
											<td colspan="2">에디터 영역</td>
										</tr>
									</tbody>
								</table>

								<!--수정화면-->
								<table class="tb_write">
									<caption>
										table caption
									</caption>
									<colgroup>
										<col width="160" />
										<col width="" />
									</colgroup>
									<tbody>
										<!--
											목차 Depth하고 상위목차 ID 설계서 확인 부탁드려요 
											노출되는 정보 다름
										-->
										<tr>
											<th>목차 Depth</th>
											<td>1</td>
										</tr>
										<tr>
											<th>상위 목차 ID</th>
											<td>N/A</td>
										</tr>
										<tr>
											<th>목차 순서</th>
											<td>4</td>
										</tr>
										<tr>
											<th>목차 ID</th>
											<td>1.1.4</td>
										</tr>
										<tr>
											<th>제목</th>
											<td></td>
										</tr>
										<tr>
											<td colspan="2">
												<div class="edit_text">
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다. <br />
													내용이 노출됩니다.
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="btn_area center pt-8">
								<v-btn color="primary" dark outlined>
									목록으로
								</v-btn>
								<v-btn color="primary" dark> 등록하기 </v-btn>
							</div>
						</div>
						<div class="noti_meg">
							<i class="fas fa-exclamation-circle"></i>
							<div class="noti_txt">
								<p>
									선택된 항목이 없습니다.<br />
									항목을 추가하거나 선택해 주세요.
								</p>
							</div>
						</div>
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
			dialog: false,
			switch1: true,

			content: '',
			active: [],
			listItems: [
				{
					id: '1',
					name: '1. Documents',
					children: [
						{
							id: '1.1',
							name: '1.1 vuetify :',
							children: [
								{
									id: '1.1.1',
									name: '1.1.1 src :',
								},
								{ id: '1.1.2', name: '1.1.2 index : ts' },
								{ id: '1.1.3', name: '1.1.3 bootstrap : ts' },
							],
						},
						{
							id: '1.2',
							name: '1.2 material2 :',
							children: [
								{
									id: '1.2.1',
									name: '1.2.1 src :',
								},
							],
						},
					],
				},
			],
		}
	},
	methods: {
		closeAllTreeview() {
			this.$refs.treeview.updateAll(false)
		},
		openAllTreeview() {
			this.$refs.treeview.updateAll(true)
		},
	},
}
</script>
