<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<!--기본/medium-->
				<button class="primary">버튼명</button>
				<button class="primary" disabled>버튼명</button>
				<button class="secondary">버튼명</button>
				<button class="secondary" disabled>버튼명</button>
			</v-col>
			<v-col cols="12">
				<!--large-->
				<button class="primary large">버튼명</button>
				<button class="secondary large">버튼명</button>
				<button class="secondary large" disabled>버튼명</button>
			</v-col>
			<v-col cols="12">
				<!--option/기본medium-->
				<button class="box">사각</button>
				<button class="round">라운드</button>
				<button class="box small">사각</button>
				<button class="round small">라운드</button>
				<button class="box small" disabled>버튼명</button>
				<button class="round small" disabled>버튼명</button>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {}
</script>
