$(function() {


    if (screen.width > 1000) {
        //Observe Top Navigation
        var jeepTourHeader = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                $('#sam-temp-header-section').css("display","none");
            } else {  
                $('#sam-temp-header-section').css("display","block");
            } 
        }, { threshold: [0] });
        jeepTourHeader.observe(document.getElementsByClassName("header-nav")[0]);
    } else {
        
        // //Observe Top Navigation
        // var jeepTourHeader = new IntersectionObserver(function(entries) {
        //     if(entries[0].isIntersecting === true) {
        //         $('#floatingEnterButton').css("display","none");
        //     } else {  
        //         $('#floatingEnterButton').css("display","block");
        //     } 
        // }, { threshold: [0] });
        // jeepTourHeader.observe(document.getElementById("jeep-hero-section"));
    }






    //Mobile Menu
    // let jeepMenuBtn = document.querySelector('.sam-temp-header-nav-mobile');
    // let jeepMenu = document.querySelector('.jeep__nav');
    // let jeepMenuItem = document.querySelectorAll('.jeep__nav__link');

    // jeepMenuBtn.addEventListener('click', function(){
    //     jeepMenuBtn.classList.toggle('active');
    //     jeepMenu.classList.toggle('active');
    // })


    // jeepMenuItem.forEach (function(jeepMenuItem) {
    //     jeepMenuItem.addEventListener('click',function(){
    //         jeepMenuBtn.classList.toggle('active');
    //         jeepMenu.classList.toggle('active');
    //     })
    // })

    
})
