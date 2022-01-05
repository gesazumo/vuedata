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
						<li>{{ libData.group }}</li>
						<li><span></span></li>
						<li>{{ libData.ver }} 버전 이상</li>
					</ul>
					<h4>{{ libData.libName }}</h4>
					<p>Version : {{ libData.libVer }}</p>
					<div>
						<i class="far fa-eye"></i>
						<span class="subheading mr-6">{{
							libData.viewCount
						}}</span>
						<i class="far fa-calendar"></i>
						<span class="subheading">{{ libData.regDate }}</span>
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
									<td>{{ libData.group }}</td>
									<th>패키지 버전</th>
									<td>{{ libData.ver }} 버전 이상</td>
								</tr>
								<tr>
									<th>라이브러리명</th>
									<td>{{ libData.libName }}</td>
									<th>라이브러리 버전</th>
									<td>{{ libData.libVer }}</td>
								</tr>
								<tr>
									<th>라이브러리 설명</th>
									<td colspan="3">
										{{ libData.libDesc }}
									</td>
								</tr>
								<tr>
									<th>라이브러리 파일명</th>
									<td colspan="3">
										{{ libData.libFile }}
									</td>
								</tr>
								<tr>
									<th>라이선스</th>
									<td colspan="3">{{ libData.license }}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="btnArea">
						<v-btn color="primary" dark large outlined
							>목록으로</v-btn
						>
						<v-btn color="primary" dark large
							>오픈소스 반입 신청하기</v-btn
						>
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
			<div class="slide">
				<ul>
					<li>
						<v-btn><i class="fa fa-chevron-left"></i></v-btn>
					</li>
					<li>
						<div class="item">
							<p>
								Redshift Connector
								<span>Version: 2.0.900</span>
							</p>
							<img src="/img/main_img_mater.0d2f212a.png" />
						</div>
					</li>
					<li>
						<div class="item">
							<p>
								Redshift Connector
								<span>Version: 2.0.900</span>
							</p>
							<img src="/img/main_img_mater.0d2f212a.png" />
						</div>
					</li>
					<li>
						<div class="item">
							<p>
								Redshift Connector
								<span>Version: 2.0.900</span>
							</p>
							<img src="/img/main_img_mater.0d2f212a.png" />
						</div>
					</li>
					<li>
						<div class="item">
							<p>
								Redshift Connector
								<span>Version: 2.0.900</span>
							</p>
							<img src="/img/main_img_mater.0d2f212a.png" />
						</div>
					</li>
					<li>
						<div class="item">
							<p>
								Redshift Connector
								<span>Version: 2.0.900</span>
							</p>
							<img src="/img/main_img_mater.0d2f212a.png" />
						</div>
					</li>
					<li>
						<v-btn><i class="fa fa-chevron-right"></i></v-btn>
					</li>
				</ul>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			libData: '',
		}
	},
	created() {
		this.libData = {
			group: 'Python',
			ver: '3.7.1',
			libName: '라이브러리 이름',
			libVer: '1.3.1',
			libDesc: '라이브러리 상세설명',
			libFile: '라이브러리 경로',
			license: '라이선스',
			viewCount: 375,
			regDate: '2022-01-03',
		}
	},
}
</script>
