<template>
	<div class="adm-search">
		<v-row>
			<v-col md="4">
				<div class="label_txt">제목</div>
				<v-text-field
					placeholder="제목"
					single-line
					outlined
					v-model="param.title"
					clearable
					hide-details="auto"
				></v-text-field>
			</v-col>
			<v-col md="4">
				<div class="label_txt">등록일</div>
				<div>
					<date-picker
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
					:items="$getCmCode('qnaCmCodeDstic')"
					placeholder="전체 카테고리"
					single-line
					item-text="cmnCdNm"
					item-value="cmnCd"
					outlined
					hide-details="auto"
					v-model="param.dstic"
				></v-select>
			</v-col>
			<v-col md="4">
				<div class="label_txt">계열사명</div>
				<v-select
					:items="$getCmCode('commCmcodeCompany')"
					placeholder="전체"
					return-object
					single-line
					item-text="cmnCdNm"
					item-value="cmnCd"
					outlined
					hide-details="auto"
					v-model="param.company"
				></v-select>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="4">
				<div class="label_txt">Status</div>
				<div class="checkgroup">
					<v-checkbox
						v-for="code in $getCmCode('qnaCmCodeStatus')"
						:key="code.cmnCd"
						:label="code.cmnCdNm"
						:value="code.cmnCd"
						hide-details="auto"
					/>
				</div>
			</v-col>
			<v-col></v-col>
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
