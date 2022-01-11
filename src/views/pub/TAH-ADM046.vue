<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>마이데이터, 특화데이터 컨텐츠 관리</h5>
				<div class="item_box">
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
								<tr>
									<th>
										구분 <span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											:items="categori"
											placeholder="카테고리를 선택하세요"
											single-line
											outlined
											hide-details="auto"
											v-moel="categori"
											:rules="[
												rules.required,
												rules.categori_rule,
											]"
										></v-select>
									</td>
									<th>
										상세 구분
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											:items="detail"
											placeholder="상세구분을 선택하세요"
											single-line
											outlined
											hide-details="auto"
											v-moel="detail"
											:rules="[
												rules.required,
												rules.detail_rule,
											]"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										제목
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											:items="title"
											placeholder="제목을 입력하세요"
											single-line
											outlined
											clearable
											hide-details="auto"
											v-moel="title"
											:rules="[
												rules.required,
												rules.title_rule,
											]"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										설명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-textarea
											placeholder="설명을 입력하세요"
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
									<th>
										썸네일 이미지
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
													썸네일 이미지 등록을 위한
													주의사항을 확인하세요.
												</span>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3" class="thumb__area">
										<div
											style="float: left margin-right:10px"
										>
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
											<div class="search-desc">
												<p>
													썸네일 이미지는 1개까지
													등록할 수 있습니다. 용량은
													5MB를 넘을 수 없습니다.
												</p>
											</div>
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
										배너 이미지
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
													배너 이미지 등록을 위한
													주의사항을 확인하세요.
												</span>
											</div>
										</v-tooltip>
									</th>
									<td colspan="3" class="thumb__area">
										<div
											style="float: left margin-right:10px"
										>
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
											<div class="search-desc">
												<p>
													배너 이미지는 1개까지 등록할
													수 있습니다. 용량은 5MB를
													넘을 수 없습니다.
												</p>
											</div>
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
				<div class="btn_area" align="center">
					<v-btn color="primary" dark outlined> 취소 </v-btn>
					<v-btn color="primary" dark> 등록하기 </v-btn>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	el: '#app',
	data() {
		return {
			categori: ['마이데이터', '특화데이터'],
			detail: [
				'공통업권',
				'은행업권',
				'카드업권',
				'금융투자업권',
				'보험업권',
				'전자금융업권',
				'할부금융업권',
				'보증보험업권',
			],
			file: '',
			dragging: false,
			dialog: false,
			dialog_chk: false,
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			singleSelect: false,
			selected: [],
			items: [{ code: '', desc: '', delete: '' }],
			rules: {
				categori_rule: value => !!value || '카테고리를 선택해 주세요.',
				detail_rule: value => !!value || '상세구분을 선택해 주세요.',
				title_rule: value => !!value || '제목을 입력해 주세요.',
				project_desc_rule: value => !!value || '설명을 입력해 주세요.',
			},
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
