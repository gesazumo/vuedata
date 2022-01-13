<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> Analyze</li>
					<li><i class="fa fa-chevron-right"></i> 분석환경신청</li>
				</ul>
				<h3>분석환경신청</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no">
					<div class="page_tit">
						<h4>신청정보입력</h4>
						<span>
							분석가 환경은 프로젝트 단위(개인 또는 팀)로 신청이
							가능합니다.
						</span>
					</div>
					<div class="page_step">
						<ul>
							<li>
								<img
									src="../../images/step_check_done.svg"
									class="step_check"
								/>
								약관동의
							</li>
							<li class="dash"></li>
							<li class="on">
								<img
									src="../../images/step_check_2.svg"
									class="step_check"
								/>
								신청정보입력
							</li>
						</ul>
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
									<col width="300" />
									<col width="" />
									<col width="230" />
									<col width="" />
								</colgroup>
								<tbody>
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
											<v-text-field
												placeholder="프로젝트명을 입력해 주세요"
												single-line
												clearable
												outlined
												v-model="project"
												:rules="project_rule"
												hide-details="auto"
											></v-text-field>
										</td>
									</tr>
									<tr>
										<th>
											프로젝트 기간
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<date-picker
												placeholder="프로젝트 기간 선택"
												range
												v-model="date"
												value-type="YYYYMMDD"
												hide-details="auto"
												:error="
													checkRegistDateValid &&
													registDateValid
												"
												@close="
													checkRegistDateValid = true
												"
											/>
											<i
												class="
													mdi mdi-information-outline
												"
												style="margin-left: 8px"
											></i>
											프로젝트 총 기간은 1년 이하로
											선택하셔야 합니다.
											<div
												style="color: red"
												v-if="
													checkRegistDateValid &&
													registDateValid
												"
											>
												프로젝트 기간을 선택해 주세요.
											</div>
										</td>
									</tr>
									<tr>
										<th>
											프로젝트 설명
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-textarea
												placeholder="프로젝트 설명을 입력해 주세요"
												single-line
												clearable
												outlined
												v-model="project_desc"
												:rules="project_desc_rule"
												hide-details="auto"
											>
											</v-textarea>
										</td>
									</tr>
									<tr>
										<th>프로젝트 구분</th>
										<td colspan="3">
											<v-radio-group
												row
												v-model="projectDiv"
												hide-details="auto"
											>
												<v-radio
													label="개인"
													key="0"
												></v-radio>
												<v-radio
													label="팀"
													key="1"
												></v-radio>
											</v-radio-group>
										</td>
									</tr>
									<tr v-if="projectDiv == 1">
										<th>
											프로젝트 팀원
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
														같은 계열사 인원으로
														<br />
														최대 10명까지 선택할 수
														있습니다.
													</p>
												</div>
											</v-tooltip>
										</th>
										<td colspan="3">
											<v-col md="6">
												<v-text-field
													v-model="searchName"
													placeholder="이름을 입력하세요"
													outlined
													clearable
													append-outer-icon="fa fa-search"
												>
													<template
														v-slot:append-outer
													>
														<v-btn
															@click="popupOpen"
															color="secondary"
															dark
															style="
																margin-left: 4px !important;
																width: 40px !important;
																min-width: 40px !important;
																max-width: 40px !important;
															"
														>
															<i
																class="
																	fa fa-search
																"
															></i>
														</v-btn>
													</template>
												</v-text-field>
											</v-col>
											<v-data-table
												:headers="headers"
												:height="200"
												:items="selectedMemebers"
												fixed-header
												disable-pagination
												disable-sort
												hide-default-footer
											>
												<template v-slot:no-data>
													<no-data />
												</template>
												<template
													v-if="
														selectedMemebers.length >
														0
													"
													#item="{ item }"
												>
													<tr>
														<td>
															{{ item.groupCoNm }}
														</td>
														<td>
															{{
																item.groupDvsnNm
															}}
														</td>
														<td>
															{{ item.userNm }}
														</td>
														<td>
															{{ item.userNo }}
														</td>
														<td>
															<v-btn
																class="box"
																dark
																outlined
																@click="
																	onButtonClick(
																		item,
																	)
																"
															>
																삭제
															</v-btn>
														</td>
													</tr>
												</template>
											</v-data-table>
											<div
												style="color: red"
												v-if="selectMemberValid"
											>
												프로젝트 팀원을 선택해 주세요.
											</div>
										</td>
									</tr>
									<tr>
										<th>
											분석환경
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
														프로젝트 목적에 맞는
														분석환경을 신청할 수
														있습니다.
													</p>
												</div>
											</v-tooltip>
										</th>
										<td colspan="3">
											<v-row>
												<v-checkbox
													v-for="item in TAH000025"
													v-bind:key="item.cmnCd"
													v-model="item.select"
													hide-details="false"
													:label="item.cmnCdNm"
													:error="analyzeValid"
													@click="AnalyzeSelect"
												></v-checkbox>
											</v-row>

											<div
												style="color: red"
												v-if="analyzeValid"
											>
												분석환경을 선택해 주세요.
											</div>
										</td>
									</tr>
									<tr v-if="SelectValid('N')">
										<th>
											Notebook Instance Type
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-select
												v-model="instance_N"
												:items="this.TAH000026"
												item-text="cmnCdNm"
												item-value="cmnCd"
												placeholder="Notebook Instance Type을 선택하세요"
												single-line
												outlined
												:rules="[
													v =>
														!!v ||
														'Notebook Instance Type을 선택해 주세요',
												]"
												hide-details="auto"
											></v-select>
										</td>
									</tr>
									<tr v-if="SelectValid('S')">
										<th>
											SageMaker Studio Instance Type
											<span class="asterisk">필수</span>
										</th>
										<td>
											{{
												this.TAH000027 != null
													? this.TAH000027[0].cmnCdNm
													: ''
											}}
										</td>
									</tr>

									<tr v-if="SelectValid('V')">
										<th rowspan="2">
											가상화 환경 Instance Type
											<span class="asterisk">필수</span>
										</th>
										<td colspan="3">
											<v-select
												v-model="instance_V"
												:items="this.TAH000029"
												item-text="cmnCdNm"
												item-value="cmnCd"
												placeholder="가상화 환경 Instance Type을 선택하세요"
												single-line
												outlined
												hide-details="auto"
												:rules="[
													v =>
														!!v ||
														'가상화 환경 Instance Type을 선택해 주세요',
												]"
											></v-select>
										</td>
									</tr>
									<tr v-if="SelectValid('V')">
										<td colspan="3">
											<strong>스토리지 : </strong>
											{{
												this.TAH000030 != null
													? this.TAH000030[0].cmnCdNm
													: ''
											}}
										</td>
									</tr>

									<tr>
										<th>
											CI값 사용 여부
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
														분석시 CI(Connecting
														Information) 사용여부에
														<br />
														따라 프로젝트 영역
														삭제기준이 달라집니다.
														<span>
															[CI값 사용] 데이터
															생성일 기준 5일 후
															삭제
															<br />
															[CI값 미사용]
															프로젝트 종료일까지
															미삭제
														</span>
													</p>
												</div>
											</v-tooltip>
										</th>
										<td colspan="3">
											<v-radio-group
												row
												v-model="ci_useDiv"
												hide-details="auto"
											>
												<v-radio label="사용" key="0">
												</v-radio>
												<v-radio label="미사용" key="1">
												</v-radio>
											</v-radio-group>
										</td>
									</tr>
									<tr>
										<th>결재자</th>
										<td colspan="3">
											{{
												this.aprvalInfo != null
													? this.aprvalInfo
															.aprvalPsnInfo
													: ''
											}}
										</td>
									</tr>
								</tbody>
							</table>
						</v-form>
					</div>
					<div class="btnArea">
						<v-btn class="box" large @click="Previous()">
							이전 페이지로
						</v-btn>
						<v-btn
							color="primary"
							large
							dark
							@click="Application()"
						>
							신청하기
						</v-btn>
					</div>
				</div>
			</div>
			<div v-if="popupVal">
				<ANA005
					:selectedMemebers="selectedMemebers"
					:searchName="searchName"
					:proposer="this.userInfo.userNo"
					@close:popup="popupClose"
					@selectMember="selectMember"
				/>
			</div>
		</div>
	</v-app>
</template>

<script>
// import axios from 'axios'
import DatePicker from 'vue2-datepicker'
import ANA005 from '@/views/analyze/ANA005.vue'
import { insertAna00301 } from '@/api/modules/anaAPI'
import { selectAna00301 } from '@/api/modules/anaAPI'

export default {
	components: {
		DatePicker,
		ANA005,
	},
	data() {
		return {
			// 팀원선택 팝업
			searchName: '',
			selectedMemebers: [], //선택한 프로젝트 팀원 리스트
			popupVal: false,

			projectDiv: 0, // 프로젝트 구분 (개인, 팀)
			ci_useDiv: 0, // ci 변환 사용여부
			userInfo: null, // 신청자 정보
			TAH000020: null, // 프로젝트 참여코드 (개인, 팀)
			TAH000025: null, // 분석환경신청코드
			TAH000026: null, // Notebook 인스턴스코드
			TAH000027: null, // SageMakerStudio 인스턴스코드
			TAH000029: null, // 가상화환경 인스턴스코드
			TAH000030: null, // 가상화환경 스토리지코드
			aprvalInfo: null, // 결재자 정보

			projectId: '',
			instance_N: '', // Notebook 인스턴스값
			instance_S: '', // SageMakerStudio 인스턴스값
			instance_V: '', // 가상화환경 인스턴스값

			date: null,
			checkRegistDateValid: false,

			checkAnalyze: false,

			clickApplication: false,

			project: '',
			project_rule: [v => !!v || '프로젝트 명을 입력해 주세요.'],
			project_desc: '',
			project_desc_rule: [v => !!v || '프로젝트 설명을 입력해 주세요.'],
			type_rule: [v => !!v || '분석환경을 선택해 주세요.'],
			headers: [
				{
					text: '회사명',
					sortable: true,
					value: 'groupCoNm',
				},
				{
					text: '부서',
					sortable: true,
					value: 'groupDvsnNm',
				},
				{
					text: '이름',
					sortable: true,
					value: 'userNm',
				},
				{
					text: '사번',
					sortable: true,
					value: 'userNo',
				},
				{
					text: '삭제',
					sortable: true,
					width: 150,
				},
			],
		}
	},

	created() {
		this.TAH000020 = this.$getCmCode('TAH000020')
		this.TAH000025 = this.$getCmCode('TAH000025')
		this.TAH000026 = this.$getCmCode('TAH000026')
		this.TAH000027 = this.$getCmCode('TAH000027')
		this.TAH000029 = this.$getCmCode('TAH000029')
		this.TAH000030 = this.$getCmCode('TAH000030')

		for (var i = 0; i < this.TAH000025.length; i++)
			this.$set(this.TAH000025[i], 'select', false)

		this.init()
	},

	methods: {
		selectMember(members) {
			this.popupVal = false
			this.selectedMemebers = members
			this.selectMemberValid = this.selectedMemebers.length == 0
		},
		popupOpen() {
			this.popupVal = true
		},

		popupClose() {
			this.popupVal = false
		},

		async init() {
			try {
				const { data } = await selectAna00301()
				this.userInfo = data.userInfo
				this.aprvalInfo = data.aprvalInfo
			} catch (error) {
				console.log('err : ' + error)
			}
		},

		Analyze_rules() {
			if (this.analyzeValid) {
				return false
			} else return true
		},

		onButtonClick(item) {
			console.log('click on ' + item)
			this.selectedMemebers = this.selectedMemebers.filter(member => {
				return member.serno != item.serno
			})
		},

		async Application() {
			this.clickApplication = true
			this.checkRegistDateValid = true
			this.checkAnalyze = true

			if (
				this.$refs.form.validate() &&
				!this.registDateValid &&
				!this.selectMemberValid
			) {
				const param = {
					projName: this.project, // 프로젝트명
					projCtnt: this.project_desc, // 프로젝트 설명
					dateFrom: this.date[0], // 프로젝트 시작일
					dateTo: this.date[1], // 프로젝트 종료일
					projInvlCd: this.projectDiv == 0 ? '01' : '02', // 프로젝트 구분(개인:01, 팀:02)
					tmmmCoCd: this.GroupCoCd(), // 회사코드
					tmmmDvsnCd: this.Department(), // 부서코드
					tmmmEmpid: this.RegiEmpid(), // 직원번호
					tmmmInptCd: this.ProjInptCd(), // 프로젝트 투입구분(개인:01, 팀장:02, 팀원:03)
					anlsEvirnAplcnCd: this.AnalyzeStr(), // 분석환경
					ntbkInstncCd: this.SelectValid('N') ? this.instance_N : '', // Notebook Instance
					stdInstncCd: this.SelectValid('S') ? this.instance_S : '', // SageMaker Studio Instance Type
					vrtlInstncCd: this.SelectValid('V') ? this.instance_V : '', // 가상화 환경 Instance Type
					vrtlStrgeCd: this.SelectValid('V')
						? this.TAH000030[0].cmnCd
						: '', // 가상화 환경 Storage Type
					ciValUseYn: this.ci_useDiv, // CI값 사용 여부
					aprvalEmpid: this.aprvalInfo.aprvalPsnEmpid, // 결재자
				}

				try {
					const { data } = await insertAna00301(param)
					this.projectId = data.projId
					console.log(this.projectId)

					this.$router.push({
						name: 'ana004',
						params: { projectId: this.projectId },
					})
				} catch (error) {
					console.log(error)
				}
			}
		},

		Previous() {
			this.$router.push({
				name: 'ana002',
			})
		},

		AnalyzeStr() {
			// 분석환경
			var str = ''
			for (var i = 0; i < this.TAH000025.length; i++) {
				if (this.TAH000025[i].select)
					str += !str
						? this.TAH000025[i].cmnCd
						: ',' + this.TAH000025[i].cmnCd
			}
			return str
		},

		GroupCoCd() {
			// 회사코드
			var str = this.userInfo.groupCoCd
			for (var i = 0; i < this.selectedMemebers.length; i++) {
				str += ',' + this.selectedMemebers[i].groupCoCd
			}
			return str
		},

		Department() {
			// 부서코드
			var str = this.userInfo.groupDvsnCd
			for (var i = 0; i < this.selectedMemebers.length; i++) {
				str += ',' + this.selectedMemebers[i].groupDvsnCd
			}
			return str
		},

		RegiEmpid() {
			// 직원번호
			var str = this.userInfo.userNo
			for (var i = 0; i < this.selectedMemebers.length; i++) {
				str += ',' + this.selectedMemebers[i].userNo
			}
			return str
		},

		ProjInptCd() {
			// 프로젝트 투입구분(개인:01, 팀장:02, 팀원:03)
			var str = this.projectDiv == 0 ? '01' : '02'
			for (var i = 0; i < this.selectedMemebers.length; i++) {
				str += ',03'
			}
			return str
		},

		AnalyzeSelect() {
			this.checkAnalyze = true
		},

		SelectValid(cmnCd) {
			for (var i = 0; i < this.TAH000025.length; i++) {
				if (this.TAH000025[i].cmnCd == cmnCd)
					return this.TAH000025[i].select
			}
		},
	},

	computed: {
		registDateValid() {
			return this.date == null
		},

		analyzeValid() {
			var select = false
			for (var i = 0; i < this.TAH000025.length; i++) {
				if (this.TAH000025[i].select) select = true
			}

			if (this.checkAnalyze && !select) return true
			else return false
		},

		selectMemberValid() {
			if (!this.clickApplication) return false
			if (this.projectDiv == 1) return this.selectedMemebers.length == 0
			else return false
		},
	},
}
</script>
