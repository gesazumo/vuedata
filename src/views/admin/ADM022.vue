<template>
	<div class="adm_contents">
		<div class="inner">
			<v-form ref="form">
				<h5>공지사항 등록</h5>
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
										<v-radio-group
											row
											hide-details="auto"
											v-model="param.dstic"
										>
											<v-radio
												v-for="code in $getCmCode(
													'notiCmCodeDstic',
												)"
												:key="code.cmnCd"
												:label="code.cmnCdNm"
												:value="code.cmnCd"
											/>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>카테고리</th>
									<td>
										<v-radio-group
											row
											hide-details="auto"
											v-model="param.kategorie"
										>
											<v-radio
												v-for="code in $getCmCode(
													'notiCmCodeKate',
												)"
												:key="code.cmnCd"
												:label="code.cmnCdNm"
												:value="code.cmnCd"
											/>
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
											required
											@close="checkEventEndValid = true"
											v-model="param.eventend"
											placeholder="날짜 선택"
										/>
										<div
											v-if="
												checkEventEndValid &&
												eventEndValid
											"
										>
											날짜 선택은 필수입니다.
										</div>
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
											v-model="param.title"
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
										<v-radio-group
											row
											hide-details="auto"
											v-model="param.posting"
										>
											<v-radio
												v-for="code in $getCmCode(
													'notiCmCodePosting',
												)"
												:key="code.cmnCd"
												:label="code.cmnCdNm"
												:value="code.cmnCd"
											/>
										</v-radio-group>
									</td>
								</tr>
								<tr
									v-if="
										param.posting ==
										$getCmCode('notiCmCodePosting')[1].cmnCd
									"
								>
									<th>
										기간
										<span class="asterisk">필수</span>
									</th>
									<td>
										<date-picker
											v-model="registDate"
											range
											placeholder="기간 선택"
											required
											@close="checkRegistDateValid = true"
										/>
										<div
											v-if="
												checkRegistDateValid &&
												registDateValid
											"
										>
											기간선택은 필수입니다.
										</div>
									</td>
								</tr>
								<tr>
									<th>
										본문
										<span class="asterisk">필수</span>
									</th>
									<td>
										<vue-editor
											@blur="checkMainText = true"
											v-model="param.maintext"
											outlined
											clearable
											id="abc"
											:rules="subjectRules"
										></vue-editor>
										<div
											class="v-messages__message"
											v-if="
												checkMainText && isMainTextEmpty
											"
										>
											본문입력은 필수입니다.
										</div>
									</td>
								</tr>
								<tr>
									<th>첨부파일</th>
									<td>
										<v-btn
											color="primary"
											dark
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
				<vue-dropzone
					ref="myVueDropzone"
					id="dropzone"
					@vdropzone-thumbnail="thumbnail"
					:options="dropzoneOptions"
				>
					<div class="dropzone-custom-content">
						<h3 class="dropzone-custom-title">
							Drag and drop to upload content!
						</h3>
						<div class="subtitle">
							...or click to select a file from your computer
						</div>
					</div>
				</vue-dropzone>
				<div class="btn_area center">
					<v-btn color="primary" dark outlined @click="$router.go()">
						취소
					</v-btn>
					<v-btn color="primary" dark @click="doCreate">
						등록하기
					</v-btn>
				</div>
			</v-form>
		</div>
	</div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import DatePicker from 'vue2-datepicker'
import { VueEditor } from 'vue2-editor'
import { createNoticesApi } from '@/api/modules/notieceAPI'
export default {
	components: {
		vueDropzone: vue2Dropzone,
		DatePicker,
		VueEditor,
	},
	data() {
		return {
			dropzoneOptions: {
				url: 'https://httpbin.org/post',
				thumbnailWidth: 0,
				maxFilesize: 0.5,
				addRemoveLinks: true,
				headers: { 'My-Awesome-Header': 'header value' },
			},
			param: {
				dstic: this.$getCmCode('notiCmCodeDstic')[0].cmnCd,
				kategorie: this.$getCmCode('notiCmCodeKate')[0].cmnCd,
				eventend: null,
				title: null,
				posting: this.$getCmCode('notiCmCodePosting')[0].cmnCd,
				startdate: null,
				enddate: null,
				maintext: null,
			},
			subjectRules: [
				this.requiredValid('공지사항 제목을 입력해 주세요.'),
			],
			checkRegistDateValid: false,
			checkEventEndValid: false,
			checkMainText: false,
			isMainTextEmpty: true,
			textareaRules: [v => !!v || '공지사항 본문을 입력해 주세요.'],
			handleFileImport: '',
			dragging: false,
			file: '',
		}
	},
	methods: {
		async doCreate() {
			if (
				!(await this.$confirm(
					'공지사항을 등록하시겠습니까?',
					'등록하기',
				))
			)
				return
			this.checkRegistDateValid = true
			this.checkMainText = true
			this.checkEventEndValid = true
			if (!this.$refs.form.validate()) return
			if (
				this.param.posting ==
				this.$getCmCode('notiCmCodePosting')[1].cmnCd
			) {
				if (this.checkRegistDateValid && this.registDateValid) return
			}
			if (this.isMainTextEmpty) return
			try {
				await createNoticesApi(this.param)
				this.$showInfo('등록되었습니다.')
				this.$router.push({ name: 'adm021' })
			} catch (error) {
				this.$showInfo('등록실패. ')
				console.log(error)
			}
		},
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
	watch: {
		'param.maintext'() {
			this.isMainTextEmpty =
				document
					.getElementsByClassName('ql-editor')[0]
					?.outerText.trim() == ''
					? true
					: false
		},
		checkMainText(value) {
			if (value) {
				this.isMainTextEmpty = document.getElementsByClassName(
					'ql-editor',
				)[0]?.outerText
					? false
					: true
			}
		},
	},
	computed: {
		registDate: {
			get() {
				return [this.param.startdate, this.param.enddate]
			},
			set(value) {
				this.param.startdate = value[0]
				this.param.enddate = value[1]
			},
		},
		registDateValid() {
			return this.registDate[0] == null && this.registDate[1] == null
		},
		eventEndValid() {
			return this.param.eventend == null
		},
	},
}
</script>

<style></style>
