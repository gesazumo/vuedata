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
						<h4>분석결과 CI 변환 요청이 완료되었습니다.</h4>
						<span>
							관리자 검토 후 CI로 변환된 테이블을 다운로드 될
							예정입니다.<br />
							진행사항은 ‘<u>My page</u>’에서 확인 할 수 있습니다.
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
											분석결과 CI변환
										</p>
									</td>
								</tr>
								<tr>
									<th>테이블명</th>
									<td>
										sagemaker_tmp_e1763e0aa7a640108e7935e4e3ee9897
									</td>
								</tr>
								<tr>
									<th>컬럼명</th>
									<td>no_previous_contct</td>
								</tr>
								<tr>
									<th>요청사유</th>
									<td>
										no_previous_contct CI 변환 요청합니다.
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
