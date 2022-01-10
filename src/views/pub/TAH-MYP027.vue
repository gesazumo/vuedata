<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My Dashboard</li>
					<li>
						<i class="fa fa-chevron-right"></i> My Dataset 업로드
					</li>
				</ul>
				<h3>My Dataset 업로드</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no">
					<div class="page_done_tit">
						<CheckLottie />
						<h4>My Dataset 업로드 요청이 완료되었습니다.</h4>
						<span>
							결재 현황 및 분석환경 신청결과는 ‘<u>My Page</u
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
									<th>파일 구분</th>
									<td>분석모델</td>
								</tr>
								<tr>
									<th>첨부 파일</th>
									<td>
										filedkafjdkfjdl01.csv, filename02.csv,
										filename03.csv,
										filedfjdkjfdlkfjbbbb04.csv,
										fileaegoh;ldfgj737r.csv, filename06.csv,
										filename07.csv, file0000dkghuuhis.csv,
										fileakfjk9765.csv, filename10.csv
									</td>
								</tr>
								<tr>
									<th>요청사유</th>
									<td>
										파일 업로드시 입력된 요청사유를
										노출합니다.
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
