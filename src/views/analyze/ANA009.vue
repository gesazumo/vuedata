<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> Analyze</li>
					<li>
						<i class="fa fa-chevron-right"></i> 오픈소스 라이브러리
					</li>
					<li><i class="fa fa-chevron-right"></i> 반입 신청</li>
				</ul>
				<h3>오픈소스 라이브러리 반입 신청</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no">
					<div class="page_tit">
						<h4>반입 신청 정보입력</h4>
						<span>
							오픈소스 반입 신청은 프로젝트 단위로 할 수 있으며,
							반입완료 후 프로젝트 분석환경에서 설치 및 활용이
							가능합니다.
						</span>
					</div>
				</div>
				<div class="s_body">
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
									<th>프로젝트명</th>
									<td>
										<v-select
											label="프로젝트 01"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										패키지그룹
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-radio-group row hide-details="auto">
											<v-radio label="Python"></v-radio>
											<v-radio label="R"></v-radio>
											<v-radio label="Anaconda"></v-radio>
											<v-radio label="기타"></v-radio>
											<v-text-field
												placeholder="패키지 그룹면을 입력해 주세요"
												outlined
												clearable
												v-model="packagename"
												:rules="packagenameRules"
												hide-details="auto"
											></v-text-field>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>
										라이브러리 정보
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-row>
											<v-col
												md="6"
												style="margin: 0 !important"
											>
												<v-text-field
													placeholder="라이브러리명을 입력하세요"
													outlined
													clearable
													v-model="libname"
													:rules="libnameRules"
													hide-details="auto"
												></v-text-field>
											</v-col>
											<v-col
												md="6"
												style="margin: 0 !important"
											>
												<v-text-field
													placeholder="라이브러리 버전을 입력하세요"
													outlined
													clearable
													v-model="libver"
													:rules="libverRules"
													hide-details="auto"
												></v-text-field>
											</v-col>
										</v-row>
									</td>
								</tr>
								<tr>
									<th>
										라이브러리 파일명
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
													원활한 반입을 위해 사잍에
													표시된 정확한 파일명을
													입력해 주세요.<br />
												</p>
												<span>
													Python : httpw://pypi.org<br />
													R :
													https://cran.r-project.org<br />
													Anaconda :
													https://repo.anaconda.com
												</span>
											</div>
										</v-tooltip>
									</th>
									<td>
										<v-text-field
											placeholder="라이브러리 파일명을 입력하세요"
											outlined
											clearable
											v-model="libfilename"
											:rules="libfilenameRules"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										반입 신청 사유
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="반입 신청 사유를 입력하세요"
											outlined
											clearable
											v-model="reason"
											:rules="reasonRules"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn color="primary" dark large outlined
							>취소하기</v-btn
						>
						<v-btn color="primary" dark large>반입 신청하기</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			date: null,
			packagename: '',
			packagenameRules: [v => !!v || '패키지 그룹명을 입력해 주세요'],
			libname: '',
			libnameRules: [v => !!v || '라이브러리명을 입력해 주세요'],
			libver: '',
			libverRules: [v => !!v || '라이브러리 버전을 입력해 주세요'],
			libfilename: '',
			libfilenameRules: [v => !!v || '라이브러리 파일명을 입력해 주세요'],
			reason: '',
			reasonRules: [v => !!v || '반입 신청 사유를 입력해 주세요'],
		}
	},
}
</script>
