<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>테이블 등록 및 수정</h5>
				<div class="item_box">
					<div class="table_box">
						<p class="font-weight-bold pb-3">테이블 정보</p>
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
											label="마이데이터"
											placeholder="카테고리를 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
									<th>
										계열사구분
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											label="그룹공통"
											placeholder="계열사를 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										마이데이터 업권
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											label="공통업권"
											placeholder="마이데이터 업권을 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										특화데이터 구분
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											placeholder="특화데이터 구분을 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										Feature Store 구분
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											placeholder="Feature Store 구분을 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										테이블명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											label="TCTAHES01"
											placeholder="테이블명을 입력해 주세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										>
											<template slot="append-outer">
												<v-btn
													color="primary"
													dark
													@click="dialog = true"
												>
													중복체크
												</v-btn>
												<v-dialog
													v-model="dialog"
													max-width="350"
												>
													<v-card align="center">
														<v-card-title
															class="
																text-subtitle-1
															"
															align="text-center"
														>
															사용하실 수 있는
															테이블명입니다.<br />
															등록하시겠습니까?
														</v-card-title>
														<v-card-text></v-card-text>

														<v-card-actions>
															<v-spacer></v-spacer>
															<v-btn
																color="primary"
																dark
																@click="
																	dialog = false
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
									<th>
										테이블한글명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											label="마이데이터 가입자 정보"
											placeholder="테이블한글명을 입력해 주세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										테이블 정의
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											label="마이데이터 서비스 가입자 통계 수집을 위한 테이블입니다"
											placeholder="테이블 정의를 입력해 주세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										보관기간
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											label="999"
											placeholder="보관기간을 입력해 주세요"
											single-line
											clearable
											outlined
											hide-details="auto"
											style="width: 312px"
										>
											<template slot="append-outer">
												<div
													style="
														line-height: 40px;
														padding-left: 10px;
													"
												>
													개월
												</div>
											</template>
										</v-text-field>
									</td>
									<th>
										전송주기
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											label="일"
											placeholder="전송주기를 선택해 주세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										타켓파일경로
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											label="/data/{KXX, KBO}/RCV/"
											placeholder="타겟파일경로를 입력해 주세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										타켓파일명1
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											label="KBO_KFG_D_IRP-001_001_YYYYMMDD.dat"
											placeholder="타겟파일명을 입력해 주세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>타켓파일명2</th>
									<td colspan="3">
										<v-text-field
											label="KBO_KFG_D_IRP-001_001_YYYYMMDD.chk"
											placeholder="타겟파일명을 입력해 주세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>파티션테이블 여부</th>
									<td colspan="3">
										<v-radio-group row hide-details="auto">
											<v-radio label="No"></v-radio>
											<v-radio label="Yes"></v-radio>
										</v-radio-group>
									</td>
								</tr>
								<tr>
									<th>
										파티션타입내용
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="파티션 타입내용을 입력 하세요"
											single-line
											clearable
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
							</tbody>
						</table>

						<p class="font-weight-bold pb-3 mt-10">컬럼 정보</p>
						<div class="btn_area">
							<v-btn color="primary" dark> 행추가하기 </v-btn>
							<v-btn color="primary" dark outlined>
								삭제하기
							</v-btn>
						</div>
						<v-data-table
							:headers="headers"
							:items="items"
							:single-select="singleSelect"
							show-select
							hide-default-footer
							class="elevation-1"
						>
						</v-data-table>

						<p class="font-weight-bold pb-3 mt-10">
							결재 요청 정보
						</p>
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
										테이블 수정 요청 사유
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-textarea
											single-line
											outlined
											placeholder="요청 사유를 입력 하세요"
											hide-details="auto"
										>
										</v-textarea>
									</td>
								</tr>
								<tr>
									<th>결재자</th>
									<td>
										<v-text-field
											label="강태근 (KB 국민은행, 데이터기획부)"
											single-line
											outlined
											filled
											disabled
											hide-details="auto"
										>
										</v-text-field>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="btn_area" align="center">
					<v-btn color="primary" dark outlined> 취소 </v-btn>
					<v-btn color="primary" dark> 수정요청하기 </v-btn>
				</div>
			</div>
		</div>
	</v-app>
</template>
<script>
export default {
	data() {
		return {
			dialog: false,
			page: 1,
			pageCount: 0,
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '컬럼명 *',
					align: 'center',
					sortable: false,
					value: 'name',
				},
				{
					text: '영문컬럼명',
					align: 'center',
					sortable: false,
					value: 'b',
				},
				{
					text: 'PK여부 *',
					align: 'center',
					sortable: false,
					value: 'c',
				},
				{
					text: 'Null 구분 *',
					align: 'center',
					sortable: false,
					value: 'd',
				},
				{
					text: '개인정보 여부 *',
					align: 'center',
					sortable: false,
					value: 'e',
				},
				{
					text: '데이터 타입 *',
					align: 'center',
					sortable: false,
					value: 'f',
				},
				{
					text: '데이터 길이 *',
					align: 'center',
					sortable: false,
					value: 'g',
				},
				{
					text: '소수점 길이 *',
					align: 'center',
					sortable: false,
					value: 'aa',
				},
				{
					text: '인스턴스명 *',
					align: 'center',
					sortable: false,
					value: 'bb',
				},
				{
					text: '식별자',
					align: 'center',
					sortable: false,
					value: 'cc',
				},
				{
					text: '컬럼정의 *',
					align: 'center',
					sortable: false,
					value: 'dd',
				},
				{
					text: '비고',
					align: 'center',
					sortable: false,
					value: 'ee',
				},
			],
			items: [],
		}
	},
}
</script>
