$(function () {
	// MAIN BANNER
	$('#slide01').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	})
	$('.section01 .control a').on('click', function (e) {
		$this = $(this)
		slickControl($this, '#slide01', '#slide01Stop', '#slide01Play')
		e.preventDefault()
	})

	// Tab
	$('.tab > li > a, .tabDep01 > li > a').on('click', function (e) {
		$(this).parent().addClass('active').siblings().removeClass('active')
		$(this).parent().parent().find('> li > a').attr('title', '')
		$(this).attr('title', '선택됨')
		e.preventDefault()
	})

	// 팝업존 배너 페이지 정보(1/6)출력 ※주의 : 아래의 slick 슬라이드 실행과 소스 순서가 바뀌면 안됩니다.
	$('#slide02').on(
		'init reInit afterChange',
		function (event, slick, currentSlide, nextSlide) {
			//console.log(slick);
			var i = (currentSlide ? currentSlide : 0) + 1
			$('.section02 .MC_box1 .pagingInfo .now').text(i)
			$('.section02 .MC_box1 .pagingInfo .total').text(
				slick.$dots[0].children.length,
			)
			$('.section02 .MC_box1 .inBox h4').text(
				$('#slide02 .slideEl.slick-current.slick-active .title').text(),
			)
			$('.section02 .MC_box1 .decoTxt').text(
				$(
					'#slide02 .slideEl.slick-current.slick-active > a > .txt',
				).text(),
			)
		},
	)
	$('#slide02')
		.slick({
			dots: true,
			arrows: true,
			infinite: true,
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToShow: 3,
			slidesToScroll: 1,
			focusOnSelect: true,
			pauseOnFocus: true,
			prevArrow: $('#slide02Prev'),
			nextArrow: $('#slide02Next'),
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		})
		.on('init afterChange', function (e) {
			//console.log(e);
		})
	$('.section02 .control button').on('click', function (e) {
		$this = $(this)
		slickControl($this, '#slide02', '#slide02Stop', '#slide02Play')
		e.preventDefault()
	})

	$('#slide03').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		focusOnSelect: true,
		pauseOnFocus: true,
		prevArrow: $('#slide03Prev'),
		nextArrow: $('#slide03Next'),
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.section03 .control button').on('click', function (e) {
		$this = $(this)
		slickControl($this, '#slide03', '#slide03Stop', '#slide03Play')
		e.preventDefault()
	})

	// 팝업존 배너 페이지 정보(1/6)출력 ※주의 : 아래의 slick 슬라이드 실행과 소스 순서가 바뀌면 안됩니다.
	$('#slide04').on(
		'init reInit afterChange',
		function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1
			$('.section04 .MC_box2 .pagingInfo .now').text(i)
			$('.section04 .MC_box2 .pagingInfo .total').text(
				slick.$dots[0].children.length,
			)
		},
	)
	$('#slide04').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		pauseOnFocus: true,
		prevArrow: $('#slide04Prev'),
		nextArrow: $('#slide04Next'),
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.section04 .control button').on('click', function (e) {
		$this = $(this)
		slickControl($this, '#slide04', '#slide04Stop', '#slide04Play')
		e.preventDefault()
	})

	$('#slide05').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		slidesToShow: 1,
		focusOnSelect: true,
		pauseOnFocus: true,
		prevArrow: $('#slide05Prev'),
		nextArrow: $('#slide05Next'),
	})
	$('.section06 .control button').on('click', function (e) {
		$this = $(this)
		slickControl($this, '#slide05', '#slide05Stop', '#slide05Play')
		e.preventDefault()
	})

	function sliderSet(slickfor, cnt) {
		slickfor.slick({
			dots: false,
			arrows: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 2000,
			speed: 1000,
			slidesToShow: cnt,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1281,
					settings: {
						slidesToShow: 4,
					},
				},
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 601,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		})
	}
	$('.section05 .tabLst').each(function (i) {
		i += 1
		var slickfor = $(this).addClass('for1' + i)
		sliderSet($('.for1' + i), '5')
	})

	$('#slide06').slick({
		fade: true,
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '#slide07',
	})
	$('#slide07').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		focusOnSelect: true,
		pauseOnFocus: true,
		prevArrow: $('#slide07Prev'),
		nextArrow: $('#slide07Next'),
		asNavFor: '#slide06',
	})
	$('.section07 .control button').on('click', function (e) {
		$this = $(this)
		slickControl($this, '#slide07', '#slide07Stop', '#slide07Play')
		e.preventDefault()
	})

	// 스크롤매직
	var controller = new ScrollMagic.Controller()
	new ScrollMagic.Scene({ triggerElement: '.section01', offset: -500 })
		//.addIndicators()
		.setClassToggle('.section01', 'action')
		.reverse(false)
		.addTo(controller)
	new ScrollMagic.Scene({ triggerElement: '.section02', offset: -200 })
		//.addIndicators()
		.setClassToggle('.section02', 'action')
		.reverse(false)
		.addTo(controller)
	new ScrollMagic.Scene({ triggerElement: '.section03', offset: -200 })
		//.addIndicators()
		.setClassToggle('.section03', 'action')
		.reverse(false)
		.addTo(controller)
	new ScrollMagic.Scene({ triggerElement: '.section04', offset: -200 })
		//.addIndicators()
		.setClassToggle('.section04', 'action')
		.reverse(false)
		.addTo(controller)
	new ScrollMagic.Scene({ triggerElement: '.section05', offset: -200 })
		//.addIndicators()
		.setClassToggle('.section05', 'action')
		.reverse(false)
		.addTo(controller)
	new ScrollMagic.Scene({ triggerElement: '.section06', offset: -500 })
		//.addIndicators()
		.setClassToggle('.section06', 'action')
		.reverse(false)
		.addTo(controller)
	new ScrollMagic.Scene({ triggerElement: '.section07', offset: -500 })
		//.addIndicators()
		.setClassToggle('.section07', 'action')
		.reverse(false)
		.addTo(controller)
})

// 슬라이드 버튼 위치 조정
$(document).ready(function () {
	$('.section01 .control').prepend($('.section01 .slick-prev'))
	$('.section01 .control').append($('.section01 .slick-next'))
	$('.section01 .control').prepend($('.section01 .slick-dots'))
})

// Tab Box JS
function TabBox(div, tit) {
	$tab = $('.' + div)

	$tab.find(tit).each(function () {
		$(this)
			.find('a')
			.on('focus click', function (e) {
				e.preventDefault() //상단이동방지

				$(this).parent(tit).siblings('.list_box').removeClass('active')
				$(this).parent(tit).siblings().find('> a').removeClass('active')
				$(this).parent(tit).next('.list_box').addClass('active')
				$(this).addClass('active')
			})
	})
}

// 이미지 정렬
function imgAlign(wrap, imgBox) {
	console.log(2)
	var $imgBox = $(wrap).find(imgBox)
	$imgBox.each(function () {
		var $img = $(this).find('img')
		$div = $img.parent()
		divAspect = $div.height() / $div.width()
		imgAspect = $img.height() / $img.width()

		if (imgAspect <= divAspect) {
			//가로 이미지
			$img.css({ width: 'auto', height: '100%' })
		} else {
			$img.css({ width: '100%', height: 'auto' })
		}
	})
} //이미지 정렬
