<template>
	<header id="header">
		<div class="container">
			<!--logo -->
			<h1>
				<router-link to="/">
					<img
						src="../images/gnb_logo.png"
						alt="KB 마이데이터 포털"
					/>
				</router-link>
			</h1>
			<div class="gnbWrap">
				<!-- gnb -->
				<nav id="gnb">
					<ul class="dep01">
						<li>
							<a href="" title="" target="_self">
								<span>Explore</span>
							</a>
							<div class="subMn">
								<div class="title">
									<div class="inner">
										<strong>Explore</strong>
										<span>
											분석에 필요한 다양한 데이터와 <br />
											분석모델, 대시보드를 검색하고 <br />
											활용할 수 있습니다.
										</span>
									</div>
								</div>
								<ul class="dep02">
									<li class="row">
										<a href="" title="" target="_self">
											마이데이터
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
									<li class="row">
										<a href="" title="" target="_self">
											특화데이터
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
									<li class="row">
										<a href="" title="" target="_self"
											>분석모델
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
									<li class="row">
										<a href="" title="" target="_self"
											>대시보드
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="" title="" target="_self">
								<span>Analyze</span>
							</a>
							<div class="subMn">
								<div class="title">
									<div class="inner">
										<strong>Analyze</strong>
										<span>
											분석가 및 프로젝트별 특성을 <br />
											반영한 유연한 분석환경을 <br />
											신청할 수 있습니다.
										</span>
									</div>
								</div>
								<ul class="dep02">
									<li class="row">
										<a href="" title="" target="_self">
											분석환경신청
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="" title="" target="_self">
								<span>Share</span>
							</a>
							<div class="subMn">
								<div class="title">
									<div class="inner">
										<strong>Share</strong>
										<span>
											트렌드 리포트 및 전문가 <br />
											리포트를 통해 인사이트를 얻고 <br />
											아이디어를 공유할 수 있습니다.
										</span>
									</div>
								</div>
								<ul class="dep02">
									<li class="row">
										<a href="" title="" target="_self">
											인사이트 리포트
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
									<li class="row">
										<a href="" title="" target="_self">
											자료실
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
									<li class="row">
										<a href="" title="" target="_self">
											포럼
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="" title="" target="_self">
								<span>Support</span>
							</a>
							<div class="subMn">
								<div class="title">
									<div class="inner">
										<strong>Support</strong>
										<span>
											플랫폼 활용방안, 최신 소식 및 <br />
											문의하기를 통해 궁금한 사항을 <br />
											확인할 수 있습니다.
										</span>
									</div>
								</div>
								<ul class="dep02">
									<li class="row">
										<a href="" title="" target="_self"
											>공지사항
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
									<li class="row">
										<a href="" title="" target="_self">
											FAQ
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
									<li class="row">
										<a href="" title="" target="_self">
											문의하기
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
									<li class="row">
										<a href="" title="" target="_self">
											라이브러리
											<i class="fa fa-chevron-right"></i>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="" title="" target="_self">
								<span>Admin</span>
							</a>
						</li>
					</ul>
				</nav>

				<div class="topLink">
					<ul>
						<li class="mybtn">
							<button class="my">
								My Page <i class="fa fa-chevron-down"></i>
							</button>
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
							<button class="srch" id="modal-open">
								<span class="blind">검색</span>
							</button>
							<div class="popup-wrap" id="Fullpopup">
								<div class="popup-inner">
									<div class="popup-close">
										<span
											class="popup-btn close"
											id="close"
										>
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
													hide-details="auto"
													append-inner-icon="fa fa-search"
												>
													<template v-slot:append>
														<i
															class="fa fa-search"
														></i>
													</template>
												</v-text-field>
											</div>
											<div class="keyword">
												<div class="inner">
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
														<span>KB</span>
														<span>
															고객이탈예측
														</span>
														<span>마이데이터</span>
														<span>
															SageMaker Studio
														</span>

														<span>차차차</span>
														<span>시각화</span>
													</div>
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
