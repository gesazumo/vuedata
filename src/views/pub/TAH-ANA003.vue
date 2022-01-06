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
									<td>KB국민은행</td>
									<th>부서</th>
									<td>경영연구소</td>
								</tr>
								<tr>
									<th>이름</th>
									<td>김국민</td>
									<th>사번</th>
									<td>H00001</td>
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
											v-moel="project"
											:rules="[
												rules.required,
												rules.project_rule,
											]"
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
											v-model="date"
											placeholder="프로젝트 기간 선택"
											range
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
											v-moel="project_desc"
											:rules="[
												rules.required,
												rules.project_desc_rule,
											]"
											hide-details="auto"
										>
										</v-textarea>
									</td>
								</tr>
								<tr>
									<th>프로젝트 구분</th>
									<td colspan="3">
										<v-radio-group row hide-details="auto">
											<v-radio label="개인"> </v-radio>
											<v-radio label="팀"> </v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
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
													같은 계열사 인원으로 <br />
													최대 10명까지 선택할 수
													있습니다.
												</p>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										<v-col md="5">
											<v-text-field
												placeholder="이름을 입력하세요"
												outlined
												clearable
												v-model="name"
												:rules="[
													rules.required,
													rules.name,
												]"
												append-outer-icon="fa fa-search"
												hide-details="auto"
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
													분석환경을 신청할 수
													있습니다.
												</p>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										<v-row>
											<v-checkbox
												label="Athena"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="QuickSight"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="Notebook"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="SageMaker Studio"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="가상화 환경"
												hide-details="auto"
											></v-checkbox>
										</v-row>
									</td>
								</tr>
								<tr>
									<th>
										Notebook Instance Type
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											:items="instance_01"
											placeholder="Notebook Instance Type을 선택하세요"
											single-line
											outlined
											v-model="instance_rules_01"
											:rules="[
												rules.required,
												rules.instance_rules_01,
											]"
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>SageMaker Studio Instance Type</th>
									<td colspan="3">
										ml.t3.medium (General purpose, vCPU 2,
										GPU 0, Memory 4GiB)
									</td>
								</tr>
								<tr>
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
													프로젝트 목적에 맞는<br />
													Template을 신청할 수
													있습니다.<br />
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
											:items="instance_02"
											placeholder="Project Template Type을 선택하세요"
											single-line
											outlined
											v-model="instance_rules_02"
											:rules="[
												rules.required,
												rules.instance_rules_02,
											]"
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th rowspan="2">
										가상화 환경 Instance Type
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											:items="instance_03"
											placeholder="Instance Type을 선택하세요"
											single-line
											outlined
											v-model="instance_rules_03"
											:rules="[
												rules.required,
												rules.instance_rules_03,
											]"
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<td colspan="3">
										<strong>스토리지</strong> : 범용
										SSD(gp3), 1TiB
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
													분석시 CI(Connecting
													Information) 사용여부에
													<br />
													따라 프로젝트 영역
													삭제기준이 달라집니다.<br />
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
										<v-radio-group row hide-details="auto">
											<v-radio label="사용"> </v-radio>
											<v-radio label="미사용"> </v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>결재자</th>
									<td colspan="3">
										노현곤 (KB국민은행, 데이터기획부)
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn class="box" large>이전 페이지로</v-btn>
						<v-btn color="primary" large dark>신청하기</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>
<script>
import DatePicker from 'vue2-datepicker'

export default {
	components: {
		DatePicker,
	},
	data() {
		return {
			date: null,
			instance_01: [
				'ml.t3.medium(General purpose, vCPU 2, GPU 0, Memory 4GiB)',
				'ml.g4dn.xlarge(Accelerated computing, vCPU 4, GPU 1, 16GiB)',
				'ml.m5.large(General purpose, vCPU 2, GPU 0, Memory 8GiB)',
				'ml.c5.large(Compute optimized, vCPU 2, GPU 0, Memory 4GiB)',
			],
			instance_02: [
				'Building & Tranining',
				'Building, Training & Deployment',
			],
			instance_03: [
				'r5.4xlarge(16vCPU, 128GiB)',
				'r5.8xlarge(32vCPU, 256GiB)',
				'r5.16xlarge(64vCPU, 512GiB)',
				'p3.2xlarge(8vCPU, 1GPU, 61GiB)',
			],
			rules: {
				project_rule: value => !!value || '프로젝트명을 입력해 주세요.',
				project_desc_rule: value =>
					!!value || '프로젝트 설명을 입력해 주세요.',
				name: value => !!value || '프로젝트 팀원을 입력해 주세요.',
				instance_rules_01: value =>
					!!value || 'Notebook Instance Type를 선택해 주세요.',
				instance_rules_02: value =>
					!!value ||
					'SageMaker Studio Project Template Type을 선택해 주세요.',
				instance_rules_03: value =>
					!!value || '가상화 환경 Instance Type을 선택해 주세요.',
			},
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

			methods: {
				onButtonClick(item) {
					console.log('click on ' + item.no)
				},
			},

			checked: true,
		}
	},
}
</script>
