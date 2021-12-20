<template>
	<div class="adm_wrap">
		<div id="lnb"></div>
		<div class="adm_contents">
			<div class="inner">
				<h5>인사이트 리포트 관리</h5>
				<div class="adm-search-2">
					<ul>
						<li>
							<label>제목</label>
							<v-text-field
								placeholder="제목"
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li>
							<label>등록일</label>
							<v-text-field
								placeholder="날짜선택"
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li></li>
					</ul>
					<ul>
						<li>
							<label>구분</label>
							<v-select
								:items="items1"
								label="전체 카테고리"
								single-line
								outlined
							></v-select>
						</li>
						<li>
							<label>Topic</label>
							<v-select
								:items="items2"
								label="전체 Topic"
								single-line
								outlined
							></v-select>
						</li>
						<li></li>
					</ul>
					<ul>
						<li>
							<label>작성자</label>
							<v-text-field
								placeholder=""
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li></li>
						<li>
							<button class="reset">초기화</button>
							<button class="search">검색하기</button>
						</li>
					</ul>
				</div>
				<div class="item_box">
					<div class="tit">
						<p>총 <span>74</span>개의 검색결과가 있습니다.</p>
					</div>
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
									<td>메인</td>
									<td>트랜트 리포트</td>
									<td>머신러닝/딥러닝</td>
									<td>뱅킹, 서비스로 연결하다</td>
									<td>최자영</td>
									<td>2021-10-29</td>
									<td>12</td>
									<td>80</td>
								</tr>
								<tr>
									<td>
										<v-checkbox></v-checkbox>
									</td>
									<td>메인</td>
									<td>트랜트 리포트</td>
									<td>머신러닝/딥러닝</td>
									<td>뱅킹, 서비스로 연결하다</td>
									<td>최자영</td>
									<td>2021-10-29</td>
									<td>12</td>
									<td>80</td>
								</tr>
								<tr>
									<td>
										<v-checkbox></v-checkbox>
									</td>
									<td>메인</td>
									<td>트랜트 리포트</td>
									<td>머신러닝/딥러닝</td>
									<td>뱅킹, 서비스로 연결하다</td>
									<td>최자영</td>
									<td>2021-10-29</td>
									<td>12</td>
									<td>80</td>
								</tr>
								<tr>
									<td>
										<v-checkbox></v-checkbox>
									</td>
									<td>메인</td>
									<td>트랜트 리포트</td>
									<td>머신러닝/딥러닝</td>
									<td>뱅킹, 서비스로 연결하다</td>
									<td>최자영</td>
									<td>2021-10-29</td>
									<td>12</td>
									<td>80</td>
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
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items1: [
				'카테고리:전체',
				'트렌드 리포트',
				'전문가 리포트',
				'뉴스레터',
			],
			items2: [
				'Tppic:전체',
				'머신러닝/딥러닝',
				'인공지능',
				'클라우드',
				'데이터',
				'디지털',
				'자동화/협업',
			],
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
		}
	},
}
</script>
