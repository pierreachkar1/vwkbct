
 $(document).ready(function(){
    $('.carouselPeerPerspect').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    });

    $('.carouselsTop').slick({
    slidesToShow: 2,
    dots: false,
    arrows: true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    $('.carouselsBtm').slick({
    slidesToShow: 5,
    dots: false,
    arrows: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 735,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });



    $(".SectionCoatBtn1").click(function(){
      $(".SectionPantsdiv").removeClass("SectionShow");
      $(".SectionHatsdiv").removeClass("SectionShow");
      $("#SectionCoat2").removeClass("SectionShow");
      $("#SectionCoat1").toggleClass("SectionShow");
    });
    $(".SectionCoatBtn2").click(function(){
      $(".SectionPantsdiv").removeClass("SectionShow");
      $(".SectionHatsdiv").removeClass("SectionShow");
      $("#SectionCoat1").removeClass("SectionShow");
      $("#SectionCoat2").toggleClass("SectionShow");
    });
    $(".SectionPantsBtn1").click(function(){
      $(".SectionCoatdiv").removeClass("SectionShow");
      $(".SectionHatsdiv").removeClass("SectionShow");
      $("#SectionPants2").removeClass("SectionShow");
      $("#SectionPants1").toggleClass("SectionShow");
    });
    $(".SectionPantsBtn2").click(function(){
      $(".SectionCoatdiv").removeClass("SectionShow");
      $(".SectionHatsdiv").removeClass("SectionShow");
      $("#SectionPants1").removeClass("SectionShow");
      $("#SectionPants2").toggleClass("SectionShow");
    });
    $(".SectionHatsBtn1").click(function(){
      $(".SectionCoatdiv").removeClass("SectionShow");
      $(".SectionPantsdiv").removeClass("SectionShow");
      $("#SectionHats2").removeClass("SectionShow");
      $("#SectionHats1").toggleClass("SectionShow");
    });
    $(".SectionHatsBtn2").click(function(){
      $(".SectionCoatdiv").removeClass("SectionShow");
      $(".SectionPantsdiv").removeClass("SectionShow");
      $("#SectionHats1").removeClass("SectionShow");
      $("#SectionHats2").toggleClass("SectionShow");
    });


   $(".btnCustomize").click(function () {
      $(".rizeenCustombtns").removeClass("btn-red");
      $(this).toggleClass("btn-red");
      var buttontext = $(this).find('span').text();
      if (buttontext === 'Customize') {
          $('.btnView span').text('View');
          $('.btnCustomize span').text('Customize');
          $(this).html('<span>Customizing</span>');
      } else {
          $(this).html('<span>Customize</span>');
      }
   });


   $(".btnView").click(function () {
      $(".rizeenCustombtns").removeClass("btn-red");
      $(this).toggleClass("btn-red");
      var buttontext = $(this).find('span').text();
      if (buttontext === 'View') {
          $('.btnView span').text('View');
          $('.btnCustomize span').text('Customize');
          $(this).html('<span>Viewing</span>');
      } else {
          $(this).html('<span>View</span>');
      }
   });


    
    $(".skillBadgeHidden select").hide();    

    $("select#selectSBadge").change(function(){
        var selectedBadge = $(this).children("option:selected").val();
        if(selectedBadge=="1 Badge") {
          $(".skillBadgeHidden select").hide();    
          $("select.hiddenSBadge1").show();  
        }  
        if(selectedBadge=="2 Badge") {
          $(".skillBadgeHidden select").hide();    
          $("select.hiddenSBadge1").show();    
          $("select.hiddenSBadge2").show();    
        }
        if(selectedBadge=="3 Badge Standard") {
          $(".skillBadgeHidden select").hide();    
          $("select.hiddenSBadge1").show();    
          $("select.hiddenSBadge2").show();    
          $("select.hiddenSBadge3").show();    
        }
        if(selectedBadge=="3 Badge Stacked") {
          $(".skillBadgeHidden select").hide();    
          $("select.hiddenSBadge1").show();    
          $("select.hiddenSBadge2").show();    
          $("select.hiddenSBadge3").show();    
        }
        if(selectedBadge=="4 Badge Grid") {
          $(".skillBadgeHidden select").show();    
          $("select.hiddenSBadge5").hide();    
        }
        if(selectedBadge=="4 Badge Stacked") {
          $(".skillBadgeHidden select").show();    
          $("select.hiddenSBadge5").hide();    
        }
        if(selectedBadge=="5 Badge") {
          $(".skillBadgeHidden select").show();    
        }
        
    });

 });

