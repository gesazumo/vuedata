$(function () {
	// GNB
	$('#gnb .dep01 > li > a').on('focus mouseenter', function () {
		$('#header').addClass('mnOpen')
		$(this).parent().addClass('active').siblings().removeClass('active')
		$('#personInfo, #langlst, #searchFull').hide()
	})
	$('#gnb').on('mouseleave', function () {
		$('#header').removeClass('mnOpen')
		$('#gnb .dep01 > li').removeClass('active')
		$('#gnb .dep02 li').each(function (i) {
			if ($(this).children('ul').length > 0) {
				$(this).addClass('active')
			}
		})
	})

	if ($('.popFullmenu').length > 0) {
		$('.popFullmenu .fullmenu_group').mCustomScrollbar()
	}

	// 모바일 메뉴 child
	$('.popFullmenu a').each(function (i) {
		if ($(this).next('ul').length > 0) {
			$(this).parent().addClass('child')
		}
	})

	// 모바일 메뉴 클릭이벤트
	$('.popFullmenu a').on('click', function (e) {
		if ($(window).width() <= 1280) {
			if ($(this).parent().hasClass('child') == true) {
				if ($(this).parent().hasClass('active') == true) {
					$(this).next().find('active').removeClass('active')
					$(this).parent().removeClass('active')
				} else {
					$('.popFullmenu li').removeClass('active')
					$(this).parents('li').addClass('active')
				}
				e.preventDefault()
			}
		}
	})
	// 모바일 오픈메뉴 close처리
	$('#fullmenuClose').on('click', function () {
		$('.popFullmenu li').removeClass('active')
	})

	$('#banner').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		focusOnSelect: true,
		pauseOnFocus: true,
		prevArrow: $('#bannerPrev'),
		nextArrow: $('#bannerNext'),
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	})
	$('.bannerWrap .control button').on('click', function (e) {
		$this = $(this)
		slickControl($this, '#banner', '#bannerStop', '#bannerPlay')
		e.preventDefault()
	})

	footer() //footer Site Llink 호출

	// HASH 버튼
	$('.hash').on('click', function (e) {
		$(this.hash).slideDown(100)
		e.preventDefault()
	})
	$('.hashClose').on('click', function (e) {
		$(this.hash).slideUp(100)
		e.preventDefault()
	})

	// HASH TOGGLE 버튼
	$('.hashToggle').on('click', function (e) {
		var _me = $(this.hash).attr('id')
		//console.log(_me);
		$('#personInfo, #langList, #searchFull').each(function () {
			//console.log($(this).attr('id'));
			if ($(this).is(':visible') == true && $(this).attr('id') != _me) {
				$(this).hide()
			}
		})
		$(this.hash).slideToggle()
		e.preventDefault()
	})

	// HASH TOGGLE Class버튼
	$('.hashToggleClass').on('click', function (e) {
		$(this.hash).toggleClass('active')
		e.preventDefault()
	})

	//footer Site Llink
	function footer() {
		$('.ftBtn > div').mCustomScrollbar({ theme: 'dark' })
		$('.ftBtn button').click(function () {
			$(this).parent().siblings('div').children('div').stop().slideUp(300)
			$(this).siblings('div').stop().slideToggle(300)

			if ($(this).parent('.ftBtn').hasClass('on')) {
				$('.ftBtn').removeClass('on')
				$(this).attr('title', '축소됨')
			} else {
				$('.ftBtn').removeClass('on')
				$(this).parent('.ftBtn').addClass('on')
				$(this).attr('title', '확장됨')
			}
			return false
		})

		$('.ftBtnWrap').mouseleave(function () {
			$('.ftBtn > div').each(function () {
				if ($(this).css('display') == 'block') {
					$('.ftBtn > div').hide()
					$('.ftBtn').removeClass('on')
					$(this).prev().attr('title', '축소됨')
				}
			})
		})
	}
})

// slider Control
function slickControl($this, slick, stop, play) {
	$slick = $(slick) //slider wrap
	$stop = $(stop) //Stop Button
	$play = $(play) //Play Button
	var display = $this.css('display') //button's display

	if ($this.is(stop)) {
		$stop.css('display', 'none')
		$play.delay(100).css('display', display)
		$slick.slick('slickPause')
	}
	if ($this.is(play)) {
		$play.css('display', 'none')
		$stop.delay(100).css('display', display)
		$slick.slick('slickPlay')
	}
}
