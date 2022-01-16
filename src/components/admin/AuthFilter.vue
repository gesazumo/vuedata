<template>
	<div class="adm-search">
		<v-row>
			<v-col md="4">
				<div class="label_txt">권한명</div>
				<v-text-field
					single-line
					outlined
					clearable
					v-model="param.athNm"
					hide-details="auto"
				></v-text-field>
			</v-col>
			<v-col md="4">
				<div class="label_txt">등록일</div>
				<div>
					<date-picker
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
					:items="$getCmCode('TAH000081')"
					placeholder="메뉴 구분을 선택하세요"
					single-line
					item-text="cmnCdNm"
					item-value="cmnCd"
					return-object
					outlined
					hide-details="auto"
					v-model="param.athType"
				></v-select>
			</v-col>
			<v-col md="4">
				<div class="label_txt">계열사명</div>
				<v-select
					placeholder="계열사명을 선택하세요"
					outlined
					return-object
					item-text="cmnCdNm"
					item-value="cmnCd"
					v-model="param.groupCoCd"
					hide-details="auto"
					:items="$getCmCode('TAH000001')"
				></v-select>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="4">
				<div class="label_txt">사용여부</div>
				<v-select
					placeholder="사용여부를 선택하세요"
					outlined
					item-text="cmnCdNm"
					item-value="cmnCd"
					return-object
					hide-details="auto"
					:items="$getCmCode('TAH000082')"
					v-model="param.useYn"
				></v-select>
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
