<template>
	<div class="viewpage">
		<v-row>
			<v-col cols="12" sm="6">
				<v-switch
					v-model="switch1"
					:label="`on: ${switch1.toString()}`"
					color="primary"
				></v-switch>
			</v-col>
			<v-col cols="12" sm="6">
				<v-switch
					v-model="switch2"
					:label="`off: ${switch2.toString()}`"
					color="secondary"
				></v-switch>
			</v-col>
		</v-row>
	</div>
</template>
<script>
export default {
	data() {
		return {
			switch1: true,
			switch2: false,
		}
	},
}
</script>
