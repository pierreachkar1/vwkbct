
$(".carousel").on("touchstart", function(event){
  var rizeenGetPage = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function(event){
      var rizeenMove = event.originalEvent.touches[0].pageX;
      if( Math.floor(rizeenGetPage - rizeenMove) < -5 ){
          $(".carousel").carousel('prev');
      }
      else if( Math.floor(rizeenGetPage - rizeenMove) > 5 ){
          $(".carousel").carousel('next');
      }
  });
  $(".carousel").on("touchend", function(){
          $(this).off("touchmove");
  });
});