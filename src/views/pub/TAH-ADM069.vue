<template>
	<v-app>
		<div class="open-popup">
			<div class="open-inner">
				<div class="open-head">
					<h5>인스턴스명 조회</h5>
					<div class="close-btn">
						<img src="../../images/com_icon_close.svg" />
					</div>
				</div>

				<div class="open-body">
					<div class="open-body-search">
						<div
							style="float: left; width: 145px; line-height: 40px"
						>
							인스턴스명
						</div>
						<div style="float: left">
							<v-text-field
								placeholder="고객"
								outlined
								clearable
								hide-details="auto"
							></v-text-field>
						</div>
						<div style="float: left; margin-left: 5px">
							<v-select
								:items="items"
								label="%_%"
								single-line
								outlined
								hide-details="auto"
							>
								<template slot="append-outer">
									<v-btn color="primary" dark>
										검색하기
									</v-btn>
								</template>
							</v-select>
						</div>
					</div>
					<div class="item_box">
						<div class="tit">
							<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
						</div>

						<div class="table_box">
							<v-data-table
								:headers="headers"
								:items="items"
								:items-per-page="itemsPerPage"
								:single-select="singleSelect"
								show-select
								:height="300"
								fixed-header
								hide-default-footer
								class="elevation-1"
							>
							</v-data-table>
							<div class="paging">
								<v-pagination
									v-model="page"
									:length="20"
									:total-visible="7"
									color="primary"
								></v-pagination>
							</div>
						</div>
					</div>
					<div class="btnArea">
						<v-btn color="primary" dark large outlined>
							취소
						</v-btn>
						<v-btn color="primary" dark large>선택완료</v-btn>
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
			name: '',
			nameRules: '',
			rules: {
				nameRules: v => !!v || '이름을 입력해 주세요.',
			},
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '원천',
					align: 'center',
					sortable: true,
					value: 'screnRegiYn',
				},
				{
					text: '한글단어명',
					align: 'center',
					sortable: true,
					value: 'hanglWordName',
				},
				{
					text: '영문약어명',
					align: 'center',
					sortable: true,
					value: 'engAbrvnName',
				},
				{
					text: '영어단어명',
					align: 'center',
					sortable: true,
					value: 'engWordName',
				},
				{
					text: '단어구분',
					align: 'center',
					sortable: true,
					value: 'smwrCmwrDstic',
				},
				{
					text: '정의',
					align: 'center',
					sortable: true,
					value: 'hanglWordDefin',
				},
				{
					text: '등록자',
					align: 'center',
					sortable: true,
					value: 'sysLastEmpid',
				},
				{
					text: '등록일시',
					align: 'center',
					sortable: true,
					value: 'sysLastPrcssYms',
				},
			],
			items: [],
		}
	},
}
</script>
