// $(document).on('ready', function() {
    $('.image--slider--container').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
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
  // });