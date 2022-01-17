<template>
	<!-- <div class="adm_wrap"> -->
	<!-- <div id="lnb"></div> -->
	<!-- <div class="adm_contents">
		<div class="inner">
			<div>
				<line-chart
					:chartdata="lineChartData"
					:options="lineChartOptions"
				/>
			</div>
			<div>
				<doughnut-chart
					:chartdata="doughnutChartData"
					:options="doughnutChartOption"
				/>
			</div>
			<div>
				<bar-chart
					:chartdata="barChartData"
					:options="barChartOption"
				/>
			</div>
		</div>
	</div> -->
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
								<doughnut-chart
									:chartdata="doughnutChartData"
									:options="doughnutChartOption"
									height="250"
									width="250"
								/>
							</div>
							<div class="chart_info">
								<p>
									총 사용자수
									<span class="tot">0,000명</span>
								</p>
								<ul>
									<li>
										<span
											class="chart-color pink lighten-1"
										></span>
										파워유저
										<span class="tot">0,000명 (00.0%)</span>
									</li>
									<li>
										<span
											class="chart-color blue lighten-1"
										></span>
										일반유저
										<span class="tot">00명 (00.0%)</span>
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
								<bar-chart
									:chartdata="barChartData"
									:options="barChartOption"
									width="650"
									height="250"
								/>
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
							<v-btn color="primary" outlined> 최근 한달 </v-btn>
						</div>
					</div>

					<div class="chart">
						<div class="chart_view">
							<line-chart
								:chartdata="lineChartData"
								:options="lineChartOptions"
								width="1335"
								height="360"
							/>
						</div>
					</div>
				</div>
				<div style="margin-top: 40px">
					<div class="board">
						<div>
							<p class="float-left pt-4 pb-4 font-weight-bold">
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
						<div style="display: inline-block; margin-bottom: 4px">
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
</template>

<script>
import LineChart from '@/components/admin/LineChart'
import DoughnutChart from '@/components/admin/DoughnutChart'
import BarChart from '@/components/admin/BarChart'

export default {
	components: {
		LineChart,
		DoughnutChart,
		BarChart,
	},
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
			lineChartData: {
				//Data to be represented on x-axis
				labels: [
					'2021-12-01',
					'2021-12-02',
					'2021-12-03',
					'2021-12-04',
					'2021-12-05',
					'2021-12-06',
					'2021-12-07',
					'2021-12-08',
					'2021-12-09',
					'2021-12-10',
					'2021-12-11',
					'2021-12-12',
					'2021-12-13',
					'2021-12-14',
					'2021-12-15',
					'2021-12-16',
					'2021-12-17',
					'2021-12-18',
					'2021-12-19',
					'2021-12-20',
					'2021-12-21',
					'2021-12-22',
					'2021-12-23',
					'2021-12-24',
					'2021-12-25',
					'2021-12-26',
					'2021-12-27',
					'2021-12-28',
					'2021-12-29',
					'2021-12-30',
					'2021-12-31',
				],
				datasets: [
					{
						label: 'power user',
						borderColor: '#FF717E',
						pointBackgroundColor: '#FF717E',
						borderWidth: 4,
						pointBorderColor: '#FF717E',
						pointRadius: 5,
						pointHoverRadius: 10,
						//Data to be represented on y-axis
						data: [
							40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100, 40,
							20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100, 40, 20,
							30, 50, 90, 10, 20,
						],
						fill: false,
					},
					{
						label: 'normal user',
						borderColor: '#1FBED6',
						pointBackgroundColor: '#1FBED6',
						borderWidth: 4,
						pointBorderColor: '#1FBED6',
						pointRadius: 5,
						pointHoverRadius: 10,
						//Data to be represented on y-axis
						data: [
							50, 40, 30, 20, 40, 70, 80, 90, 50, 30, 20, 40, 50,
							40, 30, 20, 40, 70, 80, 90, 50, 30, 20, 40, 50, 40,
							30, 20, 40, 70, 80,
						],
						fill: false,
					},
				],
			},
			//Chart.js options that controls the appearance of the chart
			lineChartOptions: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
							gridLines: {
								display: true,
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								display: true,
							},
						},
					],
				},
				legend: {
					display: false,
				},
				tooltips: {
					mode: 'label',
					callbacks: {
						label: function (tooltipItem, data) {
							let item =
								data.datasets[tooltipItem.datasetIndex].label
							let value =
								data.datasets[tooltipItem.datasetIndex].data[
									tooltipItem.index
								]
							let total = 0
							let label = []
							for (let i = 0; i < data.datasets.length; i++)
								total +=
									data.datasets[i].data[tooltipItem.index]
							label.push(
								item +
									' : ' +
									value +
									'명 (' +
									((value / total) * 100).toFixed(1) +
									'%)',
							)
							return label
						},
						footer: function (tooltipItem, data) {
							let total = 0
							for (let i = 0; i < data.datasets.length; i++) {
								total +=
									data.datasets[i].data[tooltipItem[i].index]
							}
							return 'Total : ' + total + '명'
						},
					},
				},
				responsive: true,
				maintainAspectRatio: false,
			},
			doughnutChartData: {
				labels: ['power user', 'normal user'],
				datasets: [
					{
						label: 'Dataset 1',
						data: [82, 32],
						backgroundColor: ['#FF717E', '#1FBED6'],
					},
				],
			},
			doughnutChartOption: {
				responsive: true,
				plugins: {
					doughnutlabel: {
						labels: [
							{
								text: 'Total',
								font: {
									size: '30',
								},
							},
							{
								text: '114',
								font: {
									size: '30',
									weight: 'bold',
								},
							},
						],
					},
				},
				maintainAspectRatio: false,
				legend: {
					display: false,
				},
			},
			barChartData: {
				labels: [
					'지주',
					'은행',
					'증권',
					'손보',
					'카드',
					'푸르덴셜',
					'캐피탈',
					'생명',
					'저축',
				],
				datasets: [
					{
						label: 'power user',
						backgroundColor: '#FF717E',
						//Data to be represented on y-axis
						data: [40, 20, 30, 50, 90, 10, 20, 40, 50],
						barPercentage: 0.5,
					},
					{
						label: 'normal user',
						backgroundColor: '#1FBED6',
						//Data to be represented on y-axis
						data: [50, 40, 30, 20, 40, 70, 80, 90, 50],
						barPercentage: 0.5,
					},
				],
			},
			barChartOption: {
				legend: {
					display: false,
				},
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					xAxes: [
						{
							stacked: true,
						},
					],
					yAxes: [
						{
							stacked: true,
						},
					],
				},
				tooltips: {
					mode: 'label',
					callbacks: {
						label: function (tooltipItem, data) {
							let item =
								data.datasets[tooltipItem.datasetIndex].label
							let value =
								data.datasets[tooltipItem.datasetIndex].data[
									tooltipItem.index
								]
							let total = 0
							let label = []
							for (let i = 0; i < data.datasets.length; i++)
								total +=
									data.datasets[i].data[tooltipItem.index]
							label.push(
								item +
									' : ' +
									value +
									'명 (' +
									((value / total) * 100).toFixed(1) +
									'%)',
							)
							return label
						},
						footer: function (tooltipItem, data) {
							let total = 0
							for (let i = 0; i < data.datasets.length; i++) {
								total +=
									data.datasets[i].data[tooltipItem[i].index]
							}
							return 'Total : ' + total + '명'
						},
					},
				},
			},
		}
	},
}
</script>
