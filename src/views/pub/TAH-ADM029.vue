<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>자료실 조회</h5>
				<div class="adm-search">
					<v-row>
						<v-col md="4">
							<div class="label_txt">제목</div>
							<v-text-field
								single-line
								outlined
								clearable
								hide-details="auto"
							></v-text-field>
						</v-col>
						<v-col md="4">
							<div class="label_txt">등록일</div>
							<div>
								<date-picker
									v-model="date"
									range
									placeholder="기간 선택"
								/>
							</div>
						</v-col>
					</v-row>
					<v-row>
						<v-col md="4">
							<div class="label_txt">구분</div>
							<v-select
								placeholder="전체 카테고리"
								outlined
								hide-details="auto"
								:items="item1"
								v-model="item"
								:rules="item1Rules"
							></v-select>
						</v-col>
						<v-col></v-col>
						<v-col md="2" align="right">
							<v-btn color="primary" dark outlined>초기화</v-btn>
							<v-btn color="primary" dark>검색하기</v-btn>
						</v-col>
					</v-row>
				</div>
				<div class="item_box">
					<div class="board">
						<div class="tit">
							<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
						</div>
						<div class="btn_area">
							<v-btn color="primary" dark> 등록하기 </v-btn>
							<v-btn color="primary" dark outlined>
								삭제하기
							</v-btn>
							<v-btn color="primary" dark outlined>
								수정하기
							</v-btn>
						</div>
						<div class="table_box">
							<v-data-table
								:headers="headers"
								:items="items"
								:items-per-page="itemsPerPage"
								:single-select="singleSelect"
								show-select
								hide-default-footer
								class="elevation-1"
							></v-data-table>
						</div>
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
	</v-app>
</template>
<script>
import DatePicker from 'vue2-datepicker'

export default {
	components: {
		DatePicker,
	},
	data() {
		return {
			date: '',
			item: '',
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,

			singleSelect: false,
			selected: [],
			item1: [
				'전체',
				'분석가 포털 사용자 매뉴얼',
				'분석환경 사용자 매뉴얼',
			],

			item1Rules: [v => !!v || '카테고리를 선택해 주세요.'],
			headers: [
				{
					text: '카테고리',
					sortable: true,
					value: '1',
				},
				{
					text: '버전',
					sortable: true,
					value: '2',
				},
				{
					text: '등록자',
					sortable: true,
					value: '3',
				},
				{
					text: '등록일',
					sortable: true,
					value: '4',
				},
			],
			items: [
				{
					1: '분석가 포털 사용자 매뉴얼',
					2: '2.1',
					3: '최자영',
					4: '2022-00-00',
				},
				{
					1: '분석가 포털 사용자 매뉴얼',
					2: '2.1',
					3: '최자영',
					4: '2022-00-00',
				},
				{
					1: '분석환경 사용자 매뉴얼',
					2: '1.1',
					3: '최자영',
					4: '2022-00-00',
				},
				{
					1: '분석가 포털 사용자 매뉴얼',
					2: '2.1',
					3: '최자영',
					4: '2022-00-00',
				},
				{
					1: '분석가 포털 사용자 매뉴얼',
					2: '2.1',
					3: '최자영',
					4: '2022-00-00',
				},
			],
		}
	},
}
</script>
