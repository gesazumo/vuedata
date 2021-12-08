$(function () {
	// 팝업존 배너 페이지 정보(1/6)출력
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

	// 스크롤매직
	var controller = new ScrollMagic.Controller()

	new ScrollMagic.Scene({ triggerElement: '.section04', offset: -200 })
		//.addIndicators()
		.setClassToggle('.section04', 'action')
		.reverse(false)
		.addTo(controller)
})
