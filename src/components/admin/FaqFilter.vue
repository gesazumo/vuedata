<template>
	<div class="adm-search">
		<v-row>
			<v-col md="4">
				<div class="label_txt">제목</div>
				<v-text-field
					placeholder="제목"
					single-line
					outlined
					v-model="param.ques"
					clearable
					hide-details="auto"
				></v-text-field>
			</v-col>
			<v-col md="4">
				<div class="label_txt">등록일</div>
				<div>
					<date-picker
						:rules="[v => !!v || 'Required']"
						valueType="format"
						v-model="registDate"
						range
						placeholder="기간 선택"
					/>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="4">
				<div class="label_txt">구분</div>
				<v-select
					:items="$getCmCode('TAH000053')"
					placeholder="전체 카테고리"
					single-line
					return-object
					outlined
					item-text="cmnCdNm"
					item-value="cmnCd"
					hide-details="auto"
					v-model="param.dstic"
				></v-select>
			</v-col>
			<v-col md="5"></v-col>
			<v-col md="2" align="right">
				<v-btn color="primary" dark outlined @click="doInit"
					>초기화</v-btn
				>
				<v-btn color="primary" dark @click="doSearch">검색하기</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import filterMixin from '@/mixin/filterMixin'
export default {
	mixins: [filterMixin()],
}
</script>

<style></style>
