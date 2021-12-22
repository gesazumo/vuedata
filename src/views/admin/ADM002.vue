<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>단어 등록 및 수정</h5>
			<div class="item_box">
				<div class="table_box">
					<table class="tb_write">
						<caption>
							table caption
						</caption>
						<colgroup>
							<col width="20%" />
							<col width="" />
						</colgroup>
						<tbody>
							<tr>
								<th>
									한글단어명
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-text-field
										label=""
										placeholder="한글단어명을 입력해 주세요"
										single-line
										clearable
										outlined
									>
										<template slot="append-outer">
											<button class="check">
												중복체크
											</button>
										</template>
									</v-text-field>
								</td>
							</tr>
							<tr>
								<th>
									영문단어명
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-text-field
										label=""
										placeholder="영문단어명을 입력해 주세요"
										single-line
										clearable
										outlined
									></v-text-field>
								</td>
							</tr>
							<tr>
								<th>
									영문약어명
									<span class="asterisk">필수</span>
								</th>
								<td>Power Customer</td>
							</tr>
							<tr>
								<th>
									단어구분
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-radio-group row>
										<v-radio label="단일어">단일어</v-radio>
										<v-radio label="복합어">복합어</v-radio>
									</v-radio-group>
								</td>
							</tr>
							<tr>
								<th>정의 <span class="asterisk">필수</span></th>
								<td>
									<v-textarea
										placeholder="단어정의를 입력하세요/Editor"
										clearable
										outlined
									></v-textarea>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="btn_area">
				<button class="cancel large">취소</button>
				<button class="delete large">삭제하기</button>
				<button class="regit large">등록<!--수정-->하기</button>
			</div>
		</div>
	</div>
</template>
<script></script>
