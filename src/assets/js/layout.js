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