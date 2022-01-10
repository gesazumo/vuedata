<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My 결재함</li>
				</ul>
				<h3>데이터 결재상세</h3>
			</div>
			<div class="subcontents">
				<div class="s_title border_no"></div>
				<div class="s_body">
					<div class="table_box">
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="300" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>결재 ID</th>
									<td>KBO-C00000001</td>
								</tr>
								<tr>
									<th>프로젝트명</th>
									<td>프로젝트 1</td>
								</tr>
								<tr>
									<th rowspan="2">권한 신청 데이터</th>
									<td>
										<v-row>
											<v-checkbox
												label="그룹공통 마이데이터 전체"
												hide-details="auto"
											>
											</v-checkbox>
										</v-row>
										<v-row>
											<v-col>
												<v-checkbox
													label="공통업권"
													hide-details="auto"
												>
												</v-checkbox>
												<v-checkbox
													label="은행업권"
													hide-details="auto"
												>
												</v-checkbox>
												<v-checkbox
													label="카드업권"
													hide-details="auto"
												>
												</v-checkbox>
												<v-checkbox
													label="금융투자업권"
													hide-details="auto"
												>
												</v-checkbox>
												<v-checkbox
													label="보험업권"
													hide-details="auto"
												>
												</v-checkbox>
											</v-col>
											<v-col>
												<v-checkbox
													label="전자금융업권"
													hide-details="auto"
												>
												</v-checkbox>
												<v-checkbox
													label="할부금융업권"
													hide-details="auto"
												>
												</v-checkbox>
												<v-checkbox
													label="보증보험업권"
													hide-details="auto"
												>
												</v-checkbox>
												<v-checkbox
													label="통신업권"
													hide-details="auto"
												>
												</v-checkbox>
												<v-checkbox
													label="P2P업권"
													hide-details="auto"
												>
												</v-checkbox>
											</v-col>
										</v-row>
									</td>
								</tr>
								<tr>
									<td>
										customers-feature-group-23-02-07-42-1637633263
									</td>
								</tr>
								<tr>
									<th>요청자</th>
									<td>최자영(KB국민은행, 데이터기획부)</td>
								</tr>
								<tr>
									<th>요청일시</th>
									<td>2022-00-00 24:00:00</td>
								</tr>
								<tr>
									<th>권한 신청 사유</th>
									<td>분석을 위한 테이블 신청</td>
								</tr>
								<tr>
									<th>결재자</th>
									<td>
										강태근(KB국민은행, 데이터엔지니어링부)
									</td>
								</tr>
								<tr>
									<th>결재 현황</th>
									<td>결재중/결재완료/반려</td>
								</tr>
								<tr>
									<th>결재일</th>
									<td>2022-00-00 00:02:16</td>
								</tr>
								<tr>
									<th>반려일</th>
									<td>2022-00-00 00:02:16</td>
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
