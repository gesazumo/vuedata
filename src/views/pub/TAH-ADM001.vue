<template>
	<div class="adm_wrap">
		<div id="lnb"></div>
		<div class="adm_contents">
			<div class="inner">
				<h5>단어관리</h5>
				<div class="adm-search">
					<ul>
						<li>
							<label>한글단어명</label>
							<v-text-field
								placeholder="은행"
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
				<div class="btn_area">
					<button class="delete large">삭제하기</button>
					<button class="edit large">수정하기</button>
					<button class="regit large">등록하기</button>
				</div>
			</div>
		</div>
	</div>
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
