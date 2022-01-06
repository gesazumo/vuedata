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
						<v-btn color="primary" dark large>선택완료</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import axios from 'axios'

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
			if (this.selectList.length > 10) {
				this.$set(this.tmmmList[num], 'select', false)
				return
			}

			if (this.tmmmList[num].select) {
				this.selectList.push(this.tmmmList[num])
				this.$set(this.tmmmList[num], 'select', true)
			} else {
				this.selectList = this.selectList.filter(
					element => element.userNo !== this.tmmmList[num].userNo,
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
				element => element.userNo !== this.selectList[num].userNo,
			)
		},

		popupClose() {
			this.$emit('close:popup')
		},

		MakeList() {
			for (var i = 0; i < this.tmmmList.length; i++) {
				this.$set(this.tmmmList[i], 'select', false)
				for (var j = 0; j < this.selectList.length; j++)
					if (this.selectList[j].userNo == this.tmmmList[i].userNo)
						this.$set(this.tmmmList[i], 'select', true)
			}
		},
	},
}
</script>
