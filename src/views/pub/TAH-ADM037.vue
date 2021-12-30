<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>오픈소스 라이브러리 관리</h5>
				<div class="adm-search-2">
					<v-row>
						<v-col md="4">
							<label>제목</label>
							<v-text-field
								placeholder="제목"
								v-moel="subject"
								:rules="[rules.required, rules.subject]"
								single-line
								outlined
								clearable
								hide-details="auto"
							></v-text-field>
						</v-col>
						<v-col md="4">
							<label>등록일</label>
							<date-picker
								v-model="date"
								range
								placeholder="기간 선택"
								:rules="[rules.required, rules.date]"
								hide-details="auto"
							/>
						</v-col>
					</v-row>
					<v-row>
						<v-col md="4">
							<label>구분</label>
							<v-select
								:items="items_01"
								label="전체 패키지 그룹"
								single-line
								outlined
								hide-details="auto"
							></v-select>
						</v-col>
						<v-col md="4">
							<label> Status </label>
							<v-tooltip
								right
								content-class="secondary tooltip-right"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										v-bind="attrs"
										v-on="on"
										icon
										style="background: none !important"
									>
										<v-icon>mdi-help-circle</v-icon>
									</v-btn>
								</template>
								<div>
									<p
										class="title"
										style="
											color: #fff !important;
											font-size: 16px !important;
										"
									>
										오픈소스 라이브러리 반입 현황 확인
									</p>
									<span>
										[접수완료] 오픈소스 라이브러리 반입 신청
										접수<br />
										[보안점검중] 운영자가 라이브러리 파일
										업로드 후 보안점검 진행중인 상태<br />
										[취약점 발견] 보안점검중 취약점이
										발견되어 반입이 불가한 상태<br />
										[반입완료] 보언점검 완료 후 Private
										Repository로 반입된 상태
									</span>
								</div>
							</v-tooltip>
							<div class="checkgroup">
								<v-checkbox
									label="접수완료"
									hide-details="auto"
								></v-checkbox>
								<v-checkbox
									label="점검중"
									hide-details="auto"
								></v-checkbox>
								<v-checkbox
									label="취약점 발견"
									hide-details="auto"
								></v-checkbox>
								<v-checkbox
									label="반입완료"
									hide-details="auto"
								></v-checkbox>
							</div>
						</v-col>
						<v-col md="3" align="right">
							<v-btn color="primary" dark outlined>초기화</v-btn>
							<v-btn color="primary" dark>검색하기</v-btn>
						</v-col>
					</v-row>
				</div>
				<div class="item_box">
					<div class="tit">
						<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
					</div>
					<div class="table_box">
						<v-data-table
							:headers="headers"
							:items="items_02"
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
					<v-btn
						color="primary"
						outlined
						large
						@click="dialog = true"
					>
						삭제하기
					</v-btn>
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
					<v-btn color="primary" outlined large> 수정하기 </v-btn>
					<v-btn color="primary" dark large> 등록하기 </v-btn>
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
			dialog: false,
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,

			items_01: ['전체', 'Python', 'R', 'Anaconda', '기타'],
			rules: {
				date: value =>
					!!value || '종료일은 시작일과 같거나 이후이여야 합니다.',
			},
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '구분',
					sortable: true,
					value: 'a',
				},
				{
					text: 'Status',
					sortable: true,
					value: 'b',
				},
				{
					text: '라이브러리명',
					sortable: true,
					value: 'c',
				},
				{
					text: '버전',
					sortable: true,
					value: 'd',
				},
				{
					text: 'Project ID',
					sortable: true,
					value: 'e',
				},
				{
					text: '신청자',
					sortable: true,
					value: 'f',
				},
				{
					text: '신청일',
					sortable: true,
					value: 'g',
				},
				{
					text: '관리자',
					sortable: true,
					value: 'h',
				},
				{
					text: '반입일',
					sortable: true,
					value: 'i',
				},
			],
			items_02: [
				{
					a: 'Python',
					b: '접수완료',
					c: 'Pandas',
					d: '1.3.4',
					e: 'PROJ-0001',
					f: '김영선',
					g: '2021-00-00',
					h: '최자영',
					i: '반입하기',
				},
				{
					a: 'R',
					b: '접수완료',
					c: 'AWS Wrangler',
					d: '2.12.1',
					e: 'PROJ-0002',
					f: '원종면',
					g: '2021-00-00',
					h: '최자영',
					i: '보안점검중',
				},
				{
					a: 'Anaconda',
					b: '반입완료',
					c: 'AWS Wrangler',
					d: '2.12.1',
					e: 'PROJ-0002',
					f: '원종면',
					g: '2021-00-00',
					h: '최자영',
					i: '반입불가',
				},
				{
					a: 'Anaconda',
					b: '취약점 발견',
					c: 'AWS Wrangler',
					d: '2.12.1',
					e: 'PROJ-0002',
					f: '원종면',
					g: '2021-00-00',
					h: '최자영',
					i: '2021-00-00',
				},
			],
		}
	},
}
</script>
