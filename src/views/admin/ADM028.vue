<template>
	<!-- <div class="adm_wrap"> -->
	<!-- <div id="lnb"></div> -->
	<div class="adm_contents">
		<div class="inner">
			<h5>인사이트 리포트 등록 및 수정</h5>
			<div class="item_box">
				<table class="tb_write">
					<caption>
						table caption
					</caption>
					<colgroup>
						<col width="22%" />
						<col width="" />
					</colgroup>
					<tbody>
						<tr>
							<th>카테고리</th>
							<td>
								<v-radio-group row>
									<v-radio label="트렌드 리포트"
										>트렌드 리포트</v-radio
									>
									<v-radio label="전문가 리포트"
										>전문가 리포트</v-radio
									>
									<v-radio label="뉴스레터">뉴스레터</v-radio>
								</v-radio-group>
							</td>
						</tr>
						<tr>
							<th>
								구분
								<v-tooltip
									right
									content-class="secondary tooltip-right"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											v-bind="attrs"
											v-on="on"
											icon
											color="secondary"
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
											하이라이트 리포트를 설정할 수
											있습니다.
										</p>
										<span>
											[일반] Share > 인사이트 리포트
											목록으로 디스플레이<br />
											[메인] Share sub main과 인사이트
											리포트 리스트 페이지 <br />
											상단 하이라이트 리포트 영역에
											디스플레이
										</span>
									</div>
								</v-tooltip>
							</th>
							<td>
								<v-radio-group row>
									<v-radio label="일반">일반</v-radio>
									<v-radio label="메인">메인</v-radio>
								</v-radio-group>
							</td>
						</tr>
						<tr>
							<th>Topic <span class="asterisk">필수</span></th>
							<td>
								<v-select
									:items="items1"
									:rules="[
										() => !!meg || 'Topic을 선택해 주세요',
									]"
									:error-messages="errorMessages"
									label="Topic을 선택하세요"
									single-line
									outlined
								></v-select>
							</td>
						</tr>
						<tr>
							<th>
								기획연재 여부
								<span class="asterisk">필수</span>
							</th>
							<td>
								<v-radio-group row>
									<v-radio label="단편 리포트"
										>단편 리포트</v-radio
									>
									<v-radio label="기획연재">기획연재</v-radio>
								</v-radio-group>
							</td>
						</tr>
						<tr>
							<th>
								기획연재 주제
								<span class="asterisk">필수</span>
							</th>
							<td>
								<v-select
									:items="items2"
									:rules="[
										() =>
											!!meg ||
											'기획연재 주제를 선택해 주세요',
									]"
									:error-messages="errorMessages"
									label="기획연재 주제를 선택하세요"
									single-line
									outlined
								></v-select>
							</td>
						</tr>
						<tr>
							<th>제목 <span class="asterisk">필수</span></th>
							<td>
								<v-text-field
									:rules="[
										() =>
											!!meg ||
											'리포트 제목을 입력해 주세요',
									]"
									:error-messages="errorMessages"
									placeholder="제목을 입력하세요"
									clearable
									outlined
								></v-text-field>
							</td>
						</tr>
						<tr>
							<th>
								뉴스레터 회차
								<span class="asterisk">필수</span>
							</th>
							<td>
								<v-select
									:items="items3"
									:rules="[
										() =>
											!!meg || '뉴스레터를 선택해 주세요',
									]"
									:error-messages="errorMessages"
									label="뉴스레터를 선택하세요"
									single-line
									outlined
									style="
										float: left;
										margin-right: 4px;
										width: 40% !important;
									"
								></v-select>
								<v-select
									:items="items4"
									:rules="[
										() =>
											!!meg ||
											'뉴스레터를 회차를 선택해 주세요',
									]"
									:error-messages="errorMessages"
									label="회차를 선택하세요"
									single-line
									outlined
									style="width: 20% !important"
								></v-select>
							</td>
						</tr>
						<tr>
							<th>요약문장 <span class="asterisk">필수</span></th>
							<td>
								<v-text-field
									:rules="[
										() =>
											!!meg || '요약문장을 입력해 주세요',
									]"
									:error-messages="errorMessages"
									placeholder="요약문장을 입력하세요"
									clearable
									outlined
								></v-text-field>
							</td>
						</tr>
						<tr>
							<th>본문 <span class="asterisk">필수</span></th>
							<td>
								<vue-editor v-model="content"></vue-editor>
								<!-- <v-textarea
									:rules="[
										() => !!meg || '본문을 입력해 주세요',
									]"
									:error-messages="errorMessages"
									placeholder="본문을 입력하세요/Editor"
									clearable
									outlined
								></v-textarea> -->
							</td>
						</tr>
						<tr>
							<th>결론문장 <span class="asterisk">필수</span></th>
							<td>
								<v-text-field
									:rules="[
										() =>
											!!meg || '결론문장을 입력해 주세요',
									]"
									:error-messages="errorMessages"
									placeholder="결론문장을 입력하세요"
									clearable
									outlined
								></v-text-field>
							</td>
						</tr>
						<tr>
							<th>작성자 <span class="asterisk">필수</span></th>
							<td>
								<v-row>
									<v-col cols="3">
										<v-text-field
											placeholder="이름을 입력하세요"
											clearable
											outlined
											append-outer-icon="fa fa-search"
										>
											<template v-slot:append-outer>
												<button class="search-in">
													<i class="fa fa-search"></i>
												</button>
											</template>
										</v-text-field>
									</v-col>
								</v-row>
								<div class="table_box">
									<v-data-table
										:headers="headers"
										:items="items5"
										:items-per-page="itemsPerPage"
										hide-default-footer
										class="elevation-1"
									></v-data-table>
								</div>
							</td>
						</tr>
						<tr>
							<th>
								작성자 프로필 이미지
								<span class="asterisk">필수</span>
								<v-tooltip
									right
									content-class="secondary tooltip-right"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											v-bind="attrs"
											v-on="on"
											icon
											color="secondary"
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
											프로필 이미지 등록을 위한 주의사항을
											확인하세요.
										</p>
										<span>
											이미지 가이드 확인 후 작성!!
										</span>
									</div>
								</v-tooltip>
							</th>
							<td>
								<v-text-field
									placeholder="결론문장을 입력하세요"
									clearable
									outlined
								></v-text-field>
							</td>
						</tr>
						<tr>
							<th>
								작성자 소개
								<span class="asterisk">필수</span>
							</th>
							<td>
								<v-text-field
									placeholder="작성자 소개를 입력하세요"
									clearable
									outlined
								></v-text-field>
							</td>
						</tr>
						<tr>
							<th>
								썸네일 이미지
								<span class="asterisk">필수</span>
								<v-tooltip
									right
									content-class="secondary tooltip-right"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											v-bind="attrs"
											v-on="on"
											icon
											color="secondary"
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
											썸네일 이미지 등록을 위한 주의사항을
											확인하세요.
										</p>
										<span>
											이미지 가이드 확인 후 작성!!
										</span>
									</div>
								</v-tooltip>
							</th>
							<td></td>
						</tr>
						<tr>
							<th>
								배너 이미지
								<span class="asterisk">필수</span>
								<v-tooltip
									right
									content-class="secondary tooltip-right"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											v-bind="attrs"
											v-on="on"
											icon
											color="secondary"
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
											배너 이미지 등록을 위한 주의사항을
											확인하세요.
										</p>
										<span>
											이미지 가이드 확인 후 작성!!
										</span>
									</div>
								</v-tooltip>
							</th>
							<td></td>
						</tr>
					</tbody>
				</table>
				<vue-editor v-model="contentTest"></vue-editor>
			</div>
			<div class="btn_area">
				<button class="cancel large">취소</button>
				<button class="regit large" v-on:click="onclickBtn()">
					등록하기
				</button>
			</div>
		</div>
	</div>
	<!-- </div> -->
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
	components: {
		VueEditor,
	},
	data() {
		return {
			meg: '',
			errorMessages: '',
			content:
				'<p>asdasd</p><p><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QCyRXhpZgAATU0AKgAAAAgABwE+AAUAAAACAAAAYgE/AAUAAAAGAAAAcgMBAAUAAAABAAAAogMDAAEAAAABAAAAAFEQAAEAAAABAQAAAFERAAQAAAABAAAOxFESAAQAAAABAAAOxAAAAAAAAHomAAGGoAAAgIQAAYagAAD6AAABhqAAAIDoAAGGoAAAdTAAAYagAADqYAABhqAAADqYAAGGoAAAF3AAAYagAAGGoAAAsY//2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAtAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8MfDWjPNaxIrSMrgOIgC/bk4AJHpnp0/D66/4J0eFvh/451e90Dxh4b0S6mlm8u3k1CxE32/cu5hFc7sxuEDERoqsAhYO53gfMPg+yme2t12us11AghVkOxwoBzkDH8XXOAckkV7b4U+D0k/g8eM9NvHvJPB8sE2umONftmhTvGlxFLHkZ8raVTzedskTlgEIxjnGXzxmF+q4es6VR6xkr7rXW3Tv/mLDYn2NR1q1PmgtHst+11/XoeeeOvhg3g7xnq2ksZD/AGTfT2QaaMxu4jkZAzKwBBIAOCB1rGOixiFWjkik3rvQLIu515GVGcsMg8jPQ+lfS+s/DTxha/D3RfiJeR2c3/Caa7DYyXFrZOIhfy3Xlm3nMqh4myTIfKRoiQu2Zsqten/ti/s+wfF74p6x4w0OPT9HN3/aF1q0d2PsMMssE7hLhX2+TH9rjMbIXaNJpT8jNJKErq/tnD0JUaOMajKaV3fRStqr6bu9ntp5kRy/FVKVbEUFeFOVrPRtd0uvS/a/kfEFp4Tmu/uqfyqSXwPcJ/A35V9vfsmfsc+Hb/8AZe+JPxq+Iljq1z4Y8H6vF4W0DRbc30MWoakZIo7m81R7KF72HTrYzxswtdszpHNtO4xpJ6j8fv8AglrqFx8Q7e98D6b4Y8KaDN4a0bVtf0nUda1W5HhieeC+lurgC5tWuoLYJZMzR30ybJXSFJXklWCL5/EeJXDuHzKpl2JqSj7NyjKpZez54qLlBNPmbXPFO0Wk9L3Kp5XmNSgq9OF+ZJpdbO6T7dH1PzUs/h1cXbfcb8q7TSf2a9UiXQ5r6GDTbXxBIEtLm8mWOFV3qplk5LRxjerbmUZX5l3Cv0H/AGZf2BvA9lPqmo3Hjax+LWrXV5a+F7Kx8G+FX8Q2fhm7fV5La71KSGC7c3kUNrZzSkzIqRxXdtL5LtIiHyn45yXus/Fzwb+z74N0G4tdKWxt/E8El9FY6beeILOayXUL3VY9TlthF9nt7YXcUc7Owf7ArkS7/JXzp+J2W18Y8Ll0XONO7qTknBKCi25R57fDJxXvKzXM3ypKT9TLeHK+IUniakafuuSvJJNq3u6XbcldJR969t9Sp4d/4J9fCLUPgq2q2XxFm1vxV5s1jBHa3K2Vrc3ioG8mITQqxGySMsSWUb8BiCCfkP8Aac+G2i/DXRYbGDWLXWvEkiNNqr2wRoNOAUgQGRHdZZCxySpAXaARknH1l8UvHfhv4tfBHw3p/guTUtd03TjPc2Gi2HhlLGbQLKWRVSNpY2mnnkkclnZnYb2zIzyZ2fG/xo8L3fgvxBq2i6lp1/p+oaS17YX9jJCVuNPniMkTxSKRlWSQbWyOxx61vwvgcw5Z4jH46c+aU5KlNKM4xUnGN7wpyUbNNpU4rms4znBpy9LPeIMr5VgsFgKcZqMY+2i24ttRcrRUppyumlOU5SUW04xnquN8G6TaSra3Ecl0SIUEojXgNgZU7QWPOOR2POMHHoWm/FfxBaaZrVtpvg/UptR8RW0Wm3N/LBIsJhjtzApKYEbsFOdzDO4v87JII18w8OaPDLa2+5WZnjBG2RoyOAecEZ69T+Fdf8K7+18G/FPStY1bQ7fxZ4ftpCtxpFxfNaJKQpOPNZtm7gn5s/KGwuQCPqsZh1OlzTipW+/p6dUvuPm8LivY1NJON930Xn9zfyufXXwM+Lng23+D0fgjWrfWrzVpJ4rfRYZtXjvYLUb2UmOzEb3JmIbCqjomWUjc25Wxz8Qrr4L/ABW059a+GX/CT+Uog0u+8SaXPZxxTeWzBBb3BkaNFjEh2iRsggjGwqfRfDn7e958GLC+k8MzWljps3nx20GpQ3LwupBWOzkj854ZWMTuCSMSREvnhzF7b468AX3/AAUW1/RfiR4o8a+AbG3XRZ7LQbAarb2Mnlxl2G1AskjyuY/KRWO05yEBd2Pg4HGqjX9rCL5ZScpO8pNaJaJ6RXlolq+utZliqGDw83mMnRtZR57KMr6pq13JWT1S3Vt07fLEfxO8fQeNtW8aeCNQ174cag1uial/wr65udNtzDHu8v7WFLJMEBbDzqWAwNxCqBwV78NP+F5+KbfVPF0nijxtqUFulkuoa7rF1qN1FAgISMNJJjYmeE4A5A25yPSD8c/DIt9A8M2NjfTaLJezx6k4sbu5uYUjQywJA4EojzIuSNoJW2I2hSxr9b/+CbfwQ/Zr1P4HR6xNDZap4guIY5pm1R1+0wAxhj+6dYwpBLAjZn5Ru5xjDiPifB5TSlmawN6stOZQTk0v5pWv6LXp0d18nmGMxdCusDOrvqmpNU0u3M0lfTZf8F/k/wDs6Pf/ALH3jzxB4g8J/DTQrrV5/Cl7ouj6hqYiXT7S5vGjWaW4hxJLMq2qSxCPaVf7U4JAXdXq3gP9qz4keNb/AP4RfQl+HfgmG80/+xNFs8avqdxYLLb3cc0dtey30bpJ5dxMkLOhaGCGKJHVYF3/AFz+3z4o+DVi7Wfh7TftlwwJdrF0jVAoychQy9P936jt+bvw8+MUnizTf+FjeF/BvheO00O+aSxuNS1CSWaOJCY554oWdWdtsi7gFKhCNpEgZD8bltbAcSTnmeOwL55cq95yS0VopRulbfp1l/M71luf5k6PsqL5Yxdrqzu31u7t379l5I3f2xfj38TtFv7rR/iN8TvGWsXGmaxJrs62IsdHWa8ntNjSiWytlkndo3eFkL7QqKpIATHxV8RPj5qXiq58RXF1cXkt94kuLi+1O9uXeS61CW4MkrySOxYsXkdmJJGS5OCDgb/7Qnj3S/2l/ij4o8Uz65NY6lJd3M0dgQXRt00sgSFsnAHAGevy9O3lXjvXrfWpN0di2ntgl187zDI3Tc2QOTj9e1foeX4HBYSKpYPDxppKz5YKK6Polu9dNL/I92nKtUS+sTc35vr/AF2LXg3Uo4LFpPtTSJaqsklur/NjGCwU4U4yehz1OOtd7D4xkv8AwXo9jBNpt59jvzcRb7YTwqG6khxgMGDEZAJEmG2qEz43otx9hn+0bRJ5f8B+6319q6nwLr9zZ2LKsnHmM4AULgnAJ4HXjr9PSvajy1FHm3Wq/L9WaSUk3ynsXiPxXpfjfxhZ6f4d0zUPD81hp4sby6F6IW1YK3mB5EUttcZXJAZcxBgA3zD1zQP2gm+DHwP1S1m8O2lrqVw91DeXIEflILou0EWlplVguRlXE7RvsXduDBlQ/Nui+I5dMZbxYYGWGVF8vaV3BmCEEgg8gkcY4Par3w1uNS+LGuWeqajdWssegqsNtbS2ayRkAYBfBUPlsuwYEOWfIwxB5ZZPhrKM1zNaq/6kYzG1a1/a8riu6ulfeyd7eTW13uez+CPih488V63aeJvEVtpusXWjzrdwaHqVigtoAyoF2YCTebJtT5kcPIDGreYgArp9a+It9rjww+GdcvILO+iF3ai3mQTRxMMr5kSzysmM7druW+XJIJrxX4g/Ey/0fTL+G9uL7UUhvPs9xm58szO/73zlO0lZPMO7cxfnnggEa/h7xTa+JPjNJ4ZOnL/aWrasiQ6pPIJPJEyySM0saqhmbcuM71GDjAPNe1h/q6koOKtZKStu+lu1tbdLN3WzXivLac6blCNn0tZJLzVnff1v8yGf4/az8TbuZf7YXQbe3tlvR57izEUDZ+Zn3PK648vBdnZjKAAfvFniL4ja9ovhCbz2mkOoypHb297Cq217G8akPIHG6SJRvBOcZUAAs0jVwfjTR7LwH4c0u9uIp9b0vULjz20+7uGBTOHbEqYJJzxuBUMSSpziuN8Za3beIdXMdnZHTbeFjH5X2h5wc8Zy3Occck/hk55ZYalblhFLySt69/8Ag77npUcHCno1/l+n6hrPiq41RrnSfs9vJbx3MptIrdSFg3uWKxLj7u4nAxu5xnHFZ+qaPBokTJqMyrdNEXSEZLZIOA+B8hzjgnPGCB1qqt/Jp+n4tT9nlkZt0y/6wr02A/wjrnGM7sHIAAptqcyWk0bP5iycNvAbP4kZ/WueVTSzO7ls/dP/2Q=="></p><p><br></p>',
			contentTest: '',
			items1: [
				'Tppic:전체',
				'머신러닝/딥러닝',
				'인공지능',
				'클라우드',
				'데이터',
				'디지털',
				'자동화/협업',
			],
			items2: ['기획연재 주제'],
			items3: ['뉴스레터 카테고리'],
			items4: ['뉴스레터 회차'],
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			headers: [
				{
					text: '회사명',
					align: 'center',
					sortable: false,
					value: 'company',
				},
				{
					text: '부서',
					align: 'center',
					sortable: false,
					value: 'team',
				},
				{
					text: '이름',
					align: 'center',
					sortable: false,
					value: 'name',
				},
				{
					text: '사번',
					align: 'center',
					sortable: false,
					value: 'companyid',
				},
				{
					text: '삭제',
					align: 'center',
					sortable: false,
					value: 'delete',
				},
			],
			items5: [
				{
					company: 'KB국민은행',
					team: '경영연구소1',
					name: '김국민',
					companyid: 'H00001',
					delete: '',
				},
				{
					company: 'KB국민은행',
					team: '경영연구소2',
					name: '김스타',
					companyid: 'H00007',
					delete: '',
				},
			],
		}
	},
	methods: {
		onclickBtn() {
			this.contentTest = this.content
			console.log(this.content)
		},
	},
}
</script>
