<template>
	<div class="menu_view">
		<div class="table_box" v-if="!updateMode">
			<loading-lottie v-if="detailLoading" />
			<div v-if="!detailLoading && activeNode">
				<p class="pt-2 pb-4 font-weight-bold">
					기본 정보
					<v-btn
						color="primary"
						dark
						small
						outlined
						@click="setUpdateMode(true)"
						style="float: right"
						>수정하기</v-btn
					>
				</p>
				<table class="tb_write">
					<caption>
						table caption
					</caption>
					<colgroup>
						<col width="160" />
						<col width="180" />
						<col width="160" />
						<col width="" />
					</colgroup>
					<tbody>
						<tr>
							<th>메뉴 구분</th>
							<td colspan="3">
								{{
									$getCmCodeNm(
										'TAH000083',
										activeNode.menuGubunCode,
									)
								}}
							</td>
						</tr>
						<tr>
							<th>메뉴 Depth</th>
							<td>{{ activeNode.menuLevel }}</td>
							<th>상위 메뉴 ID</th>
							<td>
								{{
									activeNode.menuUpperId
										? activeNode.menuUpperId
										: 'N/A'
								}}
							</td>
						</tr>
						<tr>
							<th>메뉴 순서</th>
							<td>{{ activeNode.menuSort }}</td>
							<th>메뉴 ID</th>
							<td>{{ activeNode.menuId }}</td>
						</tr>
						<tr>
							<th>메뉴명</th>
							<td colspan="3">{{ activeNode.menuNm }}</td>
						</tr>
						<tr>
							<th>설명</th>
							<td colspan="3">{{ activeNode.menuDesc }}</td>
						</tr>
						<tr>
							<th>URL 주소</th>
							<td colspan="3">
								{{ getParentUrl }}{{ activeNode.menuUrl }}
							</td>
						</tr>
						<tr>
							<th>사용 여부</th>
							<td>{{ activeNode.menuUseYn }}</td>
							<th>노출 여부</th>
							<td>{{ activeNode.menuViewYn }}</td>
						</tr>
					</tbody>
				</table>
				<p class="pt-8 pb-4 font-weight-bold">권한 설정</p>
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
							<th>접근 가능 그룹</th>
							<td>일반 사용자, 일반 관리자, 통합 관리자</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="table_box" v-if="updateMode">
			<p class="pt-2 pb-4 font-weight-bold">기본 정보</p>
			<table class="tb_write">
				<caption>
					table caption
				</caption>
				<colgroup>
					<col width="160" />
					<col width="180" />
					<col width="160" />
					<col width="" />
				</colgroup>
				<tbody>
					<tr>
						<th>
							메뉴 구분
							<span class="asterisk">필수</span>
						</th>
						<td colspan="3">
							<v-select
								label="일반"
								placeholder="메뉴 구분을 선택하세요"
								single-line
								outlined
								hide-details="auto"
								item-text="cmnCdNm"
								item-value="cmnCd"
								v-model="nodeParam.menuGubunCode"
								:items="$getCmCode('TAH000083')"
								:rules="menu1Rules"
							></v-select>
						</td>
					</tr>
					<tr>
						<th>
							메뉴 순서
							<span class="asterisk">필수</span>
						</th>
						<td colspan="3">
							<v-select
								label="5"
								placeholder="메뉴 순서를 선택하세요"
								single-line
								outlined
								hide-details="auto"
								:items="getMenuSortArray"
								v-model="nodeParam.menuSort"
								style="width: 159px"
							></v-select>
						</td>
					</tr>
					<tr>
						<th>메뉴 ID</th>
						<td colspan="3">TAH-EXP001</td>
					</tr>
					<tr>
						<th>
							메뉴명
							<span class="asterisk">필수</span>
						</th>
						<td colspan="3">
							<v-text-field
								label="My Data 리스트"
								placeholder="메뉴명을 입력하세요"
								single-line
								outlined
								hide-details="auto"
								v-model="nodeParam.menuNm"
							></v-text-field>
						</td>
					</tr>
					<tr>
						<th>
							설명
							<span class="asterisk">필수</span>
						</th>
						<td colspan="3">
							<v-text-field
								placeholder="설명을 입력하세요"
								single-line
								outlined
								hide-details="auto"
								v-model="nodeParam.menuDesc"
								:rules="menu6Rules"
							></v-text-field>
						</td>
					</tr>
					<tr>
						<th>
							URL 주소
							<span class="asterisk">필수</span>
						</th>
						<td colspan="3">
							<v-text-field
								:prefix="getParentUrl"
								placeholder="URL 주소를 입력하세요"
								single-line
								outlined
								hide-details="auto"
								v-model="nodeParam.menuUrl"
								:rules="menu7Rules"
							></v-text-field>
						</td>
					</tr>
					<tr>
						<th>
							사용여부
							<span class="asterisk">필수</span>
						</th>
						<td>
							<v-switch
								v-model="useYN"
								color="orange"
								hide-details
							></v-switch>
						</td>
						<th>
							노출여부
							<span class="asterisk">필수</span>
						</th>
						<td>
							<v-switch
								v-model="exposeYN"
								color="orange"
								hide-details
							></v-switch>
						</td>
					</tr>
				</tbody>
			</table>
			<p class="pt-8 pb-4 font-weight-bold">권한 설정</p>
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
							접근 가능 그룹
							<span class="asterisk">필수</span>
						</th>
						<td>
							<v-row>
								<v-checkbox
									label="일반 사용자"
									hide-details
									v-model="menuAllYn"
								></v-checkbox>
								<v-checkbox
									label="일반 관리자"
									hide-details
									v-model="menuManagerYn"
								></v-checkbox>
								<v-checkbox
									label="통합 관리자"
									hide-details
									v-model="menuSystemYn"
								></v-checkbox>
							</v-row>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--하단버튼 영역은 ppt기준 6, 7p에서만 나와요-->
		<div class="btn_area center pt-8" v-if="updateMode">
			<v-btn color="primary" dark outlined @click="setUpdateMode(false)">
				취소
			</v-btn>
			<v-btn color="primary" dark> 수정하기 </v-btn>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
	props: {
		menuId: {
			type: String,
			require: true,
		},
	},
	// method로 action빼서 watch에서도 그거 호출. 수정하기 누르면 새로 패치받아와야하므로.
	methods: {
		setUpdateMode(flag) {
			this.nodeParam = this.activeNode
			this.$store.commit(`menuStore/set_update_mode`, { flag })
		},
	},
	created() {
		this.$store.dispatch('menuStore/getMenuNode', { menuId: 'TAH-EXP000' })
	},
	watch: {
		'$store.state.menuStore.activeNodeId'(value) {
			this.$store.dispatch('menuStore/getMenuNode', { menuId: value })
		},
		'$store.state.menuStore.activeNode'(value) {
			this.nodeParam = { ...value }
		},
	},
	computed: {
		menuAllYn: {
			get() {
				return this.nodeParam.menuAllYn == 'Y'
			},
			set(value) {
				if (value) this.nodeParam.menuAllYn = 'Y'
				else this.nodeParam.menuAllYn = 'N'
			},
		},
		menuManagerYn: {
			get() {
				return this.nodeParam.menuManagerYn == 'Y'
			},
			set(value) {
				if (value) this.nodeParam.menuManagerYn = 'Y'
				else this.nodeParam.menuManagerYn = 'N'
			},
		},
		menuSystemYn: {
			get() {
				return this.nodeParam.menuSystemYn == 'Y'
			},
			set(value) {
				if (value) this.nodeParam.menuSystemYn = 'Y'
				else this.nodeParam.menuSystemYn = 'N'
			},
		},
		useYN: {
			get() {
				return this.nodeParam.menuUseYn == 'Y'
			},
			set(value) {
				if (value) {
					this.nodeParam.menuUseYn = 'Y'
				} else {
					this.nodeParam.menuUseYn = 'N'
				}
			},
		},
		exposeYN: {
			get() {
				return this.nodeParam.menuViewYn == 'Y'
			},
			set(value) {
				if (value) {
					this.nodeParam.menuViewYn = 'Y'
				} else {
					this.nodeParam.menuViewYn = 'N'
				}
			},
		},
		...mapState({
			activeNode: state => state.menuStore.activeNode,
			detailLoading: state => state.menuStore.detailLoading,
			updateMode: state => state.menuStore.updateMode,
		}),
		...mapGetters({
			getParentUrl: 'menuStore/getParentUrl',
			getMenuSortArray: 'menuStore/getMenuSortArray',
		}),
	},
	data() {
		return {
			nodeParam: null,
			menu: '',
			menu1: ['일반', 'Admin'],
			menu2: ['1 Depth', '2 Depth', '3 Depth'],
			menu4: ['1', '2', '3', '4', '5'],
			switch1: false,
			switch2: true,
			menu1Rules: [v => !!v || '메뉴 구분을 선택해 주세요.'],
			menu2Rules: [v => !!v || '메뉴 Depth를 선택해 주세요.'],
			menu3Rules: [v => !!v || '메뉴 위치를 선택해 주세요.'],
			menu4Rules: [v => !!v || '메뉴 순서를 선택해 주세요.'],
			menu5Rules: [v => !!v || '메뉴명을 입력해 주세요.'],
			menu6Rules: [v => !!v || '메뉴에 대한 설명을 입력해 주세요.'],
			menu7Rules: [v => !!v || 'URL 주소를 입력해 주세요.'],
		}
	},
}
</script>

<style></style>
