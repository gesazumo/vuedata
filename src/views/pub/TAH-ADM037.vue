<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>오픈소스 라이브러리 관리</h5>
				<div class="adm-search-2">
					<v-row>
						<v-col md="4">
							<div class="label_txt">제목</div>
							<v-text-field
								placeholder="제목"
								single-line
								outlined
								clearable
								hide-details="auto"
							></v-text-field>
						</v-col>
						<v-col md="4">
							<div class="label_txt">등록일</div>
							<div>
								<date-picker
									v-model="date"
									range
									placeholder="기간 선택"
								/>
							</div>
						</v-col>
					</v-row>
					<v-row>
						<v-col md="4">
							<div class="label_txt">구분</div>
							<v-select
								:items="group"
								label="전체 패키지 그룹"
								single-line
								outlined
								hide-details="auto"
							></v-select>
						</v-col>
						<v-col md="5">
							<div class="label_txt">
								Status
								<v-tooltip
									right
									content-class="secondary tooltip-right"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											v-bind="attrs"
											v-on="on"
											icon
											style="background: none !important"
										>
											<v-icon>mdi-help-circle</v-icon>
										</v-btn>
									</template>
									<div>
										<p
											class="title"
											style="
												color: #fff !important;
												font-size: 16px !important;
											"
										>
											오픈소스 라이브러리 반입 현황 확인
										</p>
										<span>
											[접수완료] 오픈소스 라이브러리 반입
											신청 접수<br />
											[보안점검중] 운영자가 라이브러리
											파일 업로드 후 보안점검 진행중인
											상태<br />
											[취약점 발견] 보안점검중 취약점이
											발견되어 반입이 불가한 상태<br />
											[반입완료] 보언점검 완료 후 Private
											Repository로 반입된 상태
										</span>
									</div>
								</v-tooltip>
							</div>

							<div class="checkgroup">
								<v-checkbox
									label="접수완료"
									hide-details="auto"
								></v-checkbox>
								<v-checkbox
									label="점검중"
									hide-details="auto"
								></v-checkbox>
								<v-checkbox
									label="취약점 발견"
									hide-details="auto"
								></v-checkbox>
								<v-checkbox
									label="반입완료"
									hide-details="auto"
								></v-checkbox>
							</div>
						</v-col>
						<v-col md="2">
							<v-btn color="primary" dark outlined>초기화</v-btn>
							<v-btn color="primary" dark>검색하기</v-btn>
						</v-col>
					</v-row>
				</div>
				<div class="item_box">
					<div class="tit">
						<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
						<v-select
							label="10개씩 보기"
							class="list_select"
							single-line
							hide-details="auto"
						>
						</v-select>
					</div>
					<div class="btn_area">
						<v-btn color="primary" dark> 등록하기 </v-btn>
						<v-btn
							color="primary"
							dark
							outlined
							@click="dialog = true"
						>
							삭제하기
						</v-btn>
						<v-btn color="primary" dark outlined> 수정하기 </v-btn>
						<v-dialog v-model="dialog" max-width="350">
							<v-card align="center">
								<v-card-title class="text-subtitle-1">
									선택 항목을 삭제하시겠습니까?
								</v-card-title>
								<v-card-text></v-card-text>

								<v-card-actions>
									<v-spacer></v-spacer>

									<v-btn
										color="primary"
										dark
										outlined
										@click="dialog = false"
									>
										취소
									</v-btn>

									<v-btn
										color="primary"
										dark
										@click="dialog = false"
									>
										삭제하기
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</div>
					<div class="table_box">
						<v-data-table
							:headers="headers"
							:items="items_02"
							:items-per-page="itemsPerPage"
							:single-select="singleSelect"
							show-select
							hide-default-footer
							class="elevation-1"
						>
							<template v-slot:item="row">
								<tr>
									<td>
										{{ row.item.singleSelect }}
									</td>
									<td>
										{{ row.item.type }}
									</td>
									<td>
										{{ row.item.status }}
									</td>
									<td>
										{{ row.item.libname }}
									</td>
									<td>
										{{ row.item.ver }}
									</td>
									<td>
										{{ row.item.projectid }}
									</td>
									<td>
										{{ row.item.writer }}
									</td>
									<td>
										{{ row.item.date_01 }}
									</td>
									<td>
										{{ row.item.admin_name }}
									</td>
									<td>
										{{ row.item.date_02 }}
										<v-btn
											color="primary"
											dark
											outlined
											small
											@click="ADM038"
											>반입하기</v-btn
										>
									</td>
								</tr>
							</template>
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
				</div>
			</div>
		</div>
	</v-app>
</template>
<script>
import DatePicker from 'vue2-datepicker'

export default {
	components: {
		DatePicker,
	},
	data() {
		return {
			date: '',
			dialog: false,
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			group: ['전체', 'Python', 'R', 'Anaconda', '기타'],
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '구분',
					sortable: true,
					value: 'type',
				},
				{
					text: 'Status',
					sortable: true,
					value: 'status',
				},
				{
					text: '라이브러리명',
					sortable: true,
					value: 'libname',
				},
				{
					text: '버전',
					sortable: true,
					value: 'ver',
				},
				{
					text: 'Project ID',
					sortable: true,
					value: 'projectid',
				},
				{
					text: '신청자',
					sortable: true,
					value: 'writer',
				},
				{
					text: '신청일',
					sortable: true,
					value: 'date_01',
				},
				{
					text: '관리자',
					sortable: true,
					value: 'admin_name',
				},
				{
					text: '반입일',
					sortable: true,
					value: 'date_02',
				},
			],
			items_02: [
				{
					type: 'Anaconda',
					status: '접수완료',
					libname: 'Redshift Connector',
					ver: '2.0.900',
					projectid: 'PROJ-0001',
					writer: '조경범',
					date_01: '2021-00-00',
					admin_name: '최자영',
					date_02: '반입하기',
				},
				{
					type: 'Python',
					status: '보안점검중',
					libname: 'Ggplot2',
					ver: '2.2.1',
					projectid: 'PROJ-0004',
					writer: '김영선',
					date_01: '2021-00-00',
					admin_name: '최자영',
					date_02: '보안점검중',
				},
				{
					type: 'R',
					status: '취약점 발견',
					libname: 'Car',
					ver: '3.0-12',
					projectid: 'PROJ-0005',
					writer: '김영선',
					date_01: '2021-00-00',
					admin_name: '최자영',
					date_02: '반입불가',
				},
				{
					type: 'Python',
					status: '반입완료',
					libname: 'Pandas',
					ver: '1.3.4',
					projectid: 'PROJ-0006',
					writer: 'N/A',
					date_01: '2021-00-00',
					admin_name: '최자영',
					date_02: '2021-00-00',
				},
			],
		}
	},
}
</script>
