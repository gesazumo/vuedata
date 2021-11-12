<template>
	<v-form>
		<v-container>
			<v-row>
				<!--normal-->
				<v-col cols="12" sm="6" md="3">
					<v-text-field solo></v-text-field>
				</v-col>
				<v-col cols="12" sm="6" md="3">
					<v-text-field
						placeholder="이름을 입력하세요"
						solo
						clearable
					></v-text-field>
				</v-col>
				<v-col cols="12" sm="6" md="3">
					<v-text-field
						value="disabled"
						label=""
						solo
						disabled
					></v-text-field>
				</v-col>
				<v-col cols="12" sm="6" md="3">
					<v-text-field
						value="readonly"
						label=""
						solo
						readonly
					></v-text-field>
				</v-col>
				<v-col cols="12" sm="6" md="3">
					<v-text-field
						ref="name"
						v-model="name"
						:rules="[() => !!name || '이름은 필수입력입니다']"
						:error-messages="errorMessages"
						label="이름을 입력하세요"
						placeholder="홍길동"
						required
						solo
					></v-text-field>
				</v-col>
				<!--자동완성-->
				<v-col cols="12" sm="6" md="3">
					<v-autocomplete solo></v-autocomplete>
				</v-col>
				<!--ex.휴대폰번호-->
				<v-col cols="12" sm="6" md="1">
					<v-select :items="items" label="선택하세요" solo></v-select>
				</v-col>
				<v-col cols="12" sm="6" md="2">
					<v-text-field solo></v-text-field>
				</v-col>
				<v-col cols="12" sm="6" md="2">
					<v-text-field solo></v-text-field>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>
//ex.휴대폰번호
export default {
	data: () => ({
		items: ['010', '011', '012', '013'],
	}),
}
</script>
