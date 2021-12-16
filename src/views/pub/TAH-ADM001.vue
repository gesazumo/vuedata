<template>
	<!--adminContents-->
	<div class="adm_wrap">
		<div id="lnb"></div>
		<div class="conts_adm">
			<div class="inner">
				<h5>단어관리</h5>
				<div class="adm-search">
					<ul>
						<li>
							<label>한글단어명</label>
							<v-text-field
								placeholder="은행"
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li class="mg_L0">
							<label></label>
							<v-select
								:items="items"
								label="%_%"
								ref="name"
								v-model="name"
								:rules="[() => !!name || '선택해 주세요']"
								:error-messages="errorMessages"
								single-line
								outlined
							></v-select>
						</li>
						<li>
							<button>검색하기</button>
						</li>
					</ul>
				</div>
				<div class="item_box">
					<div class="tit">
						<p>총 <span>123</span>개의 검색결과가 있습니다.</p>
					</div>
					<div class="table_box">
						<table>
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="6%" />
								<col width="" />
								<col width="" />
								<col width="" />
								<col width="" />
								<col width="" />
								<col width="" />
								<col width="" />
								<col width="" />
							</colgroup>
							<thead>
								<tr>
									<th>
										<v-checkbox></v-checkbox>
									</th>
									<th>원천</th>
									<th>한글단어명</th>
									<th>영어약어명</th>
									<th>영어단어명</th>
									<th>단어구분</th>
									<th>정의</th>
									<th>등록자</th>
									<th>등록일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<v-checkbox></v-checkbox>
									</td>
									<td>은행메타</td>
									<td>가망고객</td>
									<td>PrbablCust</td>
									<td>Probable Customer</td>
									<td>복합어</td>
									<td>가망고객</td>
									<td>김준수</td>
									<td>2008-04-15 21:46:10</td>
								</tr>
							</tbody>
						</table>
						<div class="paging">
							<v-pagination
								v-model="page"
								:length="15"
								:total-visible="7"
								color="primary"
							></v-pagination>
						</div>
					</div>
				</div>
				<div class="btn_area">
					<button class="primary large">등록</button>
				</div>

				<div id="quickmenu"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: () => ({
		items: ['=', '_%', '%_', '%_%'],
	}),
}
</script>
