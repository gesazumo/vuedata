/**
 * 프로젝트 공통 유틸리티 함수
 */
import moment from 'moment'
import cloneDeep from 'lodash/cloneDeep.js'
import uniq from 'lodash/uniq.js'
import uniqBy from 'lodash/uniqBy.js'
import { selectAna00601 } from '@/api/modules/anaAPI'

const util = {
	capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1)
	},

	setComponent(level, dir, name) {
		if (level == 1) {
			console.log(`@/views/${dir}/${this.capitalize(dir)}Index.vue`)
			return () =>
				import(`@/views/${dir}/${this.capitalize(dir)}Index.vue`)
		} else {
			console.log(`@/views/${dir}/${name}.vue`)
			return () => import(`@/views/${dir}/${name}.vue`)
		}
	},

	formatMenu(menuList) {
		const menu = menuList
			// todo 로그인한 사용자 권한에 따라 filter
			.filter(menu => {
				return menu.menuUseYn == 'Y'
			})
			.map(menu => {
				const menuObject = {
					path:
						menu.menuLevel == 1
							? menu.menuUrl
							: menu.menuUrl.replace('/', ''),
					name: menu.name.toLowerCase(),
					meta: {
						isPublic: false,
						screenId: menu.menuId,
					},
					component: this.setComponent(
						menu.menuLevel,
						menu.dir,
						menu.name,
					),
				}
				if (menu.children) {
					return {
						...menuObject,
						children: this.formatMenu(menu.children),
					}
				}
				return menuObject
			})
		return menu
	},

	requiredValid(msg) {
		return value => !!value || msg
	},

	convertUrl(param) {
		if (!param) return ''
		const queryString = Object.entries(param)
			.filter(e => {
				return e[1]
			})
			.map(e => e.join('='))
			.join('&')

		return `?${queryString}`
	},

	/**
	 * 오늘 날짜를 년월일(yyyymmdd)로 반환한다.
	 */
	today() {
		return moment().format('yyyyMMDD')
	},
	/**
	 * 오늘 날짜를 기준으로 days 일 만큼 더한(뺀) 날짜를 년월일(yyyymmdd)로 반환한다.
	 */
	addDay(days) {
		return moment().add(days, 'days').format('yyyyMMDD')
	},
	/**
	 * 오늘 날짜를 기준으로 months 월 만큼 더한(뺀) 날짜를 년월일(yyyymmdd)로 반환한다.
	 */
	addMonth(months) {
		return moment().add(months, 'months').format('yyyyMMDD')
	},
	/**
	 * 숫자 3자리마다 , 표시한다.
	 */
	formatNumber(num) {
		if (!num) return '0'
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	},
	/**
	 * 날짜 포매팅: 예) formatDate("20200101") => 2020.01.01
	 */
	formatDate(yyyymmdd, delim = '.') {
		if (!yyyymmdd) return ''
		if (/^(\d{4})(\d{2})(\d{2})$/g.test(yyyymmdd))
			return yyyymmdd.replace(
				/(\d{4})(\d{2})(\d{2})/g,
				`$1${delim}$2${delim}$3`,
			)
		return moment(yyyymmdd).format(`yyyy${delim}MM${delim}DD`)
	},
	/**
	 * 날짜 시분초 포매팅
	 */
	formatDateTime(rawDateTime) {
		if (!rawDateTime) return ''
		return moment(rawDateTime).format('yyyy.MM.DD HH:mm:ss')
	},
	/**
	 * 객체를 깊은 복사한 사본을 반환한다.
	 */
	deepCopy(obj) {
		return cloneDeep(obj)
	},
	/**
	 * 배열 요소값을 모두 더해서 반환한다.
	 * 예1) arrSum([1,2,3]) => 6
	 * 예2) arrSum([{a:1},{a:2},{a:3}], 'a') => 6
	 */
	arrSum(list, key = undefined) {
		return list.reduce((a, b) => (key ? a + b[key] : a + b), 0)
	},
	/**
	 * 배열의 앞쪽 몇개만 가져온다.
	 * 예) arrTake([1,2,3,4,5], 3) => [1,2,3]
	 */
	arrTake(list, count) {
		return list.filter((v, i) => i < count)
	},
	/**
	 * 배열에서 앞쪽 몇개를 제외하고 가져온다.
	 * 예) arrDrop([1,2,3,4,5], 3) => [4,5]
	 */
	arrDrop(list, count) {
		return list.filter((v, i) => i >= count)
	},
	/**
	 * count 크기만큼 배열을 만들어 value 값으로 채운다.
	 */
	arrRepeat(value, count) {
		return Array(count).fill(value)
	},
	/**
	 * 배열에서 중복을 제거한다.
	 * 예) arrUnique([1,2,3,2,1]) => [1,2,3]
	 * 예) arrUnique([{a:1},{a:2},{a:3},{a:2},{a:1}], 'a') => [{a:1},{a:2},{a:3}]
	 */
	arrUnique(list, key = undefined) {
		return key ? uniqBy(list, key) : uniq(list)
	},
	/**
	 * key로 정렬한 신규 배열 반환
	 */
	arrSort(list, key) {
		const copied = util.deepCopy(list)
		copied.sort((a, b) => a[key] - b[key])
		return copied
	},

	/**
	 * 페이지를 새창으로 띄운다.
	 */
	openWindow(href) {
		if (!href) {
			return util.log('link not found!')
		}
		window.open(href, '_blank')
	},
	/**
	 * 기간구분값으로 종료일자를 찾아 반환한다.
	 */
	getFromDate(period) {
		const fromDateMapping = {
			d7: util.addDay(-7),
			d15: util.addDay(-15),
			m1: util.addMonth(-1),
			m3: util.addMonth(-3),
			m6: util.addMonth(-6),
			m12: util.addMonth(-12),
			'': '',
		}
		return fromDateMapping[period]
	},
	/**
	 * 검색조건 시작일지 기본값
	 */
	getDefaultFromDate() {
		//return util.addDay(-6);
		return util.addDay(-1)
	},
	/**
	 * 검색조건 기간설정 기본값
	 */
	getDefaultPeriod() {
		//return "d7";
		return ''
	},
	/**
	 * 값이 없으면 '-'로 값이 없는 상태를 표시해 준다.
	 */
	blank(value) {
		return !value ? '-' : value
	},

	/**
	 * 컨텐츠가 긴 경우 말줄임표 표시
	 */
	trimText(text, maxLen = 100) {
		if (!text) return ''
		if (text.length < maxLen) return text
		return text.substr(0, maxLen) + '...'
	},
	/**
	 * 텍스트 개행 처리
	 */
	getLineFeed(text) {
		return (text || '').split('\n').map(v => (!v ? '　' : v))
	},
	/**
	 * 이메일 유효성 검사
	 */
	validateEmail(email) {
		var re =
			/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		return re.test(email)
	},
	/**
	 * 사번 유효성 검사
	 */
	validateId(id) {
		return /^[a-zA-Z0-9]{5,16}$/.test(id)
	},
	/**
	 * 비밀번호 유효성 검사
	 */
	validatePassword(password = '') {
		if (!password) {
			return false
		}
		if (password.length < 8) {
			return false
		}
		const arrPassword = Array.from(password)
		const existAlpha = arrPassword.some(
			ch => (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'),
		)
		if (!existAlpha) {
			return false
		}
		const existNumber = arrPassword.some(ch => ch >= '0' && ch <= '9')
		if (!existNumber) {
			return false
		}
		const specialChar = /[~!@#$%<>^&*]/
		const existSpecialChar = arrPassword.some(ch => specialChar.test(ch))
		if (!existSpecialChar) {
			return false
		}
		return true
	},
	/**
	 * 비밀번호 확인 유효성 검사
	 */
	validatePasswordConfirm(password, passwordConfirm) {
		return passwordConfirm && password === passwordConfirm
	},
	/**
	 * from ~ to 까지 총 몇일인지를 반환
	 * 예) 20210101 ~ 20210105 => 5
	 */
	countDays(fromDt, toDt) {
		const from = moment(fromDt)
		const to = moment(toDt)
		return to.diff(from, 'days') + 1
	},

	/**
	 * v-data-table 삭제버튼 disable
	 * 예) 0개 true
	 * param : v-model="checkselected"
	 */
	gf_btnDelete(arg) {
		return arg.length === 0
	},
	/**
	 * v-data-table 수정버튼 disable
	 * 예) 0개 true, 1개 이상 true
	 * param : v-model="checkselected"
	 */
	gf_btnModify(arg) {
		return arg.length === 0 || arg.length > 1
	},

	/**
	 * 페이지 이동, 파라미터 전달
	 * 예) this.gf_router('adm002')
	 *     this.gf_router('adm002', { pageKey: '111' })
	 */
	gf_router(url, param) {
		const page = {
			name: url,
			params: param,
		}
		this.$router.push(page)
	},

	/**
	 * 프로젝트 여부 체크
	 * @param {function} popupOpen 프로젝트가 없을때 호출되는 함수(팝업출력)
	 * @param {function} next 프로젝트가 있을때 호출되는 함수
	 */
	async projectValid(popupOpen, next) {
		const param = {
			groupCoCd: 'KB0',
			userNo: 'B0000001',
		}

		try {
			const { data } = await selectAna00601(param)
			console.log(data.totalCount)
			if (data.totalCount == '0') {
				popupOpen()
			} else {
				console.log(typeof next)
				if (typeof next == 'function') next()
			}
		} catch (error) {
			console.log('err : ' + error)
		}
	},
}

export default util
