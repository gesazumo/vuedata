<template>
	<div>
		<date-picker v-model="time1" valueType="format" />
		<date-picker v-model="time2" range placeholder="기간선택" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			time1: '',
			time2: '',
			lang: {
				days: ['일', '월', '화', '수', '목', '금', '토'],
				months: [
					'1월',
					'2월',
					'3월',
					'4월',
					'5월',
					'6월',
					'7월',
					'8월',
					'9월',
					'10월',
					'11월',
					'12월',
				],
			},
		}
	},
}
</script>

<style></style>
