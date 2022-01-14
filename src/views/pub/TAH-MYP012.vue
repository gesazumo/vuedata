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
									<td>KB국민은행</td>
									<th>부서</th>
									<td>경영연구소</td>
								</tr>
								<tr>
									<th>이름</th>
									<td>김국민</td>
									<th>사번</th>
									<td>H000001</td>
								</tr>
								<tr>
									<th>
										프로젝트명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											placeholder="프로젝트를 선택하세요"
											single-line
											outlined
											hide-details="auto"
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
										></v-textarea>
									</td>
								</tr>
								<tr>
									<th>프로젝트 구분</th>
									<td colspan="3">
										<v-radio-group row hide-details="auto">
											<v-radio
												label="개인"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="팀"
												hide-details="auto"
											>
											</v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>프로젝트 팀원</th>
									<td colspan="3">
										<v-data-table
											:headers="headers_team"
											hide-default-footer
											class="elevation-1"
										></v-data-table>
									</td>
								</tr>
								<tr>
									<th>분석 환경</th>
									<td colspan="3">
										<v-checkbox
											label="Athena"
											hide-details="auto"
										></v-checkbox>
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
													분석 결과물의 공유 및 전송
													방식을 선택할 수 있습니다.
												</p>
												<span>
													[분석가 포털 공유] 프로젝트
													결과를 포털의 Explore 메뉴를
													통해 공유<br />
													[계열사 전송] 분석결과를
													K-region 중계서버를 통해
													계열사 영역으로 전송<br />
													[분석결과 CI변환] 분석결과
													테이블의 분석ID 컬럼을 CI로
													변환하여 다운로드
												</span>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										<v-radio-group row hide-details="auto">
											<v-radio
												label="분석가 포털 공유"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="계열사 전송"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="분석결과 CI 변환"
												hide-details="auto"
											>
											</v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>
										공유 범위
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
													분석 결과물의 공유 범위를
													선택할 수 있습니다.
												</p>
												<span>
													[그룹 전체 대상 공유] 포털의
													Explore 메뉴를 통해 전
													그룹사 직원이 조회 가능<br />
													[계열사내 공유] 분석가가
													속한 회사의 직원만 조회 가능
												</span>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										<v-radio-group row hide-details="auto">
											<v-radio
												label="그룹 전체 공유"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="계열사내 공유"
												hide-details="auto"
											>
											</v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>공유 카테고리</th>
									<td colspan="3">
										<v-radio-group row hide-details="auto">
											<v-radio
												label="분석 모델"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="Feature Store"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="분석쿼리"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="대시보드"
												hide-details="auto"
											>
											</v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>모델 구분</th>
									<td colspan="3">
										<v-radio-group row hide-details="auto">
											<v-radio
												label="분석 모델"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="공통 모델"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="분석쿼리"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="개인화 추천 모델"
												hide-details="auto"
											>
											</v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>모델 등록 구분</th>
									<td colspan="3">
										<v-radio-group row hide-details="auto">
											<v-radio
												label="신규"
												hide-details="auto"
											>
											</v-radio>
											<v-radio
												label="추가"
												hide-details="auto"
											>
											</v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>기등록 분석모델</th>
									<td colspan="3">
										<v-select
											placeholder="기등록 분석모델을 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										모델명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="모델명을 입력하세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										모델설명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-textarea
											placeholder="모델에 대한 설명을 입력하세요"
											outlined
											hide-details="auto"
										></v-textarea>
									</td>
								</tr>
								<tr>
									<th>모델버전</th>
									<td colspan="3">
										<v-select
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										분석 언어
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-checkbox
											label="Python"
											hide-details="auto"
										></v-checkbox>
										<v-text-field
											placeholder="버전을 입력하세요"
											single-line
											outlined
											hide-details="auto"
										></v-text-field>
										<v-checkbox
											label="R"
											hide-details="auto"
										></v-checkbox>
										<v-text-field
											placeholder="버전을 입력하세요"
											single-line
											outlined
											hide-details="auto"
										></v-text-field>
										<v-checkbox
											label="기타"
											hide-details="auto"
										></v-checkbox>
										<v-text-field
											placeholder="분석에 사용된 언어를 입력하세요"
											single-line
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										분석 알고리즘
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<div>
											<v-row>
												<v-checkbox
													label="Decision Tree"
													hide-details="auto"
												></v-checkbox>
												<v-checkbox
													label="기타"
													hide-details="auto"
												></v-checkbox>
												<v-text-field
													placeholder="분석에 사용된 알고리즘을 입력하세요"
													single-line
													outlined
													hide-details="auto"
												></v-text-field>
											</v-row>
										</div>
									</td>
								</tr>
								<tr>
									<th>
										대표 Dataset
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
													분석에 사용된 대표 Dataset을
													공유할 수 있습니다.
												</p>
												<span>
													포털을 통해 공유시
													사용자들은 Sample Data만
													확인 할 수 있으며 다운로드
													불가능
												</span>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										<v-select
											placeholder="대표 Dataset을 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										Feature Store명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="Feature Store명을 입력하세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										Feature Store 설명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-textarea
											placeholder="Feature Store 설명을 입력하세요"
											outlined
											hide-details="auto"
										></v-textarea>
									</td>
								</tr>
								<tr>
									<th>
										Feature Store
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											placeholder="Feature Store를 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										분석코드
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											placeholder="분석코드 파일을 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
										<v-data-table
											:headers="headers"
											hide-default-footer
											class="elevation-1"
										></v-data-table>
									</td>
								</tr>
								<tr>
									<th>
										DAG 파일
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
													Feature Store 현행화를 위해
													DAG 파일을 업로드 할 수
													있습니다.
												</p>
												<span>
													전처리 로직, 배치 스케쥴링
													정보가 포함된 DAG 파일
													업로드
												</span>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										<v-btn
											color="primary"
											dark
											:loading="isSelecting"
											@click="handleFileImport"
											append-outer="fa fa-search"
											style="margin: 0"
										>
											찾아보기
											<i class="fa fa-search"></i>
											<input
												type="file"
												class="fileinput"
											/>
										</v-btn>
										<div class="filesize-info">
											총 <span>N개</span>의 파일(00,000KB)
										</div>
										<div v-if="!file">
											<div
												:class="[
													'dropZone',
													dragging
														? 'dropZone-over'
														: '',
												]"
												@dragenter="dragging = true"
												@dragleave="dragging = false"
											>
												<div
													class="dropZone-info"
													@drag="onChange"
												>
													<span class="dropZone-title"
														>첨부할 파일을 Drag &
														Drop 방식으로 추가할 수
														있습니다.</span
													>
													<div
														class="
															dropZone-upload-limit-info
														"
													></div>
												</div>
												<input
													type="file"
													@change="onChange"
												/>
											</div>
										</div>
										<div v-else class="dropZone-uploaded">
											<div class="dropZone-uploaded-info">
												<table class="fileupload-list">
													<colgroup>
														<col width="" />
														<col width="20%" />
														<col width="10%" />
													</colgroup>
													<tr>
														<th>파일명</th>
														<th>파일크기</th>
														<th>삭제</th>
													</tr>
													<tr>
														<td>filename.gif</td>
														<td>1,234KB</td>
														<td
															style="
																text-align: center;
															"
														>
															<v-btn
																color="primary"
																dark
																x-small
																class="
																	removeFile
																"
																append-outer="fa fa-times"
																@click="
																	removeFile
																"
															>
																<i
																	class="
																		fa
																		fa-times
																	"
																></i>
															</v-btn>
														</td>
													</tr>
												</table>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th>
										분석 쿼리명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="분석 쿼리명을 입력하세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										분석 쿼리 설명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-textarea
											placeholder="Feature Store 설명을 입력하세요"
											outlined
											hide-details="auto"
										></v-textarea>
									</td>
								</tr>
								<tr>
									<th>
										분석 테이블 ID
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											placeholder="분석 테이블 ID를 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										분석 테이블 한글명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="테이블 한글명을 입력하세요"
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										분석 컬럼명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="컬럼명을 입력하세요"
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										분석 쿼리
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-textarea
											placeholder="분석 쿼리문을 입력하세요"
											outlined
											hide-details="auto"
										></v-textarea>
									</td>
								</tr>
								<tr>
									<th>
										대시보드명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="대시보드명을 입력하세요"
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										대시보드 설명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-textarea
											placeholder="대시보드 설명을 입력하세요"
											outlined
											hide-details="auto"
										></v-textarea>
									</td>
								</tr>
								<tr>
									<th>
										대시보드 URL
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-textarea
											placeholder="대시보드 URL을 입력하세요"
											outlined
											hide-details="auto"
										></v-textarea>
									</td>
								</tr>
								<tr>
									<th>
										모델 파일
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
													전송할 모델파일 결과물이
													있는 폴더를 지정할 수
													있습니다.
												</p>
												<span>
													업로드 전 폴더 전체를 Zip
													파일로 압축해야 함.
												</span>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3">
										<v-select
											placeholder="분석 테이블 ID를 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th rowspan="2">
										테이블
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											placeholder="테이블을 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<td colspan="3">
										<v-col md="3">
											<p class="pt-2 pr-2">/ 컬럼명</p>
											<v-select
												placeholder="컬럼명을 선택하세요"
												single-line
												outlined
												hide-details="auto"
											></v-select>
										</v-col>
									</td>
								</tr>
								<tr>
									<th>
										요청 사유
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-textarea
											placeholder="요청 사유를 입력하세요"
											outlined
											hide-details="auto"
										></v-textarea>
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
						<v-btn color="primary" large outlined> 취소하기 </v-btn>
						<v-btn color="primary" large>등록하기</v-btn>
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
			isSelecting: '',
			dragging: false,
			file: '',
			handleFileImport: '',
			headers: [
				{
					text: '파일명',
					align: 'center',
					sortable: false,
					value: '',
				},
			],
			headers_team: [
				{
					text: '회사명',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '부서',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '이름',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '사번',
					align: 'center',
					sortable: false,
					value: '',
				},
			],
		}
	},
}
</script>
