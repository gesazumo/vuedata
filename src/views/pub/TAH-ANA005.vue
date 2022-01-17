<template>
	<v-app>
		<div id="popup-L">
			<div class="inner">
				<div class="head">
					<h5>프로젝트 팀원 선택</h5>
					<div class="close-btn">
						<img src="../../images/com_icon_close.svg" />
					</div>
				</div>

				<div class="content">
					<div class="search">
						<div
							style="float: left; width: 145px; line-height: 40px"
						>
							<p class="font-weight-bold">프로젝트 팀원</p>
						</div>
						<div>
							<v-text-field
								placeholder="이름을 입력하세요"
								single-line
								clearable
								outlined
								v-model="name"
								:rules="nameRules"
								hide-details="auto"
							>
								<template slot="append-outer">
									<v-btn color="primary" dark> 검색 </v-btn>
								</template>
							</v-text-field>
						</div>
					</div>
					<div class="item_box">
						<div class="tit">
							<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
							<p
								style="
									position: absolute;
									float: right;
									right: 80px;
									color: #473eab;
								"
							>
								<i class="mdi mdi-information-outline"></i>
								팀원은 최대 10명까지 선택할 수 있습니다.
							</p>
						</div>

						<div class="table_box">
							<v-data-table
								:headers="headers"
								:items="team"
								:items-per-page="itemsPerPage"
								:single-select="singleSelect"
								show-select
								:height="245"
								fixed-header
								hide-default-footer
								class="elevation-1"
							>
								<template>
									<div class="noti_meg">
										<i
											class="fas fa-exclamation-circle"
										></i>
										<div class="noti_txt">
											<p>조회 내역이 없습니다.</p>
										</div>
									</div>
								</template>
							</v-data-table>
						</div>

						<div class="select-tag">
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
									<span>
										요별스타(kb-H00001)
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
				</div>

				<div class="footer">
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
					align: 'center',
				},
				{
					text: '회사명',
					sortable: false,
					value: 'company',
					align: 'center',
				},
				{
					text: '부서',
					sortable: false,
					value: 'team',
					align: 'center',
				},
				{
					text: '이름',
					sortable: false,
					value: 'name',
					align: 'center',
				},
				{
					text: '사번',
					sortable: false,
					value: 'companyid',
					align: 'center',
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
