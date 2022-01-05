<template>
	<v-app>
		<div class="team-popup">
			<div class="team-inner">
				<div class="team-head">
					<h5>컬럼명 조회</h5>
					<div class="close-btn">
						<img src="../../images/com_icon_close.svg" />
					</div>
				</div>

				<div class="team-body">
					<div class="team-body-search">
						<div
							style="float: left; width: 145px; line-height: 40px"
						>
							한글단어명
						</div>
						<div style="float: left">
							<v-text-field
								placeholder="고객"
								outlined
								clearable
								hide-details="auto"
							></v-text-field>
						</div>
						<div style="float: left">
							<v-select
								:items="items"
								label="%_%"
								single-line
								outlined
								hide-details="auto"
							>
								<template slot="append-outer">
									<v-btn color="primary" dark>
										검색하기
									</v-btn>
								</template>
							</v-select>
						</div>
					</div>
					<div class="item_box">
						<div class="tit">
							<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
						</div>

						<div class="table_box">
							<v-data-table
								:headers="headers"
								:items="team"
								:items-per-page="itemsPerPage"
								:single-select="singleSelect"
								show-select
								:height="250"
								fixed-header
								hide-default-footer
								class="elevation-1"
							>
							</v-data-table>
						</div>

						<div class="team-select">
							<div class="inner">
								<div class="tag">
									<span>
										김국민(kb-H00001)
										<i class="fa fa-times"></i>
									</span>
									<span>
										김별(kb-H00002)
										<i class="fa fa-times"></i>
									</span>
									<span>
										남궁스타(kb-H00001)
										<i class="fa fa-times"></i>
									</span>
									<span>
										김별빛스타(kb-H00001)
										<i class="fa fa-times"></i>
									</span>
									<span>
										그스타(kb-H00001)
										<i class="fa fa-times"></i>
									</span>
									<span>
										이스타(kb-H00001)
										<i class="fa fa-times"></i>
									</span>
									<span>
										저스타(kb-H00001)
										<i class="fa fa-times"></i>
									</span>
									<span>
										요별(kb-H00001)
										<i class="fa fa-times"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="btnArea">
						<v-btn color="primary" dark large outlined>
							취소
						</v-btn>
						<v-btn color="primary" dark large>선택완료</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>
<script>
export default {
	data() {
		return {
			name: '',
			nameRules: '',
			rules: {
				nameRules: v => !!v || '이름을 입력해 주세요.',
			},
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '순번',
					sortable: false,
					value: 'no',
				},
				{
					text: '회사명',
					sortable: false,
					value: 'company',
				},
				{
					text: '부서',
					sortable: false,
					value: 'team',
				},
				{
					text: '이름',
					sortable: false,
					value: 'name',
				},
				{
					text: '사번',
					sortable: false,
					value: 'companyid',
				},
			],
			team: [
				{
					no: '1999',
					company: 'KB국민카드',
					team: '미래경영연구소1',
					name: '김국민',
					companyid: 'kb-H00001',
				},
				{
					no: '2',
					company: '푸르덴셜생명',
					team: '미래경영연구소1',
					name: '김스타',
					companyid: 'kb-H00001',
				},
				{
					no: '3',
					company: 'KB증권',
					team: '미래경영연구소1',
					name: '김별',
					companyid: 'kb-H00001',
				},
				{
					no: '5',
					company: 'KB증권',
					team: '미래경영연구소1',
					name: '이스타',
					companyid: 'kb-H00001',
				},
				{
					no: '5',
					company: 'KB증권',
					team: '미래경영연구소1',
					name: '저스타',
					companyid: 'kb-H00001',
				},
				{
					no: '5',
					company: 'KB증권',
					team: '미래경영연구소1',
					name: '그스타',
					companyid: 'kb-H00001',
				},
			],
		}
	},
}
</script>
