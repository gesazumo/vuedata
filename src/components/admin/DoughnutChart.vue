<script>
//Importing Line class from the vue-chartjs wrapper
import { Doughnut } from 'vue-chartjs'
// eslint-disable-next-line no-unused-vars
import chartjsPluginDoughnutlabel from 'chartjs-plugin-doughnutlabel'

//Exporting this so it can be used in other components
export default {
	extends: Doughnut,
	props: {
		chartdata: {
			type: Object,
			default: null,
		},
		options: {
			type: Object,
			default: null,
		},
	},
	mounted() {
		//renderChart function renders the chart with the datacollection and options object.
		this.renderChart(this.chartdata, this.options)
	},
}
</script>
