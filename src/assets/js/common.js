$(document).ready(function () {
	$('#wrap').append('<span class="line_top"></span>')
	// header 스크롤
	var HEADER = (function () {
		var $target = $('.area_header'),
			$easing1 = 'easeOutQuad',
			$easing2 = 'easeInQuad',
			$topBtn = $('.btn_top_1 a'),
			$top,
			$hei = $(window).height(),
			$winWidth = $(window).width(),
			$footer = $('.area_footer').height(),
			$max = $('#wrap').height()
		if ($winWidth > 800) {
			if (MobileUA.TABLET) {
				var $mLeft = $winWidth / 2 - 44
				$topBtn.css({ top: $hei - 70, marginLeft: $mLeft })
			} else {
				$topBtn.css({ top: $hei - 70 })
			}
		} else {
			$topBtn.css({ top: 'auto' })
		}
		$(window).bind('scroll', function () {
			;($top = $(window).scrollTop()),
				($hei = $(window).height() + $top - 70),
				($winWidth = $(window).width())
			if ($top != 0) {
				$topBtn.css('display', 'block')
			} else {
				$topBtn.css('display', 'none')
			}
			if ($winWidth > 800) {
				if ($hei > $max && !$('.ul_pr_history_1').length) {
					$hei = $max - 70
				}
				$topBtn.stop().animate({ top: $hei })
			}
			if ($winWidth > 560) {
				if ($top > 5) {
					$target.stop().animate({ top: '0' }, 300, $easing2)
				} else {
					$target.stop().animate({ top: '0' }, 300, $easing1)
				}
			}
		})
		$topBtn.bind('click', function () {
			$('body, html').animate({ scrollTop: 0 })
			return false
		})
	})()
	// gnb
	var GNB = (function () {
		var $winWidth = $(window).width(),
			$target = $('#ul_gnb_1 li'),
			$link = $('#ul_gnb_1 > li > a'),
			$bg = $('.bg_header_1'),
			$snb = $('.box_gnb_1'),
			$array = [],
			$flag = false,
			$easing1 = 'easeOutQuad',
			$easing2 = 'easeInQuad'
		// 모바일 용 변수
		var $webGnb = $('#ul_gnb_1'),
			$mainTarget = $('.box_mot_1'),
			$gnbTarget = $('#gnb')
		// tbl용 변수
		var $window = $(window).width(),
			$tblTemp = 'off'
		// gnb 높이값 설정
		gnbHeight()
		function gnbHeight() {
			$array = []
			$bg.removeClass('on').css('height', '0')
			$snb.each(function () {
				var $this = $(this)
				$winWidth = $(window).width()
				if ($winWidth > 801) {
					$this.css({ visibility: 'hidden', maxHeight: 'auto' })
					$array.push($this.height())
					$this.css({ visibility: 'visible', maxHeight: '0' })
				} else if ($winWidth <= 800) {
					$array.push($this.height())
					$this.css({ visibility: 'visible', minHeight: 'auto' })
				}
			})
		}
		// 웹용 gnb
		$(document).on(
			'mouseenter focus',
			'#ul_gnb_1:not(.ul_gnb_mo_1) > li > a',
			viewMenu,
		)
		$(document).on(
			'mouseleave blur',
			'#ul_gnb_1:not(.ul_gnb_mo_1) > li > a',
			hideMenu,
		)
		$(document).on(
			'mouseover focus',
			'.box_gnb_1:not(.ul_gnb_mo_2)',
			viewMenu1,
		)
		$(document).on(
			'mouseout blur',
			'.box_gnb_1:not(.ul_gnb_mo_2)',
			hideMenu,
		)
		function viewMenu() {
			var $this = $(this),
				$target = $this.parent(),
				$all_target = $('#ul_gnb_1 > li'),
				$all_box = $('.box_gnb_1'),
				$index = $target.index(),
				$box = $this.next('.box_gnb_1')
			boxHeight($index)
			$all_target.removeClass('on')
			$target.addClass('on')
			$bg.addClass('on')
				.stop()
				.animate({ height: $array[$index] }, 300, $easing1)
			flag = false
		}
		function hideMenu() {
			flag = true
			setTimeout(check, 100)
		}
		function viewMenu1() {
			flag = false
			setTimeout(check, 100)
		}
		function check() {
			if (flag) {
				$snb.stop().animate({ maxHeight: 0 }, 300, $easing2)
				$bg.stop()
					.removeClass('on')
					.animate({ height: 0 }, 300, $easing2)
				$target.removeClass('on')
			}
		}
		function boxHeight(idx) {
			var $this = $('#ul_gnb_1 > li'),
				$target = $this.find('.box_gnb_1')
			$target.stop().css('maxHeight', '0')
			$this
				.eq(idx)
				.find('.box_gnb_1')
				.stop()
				.animate({ maxHeight: $array[idx] }, 300, $easing2)
		}
	})()
})
