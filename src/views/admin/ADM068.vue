<template>
	<v-app>
		<div class="open-popup">
			<div class="open-inner">
				<div class="open-head">
					<h5>컬럼명 조회</h5>
					<div class="close-btn" @click="popupClose()">
						<img src="../../images/com_icon_close.svg" />
					</div>
				</div>

				<div class="open-body">
					<div class="open-body-search">
						<div
							style="float: left; width: 145px; line-height: 40px"
						>
							한글단어명
						</div>
						<div style="float: left">
							<v-text-field
								placeholder="은행"
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
										color="primary"
										dark
										@click="onSearch()"
										:disabled="korWord == ''"
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
								>개의 단어 목록이 있습니다.
							</p>
						</div>

						<div class="table_box">
							<v-data-table
								v-model="checkselected"
								:headers="headers"
								:items="itemList"
								:single-select="singleSelect"
								:items-per-page="itemsPerPage"
								item-key="hanglWordName"
								show-select
								hide-default-footer
								class="elevation-1"
								:page.sync="page"
								@page-count="pageCount = $event"
								:height="300"
							>
								<template v-slot:no-data>
									<v-alert :value="true">
										조회된 데이터가 없습니다.
									</v-alert>
								</template>
							</v-data-table>
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
							@click="selectColumn()"
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
			singleSelect: false,
			checkselected: [], // 체크박스
			itemList: [], // jsonData

			headers: [
				{
					text: '원천',
					align: 'center',
					sortable: true,
					value: 'screnRegiYn',
				},
				{
					text: '한글단어명',
					align: 'center',
					sortable: true,
					value: 'hanglWordName',
				},
				{
					text: '영문약어명',
					align: 'center',
					sortable: true,
					value: 'engAbrvnName',
				},
				{
					text: '영어단어명',
					align: 'center',
					sortable: true,
					value: 'engWordName',
				},
				{
					text: '단어구분',
					align: 'center',
					sortable: true,
					value: 'smwrCmwrDstic',
				},
				{
					text: '정의',
					align: 'center',
					sortable: true,
					value: 'hanglWordDefin',
				},
				{
					text: '등록자',
					align: 'center',
					sortable: true,
					value: 'sysLastEmpid',
				},
				{
					text: '등록일시',
					align: 'center',
					sortable: true,
					value: 'sysLastPrcssYms',
				},
			],

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
				.get('/api/admin/meta/getWordList', {
					params: { inCon: this.mark, inHanglWordName: this.korWord },
				})
				.then(res => {
					this.itemList = res.data.list
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		selectColumn() {
			if (this.checkselected.length == 0) {
				alert('컬럼을 선택해 주세요.')
				return
			}
			this.$emit('selectColumn', this.checkselected)
		},

		popupClose() {
			this.$emit('close:popup')
		},
	},
}
</script>
