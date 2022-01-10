<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>권한 관리</h5>
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
											placeholder="카테고리를 선택하세요"
											outlined
											hide-details="auto"
											:items="menu1"
											v-model="menu"
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
											:items="menu2"
											v-model="menu"
											:rules="menu2Rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										권한코드 ID
										<span class="asterisk">필수</span>
									</th>
									<td>ADMIN-CMN-AUTH-001</td>
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
											v-model="menu"
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
											v-model="menu"
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
											label="Yes"
											:items="menu3"
											single-line
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
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,

			menu: '',
			menu1: ['전체', '통합관리자', '일반관리자'],
			menu2: [
				'전체',
				'공통',
				'KB금융지주',
				'KB국민은행',
				'KB증권',
				'KB손해보험',
				'KB국민카드',
				'푸르덴셜생명',
				'KB캐피탈',
				'KB생명보험',
				'KB저축은행',
			],
			menu3: ['Yes', 'No'],
			menu1Rules: [v => !!v || '카테고리를 선택해 주세요.'],
			menu2Rules: [v => !!v || '계열사를 선택해 주세요.'],
			menu3Rules: [v => !!v || '권한명을 입력해 주세요.'],
			menu4Rules: [v => !!v || '권한 설명을 선택해 주세요.'],
			menu5Rules: [v => !!v || '권한 그룹원을 입력해 주세요.'],
			headers: [
				{
					text: '회사명',
					align: 'center',
					sortable: false,
					value: 'company',
				},
				{
					text: '부서',
					align: 'center',
					sortable: false,
					value: 'team',
				},
				{
					text: '이름',
					align: 'center',
					sortable: false,
					value: 'name',
				},
				{
					text: '사번',
					align: 'center',
					sortable: false,
					value: 'companyid',
				},
				{
					text: '삭제',
					align: 'center',
					sortable: false,
					value: 'delete',
				},
			],
			items: [
				{
					company: 'KB국민은행',
					team: '경영연구소1',
					name: '김국민',
					companyid: 'H00001',
					delete: '',
				},
				{
					company: 'KB국민은행',
					team: '경영연구소2',
					name: '김스타',
					companyid: 'H00007',
					delete: '',
				},
				{
					company: 'KB국민은행',
					team: '경영연구소1',
					name: '김국민',
					companyid: 'H00001',
					delete: '',
				},
				{
					company: 'KB국민은행',
					team: '경영연구소2',
					name: '김스타',
					companyid: 'H00007',
					delete: '',
				},
			],
		}
	},
}
</script>
