$(function () {
	$.fn.topNavi = function (options) {
		var config = {
			gnb: '',
			target: '',
			targetDep: '',
			mSize: '',
			moblieBtn: '',
			topUl: '',
			mUtil: '',
			mDep: '',
		}

		if (options) $.extend(config, options)
		this.each(function () {
			var Self = $(this),
				gnb = Self.find(config.gnb),
				aTarget = Self.find(config.target),
				dTarget = Self.find(config.targetDep),
				mSize = Number(eval(config.mSize)),
				mBtn = Self.find(config.moblieBtn),
				topUl = Self.find(config.topUl),
				mUtil = Self.find(config.mUtil),
				mDep = Self.find(config.mDep),
				// web menu show
				_menuBlock = function () {
					var depId = this.id
					var depClass = depId.substr(0, 7)
					var depNum = depId.substr(7, 8)
					if (depNum == 2) {
						Self.addClass('hover')
					} else {
						Self.addClass('hover')
					}

					if (depClass == 'topNavi') {
						aTarget.removeClass('hover')
						targetDiv = $(this).siblings()
						targetDiv.css({ display: 'block' })
						$(this).addClass('hover')
					} else if (depClass == 'topSubm') {
						aTarget.removeClass('hover')
						targetDiv = $(this)
						targetDiv.addClass('hover')
						targetDiv.css({ display: 'block' })
						$(this).siblings('a').addClass('hover')
					} else {
					}
				}

			_menuClear = function () {
				Self.removeClass('hover')
				gnb.removeAttr('style', '')
				aTarget.removeClass('hover')
				dTarget.removeClass('hover')
				dTarget.removeAttr('style', '')
				mDep.removeAttr('style', '')
				if (mBtn.is('.active')) {
					mBtn.removeClass('active')
					$('html, body').removeAttr('style', '')
				}
			}

			mBtn.bind('click', function () {
				var winHeight = $(window).height()

				if (!$(this).is('.active')) {
					gnb.css('height', winHeight)
					gnb.stop().animate({ right: '0' }, 300, function () {
						$('body').attr('data-pos', $(window).scrollTop())
						$('html, body').css({
							'overflow-y': 'hidden',
							position: 'relative',
							height: '100%',
						})

						topUl.css(
							'height',
							winHeight -
								mUtil.height() -
								mUtil
									.css('margin-bottom')
									.replace(/[^0-9]/g, ''),
						)
						mDep.slideUp(0)
					})

					setTimeout(function () {
						mBtn.addClass('active')
						for (i = 0; i < topUl.children('li').size(); i++) {
							topUl
								.children('li')
								.eq(i)
								.delay(i * 200)
								.animate({ opacity: '1' }, 600)
						}
					}, 300)
				} else {
					$('html, body').removeAttr('style', '')
					$(window).scrollTop($('body').attr('data-pos'))
					mBtn.removeClass('active')

					gnb.stop().animate({ right: '-100%' }, 300, function () {
						gnb.removeAttr('style', '')
						topUl.removeAttr('style', '')
						topUl.children('li').removeAttr('style', '')
						mDep.removeAttr('style', '')
					})
				}
			})

			_mnaviView = function () {
				if ($(this).is('.hover')) {
					$(this).siblings().find('.menu').stop().slideUp(300)
					$(this).removeClass('hover')
				} else {
					mDep.stop().slideUp(300)
					aTarget.removeClass('hover')
					$(this).addClass('hover')
					$(this).siblings().find('.menu').stop().slideDown(300)
				}
			}

			// menu event
			_menuEvent = function () {
				aTarget.each(function () {
					if (Self.is('.on')) {
						$(this).unbind('mouseenter mouseleave focus')
						$(this).unbind('click')
						$(this)
							.mouseenter(_menuBlock)
							.focus(_menuBlock)
							.mouseleave(_menuClear)
					} else {
						$(this).unbind('click')
						$(this).unbind('mouseenter mouseleave focus')
						$(this).click(_mnaviView)
					}
				})

				dTarget.each(function () {
					if (Self.is('.on')) {
						$(this)
							.mouseenter(_menuBlock)
							.focus(_menuBlock)
							.mouseleave(_menuClear)
					} else {
						$(this).unbind('mouseenter mouseleave focus')
					}
				})
			}

			// scroll
			var scrollF = function () {
				var stmp = $(window).scrollTop()
				var changeD = $('header').height() * 0.8
				if (stmp > changeD) {
					Self.addClass('fixed')
				} else {
					Self.removeClass('fixed')
				}
			}

			$(document).on('scroll', scrollF)
			$(window).load(function () {
				scrollF()
			})

			_menuWchk = function () {
				var winWidth = $(window).width()
				if (winWidth > mSize) {
					Self.addClass('on')
				} else {
					Self.removeClass('on')
				}
				_menuEvent()
			}

			// resize
			$(window).resize(function () {
				if (
					!navigator.userAgent.match(
						/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/,
					)
				) {
					_menuClear()
				}
				_menuWchk()
			})

			$(window).load(function () {
				_menuWchk()
			})

			$(window).on('orientationchange', function (event) {
				_menuWchk()
				_menuClear()
			})
		})
		return this
	}

	var options = {
		gnb: '#gnb',
		target: 'a[id^=topNavi]',
		targetDep: 'div[id^=topSubm]',
		mSize: '1100',
		moblieBtn: '#mNavi',
		topUl: '#topMenu',
		mUtil: '#mUtil',
		mDep: '#topMenu .menu',
	}

	$('header').topNavi(options)
})
