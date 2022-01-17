<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>권한 관리</h5>
			<v-form ref="form">
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
										구분
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											:items="$getCmCode('TAH000081')"
											item-text="cmnCdNm"
											item-value="cmnCd"
											placeholder="카테고리를 선택하세요"
											outlined
											hide-details="auto"
											v-model="param.athType"
											:rules="menu1Rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										계열사
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											placeholder="계열사를 선택하세요"
											outlined
											hide-details="auto"
											:items="$getCmCode('TAH000001')"
											item-text="cmnCdNm"
											item-value="cmnCd"
											v-model="param.groupCoCd"
											:rules="menu2Rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										권한코드 ID
										<span class="asterisk">필수</span>
									</th>
									<td>
										{{
											param.athId
												? param.athId
												: '계열사를 선택하세요'
										}}
									</td>
								</tr>
								<tr>
									<th>
										권한명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="권한명을 입력하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="param.athNm"
											:rules="menu3Rules"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										권한 설명
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-text-field
											placeholder="권한 설명을 입력하세요"
											single-line
											outlined
											hide-details="auto"
											v-model="param.athDesc"
											:rules="menu4Rules"
										></v-text-field>
									</td>
								</tr>
								<tr>
									<th>
										사용 여부
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-select
											placeholder="Yes"
											:items="$getCmCode('TAH000082')"
											item-text="cmnCdNm"
											item-value="cmnCd"
											single-line
											v-model="param.useYn"
											outlined
											hide-details="auto"
											style="width: 125px"
											:rules="menu6Rules"
										></v-select>
									</td>
								</tr>
								<tr>
									<th>
										권한 그룹원
										<span class="asterisk">필수</span>
									</th>
									<td>
										<v-col
											md="5"
											style="
												margin-left: 0 !important;
												margin-bottom: 8px !important;
											"
										>
											<v-text-field
												placeholder="이름을 입력하세요"
												outlined
												clearable
												v-model="searchName"
												append-outer-icon="fa fa-search"
												hide-details="auto"
											>
												<template v-slot:append-outer>
													<v-btn
														@click="popupOpen"
														color="secondary"
														dark
														style="
															margin-left: 4px !important;
															width: 40px !important;
															min-width: 40px !important;
															max-width: 40px !important;
														"
													>
														<i
															class="fa fa-search"
														></i>
													</v-btn>
												</template>
											</v-text-field>
										</v-col>
										<v-data-table
											:headers="headers"
											:items="selectedMemebers"
											:height="180"
											fixed-header
											disable-pagination
											disable-sort
											hide-default-footer
										>
											<template v-slot:no-data>
												<no-data />
											</template>
											<template v-slot:item="row">
												<tr>
													<td>
														{{ row.item.groupCoNm }}
													</td>
													<td>
														{{
															row.item.groupDvsnNm
														}}
													</td>
													<td>
														{{ row.item.userNm }}
													</td>
													<td>
														{{ row.item.userId }}
													</td>
													<td>
														<v-btn
															color="primary"
															dark
															x-small
															text
															@click="
																deleteMember(
																	row.item,
																)
															"
														>
															<i
																class="
																	fa fa-times
																"
															></i>
														</v-btn>
													</td>
												</tr>
											</template>
										</v-data-table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</v-form>
			<div class="btn_area center">
				<v-btn color="primary" dark outlined @click="$router.go(-1)">
					취소
				</v-btn>
				<v-btn color="primary" dark @click="doUpdate"> 수정하기 </v-btn>
			</div>
			<div v-if="popupVal">
				<ANA005
					:selectedMemebers="selectedMemebers"
					:searchName="searchName"
					:proposer="null"
					@close:popup="popupClose"
					@selectMember="selectMember"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import {
	updateAuthApi,
	getAuthIdApi,
	getAuthDetailApi,
} from '@/api/modules/authAPI'
import ANA005 from '@/views/analyze/ANA005.vue'
export default {
	components: {
		ANA005,
	},
	data() {
		return {
			headers: [
				{
					text: '회사명',
					sortable: true,
					value: 'groupCoNm',
				},
				{
					text: '부서',
					sortable: true,
					value: 'groupDvsnNm',
				},
				{
					text: '이름',
					sortable: true,
					value: 'userNm',
				},
				{
					text: '사번',
					sortable: true,
					value: 'userNo',
				},
				{
					text: '삭제',
					sortable: true,
					width: 150,
				},
			],
			popupVal: false,
			selectedMemebers: [],
			selectMemberValid: false,
			searchName: null,
			menu1Rules: [v => !!v || '카테고리를 선택해 주세요.'],
			menu2Rules: [v => !!v || '계열사를 선택해 주세요.'],
			menu3Rules: [v => !!v || '권한명을 입력해 주세요.'],
			menu4Rules: [v => !!v || '권한 설명을 선택해 주세요.'],
			menu5Rules: [v => !!v || '권한 그룹원을 입력해 주세요.'],
			menu6Rules: [v => !!v || '사용여부를 선택해 주세요.'],

			param: {
				athDesc: null,
				athId: null,
				athNm: null,
				athType: null,
				groupCoCd: null,
				useYn: null,
				userList: [],
			},
		}
	},
	async created() {
		const { athId } = this.$route.params
		try {
			const { data } = await getAuthDetailApi(athId)
			this.param = {
				athId: athId,
				athDesc: data.detail[0].athDesc,
				athNm: data.detail[0].athNm,
				athType: data.detail[0].athType,
				groupCoCd: data.detail[0].groupCoCd,
				useYn: data.detail[0].useYn,
			}
			this.selectedMemebers = data.userList
		} catch (err) {
			this.$showError('존재하지 않는 게시물입니다.')
			this.$router.push({ name: 'adm017' })
			console.log(err)
		}
	},
	methods: {
		async doUpdate() {
			if (this.selectedMemebers.length == 0) return
			if (
				!(await this.$confirm(
					'권한정보를 수정하시겠습니까?',
					'수정하기',
				))
			)
				return

			try {
				await updateAuthApi({
					...this.param,
					userList: this.selectedMemebers.map(item => {
						return { userId: item.userId }
					}),
				})
				this.$showInfo('수정되었습니다.')
				this.$router.push({ name: 'adm017' })
			} catch (error) {
				this.$showInfo('수정실패. ')
				console.log(error)
			}
		},
		deleteMember(member) {
			this.selectedMemebers = this.selectedMemebers.filter(
				item => item.userId != member.userId,
			)
		},
		selectMember(members) {
			this.popupVal = false
			this.selectedMemebers = members.map(item => {
				return { ...item, userId: item.userNo }
			})
			this.selectMemberValid = this.selectedMemebers.length == 0
		},
		popupOpen() {
			this.popupVal = true
		},

		popupClose() {
			this.popupVal = false
		},
		async getId(groupCoCd) {
			const { data } = await getAuthIdApi(groupCoCd)
			this.param.athId = data.athId
		},
	},
	watch: {
		'param.groupCoCd'(value) {
			if (value) this.getId(value)
		},
	},
}
</script>
