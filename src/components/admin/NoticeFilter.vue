<template>
	<div class="adm-search">
		<v-row>
			<v-col md="4">
				<div class="label_txt">제목</div>
				<v-text-field
					placeholder="제목"
					single-line
					v-model="param.title"
					outlined
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
				<v-radio-group row hide-details="auto" v-model="param.dstic">
					<v-radio label="일반" :value="NOTI_DSTIC.NORMAL"> </v-radio>
					<v-radio label="메인" :value="NOTI_DSTIC.MAIN"> </v-radio>
				</v-radio-group>
			</v-col>
			<v-col md="4">
				<div class="label_txt">카테고리</div>
				<v-radio-group
					row
					hide-details="auto"
					v-model="param.kategorie"
				>
					<v-radio label="공지사항" :value="NOTI_KATE.NOTICE">
					</v-radio>
					<v-radio label="이벤트" :value="NOTI_KATE.EVENT"> </v-radio>
				</v-radio-group>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="4">
				<div class="label_txt">Status</div>
				<div class="checkgroup">
					<v-checkbox
						label="게시중"
						hide-details="auto"
						v-model="param.status1"
					></v-checkbox>
					<v-checkbox
						label="대기중"
						hide-details="auto"
						v-model="param.status2"
					></v-checkbox>
					<v-checkbox
						label="종료"
						hide-details="auto"
						v-model="param.status3"
					></v-checkbox>
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
