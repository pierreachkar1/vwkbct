
$(document).ready(function() {

	

	//Carousel Settings
	$('.carouselFullCarousel').slick({
		slidesToShow: 6,
		variableWidth: false,
		centerPadding: '0',
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					centerMode: true,
					dots: true,
					initialSlide: 3,
					focusOnSelect: true
				}
			}
		]
	});
    

});
    

