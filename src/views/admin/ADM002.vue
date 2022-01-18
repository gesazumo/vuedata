<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>단어 등록 및 수정</h5>
			<div class="item_box">
				<i class="mdi mdi-information-outline"></i>
				단어 중복체크는 한글단어명과 영문약어명을 조합하여 수행합니다.
				<div class="table_box">
					<v-form ref="form2" onsubmit="return false;">
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="20%" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>
										한글단어명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											v-model="korWord"
											placeholder="한글단어명을 입력해 주세요"
											single-line
											clearable
											outlined
											hide-details="auto"
											:rules="korWord_rule"
										>
										</v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										영문약어명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-form
											ref="form"
											onsubmit="return false;"
										>
											<v-text-field
												v-model="engWordShort"
												placeholder="영어약문명을 입력해 주세요."
												single-line
												clearable
												outlined
												hide-details="auto"
												:rules="engWordShort_rule"
											>
												<template slot="append-outer">
													<v-btn
														color="primary"
														@click="fn_jungBokChk()"
														dark
													>
														중복체크
													</v-btn>
												</template></v-text-field
											>
										</v-form>
									</td>
								</tr>
								<tr>
									<th>
										영문단어명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											v-model="engWord"
											placeholder="영문단어명을 입력해 주세요"
											single-line
											clearable
											outlined
											hide-details="auto"
											:rules="engWord_rule"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										단어구분
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-radio-group v-model="btnWordGb" row>
											<v-radio label="단일어" value="1"
												>단일어</v-radio
											>
											<v-radio label="복합어" value="2"
												>복합어</v-radio
											>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>
										정의 <span class="asterisk">필수</span>
									</th>
									<td>
										<v-textarea
											v-model="strSummarize"
											placeholder="단어정의를 입력해 주세요."
											single-line
											clearable
											outlined
											hide-details="auto"
											:rules="strSummarize_rule"
										></v-textarea>
									</td>
								</tr>
							</tbody>
						</table>
					</v-form>
				</div>
			</div>
			<div class="btn_area">
				<button
					class="cancel large"
					@click="
						gf_router('adm001', {
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
//import axios from 'axios'
import { getAxios } from '@/api/modules/commonAPI'
import { postAxios } from '@/api/modules/commonAPI'

export default {
	data() {
		return {
			korWord: '', // 한글단어명
			engWord: '', // 영문단어명
			engWordShort: '', // 영문약어명
			btnWordGb: '1', // 단어구분
			strSummarize: '', // 정의
			jungBokChk: false, // 단어중복체크
			jungBokChkKorText: '', // 중복체크 한글 단어
			jungBokChkEngText: '', // 중복체크 영문 단어
			btnText: '등록',

			// rules
			korWord_rule: [
				() => !!this.korWord || '한글단어명을 입력해 주세요.',
			],
			engWordShort_rule: [
				() =>
					!!this.engWordShort ||
					'영문약어명을 입력해 주세요.(대소문자 구분, 공백불가)',
				() => !!this.jungBokChk || '중복체크를 해주세요.',
			],
			engWord_rule: [
				() =>
					!!this.engWord ||
					'영문단어명을 입력해 주세요.(대소문자 구분)',
			],
			strSummarize_rule: [
				() => !!this.strSummarize || '단어정의를 입력해 주세요.',
			],
		}
	},
	methods: {
		async init() {
			// 값이 있을경우 수정
			if (this.$route.params.inHanglWordName) {
				this.btnText = '수정'
				this.jungBokChk = true

				const _param = {
					inHanglWordName: this.$route.params.inHanglWordName,
					inEngAbrvnName: this.$route.params.inEngAbrvnName,
				}

				try {
					const url = '/admin/meta/getWordCon'
					const { data } = await getAxios(url, _param)
					this.korWord = data.hanglWordName
					this.jungBokChkKorText = data.hanglWordName
					this.engWord = data.engWordName
					this.engWordShort = data.engAbrvnName
					this.jungBokChkEngText = data.engAbrvnName
					this.btnWordGb = data.smwrCmwrDstic
					this.strSummarize = data.hanglWordDefin
				} catch (err) {
					this.$showError(err)
				}

				// axios
				// 	.get('/api/admin/meta/getWordCon?', {
				// 		params: {
				// 			inHanglWordName: this.$route.params.inHanglWordName,
				// 			inEngAbrvnName: this.$route.params.inEngAbrvnName,
				// 		},
				// 	})
				// 	.then(res => {
				// 		this.korWord = res.data.hanglWordName
				// 		this.jungBokChkKorText = res.data.hanglWordName
				// 		this.engWord = res.data.engWordName
				// 		this.engWordShort = res.data.engAbrvnName
				// 		this.jungBokChkEngText = res.data.engAbrvnName
				// 		this.btnWordGb = res.data.smwrCmwrDstic
				// 		this.strSummarize = res.data.hanglWordDefin
				// 	})
				// 	.catch(err => {
				// 		console.log('err : ' + err)
				// 	})
			}
		},
		async Modify() {
			const jbCheck = this.$refs.form.validate()
			const mainCheck = this.$refs.form2.validate()
			if (!jbCheck || !mainCheck) {
				return
			}

			if (this.korWord != this.jungBokChkKorText) {
				alert(
					'한글단어명이 변경되었습니다.\n중복체크를 진행해주시기 바랍니다.',
				)
				this.$refs.form.validate()
				return
			}

			if (this.engWordShort != this.jungBokChkEngText) {
				alert(
					'영어약문명이 변경되었습니다.\n중복체크를 진행해주시기 바랍니다.',
				)
				this.$refs.form.validate()
				return
			}

			if (
				!(await this.$confirm(
					'단어를 ' + this.btnText + ' 하시겠습니까?',
					this.btnText + '하기',
				))
			)
				return

			// if (!confirm('단어를 ' + this.btnText + ' 하시겠습니까?')) {
			// 	return
			// }

			let _url = '/admin/meta/regWordCon'
			if (this.btnText == '수정') {
				_url = '/admin/meta/modWordCon'
			}

			const _param = {
				hanglWordName: this.korWord, // 한글단어명
				engWordName: this.engWord, // 영어 단어명
				engAbrvnName: this.engWordShort, // 영어약어명
				smwrCmwrDstic: this.btnWordGb, // 단어구분
				hanglWordDefin: this.strSummarize, // 정의
				userNo: 'S017069', // 하드코딩
				screnRegiYn: 'Y',
			}

			try {
				await postAxios(_url, _param)
				this.$showInfo(this.btnText + '되었습니다.')
				this.gf_router('adm001', {
					searchKey: this.$route.params.searchKey,
					searchKey2: this.$route.params.searchKey2,
				})
			} catch (err) {
				this.$showError(err)
			}

			// axios
			// 	.post(url, {
			// 		hanglWordName: this.korWord, // 한글단어명
			// 		engWordName: this.engWord, // 영어 단어명
			// 		engAbrvnName: this.engWordShort, // 영어약어명
			// 		smwrCmwrDstic: this.btnWordGb, // 단어구분
			// 		hanglWordDefin: this.strSummarize, // 정의
			// 		userNo: 'S017069',
			// 		screnRegiYn: 'Y',
			// 	})
			// 	.then(res => {
			// 		if (res) {
			// 			alert('등록되었습니다.')
			// 			this.gf_router('adm001', {
			// 				searchKey: this.$route.params.searchKey,
			// 				searchKey2: this.$route.params.searchKey2,
			// 			})
			// 		}
			// 	})
			// 	.catch(err => {
			// 		console.log('err : ' + err)
			// 	})
		},
		async Delete() {
			let param = []
			param.push({
				hanglWordName: this.$route.params.inHanglWordName,
				engAbrvnName: this.$route.params.inEngAbrvnName,
			})

			const _param = []
			_param.push({
				hanglWordName: this.$route.params.inHanglWordName,
				engAbrvnName: this.$route.params.inEngAbrvnName,
			})

			try {
				const url = '/admin/meta/delManWordCon'
				await postAxios(url, _param)
				this.$showInfo('삭제되었습니다.')
				this.gf_router('adm001', {
					searchKey: this.$route.params.searchKey,
					searchKey2: this.$route.params.searchKey2,
				})
			} catch (err) {
				this.$showError(err)
			}
			// axios
			// 	.post('/api/admin/meta/delManWordCon', {
			// 		data: param,
			// 		userNo: 'S017069',
			// 	})
			// 	.then(res => {
			// 		if (res) {
			// 			alert('삭제되었습니다.')
			// 		}
			// 	})
			// 	.catch(err => {
			// 		console.log('err : ' + err)
			// 	})
		},

		// 중복체크
		async fn_jungBokChk() {
			if (!this.korWord) {
				alert('한글단어명을 입력해주세요.')
				return
			}

			if (!this.engWordShort) {
				alert('영문약어명을 입력해주세요.')
				return
			}

			const _param = {
				inHanglWordName: this.korWord,
				inEngAbrvnName: this.engWordShort,
			}

			try {
				const _url = '/admin/meta/getWordCon'
				const { data } = await getAxios(_url, _param)
				if (data) {
					alert('이미 등록된 단어입니다.')
					this.jungBokChk = false
					this.$refs.form.validate()
				} else {
					if (
						await this.$confirm(
							'등록가능한 단어입니다.\n등록하시겠습니까?',
							'등록하기',
						)
					) {
						this.jungBokChk = true
						this.jungBokChkKorText = this.korWord
						this.jungBokChkEngText = this.engWordShort
						this.$refs.form.validate()
					}
				}
			} catch (err) {
				this.$showError(err)
			}

			// axios
			// 	.get('/api/admin/meta/getWordCon', {
			// 		params: {
			// 			inHanglWordName: this.korWord,
			// 			inEngAbrvnName: this.engWordShort,
			// 		},
			// 	})
			// 	.then(res => {
			// 		if (res.data) {
			// 			alert('이미 등록된 단어입니다.')
			// 			this.jungBokChk = false
			// 			this.$refs.form.validate()
			// 		} else {
			// 			if (
			// 				confirm('등록가능한 단어입니다.\n등록하시겠습니까?')
			// 			) {
			// 				this.jungBokChk = true
			// 				this.jungBokChkKorText = this.korWord
			// 				this.jungBokChkEngText = this.engWordShort
			// 				this.$refs.form.validate()
			// 			}
			// 		}
			// 	})
			// 	.catch(err => {
			// 		alert('err : ' + err)
			// 	})
		},
	},
	created() {
		this.init()
	},
}
</script>
