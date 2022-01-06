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
					<p class="txt">분석에 필요한 다양한 데이터와 표준모델</p>
					<h2>Explore our Datasets and models</h2>
					<div class="sub_main_btn">
						<v-btn color="accent" large>
							<i class="mdi mdi-plus"></i>
							My Dataset 업로드
						</v-btn>
						<v-btn color="accent" large>
							<i class="mdi mdi-plus"></i>
							My Project 공유하기
						</v-btn>
					</div>
				</div>
			</div>
			<div id="exp_sub" class="sub_main_wrap">
				<div class="sub_main_search">
					<div class="search_box">
						<v-text-field
							placeholder="검색어를 입력해 주세요"
							clearable
							required
							hide-details="auto"
							append-inner-icon="fa fa-search"
						>
							<template v-slot:append>
								<i class="fa fa-search"></i>
							</template>
						</v-text-field>
					</div>
					<div class="search_keyword">
						<div class="inner">
							<div class="tag">
								<span>마이데이터</span>
								<span>차차차</span>
								<span>개인화 추천</span>
								<span>시각화</span>
								<span>영역벗어나면안보임</span>
								<span>분류모델</span>
								<span>고객이탈예측</span>
								<span>고객이탈예측</span>
								<span>고객이탈예측</span>
							</div>
						</div>
					</div>
				</div>
				<div class="sub_main_sec">
					<div class="row">
						<p class="tit">마이데이터</p>
					</div>
					<div class="card_item">
						<v-row align="start">
							<v-card v-for="n in 4" :key="n">
								<div class="card_v">
									<div class="keyword">
										<span>공통</span>
										<span class="etc">가맹점분류</span>
									</div>
									<div class="cardtit">
										그룹 공통 가맹점 업종 분류 2줄까지
										들어갑니다.
									</div>
									<div class="cardtxt">
										KB카드 가맹점 업종분류 정보, KB카드,
										은행의 표준 API 수집 정보 및
										KB마이머니수집정보를 분석하여 그룹 공통
										업종 분류모델 개발 - 4줄까지 들어갑니다.
										KB카드 가맹점 업종분류 정보, KB카드,
										은행의 표준 API 수집 정보 및
										KB마이머니수집정보를 .분석하여 그룹 공통
										업종 분류모델 개발 - 4줄까지 들어갑니다.
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
