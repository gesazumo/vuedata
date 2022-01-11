<template>
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
												Minor 수정은 1.1, 1.2 ... 1.9
												버전으로 업데이트,
												<br />
												Major tnwjddms 2.0, 3.0 버전으로
												업데이트.
											</span>
										</div>
									</v-tooltip>
								</th>
								<td>
									<v-select
										placeholder="카테고리를 선택하세요"
										outlined
										hide-details="auto"
										:items="menu1"
										v-model="menu"
										:rules="menu1Rules"
										style="width: 300px"
									></v-select>
								</td>
							</tr>
							<tr>
								<th>
									버전
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-text-field
										placeholder="버전을 입력하세요"
										single-line
										outlined
										hide-details="auto"
										v-model="menu"
										:rules="menu2Rules"
										style="
											float: left;
											width: 300px !important;
										"
									></v-text-field>
									<div class="ver_txt">
										<i
											class="fas fa-exclamation-circle"
										></i>
										현재 등록된 버전이 없습니다.
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div style="margin-top: 20px">
				<div class="menu_lst">
					<v-row>
						<v-btn small outlined @click="closeAllTreeview()"
							>모두 접기</v-btn
						>
						<v-btn small outlined @click="openAllTreeview()"
							>모두 펼치기</v-btn
						>
						<v-btn color="primary" small outlined> 추가하기 </v-btn>
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
					{{ active[0] }}
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
export default {
	data() {
		return {
			item: '',
			menu: '',
			menu1: ['분석가 포털 사용자 매뉴얼', '분석환경 사용자 매뉴얼'],
			menu1Rules: [v => !!v || '카테고리를 선택해 주세요.'],
			menu2Rules: [v => !!v || '카테고리를 먼저 선택해 주세요.'],
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

<style>
.v-treeview-node__content {
	min-height: 36px;
	border: 1px solid #555555;
	padding-left: 15px;
}
.v-application .primary--text {
	color: #069cf3 !important;
	caret-color: #069cf3 !important;
}
</style>
