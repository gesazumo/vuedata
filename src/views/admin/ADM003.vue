<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>인스턴스 관리</h5>
			<div class="adm-search">
				<ul>
					<li>
						<label>인스턴스명</label>
						<v-text-field
							placeholder="계좌"
							single-line
							outlined
							v-model="korWord"
							clearable
						></v-text-field>
					</li>
					<li class="mg_L0">
						<label></label>
						<v-select
							:items="markitems"
							item-text="iCon"
							item-value="value"
							ref="mark"
							v-model="mark"
							single-line
							outlined
						></v-select>
					</li>
					<li>
						<button
							class="search"
							@click="onSearch()"
							:disabled="korWord == ''"
							id="btnSearch"
						>
							검색하기
						</button>
					</li>
				</ul>
			</div>
			<div class="item_box">
				<div class="table_box">
					<div class="tit">
						<p v-if="itemList.legnth > 0">
							총 <span>{{ itemList.length }}</span
							>개의 검색결과가 있습니다.
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
							>
								<template v-slot:expanded-item="{ headers }">
									<td :colspan="headers.length">
										<table>
											<tr>
												<td>인스턴스코드</td>
												<td>인스턴스코드 정의</td>
											</tr>
											<tr
												v-for="(item2, index) in dtList"
												:key="index"
											>
												<td>{{ item2.instncCd }}</td>
												<td>{{ item2.instncCtnt }}</td>
											</tr>
										</table>
									</td>
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
			</div>
			<div class="btn_area">
				<button
					class="cancel large"
					@click="
						gf_router('adm003', {
							searchKey: $route.params.searchKey,
							searchKey2: $route.params.searchKey2,
						})
					"
				>
					취소
				</button>
				<button class="delete large">삭제하기</button>
				<button class="regit large" @click="Modify()">
					{{ btnText }}하기
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'

export default {
	data() {
		return {
			// data-table
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			singleSelect: false,
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
					width: '80px',
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
				.post('/admin/meta/getInstncList', {
					inInstncName: this.korWord,
					inCon: this.mark,
				})
				.then(res => {
					this.itemList = res.data.list
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		Insert() {
			this.gf_router('adm004', {
				searchKey: this.korWord,
				searchKey2: this.mark,
			})
		},
		Modify() {
			//alert(this.checkselected[0].instncIdnfr)
			this.gf_router('adm004', {
				instncIdnfr: this.checkselected[0].instncIdnfr,
				searchKey: this.korWord,
				searchKey2: this.mark,
			})
		},
		Delete() {
			let param = []
			for (let key in this.checkselected) {
				param.push(this.checkselected[key].instncIdnfr)
			}

			axios
				.delete('/admin/mata/delInstnc', { instncIdnfr: param })
				.then(res => {
					alert('삭제되었습니다.')
					console.log(res)
					this.onSearch()
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
		expandRow(item) {
			this.dtList = [] // 초기화
			axios
				.post('/admin/meta/getInsDtlList', {
					inInstncIdnfr: item.item.instncIdnfr,
				})
				.then(res => {
					this.dtList = res.data.list
					// this.dtList = item
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
	},
}
</script>
