<template>
	<div class="viewpage">
		<v-row>
			<v-col cols="12" sm="6">
				normal
				<v-text-field single-line outlined></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				normal (placeholder)
				<v-text-field
					placeholder="(선택) 이름 입력"
					single-line
					outlined
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				clear
				<v-text-field
					placeholder="이름을 입력하세요"
					single-line
					outlined
					clearable
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				disabled
				<v-text-field
					value="disabled"
					label=""
					single-line
					outlined
					disabled
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				readonly
				<v-text-field
					value="readonly"
					label=""
					single-line
					outlined
					readonly
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				error meg
				<v-text-field
					ref="name"
					v-model="name"
					:rules="[() => !!name || '이름을 입력해 주세요']"
					:error-messages="errorMessages"
					label="이름을 입력하세요"
					placeholder="홍길동"
					required
					single-line
					outlined
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				자동완성
				<v-autocomplete single-line outlined></v-autocomplete>
			</v-col>
			<v-col cols="12" sm="6">
				선택
				<v-select
					:items="items"
					label="선택하세요"
					ref="name"
					v-model="name"
					:rules="[() => !!name || '입력 항목을 확인해 주세요']"
					:error-messages="errorMessages"
					single-line
					outlined
				></v-select>
				<v-text-field single-line outlined></v-text-field>
				<v-text-field single-line outlined></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				보조 텍스트 필드
				<v-text-field
					label="날짜입력"
					append-icon="mdi-calendar"
					clearable
					single-line
					outlined
				></v-text-field>
			</v-col>
		</v-row>
	</div>
</template>

<script>
//ex.휴대폰번호
export default {
	data: () => ({
		items: ['010', '011', '012', '013'],
	}),
}
</script>
