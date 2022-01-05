<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>인스턴스 등록 및 수정</h5>
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
										식별자
										<span class="asterisk">필수</span>
									</th>
									<td>137961000</td>
								</tr>
								<tr>
									<th>
										인스턴스명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="인스턴스명을 입력하세요"
											single-line
											clearable
											outlined
											v-model="instance_name"
											:rules="[
												rules.required,
												rules.instance_name,
											]"
											hide-details="auto"
										>
											<template slot="append-outer">
												<v-btn
													color="primary"
													dark
													@click="dialog_chk = true"
												>
													중복체크
												</v-btn>
												<v-dialog
													v-model="dialog_chk"
													max-width="350"
												>
													<v-card align="center">
														<v-card-title
															class="
																text-subtitle-1
															"
															align="text-center"
														>
															등록가능한
															인스턴스명입니다.<br />
															등록하시겠습니까?
														</v-card-title>
														<v-card-text></v-card-text>

														<v-card-actions>
															<v-spacer></v-spacer>
															<v-btn
																color="primary"
																dark
																@click="
																	dialog_chk = false
																"
															>
																확인
															</v-btn>
														</v-card-actions>
													</v-card>
												</v-dialog>
											</template>
										</v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										인스턴스 정의
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="인스턴스 정의 입력하세요"
											single-line
											clearable
											outlined
											v-model="instance_desc"
											:rules="[
												rules.required,
												rules.instance_desc,
											]"
											hide-details="auto"
										>
										</v-text-field>
									</td>
								</tr>
								<tr>
									<th>인스턴스 코드</th>
									<td>
										<v-btn
											color="primary"
											dark
											@click="addRow"
										>
											행추가하기
										</v-btn>
										<v-btn
											class="box"
											small
											@click="removeRow(row)"
										>
											삭제하기
										</v-btn>
										<div style="margin-top: 16px">
											<v-data-table
												:headers="headers"
												:items="items"
												:items-per-page="itemsPerPage"
												:single-select="singleSelect"
												show-select
												hide-default-footer
												class="elevation-1"
											>
												<template v-slot:item="row">
													<tr>
														<td>
															{{
																row.item
																	.singleSelect
															}}
														</td>
														<td>
															<v-text-field
																placeholder="인스턴스코드를 입력하세요"
																single-line
																clearable
																outlined
																v-model="
																	instance_code
																"
																:rules="[
																	rules.required,
																	rules.instance_code,
																]"
																hide-details="auto"
															>
															</v-text-field>
														</td>
														<td>
															<v-text-field
																placeholder="인스턴스코드 정의를 입력하세요"
																single-line
																clearable
																outlined
																v-model="
																	instance_code_desc
																"
																:rules="[
																	rules.required,
																	rules.instance_code_desc,
																]"
																hide-details="auto"
															>
															</v-text-field>
														</td>
														<td>
															<v-btn
																small
																@click="
																	removeRow(
																		row,
																	)
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
												</template>
											</v-data-table>
										</div>
									</td>
								</tr>
								<tr>
									<th>인스턴스코드 일괄 업로드</th>
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
										<div class="btn">
											<v-btn class="box">
												엑셀 양식 다운로드
											</v-btn>
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
					<v-btn color="primary" dark outlined @click="dialog = true">
						삭제하기
					</v-btn>
					<v-btn color="primary" dark> 등록하기 </v-btn>
					<v-dialog v-model="dialog" max-width="350">
						<v-card align="center">
							<v-card-title
								class="text-subtitle-1"
								align="text-center"
							>
								선택 항목을 삭제하시겠습니까?
							</v-card-title>
							<v-card-text></v-card-text>

							<v-card-actions>
								<v-spacer></v-spacer>

								<v-btn
									color="primary"
									dark
									outlined
									@click="dialog = false"
								>
									취소
								</v-btn>

								<v-btn
									color="primary"
									dark
									@click="dialog = false"
								>
									등록하기
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
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
			file: '',
			dragging: false,
			dialog: false,
			dialog_chk: false,
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '인스턴스 코드',
					align: 'center',
					sortable: false,
					value: 'code',
				},
				{
					text: '인스턴스코드 정의',
					align: 'center',
					sortable: false,
					value: 'desc',
				},
				{
					text: '삭제',
					align: 'center',
					sortable: false,
					value: 'delete',
				},
			],
			items: [{ code: '', desc: '', delete: '' }],
			rules: {
				instance_name: value =>
					!!value || '인스턴스명을 입력해 주세요.',
				instance_desc: value =>
					!!value || '인스턴스명 정의를 입력해 주세요.',
				instance_code: value =>
					!!value || '인스턴스코드를 입력해 주세요',
				instance_code_desc: value =>
					!!value || '인스턴스코드 정의를 입력해 주세요.',
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
