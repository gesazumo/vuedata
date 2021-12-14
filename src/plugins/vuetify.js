import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const vuetify = new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#504842',
				secondary: '#968D83',
				error: '#dd3300',
			},
		},
	},
})
export default vuetify
