<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>인스턴스 등록 및 수정</h5>
			<div class="item_box">
				<div class="table_box">
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
									식별자
									<span class="asterisk">필수</span>
								</th>
								<td>{{ instncIdnfr }}</td>
							</tr>
							<tr>
								<th>
									인스턴스명
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-form ref="form" onsubmit="return false;">
										<v-text-field
											placeholder="인스턴스명을 입력하세요"
											single-line
											clearable
											outlined
											hide-details="auto"
											v-model="instncName"
											:rules="instncName_rule"
										>
											<template slot="append-outer">
												<v-btn
													color="primary"
													@click="fn_jungBokChk()"
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
									인스턴스 정의
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-text-field
										placeholder="인스턴스 정의 입력하세요"
										single-line
										clearable
										outlined
										hide-details="auto"
										v-model="instncDefinCtnt"
										:rules="instncDefinCtnt_rule"
									>
									</v-text-field>
								</td>
							</tr>
							<tr>
								<th>
									인스턴스 코드
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-btn color="primary" dark @click="addRow">
										행추가하기
									</v-btn>
									<v-btn
										class="box"
										small
										@click="removeRow()"
									>
										삭제하기
									</v-btn>
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
																	$event
																		.target
																		.checked,
																)
															"
														/>
													</th>
													<td>
														<strong>
															인스턴스코드
														</strong>
													</td>
													<td>
														<strong>
															인스턴스코드 정의
														</strong>
													</td>
												</tr>
											</thead>
											<tbody>
												<tr
													v-for="(
														item2, index
													) in instanceRows"
													:key="index"
												>
													<td>
														<input
															type="checkbox"
															v-model="checked"
															:id="index"
															:value="index"
															:class="
																select(index)
															"
														/>
													</td>
													<td>
														<input
															type="text"
															v-model="
																item2.instncCd
															"
															:rules="
																() =>
																	!!item2.instncCd ||
																	'인스턴스코드를 입력해주세요.'
															"
														/>
													</td>
													<td>
														<input
															type="text"
															v-model="
																item2.instncCtnt
															"
															:rules="
																() =>
																	!!item2.instncCtnt ||
																	'인스턴스코드 정의를 입력해주세요.'
															"
														/>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="btn_area">
				<button
					class="cancel large"
					@click="
						gf_router('adm003', {
							searchKey: $route.params.searchKey,
							searchKey2: $route.params.searchKey2,
						})
					"
				>
					취소
				</button>
				<button class="delete large">삭제하기</button>
				<button class="regit large" @click="Modify()">
					{{ btnText }}하기
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'

export default {
	data() {
		return {
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			allChecked: false,
			checked: [],
			instanceRows: [],
			jungBokChk: false, // 단어중복체크
			jungBokChkText: '', // 중복체크 완료 단어
			instncIdnfr: '', // 식별자
			instncName: '', // 인스턴스명
			instncDefinCtnt: '', // 인스턴스정의
			btnText: '등록',
			headers: [
				{
					text: '인스턴스 코드',
					align: 'center',
					sortable: false,
				},
				{
					text: '인스턴스코드 정의',
					align: 'center',
					sortable: false,
				},
			],

			instncName_rule: [
				() => !!this.instncName || '인스턴스명을 입력해 주세요.',
				() => !!this.jungBokChk || '중복체크를 해주세요.',
			],
			instncDefinCtnt_rule: [
				() =>
					!!this.instncDefinCtnt || '인스턴스 정의를 입력해 주세요.',
			],
		}
	},
	methods: {
		Modify() {
			if (this.instanceRows.length == 0) {
				alert('인스턴스 코드를 등록해주시기 바랍니다.')
				return
			} else {
				for (let i in this.instanceRows) {
					if (
						this.instanceRows[i].instncCd == '' ||
						this.instanceRows[i].instncCtnt == ''
					) {
						alert('인스턴스코드를 입력해 주시기 바랍니다.')
						return
					}
				}

				let url = '/api/admin/meta/regInstncAll'
				if (this.btnText == '수정') {
					url = '/api/admin/meta/modInstncAll'
				}

				axios
					.post(url, {
						instncIdnfr: this.instncIdnfr, // 식별자
						instncName: this.instncName, // 인스턴스명
						instncDefinCtnt: this.instncDefinCtnt, // 인스턴스정의
						incdLen: this.instanceRows[0].instncCd.length, // 코드길이
						userNo: 'S017069',
						data: this.instanceRows,
					})
					.then(res => {
						if (res) {
							alert(this.btnText + '되었습니다.')
							this.gf_router('adm003', {
								searchKey: this.$route.params.searchKey,
								searchKey2: this.$route.params.searchKey2,
							})
						}
					})
					.catch(err => {
						console.log('err : ' + err)
					})
			}
		},

		addRow() {
			this.instanceRows.push({
				instncCd: '',
				instncCtnt: '',
			})
		},
		removeRow() {
			if (this.allChecked) {
				this.instanceRows = []
				this.checked = []
				this.allChecked = false
				return
			}

			for (let i = this.checked.length; i > 0; i--) {
				this.instanceRows.splice(this.checked[i - 1], 1)
			}
			this.checked = []
		},

		select(target) {
			const index = this.checked.indexOf(target)
			return index >= 0 ? { checked: true } : { checked: false }
		},

		checkedAll(check) {
			if (check) {
				for (let key in this.instanceRows) {
					this.checked.push(key)
				}
			} else {
				this.checked = []
			}
		},

		fn_jungBokChk() {
			axios
				.get('/api/admin/meta/getInstncList', {
					params: {
						inInstncName: this.instncName,
						inCon: '1',
					},
				})
				.then(res => {
					if (res.data.count > 0) {
						alert('이미 등록된 단어입니다.')
						this.jungBokChk = false
						this.$refs.form.validate()
					} else {
						if (
							confirm('등록가능한 단어입니다.\n등록하시겠습니까?')
						) {
							this.jungBokChk = true
							this.jungBokChkText = this.korWord
							this.$refs.form.validate()
						}
					}
				})
				.catch(err => {
					alert('err : ' + err)
				})
		},
	},

	created() {
		// 값이 있을경우 수정
		if (this.$route.params.instncIdnfr) {
			this.btnText = '수정'
			this.jungBokChk = true
			axios
				.get('/api/admin/meta/getInstncAll?', {
					params: { inInstncIdnfr: this.$route.params.instncIdnfr },
				})
				.then(res => {
					this.instncIdnfr = res.data.instncIdnfr // 식별자
					this.instncName = res.data.instncName // 인스턴스명
					this.instncDefinCtnt = res.data.instncDefinCtnt // 인스턴스 정의
					this.instanceRows = res.data.list
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		}
	},
}
</script>
