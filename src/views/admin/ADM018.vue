<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>권한 관리</h5>
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
										구분
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											:items="$getCmCode('TAH000081')"
											item-text="cmnCdNm"
											item-value="cmnCd"
											placeholder="카테고리를 선택하세요"
											outlined
											hide-details="auto"
											v-model="param.athType"
											:rules="menu1Rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										계열사
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											placeholder="계열사를 선택하세요"
											outlined
											hide-details="auto"
											:items="$getCmCode('TAH000001')"
											item-text="cmnCdNm"
											item-value="cmnCd"
											v-model="param.groupCoCd"
											:rules="menu2Rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										권한코드 ID
										<span class="asterisk">필수</span>
									</th>
									<td>
										{{
											param.athId
												? param.athId
												: '계열사를 선택하세요'
										}}
									</td>
								</tr>
								<tr>
									<th>
										권한명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="권한명을 입력하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="param.athNm"
											:rules="menu3Rules"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										권한 설명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="권한 설명을 입력하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="param.athDesc"
											:rules="menu4Rules"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										사용 여부
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											placeholder="Yes"
											:items="$getCmCode('TAH000082')"
											item-text="cmnCdNm"
											item-value="cmnCd"
											single-line
											v-model="param.useYn"
											outlined
											hide-details="auto"
											style="width: 125px"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										권한 그룹원
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-col
											md="5"
											style="
												margin-left: 0 !important;
												margin-bottom: 8px !important;
											"
										>
											<v-text-field
												placeholder="이름을 입력하세요"
												outlined
												clearable
												append-outer-icon="fa fa-search"
												v-model="menu"
												:rules="menu5Rules"
												hide-details="auto"
											>
												<template v-slot:append-outer>
													<v-btn
														color="secondary"
														dark
														style="
															margin-left: 4px !important;
															width: 40px !important;
															min-width: 40px !important;
															max-width: 40px !important;
														"
													>
														<i
															class="fa fa-search"
														></i>
													</v-btn>
												</template>
											</v-text-field>
										</v-col>
										<v-data-table
											:headers="headers"
											:items="items"
											:height="180"
											fixed-header
											disable-pagination
											disable-sort
											hide-default-footer
										>
											<template v-slot:item="row">
												<tr>
													<td>
														{{ row.item.company }}
													</td>
													<td>
														{{ row.item.team }}
													</td>
													<td>
														{{ row.item.name }}
													</td>
													<td>
														{{ row.item.companyid }}
													</td>
													<td>
														<v-btn
															color="primary"
															dark
															x-small
															text
															@click="
																onButtonClick(
																	row.item,
																)
															"
														>
															<i
																class="
																	fa fa-times
																"
															></i>
														</v-btn>
													</td>
												</tr>
											</template>
										</v-data-table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</v-form>
			<div class="btn_area center">
				<v-btn color="primary" dark outlined> 취소 </v-btn>
				<v-btn color="primary" dark> 등록하기 </v-btn>
			</div>
		</div>
	</div>
</template>
<script>
import { getAuthIdApi } from '@/api/modules/authAPI'
export default {
	data() {
		return {
			menu1Rules: [v => !!v || '카테고리를 선택해 주세요.'],
			menu2Rules: [v => !!v || '계열사를 선택해 주세요.'],
			menu3Rules: [v => !!v || '권한명을 입력해 주세요.'],
			menu4Rules: [v => !!v || '권한 설명을 선택해 주세요.'],
			menu5Rules: [v => !!v || '권한 그룹원을 입력해 주세요.'],
			param: {
				athDesc: null,
				athId: null,
				athNm: null,
				athType: null,
				groupCoCd: null,
				sysEmpid: null,
				useYn: null,
				userList: [],
			},
		}
	},
	methods: {
		async getId(groupCoCd) {
			const { data } = await getAuthIdApi(groupCoCd)
			this.param.athId = data.athId
		},
	},
	watch: {
		'param.groupCoCd'(value) {
			if (value) this.getId(value)
		},
	},
}
</script>
