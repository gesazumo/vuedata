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
									<th>프로젝트명</th>
									<td>
										<v-select
											label="프로젝트 01"
											placeholder="프로젝트명을 선택하세요"
											single-line
											outlined
											hide-details="auto"
										></v-select>
									</td>
								</tr>
								<tr>
									<th rowspan="2">권한 신청 데이터</th>
									<td>
										<v-checkbox hide-details="auto">
											<template v-slot:label>
												<p class="font-weight-bold">
													그룹 공통 마이데이터 전체
												</p>
											</template>
										</v-checkbox>
										<v-row class="pl-7 pr-7">
											<v-checkbox
												label="공통업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="은행업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="카드업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="금융투자업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="보험업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="전자금융업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="할부금융업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="보증보험업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="통신업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="P2P업권"
												hide-details="auto"
											></v-checkbox>
										</v-row>
									</td>
								</tr>
								<tr>
									<td>
										<v-checkbox hide-details="auto">
											<template v-slot:label>
												<p class="font-weight-bold">
													KB국민은행 마이데이터 전체
												</p>
											</template>
										</v-checkbox>
										<v-row class="pl-7 pr-7">
											<v-checkbox
												label="공통업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="은행업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="카드업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="금융투자업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="보험업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="전자금융업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="할부금융업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="보증보험업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="통신업권"
												hide-details="auto"
											></v-checkbox>
											<v-checkbox
												label="P2P업권"
												hide-details="auto"
											></v-checkbox>
										</v-row>
									</td>
								</tr>
								<tr>
									<th>
										권한 신청 사유
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="권한 신청 사유를 입력하세요"
											single-line
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
					<div class="agree mt-5">
						<div class="agree_chk">
							<v-checkbox hide-details="auto">
								<template v-slot:label>
									<p>
										마이데이터 권한 신청을 위한 주의사항에
										동의합니다.
									</p>
								</template>
							</v-checkbox>
						</div>
						<div class="agree_txt">
							마이데이터 권한을 신청한 직원은 해당 권한으로 작업한
							내용에 대한 포괄적인 책임을 가지며, 삭제요건 발생 시
							즉시 삭제해야 하므로 저장한 개인정보 및
							개인신용정보에 대해서는 관련 법령 규정, 지침 등을
							정확히 이해하고 철저히 관리해야 합니다.
						</div>
					</div>
					<div class="btnArea">
						<v-btn color="primary" large outlined>취소하기</v-btn>
						<v-dialog
							v-model="dialog"
							:max-width="options.width"
							:style="{ zIndex: options.zIndex }"
							@keydown.esc="cancel"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-btn
									color="primary"
									large
									v-bind="attrs"
									v-on="on"
								>
									권한 신청하기
								</v-btn>
							</template>
							<v-card
								style="
									padding: 0 !important;
									height: 260px !important;
								"
							>
								<v-toolbar-title
									style="
										background: #f4f3f2;
										border-bottom: 1px solid #d8d8d8;
										padding: 10px 15px;
										font-size: 16px;
										font-weight: 600;
									"
								>
									마이데이터 권한 신청 확인
									<div
										style="float: right; cursor: pointer"
										@click="dialog = false"
									>
										<i class="fa fa-times"></i>
									</div>
								</v-toolbar-title>
								<v-card-text
									style="
										padding: 40px !important;
										font-size: 16px;
									"
								>
									주의사항을 모두 확인했으며,<br />
									권한 신청을 진행 하시겠습니까?
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn
										v-if="!options.noconfirm"
										color="primary"
										dark
										outlined
										class="body-2 font-weight-bold"
										@click="dialog = false"
										>취소</v-btn
									>
									<v-btn
										color="primary"
										dark
										class="body-2 font-weight-bold"
										@click="dialog = false"
										>확인</v-btn
									>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
		options: {
			color: 'primary',
			width: 320,
			zIndex: 200,
		},
	}),
}
</script>
