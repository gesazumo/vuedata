<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My Project</li>
					<li>
						<i class="fa fa-chevron-right"></i> My Project 공유하기
					</li>
				</ul>
				<h3>My Project 공유하기</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no">
					<div class="page_tit">
						<h4>My Project 공유하기</h4>
						<span>
							프로젝트 종료 후 분석 결과물을 분석가 포털을 통해
							공유하거나, 계열사로 전송하여 서비스에 활용할 수
							있습니다.
						</span>
					</div>
				</div>
				<div class="s_body">
					<div class="table_box">
						<v-form ref="form" @submit.prevent>
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
									<!--분석모델-->
									<tr>
										<th>회사명</th>
										<td>
											{{
												this.userInfo != null
													? this.userInfo.groupCoNm
													: ''
											}}
										</td>
										<th>부서</th>
										<td>
											{{
												this.userInfo != null
													? this.userInfo.groupDvsnNm
													: ''
											}}
										</td>
									</tr>
									<tr>
										<th>이름</th>
										<td>
											{{
												this.userInfo != null
													? this.userInfo.userNm
													: ''
											}}
										</td>
										<th>사번</th>
										<td>
											{{
												this.userInfo != null
													? this.userInfo.userNo
													: ''
											}}
										</td>
									</tr>
									<tr>
										<th>
											프로젝트명
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-select
												v-model="projId"
												:items="projList"
												item-text="projDisplay"
												item-value="projId"
												placeholder="프로젝트를 선택하세요"
												single-line
												outlined
												hide-details="auto"
												@change="projectSelect"
											></v-select>
										</td>
									</tr>
									<tr>
										<th>프로젝트 기간</th>
										<td colspan="3">
											<date-picker
												v-model="date"
												placeholder="프로젝트 기간 선택"
												range
												value-type="YYYYMMDD"
											/>
										</td>
									</tr>
									<tr>
										<th>프로젝트 설명</th>
										<td colspan="3">
											<v-textarea
												placeholder="프로젝트 설명을 입력하세요"
												outlined
												hide-details="auto"
												:value="projectDesc"
											></v-textarea>
										</td>
									</tr>
									<tr>
										<th>프로젝트 구분</th>
										<td colspan="3">
											<v-radio-group
												row
												v-model="projectDiv"
												hide-details="auto"
												disabled
											>
												<v-radio
													v-for="item in TAH000020"
													:key="item.cmnCd"
													:label="item.cmnCdNm"
													:value="item.cmnCd"
												>
												</v-radio>
											</v-radio-group>
										</td>
									</tr>
									<tr v-if="projectDiv == '02'">
										<th>프로젝트 팀원</th>
										<td colspan="3">
											<v-data-table
												:headers="headers_team"
												:items="myProjTmmmList"
												:height="300"
												fixed-header
												disable-pagination
												disable-sort
												hide-default-footer
											>
											</v-data-table>
										</td>
									</tr>
									<tr>
										<th>분석 환경</th>
										<td colspan="3">
											<v-row>
												<v-checkbox
													v-for="item in myAnlsEvirnList"
													v-bind:key="item.cmnCd"
													v-model="item.anlsEvirnVal"
													hide-details="false"
													:label="item.cmnCdNm"
													disabled
												></v-checkbox>
											</v-row>
										</td>
									</tr>
									<tr>
										<th>
											공유 방식
											<span class="asterisk">필수</span>
											<v-tooltip
												right
												content-class="secondary tooltip-right"
											>
												<template
													v-slot:activator="{
														on,
														attrs,
													}"
												>
													<v-btn
														v-bind="attrs"
														v-on="on"
														icon
														style="
															background: none !important;
														"
													>
														<i
															class="
																fas
																fa-question-circle
															"
														></i>
													</v-btn>
												</template>
												<div>
													<p
														class="title"
														style="
															color: #fff !important;
															font-size: 16px !important;
														"
													>
														분석 결과물의 공유 및
														전송 방식을 선택할 수
														있습니다.
													</p>
													<span>
														[분석가 포털 공유]
														프로젝트 결과를 포털의
														Explore 메뉴를 통해
														공유<br />
														[계열사 전송] 분석결과를
														K-region 중계서버를 통해
														계열사 영역으로 전송<br />
														[분석결과 CI변환]
														분석결과 테이블의 분석ID
														컬럼을 CI로 변환하여
														다운로드
													</span>
												</div>
											</v-tooltip>
										</th>
										<td colspan="3">
											<v-radio-group
												row
												v-model="shareMod"
												hide-details="auto"
											>
												<v-radio
													v-for="item in TAH000034"
													:key="item.cmnCd"
													:label="item.cmnCdNm"
													:value="item.cmnCd"
												>
												</v-radio>
											</v-radio-group>
										</td>
									</tr>
								</tbody>
								<AnaShare
									v-show="shareMod == 'SM1'"
									:radio="shareRadio"
									@InitMdelRegiCd="InitMdelRegiCd"
								/>
								<AnaShareMdel
									v-if="isShareCgry('SC1')"
									:data="mdelData"
									@InitMdelRegiCd="InitMdelRegiCd"
								/>
								<AnaShareFetrStr
									v-if="isShareCgry('SC2')"
									:data="fetrStrData"
									:fetrStrs="lstS3BcktFetrStr"
									:anlsCds="lstS3BcktAnlsCd"
								/>
								<AnaShareQury
									v-if="isShareCgry('SC3')"
									:data="quryData"
									:tables="lstAthenaAthAnlsTbl"
								/>
								<AnaShareDshb
									v-if="isShareCgry('SC4')"
									:data="dshbData"
								/>
								<SendChng
									v-if="shareMod != 'SM1'"
									:data="sendChngData"
									:shareMod="shareMod"
									:aprvalInfo="aprvalInfo"
									:modelFiles="lstS3BcktModelFile"
									:tables="lstAthenaAthAnlsTbl"
									:tableClmns="lstAthenaAthAnlsCol"
								/>
							</table>
						</v-form>
					</div>
					<div class="btnArea">
						<v-btn color="primary" large outlined> 취소하기 </v-btn>
						<v-btn color="primary" large @click="Application">
							등록하기
						</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
import DatePicker from 'vue2-datepicker'

import { selectMyp01201 } from '@/api/modules/mypAPI'
import { selectMyp01202 } from '@/api/modules/mypAPI'
import { insertMyp01201 } from '@/api/modules/mypAPI'
import { insertMyp01202 } from '@/api/modules/mypAPI'

import AnaShare from '@/components/mypage/AnaShare.vue'
import AnaShareMdel from '@/components/mypage/AnaShareMdel.vue'
import AnaShareFetrStr from '@/components/mypage/AnaShareFetrStr.vue'
import AnaShareQury from '@/components/mypage/AnaShareQury.vue'
import AnaShareDshb from '@/components/mypage/AnaShareDshb.vue'
import SendChng from '@/components/mypage/SendChng.vue'

export default {
	components: {
		DatePicker,
		AnaShare,
		AnaShareMdel,
		AnaShareFetrStr,
		AnaShareQury,
		AnaShareDshb,
		SendChng,
	},
	data() {
		return {
			userInfo: null,
			projList: [],
			aprvalInfo: null,

			projId: '', // 프로젝트 ID
			projName: '',
			projectDiv: '01', // 프로젝트 구분 (개인, 팀)
			projectDesc: '', // 프로젝트 설명

			// 프로젝트 정보
			myProjInfo: null, // 프로젝트기본정보
			myAnlsEvirnList: [], // 프로젝트 분석환경정보
			myProjTmmmList: [], // 프로젝트 팀원정보
			lstS3BcktRpsntDataset: [], //분석모델 > 대표 Dataset
			lstS3BcktAnlsCd: [], //분석모델 & Feature Store > 분석코드
			lstS3BcktModelFile: [], //Feature Store & 계열사 전송 > 모델파일
			lstS3BcktFetrStr: [], //Feature Store > Feature Store명
			lstAthenaAthAnlsTbl: [], //분석쿼리 & 분석결과CI변환 > 테이블
			lstAthenaAthAnlsCol: [], //분석결과CI변환 > 컬럼

			date: null,

			// 계열사전송, CI 변환 데이터
			sendChngData: {
				modelFileName: '',
				tableName: '',
				tableClmnName: '',
				aprvalDmndCtnt: '',
			},

			// 분석결과 공유 분석모델 데이터
			mdelData: {
				name: '',
				desc: '',
				anlsMdelCd: 'AM1',
				anlsMdelRegiCd: '01',
				anlsMdelVsnCtnt: '',
				mdelFileName: '',
				rpsntDtstName: '',
			},

			// 분석결과 공유 Feature Store 데이터
			fetrStrData: {
				name: '',
				desc: '',
				fileName: '',
				anlsCdFiles: [],
				dagFileName: '',
			},

			anlsMdelSpecData: {
				anlsMdelSpecCd: '',
				anlsMdelSpecSerno: '',
				anlsMdelSpecDtailCd: '',
				anlsMdelSpecDtailCtnt: '',
			},

			// 분석결과 공유 분석쿼리 데이터
			quryData: {
				name: '',
				desc: '',
				tableName: '',
				tableHanglName: '',
				clmnName: '',
				quryCtnt: '',
			},

			// 분석결과 공유 대시보드 데이터
			dshbData: {
				name: '',
				desc: '',
				url: '',
			},

			// 공통코드
			TAH000020: [], // 프로젝트참여코드
			TAH000025: [], // 분석환경신청코드
			TAH000034: [], // 분석공유방식코드
			TAH000036: [], // 분석공유카테고리코드

			shareMod: 'SM1', // 분석공유방식

			// 공유 Radio 선택값
			shareRadio: {
				shareCgry: 'SC1', // 분석공유카테고리
				shareRang: 'SR1', // 분석공유범위
			},

			headers_team: [
				{
					text: '회사명',
					align: 'center',
					sortable: false,
					value: 'tmmmCoNm',
				},
				{
					text: '부서',
					align: 'center',
					sortable: false,
					value: 'tmmmDvsnNm',
				},
				{
					text: '이름',
					align: 'center',
					sortable: false,
					value: 'tmmmEmpNm',
				},
				{
					text: '사번',
					align: 'center',
					sortable: false,
					value: 'tmmmEmpId',
				},
			],
		}
	},

	created() {
		this.TAH000020 = this.$getCmCode('TAH000020')
		this.TAH000025 = this.$getCmCode('TAH000025')
		this.TAH000034 = this.$getCmCode('TAH000034')
		this.TAH000036 = this.$getCmCode('TAH000036')

		this.myAnlsEvirnList = Object.assign([], this.TAH000025)
		this.init()
	},

	methods: {
		async init() {
			try {
				const { data } = await selectMyp01201()
				this.userInfo = data.userInfo
				this.projList = data.projList
				this.aprvalInfo = data.aprvalInfo
				console.log(data)
			} catch (error) {
				console.log('err : ' + error)
			}
		},

		async projectSelect() {
			const param = {
				projId: this.projId,
			}

			try {
				const { data } = await selectMyp01202(param)
				this.myAnlsEvirnList = data.myAnlsEvirnList
				this.myProjTmmmList = data.myProjTmmmList
				this.lstS3BcktRpsntDataset = data.lstS3BcktRpsntDataset
				this.lstS3BcktAnlsCd = data.lstS3BcktAnlsCd
				this.lstS3BcktModelFile = data.lstS3BcktModelFile
				this.lstS3BcktFetrStr = data.lstS3BcktFetrStr
				this.lstAthenaAthAnlsTbl = data.lstAthenaAthAnlsTbl
				this.lstAthenaAthAnlsCol = data.lstAthenaAthAnlsCol

				this.myProjInfo = data.myProjInfo
				this.date = [this.myProjInfo.dateFrom, this.myProjInfo.dateTo]
				this.projectDesc = this.myProjInfo.projCtnt
				this.projectDiv = this.myProjInfo.projInvlCd
				this.projName = this.myProjInfo.projName
				console.log(data)
			} catch (error) {
				console.log('err : ' + error)
			}
		},

		async SendChngDmnd() {
			const param = {
				projId: this.projId,
				projName: this.projName,
				projInvlCd: this.projectDiv,
				projCtnt: this.projectDesc,
				dateFrom: this.myProjInfo.dateFrom,
				dateTo: this.myProjInfo.dateTo,

				anlsShareModCd: this.shareMod,

				aFltmdelFileName:
					this.shareMod == 'SM2'
						? this.sendChngData.modelFileName
						: '',
				tagetClmnName:
					this.shareMod == 'SM3'
						? this.sendChngData.tableClmnName
						: '',
				tagetTblName:
					this.shareMod == 'SM3' ? this.sendChngData.tableName : '',

				aprvalDmndCtnt: this.sendChngData.aprvalDmndCtnt,
				aprvalEmpid: this.aprvalInfo.aprvalEmpid,
			}

			try {
				const { data } = await insertMyp01202(param)
				console.log(data)

				this.$router.push({
					name: this.RouterName().toString(),
					params: {
						dmndRsult: {
							anlsRsultShareId: data.anlsRsultShareId,
							anlsShareModCd: data.anlsShareModCd,
							projId: data.projId,
						},
					},
				})
			} catch (error) {
				console.log('err : ' + error)
			}
		},

		async AnaShareDmnd() {
			const param = this.getShareParam()

			try {
				const { data } = await insertMyp01201(param)
				console.log(data)

				this.$router.push({
					name: this.RouterName().toString(),
					params: {
						dmndRsult: {
							anlsRsultShareId: data.anlsRsultShareId,
							anlsRsultShareSerno: data.anlsRsultShareSerno,
							anlsShareCgryCd: data.anlsShareCgryCd,
							anlsShareModCd: data.anlsShareModCd,
							projId: this.projId,
						},
					},
				})
			} catch (error) {
				console.log('err : ' + error)
			}
		},

		Application() {
			if (!this.$refs.form.validate()) return

			if (this.shareMod != 'SM1') {
				this.SendChngDmnd()
			} else {
				this.AnaShareDmnd()
			}
		},

		isShareCgry(code) {
			if (this.shareMod == 'SM1' && this.shareRadio.shareCgry == code)
				return true
			else return false
		},

		getShareParam() {
			if (this.isShareCgry('SC1')) return this.MdelParam()
			else if (this.isShareCgry('SC2')) return this.FetrStrParam()
			else if (this.isShareCgry('SC3')) return this.QuryParam()
			else return this.DshbParam()
		},

		RouterName() {
			if (this.isShareCgry('SC1')) return 'myp013'
			else if (this.isShareCgry('SC2')) return 'myp014'
			else if (this.isShareCgry('SC3')) return 'myp015'
			else if (this.isShareCgry('SC4')) return 'myp016'
			else if (this.shareMod == 'SM2') return 'myp017'
			else return 'myp018'
		},

		InitMdelRegiCd() {
			this.mdelData.anlsMdelRegiCd = '01'
		},

		MdelParam() {
			const param = {
				projId: this.projId,
				projName: this.projName,
				projInvlCd: this.projectDiv,
				projCtnt: this.projectDesc,
				dateFrom: this.myProjInfo.dateFrom,
				dateTo: this.myProjInfo.dateTo,

				anlsShareModCd: this.shareMod,

				anlsShareCgryCd: this.shareRadio.shareCgry, // 분석공유카테고리
				anlsShareRangCd: this.shareRadio.shareRang, // 분석공유범위

				anlsRsultShareName: this.anlsRsultShareName, // 분석결과공유명
				anlsRsultShareDesc: this.anlsRsultShareDesc, // 분석결과설명

				// 'SC1’:분석 모델
				anlsMdelCd: this.anlsMdelCd, // 분석모델코드
				anlsMdelRegiCd: this.anlsMdelRegiCd, // 분석모델등록코드
				anlsMdelSpecData: this.anlsMdelSpecData, // 분석모델스펙정보
				anlsMdelVsnCtnt: this.anlsMdelVsnCtnt, // 분석모델버전내용

				mdelFileName: this.mdelFileName, // 모델파일명
				rpsntDtstName: this.rpsntDtstName, // 대표Dataset명
			}

			return param
		},

		FetrStrParam() {
			const param = {
				projId: this.projId,
				projName: this.projName,
				projInvlCd: this.projectDiv,
				projCtnt: this.projectDesc,
				dateFrom: this.myProjInfo.dateFrom,
				dateTo: this.myProjInfo.dateTo,

				anlsShareModCd: this.shareMod,

				anlsShareCgryCd: this.shareRadio.shareCgry, // 분석공유카테고리
				anlsShareRangCd: this.shareRadio.shareRang, // 분석공유범위

				anlsRsultShareName: this.anlsRsultShareName, // 분석결과공유명
				anlsRsultShareDesc: this.anlsRsultShareDesc, // 분석결과설명

				// ’SC2’:Feature Store
				fetrStrName: this.fetrStrName, // Feature Store 명
				anlsMdelCd: this.anlsMdelCd, // 분석모델코드
				dagFileId: this.dagFileId, // DAG파일명
			}

			return param
		},

		QuryParam() {
			const param = {
				projId: this.projId,
				projName: this.projName,
				projInvlCd: this.projectDiv,
				projCtnt: this.projectDesc,
				dateFrom: this.myProjInfo.dateFrom,
				dateTo: this.myProjInfo.dateTo,

				anlsShareModCd: this.shareMod,

				anlsShareCgryCd: this.shareRadio.shareCgry, // 분석공유카테고리
				anlsShareRangCd: this.shareRadio.shareRang, // 분석공유범위

				anlsRsultShareName: this.dshbData.name, // 분석결과공유명
				anlsRsultShareDesc: this.dshbData.desc, // 분석결과설명

				// ’SC3’:분석 쿼리
				anlsTblName: this.dshbData.tableName, //분석테이블명
				anlsTblHanglName: this.dshbData.tableHanglName, // 분석테이블한글명
				anlsClmnName: this.dshbData.tableClmnName, // 분석컬럼명
				anlsQuryCtnt: this.dshbData.quryCtnt, // 분석쿼리내용
			}

			return param
		},

		DshbParam() {
			const param = {
				projId: this.projId,
				projName: this.projName,
				projInvlCd: this.projectDiv,
				projCtnt: this.projectDesc,
				dateFrom: this.myProjInfo.dateFrom,
				dateTo: this.myProjInfo.dateTo,

				anlsShareModCd: this.shareMod,

				anlsShareCgryCd: this.shareRadio.shareCgry, // 분석공유카테고리
				anlsShareRangCd: this.shareRadio.shareRang, // 분석공유범위

				anlsRsultShareName: this.dshbData.name, // 분석결과공유명
				anlsRsultShareDesc: this.dshbData.desc, // 분석결과설명

				// ’SC4’:대시보드
				dshbUrlAddr: this.dshbData.url, // 대시보드 URL주소
			}

			return param
		},
	},
}
</script>
