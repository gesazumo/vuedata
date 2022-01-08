<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>메뉴관리</h5>
				<div class="menu_lst">
					<v-row>
						<v-btn small outlined>모두 접기</v-btn>
						<v-btn small outlined>모두 펼치기</v-btn>
						<v-btn color="primary" dark small outlined>
							모두 등록하기
						</v-btn>
					</v-row>
					<v-row>메뉴트리</v-row>
				</div>
				<div class="menu_view">
					<!--메뉴관리 ppt 5p-->
					<div class="table_box">
						<p class="pt-2 pb-4 font-weight-bold">
							기본 정보
							<v-btn
								color="primary"
								dark
								small
								outlined
								style="float: right"
								>수정하기</v-btn
							>
						</p>
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="160" />
								<col width="180" />
								<col width="160" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>메뉴 구분</th>
									<td colspan="3">일반</td>
								</tr>
								<tr>
									<th rowspan="2">메뉴 Depth</th>
									<td>1</td>
									<th rowspan="2">상위 메뉴 ID</th>
									<td>N/A</td>
								</tr>
								<tr>
									<td>2</td>
									<td>TAH-EXP001</td>
								</tr>
								<tr>
									<th>메뉴 순서</th>
									<td>4</td>
									<th>메뉴 ID</th>
									<td>TAH-EXP004</td>
								</tr>
								<tr>
									<th>메뉴명</th>
									<td colspan="3">마이데이터 리스트</td>
								</tr>
								<tr>
									<th>설명</th>
									<td colspan="3">마이데이터 목록 및 검색</td>
								</tr>
								<tr>
									<th>URL 주소</th>
									<td colspan="3">/explore/mydata/list</td>
								</tr>
								<tr>
									<th>사용 여부</th>
									<td>Y</td>
									<th>노출 여부</th>
									<td>N</td>
								</tr>
							</tbody>
						</table>
						<p class="pt-8 pb-4 font-weight-bold">권한 설정</p>
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="160" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>접근 가능 그룹</th>
									<td>
										일반 사용자, 일반 관리자, 통합 관리자
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--메뉴관리 ppt 6p-->
					<div class="table_box" style="display: none">
						<p class="pt-2 pb-4 font-weight-bold">기본 정보</p>
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="160" />
								<col width="180" />
								<col width="160" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>
										메뉴 구분
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											placeholder="메뉴 구분을 선택하세요"
											outlined
											hide-details="auto"
											:items="menu1"
											v-model="menu"
											:rules="menu1Rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										메뉴 Depth
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											placeholder="메뉴 Depth를 선택하세요"
											outlined
											hide-details="auto"
											:items="menu2"
											v-model="menu"
											:rules="menu2Rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										상위 메뉴
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-row>
											<v-select
												placeholder="1 Depth 메뉴"
												outlined
												hide-details="auto"
												v-model="menu"
												:rules="menu3Rules"
												style="
													width: 120px;
													margin-right: 8px;
												"
											></v-select>
											<v-select
												placeholder="2 Depth 메뉴"
												outlined
												hide-details="auto"
												style="width: 120px"
											></v-select>
										</v-row>
									</td>
								</tr>
								<tr>
									<th>
										메뉴 순서
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											placeholder="메뉴 순서를 선택하세요"
											outlined
											hide-details="auto"
											:items="menu4"
											v-model="menu"
											:rules="menu4Rules"
											style="width: 225px"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>메뉴 ID</th>
									<td colspan="3">TAH-EXP001</td>
								</tr>
								<tr>
									<th>
										메뉴명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="메뉴명을 입력하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="menu"
											:rules="menu5Rules"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										설명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											placeholder="설명을 입력하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="menu"
											:rules="menu6Rules"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										URL 주소
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											prefix="/explore/mydata/"
											placeholder="URL 주소를 입력하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="menu"
											:rules="menu7Rules"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										사용여부
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-switch
											v-model="switch1"
											color="orange"
											value=""
											hide-details
										></v-switch>
									</td>
									<th>
										노출여부
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-switch
											v-model="switch2"
											color="orange"
											value=""
											hide-details
										></v-switch>
									</td>
								</tr>
							</tbody>
						</table>
						<p class="pt-8 pb-4 font-weight-bold">권한 설정</p>
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="160" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>
										접근 가능 그룹
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-row>
											<v-checkbox
												label="일반 사용자"
												hide-details
											></v-checkbox>
											<v-checkbox
												label="일반 관리자"
												hide-details
											></v-checkbox>
											<v-checkbox
												label="통합 관리자"
												hide-details
											></v-checkbox>
										</v-row>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--메뉴관리 ppt 7p-->
					<div class="table_box" style="display: none">
						<p class="pt-2 pb-4 font-weight-bold">기본 정보</p>
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="160" />
								<col width="180" />
								<col width="160" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>
										메뉴 구분
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											label="일반"
											placeholder="메뉴 구분을 선택하세요"
											outlined
											hide-details="auto"
											:items="menu1"
											v-model="menu"
											:rules="menu1Rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										메뉴 Depth
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											label="2 Depth"
											placeholder="메뉴 Depth를 선택하세요"
											outlined
											hide-details="auto"
											:items="menu2"
											v-model="menu"
											:rules="menu2Rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										상위 메뉴
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-row>
											<v-select
												label="Explore"
												placeholder=""
												outlined
												hide-details="auto"
												v-model="menu"
												:rules="menu3Rules"
												style="
													width: 120px;
													margin-right: 8px;
												"
											></v-select>
										</v-row>
									</td>
								</tr>
								<tr>
									<th>
										메뉴 순서
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-select
											label="5"
											placeholder="메뉴 순서를 선택하세요"
											outlined
											hide-details="auto"
											:items="menu4"
											v-model="menu"
											:rules="menu4Rules"
											style="width: 250px"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>메뉴 ID</th>
									<td colspan="3">TAH-EXP001</td>
								</tr>
								<tr>
									<th>
										메뉴명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											label="My Data 리스트"
											placeholder="메뉴명을 입력하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="menu"
											:rules="menu5Rules"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										설명
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											label="마이데이터 목록 및 검색"
											placeholder="설명을 입력하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="menu"
											:rules="menu6Rules"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										URL 주소
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										<v-text-field
											label="list"
											prefix="/explore/mydata/"
											placeholder="URL 주소를 입력하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="menu"
											:rules="menu7Rules"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										사용여부
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											label="Y"
											outlined
											hide-details="auto"
										></v-select>
									</td>
									<th>
										노출여부
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											label="N"
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
							</tbody>
						</table>
						<p class="pt-8 pb-4 font-weight-bold">권한 설정</p>
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="160" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>
										접근 가능 그룹
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-row>
											<v-checkbox
												label="일반 사용자"
												hide-details
											></v-checkbox>
											<v-checkbox
												label="일반 관리자"
												hide-details
											></v-checkbox>
											<v-checkbox
												label="통합 관리자"
												hide-details
											></v-checkbox>
										</v-row>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--하단버튼 영역은 ppt기준 6, 7p에서만 나와요-->
					<div class="btn_area center pt-8">
						<v-btn color="primary" dark outlined> 취소 </v-btn>
						<v-btn color="primary" dark> 수정하기 </v-btn>
						<v-btn color="primary" dark> 등록하기 </v-btn>
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
			menu1: ['일반', 'Admin'],
			menu2: ['1 Depth', '2 Depth', '3 Depth'],
			menu4: ['1', '2', '3', '4', '5'],
			switch1: false,
			switch2: true,
			menu1Rules: [v => !!v || '메뉴 구분을 선택해 주세요.'],
			menu2Rules: [v => !!v || '메뉴 Depth를 선택해 주세요.'],
			menu3Rules: [v => !!v || '메뉴 위치를 선택해 주세요.'],
			menu4Rules: [v => !!v || '메뉴 순서를 선택해 주세요.'],
			menu5Rules: [v => !!v || '메뉴명을 입력해 주세요.'],
			menu6Rules: [v => !!v || '메뉴에 대한 설명을 입력해 주세요.'],
			menu7Rules: [v => !!v || 'URL 주소를 입력해 주세요.'],
		}
	},
}
</script>
