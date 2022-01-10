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
				<div class="sub_main_sec">
					<div class="row">
						<p class="tit">자주 묻는 질문 TOP6</p>
					</div>
					<div class="card_item">
						<v-row align="start">
							<v-card v-for="n in 3" :key="n">
								<div class="card_v">
									<div class="keyword">
										<span>공통</span>
									</div>
									<div class="cardtit">
										제목 표시 두줄까지 들어갑니다.
									</div>
								</div>
							</v-card>
						</v-row>
					</div>
				</div>
				<div class="sub_main_sec">
					<div class="row">
						<p class="tit">특화데이터</p>
					</div>
					<div class="card_item">
						<v-row align="start">
							<v-card
								v-for="n in 2"
								:key="n"
								style="width: 700px; height: 256px; float: left"
							>
								<div class="card_h">
									<div class="image">
										<img
											src="@/images/main_img_mater.png"
											width="342"
											height="256"
										/>
									</div>
									<div class="text">
										<div class="keyword">
											<span>카드</span>
										</div>
										<div class="cardtit">title 2줄까지</div>
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
								</div>
							</v-card>
						</v-row>
					</div>
				</div>
				<div class="sub_main_sec">
					<div class="row">
						<p class="tit">분석모델</p>
					</div>
					<div class="card_item">
						<v-row align="start">
							<v-card
								v-for="n in 4"
								:key="n"
								style="
									background: none;
									width: 342px;
									height: 497px;
								"
							>
								<div class="card_list">
									<div class="card_profile">
										<div class="profile">
											<img
												src="@/images/profile_img.png"
											/>
										</div>
										<div class="profile_txt">
											<h6>
												통장적요 분류 및 가맹점 업종분류
											</h6>
											<div class="profile_info">
												<ul>
													<li>이스타</li>
													<li>국민은행</li>
													<li>
														<span
															>Feature Store</span
														>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="card_board">
										<div class="board_img">
											<img
												src="@/images/main_img_mater.png"
												width="342"
												height="192"
											/>
										</div>
										<div class="board_txt">
											통장 적요정보 자연어처리를 위한
											파싱, 토큰화 과정을 거쳐 핵심 키워드
											추출하여 1단계 분류 후 개별고객
											특화정보 딕셔너리를 구축하여
											2단계... 3줄까지나옴..말줄임처리
										</div>
									</div>
									<div class="card_sns">
										<div class="card_like">
											<v-icon>mdi-heart</v-icon>
											224
										</div>
										<div class="card_view">
											<v-icon>mdi-eye-outline</v-icon>
											55
										</div>
										<div class="card_comment">
											<v-icon>mdi-comment-outline</v-icon>
											17
										</div>
									</div>
								</div>
							</v-card>
						</v-row>
					</div>
				</div>
				<div class="sub_main_sec">
					<div class="row">
						<p class="tit">대시보드</p>
					</div>
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
												<v-icon>mdi-eye-outline</v-icon>
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
	</v-app>
</template>

<script>
export default {
	data: () => ({}),
}
</script>
