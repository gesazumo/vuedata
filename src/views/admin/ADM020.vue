<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>코드 관리</h5>
				<div class="item_box">
					<v-form ref="form2" onsubmit="return false;">
						<div class="table_box">
							<p class="pb-4 font-weight-bold">기본 정보</p>

							<table class="tb_write">
								<caption>
									table caption
								</caption>
								<colgroup>
									<col width="230" />
									<col width="" />
								</colgroup>
								<tbody>
									<tr>
										<th>
											구분
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-select
												:items="$getCmCode('TAH000083')"
												item-text="cmnCdNm"
												item-value="cmnCd"
												v-model="cmnGroupTypeCd"
												placeholder="구분을 선택해 주세요."
												single-line
												outlined
												hide-details="auto"
												:rules="[reqCmnGroupTypeCd]"
											></v-select>
										</td>
									</tr>
									<tr>
										<th>
											그룹코드 ID
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-form
												ref="form"
												onsubmit="return false;"
											>
												<v-text-field
													v-model="cmnGroupCd"
													placeholder="그룹코드 ID를 입력해주세요."
													single-line
													clearable
													outlined
													hide-details="auto"
													:rules="reqCmnGroupCd"
												>
													<template
														slot="append-outer"
													>
														<v-btn
															color="primary"
															@click="
																fn_jungBokChk()
															"
															dark
														>
															중복체크
														</v-btn>
													</template>
												</v-text-field>
											</v-form>
										</td>
									</tr>
									<tr>
										<th>
											그룹코드명
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-text-field
												v-model="cmnGroupNm"
												placeholder="그룹코드명을 입력해 주세요."
												single-line
												clearable
												outlined
												hide-details="auto"
												:rules="[reqCmnGroupNm]"
											></v-text-field>
										</td>
									</tr>
									<tr>
										<th>
											설명
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-text-field
												v-model="cmnGroupDesc"
												placeholder="설명을 입력해 주세요."
												single-line
												clearable
												outlined
												hide-details="auto"
												:rules="[reqCmnGroupDesc]"
											></v-text-field>
										</td>
									</tr>
									<tr>
										<th>사용여부</th>
										<td>
											<v-select
												:items="selectYn"
												item-text="str"
												item-value="val"
												v-model="useYn"
												outlined
												single-line
												hide-details="auto"
											></v-select>
										</td>
									</tr>
								</tbody>
							</table>

							<p class="pt-10 pb-2 font-weight-bold">코드 정보</p>
							<v-row>
								<v-btn color="primary" @click="addRow()">
									행추가하기
								</v-btn>
								<v-btn
									color="primary"
									outlined
									@click="removeRow()"
								>
									행삭제하기
								</v-btn>
							</v-row>
							<div style="margin-top: 16px">
								<table class="table">
									<thead>
										<tr>
											<th scope="col">
												<input
													type="checkbox"
													v-model="allChecked"
													@click="
														checkedAll(
															$event.target
																.checked,
														)
													"
												/>
											</th>
											<td>
												<strong> 코드ID </strong>
											</td>
											<td>
												<strong> 코드명 </strong>
											</td>
											<td>
												<strong> 사용여부 </strong>
											</td>
											<td>
												<strong>
													디스플레이순서
												</strong>
											</td>
										</tr>
									</thead>
									<tbody>
										<tr
											v-for="(
												item2, index
											) in comCodeRows"
											:key="index"
										>
											<td>
												<input
													type="checkbox"
													v-model="checked"
													:id="index"
													:value="index"
													:class="select(index)"
												/>
											</td>
											<td>
												<v-text-field
													v-model="item2.groupCd"
													placeholder="코드ID를 입력해주세요"
													single-line
													clearable
													outlined
													hide-details="auto"
													:rules="[requiredCd]"
												></v-text-field>
											</td>
											<td>
												<v-text-field
													v-model="item2.groupNm"
													placeholder="코드명을 입력해주세요"
													single-line
													clearable
													outlined
													hide-details="auto"
													:rules="[requiredNm]"
												></v-text-field>
											</td>
											<td>
												<v-select
													:items="selectYn"
													item-text="str"
													item-value="val"
													v-model="item2.useYn"
													outlined
													single-line
													hide-details="auto"
												></v-select>
											</td>
											<td>
												<v-select
													:items="sortNumList"
													item-text="str"
													item-value="val"
													v-model="item2.groupSort"
													outlined
													single-line
													hide-details="auto"
													:rules="[requiredSort]"
												></v-select>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</v-form>
				</div>
				<div class="btn_area center pt-8">
					<v-btn
						color="primary"
						large
						outlined
						@click="
							gf_router('adm019', {
								searchKey: $route.params.searchKey,
								searchKey2: $route.params.searchKey2,
							})
						"
					>
						취소
					</v-btn>
					<v-btn color="primary" large @click="Modify()">
						{{ btnText }}하기
					</v-btn>
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
			dialog: false,
			page: 1,
			pageCount: 0,
			singleSelect: false,

			// 개별부
			cmnGroupTypeCd: '', // 구분
			cmnGroupCd: '', // 그룹코드ID
			cmnGroupNm: '', // 그룹코드명
			cmnGroupDesc: '', // 그룹코드명
			useYn: 'Y', // 사용여부
			selectYn: [
				{ str: 'Y', val: 'Y' },
				{ str: 'N', val: 'N' },
			],

			// 반복부
			comCodeRows: [], // 리스트
			allChecked: false, // 전체체크
			checked: [], // 체크
			sortNumList: [], // 디스플레이순서

			// 중복체크
			jungBokChk: false, // 단어중복체크
			jungBokChkText: '', // 중복체크 완료 단어
			btnText: '등록',

			// rule 체크
			reqCmnGroupTypeCd: value => !!value || '구분을 선택해 주세요.',
			reqCmnGroupCd: [
				() => !!this.cmnGroupCd || '그룹코드ID를 입력해 주세요.',
				() => !!this.jungBokChk || '중복체크를 해주세요.',
			],
			reqCmnGroupNm: value => !!value || '그룹코드명을 입력해 주세요.',
			reqCmnGroupDesc: value => !!value || '설명을 입력해 주세요.',

			requiredCd: value => !!value || '코드ID를 입력해주세요.',
			requiredNm: value => !!value || '코드명을 입력해주세요.',
			requiredSort: value => !!value || '디스플레이순서를 선택해 주세요.',
		}
	},

	methods: {
		Modify() {
			const jbCheck = this.$refs.form.validate()
			const mainCheck = this.$refs.form2.validate()
			if (!jbCheck || !mainCheck) {
				return
			}

			const duplicate = this.isDuplicate()
			if (!duplicate) return

			let url = '/api/admin/insertCmnCode'
			if (this.btnText == '수정') {
				url = '/api/admin/updateCmnCode'
			}

			axios
				.post(url, {
					cmnGroupType: this.cmnGroupTypeCd, // 구분
					cmnGroupCd: this.cmnGroupCd, // 그룹코드ID
					cmnGroupNm: this.cmnGroupNm, // 그룹코드명
					cmnGroupDesc: this.cmnGroupDesc, // 설명
					sysEmpid: 'S017069',
					codeList: this.comCodeRows,
				})
				.then(res => {
					if (res) {
						alert(this.btnText + '되었습니다.')
						this.gf_router('adm019', {
							searchKey: this.$route.params.searchKey,
							searchKey2: this.$route.params.searchKey2,
						})
					}
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		addRow() {
			this.sortNumList.push({
				str: parseInt(this.sortNumList.length, 0) + 1,
				val: parseInt(this.sortNumList.length, 0) + 1,
			})

			this.comCodeRows.push({
				groupCd: '',
				groupNm: '',
				useYn: 'Y',
				groupSort: '',
			})
		},
		removeRow() {
			if (this.allChecked) {
				this.comCodeRows = []
				this.checked = []
				this.sortNumList = []
				this.allChecked = false
				return
			}

			for (let i = this.checked.length; i > 0; i--) {
				this.comCodeRows.splice(this.checked[i - 1], 1)
			}

			for (let i = 0; i < this.checked.length; i++) {
				this.sortNumList.pop()
			}
			this.checked = []
		},

		select(target) {
			const index = this.checked.indexOf(target)
			return index >= 0 ? { checked: true } : { checked: false }
		},

		checkedAll(check) {
			if (check) {
				for (let key in this.comCodeRows) {
					this.checked.push(key)
				}
			} else {
				this.checked = []
			}
		},

		fn_jungBokChk() {
			if (!this.cmnGroupCd) {
				alert('그룹코드 ID를 입력해주세요.')
				return
			}

			axios
				.get('/api/admin/CodeMgtIsCode', {
					params: {
						cmnGroupCd: this.cmnGroupCd,
					},
				})
				.then(res => {
					console.log(JSON.stringify(res))
					if (res.data.result > 0) {
						alert('이미 등록된 그룹코드 ID입니다.')
						this.jungBokChk = false
						this.$refs.form.validate()
					} else {
						if (
							confirm(
								'등록가능한 그룹코드 ID입니다.\n등록하시겠습니까?',
							)
						) {
							this.jungBokChk = true
							this.jungBokChkText = this.cmnGroupCd
							this.$refs.form.validate()
						}
					}
				})
				.catch(err => {
					alert('err : ' + err)
				})
		},

		isDuplicate() {
			const codeArr = []
			const sortArr = []
			let chkUse = 0
			for (let i in this.comCodeRows) {
				codeArr.push(this.comCodeRows[i].groupCd)
				sortArr.push(this.comCodeRows[i].groupSort)
				if (this.comCodeRows[i].useYn == 'Y') {
					chkUse++
				}
			}

			if (chkUse == 0 && this.useYn == 'Y') {
				alert(
					'사용여부가 전부N입니다.\n기본 정보의 사용여부를 N으로 변경해 주세요.',
				)
				return
			}

			const codeDup = codeArr.some(function (x) {
				return codeArr.indexOf(x) !== codeArr.lastIndexOf(x)
			})

			const sortDup = sortArr.some(function (x) {
				return sortArr.indexOf(x) !== sortArr.lastIndexOf(x)
			})

			if (codeDup) {
				alert('중복된 코드ID가 있습니다.')
				return false
			}

			if (sortDup) {
				alert('중복된 디스플레이순서가 있습니다.')
				return false
			}

			return true
		},
	},

	created() {
		// 값이 있을경우 수정
		if (this.$route.params.cmnGroupCd) {
			this.btnText = '수정'
			this.jungBokChk = true
			axios
				.get('/api/admin/CodeMgtDetail', {
					params: { cmnGroupCd: this.$route.params.cmnGroupCd },
				})
				.then(res => {
					this.cmnGroupTypeCd = res.data.cmnGroupTypeCd // 구분
					this.cmnGroupCd = res.data.cmnGroupCd // 그룹코드ID
					this.cmnGroupNm = res.data.cmnGroupNm // 그룹코드명
					this.cmnGroupDesc = res.data.cmnGroupDesc // 설명
					this.comCodeRows = res.data.list
					for (let idx in res.data.list) {
						this.sortNumList.push({
							str: parseInt(idx, 0) + 1,
							val: parseInt(idx, 0) + 1,
						})
					}
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		}
	},
}
</script>
