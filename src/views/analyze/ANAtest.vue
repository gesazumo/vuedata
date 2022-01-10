<template>
	<v-app>
		<div class="team-popup">
			<div class="team-inner">
				<div class="team-head">
					<h5>프로젝트 팀원 선택</h5>
					<div class="close-btn">
						<img src="../../images/com_icon_close.svg" />
					</div>
				</div>

				<div class="team-body">
					<div class="team-body-search">
						<div
							style="float: left; width: 145px; line-height: 40px"
						>
							프로젝트 팀원
						</div>
						<div>
							<v-text-field
								placeholder="이름을 입력하세요"
								single-line
								clearable
								outlined
								v-model="searchWrd"
								:rules="rules"
								hide-details="auto"
							>
								<template slot="append-outer">
									<v-btn
										color="primary"
										dark
										@click="Search()"
									>
										검색
									</v-btn>
								</template>
							</v-text-field>
						</div>
						<v-select
							v-model="e6"
							:items="states"
							:menu-props="{ maxHeight: '400' }"
							placeholder="분석코드 파일을 선택하세요"
							multiple
						></v-select>
						<div>
							<textarea v-model="myInput"></textarea>
							<v-btn
								color="primary"
								dark
								large
								@click="CopyToClipboard()"
								>복사</v-btn
							>
						</div>
					</div>

					<div class="item_box">
						<div class="tit">
							<p>
								총
								<span>{{ this.totalCount }}</span>
								개의 검색결과가 있습니다.
							</p>
						</div>

						<div class="table_box">
							<v-data-table
								v-if="tmmmList != null"
								:headers="headers"
								:items="tmmmList"
								:height="250"
								:items-per-page="totalCount"
								fixed-header
								hide-default-footer
								class="elevation-1"
							>
								<template #item="{ item }">
									<tr>
										<td>
											<v-checkbox
												v-model="item.select"
												hide-details
												@change="
													SelectMember(item.serno - 1)
												"
											>
											</v-checkbox>
										</td>
										<td>{{ item.serno }}</td>
										<td>{{ item.groupCoNm }}</td>
										<td>{{ item.groupDvsnNm }}</td>
										<td>{{ item.userNm }}</td>
										<td>{{ item.userNo }}</td>
									</tr>
								</template>
							</v-data-table>
						</div>

						<div class="team-select">
							<div class="inner">
								<div class="tag">
									<span
										v-for="(item, i) in selectList"
										v-bind:key="item.userNo"
									>
										{{ item.userNm }}({{ item.userNo }})
										<i
											class="fa fa-times"
											@click="Delete(i)"
										></i>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="btnArea">
						<v-btn
							color="primary"
							dark
							large
							outlined
							@click="popupClose(false)"
						>
							취소
						</v-btn>
						<v-btn
							color="primary"
							dark
							large
							@click="makeExcelFile5()"
							>선택완료</v-btn
						>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import axios from 'axios'
import Xlsx from 'xlsx'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

export default {
	data() {
		return {
			searchWrd: '',
			nameRules: '',
			rules: [v => !!v || '이름을 입력해 주세요.'],
			selected: [],
			tmmmList: null,
			selectList: [],
			totalCount: 0,
			headers: [
				{
					text: '선택',
					sortable: false,
					align: 'center',
					width: 60,
				},
				{
					text: '순번',
					sortable: false,
					value: 'serno',
				},
				{
					text: '회사명',
					sortable: false,
					value: 'groupCoNm',
				},
				{
					text: '부서',
					sortable: false,
					value: 'groupDvsnNm',
				},
				{
					text: '이름',
					sortable: false,
					value: 'userNm',
				},
				{
					text: '사번',
					sortable: false,
					value: 'userNo',
				},
			],

			e6: [],
			states: [
				'Alabama',
				'Alaska',
				'American Samoa',
				'Arizona',
				'Arkansas',
				'California',
				'Colorado',
				'Connecticut',
				'Delaware',
				'District of Columbia',
				'Federated States of Micronesia',
				'Florida',
				'Georgia',
				'Guam',
				'Hawaii',
				'Idaho',
				'Illinois',
				'Indiana',
				'Iowa',
				'Kansas',
				'Kentucky',
				'Louisiana',
				'Maine',
				'Marshall Islands',
				'Maryland',
				'Massachusetts',
				'Michigan',
				'Minnesota',
				'Mississippi',
				'Missouri',
				'Montana',
				'Nebraska',
				'Nevada',
				'New Hampshire',
				'New Jersey',
				'New Mexico',
				'New York',
				'North Carolina',
				'North Dakota',
				'Northern Mariana Islands',
				'Ohio',
				'Oklahoma',
				'Oregon',
				'Palau',
				'Pennsylvania',
				'Puerto Rico',
				'Rhode Island',
				'South Carolina',
				'South Dakota',
				'Tennessee',
				'Texas',
				'Utah',
				'Vermont',
				'Virgin Island',
				'Virginia',
				'Washington',
				'West Virginia',
				'Wisconsin',
				'Wyoming',
			],

			myInput: '',
		}
	},

	created() {
		this.Search()
	},

	methods: {
		Search() {
			const param = {
				searchWrd: this.searchWrd,
			}

			const queryString = this.convertUrl(param)

			var url = '/api/analyze/analenvreq/ana005/selectAna00501'

			axios
				.get(url + queryString)
				.then(res => {
					this.tmmmList = res.data.tmmmList
					this.totalCount = res.data.totalCount

					this.selected = new Array(this.totalCount).fill(false)
					this.MakeList()
					console.log(res.data)
					console.log(this.tmmmList)
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		SelectMember(num) {
			if (
				this.selectList.length > 10 ||
				this.selectList.filter(
					element => element.userNo == this.tmmmList[num].userNo,
				).length > 0
			) {
				this.tmmmList[num].select = false
				return
			}
			this.tmmmList[num].select = true

			if (this.tmmmList[num].select) {
				this.selectList.push(this.tmmmList[num])
			} else {
				this.selectList = this.selectList.filter(
					element => element.userNo !== this.tmmmList[num].userNo,
				)
				this.tmmmList[num].select = false
			}
		},

		Delete(num) {
			this.selectList = this.selectList.filter(
				element => element.userNo !== this.tmmmList[num].userNo,
			)
			this.tmmmList[num].select = false
		},

		popupClose(value) {
			this.popupVal = value
		},

		MakeList() {
			for (var i = 0; i < this.tmmmList.length; i++) {
				this.tmmmList[i].select = false
			}
		},

		// 엑셀 테스트
		makeExcelFile5() {
			const workBook = Xlsx.utils.book_new()
			const workSheet = Xlsx.utils.json_to_sheet(this.tmmmList)
			Xlsx.utils.book_append_sheet(workBook, workSheet, 'example')
			Xlsx.writeFile(workBook, 'example.xlsx')
		},

		// 클립보드 복사 테스트
		CopyToClipboard() {
			this.$copyText(this.myInput)
		},
	},
}
</script>
