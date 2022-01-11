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
									<th>프로젝트 명</th>
									<td>
										<v-select
											label="프로젝트 01"
											hide-details="auto"
											single-line
											outlined
										></v-select>
									</td>
								</tr>
								<tr>
									<th rowspan="2">권한 신청 데이터</th>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<th>권한 신청 사유</th>
									<td>
										<v-text-field
											placeholder="권한 신청 사유를 입력하세요"
											outlined
											hide-details="auto"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>결재자</th>
									<td>
										강태근(KB국민은행, 데이터엔지니어링부)
									</td>
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
