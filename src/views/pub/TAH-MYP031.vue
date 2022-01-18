<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<ul>
					<li>홈</li>
					<li><i class="fa fa-chevron-right"></i> My Page</li>
					<li><i class="fa fa-chevron-right"></i> My 결재함</li>
				</ul>
				<h3>My 결재함</h3>
			</div>
			<div class="title_txt" style="border-bottom: none">
				<div class="txt">
					분석환경 신청, 테이블 생성, 데이터 권한 신청, My Dataset
					업로드 및 My Project 공유하기에 대한 결재요청 현황을 확인할
					수 있습니다.
				</div>
			</div>
			<div class="subcontents">
				<div class="board_list">
					<v-card style="width: 100%">
						<v-tabs
							class="tab3"
							center-active
							centered
							v-model="tab"
						>
							<v-tab> 결재수신함 <span>00</span> </v-tab>
							<v-tab> 결재함 <span>00</span> </v-tab>
							<v-tab> 반려함 <span>00</span> </v-tab>
						</v-tabs>
						<v-tabs-items v-model="tab">
							<v-tab-item>
								<div class="list" style="margin-top: 32px">
									<v-data-table
										:headers="headers_01"
										:items-per-page="itemsPerPage"
										hide-default-footer
										class="elevation-1"
									>
									</v-data-table>
									<div class="paging">
										<v-pagination
											v-model="page"
											:length="50"
											:total-visible="7"
											color="primary"
										></v-pagination>
									</div>
								</div>
							</v-tab-item>
							<v-tab-item>
								<div class="list" style="margin-top: 32px">
									<v-data-table
										:headers="headers_02"
										:items-per-page="itemsPerPage"
										hide-default-footer
										class="elevation-1"
									>
									</v-data-table>
									<div class="paging">
										<v-pagination
											v-model="page"
											:length="50"
											:total-visible="7"
											color="primary"
										></v-pagination>
									</div>
								</div>
							</v-tab-item>
							<v-tab-item>
								<div class="list" style="margin-top: 32px">
									<v-data-table
										:headers="headers_03"
										:items-per-page="itemsPerPage"
										hide-default-footer
										class="elevation-1"
									>
									</v-data-table>
									<div class="paging">
										<v-pagination
											v-model="page"
											:length="50"
											:total-visible="7"
											color="primary"
										></v-pagination>
									</div>
								</div>
							</v-tab-item>
						</v-tabs-items>
					</v-card>
				</div>
			</div>
			<!--상세 보기 버튼-->
			<v-btn color="amber darken-3" x-small> 보기 </v-btn>
			<!--상세 보기 버튼-->
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

			tab: null,

			headers_01: [
				{
					text: '구분',
					align: 'center',
					sortable: true,
					value: '',
					width: '250px',
				},
				{
					text: '결재ID',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '요청자',
					align: 'center',
					sortable: true,
					value: '',
					width: '180px',
				},
				{
					text: '요청일시',
					align: 'center',
					sortable: true,
					value: '',
					width: '200px',
				},
				{
					text: '상세',
					align: 'center',
					sortable: false,
					value: '',
					width: '150px',
				},
			],
			headers_02: [
				{
					text: '구분',
					align: 'center',
					sortable: true,
					value: '',
					width: '250px',
				},
				{
					text: '결재ID',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '요청자',
					align: 'center',
					sortable: true,
					value: '',
					width: '180px',
				},
				{
					text: '요청일시',
					align: 'center',
					sortable: true,
					value: '',
					width: '200px',
				},
				{
					text: '결재일시',
					align: 'center',
					sortable: true,
					value: '',
					width: '200px',
				},
				{
					text: '상세',
					align: 'center',
					sortable: false,
					value: '',
					width: '150px',
				},
			],
			headers_03: [
				{
					text: '구분',
					align: 'center',
					sortable: true,
					value: '',
					width: '250px',
				},
				{
					text: '결재ID',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '요청자',
					align: 'center',
					sortable: true,
					value: '',
					width: '180px',
				},
				{
					text: '요청일시',
					align: 'center',
					sortable: true,
					value: '',
					width: '200px',
				},
				{
					text: '반려일시',
					align: 'center',
					sortable: true,
					value: '',
					width: '200px',
				},
				{
					text: '상세',
					align: 'center',
					sortable: false,
					value: '',
					width: '150px',
				},
			],
		}
	},
}
</script>
