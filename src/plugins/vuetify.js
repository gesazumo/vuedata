import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const vuetify = new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#ffbc00',
				secondary: '#968d83',
				error: '#dd3300',
			},
		},
	},
	icons: {
		iconfont: 'mdiSvg' || 'mdi' || 'md' || 'fa' || 'fa4' || 'faSvg',
	},
})
export default vuetify
