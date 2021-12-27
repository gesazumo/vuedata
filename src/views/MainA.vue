<template>
	<div id="main">
		<!--메인이미지-->
		<div id="visual">
			<div class="inner">
				<div class="txt">
					<h1>분석 업무 효율화를 위한 쉽고 빠른 데이터 검색</h1>
					<p>
						분석가의 업무 혁신 및 협업 강화를 위한 그룹 마이데이터
						통합 분석 플랫폼
					</p>
				</div>
			</div>
		</div>

		<!--마이데이터포털무엇이좋아질까요-->
		<div class="my_what">
			<div class="inner">
				<div class="txt">
					<h3>
						마이데이터 포털 <br />
						무엇이 좋아질까요?
					</h3>
					<span>
						Data scientist 전체 업무시간 중 80%가 데이터 준비에
						소요됩니다. 마이데이터 플랫폼을 활용하면 자동화된
						분석업무 환경을 통해 효율적 분석업무 수행이 가능합니다.
					</span>
				</div>
				<div class="slider">
					<ul class="bxslider">
						<li>
							<div class="bg_box">
								<div class="txt">
									<p>쉽고 빠른 데이터 검색</p>
									<span>
										계열사 별로 흩어져 있는 데이터를
										카탈로그 기반으로 검색하여 분석에 필요한
										데이터 수집에 소요되는 시간을 단축 할 수
										있습니다.
									</span>
								</div>
								<div class="img">
									<img src="@/images/main_illust_01.png" />
								</div>
							</div>
						</li>
						<li>
							<div class="bg_box">
								<div class="txt">
									<p>E2E 분석 환경 제공</p>
									<span>
										데이터 수집부터 분석, 공유 및 협업을
										통해 지속적 활용이 가능하도록 분석가를
										위한 클라우드 기반 End-to-end 분석
										환경을 제공합니다.
									</span>
								</div>
								<div class="img">
									<img src="@/images/main_illust_02.png" />
								</div>
							</div>
						</li>
						<li>
							<div class="bg_box">
								<div class="txt">
									<p>데이터 기반 의사결정 지원</p>
									<span>
										분석 결과의 실시간 시각화와 분석 모델의
										Continuous Training을 통해 데이터
										분석결과를 지속적으로 향상시켜
										Data-driven 비즈니스 의사결정이
										가능합니다.
									</span>
								</div>
								<div class="img">
									<img src="@/images/main_illust_03.png" />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!--마이데이터포털은어떻게쓰나요-->
		<div class="my_how">
			<div class="inner">
				<div class="txt">
					<h3>
						마이데이터 포털은 <br />
						어떻게 쓰나요?
					</h3>
					<span>
						초보자부터 숙련된 전문가까지 누구나 쉽게 사용할 수 있는
						방법을 확인 해 보세요.
					</span>
					<div>
						<button>
							바로가기
							<v-icon color="primary">mdi-chevron-right</v-icon>
						</button>
					</div>
				</div>
				<div class="img"></div>
			</div>
		</div>

		<!--여기부터시작해볼까요-->
		<div class="my_start">
			<div class="inner">
				<div class="txt">
					<h3>
						여기부터 <br />
						시작해볼까요?
					</h3>
					<span>나에게 맞는 분석환경을 제공받을 수 있습니다.</span>
				</div>
				<div class="boxitem">
					<ul>
						<li>
							<div class="box">
								<div class="img1"></div>
								<div class="text">
									<p>초보자용</p>
									<span>
										신속한 대규모 데이터분석업무 수행을 위한
										Serverless 환경
									</span>
									<div class="tag">
										<ul>
											<li># SQL 기반 분석</li>
											<li># Business Intelligence</li>
											<li># 대시보드 실행</li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="box">
								<div class="img2"></div>
								<div class="text">
									<p>전문가용</p>
									<span>
										단일 웹기반 인터페이스를 통해 분석모델
										구축 훈련 및 배포
									</span>
									<div class="tag">
										<ul>
											<li># 알고리즘 기반 분석</li>
											<li># Machine Learning</li>
											<li># Deep Learning 실행</li>
										</ul>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!--데이터카달로그서비스를이용해보세요-->
		<div class="banr">
			<div class="inner">
				<div class="title">
					<span>데이터 카달로그</span><br />
					서비스를 이용해 보세요.
				</div>
				<div class="meg">
					나에게 필요한 데이터를 검색 후 권한신청을 통해 데이터 활용이
					가능하며, 개인데이터 업로드를 통한 분석 수행도 가능합니다.
				</div>
				<div>
					<button class="primary large">신청하기</button>
				</div>
			</div>
		</div>

		<ana-model-list />

		<!--추가지원이필요한가요-->
		<div class="my_guide">
			<v-parallax height="666" src="@/images/main_last_bg.png">
				<div class="inner">
					<div class="txt">
						<h3>추가지원이 필요하신가요?</h3>
					</div>
					<div class="guidebox">
						<div class="box">
							<p class="g01">상세 매뉴얼</p>
							<span>
								데이터 검색부터 분석환경<br />
								신청 후 활용까지 상세 내용 확인
							</span>
							<div>
								<button>
									바로가기
									<i class="fas fa-chevron-right"></i>
								</button>
							</div>
						</div>
						<div class="box">
							<p class="g02">FAQ</p>
							<span>자주하는 질문 및 답변</span>
							<div>
								<button>
									바로가기
									<i class="fas fa-chevron-right"></i>
								</button>
							</div>
						</div>
						<div class="box">
							<p class="g03">담당자</p>
							<span>
								계열사 별 담당자 및<br />
								기술지원을 위한 운영자 확인
							</span>
							<div>
								<button>
									바로가기
									<i class="fas fa-chevron-right"></i>
								</button>
							</div>
						</div>
						<div class="box last">
							<p class="g04">공지사항</p>
							<span>
								공지사항에서 최신뉴스 및<br />
								이벤트 확인
							</span>
							<div>
								<button>
									바로가기
									<i class="fas fa-chevron-right"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</v-parallax>
		</div>

		<div class="banr2">
			<div class="inner">
				<div class="title">
					<p>
						여러분의 의견을 기다립니다<br />
						<span>
							보다나은 마이데이터 플랫폼을 위한 여러분의 의견을
							들려주세요.
						</span>
					</p>
				</div>
				<div style="float: right">
					<button class="primary large">작성하기</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AnaModelList from '../components/main/AnaModelList.vue'
export default {
	components: { AnaModelList },
}
</script>

<style></style>
