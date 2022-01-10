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
												class="
													fas
													fa-exclamation-circle
												"
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
							<v-btn small outlined>모두 접기</v-btn>
							<v-btn small outlined>모두 펼치기</v-btn>
							<v-btn color="primary" small outlined>
								추가하기
							</v-btn>
						</v-row>
						<v-row>
							<v-treeview :items="items"> </v-treeview>
						</v-row>
					</div>
					<div class="menu_view">
						<v-textarea
							placeholder="본문을 입력하세요/Editor"
							outlined
						></v-textarea>
					</div>
				</div>
				<div class="btn_area center">
					<v-btn color="primary" dark outlined> 취소 </v-btn>
					<v-btn color="primary" dark> 수정하기 </v-btn>
					<v-btn color="primary" dark> 등록하기 </v-btn>
				</div>
			</div>
		</div>
	</v-app>
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
			items: [
				{
					id: 1,
					name: 'Applications :',
					children: [
						{ id: 2, name: 'Calendar : app' },
						{ id: 3, name: 'Chrome : app' },
						{ id: 4, name: 'Webstorm : app' },
					],
				},
			],
		}
	},
}
</script>
