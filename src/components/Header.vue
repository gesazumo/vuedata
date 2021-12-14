<template>
	<header id="header">
		<div class="container">
			<!--logo -->
			<h1>
				<a href="">
					<img
						src="../images/gnb_logo.png"
						alt="KB 마이데이터 포털"
					/>
				</a>
			</h1>
			<div class="gnbWrap">
				<!-- gnb -->
				<nav id="gnb">
					<ul class="dep01">
						<li>
							<a href="" title="" target="_self"
								><span>Explore</span></a
							>
							<div class="subMn">
								<div class="title">
									<div class="inner">
										<strong>Explore</strong>
										<span
											>그룹사 마이데이터, 그룹사
											특화데이터, 분석모델 등을 확인할 수
											있습니다.</span
										>
									</div>
								</div>
								<ul class="dep02">
									<li class="row">
										<a href="" title="" target="_self"
											>마이데이터</a
										>
									</li>
									<li class="row">
										<a href="" title="" target="_self"
											>특화데이터</a
										>
									</li>
									<li class="row">
										<a href="" title="" target="_self"
											>분석모델</a
										>
									</li>
									<li class="row">
										<a href="" title="" target="_self"
											>대시보드</a
										>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="" title="" target="_self"
								><span>Analyze</span></a
							>
							<div class="subMn">
								<div class="title">
									<div class="inner">
										<strong>Analyze</strong>
										<span
											>초보자, 중급자, 고급자 분석가에
											대한 소개와 분석환경 신청을 진행할
											수 있습니다.</span
										>
									</div>
								</div>
								<ul class="dep02">
									<li class="row">
										<a href="" title="" target="_self"
											>분석환경신청</a
										>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="" title="" target="_self"
								><span>Share</span></a
							>
							<div class="subMn">
								<div class="title">
									<div class="inner">
										<strong>Share</strong>
										<span
											>인사이트 리포트, 포털 및 AWS 사용자
											가이드 그리고 포럼 형태의 게시판을
											제공합니다.</span
										>
									</div>
								</div>
								<ul class="dep02">
									<li class="row">
										<a href="" title="" target="_self"
											>인사이트 리포트</a
										>
									</li>
									<li class="row">
										<a href="" title="" target="_self"
											>자료실</a
										>
									</li>
									<li class="row">
										<a href="" title="" target="_self"
											>포럼</a
										>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="" title="" target="_self"
								><span>Support</span></a
							>
							<div class="subMn">
								<div class="title">
									<div class="inner">
										<strong>Support</strong>
										<span
											>공지사항, FAQ, 문의하기를 한 곳에
											모아 궁금한 사항에 대해 쉽게 해결이
											가능합니다.</span
										>
									</div>
								</div>
								<ul class="dep02">
									<li class="row">
										<a href="" title="" target="_self"
											>공지사항</a
										>
									</li>
									<li class="row">
										<a href="" title="" target="_self"
											>FAQ</a
										>
									</li>
									<li class="row">
										<a href="" title="" target="_self"
											>문의하기</a
										>
									</li>
									<li class="row">
										<a href="" title="" target="_self"
											>라이브러리</a
										>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="" title="" target="_self"
								><span>Admin</span></a
							>
						</li>
					</ul>
				</nav>

				<div class="topLink">
					<ul>
						<li class="mybtn">
							<button class="my">My Page</button>
							<div class="mymenu">
								<ul>
									<li><a href="">MY Dashboard</a></li>
									<li><a href="">MY Project</a></li>
									<li><a href="">MY Data Catalog</a></li>
									<li><a href="">MY 결재함</a></li>
									<li><a href="">MY Profile</a></li>
								</ul>
							</div>
						</li>
						<li class="profile">
							<a href="" class="">
								<img src="../images/gnb-icon-proflie.png" />
							</a>
							<div class="view">
								<div class="proimg">
									<img src="../images/com_profile_img.png" />
									<span class="edit"></span>
								</div>
								<div class="name">
									<ul>
										<li>김스타</li>
										<li>
											<span>KB국민은행</span>
											경영지원부
										</li>
									</ul>
									<div>
										<button class="box">프로필관리</button>
									</div>
								</div>
								<div class="logoutbtn">
									<button class="">로그아웃</button>
								</div>
							</div>
						</li>
						<li class="search">
							<!--a href="" id="modal-open">
								<img src="../images/icon_search.png" />
							</a-->
							<button class="srch" id="modal-open">
								<span class="blind">검색</span>
							</button>
							<div class="popup-wrap" id="popup">
								<div class="popup">
									<div class="popup-close">
										<span class="pop-btn close" id="close">
											<span class="blind">창 닫기</span>
										</span>
									</div>
									<div class="popup-head">
										<h1>무엇을 찾고 계신가요?</h1>
									</div>
									<div class="popup-body">
										<div class="body-content">
											<div class="search-area">
												<v-text-field
													placeholder="검색어를 입력해 주세요"
													clearable
													required
												></v-text-field>
											</div>
											<div class="keyword">
												<div class="tit">
													인기 검색어
												</div>
												<div class="tag">
													<span>마이데이터</span>
													<span>
														Machine Learning
													</span>
													<span>개인화 추천</span>
													<span>지식 그래프</span>
													<span>분류모델</span>
													<span>
														SageMaker Studio
													</span>
													<span>고객이탈예측</span>
													<span>차차차</span>
													<span>시각화</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>
