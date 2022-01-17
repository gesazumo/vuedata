<template>
	<v-app>
		<div class="open-popup">
			<div class="open-inner">
				<div class="open-head">
					<h5>인스턴스명 조회</h5>
					<div class="close-btn" @click="popupClose()">
						<img src="../../images/com_icon_close.svg" />
					</div>
				</div>

				<div class="open-body">
					<div class="open-body-search">
						<div
							style="float: left; width: 145px; line-height: 40px"
						>
							인스턴스명
						</div>
						<div style="float: left">
							<v-text-field
								placeholder="계좌"
								single-line
								outlined
								v-model="korWord"
								clearable
							></v-text-field>
						</div>
						<div style="float: left; margin-left: 5px">
							<v-select
								:items="markitems"
								item-text="iCon"
								item-value="value"
								ref="mark"
								v-model="mark"
								single-line
								outlined
							>
								<template slot="append-outer">
									<v-btn
										@click="onSearch()"
										color="primary"
										dark
									>
										검색하기
									</v-btn>
								</template>
							</v-select>
						</div>
					</div>
					<div class="item_box">
						<div class="tit" v-if="itemList.length > 0">
							<p>
								총 <span>{{ itemList.length }}</span
								>개의 인스턴스 목록이 있습니다.
							</p>
						</div>

						<div class="table_box">
							<template>
								<v-data-table
									v-model="checkselected"
									:headers="headers"
									:items="itemList"
									:single-expand="singleExpand"
									:single-select="singleSelect"
									:expanded.sync="expanded"
									item-key="instncIdnfr"
									show-select
									show-expand
									class="elevation-1"
									:items-per-page="itemsPerPage"
									hide-default-footer
									:page.sync="page"
									@page-count="pageCount = $event"
									@item-expanded="expandRow"
									:height="300"
								>
									<template
										v-slot:expanded-item="{ headers }"
									>
										<td :colspan="headers.length">
											<table>
												<tr>
													<td>인스턴스코드</td>
													<td>인스턴스코드 정의</td>
												</tr>
												<tr
													v-for="(
														item2, index
													) in dtList"
													:key="index"
												>
													<td>
														{{ item2.instncCd }}
													</td>
													<td>
														{{ item2.instncCtnt }}
													</td>
												</tr>
											</table>
										</td>
									</template>
									<template v-slot:no-data>
										<v-alert :value="true">
											조회된 데이터가 없습니다.
										</v-alert>
									</template>
								</v-data-table>
							</template>
						</div>
						<div class="paging">
							<v-pagination
								v-model="page"
								:length="pageCount"
								:total-visible="7"
								color="primary"
								v-if="pageCount > 1"
							></v-pagination>
						</div>
					</div>
					<div class="btnArea">
						<v-btn
							color="primary"
							dark
							large
							outlined
							@click="popupClose()"
						>
							취소
						</v-btn>
						<v-btn
							color="primary"
							dark
							large
							@click="selectInstance()"
							>선택완료</v-btn
						>
					</div>
				</div>
			</div>
		</div>
	</v-app>
</template>
<script>
import axios from 'axios'

export default {
	data() {
		return {
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			singleSelect: true,
			singleExpand: true,
			expanded: [],
			checkselected: [], // 체크박스
			itemList: [], // jsonData
			dtList: [], // instance 상세
			headers: [
				{
					text: '원천',
					align: 'center',
					sortable: true,
					value: 'screnRegiYn',
				},
				{
					text: '식별자',
					align: 'center',
					sortable: true,
					value: 'instncIdnfr',
				},
				{
					text: '인스턴스명',
					align: 'center',
					sortable: true,
					value: 'instncName',
				},
				{
					text: '코드길이',
					align: 'center',
					sortable: true,
					value: 'incdLen',
				},
				{
					text: '인스턴스 정의',
					align: 'center',
					sortable: true,
					value: 'instncDefinCtnt',
				},
				{
					text: '등록일시',
					align: 'center',
					sortable: true,
					value: 'sysLastPrcssYms',
				},
				{
					text: '상세보기',
					width: '90px',
					align: 'center',
					value: 'data-table-expand',
				},
			],
			// end data-table

			markitems: [
				{ iCon: '==', value: '1' },
				{ iCon: '_%', value: '2' },
				{ iCon: '%_', value: '3' },
				{ iCon: '%_%', value: '4' },
			], // 부호 SELCT
			mark: '4', // 부호
			korWord: '', // 한글단어명
		}
	},

	methods: {
		onSearch() {
			if (this.korWord == '') {
				return
			}

			axios
				.get('/api/admin/meta/getInstncList', {
					params: { inInstncName: this.korWord, inCon: this.mark },
				})
				.then(res => {
					this.itemList = res.data.list
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		expandRow(item) {
			this.dtList = [] // 초기화
			axios
				.get('/api/admin/meta/getInsDtlList', {
					params: { inInstncIdnfr: item.item.instncIdnfr },
				})
				.then(res => {
					this.dtList = res.data.list
					// this.dtList = item
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		selectInstance() {
			if (this.checkselected.length == 0) {
				alert('인스턴스명을 선택해 주세요.')
				return
			}
			this.$emit('selectInstance', this.checkselected)
		},

		popupClose() {
			this.$emit('close:popup')
		},
	},
}
</script>
