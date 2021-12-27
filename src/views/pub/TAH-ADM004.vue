<template>
	<div class="adm_wrap">
		<div id="lnb"></div>
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
								<col width="20%" />
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
											label=""
											placeholder="인스턴스명을 입력하세요"
											single-line
											clearable
											outlined
										>
											<template slot="append-outer">
												<v-btn color="primary" dark>
													중복체크
												</v-btn>
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
											label=""
											placeholder="인스턴스 정의 입력하세요"
											single-line
											clearable
											outlined
										>
										</v-text-field>
									</td>
								</tr>
								<tr>
									<th>인스턴스 코드</th>
									<td>
										<v-btn color="primary" dark
											>행추가하기</v-btn
										>
										<v-btn class="box" small
											>삭제하기</v-btn
										>
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
															>
															</v-text-field>
														</td>
														<td>
															<v-text-field
																placeholder="인스턴스코드 정의를 입력하세요"
																single-line
																clearable
																outlined
															>
															</v-text-field>
														</td>
														<td>
															<v-btn
																class="box"
																dark
																outlined
															>
																삭제
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
										<div class="table_box">
											<v-data-table
												:headers="file"
												:items="filelist"
												:height="120"
												fixed-header
												hide-default-footer
											>
												<template v-slot:item="row">
													<tr>
														<td>
															{{
																row.item
																	.filename
															}}
														</td>
														<td>
															{{
																row.item
																	.filesize
															}}
														</td>
														<td>
															<v-btn text x-small>
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
							</tbody>
						</table>
					</div>
				</div>
				<div class="btn_area">
					<button class="cancel large">취소</button>
					<button class="delete large">삭제하기</button>
					<button class="regit large">등록<!--수정-->하기</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
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
					value: 'a',
				},
				{
					text: '인스턴스코드 정의',
					align: 'center',
					sortable: false,
					value: 'b',
				},
				{
					text: '삭제',
					align: 'center',
					sortable: false,
					value: 'c',
				},
			],
			items: [
				{ a: '', b: '', c: '' },
				{ a: '', b: '', c: '' },
				{ a: '', b: '', c: '' },
			],
			file: [
				{
					text: '파일명',
					align: 'center',
					sortable: false,
					value: 'filename',
				},
				{
					text: '파일크기',
					align: 'center',
					sortable: false,
					value: 'filesize',
				},
				{
					text: '삭제',
					align: 'center',
					sortable: false,
					value: 'delete',
				},
			],
			filelist: [
				{
					filename: 'filename001.gif',
					filesize: '1,235KB',
					delete: '',
				},
				{
					filename: 'filename002.gif',
					filesize: '23,456KB',
					delete: '',
				},
			],
		}
	},
}
</script>
