<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My 결재함</li>
				</ul>
				<h3>메타테이블 생성 결재 상세</h3>
			</div>
			<div class="subcontents">
				<div class="s_body">
					<div class="table_box">
						<p class="pb-4 font-weight-bold">테이블 정보</p>
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="230" />
								<col width="" />
								<col width="230" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>
										구분
										<span class="asterisk">필수</span>
									</th>
									<td>마이데이터</td>
									<th>
										계열사 구분
										<span class="asterisk">필수</span>
									</th>
									<td>그룹 공통</td>
								</tr>
								<tr>
									<th>
										마이데이터 업권
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">공통업권</td>
								</tr>
								<tr>
									<th>
										특화데이터 구분
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">가맹점 업종구분</td>
								</tr>
								<tr>
									<th>
										Feature Store 구분
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">Feature Store명</td>
								</tr>
								<tr>
									<th>
										테이블명
										<span class="asterisk">필수</span>
									</th>
									<td>TCTAHES01</td>
									<th>
										테이블 한글명
										<span class="asterisk">필수</span>
									</th>
									<td>마이데이터 가입자 정보</td>
								</tr>
								<tr>
									<th>
										테이블 정의
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										마이데이터 서비스 가입자 통계 수집을
										위한 테이블입니다.
									</td>
								</tr>
								<tr>
									<th>
										보관기간
										<span class="asterisk">필수</span>
									</th>
									<td>999개월</td>
									<th>
										전송주기
										<span class="asterisk">필수</span>
									</th>
									<td>일</td>
								</tr>
								<tr>
									<th>
										타겟파일경로
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">/data/{KXX, KBO}/RCV/</td>
								</tr>
								<tr>
									<th>
										타겟파일명1
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">
										KBO_KFG_D_IRP-001_001_YYYYMMDD.dat
									</td>
								</tr>
								<tr>
									<th>타겟파일명2</th>
									<td colspan="3">
										KBO_KFG_D_IRP-001_001_YYYYMMDD.dat
									</td>
								</tr>
								<tr>
									<th>파티션 테이블 여부</th>
									<td colspan="3">No</td>
								</tr>
								<tr>
									<th>
										파티션 타입 내용
										<span class="asterisk">필수</span>
									</th>
									<td colspan="3">파티션 타입</td>
								</tr>
							</tbody>
						</table>
						<p class="pt-8 pb-4 font-weight-bold">컬럼 정보</p>
						<v-data-table
							:headers="headers"
							:items="items"
							:items-per-page="itemsPerPage"
							hide-default-footer
							class="elevation-1"
						></v-data-table>
						<p class="pt-8 pb-4 font-weight-bold">결재 정보</p>
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
									<th>요청자</th>
									<td>최자영(국민은행, 데이터기획부)</td>
								</tr>
								<tr>
									<th>요청일시</th>
									<td>2022-00-00 09:00</td>
								</tr>
								<tr>
									<th>요청사유</th>
									<td>분석을 위한 테이블</td>
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
									<td>2022-00-00 02:16</td>
								</tr>
								<tr>
									<th>반려일</th>
									<td>2022-00-00 02:16</td>
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

<script>
export default {
	data() {
		return {
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,

			headers: [
				{
					text: '순번',
					align: 'center',
					sortable: false,
					value: '1',
				},
				{
					text: '컬럼명',
					align: 'center',
					sortable: false,
					value: '2',
				},
				{
					text: '영문명',
					align: 'center',
					sortable: false,
					value: '3',
				},
				{
					text: 'PK여부',
					align: 'center',
					sortable: false,
					value: '4',
				},
				{
					text: '타입&길이',
					align: 'center',
					sortable: false,
					value: '5',
				},
				{
					text: '널리티',
					align: 'center',
					sortable: false,
					value: '6',
				},
				{
					text: '타입',
					align: 'center',
					sortable: false,
					value: '7',
				},
				{
					text: '길이',
					align: 'center',
					sortable: false,
					value: '8',
				},
				{
					text: '소수점',
					align: 'center',
					sortable: false,
					value: '9',
				},
				{
					text: '인스턴스명',
					align: 'center',
					sortable: false,
					value: '10',
				},
				{
					text: '인스턴스식별자',
					align: 'center',
					sortable: false,
					value: '11',
				},
				{
					text: '개인정보여부',
					align: 'center',
					sortable: false,
					value: '12',
				},
				{
					text: '컬럼정의',
					align: 'center',
					sortable: false,
					value: '13',
				},
			],
			items: [
				{
					1: '1',
					2: '그룹회사코드',
					3: 'groupCoCd',
					4: 'v',
					5: 'CHAR(3)',
					6: 'Not Null',
					7: 'CHAR',
					8: '10',
					9: '',
					10: '그룹회사코드',
					11: '105258000',
					12: 'N',
					13: 'KB에서 공통으로 사용하는 그룹회사코드',
				},
				{
					1: '1',
					2: '그룹회사코드',
					3: 'groupCoCd',
					4: 'v',
					5: 'CHAR(3)',
					6: 'Not Null',
					7: 'CHAR',
					8: '10',
					9: '',
					10: '그룹회사코드',
					11: '105258000',
					12: 'N',
					13: 'KB에서 공통으로 사용하는 그룹회사코드',
				},
				{
					1: '1',
					2: '그룹회사코드',
					3: 'groupCoCd',
					4: 'v',
					5: 'CHAR(3)',
					6: 'Not Null',
					7: 'CHAR',
					8: '10',
					9: '',
					10: '그룹회사코드',
					11: '105258000',
					12: 'N',
					13: 'KB에서 공통으로 사용하는 그룹회사코드',
				},
			],
		}
	},
}
</script>
