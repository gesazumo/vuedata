<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>인스턴스 관리</h5>
				<div class="adm-search">
					<v-row>
						<v-col md="4">
							<div class="label_txt">인스턴스명</div>
							<v-text-field
								placeholder="인스턴스명을 입력하세요"
								single-line
								outlined
								clearable
								hide-details="auto"
							></v-text-field>
						</v-col>
						<v-col md="2">
							<v-select
								:items="items"
								label="_%"
								single-line
								outlined
								hide-details="auto"
							></v-select>
						</v-col>
						<v-col></v-col>
						<v-col md="1" align="right">
							<v-btn color="primary" dark>검색하기</v-btn>
						</v-col>
					</v-row>
				</div>
				<div class="item_box">
					<div class="tit">
						<p>총 <span>123</span>개의 검색결과가 있습니다.</p>
						<v-select
							label="10개씩 보기"
							class="list_select"
							single-line
							hide-details="auto"
						>
						</v-select>
					</div>
					<div class="btn_area">
						<v-btn color="primary" dark> 등록하기 </v-btn>
						<v-btn
							color="primary"
							dark
							outlined
							@click="dialog = true"
						>
							삭제하기
						</v-btn>
						<v-btn color="primary" dark outlined> 수정하기 </v-btn>
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
					</div>
					<div class="table_box">
						<v-data-table
							v-model="selected"
							:headers="headers"
							:items="items2"
							:items-per-page="itemsPerPage"
							:single-select="singleSelect"
							item-key="a"
							show-select
							hide-default-footer
							class="elevation-1"
						>
							<template v-slot:item="row">
								<tr>
									<td>
										{{ row.item.singleSelect }}
									</td>
									<td>
										{{ row.item.a }}
									</td>
									<td>
										{{ row.item.b }}
									</td>
									<td>
										{{ row.item.c }}
										<v-btn
											outlined
											x-small
											@click="toggleShow"
										>
											<i class="fa fa-plus"></i>
										</v-btn>
									</td>
									<td>
										{{ row.item.d }}
									</td>
									<td>
										{{ row.item.e }}
									</td>
									<td>
										{{ row.item.f }}
									</td>
								</tr>
							</template>
						</v-data-table>

						<div class="more_view" v-if="show">
							<p>인스턴스 코드</p>
							<v-data-table
								:headers="headers3"
								:items="items3"
								hide-default-footer
							>
							</v-data-table>
						</div>

						<div class="paging">
							<v-pagination
								v-model="page"
								:length="50"
								:total-visible="7"
								color="primary"
							></v-pagination>
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
			show: false,
			dialog: false,
			items: ['=', '_%', '%_', '%_%'],
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '원천',
					align: 'center',
					sortable: false,
					value: 'a',
				},
				{
					text: '식별자',
					align: 'center',
					sortable: true,
					value: 'b',
				},
				{
					text: '인스턴스명',
					align: 'center',
					sortable: true,
					value: 'c',
				},
				{
					text: '코드길이',
					align: 'center',
					sortable: true,
					value: 'd',
				},
				{
					text: '인스턴스 정의',
					align: 'center',
					sortable: true,
					value: 'e',
				},
				{
					text: '등록일자',
					align: 'center',
					sortable: true,
					value: 'f',
				},
			],
			items2: [
				{
					a: '은행메타',
					b: '100294000',
					c: '고객ID구분코드',
					d: '2',
					e: '고객ID구분코드',
					f: '2021-00-00 21:45:10',
				},
			],
			headers3: [
				{
					text: '인스턴스코드',
					align: 'center',
					sortable: false,
					value: 'code',
				},
				{
					text: '인스턴스코드 정의',
					align: 'center',
					sortable: false,
					value: 'desc',
				},
			],
			items3: [
				{ code: '1001', desc: '자유입출식' },
				{ code: '1002', desc: '예금' },
				{ code: '1003', desc: '적금' },
			],
		}
	},
	methods: {
		openSel() {
			//this.axios.post(url).then
			this.items2 = []
		},
		toggleShow() {
			this.show = !this.show
		},
	},
}
</script>
