<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<h3>공지사항</h3>
			</div>
			<div class="title_txt">
				<div class="txt">
					분석가 포털과 분석 플랫폼 관련 최신뉴스와 진행중인 이벤트를
					확인하실 수 있습니다.
				</div>
			</div>
			<div class="sub_search">
				<div class="inner">
					<h5>최신뉴스와 진행중인 이벤트를 검색하세요.</h5>
					<v-text-field
						placeholder="검색어를 입력해 주세요."
						outlined
						clearable
						hide-details="auto"
						append-inner-icon="fa fa-search"
						style="width: 446px"
					>
						<template v-slot:append>
							<i class="fa fa-search"></i>
						</template>
					</v-text-field>
				</div>
			</div>
			<div class="board_list">
				<v-card style="width: 100%">
					<v-tabs class="tab3" center-active centered v-model="tab">
						<v-tab> 전체 <span>00</span> </v-tab>
						<v-tab> 공지사항 <span>00</span> </v-tab>
						<v-tab> 이벤트 <span>00</span> </v-tab>
					</v-tabs>
				</v-card>
			</div>
			<div class="subcontents" style="padding: 0 56px 56px">
				<v-tabs-items v-model="tab">
					<v-tab-item>
						<div class="board_list">
							<div class="list">
								<div class="list_tit">
									<div class="tit">
										총 <span>00</span>개의 항목이 있습니다.
									</div>
									<div class="sort">
										<ul>
											<li>
												<a href="#" class="on"
													>인기순</a
												>
											</li>
											<li><a href="#">등록일순</a></li>
											<li>
												<a href="#"
													>진행중인 이벤트만 보기</a
												>
											</li>
										</ul>
									</div>
								</div>
								<div class="notice">
									<v-row justify="center">
										<v-expansion-panels accordion>
											<v-expansion-panel
												v-for="(item, i) in 5"
												:key="i"
											>
												<v-expansion-panel-header>
													<div class="notice_list">
														<ul>
															<li class="type">
																공지사항
															</li>
															<li>
																공지사항입니다.
																<span
																	class="file"
																>
																	<i
																		class="
																			mdi
																			mdi-paperclip
																		"
																	></i>
																</span>
															</li>
															<div
																style="
																	float: right;
																"
															>
																<li
																	class="evnt"
																>
																	<span
																		>2022-00-00까지</span
																	>
																</li>
																<li
																	class="date"
																>
																	등록일 :
																	2022-00-00
																</li>
															</div>
														</ul>
													</div>
												</v-expansion-panel-header>
												<v-expansion-panel-content>
													<div class="notice_content">
														<div
															class="attach_file"
														>
															첨부파일 :
															file_name.pdf [3]
															<v-btn
																text
																style="
																	min-width: 24px !important;
																	max-height: 24px !important;
																	padding: 0 !important;
																"
																@click="
																	toggleShow
																"
															>
																<i
																	class="
																		fa
																		fa-chevron-down
																	"
																></i>
															</v-btn>
															<div
																v-if="show"
																class="
																	file_list
																"
															>
																<v-btn
																	class="
																		close_btn
																	"
																	@click="
																		toggleShow
																	"
																>
																	<i
																		class="
																			fa
																			fa-times
																		"
																	></i>
																</v-btn>
																<v-list-item-group
																	v-model="
																		settings
																	"
																	multiple
																	active-class=""
																>
																	<v-list-item>
																		<template
																			v-slot:default="{
																				active,
																			}"
																		>
																			<v-list-item-action>
																				<v-checkbox
																					:input-value="
																						active
																					"
																					hide-details="auto"
																				></v-checkbox>
																			</v-list-item-action>

																			<v-list-item-content>
																				<v-list-item-title
																					>file_name_01.gif</v-list-item-title
																				>
																			</v-list-item-content>
																		</template>
																	</v-list-item>

																	<v-list-item>
																		<template
																			v-slot:default="{
																				active,
																			}"
																		>
																			<v-list-item-action>
																				<v-checkbox
																					:input-value="
																						active
																					"
																					hide-details="auto"
																				></v-checkbox>
																			</v-list-item-action>

																			<v-list-item-content>
																				<v-list-item-title
																					>file_name_02.pdf</v-list-item-title
																				>
																			</v-list-item-content>
																		</template>
																	</v-list-item>

																	<v-list-item>
																		<template
																			v-slot:default="{
																				active,
																			}"
																		>
																			<v-list-item-action>
																				<v-checkbox
																					:input-value="
																						active
																					"
																					hide-details="auto"
																				></v-checkbox>
																			</v-list-item-action>

																			<v-list-item-content>
																				<v-list-item-title
																					>file_name_03.png</v-list-item-title
																				>
																			</v-list-item-content>
																		</template>
																	</v-list-item>
																</v-list-item-group>
																<v-row
																	align="center"
																	style="
																		margin-bottom: 0 !important;
																	"
																>
																	<v-btn
																		color="primary"
																		small
																		outlined
																	>
																		전체
																		다운로드
																	</v-btn>
																	<v-btn
																		color="primary"
																		small
																	>
																		다운로드
																	</v-btn>
																</v-row>
															</div>
														</div>
														공지사항 내용입니다.
														<br />
														공지사항 내용입니다.
														<br />
														공지사항 내용입니다.
														<br />
														공지사항 내용입니다.
														<br /><br />
														<img
															src="@/images/main_illust_01.png"
														/>
													</div>
												</v-expansion-panel-content>
											</v-expansion-panel>
										</v-expansion-panels>
									</v-row>
								</div>
							</div>
							<div class="btnArea">
								<v-btn
									color="primary"
									large
									outlined
									style="width: 446px"
								>
									<span style="color: #f26615">20</span>개의
									목록 더보기
									<i class="fa fa-chevron-down"></i>
								</v-btn>
							</div>
						</div>
					</v-tab-item>
				</v-tabs-items>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			tab: null,
		}
	},
	methods: {
		toggleShow() {
			this.show = !this.show
		},
	},
}
</script>
