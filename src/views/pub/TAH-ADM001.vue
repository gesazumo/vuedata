<template>
	<div class="adm_wrap">
		<div id="lnb">
			<ul>
				<li>
					<a href="#none">메타관리</a>
					<ul>
						<li><a href="#none">- 단어관리</a></li>
						<li><a href="#none">- 인스턴스코드관리</a></li>
						<li><a href="#none">- 메타관리</a></li>
					</ul>
				</li>

				<li>
					<a href="#none">모니터링</a>
					<ul>
						<li><a href="#none">- 포털 로그인 이력</a></li>
						<li><a href="#none">- 포털 로그인 접속이력</a></li>
						<li><a href="#none">- SageMaker 접속이력</a></li>
						<li><a href="#none">- 데이터 처리현황</a></li>
						<li><a href="#none">- 시스템 현황</a></li>
						<li><a href="#none">- 장애감지</a></li>
						<li><a href="#none">- 리소스사용(계열사별)</a></li>
					</ul>
				</li>
				<li><a href="#none">대시보드 관리</a></li>
				<li><a href="#none">메뉴관리</a></li>
				<li><a href="#none">권한관리</a></li>
				<li><a href="#none">코드관리</a></li>
				<li><a href="#none">게시판관리</a></li>
				<li><a href="#none">결재관리</a></li>
				<li><a href="#none">라이브러리</a></li>
			</ul>
		</div>
		<div class="adm_contents">
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
							<button class="search">검색하기</button>
						</li>
					</ul>
				</div>
				<div class="item_box">
					<div class="tit">
						<p>총 <span>123</span>개의 검색결과가 있습니다``.</p>
					</div>
					<v-data-table
						:headers="headers"
						:items="items2"
						:items-per-page="itemsPerPage"
						hide-default-footer
						class="elevation-1"
					></v-data-table>
					<div class="table_box">
						<table class="tb_list">
							<caption>
								table caption
							</caption>
							<thead>
								<tr>
									<th>
										<v-checkbox></v-checkbox>
									</th>
									<th>원천</th>
									<th>
										한글단어명
										<i class="fas fa-chevron-down"></i>
									</th>
									<th>
										영어약어명
										<i class="fas fa-chevron-up"></i>
									</th>
									<th>
										영어단어명
										<i class="fas fa-chevron-up"></i>
									</th>
									<th>
										단어구분
										<i class="fas fa-chevron-down"></i>
									</th>
									<th>
										정의
										<i class="fas fa-chevron-down"></i>
									</th>
									<th>
										등록자
										<i class="fas fa-chevron-down"></i>
									</th>
									<th>
										등록일시
										<i class="fas fa-chevron-down"></i>
									</th>
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
								<tr>
									<td>
										<v-checkbox></v-checkbox>
									</td>
									<td>은행메타</td>
									<td>고객유지프로그램</td>
									<td>CRP</td>
									<td>
										Customer Family Actual ResultRetention
										Program
									</td>
									<td>단일어</td>
									<td>고객유지프로그램</td>
									<td>&nbsp;</td>
									<td>2008-04-15 21:46:10</td>
								</tr>
							</tbody>
						</table>
						<div class="paging">
							<v-pagination
								v-model="page"
								:length="50"
								:total-visible="7"
								color="primary"
							></v-pagination>
						</div>
					</div>
				</div>
				<div class="btn_area">
					<button class="delete large">삭제하기</button>
					<button class="edit large">수정하기</button>
					<button class="regit large">등록하기</button>
				</div>

				<div id="quickmenu">
					<div class="quick">
						<ul>
							<li>
								<a href="">
									<img src="../../images/quick_icon_01.png" />
									<span>AWS콘솔바로가기</span>
								</a>
							</li>
							<li>
								<a href="">
									<img src="../../images/quick_icon_02.png" />
									<span>문의하기</span>
								</a>
							</li>
							<li>
								<a
									href="http://bipotal.kbfng.com:8080/BiPortal"
								>
									<img src="../../images/quick_icon_03.png" />
									<span>인사이트포털</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="scrollTop"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: ['=', '_%', '%_', '%_%'],
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			headers: [
				{
					text: '원천',
					align: 'center',
					sortable: true,
				},
				{
					text: '한글단어명',
					align: 'center',
					sortable: true,
				},
				{
					text: '영문약어명',
					align: 'center',
					sortable: true,
				},
				{
					text: '영어단어명',
					align: 'center',
					sortable: true,
				},
				{
					text: '단어구분',
					align: 'center',
					sortable: true,
				},
				{
					text: '정의',
					align: 'center',
					sortable: true,
				},
				{
					text: '등록자',
					align: 'center',
					sortable: true,
				},
				{
					text: '등록일시',
					align: 'center',
					sortable: true,
				},
			],
			items2: [],
		}
	},
	methods: {
		openSel() {
			//this.axios.post(url).then
			this.items2 = []
		},
	},
}
</script>
