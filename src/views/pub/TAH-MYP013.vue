<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My Project</li>
					<li>
						<i class="fa fa-chevron-right"></i> My Project 공유하기
					</li>
				</ul>
				<h3>My Project 공유하기</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no">
					<div class="page_done_tit">
						<CheckLottie />
						<h4>분석모델 공유 신청이 완료되었습니다.</h4>
						<span>
							관리자 검토 후 ‘<u>Explore &gt; 분석모델 페이지</u
							>’에서 확인 할 수 있습니다.
						</span>
					</div>
				</div>
				<div class="s_body">
					<div class="table_box">
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="230" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>프로젝트ID</th>
									<td>KBO-PROJ-0001</td>
								</tr>
								<tr>
									<th>프로젝트명</th>
									<td>마이데이터 통합 분석 프로젝트</td>
								</tr>
								<tr>
									<th>프로젝트 기간</th>
									<td>2022-00-00 ~ 2022-00-00</td>
								</tr>
								<tr>
									<th>프로젝트 설명</th>
									<td>마이데이터 통합 분석 프로젝트 설명</td>
								</tr>
								<tr>
									<th>공유방식</th>
									<td>
										<p class="font-weight-bold">
											분석가 포털 공유
										</p>
									</td>
								</tr>
								<tr>
									<th>공유범위</th>
									<td>그룹 전체 공유</td>
								</tr>
								<tr>
									<th>공유 카테고리</th>
									<td>
										<p class="font-weight-bold">분석모델</p>
									</td>
								</tr>
								<tr>
									<th>모델명</th>
									<td>그룹 공통 가맹점 업종 분류</td>
								</tr>
								<tr>
									<th>모델 설명</th>
									<td>그룹 공통 가맹점 업종 분류 설명</td>
								</tr>
								<tr>
									<th>모델구분</th>
									<td>공통모델</td>
								</tr>
								<tr>
									<th>모델버전</th>
									<td>1.0</td>
								</tr>
								<tr>
									<th>분석언어</th>
									<td>Python 3.7</td>
								</tr>
								<tr>
									<th>분석알고리즘</th>
									<td>
										Decisin Tree, K-means Clustering,
										Prncipal Component Analysis, XGBoost
									</td>
								</tr>
								<tr>
									<th>분석코드</th>
									<td>
										filename_001.ipynb, filename_003.ipynb,
										filename_010.html
									</td>
								</tr>
								<tr>
									<th>모델파일 위치</th>
									<td>s3://athena-test-3164956</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn color="primary" large outlined>
							홈으로 가기
						</v-btn>
						<v-btn color="primary" large>My Page 가기</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script></script>
