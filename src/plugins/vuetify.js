import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const vuetify = new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#fbc00a', //
				secondary: '#968d83',
				error: '#ff5252',
			},
		},
	},
})
export default vuetify
