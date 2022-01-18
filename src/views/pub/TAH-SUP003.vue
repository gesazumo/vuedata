<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<h3>FAQ</h3>
			</div>
			<div class="title_txt">
				<div class="txt">
					분석가 포털 이용방법부터 데이터 권한 신청, 분석환경 활용까지
					자주 묻는 질문을 확인하세요.<br />
					찾으시는 답변이 없는 경우 문의하기를 통해 질문 하실 수
					있습니다.
				</div>
				<div class="btn">
					<v-btn color="primary" dark large outlined
						>문의하기 바로가기</v-btn
					>
				</div>
			</div>
			<div class="sub_search">
				<div class="inner">
					<h5>자주 묻는 질문을 모았습니다.</h5>
					<v-text-field
						placeholder="검색어를 입력해 주세요."
						outlined
						clearable
						hide-details="auto"
						append-inner-icon="fa fa-search"
						style="width: 446px"
					>
						<template v-slot:append>
							<i class="fa fa-search"></i>
						</template>
					</v-text-field>
				</div>
			</div>

			<div class="board_list_tab">
				<v-card style="width: 100%">
					<v-tabs class="tab5" center-active centered v-model="tab">
						<v-tab> 전체 <span>00</span> </v-tab>
						<v-tab> 포털 이용 <span>00</span> </v-tab>
						<v-tab> 데이터 권한 신청 <span>00</span> </v-tab>
						<v-tab> 분석환경 활용 <span>00</span> </v-tab>
						<v-tab> 기타 <span>00</span> </v-tab>
					</v-tabs>
				</v-card>
			</div>
			<div class="subcontents" style="padding: 0 56px 56px">
				<v-tabs-items v-model="tab">
					<v-tab-item>
						<div class="board_list">
							<div class="list">
								<div class="list_tit">
									<div class="tit">
										총 <span>00</span>개의 질문이 있습니다.
									</div>
								</div>
								<div class="faq">
									<v-row justify="center">
										<v-expansion-panels accordion>
											<v-expansion-panel
												v-for="(item, i) in 5"
												:key="i"
											>
												<v-expansion-panel-header>
													<div class="faq_list">
														<ul>
															<li class="type">
																<span class="q"
																	>Q</span
																>
																카테고리
															</li>
															<li>
																질문질문질문 FAQ
																질문입니다?
															</li>
														</ul>
													</div>
												</v-expansion-panel-header>
												<v-expansion-panel-content>
													<div class="faq_content">
														<ul>
															<li class="type">
																<span class="a"
																	>A</span
																>
															</li>
															<li>
																마이페이지>
																프로필 관리’
																메뉴에서 프로필
																정보를 수정할 수
																있습니다.<br />
																‘마이페이지>
																프로필 관리’
																메뉴에서 프로필
																정보를 수정할 수
																있습니다.
																‘마이페이지>
																프로필 관리’
																메뉴에서 프로필
																정보를 수정할 수
																있습니다.
																<br />
																<img
																	src="@/images/main_illust_01.png"
																/>
															</li>
														</ul>
													</div>
												</v-expansion-panel-content>
											</v-expansion-panel>
										</v-expansion-panels>
									</v-row>
								</div>
							</div>
							<div class="btnArea">
								<v-btn
									color="primary"
									large
									outlined
									style="width: 446px"
								>
									<span style="color: #f26615">20</span>개의
									목록 더보기
									<i class="fa fa-chevron-down"></i>
								</v-btn>
							</div>
						</div>
					</v-tab-item>
				</v-tabs-items>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			tab: null,
		}
	},
}
</script>
