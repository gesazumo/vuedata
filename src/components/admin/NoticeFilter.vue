<template>
	<div>
		<v-row>
			<v-col md="4">
				<label>제목</label>
				<v-text-field
					placeholder="제목"
					v-model="subject"
					single-line
					outlined
					clearable
					hide-details="auto"
				></v-text-field>
			</v-col>
			<v-col md="4">
				<label>등록일</label>
				<date-picker v-model="date" range placeholder="기간 선택" />
			</v-col>
		</v-row>
		<v-row>
			<v-col md="4">
				<label>구분</label>
				<v-select
					:items="group"
					label="전체 패키지 그룹"
					single-line
					outlined
					hide-details="auto"
				></v-select>
			</v-col>
			<v-col md="4">
				<label> Status </label>
				<v-tooltip right content-class="secondary tooltip-right">
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							v-bind="attrs"
							v-on="on"
							icon
							style="background: none !important"
						>
							<v-icon>mdi-help-circle</v-icon>
						</v-btn>
					</template>
					<div>
						<p
							class="title"
							style="
								color: #fff !important;
								font-size: 16px !important;
							"
						>
							오픈소스 라이브러리 반입 현황 확인
						</p>
					</div>
				</v-tooltip>
				<div class="checkgroup">
					<v-checkbox
						label="접수완료"
						hide-details="auto"
					></v-checkbox>
					<v-checkbox label="점검중" hide-details="auto"></v-checkbox>
					<v-checkbox
						label="취약점 발견"
						hide-details="auto"
					></v-checkbox>
					<v-checkbox
						label="반입완료"
						hide-details="auto"
					></v-checkbox>
				</div>
			</v-col>
			<v-col md="3" align="right">
				<v-btn color="primary" dark outlined>초기화</v-btn>
				<v-btn color="primary" dark>검색하기</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			subject: '',
			group: ['전체', 'Python', 'R', 'Anaconda', '기타'],
			date: new Date(),
		}
	},
}
</script>

<style></style>
