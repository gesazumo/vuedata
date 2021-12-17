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
				<h5>화면제목</h5>
				<div class="adm-search">
					<ul>
						<li>
							<label>검색항목명<span>필수</span></label>
							<v-select
								:items="items"
								label="선택"
								ref="name"
								v-model="name"
								:rules="[
									() => !!name || '입력 항목을 확인해 주세요',
								]"
								:error-messages="errorMessages"
								single-line
								outlined
							></v-select>
						</li>
						<li>
							<label>프로젝트 팀원<span>필수</span></label>
							<v-text-field
								placeholder="이름"
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li>
							<label>검색항목명</label>
							<v-text-field
								placeholder="- 없이 번호만"
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li>
							<button class="search">검색</button>
						</li>
					</ul>
				</div>
				<div class="item_box">
					<div class="tit">
						<h5>영역 타이틀(선택)</h5>
						<p>총 <span>120</span>개의 검색결과가 있습니다.</p>
					</div>
					<div class="btn">
						<button class="box">담당자 목록 다운로드</button>
					</div>
					<div class="table_box">
						<table>
							<caption>
								table caption
							</caption>
							<thead>
								<tr>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
								</tr>
								<tr>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
								</tr>
								<tr>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
								</tr>
								<tr>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
								</tr>
								<tr>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
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
				<div class="item_box">
					<div class="tit">
						<h5>디테일 정보(선택)</h5>
					</div>
					<div class="table_box">
						<table>
							<caption>
								table caption
							</caption>
							<thead>
								<tr>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
									<th>컬럼명</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
								</tr>
								<tr>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
								</tr>
								<tr>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
								</tr>
								<tr>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
								</tr>
								<tr>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
									<td>데이터</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="btn_area">
					<button class="box large">신규</button>
					<button class="secondary large">저장</button>
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
<script></script>
