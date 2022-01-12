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
									></v-text-field>
									<div class="ver_txt">
										<i
											class="fas fa-exclamation-circle"
										></i>
										현재 등록된 버전이 없습니다.
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
						>
							추가하기
						</v-btn>
					</v-row>
					<v-treeview
						ref="treeview"
						:active.sync="treeActive"
						item-key="id"
						item-text="name"
						hoverable
						activatable
						:items="treeListItems"
						open-all
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
												></v-select>
												<v-select
													placeholder="2 Depth 메뉴"
													single-line
													outlined
													hide-details="auto"
													style="width: 120px"
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
											></v-text-field>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											<vue-editor></vue-editor>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="btn_area center pt-8">
							<v-btn color="primary" dark> 목록으로 </v-btn>
							<v-btn color="primary" v-if="!addDisplayFlag">
								수정하기
							</v-btn>
							<v-btn color="primary" v-if="addDisplayFlag">
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
										<vue-editor disabled></vue-editor>
									</td>
								</tbody>
							</table>
						</div>
						<div v-else>체크된거없을때</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
	components: {
		VueEditor,
	},
	data() {
		return {
			// menu1Rules: [v => !!v || '카테고리를 선택해 주세요.'],
			addAndEditDisplayFlag: false,
			addDisplayFlag: false,
			menuId: '',
			treeActive: [],
			treeListItems: [],
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
		this.init()
	},
	methods: {
		init() {
			this.treeListItems = [
				{
					id: '1',
					name: '1. Documents',
					children: [
						{
							id: '1.1',
							name: '1.1 vuetify :',
							children: [
								{
									id: '1.1.1',
									name: '1.1.1 src :',
								},
								{ id: '1.1.2', name: '1.1.2 index : ts' },
								{ id: '1.1.3', name: '1.1.3 bootstrap : ts' },
							],
						},
						{
							id: '1.2',
							name: '1.2 material2 :',
							children: [
								{
									id: '1.2.1',
									name: '1.2.1 src :',
								},
							],
						},
					],
				},
			]
		},
		closeAllTreeview() {
			this.$refs.treeview.updateAll(false)
		},
		openAllTreeview() {
			this.$refs.treeview.updateAll(true)
		},
		treeClick() {
			this.addAndEditDisplayFlag = false
			this.show.id = this.treeActive[0]
			console.log(this.show.id === 1)
			//서버에서 받아올꺼임
			// if (this.show.id === 1) {
			// 	this.show.depth = '1'
			// 	this.show.parentId = 'None'
			// 	this.show.sort = '1'
			// 	this.show.name = 'Documents'
			// }
		},
		addBtnClick() {
			this.addAndEditDisplayFlag = true
			this.addDisplayFlag = true
		},
		editBtnClick() {
			this.addAndEditDisplayFlag = true
			this.addDisplayFlag = false
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
