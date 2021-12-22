<template>
	<div class="adm_wrap">
		<!-- <div id="lnb"></div> -->
		<div class="adm_contents">
			<div class="inner">
				<h5>인사이트 리포트 등록 및 수정</h5>
				<div class="item_box">
					<table class="tb_write">
						<caption>
							table caption
						</caption>
						<colgroup>
							<col width="22%" />
							<col width="" />
						</colgroup>
						<tbody>
							<tr>
								<th>카테고리</th>
								<td>
									<v-radio-group row>
										<v-radio label="트렌드 리포트"
											>트렌드 리포트</v-radio
										>
										<v-radio label="전문가 리포트"
											>전문가 리포트</v-radio
										>
										<v-radio label="뉴스레터"
											>뉴스레터</v-radio
										>
									</v-radio-group>
								</td>
							</tr>
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
												color="secondary"
												style="
													background: none !important;
												"
											>
												<v-icon>mdi-help-circle</v-icon>
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
												하이라이트 리포트를 설정할 수
												있습니다.
											</p>
											<span>
												[일반] Share > 인사이트 리포트
												목록으로 디스플레이<br />
												[메인] Share sub main과 인사이트
												리포트 리스트 페이지 <br />
												상단 하이라이트 리포트 영역에
												디스플레이
											</span>
										</div>
									</v-tooltip>
								</th>
								<td>
									<v-radio-group row>
										<v-radio label="일반">일반</v-radio>
										<v-radio label="메인">메인</v-radio>
									</v-radio-group>
								</td>
							</tr>
							<tr>
								<th>
									Topic <span class="asterisk">필수</span>
								</th>
								<td>
									<v-select
										:items="items1"
										:rules="[
											() =>
												!!meg ||
												'Topic을 선택해 주세요',
										]"
										:error-messages="errorMessages"
										label="Topic을 선택하세요"
										single-line
										outlined
									></v-select>
								</td>
							</tr>
							<tr>
								<th>
									기획연재 여부
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-radio-group row>
										<v-radio label="단편 리포트"
											>단편 리포트</v-radio
										>
										<v-radio label="기획연재"
											>기획연재</v-radio
										>
									</v-radio-group>
								</td>
							</tr>
							<tr>
								<th>
									기획연재 주제
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-select
										:items="items2"
										:rules="[
											() =>
												!!meg ||
												'기획연재 주제를 선택해 주세요',
										]"
										:error-messages="errorMessages"
										label="기획연재 주제를 선택하세요"
										single-line
										outlined
									></v-select>
								</td>
							</tr>
							<tr>
								<th>제목 <span class="asterisk">필수</span></th>
								<td>
									<v-text-field
										:rules="[
											() =>
												!!meg ||
												'리포트 제목을 입력해 주세요',
										]"
										:error-messages="errorMessages"
										placeholder="제목을 입력하세요"
										clearable
										outlined
									></v-text-field>
								</td>
							</tr>
							<tr>
								<th>
									뉴스레터 회차
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-select
										:items="items3"
										:rules="[
											() =>
												!!meg ||
												'뉴스레터를 선택해 주세요',
										]"
										:error-messages="errorMessages"
										label="뉴스레터를 선택하세요"
										single-line
										outlined
										style="
											float: left;
											margin-right: 4px;
											width: 40% !important;
										"
									></v-select>
									<v-select
										:items="items4"
										:rules="[
											() =>
												!!meg ||
												'뉴스레터를 회차를 선택해 주세요',
										]"
										:error-messages="errorMessages"
										label="회차를 선택하세요"
										single-line
										outlined
										style="width: 20% !important"
									></v-select>
								</td>
							</tr>
							<tr>
								<th>
									요약문장 <span class="asterisk">필수</span>
								</th>
								<td>
									<v-text-field
										:rules="[
											() =>
												!!meg ||
												'요약문장을 입력해 주세요',
										]"
										:error-messages="errorMessages"
										placeholder="요약문장을 입력하세요"
										clearable
										outlined
									></v-text-field>
								</td>
							</tr>
							<tr>
								<th>본문 <span class="asterisk">필수</span></th>
								<td>
									<v-textarea
										:rules="[
											() =>
												!!meg || '본문을 입력해 주세요',
										]"
										:error-messages="errorMessages"
										placeholder="본문을 입력하세요/Editor"
										clearable
										outlined
									></v-textarea>
								</td>
							</tr>
							<tr>
								<th>
									결론문장 <span class="asterisk">필수</span>
								</th>
								<td>
									<v-text-field
										:rules="[
											() =>
												!!meg ||
												'결론문장을 입력해 주세요',
										]"
										:error-messages="errorMessages"
										placeholder="결론문장을 입력하세요"
										clearable
										outlined
									></v-text-field>
								</td>
							</tr>
							<tr>
								<th>
									작성자 <span class="asterisk">필수</span>
								</th>
								<td>
									<v-row>
										<v-col cols="3">
											<v-text-field
												placeholder="이름을 입력하세요"
												clearable
												outlined
												append-outer-icon="fa fa-search"
											>
												<template v-slot:append-outer>
													<button class="search-in">
														<i
															class="fa fa-search"
														></i>
													</button>
												</template>
											</v-text-field>
										</v-col>
									</v-row>
									<div class="table_box">
										<v-data-table
											:headers="headers"
											:items="items5"
											:items-per-page="itemsPerPage"
											hide-default-footer
											class="elevation-1"
										></v-data-table>
									</div>
								</td>
							</tr>
							<tr>
								<th>
									작성자 프로필 이미지
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
												color="secondary"
												style="
													background: none !important;
												"
											>
												<v-icon>mdi-help-circle</v-icon>
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
												프로필 이미지 등록을 위한
												주의사항을 확인하세요.
											</p>
											<span>
												이미지 가이드 확인 후 작성!!
											</span>
										</div>
									</v-tooltip>
								</th>
								<td>
									<v-text-field
										placeholder="결론문장을 입력하세요"
										clearable
										outlined
									></v-text-field>
								</td>
							</tr>
							<tr>
								<th>
									작성자 소개
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-text-field
										placeholder="작성자 소개를 입력하세요"
										clearable
										outlined
									></v-text-field>
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
												color="secondary"
												style="
													background: none !important;
												"
											>
												<v-icon>mdi-help-circle</v-icon>
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
												썸네일 이미지 등록을 위한
												주의사항을 확인하세요.
											</p>
											<span>
												이미지 가이드 확인 후 작성!!
											</span>
										</div>
									</v-tooltip>
								</th>
								<td></td>
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
												color="secondary"
												style="
													background: none !important;
												"
											>
												<v-icon>mdi-help-circle</v-icon>
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
												배너 이미지 등록을 위한
												주의사항을 확인하세요.
											</p>
											<span>
												이미지 가이드 확인 후 작성!!
											</span>
										</div>
									</v-tooltip>
								</th>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="btn_area">
					<button class="cancel large">취소</button>
					<button class="regit large">등록하기</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items1: [
				'Tppic:전체',
				'머신러닝/딥러닝',
				'인공지능',
				'클라우드',
				'데이터',
				'디지털',
				'자동화/협업',
			],
			items2: ['기획연재 주제'],
			items3: ['뉴스레터 카테고리'],
			items4: ['뉴스레터 회차'],
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			headers: [
				{
					text: '회사명',
					align: 'center',
					sortable: false,
					value: 'company',
				},
				{
					text: '부서',
					align: 'center',
					sortable: false,
					value: 'team',
				},
				{
					text: '이름',
					align: 'center',
					sortable: false,
					value: 'name',
				},
				{
					text: '사번',
					align: 'center',
					sortable: false,
					value: 'companyid',
				},
				{
					text: '삭제',
					align: 'center',
					sortable: false,
					value: 'delete',
				},
			],
			items5: [
				{
					company: 'KB국민은행',
					team: '경영연구소1',
					name: '김국민',
					companyid: 'H00001',
					delete: '',
				},
				{
					company: 'KB국민은행',
					team: '경영연구소2',
					name: '김스타',
					companyid: 'H00007',
					delete: '',
				},
			],
		}
	},
}
</script>
