<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<h3>오픈소스 라이브러리</h3>
			</div>
			<div class="title_txt">
				<div class="txt">
					현재 클라우드 환경에 반입되어 활용할 수 있는 오픈소스 버전을
					확인하고, 추가가 필요한 Python, R, Anaconda 오픈소스 반입
					신청을 할 수 있습니다.<br />
					<v-btn
						text
						append-inner
						style="background: none !important"
					>
						<i class="fa fa-search-plus"></i> 오픈소스 반입 신청
						방법 알아보기
					</v-btn>
				</div>
				<div class="btn">
					<v-btn color="primary" dark large outlined
						>오픈소스 반입 신청하기</v-btn
					>
				</div>
			</div>
			<div class="sub_search">
				<h5>오픈소스를 검색해 보세요.</h5>
				<v-text-field
					placeholder="검색어를 입력해 주세요"
					outlined
					clearable
					hide-details="auto"
					prepend-inner-icon="fa fa-search"
					style="width: 446px"
				>
					<template v-slot:prepend-inner>
						<i class="fa fa-search"></i>
					</template>
				</v-text-field>
			</div>
			<div class="board_list">
				<div class="tab">
					<v-tabs fixed-tabs>
						<v-tab>전체 <span>00</span></v-tab>
						<v-tab>Python <span>00</span></v-tab>
						<v-tab>R <span>00</span></v-tab>
						<v-tab>Anaconda <span>00</span></v-tab>
						<v-tab>기타 <span>00</span></v-tab>
					</v-tabs>
				</div>
				<div class="list">
					<div class="list_tit">
						<div class="tit">
							총 <span>00</span>개의 오픈소스 라이브러리가
							있습니다.
						</div>
						<div class="sort">
							<ul>
								<li class="on">인기순</li>
								<li>등록일순</li>
								<li>제목순</li>
							</ul>
						</div>
					</div>
					<div class="card_board">
						<v-row>
							<v-col v-for="n in 4" :key="n" cols="12" md="3">
								<v-card>
									<v-card-text>
										<v-chip-group
											active-class="deep-purple accent-4 white--text"
											column
										>
											<v-chip>Python 3.7.1+</v-chip>
										</v-chip-group>
									</v-card-text>
									<v-card-title>
										zull-core 제목표시 두줄까지 들어갑니다.
									</v-card-title>
									<v-card-subtitle>
										Version : 1.3.1 버전정보는 한줄
									</v-card-subtitle>
									<v-card-text>
										zull-core developed by Netflix 설명은
										두줄까지
									</v-card-text>
									<v-card-text>
										<v-row>
											<i class="far fa-eye"></i>
											<span class="subheading mr-2"
												>256</span
											>
											<i class="far fa-calendar"></i>
											<span class="subheading mr-2"
												>2021-00-00</span
											>
										</v-row>
									</v-card-text>
								</v-card>
								<v-card>
									<v-card-text>
										<v-chip-group
											active-class="deep-purple accent-4 white--text"
											column
										>
											<v-chip>Python 3.7.1+</v-chip>
										</v-chip-group>
									</v-card-text>
									<v-card-title>
										zull-core 제목표시 두줄까지 들어갑니다.
									</v-card-title>
									<v-card-subtitle>
										Version : 1.3.1 버전정보는 한줄
									</v-card-subtitle>
									<v-card-text>
										zull-core developed by Netflix 설명은
										두줄까지
									</v-card-text>
									<v-card-text>
										<v-row>
											<i class="far fa-eye"></i>
											<span class="subheading mr-2"
												>256</span
											>
											<i class="far fa-calendar"></i>
											<span class="subheading mr-2"
												>2021-00-00</span
											>
										</v-row>
									</v-card-text>
								</v-card>
							</v-col>
						</v-row>
					</div>
				</div>
				<div class="btnArea">
					<v-btn
						color="primary"
						dark
						large
						outlined
						style="width: 446px"
					>
						<span style="color: #f26615">20</span>개의 목록 더보기
						<i class="fa fa-chevron-down"></i>
					</v-btn>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script></script>
