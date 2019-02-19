$(document).ready(function() {
	var mainSlider = new Swiper ('.main-slider', {
		direction: 'vertical',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var rangeSlider = new Swiper ('.range-slider', {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	$(".btn-scroll").on("click","a", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),
    top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 500);
  });

});

