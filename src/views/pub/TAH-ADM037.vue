<template>
	<div class="adm_wrap">
		<div id="lnb"></div>
		<div class="adm_contents">
			<div class="inner">
				<h5>라이브러리 신청 확인(반입현황)</h5>
				<div class="adm-search">
					<ul>
						<li>
							<label>패키지매니저</label>
							<v-text-field
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li>
							<label>반입상태</label>
							<date-picker
								v-model="date"
								range
								placeholder="날짜선택"
							/>
						</li>
						<li>
							<label>신청자</label>
							<v-text-field
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li></li>
					</ul>

					<ul>
						<li>
							<label>신청일</label>
							<date-picker
								v-model="date"
								range
								placeholder="날짜선택"
							/>
						</li>
						<li></li>
						<li></li>
						<li>
							<v-btn color="primary">검색하기</v-btn>
						</li>
					</ul>
				</div>
				<div class="item_box">
					<div class="tit">
						<p>총 <span>123</span>개의 검색결과가 있습니다.</p>
					</div>
					<div class="btn">
						<v-btn class="box">엑셀 다운로드</v-btn>
					</div>
					<div class="table_box">
						<v-data-table
							:headers="headers"
							:items="items1"
							:items-per-page="itemsPerPage"
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
import DatePicker from 'vue2-datepicker'

export default {
	components: {
		DatePicker,
	},
	data() {
		return {
			date: null,
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '순번',
					align: 'center',
					sortable: false,
					value: 'no',
				},
				{ text: '패키지매니저', align: 'center', value: 'aa' },
				{ text: '제공패키지', align: 'center', value: 'bb' },
				{ text: '패키지ID', align: 'center', value: 'cc' },
				{
					text: '반입파일명/패키지그룹ID',
					align: 'center',
					value: 'dd',
				},
				{ text: '버전', align: 'center', value: 'ee' },
				{ text: '반입상태', align: 'center', value: 'ff' },
				{ text: '신청자', align: 'center', value: 'gg' },
				{ text: '신청일자', align: 'center', value: 'hh' },
				{ text: '반입일자', align: 'center', value: 'ii' },
			],
			items1: [
				{
					no: '5',
					aa: 'MAVEN',
					bb: 'Com.sun.,,,',
					cc: '',
					dd: '',
					ee: '',
					ff: '',
					gg: '',
					hh: '',
					ii: '',
				},
				{
					no: '4',
					aa: 'MAVEN',
					bb: 'Com.sun.,,,',
					cc: '',
					dd: '',
					ee: '',
					ff: '',
					gg: '',
					hh: '',
					ii: '',
				},
				{
					no: '3',
					aa: 'MAVEN',
					bb: 'Com.sun.,,,',
					cc: '',
					dd: '',
					ee: '',
					ff: '',
					gg: '',
					hh: '',
					ii: '',
				},
				{
					no: '2',
					aa: 'MAVEN',
					bb: 'Com.sun.,,,',
					cc: '',
					dd: '',
					ee: '',
					ff: '',
					gg: '',
					hh: '',
					ii: '',
				},
				{
					no: '1',
					aa: 'MAVEN',
					bb: 'Com.sun.,,,',
					cc: '',
					dd: '',
					ee: '',
					ff: '',
					gg: '',
					hh: '',
					ii: '',
				},
			],
		}
	},
}
</script>
