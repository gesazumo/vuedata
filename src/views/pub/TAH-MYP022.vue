<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My Dashboard</li>
					<li>
						<i class="fa fa-chevron-right"></i> My Dataset 업로드
					</li>
				</ul>
				<h3>My Dataset 업로드</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no">
					<div class="page_tit">
						<h4>수정중...</h4>
						<span>
							분석업무 수행을 위해 필요한 파일은 관리자 승인 후에
							프로젝트 분석환경으로 업로드 되어 분석에 사용할 수
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
							</colgroup>
							<tbody>
								<tr>
									<th>
										프로젝트명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											placeholder="프로젝트명을 입력해 주세요"
											items="itme01"
											single-line
											clearable
											outlined
											v-moel="project"
											:rules="projectRules"
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										파일 구분
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-radio-group row hide-details="auto">
											<v-radio
												label="Dataset"
												hide-details="auto"
											></v-radio>
											<v-radio
												label="Code"
												hide-details="auto"
											></v-radio>
											<v-radio
												label="분석모델"
												hide-details="auto"
											></v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>
										첨부파일
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
												></p>
												<span>
													확장자 : CSV, txt, Notebook,
													Python <br />
													용량 : 20MB <br />
													파일 수 제한 : 10개
												</span>
											</div>
										</v-tooltip>
									</th>
									<td>
										<!--파일첨부 태우대리님 lib 사용예정-->
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
									<th>요청자</th>
									<td>홍길동</td>
								</tr>
								<tr>
									<th>
										요청 사유
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-textarea
											placeholder="요청사유를 입력하세요."
											outlined
											clearable
											v-moel="project"
											:rules="projectRules"
											hide-details="auto"
										></v-textarea>
									</td>
								</tr>
								<tr>
									<th>
										결재자
										<span class="asterisk">필수</span>
									</th>
									<td>강태근 (KB국민은행, 데이터기획부)</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="agree mt-5">
						<div class="agree_chk">
							<v-checkbox
								v-model="check1"
								:rules="check1Rules"
								hide-details="auto"
							>
								<template v-slot:label>
									<p>
										파일 업로드를 위한 주의사항에
										동의합니다.
									</p>
								</template>
							</v-checkbox>
						</div>
						<div class="agree_txt">
							파일 업로드를 신청한 직원은 해당 권한으로 작업한
							내용에 대한 포괄적인 책임을 가지며, 삭제요건 발생 시
							즉시 삭제해야 하므로 저장한 개인벙보 및
							개인신용정보에 대해서는 관련 법령, 규정, 지침 등을
							정확히 이해하고 철저히 관리해야 합니다.
						</div>
					</div>
					<div class="btnArea">
						<v-btn class="box" large>이전 페이지로</v-btn>
						<v-btn color="primary" large dark
							>업로드 요청하기</v-btn
						>
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
			project: '',
			projectRules: [value => !!value || '프로젝트명을 입력해 주세요.'],
		}
	},
}
</script>
