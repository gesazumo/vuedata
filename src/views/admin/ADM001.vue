<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>단어관리</h5>
			<div class="adm-search">
				<ul>
					<li>
						<label>한글단어명</label>
						<v-text-field
							placeholder="은행"
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
						>
							검색하기
						</button>
					</li>
				</ul>
			</div>
			<div class="item_box">
				<div class="tit">
					<div class="tit" v-if="itemList.length > 0">
						<p>
							총 <span>{{ itemList.length }}</span
							>개의 단어 목록이 있습니다.
						</p>
						<v-select
							:items="itemCount"
							item-text="str"
							item-value="val"
							class="list_select"
							value="10"
							single-line
							hide-details="auto"
							@change="moreCount($event)"
						>
						</v-select>
					</div>
				</div>
				<div class="btn_area">
					<v-btn color="primary" @click="Insert()"> 등록하기 </v-btn>
					<v-btn
						color="primary"
						outlined
						@click="Modify()"
						:disabled="gf_btnModify(this.checkselected)"
					>
						수정하기
					</v-btn>
					<v-btn
						color="primary"
						outlined
						@click="Delete()"
						:disabled="gf_btnDelete(this.checkselected)"
					>
						삭제하기
					</v-btn>
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
			// end data-table

			markitems: [
				{ iCon: '==', value: '1' },
				{ iCon: '_%', value: '2' },
				{ iCon: '%_', value: '3' },
				{ iCon: '%_%', value: '4' },
			], // 부호 SELCT
			mark: '4', // 부호
			korWord: '', // 한글단어명
			itemCount: [
				{ str: '10개씩보기', val: '10' },
				{ str: '15개씩보기', val: '15' },
				{ str: '30개씩보기', val: '30' },
				{ str: '50개씩보기', val: '50' },
			],
		}
	},
	created() {
		if (this.$route.params.searchKey) {
			window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
			this.korWord = this.$route.params.searchKey
			this.mark = this.$route.params.searchKey2
			this.onSearch()
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
		Insert() {
			this.gf_router('adm002', {
				searchKey: this.korWord,
				searchKey2: this.mark,
			})
		},
		Modify() {
			this.gf_router('adm002', {
				inHanglWordName: this.checkselected[0].hanglWordName,
				inEngAbrvnName: this.checkselected[0].engAbrvnName,
				searchKey: this.korWord,
				searchKey2: this.mark,
			})
		},
		Delete() {
			let param = []
			for (let key in this.checkselected) {
				param.push({
					hanglWordName: this.checkselected[key].hanglWordName,
					engAbrvnName: this.checkselected[key].engAbrvnName,
				})
			}
			axios
				.post('/api/admin/meta/delManWordCon', {
					data: param,
					userNo: 'S017069',
				})
				.then(res => {
					alert('삭제되었습니다.')
					console.log(res)
					this.onSearch
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
		moreCount(val) {
			this.itemsPerPage = Number(val)
		},
	},
}
</script>
