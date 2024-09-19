$(function() {
    
    //Observe Top Navigation
    var jeepTourHeader = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            $('#SamReturnToTop').css("display","none");
        } else {  
            $('#SamReturnToTop').css("display","block");
            $('#SamReturnToTop').html("<a href='#enter-to-win-form-section'>Enter To Win</a>");
        } 
    }, { threshold: [0] });
    jeepTourHeader.observe(document.getElementById("sam-temp-header-section"));


    
})

