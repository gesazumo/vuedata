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
								label=""
								ref="name"
								v-model="name"
								:rules="[() => !!name || '선택해 주세요']"
								:error-messages="errorMessages"
								single-line
								outlined
							></v-select>
						</li>
						<li>
							<button>검색</button>
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
								<col width="8%" />
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
									<th>순번</th>
									<th>한글단어명</th>
									<th>영어약문명</th>
									<th>영어단어명</th>
									<th>단일어복합업</th>
									<th>정의</th>
									<th>등록직원명</th>
									<th>등록일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td><a href="#">KB국민은행</a></td>
									<td>KB</td>
									<td>KB Kookmin Bank</td>
									<td>단일어</td>
									<td>KB국민은행</td>
									<td>이정재</td>
									<td>2008-04-15 21:46:10</td>
								</tr>
								<tr>
									<td>5</td>
									<td><a href="#">KB국민은행</a></td>
									<td>KB</td>
									<td>KB Kookmin Bank</td>
									<td>단일어</td>
									<td>KB금융지주 KB저축은행</td>
									<td>이정재</td>
									<td>2008-04-15 21:46:10</td>
								</tr>
								<tr>
									<td>4</td>
									<td><a href="#">KB국민은행</a></td>
									<td>KB</td>
									<td>KB Kookmin Bank</td>
									<td>단일어</td>
									<td>KB국민은행</td>
									<td>이정재</td>
									<td>2008-04-15 21:46:10</td>
								</tr>
								<tr>
									<td>3</td>
									<td><a href="#">KB국민은행</a></td>
									<td>KB</td>
									<td>KB Kookmin Bank</td>
									<td>단일어</td>
									<td>KB국민은행</td>
									<td>이정재</td>
									<td>2008-04-15 21:46:10</td>
								</tr>
								<tr>
									<td>2</td>
									<td><a href="#">KB국민은행</a></td>
									<td>KB</td>
									<td>KB Kookmin Bank</td>
									<td>단일어</td>
									<td>KB국민은행</td>
									<td>이정재</td>
									<td>2008-04-15 21:46:10</td>
								</tr>
								<tr>
									<td>1</td>
									<td><a href="#">KB국민은행</a></td>
									<td>KB</td>
									<td>KB Kookmin Bank</td>
									<td>단일어</td>
									<td>KB국민은행</td>
									<td>이정재</td>
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
<script></script>
