<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My 결재함</li>
				</ul>
				<h3>분석환경신청 결재상세</h3>
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
									<td>2021.00.00 ~ 2021.00.00</td>
								</tr>
								<tr>
									<th>프로젝트 설명</th>
									<td>마이데이터 통합 분석 프로젝트 서령</td>
								</tr>
								<tr>
									<th>프로젝트 구분</th>
									<td>팀</td>
								</tr>
								<tr>
									<th>프로젝트 팀원</th>
									<td>김국민, 김스타, 이국민, 이스타</td>
								</tr>
								<tr>
									<th>분석환경</th>
									<td>
										Athena <br />
										QuickSight <br />
										Notebook (ml.t3.medium) <br />
										SageMaker Studio (ml.g4dn.xlarge,
										Building & Traning)
									</td>
								</tr>
								<tr>
									<th>요청자</th>
									<td>최자영(KB국민은행, 데이터기획부)</td>
								</tr>
								<tr>
									<th>요청일시</th>
									<td>2022-00-00 21:00:00</td>
								</tr>
								<tr>
									<th>결재자</th>
									<td>
										강태근(KB국민은행, 데이터엔지니어링부)
									</td>
								</tr>
								<tr>
									<th>결재현황</th>
									<td>결재중 / 결재완료 / 반려</td>
								</tr>
								<tr>
									<th>결재일</th>
									<td>2022-00-00 21:00:00</td>
								</tr>
								<tr>
									<th>반려일</th>
									<td>2022-00-00 21:00:00</td>
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
