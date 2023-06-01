$('.team-carousel').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1500,
	arrows: false,
	autoplay: true,
	mobileFirst: true,
	responsive: [
        {
			breakpoint: 576, 
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 768, 
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
			},
		},
	],
});
