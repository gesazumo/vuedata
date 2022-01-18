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
						<h4>분석 쿼리 공유 신청이 완료되었습니다.</h4>
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
										<p class="font-weight-bold">분석쿼리</p>
									</td>
								</tr>
								<tr>
									<th>분석 쿼리명</th>
									<td>그룹 공통 가맹점 업종 분류</td>
								</tr>
								<tr>
									<th>분석 쿼리 설명</th>
									<td>그룹 공통 가맹점 업종 분류 설명</td>
								</tr>
								<tr>
									<th>분석 테이블 ID</th>
									<td>kbds-test-featurestore-1636092832</td>
								</tr>
								<tr>
									<th>분석 테이블 한글명</th>
									<td>여신계약상세월현황</td>
								</tr>
								<tr>
									<th>분석 컬럼명</th>
									<td>
										잔액, 관리부점코드, 기준년월,
										상품계약회차상태구분, 상품대분류구분
									</td>
								</tr>
								<tr>
									<th>분석 쿼리</th>
									<td>
										SELECT * FROM
										"sagemake_featurestore"."kbds-test-featurestore-163609283"
										limit 10;
									</td>
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
