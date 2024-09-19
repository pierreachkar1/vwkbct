window.addEventListener('DOMContentLoaded', (event) => {
      
    $(document).ready(function(){
        $('.uniform-images-featured').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          fade: true,
          infinite: false,
          asNavFor: '.uniform-images-thumbs'
        });
        $('.uniform-images-thumbs').slick({
          slidesToShow: 3,
          slidesToScroll: 1,    
          dots: false,
          arrows: true,
          focusOnSelect: true,
          vertical: true,
          infinite: false,
          asNavFor: '.uniform-images-featured',
        });

        $('.uniform-part-images-featured').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          fade: true,
          infinite: false,
          asNavFor: '.uniform-part-images-thumbs'
        });
        $('.uniform-part-images-thumbs').slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false,
          arrows: true,
          focusOnSelect: true,
          infinite: false,
          asNavFor: '.uniform-part-images-featured'
        });

        $('.uniform-parts').slick({
            dots: false,
            arrows: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 959,
                    settings: "unslick"
                }
            ]
        });


      $('.uniform-part-headline').on('click', function(e){
            $(this).toggleClass('open');
            $(this).siblings('.uniform-part-content').slideToggle('fast');
            e.preventDefault();
            $('.uniform-part-images-featured').slick('unslick');
            $('.uniform-part-images-featured').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                fade: true,
                infinite: false,
                draggable: true,
                asNavFor: '.uniform-part-images-thumbs'
            });
            $('.uniform-part-images-thumbs').slick('unslick');
            $('.uniform-part-images-thumbs').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            arrows: true,
            focusOnSelect: true,
            infinite: false,
            asNavFor: '.uniform-part-images-featured'
            });
    });
$('.uniform-part-content').hide();

        $('.uniform-images .hotspots li').on('click', function(e){
            var index = $('.uniform-images .hotspots li').index(this);
            $('.uniform-parts').slick('slickGoTo', index, true).addClass('open');
            $('.uniform-part-images-featured').slick('slickGoTo', 0, true);
            //console.log(index);
            e.preventDefault();
        });

        $('.uniform-parts').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          $('.uniform-part-images-featured').slick('slickGoTo', 0, true);
        });

        $('.close-parts').on('click', function(e){
            $('.uniform-parts').removeClass('open');
            e.preventDefault();
        });
        $(document).mouseup(function(e){
            var container = $('.uniform-parts');
            // If the target of the click isn't the container
            if(!container.is(e.target) && container.has(e.target).length === 0){
                container.removeClass('open');
            }
        });

    });

});