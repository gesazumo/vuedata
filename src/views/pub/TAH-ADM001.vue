<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>단어관리</h5>
				<div class="adm-search">
					<v-row>
						<v-col md="4">
							<div class="label_txt">한글단어명</div>
							<v-text-field
								placeholder="고객"
								outlined
								clearable
								hide-details="auto"
							></v-text-field>
						</v-col>
						<v-col md="2">
							<v-select
								:items="items"
								label="%_%"
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
							:headers="headers"
							:items="items2"
							:items-per-page="itemsPerPage"
							:single-select="singleSelect"
							show-select
							hide-default-footer
							class="elevation-1"
						></v-data-table>
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
					sortable: true,
				},
				{
					text: '한글단어명',
					align: 'center',
					sortable: true,
				},
				{
					text: '영문약어명',
					align: 'center',
					sortable: true,
				},
				{
					text: '영어단어명',
					align: 'center',
					sortable: true,
				},
				{
					text: '단어구분',
					align: 'center',
					sortable: true,
				},
				{
					text: '정의',
					align: 'center',
					sortable: true,
				},
				{
					text: '등록자',
					align: 'center',
					sortable: true,
				},
				{
					text: '등록일시',
					align: 'center',
					sortable: true,
				},
			],
			items2: [],
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
