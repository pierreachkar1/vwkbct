
//Homepage Settings
$('.image--slider--container').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 1050,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 834,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
        }
        }
    ]
});







// Lazy Load Images using Intersection Observer
// My Note: Just add "data-lazy" attribute inside IMG tag
(function () {
	var observer = new IntersectionObserver(samOnDataLayerIntersect);

	document.querySelectorAll("[data-lazy]").forEach((img) => {
		observer.observe(img);
	});

	function samOnDataLayerIntersect(entries) {
		entries.forEach((entry) => {
			if (entry.target.getAttribute("data-processed") || !entry.isIntersecting)
				return true;
			entry.target.setAttribute("src", entry.target.getAttribute("data-original"));
			entry.target.setAttribute("data-processed", true);
		});
	}
})();
