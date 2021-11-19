<template>
	<div class="text-center">
		<v-row>
			<v-col cols="12">
				<!--기본/medium-->
				<button class="primary">normal</button>
				<button class="secondary">normal</button>
				<button class="primary" disabled>disabled</button>
				<button class="secondary" disabled>disabled</button>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<!--large-->
				<button class="primary point large">point</button>
				<button class="secondary large">large</button>
				<button class="secondary large" disabled>disabled</button>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<!--option/기본medium-->
				<button class="box">베이직</button>
				<button class="round">베이직 min-width 80px</button>
				<button class="box small">사각 스몰</button>
				<button class="round small">라운드 스몰</button>
				<button class="box small" disabled>box small disabled</button>
				<button class="round small" disabled>round small</button>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-btn text icon color="black">
					더보기 <v-icon>mdi-chevron-down</v-icon>
				</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
