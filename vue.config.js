module.exports = {
	transpileDependencies: ['vuetify'],
	devServer: {
		proxy: {
			'/api': {
				target: 'http://3.37.100.93:8130',
				changeOrigin: true,
			},
		},
	},
}
