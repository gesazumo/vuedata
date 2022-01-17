<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<h3>문의하기</h3>
			</div>
			<div class="title_txt">
				<div class="txt">
					궁금하신 사항이 있으신 경우
					<u @click="SUP003">자주 묻는 질문 확인하러가기</u>를 통해
					확인 하시거나 문의내용을 작성해 주시면 빠른 시일 내에
					답변드리도록 하겠습니다. <br />
					등록된 문의사항에 대한 답변은 ‘<u @click="MYP041">My Page</u
					>’에서 확인하실 수 있습니다.
				</div>
				<div class="btn">
					<v-btn color="primary" large outlined
						>자주 묻는 질문 확인하러하기</v-btn
					>
				</div>
			</div>
			<div class="sub_search">
				<div class="inner">
					<h5>안녕하세요, 무엇을 도와드릴까요?</h5>
					<v-select
						label="피드백"
						outlined
						clearable
						hide-details="auto"
						style="width: 446px"
					>
					</v-select>
				</div>
			</div>
			<div class="subcontents">
				<div class="table_box">
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
								<th>회사명</th>
								<td>KB국민은행</td>
								<th>부서</th>
								<td>경영연구소</td>
							</tr>
							<tr>
								<th>이름</th>
								<td>김국민</td>
								<th>사번</th>
								<td>H000001</td>
							</tr>
							<tr>
								<th>
									피드백 내용
									<span class="asterisk">필수</span>
								</th>
								<td colspan="3">
									<v-textarea
										placeholder="피드백 내용을 작성해 주세요."
										clearable
										outlined
										hide-details="auto"
									>
									</v-textarea>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="btnArea">
					<v-btn color="primary" large>의견 제출하기</v-btn>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script></script>
