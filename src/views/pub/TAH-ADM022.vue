<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>공지사항 등록 및 수정</h5>
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
										구분
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
													공지사항 게시 화면을 설정할
													수 있습니다.
												</p>
												<span>
													[일반] Support > 공지사항
													메뉴에 디스플레이<br />
													[메인] 메인페이지 상단에
													제목 디스플레이,<br />
													클릭시 상세보기로 이동
													(Support > 공지사항)
												</span>
											</div>
										</v-tooltip>
									</th>
									<td>
										<v-radio-group row hide-details="auto">
											<v-radio label="일반"> </v-radio>
											<v-radio label="메인"> </v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>카테고리</th>
									<td>
										<v-radio-group row hide-details="auto">
											<v-radio label="공지사항"></v-radio>
											<v-radio label="이벤트"></v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>
										이벤트 종료일
										<span class="asterisk">필수</span>
									</th>
									<td>
										<date-picker
											v-model="date"
											placeholder="날짜 선택"
										/>
									</td>
								</tr>
								<tr>
									<th>
										제목
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="제목"
											v-model="subject"
											:rules="subjectRules"
											required
											single-line
											outlined
											clearable
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										게시 기간 지정
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
													게시 기간을 설정할 수
													있습니다.
												</p>
												<span>
													[게시 기간 지정하지 않음]
													등록일부터 삭제전까지
													게시됨<br />
													[게시 기간 지정] 지정된
													기간동안만 게시됨
												</span>
											</div>
										</v-tooltip>
									</th>
									<td>
										<div class="checkgroup">
											<v-checkbox
												label="게시 기간 지정하지 않음"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="게시 기간 지정"
												hide-details="auto"
											></v-checkbox>
										</div>
									</td>
								</tr>
								<tr>
									<th>
										기간
										<span class="asterisk">필수</span>
									</th>
									<td>
										<date-picker
											v-model="date"
											range
											placeholder="기간 선택"
										/>
									</td>
								</tr>
								<tr>
									<th>
										본문
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-textarea
											outlined
											clearable
											v-model="textarea"
											:rules="textareaRules"
											required
											hide-details="auto"
										></v-textarea>
									</td>
								</tr>
								<tr>
									<th>첨부파일</th>
									<td>
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
							</tbody>
						</table>
					</div>
				</div>
				<div class="btn_area center">
					<v-btn color="primary" dark outlined> 취소 </v-btn>
					<v-btn color="primary" dark> 수정하기 </v-btn>
					<v-btn color="primary" dark> 삭제하기 </v-btn>
					<v-btn color="primary" dark> 등록하기 </v-btn>
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
			isSelecting: '',
			dragging: false,
			file: '',
			handleFileImport: '',
			date: '',
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			subject: '',
			subjectRules: [v => !!v || '공지사항 제목을 입력해 주세요.'],
			textarea: '',
			textareaRules: [v => !!v || '공지사항 본문을 입력해 주세요.'],
		}
	},
	methods: {
		onChange(e) {
			var files = e.target.files || e.dataTransfer.files

			if (!files.length) {
				this.dragging = false
				return
			}

			this.createFile(files[0])
		},
		createFile(file) {
			if (!file.type.match('text.*')) {
				alert('please select txt file')
				this.dragging = false
				return
			}

			if (file.size > 5000000) {
				alert('please check file size no over 5 MB.')
				this.dragging = false
				return
			}

			this.file = file
			console.log(this.file)
			this.dragging = false
		},
		removeFile() {
			this.file = ''
		},
	},
	computed: {
		extension() {
			return this.file ? this.file.name.split('.').pop() : ''
		},
	},
}
</script>
