<template>
	<v-app>
		<div
			class="sub_top_img"
			style="
				background: url('/img/main_bg.d9dcb9f0.png') center center
					no-repeat;
			"
		>
			<div class="sub_top_info">
				<div class="sub_top_txt">
					<ul>
						<li>python</li>
						<li><span></span></li>
						<li>3.7.1 버전 이상</li>
					</ul>
					<h4>Pandas</h4>
					<p>Version : 1.3.4</p>
					<div>
						<i class="far fa-eye"></i>
						<span class="subheading mr-6">55</span>
						<i class="far fa-calendar"></i>
						<span class="subheading">2021-00-00</span>
					</div>
				</div>
				<div class="sub_top_banr">
					<img src="/img/main_img_mater.0d2f212a.png" />
				</div>
			</div>
		</div>
		<div class="sub_content">
			<div class="detail_view">
				<div class="detail_01">
					<h5>라이브러리 상세 정보</h5>
					<div class="table_box">
						<table class="tb_write">
							<caption>
								table caption
							</caption>
							<colgroup>
								<col width="240" />
								<col width="" />
								<col width="240" />
								<col width="" />
							</colgroup>
							<tbody>
								<tr>
									<th>패키지 그룹</th>
									<td>Python</td>
									<th>패키지 버전</th>
									<td>3.7.1 버전 이상</td>
								</tr>
								<tr>
									<th>라이브러리명</th>
									<td>Pandas</td>
									<th>라이브러리 버전</th>
									<td>1.3.4</td>
								</tr>
								<tr>
									<th>라이브러리 설명</th>
									<td colspan="3">
										라이브러리 설명이 들어갑니다.
									</td>
								</tr>
								<tr>
									<th>라이브러리 파일명</th>
									<td colspan="3">
										pandas-1.3.4-cp37-cp37m-win32.whl
									</td>
								</tr>
								<tr>
									<th>라이선스</th>
									<td colspan="3">BSD-3-Clause</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn color="primary" dark large outlined
							>목록으로</v-btn
						>
						<v-btn color="primary" dark large>반입 신청하기</v-btn>
					</div>
				</div>
				<div class="detail_02">
					<div>
						<p>라이브러리 설치 방법</p>
						<span class="txt">
							반입이 완료된 라이브러리는 클라우드 공용 저장소로
							반입되어 분석가 개인환경에서 pip install
							라이브러리를 통해 설치하실 수 있습니다.
						</span>
						<v-btn
							color="primary"
							dark
							outlined
							small
							style="letter-spacing: -0.5px"
							>라이브러리 설치 방법 알아보기</v-btn
						>
					</div>
					<div>
						<p>참조사이트</p>
						<span class="txt">
							Python <br />
							https://pypi.org <br /><br />
							R <br />
							https://cran.r-project.org <br /><br />
							Anaconda <br />
							https://repo.anaconda.com
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="other">
			<h5>다른 라이브러리 확인하기</h5>
			<v-sheet class="mx-auto" max-width="1440">
				<v-slide-group
					v-model="model"
					active-class="success"
					show-arrows
				>
					<v-slide-item
						v-for="n in 10"
						:key="n"
						v-slot="{ active, toggle }"
					>
						<v-card
							:color="active ? undefined : 'grey lighten-1'"
							class="ma-3"
							height="130"
							width="240"
							@click="toggle"
						>
							<v-row align="center" justify="center">
								<div class="item">
									<p>
										Redshift Connector
										<span>Version: 2.0.900</span>
									</p>
									<img
										src="/img/main_img_mater.0d2f212a.png"
									/>
								</div>
							</v-row>
						</v-card>
					</v-slide-item>
				</v-slide-group>
			</v-sheet>
		</div>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		model: null,
	}),
}
</script>
