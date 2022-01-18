<template>
	<v-app>
		<div id="popup-L">
			<div class="inner">
				<div class="head">
					<h5>컬럼명 조회</h5>
					<div class="close-btn">
						<img src="../../images/com_icon_close.svg" />
					</div>
				</div>

				<div class="content">
					<div class="search">
						<div
							style="float: left; width: 145px; line-height: 40px"
						>
							한글단어명
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
								label="%_%"
								single-line
								outlined
								hide-details="auto"
							>
								<template slot="append-outer">
									<v-btn color="primary"> 검색하기 </v-btn>
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
				</div>
				<div class="footer">
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
		}
	},
}
</script>
