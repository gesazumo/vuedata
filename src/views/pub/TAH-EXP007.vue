<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> Explore</li>
					<li><i class="fa fa-chevron-right"></i> 마이데이터</li>
					<li><i class="fa fa-chevron-right"></i> 권한신청</li>
				</ul>
				<h3>마이데이터 권한 신청하기</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no">
					<div class="page_done_tit">
						<CheckLottie />
						<h4>마이데이터 권한 신청이 완료되었습니다.</h4>
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
									<th>권한신청 데이터</th>
									<td>
										그룹공통 마이데이터 > 공통업권 <br />
										[TSTAHㅇㅇ01] 개인형 IRP 계좌 목록
										(은행, 금투, 보험 공통) <br />
										[TSTAHㅇㅇ02] 개인형 IRP 계좌 기본정보
										(은행, 금투, 보험 공통) <br />
										[TSTAHㅇㅇ03] 개인형 IRP 계좌 추가정보
										(은행, 금투, 보험 공통) <br />
										[TSTAHㅇㅇ01] 개인형 IRP 계좌 거래내역
										(은행, 금투, 보험 공통)
									</td>
								</tr>
								<tr>
									<th>권한신청 사유</th>
									<td>마이데이터 권한 신청 사유</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn color="primay" large outlined>홈으로 가기</v-btn>
						<v-btn color="primary" larged>My Page 가기</v-btn>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script></script>
