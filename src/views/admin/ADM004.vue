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
									<v-text-field
										placeholder="인스턴스명을 입력하세요"
										single-line
										clearable
										outlined
										hide-details="auto"
									>
										<template slot="append-outer">
											<v-btn color="primary" dark>
												중복체크
											</v-btn>
										</template>
									</v-text-field>
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
														<strong
															>인스턴스코드</strong
														>
													</td>
													<td>
														<strong
															>인스턴스코드
															정의</strong
														>
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
															v-model="modelText"
															:rules="
																() =>
																	!!modelText ||
																	'인스턴스코드를 입력해주세요.'
															"
														/>
													</td>
													<td>
														<input
															type="text"
															v-model="modelText2"
															:rules="
																() =>
																	!!modelText2 ||
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
			modelText: [],
			modelText2: [],
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
		}
	},
	methods: {
		Modify() {
			console.log(JSON.stringify(this.instanceRows.length))
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
			}

			// let url = '/admin/meta/regInstnc'
			// if (this.btnText == '수정') {
			// 	url = '/admin/meta/modInstnc'
			// }

			// if (!confirm('단어를 ' + this.btnText + ' 하시겠습니까?')) {
			// 	return
			// }

			// axios
			// 	.post(url, {
			// 		// hanglWordName: this.korWord, // 한글단어명
			// 		// engWordName: this.engWord, // 영어 단어명
			// 		// engAbrvnName: this.engWordShort, // 영어약어명
			// 		// smwrCmwrDstic: this.btnWordGb, // 단어구분
			// 		// hanglWordDefin: this.strSummarize, // 정의
			// 		// sysEmpid: 'S017069',
			// 		// screnRegiYn: 'Y',
			// 	})
			// 	.then(res => {
			// 		if (res) {
			// 			alert('등록되었습니다.')
			// 			this.gf_router('adm003', {
			// 				searchKey: this.$route.params.searchKey,
			// 				searchKey2: this.$route.params.searchKey2,
			// 			})
			// 		}
			// 	})
			// 	.catch(err => {
			// 		console.log('err : ' + err)
			// 	})
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

		// /admin/meta/getInstncCon
	},

	created() {
		// 값이 있을경우 수정
		if (this.$route.params.instncIdnfr) {
			this.btnText = '수정'
			this.jungBokChk = true
			axios
				.post('/admin/meta/getInstncCon?', {
					inInstncIdnfr: this.$route.params.instncIdnfr,
				})
				.then(res => {
					console.log(JSON.stringify(res))
					// this.instncIdnfr = res.data.instncIdnfr // 식별자
					// this.instncCd = res.data.instncCd // 인스턴스명
					// this.instncCtnt = res.data.instncCtnt // 인스턴스 정의

					// this.korWord = res.data.hanglWordName
					// this.jungBokChkText = res.data.hanglWordName
					// this.engWord = res.data.engWordName
					// this.engWordShort = res.data.engAbrvnName
					// this.btnWordGb = res.data.smwrCmwrDstic
					// this.strSummarize = res.data.hanglWordDefin
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		}
	},
}
</script>
