<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>테이블 등록 및 수정</h5>
				<v-form ref="form2" onsubmit="return false;">
					<div class="item_box">
						<div class="table_box">
							<p class="font-weight-bold pb-3">테이블 정보</p>
							<table class="tb_write">
								<caption>
									table caption
								</caption>
								<colgroup>
									<col width="230" />
									<col width="" />
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
												:items="$getCmCode('TAH000004')"
												item-text="cmnCdNm"
												item-value="cmnCd"
												v-model="dtCgry"
												placeholder="카테고리를 선택하세요."
												single-line
												outlined
												hide-details="auto"
												@change="changeGb($event)"
											></v-select>
										</td>
										<th>
											계열사구분
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-select
												:items="$getCmCode('TAH000002')"
												item-text="cmnCdNm"
												item-value="cmnCd"
												v-model="groupCoCd"
												placeholder="계열사를 선택하세요."
												single-line
												outlined
												hide-details="auto"
											></v-select>
										</td>
									</tr>
									<tr v-if="display1 == 'A'">
										<th>
											마이데이터 업권
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-select
												:items="$getCmCode('TAH000006')"
												item-text="cmnCdNm"
												item-value="cmnCd"
												v-model="dtBsznDc"
												placeholder="마이데이터 업권을 선택하세요."
												single-line
												outlined
												hide-details="auto"
											></v-select>
										</td>
									</tr>
									<tr v-if="display1 == 'B'">
										<th>
											특화데이터 구분
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-select
												:items="$getCmCode('TAH000005')"
												item-text="cmnCdNm"
												item-value="cmnCd"
												v-model="dtBzwkDc"
												placeholder="특화데이터 구분을 선택하세요."
												single-line
												outlined
												hide-details="auto"
											></v-select>
										</td>
									</tr>
									<tr v-if="display1 == 'C'">
										<th>
											Feature Store 구분
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-select
												v-model="fetrStrName"
												placeholder="Feature Store 구분을 선택하세요."
												single-line
												outlined
												hide-details="auto"
											></v-select>
										</td>
									</tr>
									<tr>
										<th>
											테이블명
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-form
												ref="form"
												onsubmit="return false;"
											>
												<v-text-field
													v-model="tblId"
													placeholder="테이블명을 입력해 주세요."
													single-line
													clearable
													outlined
													hide-details="auto"
													:rules="tblId_rule"
												>
													<template
														slot="append-outer"
													>
														<v-btn
															color="primary"
															dark
															@click="
																fn_jungBokChk()
															"
														>
															중복체크
														</v-btn>
													</template>
												</v-text-field>
											</v-form>
										</td>
										<th>
											테이블한글명
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-text-field
												v-model="tblHanglName"
												placeholder="테이블한글명을 입력해 주세요."
												single-line
												clearable
												outlined
												hide-details="auto"
												:rules="[reqTblHanglName]"
											></v-text-field>
										</td>
									</tr>
									<tr>
										<th>
											테이블 정의
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-text-field
												v-model="tblDefin"
												placeholder="테이블 정의를 입력해 주세요."
												single-line
												clearable
												outlined
												hide-details="auto"
												:rules="[reqTblDefin]"
											></v-text-field>
										</td>
									</tr>
									<tr>
										<th>
											보관기간
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-text-field
												v-model="keepTrmNomn"
												placeholder="보관기간을 입력해 주세요."
												single-line
												clearable
												outlined
												:rules="[reqKeepTrmNomn]"
												hide-details="auto"
												style="width: 312px"
											>
												<template slot="append-outer">
													<div
														style="
															line-height: 40px;
															padding-left: 10px;
														"
													>
														개월
													</div>
												</template>
											</v-text-field>
										</td>
										<th>
											전송주기
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-select
												v-model="trsmtCycl"
												:items="selectCycle"
												item-text="str"
												item-value="value"
												placeholder="전송주기를 선택해 주세요"
												single-line
												outlined
												hide-details="auto"
											></v-select>
										</td>
									</tr>
									<tr>
										<th>
											타켓파일경로
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-text-field
												v-model="trgtFilePath"
												placeholder="/data/{KXX, KBO}/RCV/"
												single-line
												clearable
												outlined
												:rules="[reqTrgtFilePath]"
												hide-details="auto"
											></v-text-field>
										</td>
									</tr>
									<tr>
										<th>
											타켓파일명1
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-text-field
												v-model="trgtFileNm1"
												placeholder="KBO_KFG_D_IRP-001_001_YYYYMMDD.dat"
												single-line
												clearable
												outlined
												:rules="[reqTrgtFileNm1]"
												hide-details="auto"
											></v-text-field>
										</td>
									</tr>
									<tr>
										<th>타켓파일명2</th>
										<td colspan="3">
											<v-text-field
												v-model="trgtFileNm2"
												placeholder="KBO_KFG_D_IRP-001_001_YYYYMMDD.chk"
												single-line
												clearable
												outlined
												hide-details="auto"
											></v-text-field>
										</td>
									</tr>
									<tr>
										<th>파티션테이블 여부</th>
										<td colspan="3">
											<v-radio-group
												row
												hide-details="auto"
												v-model="patinYn"
											>
												<v-radio
													label="No"
													value="N"
												></v-radio>
												<v-radio
													label="Yes"
													value="Y"
												></v-radio>
											</v-radio-group>
										</td>
									</tr>
									<tr v-if="patinYn == 'Y'">
										<th>
											파티션타입내용
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-text-field
												v-model="patinKey"
												placeholder="파티션 타입내용을 입력해 주세요."
												single-line
												clearable
												outlined
												:rules="[reqPatinKey]"
												hide-details="auto"
											></v-text-field>
										</td>
									</tr>
								</tbody>
							</table>

							<p class="font-weight-bold pb-3 mt-10">컬럼 정보</p>
							<div class="btn_area">
								<v-btn color="primary" dark @click="addRow()">
									행추가하기
								</v-btn>
								<v-btn class="box" small @click="removeRow()">
									삭제하기
								</v-btn>
							</div>
							<v-data-table
								:headers="headers"
								:items="itemList"
								:items-per-page="itemsPerPage"
								hide-default-footer
								class="elevation-1"
							>
								<template v-slot:item="row">
									<tr>
										<td>
											<input
												type="checkbox"
												v-model="checked"
												:id="row.index"
												:value="row.index"
												:class="select(row.index)"
											/>
										</td>
										<td>
											<v-text-field
												label="선택"
												outlined
												single-line
												hide-details="auto"
												readonly
												v-model="row.item.clmnId"
												:rules="[reqColClmnId]"
												@click="openPop(row, '1')"
											>
												<template v-slot:prepend-inner>
													<v-icon
														color="gray"
														style="
															font-size: 14px;
															margin-top: -4px !important;
														"
														@click="
															openPop(row, '1')
														"
													>
														fa fa-search
													</v-icon>
												</template>
											</v-text-field>
										</td>
										<td>
											{{ row.item.attriName }}
										</td>
										<td>
											<v-select
												:items="selectYn"
												item-text="str"
												item-value="val"
												v-model="row.item.pkYn"
												outlined
												single-line
												hide-details="auto"
											></v-select>
										</td>
										<td>
											<v-select
												:items="selectYn"
												item-text="str"
												item-value="val"
												v-model="row.item.nulYn"
												outlined
												single-line
												hide-details="auto"
											></v-select>
										</td>
										<td>
											<v-select
												:items="selectYn"
												item-text="str"
												item-value="val"
												v-model="row.item.psnInfYn"
												outlined
												single-line
												hide-details="auto"
											></v-select>
										</td>
										<td>
											<v-select
												:items="selectType"
												item-text="str"
												item-value="val"
												v-model="row.item.dataTyp"
												outlined
												single-line
												hide-details="auto"
											></v-select>
										</td>
										<td>
											<v-text-field
												v-model="row.item.dataLen"
												outlined
												single-line
												hide-details="auto"
												:rules="[reqColDataLen]"
											></v-text-field>
										</td>
										<td>
											<v-text-field
												v-model="row.item.decptLen"
												outlined
												single-line
												hide-details="auto"
												style="width: 100%"
												:disabled="
													row.item.dataTyp ==
													'DECIMAL'
														? false
														: true
												"
											>
											</v-text-field>
										</td>
										<td>
											<v-text-field
												outlined
												single-line
												hide-details="auto"
												v-model="row.item.instncName"
												:rules="[reqColInstncName]"
												@click="openPop(row, '2')"
											>
												<template v-slot:prepend-inner>
													<v-icon
														color="gray"
														style="
															font-size: 14px;
															margin-top: -4px !important;
														"
														@click="
															openPop(row, '2')
														"
													>
														fa fa-search
													</v-icon>
												</template>
											</v-text-field>
										</td>
										<td>{{ row.item.instncIdnfr }}</td>
										<td>
											<v-text-field
												v-model="row.item.clmnDefin"
												outlined
												single-line
												hide-details="auto"
												:rules="[reqColClmnDefin]"
											>
											</v-text-field>
										</td>
										<td>
											<v-text-field
												v-model="row.item.rmark"
												outlined
												single-line
												hide-details="auto"
											>
											</v-text-field>
										</td>
										<td style="display: none">
											<v-text-field
												v-model="row.item.clmnSeq"
											>
											</v-text-field>
										</td>
									</tr>
								</template>
							</v-data-table>

							<p class="font-weight-bold pb-3 mt-10">
								결재 요청 정보
							</p>
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
											테이블 수정 요청 사유
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-textarea
												v-model="aprvalDmndCtnt"
												single-line
												outlined
												placeholder="요청 사유를 입력 하세요"
												:rules="[reqAprvalDmndCtnt]"
												hide-details="auto"
											>
											</v-textarea>
										</td>
									</tr>
									<tr>
										<th>결재자</th>
										<td>
											<v-text-field
												v-model="aprvalPsnInfo"
												single-line
												outlined
												filled
												disabled
												hide-details="auto"
											>
											</v-text-field>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</v-form>
				<div class="btn_area" align="center">
					<v-btn
						class="cancel large"
						@click="
							gf_router('adm005', {
								searchKey: $route.params.searchKey,
								searchKey2: $route.params.searchKey2,
							})
						"
					>
						취소
					</v-btn>
					<v-btn color="primary" dark @click="Modify()">
						{{ btnText }}요청하기
					</v-btn>
				</div>
			</div>
		</div>
		<div v-if="popupVal1">
			<ADM068 @close:popup="popupClose" @selectColumn="selectColumn" />
		</div>
		<div v-if="popupVal2">
			<ADM069
				@close:popup="popupClose"
				@selectInstance="selectInstance"
			/>
		</div>
	</v-app>
</template>
<script>
import axios from 'axios'
import ADM068 from '@/views/admin/ADM068.vue'
import ADM069 from '@/views/admin/ADM069.vue'

export default {
	components: {
		ADM068,
		ADM069,
	},
	data() {
		return {
			dialog: false,
			selected: [],
			display1: 'A',
			itemsPerPage: 100,
			btnText: '등록',
			colLength: '',

			// 팝업
			popupVal1: false,
			popupVal2: false,
			pRow: 0,

			// 중복체크
			jungBokChk: false, // 테이블명중복체크
			jungBokChkText: '', // 중복체크 완료 테이블명

			// 테이블 정보
			dtCgry: 'A', // (구분)카테고리
			groupCoCd: 'K00', // (계열사구분)그룹회사코드
			dtBsznDc: '01', // 마이데이터 업권코드
			dtBzwkDc: '01', // 특화데이터 업무코드
			fetrStrName: '', // FeatureStore명
			tblId: '', // 테이블명
			tblHanglName: '', // 테이블 한글명
			tblDefin: '', // 테이블 정의
			keepTrmNomn: '', // 보관기간
			trsmtCycl: '일', // 전송주기
			selectCycle: [
				{ str: '일', value: '일' },
				{ str: '주', value: '주' },
				{ str: '월', value: '월' },
				{ str: '년', value: '년' },
			],
			trgtFilePath: '', //타겟파일경로
			trgtFileNm1: '', // 타겟파일명1
			trgtFileNm2: '', // 타겟파일명2
			patinYn: 'N', // 파티션테이블여부
			patinKey: '', // 파티션타입내용

			// 컬럼정보
			checked: [],
			selectYn: [
				{ str: 'Y', val: 'Y' },
				{ str: 'N', val: 'N' },
			],
			// clmnId: '', // 칼럼명
			// attriName: '', // 영문컬럼명
			// pkYn: '', // PK여부
			// nulYn: '', // 널리티구분 없음
			// psnInfYn: '', // 개인정보여부
			selectType: [
				{ str: 'CHAR', val: 'CHAR' },
				{ str: 'VARCHAR', val: 'VARCHAR' },
				{ str: 'NUMBER', val: 'NUMBER' },
				{ str: 'DECIMAL', val: 'DECIMAL' },
				{ str: 'DATE', val: 'DATE' },
				{ str: 'BOOLEAN', val: 'BOOLEAN' },
			],
			// dataTyp: '', // 데이터타입
			// dataLen: '', // 데이터길이
			// decptLen: null, // 소수점길이
			// instncName: '', // 인스턴스명
			// instncIdnfr: '', // 인스턴스식별자
			// clmnDefin: '', // 컬럼정의
			// clmnSeq: '', // 컬럼순서
			// rMark: '', // 비고

			// 결재정보
			aprvalDmndCtnt: '', // 결재요청내용
			aprvalPsnInfo: '', // 결재자

			headers: [
				{
					text: '선택',
					align: 'center',
					width: '70px',
					sortable: false,
					fixed: true,
				},
				{
					text: '컬럼명 *',
					align: 'center',
					sortable: false,
					value: 'clmnId',
					width: '150px',
					fixed: true,
				},
				{
					text: '영문컬럼명',
					align: 'center',
					sortable: false,
					value: 'attriName',
					width: '120px',
					fixed: true,
				},
				{
					text: 'PK 여부 *',
					align: 'center',
					sortable: false,
					value: 'pkYn',
					width: '80px',
					fixed: true,
				},
				{
					text: 'Null 구분 *',
					align: 'center',
					sortable: false,
					value: 'nulYn',
					width: '80px',
					fixed: true,
				},
				{
					text: '개인정보 여부 *',
					align: 'center',
					sortable: false,
					value: 'psnInfYn',
					width: '120px',
					fixed: true,
				},
				{
					text: '데이터 타입 *',
					align: 'center',
					sortable: false,
					value: 'dataTyp',
					width: '100px',
					fixed: true,
				},
				{
					text: '데이터 길이 *',
					align: 'center',
					sortable: false,
					value: 'dataLen',
					width: '80px',
					fixed: true,
				},
				{
					text: '소수점 길이 *',
					align: 'center',
					sortable: false,
					value: 'decptLen',
					width: '80px',
					fixed: true,
				},
				{
					text: '인스턴스명 *',
					align: 'center',
					sortable: false,
					value: 'instncName',
					width: '150px',
					fixed: true,
				},
				{
					text: '식별자',
					align: 'center',
					sortable: false,
					value: 'instncIdnfr',
					width: '150px',
					fixed: true,
				},
				{
					text: '컬럼정의 *',
					align: 'center',
					sortable: false,
					value: 'clmnDefin',
					width: '150px',
					fixed: true,
				},
				{
					text: '비고',
					align: 'center',
					sortable: false,
					value: 'eee',
					width: '100px',
					fixed: true,
				},
				{
					text: '컬럼순서',
					align: ' d-none',
					sortable: false,
					value: 'clmnSeq',
				},
			],
			itemList: [],

			// rule
			// 개별부
			tblId_rule: [
				() => !!this.tblId || '테이블명을 입력해 주세요.',
				() => !!this.jungBokChk || '중복체크를 해주세요.',
			],
			reqTblHanglName: value =>
				!!value || '테이블한글명을 입력해 주세요.',
			reqTblDefin: value => !!value || '테이블 정의를 입력해 주세요.',
			reqKeepTrmNomn: value => !!value || '보관기간을 입력해 주세요.',
			reqTrgtFilePath: value =>
				!!value || '타켓파일경로를 입력해 주세요.',
			reqTrgtFileNm1: value => !!value || '타켓파일명을 입력해 주세요.',
			reqPatinKey: value => !!value || '파티션 타입내용을 입력해 주세요.',
			reqAprvalDmndCtnt: value =>
				!!value || '테이블 요청 사유를 입력해 주세요.',

			// 반복부
			reqColClmnId: value => !!value || '필수',
			reqColDataLen: value => !!value || '필수',
			reqColInstncName: value => !!value || '필수',
			reqColClmnDefin: value => !!value || '필수',
		}
	},

	methods: {
		changeGb(val) {
			this.display1 = val
		},

		addRow() {
			this.itemList.push({
				clmnId: '',
				attriName: '',
				pkYn: 'N',
				nulYn: 'N',
				psnInfYn: 'N',
				dataTyp: 'CHAR',
				dataLen: '',
				decptLen: null,
				instncName: '',
				instncIdnfr: '',
				clmnDefin: '',
				rmark: '',
				clmnSeq: '',
			})
		},
		removeRow() {
			if (this.btnText == '수정') {
				for (let i in this.checked) {
					if (this.colLength > this.checked[i]) {
						alert(
							parseInt(this.checked[i], 0) +
								1 +
								'행은 이미 등록된 컬럼으로 삭제가 불가합니다.',
						)
						return
					}
				}
			}
			if (this.checked.length == 0) {
				alert('삭제할 항목을 선택해 주세요.')
			}
			for (let i = this.checked.length; i > 0; i--) {
				this.itemList.splice(this.checked[i - 1], 1)
			}
			this.checked = []
		},

		select(target) {
			const index = this.checked.indexOf(target)
			return index >= 0 ? { checked: true } : { checked: false }
		},

		fn_jungBokChk() {
			if (!this.tblId) {
				alert('테이블명을 입력해주세요.')
				return
			}

			axios
				.get('/api/admin/meta/getTblCon', {
					params: {
						inGroupCoCd: this.groupCoCd,
						inTblId: this.tblId,
					},
				})
				.then(res => {
					if (res.data.count > 0) {
						alert('이미 등록된 테이블명입니다.')
						this.jungBokChk = false
						this.$refs.form.validate()
					} else {
						if (
							confirm(
								'등록가능한 테이블명입니다.\n등록하시겠습니까?',
							)
						) {
							this.jungBokChk = true
							this.jungBokChkText = this.tblId
							this.$refs.form.validate()
						}
					}
				})
				.catch(err => {
					alert('err : ' + err)
				})
		},

		// 팝업오픈
		openPop(row, gb) {
			this.pRow = row.index
			if (gb == '1') {
				this.popupVal1 = true
			} else {
				this.popupVal2 = true
			}
		},

		popupClose() {
			this.popupVal1 = false
			this.popupVal2 = false
		},

		selectColumn(col) {
			this.itemList[this.pRow].clmnId = col[0].hanglWordName // 컬럼 한글명
			this.itemList[this.pRow].attriName = col[0].engAbrvnName // 컬럼 영문명
			this.popupVal1 = false

			//this.selectedMemebers = col
		},

		selectInstance(ins) {
			this.itemList[this.pRow].instncName = ins[0].instncName // 인스턴스명
			this.itemList[this.pRow].instncIdnfr = ins[0].instncIdnfr // 인스턴스식별자
			this.popupVal2 = false
		},

		async tblSearch() {
			await axios
				.get('/api/admin/meta/getTblCon', {
					params: {
						inGroupCoCd: this.$route.params.inGroupCoCd,
						inTblId: this.$route.params.inTblId,
					},
				})
				.then(res => {
					this.dtCgry = res.data.dtCgry // 카테고리
					this.groupCoCd = res.data.groupCoCd // (계열사구분)그룹회사코드
					this.dtBsznDc = res.data.dtBsznDc // 마이데이터 업권코드
					this.dtBzwkDc = res.data.dtBzwkDc // 특화데이터 업무코드
					this.tblId = res.data.tblId // 테이블명
					this.tblHanglName = res.data.tblHanglName // 테이블 한글명
					this.tblDefin = res.data.tblDefin // 테이블 정의
					this.keepTrmNomn = res.data.keepTrmNomn // 보관기간
					this.trsmtCycl = res.data.trsmtCycl // 전송주기
					this.trgtFilePath = res.data.trgtFilePath //타겟파일경로
					this.trgtFileNm1 = res.data.trgtFileNm1 // 타겟파일명1
					this.trgtFileNm2 = res.data.trgtFileNm2 // 타겟파일명2
					this.patinYn = res.data.patinYn // 파티션테이블여부
					this.patinKey = res.data.patinKey // 파티션타입내용
					return true
				})
				.catch(err => {
					console.log('err : ' + err)
					return false
				})
		},

		async columnSearch() {
			await axios
				.get('/api/admin/meta/getClmnList', {
					params: {
						inGroupCoCd: this.$route.params.inGroupCoCd,
						inTblId: this.$route.params.inTblId,
					},
				})
				.then(res => {
					this.itemList = res.data.list
					this.colLength = res.data.list.length
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		Modify() {
			// 개별부 체크
			const jbCheck = this.$refs.form.validate()
			const mainCheck = this.$refs.form2.validate()
			if (!jbCheck || !mainCheck) {
				return
			}

			// 중복값 체크
			const duplicate = this.isDuplicate()
			if (!duplicate) return

			let url = '/api/admin/meta/modAprTbl'

			// 컬럼 정렬 순서
			for (let k in this.itemList) {
				if (
					this.itemList[k].dataTyp == 'DECIMAL' &&
					this.itemList[k].decptLen == null
				) {
					alert('DECIMAL 타입일경우 소수점 입력은 필수입니다.')
					return
				}

				this.itemList[k].clmnSeq = parseInt(k, 0) + 1
			}

			axios
				.post(url, {
					dtCgry: this.dtCgry, // 구분
					tGroupCoCd: this.groupCoCd, // 그룹회사코드(화면에서 선택한)
					dtBsznDc: this.dtBsznDc, // 마이데이터업권코드
					dtBzwkDc: this.dtBzwkDc, // 특화데이터업무코드
					fetrStrName: this.fetrStrName, // FeatureStore명
					tblId: this.tblId, // 테이블명
					tblHanglName: this.tblHanglName, // 테이블한글명
					tblDefin: this.tblDefin, // 테이블정의
					keepTrmNomn: this.keepTrmNomn, // 보관기간월수
					trsmtCycl: this.trsmtCycl, // 전송주기
					trgtFilePath: this.trgtFilePath, // 타겟파일경로
					trgtFileNm1: this.trgtFileNm1, // 타겟파일명1
					trgtFileNm2: this.trgtFileNm2, // 타겟파일명2
					patinYn: this.patinYn, // 파티션여부
					patinKey: this.patinKey, // 파티션키
					aprvalDmndCtnt: this.aprvalDmndCtnt, // 결재요청내용

					groupCoCd: 'KB0', // 하드코딩
					userNo: 'S017069',

					data: this.itemList, // 컬럼 반복부
				})
				.then(res => {
					if (res) {
						alert(this.btnText + '되었습니다.')
						this.gf_router('adm005', {
							searchKey: this.$route.params.searchKey,
							searchKey2: this.$route.params.searchKey2,
						})
					}
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		isDuplicate() {
			const codeArr = []
			for (let i in this.itemList) {
				codeArr.push(this.itemList[i].clmnId)
			}

			const codeDup = codeArr.some(function (x) {
				return codeArr.indexOf(x) !== codeArr.lastIndexOf(x)
			})

			if (codeDup) {
				alert('중복된 컬럼명이 있습니다.')
				return false
			}
			return true
		},
	},

	created() {
		// 값이 있을경우 수정
		if (this.$route.params.inGroupCoCd) {
			this.btnText = '수정'
			this.jungBokChk = true

			const tblSearch = this.tblSearch()
			if (tblSearch) {
				this.columnSearch()
			} else {
				alert('테이블정보 조회 실패')
			}
		}

		// 결재자 조회
		axios
			.get('/api/admin/meta/getAprvalPsn', {
				params: {},
			})
			.then(res => {
				this.aprvalPsnInfo = res.data.aprvalInfo.aprvalPsnInfo
			})
			.catch(err => {
				console.log('err : ' + err)
			})
	},
}
</script>
