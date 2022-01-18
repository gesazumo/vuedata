<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>
					데이터 처리 현황
					<p class="float-right">
						<i class="mdi mdi-calendar-text"></i>
						기준일 : 2022-00-00
					</p>
				</h5>

				<div class="adm-chart">
					<div class="chart_wrap">
						<div class="chart_01">
							<p class="pt-2 pb-4 font-weight-bold">
								최근 일주일간 데이터 처리 현황
							</p>
							<div class="chart">
								<div class="chart_view">
									<div
										style="
											width: 250px;
											height: 250px;
											background: #c0c0c0;
										"
									>
										차트 사이즈 250x250
									</div>
								</div>
								<div class="chart_info">
									<p>
										총 실행건수
										<span class="tot">00,000명</span>
									</p>
									<ul>
										<li>
											<span
												class="chart-color green"
											></span>
											성공
											<span class="tot"
												>0,000건 (00.0%)</span
											>
										</li>
										<li>
											<span
												class="chart-color red"
											></span>
											실패
											<span class="tot"
												>000건 (00.0%)</span
											>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="chart_02">
							<div class="chart mt-12">
								<div class="chart_view">
									<div
										style="
											width: 524px;
											height: 250px;
											background: #c0c0c0;
										"
									>
										차트 사이즈 524x250
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="adm-search mt-4">
					<v-row>
						<v-col md="4">
							<div class="label_txt">
								구분
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
											<i
												class="fas fa-question-circle"
											></i>
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
											데이터 처리 현황 상태 구분 정의를
											확인하세요.
										</p>
										<span>
											[성공] 데이터 적재 완료<br />
											[실패] 데이터 적재 실패<br />
											[대기중] 개인정보 탐지건에 대해
											관리자 승인대기
										</span>
									</div>
								</v-tooltip>
							</div>
							<v-select
								placeholder="전체"
								single-line
								outlined
								hide-details="auto"
							></v-select>
						</v-col>
						<v-col md="4">
							<div class="label_txt">처리일</div>
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
							<div class="label_txt">계열사</div>
							<v-select
								placeholder="전체"
								single-line
								outlined
								hide-details="auto"
							></v-select>
						</v-col>
						<v-col></v-col>
						<v-col md="2" align="right">
							<v-btn color="primary" outlined>초기화</v-btn>
							<v-btn color="primary">검색하기</v-btn>
						</v-col>
					</v-row>
				</div>

				<div class="item_box">
					<div class="board">
						<div class="tit">
							<p class="pb-4 font-weight-bold">
								데이터 처리 현황
							</p>
							<v-select
								label="10개씩 보기"
								class="list_select"
								single-line
								hide-details="auto"
							>
							</v-select>
						</div>
					</div>

					<div class="table_box">
						<v-data-table
							:headers="headers"
							:items-per-page="itemsPerPage"
							hide-default-footer
							class="elevation-1"
						>
							<template v-slot:body>
								<v-btn color="green" x-small> 성공 </v-btn>
								<v-btn color="blue-grey darken-1" x-small>
									승인대기
								</v-btn>
								<v-btn color="red" x-small>
									실패
									<i class="fa fa-search ml-2"></i>
								</v-btn>
							</template>
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
	</v-app>
</template>
<script>
export default {
	data() {
		return {
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,

			headers: [
				{
					text: '처리결과',
					align: 'center',
					sortable: true,
					value: '',
					width: '120px',
				},
				{
					text: '개인정보탐지',
					align: 'center',
					sortable: true,
					value: '',
					width: '140px',
				},
				{
					text: '데이터 원천',
					align: 'center',
					sortable: true,
					value: '',
					width: '140px',
				},
				{
					text: '데이터 구분',
					align: 'center',
					sortable: false,
					value: '',
					width: '140px',
				},
				{
					text: '테이블명',
					align: 'center',
					sortable: true,
					value: '',
					width: '140px',
				},
				{
					text: '수집건수',
					align: 'center',
					sortable: true,
					value: '',
					width: '160px',
				},
				{
					text: '시작일시',
					align: 'center',
					sortable: true,
					value: '',
					width: '200px',
				},
				{
					text: '시스템 최종 처리일시',
					align: 'center',
					sortable: true,
					value: '',
					width: '200px',
				},
				{
					text: '소요시간',
					align: 'center',
					sortable: true,
					value: '',
					width: '140px',
				},
			],
		}
	},
}
</script>
