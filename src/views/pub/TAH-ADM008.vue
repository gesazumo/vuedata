<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>
					포털 사용 현황
					<p class="float-right">
						<i class="mdi mdi-calendar-text"></i>
						기준일 : 2022-00-00
					</p>
				</h5>

				<div class="adm-chart">
					<div class="chart_wrap">
						<div class="chart_01">
							<p class="pt-2 pb-4 font-weight-bold">
								유형별 사용자 현황
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
										총 사용자수
										<span class="tot">0,000명</span>
									</p>
									<ul>
										<li>
											<span
												class="
													chart-color
													pink
													lighten-1
												"
											></span>
											파워유저
											<span class="tot"
												>0,000명 (00.0%)</span
											>
										</li>
										<li>
											<span
												class="
													chart-color
													blue
													lighten-1
												"
											></span>
											일반유저
											<span class="tot"
												>00명 (00.0%)</span
											>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="chart_02">
							<p class="pt-2 pb-4 font-weight-bold">
								계열사별 사용자 현황
							</p>
							<div class="chart">
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

				<div class="item_box">
					<div>
						<p class="float-left pt-4 pb-4 font-weight-bold">
							기간별 방문 현황
						</p>
						<div class="search_item">
							<div style="float: left; margin-right: 6px">
								<v-select
									placeholder="전체"
									single-line
									outlined
									hide-details="auto"
								>
								</v-select>
							</div>

							<div style="float: right">
								<v-btn color="primary"> 최근 일주일 </v-btn>
								<v-btn color="primary" outlined>
									최근 한달
								</v-btn>
							</div>
						</div>

						<div class="chart">
							<div class="chart_view">
								<div
									style="
										width: 1049px;
										height: 360px;
										background: #c0c0c0;
									"
								>
									차트 사이즈 1049x360
								</div>
							</div>
						</div>
					</div>
					<div style="margin-top: 40px">
						<div class="board">
							<div>
								<p
									class="
										float-left
										pt-4
										pb-4
										font-weight-bold
									"
								>
									페이지별 방문 현황
								</p>
								<v-select
									label="10개씩 보기"
									class="list_select"
									single-line
									hide-details="auto"
									style="margin-top: 6px !important"
								>
								</v-select>
							</div>
						</div>

						<div class="search_item">
							<div
								style="
									display: inline-block;
									margin-bottom: 4px;
								"
							>
								<div style="float: left; margin-right: 6px">
									<v-select
										placeholder="전체"
										single-line
										outlined
										hide-details="auto"
									>
									</v-select>
								</div>

								<div style="float: right">
									<v-btn color="primary"> 오늘 </v-btn>
									<v-btn color="primary" outlined>
										최근 일주일
									</v-btn>
									<v-btn color="primary" outlined>
										최근 한달
									</v-btn>
								</div>
							</div>
						</div>
						<div class="table_box">
							<v-data-table
								:headers="headers"
								:items="item"
								:items-per-page="itemsPerPage"
								hide-default-footer
								class="elevation-1"
							>
								<template v-slot:body>
									<v-btn text>
										바로가기
										<i class="fas fa-chevron-right"></i>
									</v-btn>
								</template>
							</v-data-table>
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
export default {
	data() {
		return {
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,

			headers: [
				{
					text: '페이지',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '페이지뷰',
					align: 'right',
					sortable: true,
					value: '',
				},
				{
					text: '순페이지뷰',
					align: 'right',
					sortable: true,
					value: '',
				},
				{
					text: '평균 페이지 체류 시간',
					align: 'right',
					sortable: true,
					value: '',
				},
			],
		}
	},
}
</script>
