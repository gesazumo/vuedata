<template>
	<!--나에게필요한분석모델을찾아보세요-->
	<div class="my_data">
		<div class="inner">
			<div class="txt">
				<h3>
					나에게 필요한 <br />
					분석모델을 찾아보세요
				</h3>
				<span>
					다양한 알고리즘 및 Use Case별 모범 사례<br />
					분석 모델을 제공합니다.
				</span>
				<div>
					<button>
						바로가기
						<i class="fa fa-chevron-right"></i>
					</button>
				</div>
			</div>
			<div class="control_btn">
				<div>
					<ul>
						<li>
							<img src="../../images/swipe_icon_arrow_prev.png" />
						</li>
						<li>2<span class="bar"></span>6</li>
						<li>
							<img src="../../images/swipe_icon_arrow_next.png" />
						</li>
						<li>
							<img src="../../images/swipe_icon_stop.png" />
						</li>
					</ul>
				</div>
			</div>
			<div class="slider">
				<ul class="bxslider">
					<carousel :autoplay="true" :perPage="3" :loop="true">
						<slide>
							<li>
								<div class="card_list">
									<div class="card_profile">
										<div class="profile">
											<img
												src="@/images/profile_img2.png"
											/>
										</div>
										<div class="profile_txt">
											<h6>
												통장적요 분류 및 가맹점 업종분류
											</h6>
											<div class="profile_info">
												<ul>
													<li>최차장</li>
													<li>국민은행</li>
													<li>
														<span>분석쿼리</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="card_board">
										<div class="board_img">
											<img
												src=""
												width="342"
												height="192"
											/>
										</div>
										<div class="board_txt">
											통장 적요정보 자연어처리를 위한
											파싱, 토큰화 과정을 거쳐 핵심 키워드
											추출하여 1단계 분류 후 개별고객
											특화정보 딕셔너리를 구축하여
											2단계... 단어줄임처리
										</div>
									</div>
									<div class="card_sns">
										<div class="card_like">
											<i class="far fa-heart"></i>
											224
										</div>
										<div class="card_view">
											<i class="far fa-eye"></i>
											55
										</div>
										<div class="card_comment">
											<i class="far fa-comment-alt"></i>
											17
										</div>
									</div>
								</div>
							</li>
						</slide>
						<slide>
							<li>
								<div class="card_list">
									<div class="card_profile">
										<div class="profile">
											<img
												src="@/images/profile_img.png"
											/>
										</div>
										<div class="profile_txt">
											<h6>그룹 공통 가맹점 업종 분류</h6>
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
												src=""
												width="342"
												height="192"
											/>
										</div>
										<div class="board_txt">
											KB카드 가맹점 업종분류 정보, KB카드,
											은행의 표준 API 수집 정보 및
											KB마이머니 수집정보를 분석하여 그룹
											공통 업종 분류 모델 개발
										</div>
									</div>
									<div class="card_sns">
										<div class="card_like">
											<i class="far fa-heart"></i>
											224
										</div>
										<div class="card_view">
											<i class="far fa-eye"></i>
											55
										</div>
										<div class="card_comment">
											<i class="far fa-comment-alt"></i>
											17
										</div>
									</div>
								</div>
							</li>
						</slide>
						<slide>
							<li>
								<div class="card_list">
									<div class="card_profile">
										<div class="profile">
											<img
												src="@/images/profile_img1.png"
											/>
										</div>
										<div class="profile_txt">
											<h6>상품유형 분류 자동화</h6>
											<div class="profile_info">
												<ul>
													<li>김국민</li>
													<li>국민은행</li>
													<li>
														<span>분석모델</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="card_board">
										<div class="board_img">
											<img
												src=""
												width="342"
												height="192"
											/>
										</div>
										<div class="board_txt">
											예금, 대출, 펀드, 방카, 카드 등
											상품유형을 수작업 으로 맵핑하는
											이슈를 해결하기 위해 KB은행
											지식그래프의 표준화된 상품 속성을
											기반으로…
										</div>
									</div>
									<div class="card_sns">
										<div class="card_like">
											<i class="far fa-heart"></i>
											224
										</div>
										<div class="card_view">
											<i class="far fa-eye"></i>
											55
										</div>
										<div class="card_comment">
											<i class="far fa-comment-alt"></i>
											17
										</div>
									</div>
								</div>
							</li>
						</slide>
						<slide>
							<li>
								<div class="card_list">
									<div class="card_profile">
										<div class="profile">
											<img
												src="@/images/profile_img.png"
											/>
										</div>
										<div class="profile_txt">
											<h6>고객 이탈 가능성 예측</h6>
											<div class="profile_info">
												<ul>
													<li>공지철</li>
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
												src=""
												width="342"
												height="192"
											/>
										</div>
										<div class="board_txt">
											KB 및 타 금융기관 자산 증감 변화와
											채널별 트랜잭션 증감 변화 및 다양한
											고객 정보 등을 활용 하여 미래
											특정시점에 고객별 이탈 가능성을 예측
										</div>
									</div>
									<div class="card_sns">
										<div class="card_like">
											<i class="far fa-heart"></i>
											224
										</div>
										<div class="card_view">
											<i class="far fa-eye"></i>
											55
										</div>
										<div class="card_comment">
											<i class="far fa-comment-alt"></i>
											17
										</div>
									</div>
								</div>
							</li>
						</slide>
					</carousel>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
	name: 'AnaModelList',
	components: { Carousel, Slide },
}
</script>

<style></style>
