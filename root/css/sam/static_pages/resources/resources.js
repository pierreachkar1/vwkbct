$( document ).ready(function() {

    //NOTE: Need to add Height and Width to enable animation


    //GUIDES Show All/Less
    $("#guide-see-all").click(function(){
        if (document.getElementById('guide-see-all').innerHTML.toLocaleLowerCase().indexOf("see all") >=0) {
            document.getElementById('guide-see-all').innerHTML = 'See Less <img src="/photos/uspt/static/arrow-right.png">';
        } else {
            document.getElementById('guide-see-all').innerHTML = 'See All <img src="/photos/uspt/static/arrow-right.png">';
        }
        $( "#guide-toggle-content" ).slideToggle();
    });


    //REVIEWS Show All/Less
    $("#review-see-all").click(function(){
        if (document.getElementById('review-see-all').innerHTML.toLocaleLowerCase().indexOf("see all") >=0) {
            document.getElementById('review-see-all').innerHTML = 'See Less <img src="/photos/uspt/static/arrow-right.png">';
        } else {
            document.getElementById('review-see-all').innerHTML = 'See All <img src="/photos/uspt/static/arrow-right.png">';
        }
        $( "#review-toggle-content" ).slideToggle();
    });
   

});

