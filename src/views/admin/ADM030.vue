<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>자료실 관리</h5>
			<div class="item_box">
				<div class="table_box">
					<table class="tb_write">
						<caption>
							table caption
						</caption>
						<colgroup>
							<col width="230" />
							<col width="" />
						</colgroup>
						<tbody>
							<tr>
								<th>
									카테고리
									<span class="asterisk">필수</span>
									<v-tooltip
										right
										content-class="secondary tooltip-right"
									>
										<template
											v-slot:activator="{ on, attrs }"
										>
											<v-btn
												v-bind="attrs"
												v-on="on"
												icon
												style="
													background: none !important;
												"
											>
												<i
													class="
														fas
														fa-question-circle
													"
												></i>
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
												매뉴얼 버전 관리 가이드를
												확인하세요.
											</p>
											<span>
												최초 등록시 1.0 버전으로
												등록하며, <br />
												Minor 수정은 1.1, 1.2 ... 1.9
												버전으로 업데이트,
												<br />
												Major tnwjddms 2.0, 3.0 버전으로
												업데이트.
											</span>
										</div>
									</v-tooltip>
								</th>
								<td>
									<v-select
										placeholder="카테고리를 선택하세요"
										outlined
										hide-details="auto"
										style="width: 300px"
										v-model="categorySelect"
										:items="categorySelectList"
										item-text="title"
										item-value="value"
										return-object
										@change="changeCategorySelect"
									></v-select>
								</td>
							</tr>
							<tr>
								<th>
									버전
									<span class="asterisk">필수</span>
								</th>
								<td>
									<v-text-field
										placeholder="버전을 입력하세요"
										single-line
										outlined
										hide-details="auto"
										style="
											float: left;
											width: 300px !important;
										"
										v-model="newVer"
									></v-text-field>
									<v-btn
										color="primary"
										small
										outlined
										style="
											float: left;
											height: 40px !important;
											margin: 0 5px;
										"
										@click="dialog = true"
										v-if="categorySelect"
									>
										버전 업데이트 하기
									</v-btn>
									<v-dialog v-model="dialog" max-width="280">
										<v-card align="center">
											<v-card-title
												class="text-subtitle-1"
											>
												매뉴얼 버전을<br />
												업데이트 하시겠습니까?
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
													@click="clickVerUpdateBtn()"
												>
													업데이트하기
												</v-btn>
											</v-card-actions>
										</v-card>
									</v-dialog>
									<div v-if="categorySelect">
										<div class="ver_txt" v-if="currentVer">
											<i
												class="
													fas
													fa-exclamation-circle
												"
											></i>
											현재 등록된 최종 버전은
											{{ currentVer }} 입니다.
										</div>
										<div class="ver_txt" v-else>
											<i
												class="
													fas
													fa-exclamation-circle
												"
											></i>
											현재 등록된 버전이 없습니다.
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div
				style="
					position: relative;
					display: inline-block;
					width: 100%;
					margin-top: 20px;
				"
				v-if="verCheckFlag"
			>
				<div class="menu_lst">
					<v-row>
						<v-btn small outlined @click="closeAllTreeview()"
							>모두 접기</v-btn
						>
						<v-btn small outlined @click="openAllTreeview()"
							>모두 펼치기</v-btn
						>
						<v-btn
							color="primary"
							small
							outlined
							@click="addBtnClick()"
							v-if="show.depth < 3"
						>
							추가하기
						</v-btn>
					</v-row>
					<v-treeview
						ref="treeview"
						:active.sync="treeActive"
						item-key="seq"
						item-text="title"
						hoverable
						activatable
						:items="treeListItems"
						@update:active="treeClick()"
					></v-treeview>
				</div>
				<div class="menu_view">
					<div v-if="addAndEditDisplayFlag">
						<div class="table_box">
							<p
								class="pt-2 pb-4 font-weight-bold"
								v-if="!addDisplayFlag"
							>
								수정하기
							</p>
							<p
								class="pt-2 pb-4 font-weight-bold"
								v-if="addDisplayFlag"
							>
								추가하기
							</p>
							<table class="tb_write">
								<caption>
									table caption
								</caption>
								<colgroup>
									<col width="160" />
									<col width="" />
								</colgroup>
								<tbody>
									<tr>
										<th>
											목차 Depth
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-select
												placeholder="목차 Depth를 선택하세요"
												single-line
												outlined
												hide-details="auto"
												v-model="depthSelect"
												:items="depthSelectList"
												item-text="title"
												item-value="value"
												return-object
												@change="
													getFirstDepthSelectList
												"
											></v-select>
										</td>
									</tr>
									<tr>
										<th>
											상위 목차
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-row>
												<v-select
													placeholder="1 Depth 메뉴"
													single-line
													outlined
													hide-details="auto"
													style="
														width: 120px;
														margin-right: 8px;
													"
													v-if="depthSelect.value > 1"
													v-model="firstDepthSelect"
													:items="
														firstDepthSelectList
													"
													item-text="title"
													item-value="referenceisid"
													return-object
													@change="
														getSecondDepthSelectList
													"
												></v-select>
												<v-select
													placeholder="2 Depth 메뉴"
													single-line
													outlined
													hide-details="auto"
													style="width: 120px"
													v-if="depthSelect.value > 2"
													v-model="secondDepthSelect"
													:items="
														secondDepthSelectList
													"
													item-text="title"
													item-value="referenceisid"
													return-object
												></v-select>
											</v-row>
										</td>
									</tr>
									<tr>
										<th>
											메뉴 순서
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-select
												placeholder="메뉴 순서를 선택하세요"
												single-line
												outlined
												hide-details="auto"
												style="width: 225px"
												v-model="sortSelect"
												:items="sortSelectList"
											></v-select>
										</td>
									</tr>
									<tr>
										<th>
											목차 ID
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-text-field
												placeholder="목차 ID를 입력하세요"
												single-line
												outlined
												hide-details="auto"
												v-model="menuId"
											></v-text-field>
										</td>
									</tr>
									<tr>
										<th>
											제목
											<span class="asterisk">필수</span>
										</th>
										<td>
											<v-text-field
												placeholder="제목을 입력하세요"
												single-line
												outlined
												hide-details="auto"
												v-model="menuName"
											></v-text-field>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											<vue-editor
												v-model="menuContent"
											></vue-editor>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="btn_area center pt-8">
							<v-btn color="primary" dark> 목록으로 </v-btn>
							<v-btn
								color="primary"
								v-if="!addDisplayFlag"
								@click="clickApplyEditBtn"
							>
								수정하기
							</v-btn>
							<v-btn
								color="primary"
								v-if="addDisplayFlag"
								@click="clickApplyAddBtn"
							>
								추가하기
							</v-btn>
						</div>
					</div>
					<div v-else>
						<div class="table_box" v-if="treeActive[0]">
							<p class="pt-2 pb-4 font-weight-bold">
								상세보기
								<!--등록화면에서는 등록하기 버튼 노출 / 수정하기화면에서는 삭제하기, 수정하기 버튼 노출--->
								<v-btn
									color="primary"
									dark
									small
									outlined
									style="float: right"
									@click="clickApplyDeleteBtn"
								>
									삭제하기
								</v-btn>
								<v-btn
									color="primary"
									dark
									small
									outlined
									style="float: right"
									@click="editBtnClick()"
								>
									수정하기
								</v-btn>
							</p>
							<table class="tb_write">
								<caption>
									table caption
								</caption>
								<colgroup>
									<col width="160" />
									<col width="" />
								</colgroup>
								<tbody>
									<!--
										목차 Depth하고 상위목차 ID 설계서 확인 부탁드려요 
										노출되는 정보 다름
									-->
									<tr>
										<th>목차 Depth</th>
										<td>{{ show.depth }}</td>
									</tr>
									<tr>
										<th>상위 목차 ID</th>
										<td>{{ show.parentId }}</td>
									</tr>
									<tr>
										<th>목차 순서</th>
										<td>{{ show.sort }}</td>
									</tr>
									<tr>
										<th>목차 ID</th>
										<td>{{ show.id }}</td>
									</tr>
									<tr>
										<th>제목</th>
										<td>{{ show.name }}</td>
									</tr>
									<td colspan="2">
										<vue-editor
											disabled
											v-model="show.content"
										></vue-editor>
									</td>
								</tbody>
							</table>
						</div>
						<div class="noti_meg" v-else>
							<i class="fas fa-exclamation-circle"></i>
							<div class="noti_txt">
								<p>
									선택된 항목이 없습니다.<br />
									항목을 추가하거나 선택해 주세요.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'
export default {
	components: {
		VueEditor,
	},
	data() {
		return {
			// menu1Rules: [v => !!v || '카테고리를 선택해 주세요.'],
			dialog: false,
			addAndEditDisplayFlag: false,
			addDisplayFlag: false,
			verCheckFlag: false,
			currentVer: '',
			newVer: '',
			menuId: '',
			menuName: '',
			menuContent: '',
			treeActive: [],
			treeListItems: [],
			categorySelect: '',
			categorySelectList: [],
			depthSelect: { title: '1 Level', value: 1 },
			depthSelectList: [
				{ title: '1 Level', value: 1 },
				{ title: '2 Level', value: 2 },
				{ title: '3 Level', value: 3 },
			],
			firstDepthSelect: '',
			firstDepthSelectList: [],
			secondDepthSelect: '',
			secondDepthSelectList: [],
			sortSelect: 1,
			sortSelectList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			show: {
				depth: '',
				parentId: '',
				sort: '',
				id: '',
				name: '',
				content: '',
			},
		}
	},
	created() {
		console.log(this.depthSelect)
		this.getCategoryList()
	},
	methods: {
		changeCategorySelect() {
			this.verCheckFlag = false
			this.newVer = ''
			axios
				.get('/api/admin/getReferenceConkategorieVer', {
					params: { kategorie: this.categorySelect.value },
				})
				.then(res => {
					this.currentVer = res.data.maxversion
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
		getTreeList() {
			this.addAndEditDisplayFlag = false
			this.addDisplayFlag = false
			this.treeActive = []
			axios
				.get('/api/admin/getReferenceConTree', {
					params: {
						kategorie: this.categorySelect.value,
						version: this.currentVer,
					},
				})
				.then(res => {
					this.treeListItems = res.data.list
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
		getCategoryList() {
			this.categorySelectList = [
				{ title: '분석가 포털 사용자 메뉴얼', value: '01' },
				{ title: '분석환경 사용자 메뉴얼', value: '02' },
				{ title: '테스트용 사용자 메뉴얼', value: '03' },
			]
		},
		initFirstDepthSelectList() {
			this.firstDepthSelect = ''
			this.firstDepthSelectList = []
		},
		initSecondDepthSelectList() {
			this.secondDepthSelect = ''
			this.secondDepthSelectList = []
		},
		getFirstDepthSelectList() {
			console.log('getFirstDepthSelectList')
			this.initFirstDepthSelectList()
			this.initSecondDepthSelectList()
			if (this.depthSelect.value > 1) {
				axios
					.get('/api/admin/getReferenceConUnder', {
						params: {
							kategorie: this.categorySelect.value,
							upperid: null,
							version: this.currentVer,
						},
					})
					.then(res => {
						this.firstDepthSelectList = res.data.list
					})
					.catch(err => {
						console.log('err : ' + err)
					})
			}
		},
		getSecondDepthSelectList() {
			console.log('getSecondDepthSelectList')
			console.log(this.categorySelect.value)
			console.log(this.firstDepthSelect.referenceisid)
			console.log(this.currentVer)
			this.initSecondDepthSelectList()
			if (this.depthSelect.value > 2) {
				console.log('axios start')
				axios
					.get('/api/admin/getReferenceConUnder', {
						params: {
							kategorie: this.categorySelect.value,
							upperid: this.firstDepthSelect.referenceisid,
							version: this.currentVer,
						},
					})
					.then(res => {
						console.log('axios result')
						console.log(JSON.stringify(res.data.list))
						this.secondDepthSelectList = res.data.list
					})
					.catch(err => {
						console.log('err : ' + err)
					})
			}
		},
		closeAllTreeview() {
			this.$refs.treeview.updateAll(false)
		},
		openAllTreeview() {
			this.$refs.treeview.updateAll(true)
		},
		treeClick() {
			console.log('treeClick')
			this.addAndEditDisplayFlag = false
			if (this.treeActive[0]) {
				axios
					.get('/api/admin/getReferenceConDetail', {
						params: {
							seq: this.treeActive[0],
						},
					})
					.then(res => {
						this.show.depth = res.data.level
						this.show.parentId = res.data.upperid
						this.show.sort = res.data.sort
						this.show.id = res.data.referenceId
						this.show.name = res.data.title
						this.show.content = res.data.maintext
					})
					.catch(err => {
						console.log('err : ' + err)
					})
			} else {
				this.show = {
					depth: '',
					parentId: '',
					sort: '',
					id: '',
					name: '',
					content: '',
				}
			}
		},
		addBtnClick() {
			this.addAndEditDisplayFlag = true
			this.addDisplayFlag = true
			this.setAddDepthSelect()
		},
		setAddDepthSelect() {
			if (!this.show.depth) {
				this.depthSelect = { title: '1 Level', value: 1 }
			} else if (this.show.depth === 1) {
				this.depthSelect = { title: '2 Level', value: 2 }
				axios
					.get('/api/admin/getReferenceConUnder', {
						params: {
							kategorie: this.categorySelect.value,
							upperid: null,
							version: this.currentVer,
						},
					})
					.then(res => {
						this.firstDepthSelectList = res.data.list
						console.log(this.firstDepthSelectList)
						for (
							let i = 0;
							i < this.firstDepthSelectList.length;
							i++
						) {
							if (
								this.firstDepthSelectList[i].referenceisid ==
								this.show.id
							) {
								this.firstDepthSelect =
									this.firstDepthSelectList[i]
							}
						}
					})
					.catch(err => {
						console.log('err : ' + err)
					})
			} else if (this.show.depth === 2) {
				this.depthSelect = { title: '3 Level', value: 3 }
				axios
					.get('/api/admin/getReferenceConUnder', {
						params: {
							kategorie: this.categorySelect.value,
							upperid: null,
							version: this.currentVer,
						},
					})
					.then(res => {
						this.firstDepthSelectList = res.data.list
						console.log(this.firstDepthSelectList)
						for (
							let i = 0;
							i < this.firstDepthSelectList.length;
							i++
						) {
							if (
								this.firstDepthSelectList[i].referenceisid ==
								this.show.parentId
							) {
								this.firstDepthSelect =
									this.firstDepthSelectList[i]
							}
						}
						axios
							.get('/api/admin/getReferenceConUnder', {
								params: {
									kategorie: this.categorySelect.value,
									upperid: this.show.parentId,
									version: this.currentVer,
								},
							})
							.then(res => {
								this.secondDepthSelectList = res.data.list
								for (
									let i = 0;
									i < this.secondDepthSelectList.length;
									i++
								) {
									if (
										this.secondDepthSelectList[i]
											.referenceisid == this.show.id
									) {
										this.secondDepthSelect =
											this.secondDepthSelectList[i]
									}
								}
							})
							.catch(err => {
								console.log('err : ' + err)
							})
					})
					.catch(err => {
						console.log('err : ' + err)
					})
			}
		},
		setEditDepthSelect() {
			if (this.show.depth === 1) {
				this.depthSelect = { title: '1 Level', value: 1 }
			} else if (this.show.depth === 2) {
				this.depthSelect = { title: '2 Level', value: 2 }
				axios
					.get('/api/admin/getReferenceConUnder', {
						params: {
							kategorie: this.categorySelect.value,
							upperid: null,
							version: this.currentVer,
						},
					})
					.then(res => {
						this.firstDepthSelectList = res.data.list
						console.log(this.firstDepthSelectList)
						for (
							let i = 0;
							i < this.firstDepthSelectList.length;
							i++
						) {
							if (
								this.firstDepthSelectList[i].referenceisid ==
								this.show.parentId
							) {
								this.firstDepthSelect =
									this.firstDepthSelectList[i]
							}
						}
					})
					.catch(err => {
						console.log('err : ' + err)
					})
			} else if (this.show.depth === 3) {
				this.depthSelect = { title: '3 Level', value: 3 }
				axios //get 1st depth list
					.get('/api/admin/getReferenceConUnder', {
						params: {
							kategorie: this.categorySelect.value,
							upperid: null,
							version: this.currentVer,
						},
					})
					.then(res => {
						this.firstDepthSelectList = res.data.list
						for (
							let i = 0;
							i < this.firstDepthSelectList.length;
							i++
						) {
							axios //get 2nd depth list
								.get('/api/admin/getReferenceConUnder', {
									params: {
										kategorie: this.categorySelect.value,
										upperid:
											this.firstDepthSelectList[i]
												.referenceisid,
										version: this.currentVer,
									},
								})
								.then(res1 => {
									let tempList = res1.data.list
									for (let j = 0; j < tempList.length; j++) {
										if (
											tempList[j].referenceisid ==
											this.show.parentId
										) {
											this.secondDepthSelectList =
												tempList
											this.secondDepthSelect = tempList[j]
											this.firstDepthSelect =
												this.firstDepthSelectList[i]
										}
									}
								})
						}
					})
					.catch(err => {
						console.log('err : ' + err)
					})
			}
			this.sortSelect = this.show.sort
			this.menuId = this.show.id
			this.menuName = this.show.name
			this.menuContent = this.show.content
		},
		editBtnClick() {
			this.addAndEditDisplayFlag = true
			this.addDisplayFlag = false
			//필드값 채우기
			this.setEditDepthSelect()
			this.depthSelect.value = this.show.depth
		},
		clickApplyAddBtn() {
			let tempUpperid = null
			if (this.depthSelect.value === 1) {
				tempUpperid = null
			} else if (this.depthSelect.value === 2) {
				tempUpperid = this.firstDepthSelect.referenceisid
			} else if (this.depthSelect.value === 3) {
				tempUpperid = this.secondDepthSelect.referenceisid
			}
			console.log(this.categorySelect.value)
			console.log(this.depthSelect.value)
			console.log(this.menuContent)
			console.log(this.menuId)
			console.log(this.sortSelect)
			console.log(this.menuName)
			console.log(tempUpperid)
			console.log(this.currentVer)
			axios
				.post('/api/admin/regReferenceConIns', {
					kategorie: this.categorySelect.value,
					level: this.depthSelect.value,
					maintext: this.menuContent,
					referenceisid: this.menuId,
					sort: this.sortSelect,
					title: this.menuName,
					upperid: tempUpperid,
					version: this.currentVer,
				})
				.then(res => {
					alert('추가되었습니다..')
					console.log(res)
					this.getTreeList()
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
		clickApplyEditBtn() {
			let tempUpperid = null
			if (this.depthSelect.value === 1) {
				tempUpperid = null
			} else if (this.depthSelect.value === 2) {
				tempUpperid = this.firstDepthSelect.referenceisid
			} else if (this.depthSelect.value === 3) {
				tempUpperid = this.secondDepthSelect.referenceisid
			}
			axios
				.post('/api/admin/regReferenceConUpd', {
					level: this.depthSelect.value,
					maintext: this.menuContent,
					referenceisid: this.menuId,
					seq: this.treeActive[0],
					sort: this.sortSelect,
					title: this.menuName,
					upperid: tempUpperid,
				})
				.then(res => {
					alert('수정되었습니다..')
					console.log(res)
					this.getTreeList()
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
		clickApplyDeleteBtn() {
			axios
				.post('/api/admin/regReferenceConDel', {
					seq: this.treeActive[0],
				})
				.then(res => {
					alert('삭제되었습니다..')
					console.log(res)
					this.getTreeList()
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
		clickVerUpdateBtn() {
			this.dialog = false
			axios
				.get('/api/admin/regReferenceConInsCopy', {
					params: {
						kategorie: this.categorySelect.value,
						oldversion: this.currentVer,
						version: this.newVer,
					},
				})
				.then(res => {
					console.log(res.data)
					this.currentVer = this.newVer
					this.newVer = ''
					this.verCheckFlag = true
					this.getTreeList()
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
	},
}
</script>

<style>
.v-treeview-node__content {
	min-height: 36px;
	border: 1px solid #555555;
	padding-left: 15px;
}
</style>
