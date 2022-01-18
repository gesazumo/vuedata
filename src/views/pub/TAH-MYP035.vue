<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My 결재함</li>
				</ul>
				<h3>My Project 공유하기 결재상세</h3>
			</div>
			<div class="subcontents">
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
									<th>결재 ID</th>
									<td>KBO-C00000001</td>
								</tr>
								<tr>
									<th>프로젝트 ID</th>
									<td>KBO-PROJ-0001</td>
								</tr>
								<tr>
									<th>프로젝트명</th>
									<td>마이데이터 통합 분석 프로젝트</td>
								</tr>
								<tr>
									<th>프로젝트 기간</th>
									<td>2021-00-00 ~ 2022-00-00</td>
								</tr>
								<tr>
									<th>공유방식</th>
									<td>계열사 전송</td>
								</tr>
								<tr>
									<th>모델 파일 위치</th>
									<td>s3://athean-test-3164956</td>
								</tr>
								<tr>
									<th>공유방식</th>
									<td>분석결과 CI 변환</td>
								</tr>
								<tr>
									<th>테이블명</th>
									<td>
										sagemake_tmp_e1763e0aa7a640108e7935ese3ee9897
									</td>
								</tr>
								<tr>
									<th>컬럼명</th>
									<td>no_previous_contact</td>
								</tr>
								<tr>
									<th>요청자</th>
									<td>최자영</td>
								</tr>
								<tr>
									<th>요청일시</th>
									<td>2021-00-00 ~ 2022-00-00 09:00</td>
								</tr>
								<tr>
									<th>요청사유</th>
									<td>
										Unsaved 폴더 전체를 계열사로 전송
										요청합니다.
									</td>
								</tr>
								<tr>
									<th>결재자</th>
									<td>
										강태근(KB 국민은행, 데이터엔지니어링부)
									</td>
								</tr>
								<tr>
									<th>결재 현황</th>
									<td>결재중/결재완료/반려</td>
								</tr>
								<tr>
									<th>결재일</th>
									<td>2022-00-00 09:00</td>
								</tr>
								<tr>
									<th>반려일</th>
									<td>2022-00-00 09:00</td>
								</tr>
								<tr>
									<th>반려사유</th>
									<td>개인정보 포함으로 인해 승인 불가</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn color="primary" large outlined>목록으로</v-btn>
						<v-btn color="primary" large>반려하기</v-btn>
						<v-btn color="primary" large>결재하기</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script></script>
