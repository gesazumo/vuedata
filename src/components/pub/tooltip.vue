<template>
	<v-tooltip right>
		<template v-slot:activator="{ on, attrs }">
			<v-icon color="primary" dark v-bind="attrs" v-on="on">
				mdi-information
			</v-icon>
		</template>
		<span>Right Tooltip</span>
	</v-tooltip>
</template>
