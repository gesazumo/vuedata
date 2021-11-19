import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const vuetify = new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#504842', //
				point: '#ff9d00',
				secondary: '#968d83',
				error: '#dd3300',
			},
		},
	},
})
export default vuetify
