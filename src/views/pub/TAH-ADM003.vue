<template>
	<v-app>
		<div class="adm_wrap">
			<div id="lnb"></div>
			<div class="adm_contents">
				<div class="inner">
					<h5>인스턴스 관리</h5>
					<div class="adm-search">
						<ul>
							<li>
								<label>인스턴스명</label>
								<v-text-field
									placeholder="계좌번호"
									single-line
									outlined
									clearable
								></v-text-field>
							</li>
							<li class="mg_L0">
								<label></label>
								<v-select
									:items="items"
									label="%_%"
									ref="name"
									v-model="name"
									:rules="[() => !!name || '선택해 주세요']"
									:error-messages="errorMessages"
									single-line
									outlined
								></v-select>
							</li>
							<li>
								<button class="search">검색하기</button>
							</li>
						</ul>
					</div>
					<div class="item_box">
						<div class="tit">
							<p>총 <span>123</span>개의 검색결과가 있습니다.</p>
						</div>
						<div class="table_box">
							<v-data-table
								:headers="headers"
								:items="items2"
								:items-per-page="itemsPerPage"
								:single-select="singleSelect"
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
											<v-btn text x-small>
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

							<div class="more_view">
								<p>인스턴스 코드</p>
								<v-data-table
									:headers="headers3"
									:items="items3"
									:items-per-page="itemsPerPage"
									hide-default-footer
									class="elevation-1"
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
					<div class="btn_area">
						<button class="delete large">삭제하기</button>
						<button class="edit large">수정하기</button>
						<button class="regit large">등록하기</button>
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
	},
}
</script>
