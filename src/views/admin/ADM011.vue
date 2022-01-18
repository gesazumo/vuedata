<template>
	<v-app>
		<div id="popup-L">
			<div class="inner">
				<div class="head">
					<h5>개인정보 탐지 결과</h5>
					<div class="close-btn">
						<img src="../../images/com_icon_close.svg" />
					</div>
				</div>

				<div class="content">
					<div class="item_box">
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
										<th>데이터 원천</th>
										<td>KB 국민카드</td>
										<th>데이터명</th>
										<td>TCTAHIC02</td>
									</tr>
									<tr>
										<th>개인정보 탐지 내역</th>
										<td colspan="3">
											<div style="width: 100%">
												<div
													style="
														float: left;
														width: 90%;
													"
												>
													<pre>
[519951de-4021-43ba-b634-8af7e9db353a]
INFO : Table source is marked deprecated because a matching schema was not found at the table's location. Table source is marked deprecated because a matching schema was not found at the table's location. Table source is marked deprecated because a matching schema was not found at the table's location. Table source is marked deprecated because a matching schema was not found at the table's location.
</pre
													>
												</div>
												<div
													style="
														float: right;
														width: 8%;
														text-align: right;
													"
												>
													<v-btn>
														<v-icon
															color="grey lighten-1"
														>
															mdi mdi-content-copy
														</v-icon>
													</v-btn>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div class="footer">
					<div class="btnArea">
						<v-btn color="primary" large outlined> 목록으로 </v-btn>
						<v-btn color="primary" large @click="dialog = true"
							>적재 진행하기</v-btn
						>
						<v-btn color="primary" large>적재 중단하기</v-btn>
					</div>
				</div>
				<v-dialog v-model="dialog" max-width="280">
					<v-card align="center">
						<v-card-title class="text-subtitle-1">
							데이터 적재를<br />
							진행하시겠습니까?
						</v-card-title>
						<v-card-text></v-card-text>

						<v-card-actions>
							<v-spacer></v-spacer>

							<v-btn
								color="primary"
								dark
								outlined
								@click="dialog = false"
							>
								취소
							</v-btn>

							<v-btn color="primary" dark @click="dialog = false">
								진행하기
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</div>
		</div>
	</v-app>
</template>
<script>
export default {
	data() {
		return {
			dialog: false,
		}
	},
}
</script>
