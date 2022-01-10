<template>
	<v-app>
		<div class="team-popup">
			<div class="team-inner">
				<div class="team-head">
					<h5>프로젝트 팀원 선택</h5>
					<div class="close-btn" @click="popupClose()">
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
								:rules="nameRules"
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
					</div>
					<div class="item_box">
						<div class="tit">
							<p>
								총
								<span>{{ this.totalCount }}</span>
								개의 검색결과가 있습니다.
							</p>
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
												:disabled="
													Disabled(item.userNo)
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
						<v-btn color="primary" dark large @click="selectMember"
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

export default {
	props: ['searchName', 'selectedMemebers', 'proposer'],

	data() {
		return {
			searchWrd: '',
			selectList: [],
			nameRules: [v => !!v || '이름을 입력해 주세요.'],
			tmmmList: null,
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
		}
	},

	created() {
		this.searchWrd = this.searchName
		this.selectList = Object.assign([], this.selectedMemebers)

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

					this.MakeList()
					console.log(res.data)
					console.log(this.tmmmList)
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		SelectMember(num) {
			if (this.proposer != null)
				if (this.proposer == this.tmmmList[num].userNo) {
					this.$set(this.tmmmList[num], 'select', true)
					return
				}

			if (this.selectList.length > 10) {
				this.$set(this.tmmmList[num], 'select', false)
				return
			}

			if (this.tmmmList[num].select) {
				this.selectList.push(this.tmmmList[num])
				this.$set(this.tmmmList[num], 'select', true)
			} else {
				this.selectList = this.selectList.filter(
					element => element.userNo != this.tmmmList[num].userNo,
				)
				this.$set(this.tmmmList[num], 'select', false)
			}
		},

		Delete(num) {
			for (var i = 0; i < this.tmmmList.length; i++) {
				if (this.selectList[num].userNo == this.tmmmList[i].userNo)
					this.$set(this.tmmmList[i], 'select', false)
			}
			this.selectList = this.selectList.filter(
				element => element.userNo != this.selectList[num].userNo,
			)
		},

		MakeList() {
			for (var i = 0; i < this.tmmmList.length; i++) {
				this.$set(this.tmmmList[i], 'select', false)
				for (var j = 0; j < this.selectList.length; j++) {
					if (this.selectList[j].userNo == this.tmmmList[i].userNo)
						this.$set(this.tmmmList[i], 'select', true)
				}
				if (this.proposer != null)
					if (this.proposer == this.tmmmList[i].userNo)
						this.$set(this.tmmmList[i], 'select', true)
			}
		},

		popupClose() {
			this.$emit('close:popup')
		},

		selectMember() {
			if (this.selectList.length == 0) return
			this.$emit('selectMember', this.selectList)
		},

		Disabled(value) {
			if (this.proposer != null) return value == this.proposer
			else return false
		},
	},
}
</script>
