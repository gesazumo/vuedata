<template>
	<!-- <div class="adm_wrap"> -->
	<!-- <div id="lnb"></div> -->
	<div class="adm_contents">
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
			lineChartData: {
				//Data to be represented on x-axis
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December',
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
						data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100],
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
						data: [50, 40, 30, 20, 40, 70, 80, 90, 50, 30, 20, 40],
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
							var item =
								data.datasets[tooltipItem.datasetIndex].label
							var value =
								data.datasets[tooltipItem.datasetIndex].data[
									tooltipItem.index
								]
							var total = 0
							for (var i = 0; i < data.datasets.length; i++)
								total +=
									data.datasets[i].data[tooltipItem.index]
							if (
								tooltipItem.datasetIndex !=
								data.datasets.length - 1
							) {
								return (
									item +
									' : ' +
									value +
									'명 (' +
									((value / total) * 100).toFixed(1) +
									'%)'
								)
							} else {
								return [
									item +
										' : ' +
										value +
										'명 (' +
										((value / total) * 100).toFixed(1) +
										'%)',
									'Total : ' + total + '명',
								]
							}
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
					position: 'top',
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
							var item =
								data.datasets[tooltipItem.datasetIndex].label
							var value =
								data.datasets[tooltipItem.datasetIndex].data[
									tooltipItem.index
								]
							var total = 0
							for (var i = 0; i < data.datasets.length; i++)
								total +=
									data.datasets[i].data[tooltipItem.index]
							if (
								tooltipItem.datasetIndex !=
								data.datasets.length - 1
							) {
								return (
									item +
									' : ' +
									value +
									'명 (' +
									((value / total) * 100).toFixed(1) +
									'%)'
								)
							} else {
								return [
									item +
										' : ' +
										value +
										'명 (' +
										((value / total) * 100).toFixed(1) +
										'%)',
									'Total : ' + total + '명',
								]
							}
						},
					},
				},
			},
		}
	},
}
</script>
