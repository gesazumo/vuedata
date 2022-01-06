<template>
	<v-app>
		<div id="sub_wrap">
			<div class="title">
				<h3>오픈소스 라이브러리</h3>
			</div>
			<div class="title_txt">
				<div class="txt">
					현재 클라우드 환경에 반입되어 활용할 수 있는 오픈소스 버전을
					확인하고, 추가가 필요한 Python, R, Anaconda 오픈소스 반입
					신청을 할 수 있습니다.<br />
					<v-btn
						text
						append-inner
						style="background: none !important"
					>
						<i class="fa fa-search-plus"></i> 오픈소스 반입 신청
						방법 알아보기
					</v-btn>
				</div>
				<div class="btn">
					<v-btn color="primary" dark large outlined
						>오픈소스 반입 신청하기</v-btn
					>
				</div>
			</div>
			<div class="sub_search">
				<h5>오픈소스를 검색해 보세요.</h5>
				<v-text-field
					placeholder="검색어를 입력해 주세요"
					outlined
					clearable
					hide-details="auto"
					prepend-inner-icon="fa fa-search"
					style="width: 446px"
					v-model="keyword"
				>
					<template v-slot:prepend-inner>
						<a @click="searchKeyword()">
							<i class="fa fa-search"></i>
						</a>
					</template>
				</v-text-field>
			</div>
			<div class="board_list">
				<div class="tab">
					<v-tabs fixed-tabs v-model="active_tab">
						<v-tab
							v-for="category in categoryList"
							:key="category.name"
							@click="searchCategory(category.name)"
							>{{ category.name }}
							<span>({{ category.count }})</span></v-tab
						>
					</v-tabs>
				</div>
				<div class="list">
					<div class="list_tit">
						<div class="tit">
							총 <span>{{ cardList.length }}</span
							>개의 오픈소스 라이브러리가 있습니다.
						</div>
						<div class="sort">
							<ul>
								<li>
									<a
										@click="clickLikeSort()"
										v-bind:class="{ on: likeSortFlag }"
										>인기순</a
									>
								</li>
								<li>
									<a
										@click="clickRegDateSort()"
										v-bind:class="{ on: regDateSortFlag }"
										>등록일순</a
									>
								</li>
								<li>
									<a
										@click="clickNameSort()"
										v-bind:class="{ on: nameSortFlag }"
										>제목순</a
									>
								</li>
							</ul>
						</div>
					</div>
					<div class="card_board">
						<v-row>
							<v-card v-for="card in cardList" :key="card.seq">
								<v-card-text>
									<v-chip-group
										active-class="deep-purple accent-4 white--text"
										column
									>
										<v-chip
											>{{ card.group }}
											{{ card.ver }}+</v-chip
										>
									</v-chip-group>
								</v-card-text>
								<v-card-title>
									{{ card.libName }}
								</v-card-title>
								<v-card-subtitle>
									Version : {{ card.libVer }}
								</v-card-subtitle>
								<v-card-text>
									{{ card.libDesc }}
								</v-card-text>
								<v-card-text>
									<v-row>
										<i class="far fa-eye"></i>
										<span class="subheading mr-2">{{
											card.viewCount
										}}</span>
										<i class="far fa-calendar"></i>
										<span class="subheading mr-2">{{
											card.regDate
										}}</span>
									</v-row>
								</v-card-text>
							</v-card>
						</v-row>
					</div>
				</div>
				<div class="btnArea">
					<v-btn
						color="primary"
						dark
						large
						outlined
						style="width: 446px"
					>
						<span style="color: #f26615">20</span>개의 목록 더보기
						<i class="fa fa-chevron-down"></i>
					</v-btn>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			active_tab: 0,
			keyword: '',
			categoryList: [],
			cardList: [],
			likeSortFlag: false,
			regDateSortFlag: true,
			nameSortFlag: false,
		}
	},
	created() {
		this.search('', '전체', '등록일순')
	},
	methods: {
		initCategory() {
			this.active_tab = 0
		},
		initSort() {
			this.likeSortFlag = false
			this.regDateSortFlag = true
			this.nameSortFlag = false
		},
		search(keyword, category, sort) {
			console.log('------------------SEARCH------------------')
			console.log('keyword : ' + keyword)
			console.log('category : ' + category)
			console.log('sort : ' + sort)
			this.setCategory()
			this.setCard()
		},
		searchKeyword() {
			console.log('------------------SEARCH KEYWORD------------------')
			console.log('keyword : ' + this.keyword)
			this.initCategory()
			this.initSort()
			this.search(this.keyword, '전체', '등록일순')
		},
		searchCategory(category) {
			console.log('------------------CATEGORY KEYWORD------------------')
			console.log('category : ' + category)
			this.initSort()
			this.search(this.keyword, category, '등록일순')
		},
		searchSort(sort) {
			console.log('------------------SORT KEYWORD------------------')
			console.log('sort : ' + sort)
			this.search(
				this.keyword,
				this.categoryList[this.active_tab].name,
				sort,
			)
		},
		clickLikeSort() {
			this.likeSortFlag = true
			this.regDateSortFlag = false
			this.nameSortFlag = false
			this.searchSort('인기순')
		},
		clickRegDateSort() {
			this.likeSortFlag = false
			this.regDateSortFlag = true
			this.nameSortFlag = false
			this.searchSort('등록일순')
		},
		clickNameSort() {
			this.likeSortFlag = false
			this.regDateSortFlag = false
			this.nameSortFlag = true
			this.searchSort('제목순')
		},
		setCategory() {
			this.categoryList = [
				{ name: '전체', count: 10 },
				{ name: 'PYTHON', count: 5 },
				{ name: 'R', count: 2 },
				{ name: 'ANACONDA', count: 2 },
				{ name: '기타', count: 1 },
			]
			// for (let i = 0; i < this.categoryList.length; i++) {
			// 	if (this.categoryList[i].name == category) {
			// 		this.active_tab = i
			// 	}
			// }
		},
		setCard() {
			this.cardList = [
				{
					seq: 1,
					group: 'Python',
					ver: '3.7.1',
					libName: '라이브러리제목1',
					libVer: '1.3.1',
					libDesc:
						'라이브러리설명1/라이브러리설명1/라이브러리설명1/라이브러리설명1/라이브러리설명1',
					viewCount: 256,
					regDate: '2022-01-01',
				},
				{
					seq: 2,
					group: 'Python',
					ver: '3.7.1',
					libName: '라이브러리제목2',
					libVer: '1.3.1',
					libDesc:
						'라이브러리설명2/라이브러리설명2/라이브러리설명2/라이브러리설명2',
					viewCount: 3256,
					regDate: '2022-01-05',
				},
			]
		},
	},
}
</script>
