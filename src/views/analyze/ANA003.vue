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
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="335" />
								<col width="" />
								<col width="310" />
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
										/>
										<i
											class="mdi mdi-information-outline"
										></i>
										프로젝트 총 기간은 1년 이하로 선택하셔야
										합니다.
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
										>
										</v-textarea>
									</td>
								</tr>
								<tr>
									<th>프로젝트 구분</th>
									<td colspan="3">
										<v-radio-group row v-model="projectDiv">
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
												v-slot:activator="{ on, attrs }"
											>
												<v-btn
													v-bind="attrs"
													v-on="on"
													icon
													color="secondary"
												>
													<v-icon
														>mdi-help-circle</v-icon
													>
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
													같은 계열사 인원으로 <br />
													최대 10명까지 선택할 수
													있습니다.
												</p>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										<v-col md="6">
											<v-text-field
												placeholder="이름을 입력하세요"
												outlined
												clearable
												append-outer-icon="fa fa-search"
											>
												<template v-slot:append-outer>
													<button class="search-in">
														<i
															class="fa fa-search"
														></i>
													</button>
												</template>
											</v-text-field>
										</v-col>
										<v-data-table
											:headers="headers"
											:items="items4"
											:height="200"
											fixed-header
											disable-pagination
											disable-sort
											hide-default-footer
										>
											<template v-slot:item="row">
												<tr>
													<td>
														{{ row.item.company }}
													</td>
													<td>
														{{ row.item.team }}
													</td>
													<td>
														{{ row.item.name }}
													</td>
													<td>
														{{ row.item.companyid }}
													</td>
													<td>
														<v-btn
															class="box"
															dark
															outlined
															@click="
																onButtonClick(
																	row.item,
																)
															"
														>
															삭제
														</v-btn>
													</td>
												</tr>
											</template>
										</v-data-table>
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
												v-slot:activator="{ on, attrs }"
											>
												<v-btn
													v-bind="attrs"
													v-on="on"
													icon
													color="secondary"
												>
													<v-icon
														>mdi-help-circle</v-icon
													>
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
										<v-row row>
											<v-col cols="2">
												<v-checkbox
													v-model="athena"
													label="Athena"
													value=""
													hide-details
												></v-checkbox>
											</v-col>
											<v-col cols="2">
												<v-checkbox
													v-model="quickSight"
													label="QuickSight"
													value=""
													hide-details
												></v-checkbox>
											</v-col>
											<v-col cols="2">
												<v-checkbox
													v-model="notebook"
													label="Notebook"
													value=""
													hide-details
												></v-checkbox>
											</v-col>
											<v-col cols="2">
												<v-checkbox
													v-model="sageMaker"
													label="SageMaker Studio"
													value=""
													hide-details
												></v-checkbox>
											</v-col>
											<v-col cols="2">
												<v-checkbox
													v-model="virtualization"
													label="가상화 환경"
													value=""
													hide-details
												></v-checkbox>
											</v-col>
										</v-row>
									</td>
								</tr>
								<tr v-if="notebook">
									<th>
										Notebook Instance Type
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											v-model="instance_N"
											:items="this.lstIncd3"
											item-text="cmnCdNm"
											item-value="cmnCd"
											placeholder="Notebook Instance Type을 선택하세요"
											single-line
											outlined
										></v-select>
									</td>
								</tr>
								<tr v-if="sageMaker">
									<th>
										SageMaker Studio Instance Type
										<span class="asterisk">필수</span>
									</th>
									<td>
										{{
											this.lstIncd4 != null
												? this.lstIncd4[0].cmnCdNm
												: ''
										}}
									</td>
								</tr>
								<tr v-if="sageMaker">
									<th>
										SageMaker Studio Template Type
										<span class="asterisk">필수</span>
										<v-tooltip
											right
											content-class="secondary tooltip-right"
										>
											<template
												v-slot:activator="{ on, attrs }"
											>
												<v-btn
													v-bind="attrs"
													v-on="on"
													icon
													color="secondary"
													style="
														background: none !important;
													"
												>
													<v-icon
														>mdi-help-circle</v-icon
													>
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
													Template을 신청할 수
													있습니다.
													<span>
														[Building & Tranining]
														모델 구축 및 훈련 <br />
														[Building, Tranining &
														Deployment] 모델 구축,
														훈련 후배포까지 수행
													</span>
												</p>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										<v-select
											v-model="template_S"
											:items="this.lstIncd5"
											item-text="cmnCdNm"
											item-value="cmnCd"
											placeholder="Project Template Type을 선택하세요"
											single-line
											outlined
										></v-select>
									</td>
								</tr>
								<tr v-if="virtualization">
									<th rowspan="2">
										가상화 환경 Instance Type
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											v-model="instance_V"
											:items="this.lstIncd6"
											item-text="cmnCdNm"
											item-value="cmnCd"
											placeholder="가상화 환경 Instance Type을 선택하세요"
											single-line
											outlined
										></v-select>
									</td>
								</tr>
								<tr v-if="virtualization">
									<td colspan="3">
										<strong>스토리지 : </strong>
										{{
											this.lstIncd7 != null
												? this.lstIncd7[0].cmnCdNm
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
												v-slot:activator="{ on, attrs }"
											>
												<v-btn
													v-bind="attrs"
													v-on="on"
													icon
													color="secondary"
												>
													<v-icon
														>mdi-help-circle</v-icon
													>
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
														생성일 기준 5일 후 삭제
														<br />
														[CI값 미사용] 프로젝트
														종료일까지 미삭제
													</span>
												</p>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										<v-radio-group row v-model="ci_useDiv">
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
														.aprvalPsnEmpnm +
												  ' (' +
												  this.aprvalInfo
														.aprvalPsnCoNm +
												  ', ' +
												  this.aprvalInfo
														.aprvalPsnDvsnNm +
												  ')'
												: ''
										}}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn class="box" large>이전 페이지로</v-btn>
						<v-btn color="primary" large dark @click="Application()"
							>신청하기</v-btn
						>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>
<script>
import DatePicker from 'vue2-datepicker'
import axios from 'axios'

export default {
	components: {
		DatePicker,
	},
	data() {
		return {
			// 작업
			athena: false,
			quickSight: false,
			notebook: false,
			sageMaker: false,
			virtualization: false,
			projectDiv: 0, // 프로젝트 구분 (개인, 팀)
			ci_useDiv: 0, // ci 변환 사용여부

			userInfo: null, // 신청자 정보
			lstIncd1: null, // 프로젝트 참여코드 (개인, 팀)
			lstIncd2: null, // 분석환경신청코드
			lstIncd3: null, // Notebook 인스턴스코드
			lstIncd4: null, // SageMakerStudio 인스턴스코드
			lstIncd5: null, // SageMakerStudio 템플릿코드
			lstIncd6: null, // 가상화환경 인스턴스코드
			lstIncd7: null, // 가상화환경 스토리지코드
			aprvalInfo: null, // 결재자 정보

			projectId: '',
			instance_N: '', // Notebook 인스턴스값
			instance_S: '', // SageMakerStudio 인스턴스값
			template_S: '', // SageMakerStudio 템플릿값
			instance_V: '', // 가상화환경 인스턴스값
			// 퍼블
			date: null,

			project: '',
			project_rule: [v => !!v || '프로젝트 명을 입력해 주세요.'],
			project_desc: '',
			project_desc_rule: [v => !!v || '프로젝트 설명을 입력해 주세요.'],
			type: '',
			type_rule: [v => !!v || '분석환경을 선택해 주세요.'],
			headers: [
				{
					text: '회사명',
					sortable: false,
					value: 'company',
				},
				{
					text: '부서',
					sortable: false,
					value: 'team',
				},
				{
					text: '이름',
					sortable: false,
					value: 'name',
				},
				{
					text: '사번',
					sortable: false,
					value: 'companyid',
				},
				{
					text: '삭제',
					sortable: false,
					value: 'delete',
				},
			],
			items4: [
				{
					company: 'KB국민은행',
					team: '경영연구소1',
					name: '김국민',
					companyid: 'H00001',
					delete: '',
				},
				{
					company: 'KB국민은행',
					team: '경영연구소2',
					name: '김스타',
					companyid: 'H00007',
					delete: '',
				},
				{
					company: 'KB국민은행',
					team: '경영연구소2',
					name: '김스타',
					companyid: 'H00007',
					delete: '',
				},
				{
					company: 'KB국민은행',
					team: '경영연구소2',
					name: '김스타',
					companyid: 'H00007',
					delete: '',
				},
				{
					company: 'KB국민은행',
					team: '경영연구소2',
					name: '김스타',
					companyid: 'H00007',
					delete: '',
				},
			],
			items5: [
				'r5.4xlarge(16vCPU, 128GiB)',
				'r5.8xlarge(32vCPU, 256GiB)',
				'r5.16xlarge(64vCPU, 512GiB)',
				'p3.2xlarge(8vCPU, 1GPU, 61GiB)',
			],
			checked: true,
		}
	},

	created() {
		this.init()
	},

	methods: {
		init() {
			var url = '/analyze/analenvreq/ana003/selectAna00301'
			axios
				.post(url, {})
				.then(res => {
					this.userInfo = res.data.userInfo
					this.lstIncd1 = res.data.lstIncd1
					this.lstIncd2 = res.data.lstIncd2
					this.lstIncd3 = res.data.lstIncd3
					this.lstIncd4 = res.data.lstIncd4
					this.lstIncd5 = res.data.lstIncd5
					this.lstIncd6 = res.data.lstIncd6
					this.lstIncd7 = res.data.lstIncd7
					this.aprvalInfo = res.data.aprvalInfo
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
		onButtonClick(item) {
			console.log('click on ' + item.no)
		},

		Application() {
			var url = '/analyze/analenvreq/ana003/insertAna00301'
			axios
				.post(url, {
					anlsEvirnAplcnCd: this.AnalyzeStr, // 분석환경
					aprvalEmpid: this.aprvalInfo.aprvalPsnEmpid, // 결재자
					ciValUseYn: this.ci_useDiv, // CI값 사용 여부
					groupCoCd: this.userInfo.groupCoCd, // 회사코드
					groupDvsnCd: this.Department, // 부서코드
					ntbkInstncCd: this.instance_N, // Notebook Instance
					projCtnt: this.project_desc, // 프로젝트 설명
					projEndYmd: this.date[1], // 프로젝트 종료일
					projInptCd: this.ProjInptCd, // 프로젝트 투입구분(개인:01, 팀장:02, 팀원:03)
					projInvlCd: this.projectDiv == 0 ? '01' : '02', // 프로젝트 구분(개인:01, 팀:02)
					projName: this.project, // 프로젝트명
					projStartYmd: this.date[0], // 프로젝트 시작일
					regiEmpid: this.RegiEmpid, // 직원번호
					stdInstncCd: this.instance_S, //
					stdTmpltCd: this.template_S, //
					vrtlInstncCd: this.instance_V,
					vrtlStrgeCd: this.lstIncd7[0].cmnCd,
				})
				.then(res => {
					this.projectId = res.data.projId
					console.log(this.projectId)
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
	},

	computed: {
		AnalyzeStr() {
			var str = ''
			if (this.athena) str += !str ? 'A' : ',A'
			if (this.quickSight) str += !str ? 'Q' : ',Q'
			if (this.notebook) str += !str ? 'N' : ',N'
			if (this.sageMaker) str += !str ? 'S' : ',S'
			if (this.virtualization) str += !str ? 'V' : ',V'
			return str
		},

		Department() {
			return this.userInfo.groupDvsnCd
		},

		ProjInptCd() {
			return '01'
		},

		RegiEmpid() {
			return this.userInfo.userNo
		},
	},
}
</script>
