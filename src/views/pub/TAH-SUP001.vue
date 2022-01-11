<template>
	<v-app>
		<div id="subMain">
			<div
				class="sub_main_top"
				style="
					background: url('/img/main_bg.d9dcb9f0.png') center center
						no-repeat;
				"
			>
				<div class="sub_main_info">
					<p class="txt">
						플랫폼 활용방안 부터 기술지원 까지 One Stop Service
					</p>
					<h2>Support for Easy and Efficient Use</h2>
					<div class="sub_main_btn">
						<v-btn color="accent" large> 문의하러 가기 </v-btn>
					</div>
				</div>
			</div>
			<div id="exp_sub" class="sub_main_wrap">
				<div class="sub_main_support">
					<div class="sub_support_title">
						<h6>추가 지원이 필요하신가요?</h6>
						<hr />
					</div>
					<ul class="sub_support_menual">
						<li class="sub_support_menual_content">
							<img
								src="../../images/com_icon_menual.png"
								width="28"
								height="28"
							/>
							<h6 class="sub_support_menu-1">상세 매뉴얼</h6>
							<p class="sub_support_menu-2">
								데이터 검색부터 분석환경 신청 후 활용까지 상세
								내용 확인
							</p>
							<div>
								<button>
									바로가기
									<i
										class="fa fa-chevron-right"
										style="color: #ffbc00"
									></i>
								</button>
							</div>
						</li>
						<li class="sub_support_menual_content">
							<img
								src="../../images/com_icon_faq.png"
								width="28"
								height="28"
							/>
							<h6 class="sub_support_menu-1">FAQ</h6>
							<p class="sub_support_menu-2">
								자주 하는 질문 및 답변 확인
							</p>
							<div>
								<button>
									바로가기
									<i
										class="fa fa-chevron-right"
										style="color: #ffbc00"
									></i>
								</button>
							</div>
						</li>
						<li class="sub_support_menual_content">
							<img
								src="../../images/com_icon_manager.png"
								width="28"
								height="28"
							/>
							<h6 class="sub_support_menu-1">담당자</h6>
							<p class="sub_support_menu-2">
								계열사 별 담당자 및 기술지원을 위한 운영자 확인
							</p>
							<div>
								<button>
									바로가기
									<i
										class="fa fa-chevron-right"
										style="color: #ffbc00"
									></i>
								</button>
							</div>
						</li>
						<li class="sub_support_menual_content">
							<img
								src="../../images/com_icon_notice.png"
								width="28"
								height="28"
							/>
							<h6 class="sub_support_menu-1">공지사항</h6>
							<p class="sub_support_menu-2">
								공지사항에서 최신 뉴스 및 이벤트 확인
							</p>
							<div>
								<button>
									바로가기
									<i
										class="fa fa-chevron-right"
										style="color: #ffbc00"
									></i>
								</button>
							</div>
						</li>
					</ul>
				</div>
				<div class="sub_main_sec_support">
					<div class="btn-plus">
						<div class="tit_support">
							자주 묻는 질문 <span>TOP6</span>
						</div>
						<div class="btn-plus-item">
							<button>
								FAQ 전체보기
								<i
									class="fa fa-chevron-right"
									style="color: #ffbc00"
								></i>
							</button>
						</div>
					</div>
					<div class="sub_main_area">
						<div class="card_item_support">
							<div class="keyword_support">
								<span>포털</span>
							</div>
							<div class="cardtit_support">
								제목 표시 두줄까지 들어갑니다. 제목 표시
								두줄까지 들어갑니다.
							</div>
						</div>
						<div class="card_item_support">
							<div class="keyword_support">
								<span>데이터</span>
							</div>
							<div class="cardtit_support">
								제목 표시 두줄까지 들어갑니다. 제목 표시
								두줄까지 들어갑니다.
							</div>
						</div>
						<div class="card_item_support">
							<div class="keyword_support">
								<span>분석</span>
							</div>
							<div class="cardtit_support">
								제목 표시 두줄까지 들어갑니다. 제목 표시
								두줄까지 들어갑니다.
							</div>
						</div>
						<div class="card_item_support">
							<div class="keyword_support">
								<span>포털</span>
							</div>
							<div class="cardtit_support">
								제목 표시 두줄까지 들어갑니다. 제목 표시
								두줄까지 들어갑니다.
							</div>
						</div>
						<div class="card_item_support">
							<div class="keyword_support">
								<span>데이터</span>
							</div>
							<div class="cardtit_support">
								제목 표시 두줄까지 들어갑니다. 제목 표시
								두줄까지 들어갑니다.
							</div>
						</div>
						<div class="card_item_support">
							<div class="keyword_support">
								<span>분석</span>
							</div>
							<div class="cardtit_support">
								제목 표시 두줄까지 들어갑니다. 제목 표시
								두줄까지 들어갑니다.
							</div>
						</div>
					</div>
				</div>

				<div class="sub_main_sec_support">
					<div class="btn-plus">
						<div class="tit_support">
							자주 묻는 질문 <span>TOP6</span>
						</div>
						<div class="btn-plus-item">
							<button>
								FAQ 전체보기
								<i
									class="fa fa-chevron-right"
									style="color: #ffbc00"
								></i>
							</button>
						</div>
					</div>
					<div class="sub_main_area">
						<div class="card_item">
							<v-row align="start">
								<v-card
									v-for="n in 4"
									:key="n"
									style="background: none"
								>
									<div class="card_d">
										<div class="image">
											<img
												src="@/images/main_img_mater.png"
												width="342"
												height="192"
											/>
										</div>
										<div class="cardtit">
											그룹 공통 가맹점 업종 분류 2줄까지
										</div>
										<div class="cardinfo">
											<div class="board">
												<div class="good">
													<v-icon>mdi-heart</v-icon>
													224
												</div>
												<div class="view">
													<v-icon
														>mdi-eye-outline</v-icon
													>
													55
												</div>
											</div>
										</div>
									</div>
								</v-card>
							</v-row>
						</div>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	data: () => ({}),
}
</script>
