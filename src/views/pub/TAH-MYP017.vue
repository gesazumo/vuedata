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
						<h4>모델파일 계열사 전송 요청이 완료되었습니다.</h4>
						<span>
							관리자 검토 후 중계서버를 통해 계열사 영역으로 전송
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
											계열사 전송
										</p>
									</td>
								</tr>
								<tr>
									<th>모델 파일 위치</th>
									<td>s3://athena-test-364956</td>
								</tr>
								<tr>
									<th>요청사유</th>
									<td>
										Unsaved 폴더 전체를 계열사로 전송
										요청합니다.
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
