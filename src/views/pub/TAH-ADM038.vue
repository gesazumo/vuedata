<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>오픈소스 라이브러리 등록 및 수정</h5>
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
								<!--//등록수정시 노출-->
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
									<td>H000000</td>
								</tr>
								<tr>
									<th>Project ID</th>
									<td colspan="3">PROJ-0001</td>
								</tr>
								<!--등록수정시 노출//-->
								<tr>
									<th>패키지 그룹</th>
									<td>
										<v-select
											:items="group"
											placeholder="패키지 그룹을 선택하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="group"
											:rules="[
												rules.required,
												rules.group_rule,
											]"
										>
										</v-select>
									</td>
									<th>
										패키지 버전
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="패키지 버전을 입력하세요"
											single-line
											clearable
											outlined
											v-moel="ver"
											:rules="[
												rules.required,
												rules.ver_rule,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>라이브러리명</th>
									<td>
										<v-text-field
											placeholder="라이브러리명을 입력하세요"
											single-line
											clearable
											outlined
											v-moel="libname"
											:rules="[
												rules.required,
												rules.libname_rule,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
									<th>라이브러리 버전</th>
									<td>
										<v-text-field
											placeholder="라이브러리 버전을 입력하세요"
											single-line
											clearable
											outlined
											v-moel="ver"
											:rules="[
												rules.required,
												rules.libver_rule,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										라이브러리 설명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="라이브러리 설명을 입력하세요"
											single-line
											clearable
											outlined
											v-moel="libdesc"
											:rules="[
												rules.required,
												rules.libdesc_rule,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										라이브러리 파일명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="라이브러리 파일명을 입력하세요"
											single-line
											clearable
											outlined
											v-moel="libfile"
											:rules="[
												rules.required,
												rules.libfile_rule,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										반입 신청 사유
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										SageMaker에서 bulitin으로 지원하지 않는
										라이브러리입니다.
									</td>
								</tr>
								<tr>
									<th>
										라이선스
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="라이선스 정보를 입력하세요"
											single-line
											clearable
											outlined
											v-model="license"
											:rules="[
												rules.required,
												rules.license_rule,
											]"
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										라이브러리 업로드
										<span class="asterisk">필수</span>
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
							</tbody>
						</table>
					</div>
					<div class="info_txt">
						<p>
							<i class="mdi mdi-information-outline"></i>
							라이브러리 업로드시 아래 링크를 통해 기존
							라이브러리와 필요 라이브러리 메타정보를 꼭 확인해
							주세요.
						</p>
						<span>
							<ul>
								<li>
									[Python]
									https://pypi.org/pypi/{패키지명}/{버전}/json
								</li>
								<li>
									[R]
									http://cran.seou.go.kr/src/contrib/PACKAGES
								</li>
								<li>
									[Anaconda]
									https://repo.anaconda.com/pkgs/main/linux-64/repodata.json
								</li>
							</ul>
						</span>
					</div>
					<div class="btn_area">
						<v-btn color="primary" dark large outlined>취소</v-btn>
						<v-btn color="primary" dark large> 수정하기 </v-btn>
						<v-btn
							color="primary"
							dark
							large
							@click="dialog = true"
						>
							반입 요청하기
						</v-btn>
						<v-dialog v-model="dialog" max-width="350">
							<v-card align="center">
								<v-card-title class="text-subtitle-1">
									라이브러리 반입을 요청하시겠습니까?
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
										요청하기
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</div>
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
			rules: {
				group_rule: value => !!value || '패키지 그룹을 선택해 주세요.',
				ver_rule: value => !!value || '패키지 버전을 입력해 주세요.',
				libname_rule: value =>
					!!value || '라이브러리명을 입력해 주세요.',
				libver_rule: value =>
					!!value || '라이브러리 버전을 입력해 주세요.',
				libdesc_rule: value =>
					!!value || '라이브러리 설명을 입력해 주세요.',
				libfile_rule: value =>
					!!value || '라이브러리 파일명을 입력해 주세요.',
				license_rule: value =>
					!!value || '라이선스 정보를 입력해 주세요.',
			},
			group: ['Python', 'R', 'Anaconda', '기타'],
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
