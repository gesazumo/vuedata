<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>
					클라우드 자원 사용 현황
					<div class="float-right">
						<v-btn color="primary">상세비용 확인하러 가기</v-btn>
					</div>
				</h5>

				<div class="item_box">
					<p class="pb-4 font-weight-bold">클라우드 비용 요약</p>
					<div class="box3">
						<p class="font-weight-bold">지난달 비용</p>
						<h4>$ 3,130</h4>
						<span class="txt">2021년 10월</span>
					</div>
					<div class="box3">
						<p class="font-weight-bold">이번달 현재까지 비용</p>
						<h4>$ 3,130</h4>
						<span class="txt">2021년 11월 1 ~ 28일</span>
					</div>
					<div class="box3 mr-0">
						<p class="font-weight-bold">이번달 예상 비용</p>
						<h4>$ 3,130</h4>
						<span class="txt">2021년 11월(예상)</span>
					</div>
				</div>

				<div class="item_box">
					<p class="pb-4 font-weight-bold">
						자원 사용 현황 (2021년 11월 1 ~ 28일)
					</p>
					<div class="box3">
						<p class="font-weight-bold">계열사별</p>
						<div class="chart">
							<div
								style="
									width: 330px;
									height: 330px;
									background-color: #d8d8d8;
								"
							>
								차트 사이즈 330x330
							</div>
						</div>
						<p class="pt-2 pb-4 font-weight-bold" align="left">
							총 9개 계열사
						</p>
						<v-data-table
							:headers="headers_1"
							:height="400"
							hide-default-footer
							class="elevation-1"
						></v-data-table>
					</div>
					<div class="box3">
						<p class="font-weight-bold">프로젝트별</p>
						<div class="chart">
							<div
								style="
									width: 330px;
									height: 330px;
									background-color: #d8d8d8;
								"
							>
								차트 사이즈 330x330
							</div>
						</div>
						<p class="pt-2 pb-4 font-weight-bold" align="left">
							총 20개 프로젝트
						</p>
						<v-data-table
							:headers="headers_2"
							:height="400"
							hide-default-footer
							class="elevation-1"
						></v-data-table>
					</div>
					<div class="box3 mr-0">
						<p class="font-weight-bold">서비스별</p>
						<div class="chart">
							<div
								style="
									width: 330px;
									height: 330px;
									background-color: #d8d8d8;
								"
							>
								차트 사이즈 330x330
							</div>
						</div>
						<p class="pt-2 pb-4 font-weight-bold" align="left">
							총 35개 서비스
						</p>
						<v-data-table
							:headers="headers_3"
							:height="400"
							hide-default-footer
							class="elevation-1"
						></v-data-table>
					</div>
				</div>

				<!--차트컬러 참조하시고 삭제-->
				<div>
					차트컬러 참조 <br />
					<span class="chart-color green"></span>
					<span class="chart-color blue"></span>
					<span class="chart-color pink"></span>
					<span class="chart-color purple"></span>
					<span class="chart-color indigo"></span>
					<span class="chart-color cyan"></span>
					<span class="chart-color teal"></span>
					<span class="chart-color yellow"></span>
					<span class="chart-color orange"></span>
				</div>
				<!--차트컬러 참조하시고 삭제-->

				<div class="item_box">
					<p class="pb-4 font-weight-bold">
						스토리지 사용 현황 (2021년 11월 1 ~ 28일)
					</p>
					<div class="box1">
						<div>
							<p class="pt-4 font-weight-bold">할당량</p>
							<h4>2,000.00<span> GB</span></h4>
						</div>
						<div>
							<p class="pt-4 font-weight-bold">사용량</p>
							<h4>1,490.00<span> GB</span></h4>
						</div>
						<div>
							<p class="pt-4 font-weight-bold">사용율</p>
							<h4>75.00<span> %</span></h4>
						</div>
					</div>
				</div>

				<div class="item_box">
					<div class="board">
						<div class="tit">
							<p class="pb-4 font-weight-bold">
								프로젝트별 스토리지 사용 현황
							</p>
							<v-select
								label="10개씩 보기"
								class="list_select"
								single-line
								hide-details="auto"
							>
							</v-select>
						</div>
					</div>

					<div class="table_box">
						<v-data-table
							:headers="headers"
							:items-per-page="itemsPerPage"
							hide-default-footer
							class="elevation-1"
						>
							<template v-slot:body>
								<v-btn color="green" x-small> 정상 </v-btn>
								<v-btn color="red" x-small> 초과 </v-btn>
							</template>
						</v-data-table>
					</div>
					<div class="paging">
						<v-pagination
							v-model="page"
							:length="50"
							:total-visible="7"
							color="primary"
						></v-pagination>
					</div>
				</div>

				<div style="width: 500px">
					<!--사용률 linear-->
					<v-progress-linear
						v-model="linear1"
						color="green"
						height="20"
					>
						<strong>{{ Math.ceil(linear1) }}%</strong>
					</v-progress-linear>
					<br />
					<v-progress-linear
						v-model="linear2"
						color="green"
						height="20"
					>
						<strong>{{ Math.ceil(linear2) }}%</strong>
					</v-progress-linear>
					<br />
					<v-progress-linear
						v-model="linear3"
						color="red"
						height="20"
					>
						<strong>{{ Math.ceil(linear3) }}%</strong>
					</v-progress-linear>
					<!--사용률 linear-->
				</div>
			</div>
		</div>
	</v-app>
</template>
<script>
export default {
	data() {
		return {
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,

			linear1: 50,
			linear2: 0,
			linear3: 100,

			headers: [
				{
					text: '사용현황',
					align: 'center',
					sortable: true,
					value: '',
					width: '120px',
				},
				{
					text: '계열사명',
					align: 'center',
					sortable: true,
					value: '',
					width: '200px',
				},
				{
					text: '프로젝트 ID',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '사용량',
					align: 'center',
					sortable: true,
					value: '',
					width: '120px',
				},
				{
					text: '사용률',
					align: 'center',
					sortable: false,
					value: '',
				},
			],

			headers_1: [
				{
					text: '구분',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '계열사명',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '(단위:US $)',
					align: 'center',
					sortable: false,
					value: '',
				},
			],
			headers_2: [
				{
					text: '구분',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '프로젝트ID',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '(단위:US $)',
					align: 'center',
					sortable: false,
					value: '',
				},
			],
			headers_3: [
				{
					text: '구분',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '서비스명',
					align: 'center',
					sortable: false,
					value: '',
				},
				{
					text: '(단위:US $)',
					align: 'center',
					sortable: false,
					value: '',
				},
			],
		}
	},
}
</script>
