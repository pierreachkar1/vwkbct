// $(document).on('ready', function() {
    $('.image--slider--container').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  // });