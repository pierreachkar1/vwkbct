
/* :::::::::::::::: SOME FUNCTIONS TO BE USED - DO NOT REMOVE OR MODIFY :::::::::::::::: */

//Check if user has logged in
function samIsUserloggedIn() {
    return !$("#loggedIn").hasClass("hidden"); //Return TRUE if user has logged in
}

//Validate Email Address
function samValidateEmailAddress(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}

//Validate Phone Number
function samValidatePhoneNumber(phone) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
}

//Add Lazy Load To Image
function samAddLazyLoadToImg() {

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
}

//Close Mobile Menu Navigation
function samCloseMobileMenuNav() {
    $("body").removeClass("no-scroll");
    $("#mobile-overlay").removeClass("active");
    $("#mobile-sidebar").removeClass("active");
}

/* :::::::::::::::: END :::::::::::::::: */







/* :::::::::::::::: OPTIMOVE FUNCTIONS :::::::::::::::: */

//CHECK WEBSDK STATUS TO INITIATE ALL EVENTS
function samOptimove_WebSDK_Status() {
    if (typeof(optimoveSDK) != "undefined") {
        console.log("Page Visit Triggered From GTSAMFOOTER");
        dataLayer.push({
            'event':"page_visit"
        });
    }
}

//EVENT: setPageVisit default event from Optimove
function samOptimove_SetPageVisit(pageURL, pageTitle, pageCategory, userEmail) {
    if (samIsUserloggedIn() == true) {
        optimoveSDK.API.setPageVisit(pageURL, pageTitle, pageCategory, userEmail);
    } else {
        optimoveSDK.API.setPageVisit(pageURL, pageTitle, pageCategory);
    }
}

//EVENT: login
function samOptimove_Report_Login(loggedEmail) {

    if (samIsUserloggedIn() == true) {
        if (sessionStorage.getItem("just_logged_in") !== null) {
            if (sessionStorage.getItem("just_logged_in") == "yes") {
                sessionStorage.setItem("just_logged_in","");

                var SamLoginPara = {
                    brand: 'USP',    
                }
                if (typeof(optimoveSDK) != "undefined") {
                    optimoveSDK.API.reportEvent('login',SamLoginPara,null,loggedEmail);    
                }
                   
            }
        }
    }
    
}

//EVENT: item_in_cart
function samOptimove_Report_Item_In_Cart(dataLayerCartItems) {  

    if (samIsUserloggedIn() == true) {
        if (sessionStorage.getItem("just_added_to_cart") !== null) {
            if (sessionStorage.getItem("just_added_to_cart") == "yes") {
                sessionStorage.setItem("just_added_to_cart","");  //Once sent, reset status untill Add To Cart occurs again
    
                //MULTIPLE ITEMS SENT:::::
                //Send info to Optimove
                var cartItemsToSubmit = JSON.parse(dataLayerCartItems); //Paste cart value into array
                var itemsObject = {};
                itemsObject['item_row'] = "";
                for (var x = 0; x < cartItemsToSubmit.length; x++) { 
                    itemsObject['item_row'] += 
                    '<div class="content-div-row">'+
                    '   <div class="content-image">'+
                    '       <a href="'+ cartItemsToSubmit[x].producturl + '">'+
                    '           <img src="' + cartItemsToSubmit[x].imgpath + '" alt="' + cartItemsToSubmit[x].title + '" style="width: 200px; height: auto">'+
                    '       </a>'+
                    '   </div>'+
                    '   <div class="content-details">'+
                    '       <a href="'+ cartItemsToSubmit[x].producturl + '">'+
                    '           Item Name: ' + cartItemsToSubmit[x].title + '<br>'+
                    '           Quantity: ' + cartItemsToSubmit[x].qty + '<br>'+
                    '           Price:  $' + cartItemsToSubmit[x].price + '<br><br><br>'+
                    '       </a>'+
                    '   </div>'+
                    '</div>';
                }
                
                console.log("Item To Be Sent: " + JSON.stringify(itemsObject));
                if (typeof(optimoveSDK) != "undefined") {
                    optimoveSDK.API.reportEvent('item_in_cart', itemsObject);    //Send info to Optimove 
                }

            }
        }
    } 

}

//EVENT: cart_is_empty
function samOptimove_Report_Cart_Is_Emtpy() {
    if (samIsUserloggedIn() == true) {
        if (document.getElementsByClassName('stocktooltip').length <= 1) {
            if (typeof(optimoveSDK) != "undefined") {
                optimoveSDK.API.reportEvent('cart_is_empty', {});     //Send Info to Optimove  
            }
        }
    }
}

//EVENT: checkout_started
function samOptimove_Report_Checkout_Started(dataLayerCartItems) {

    if (samIsUserloggedIn() == true) {

        //MULTIPLE ITEMS SENT:::::
        //Send info to Optimove
        var cartItemsToSubmit = JSON.parse(dataLayerCartItems); //Paste cart value into array
        var itemsObject = {};
        itemsObject['item_row'] = "";
        for (var x = 0; x < cartItemsToSubmit.length; x++) { 
            itemsObject['item_row'] += 
            '<div class="content-div-row">'+
            '   <div class="content-image">'+
            '       <a href="'+ cartItemsToSubmit[x].producturl + '">'+
            '           <img src="' + cartItemsToSubmit[x].imgpath + '" alt="' + cartItemsToSubmit[x].title + '" style="width: 200px; height: auto">'+
            '       </a>'+
            '   </div>'+
            '   <div class="content-details">'+
            '       <a href="'+ cartItemsToSubmit[x].producturl + '">'+
            '           Item Name: ' + cartItemsToSubmit[x].title + '<br>'+
            '           Quantity: ' + cartItemsToSubmit[x].qty + '<br>'+
            '           Price:  $' + cartItemsToSubmit[x].price + '<br><br><br>'+
            '       </a>'+
            '   </div>'+
            '</div>';
        }

        //console.log("CHECKOUT HAS STARTED");
        if (typeof(optimoveSDK) != "undefined") {
            optimoveSDK.API.reportEvent('checkout_started', itemsObject);
        }
 
    } 

}

//EVENT: placed_order
function samOptimove_Report_Placed_Order() {

    if (typeof(optimoveSDK) != "undefined") {
        if (samIsUserloggedIn() == true) {
            optimoveSDK.API.reportEvent('placed_order', {});
        }
    }

}

//EVENT: set_email (Not called from GTM)
function samOptimove_Report_Set_Email_Event(userEmail, userPhone, userProfession) {
    var samSetEmailPara = {
        email: userEmail,
        phone: userPhone,
        profession: userProfession
    }
    if (typeof(optimoveSDK) != "undefined") {
        optimoveSDK.API.reportEvent('set_email_event',samSetEmailPara);
    }
}

//EVENT: account_registration (Not called from GTM)
function samOptimove_Report_Account_Registration(userEmail, userBrand, userSource) {
    var samAccRegPara = {
        email: userEmail,
        brand: userBrand,
        source: userSource   
    }
    if (typeof(optimoveSDK) != "undefined") {
        optimoveSDK.API.reportEvent('account_registration',samAccRegPara); 
    }
    
}

//CART PAGE: Auto Login From Email Link
if (window.location.href.toLocaleLowerCase().indexOf('/cart?pmreqlogin=y') > 0) {
    if (samIsUserloggedIn() == false) {
        $("#samHeaderTop_SignInLink").trigger("click");
    }
}

//REGISTRATION SUCCESSFUL LANDING PAGE (DX-1999 STAGE ONLY)
if (window.location.href.toLocaleLowerCase().indexOf('/cgbcacc?pamode=*chng&pmnew=y&pmsub=y') >= 0) {
    samOptimove_Report_Account_Registration($("#SIEMAL").val(), "USP", "Create Account Page");    //Send account_registration event to Optimove
    samOptimove_Report_Set_Email_Event($("#SIEMAL").val(),'',$("#desktopProfessionValue").html());  //Send set_email event to Optimove
}
/* :::::::::::::::: END :::::::::::::::: */






/* :::::::::::::::: MODIFY STOCK MESSAGES FOR ALL PAGES :::::::::::::::: */

samStockMessageABTest();

function samStockMessageABTest() {

    if (document.getElementsByClassName('stocktooltip').length > 0) {
        for (var i = 0; i < document.getElementsByClassName('stocktooltip').length; i++) {

            //console.log("ORIGINAL MESSAGE: " + document.getElementsByClassName('stocktooltip')[i].innerText);   //Original Stock Message

            if (
                (document.getElementsByClassName('stocktooltip')[i].innerText.toLowerCase().indexOf("in stock, order now") >= 0) || 
                (document.getElementsByClassName('stocktooltip')[i].innerText.toLowerCase().indexOf("in stock, available next day") >= 0) ||
                (document.getElementsByClassName('stocktooltip')[i].innerText.toLowerCase().indexOf("in stock! usually ships within 24 hours") >= 0)
            ) {
                document.getElementsByClassName('stocktooltip')[i].style.color = 'green';
                document.getElementsByClassName('stocktooltip')[i].style.fontWeight = '700';
                document.getElementsByClassName('stocktooltip')[i].style.fontStyle = 'italic';
                document.getElementsByClassName('stocktooltip')[i].style.textTransform = 'capitalize';
                document.getElementsByClassName('stocktooltip')[i].innerHTML = "In Stock! Usually ships within 24 hours";
            } else {

                document.getElementsByClassName('stocktooltip')[i].style.color = 'red';
                document.getElementsByClassName('stocktooltip')[i].style.fontWeight = '700';
                document.getElementsByClassName('stocktooltip')[i].style.fontStyle = 'italic';
                document.getElementsByClassName('stocktooltip')[i].style.textTransform = 'capitalize';

                if (document.getElementsByClassName('stocktooltip')[i].innerText.toLowerCase().indexOf("temporarily out of stock") >= 0) {
                    
                    //Extract Date from the message
                    var tmpStr = document.getElementsByClassName('stocktooltip')[i].innerText;
                    if (tmpStr.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g)) {
                        var samTmpExtractedDate = tmpStr.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g);
                        if (samTmpExtractedDate.length == 1) {
                            var samShippingDate = new Date(samTmpExtractedDate[0]); //Get Shipped Date
                            document.getElementsByClassName('stocktooltip')[i].innerHTML = "Ships as soon as available. Estimated ship date " + samShippingDate.toLocaleDateString();
                        } 
    
                    } else {
                        //No estimated shipped date => Show Original message
                        document.getElementsByClassName('stocktooltip')[i].innerHTML = "Ships as soon as available.";
                    }

                } else if (document.getElementsByClassName('stocktooltip')[i].innerText.toLowerCase().indexOf("special order item") >= 0) {
                    document.getElementsByClassName('stocktooltip')[i].style.color = 'green';
                    document.getElementsByClassName('stocktooltip')[i].innerHTML = "Ships as soon as available.";
                } else if (document.getElementsByClassName('stocktooltip')[i].innerText.toLowerCase().indexOf("this item is no longer available") >= 0) {
                    document.getElementsByClassName('stocktooltip')[i].innerHTML = "Out of stock.";
                } else {
                    //Nothing Yet
                }

                
            }
        }
    }


    /* Update See Price In Cart Message */
    if (document.getElementsByName("PAGETYPE").length > 0) {
        if (document.getElementsByName("PAGETYPE")[0].value == "PDP") {
            if ($("#priceMsg .mapmesg").html() == "see price in cart") {
                $("#priceMsg .mapmesg").html("See Updated Price In Cart");
                $('.listprice').css("text-decoration","line-through");
            }
        }
    }
    /* END */

}

/* :::::::::::::::: END :::::::::::::::: */





/* :::::::::::::::: EMAIL SIGNUP :::::::::::::::: */

function samEmailSignup() {
    let samSendToGQ = true;

    var email = $("#mce-EMAIL").val();   
    if (email == '' || email =="undefined") {
        alert("Email is required");
        return;
    } else {
        var validateEmail = samValidateEmailAddress(email);
        if (validateEmail == false) {
            alert("Invalid Email Address");
            samSendToGQ = false;
        }
    }

    var profession = $("#samFooterProfession").val();   
    if (document.getElementById('samFooterProfession')) {
        var profession = $("#samFooterProfession").val();  
        if (profession == null) {
            alert("Profession is required");
            samSendToGQ = false;
        }
    }

    if (samSendToGQ == true) {

        samOptimove_Report_Account_Registration(email, 'USP', 'Footer');  //Send account_registration event to Optimove
        samOptimove_Report_Set_Email_Event(email, '', profession);   //Send set_email event to Optimove

        samOptimove_Report_Account_Registration(email, "USP", "Popup");    //Send account_registration event to Optimove
        samOptimove_Report_Set_Email_Event(email,'',profession);    //Send set_email event to Optimove

        $.ajax({
            url: '/cgi/CGBCXEMAL?' + 'SIMODE=SIGNUP&' + 'SISULIST=GEN&' + 'SISUEMAL=' + email + '&' + 'SISUPROF=' + profession + '&' + 'SISUSORC=FOOTER',
            type: 'post',
            async: false,
            success: function(result) {

                //"S":"Successful sign up"
                //"E":"Duplicate sign up found"
                //"W":"Welcome back"
                
                //setTimeout(function(){
                    if (result.toLowerCase().indexOf("successful sign up") >= 0) {
                        samShowPopupSubscriber("HONORED TO HAVE YOU, AND WELCOME TO THE FAMILY!");
                    } else if (result.toLowerCase().indexOf("duplicate sign up found") >= 0) {
                        samShowPopupSubscriber("You have already signed up. Thank You!");
                    } else if (result.toLowerCase().indexOf("welcome back") >= 0) {
                        samShowPopupSubscriber("Welcome back. Thank You For Resubscribing!");
                    } else {
                        alert("An error occured. Please try againn!");
                    }
    
                    $("#mce-EMAIL").val('');
                    $("#samFooterProfession").val('');
                    
                //},1000);
            }
        })
    }
    

}

//Show Popup When Subscription Completed
function samShowPopupSubscriber(message) {

    showWait("B");
    setTimeout(function() {
        $("#samPopupSubscriberForm").css({
            "display": "block"
        });

        $("#samPopupSubscriberForm h2").html(message);

        $("#samPopupSubscriberForm img").attr('src','/css/sam/opt-in-campaign/USP_SignUp_Confirm.jpg');

        hideWait();
    }, 500); 
}
function samClosePopupSubscriber() {
    $("#samPopupSubscriberForm").css({
        "display": "none"
    });
}

/* :::::::::::::::: END :::::::::::::::: */





/* :::::::::::::::: MOBILE MENU - ALLOW ONLY ONE EXPANDABLE :::::::::::::::: */

var samMobileMenuSidebar = $('#mobile-sidebar .subnav');
samMobileMenuSidebar.on('show.bs.collapse','.collapse', function() {
    samMobileMenuSidebar.find('.collapse.in').collapse('hide');
});
$('#mobile-sidebar .subnav .subnav__l2--header').click(function(){
    if (document.getElementById('mobile-sidebar')) {
        document.getElementById('mobile-sidebar').scrollTo(0,0);
    }
});

/* :::::::::::::::: END :::::::::::::::: */











/* :::::::::::::::::::::::::::::::: DOCUMENT READY :::::::::::::::::::::::::::::::: */

$(document).ready(function(){


    /* :::::::::::::::: SHOW SIGNIN WRAPPER AT TOP RIGHT (HEADER SECTION) :::::::::::::::: */
    // TODO REMOVE .samHeaderTop_SignIn AFTER JULY 2024

    $(".samHeaderTop_Status, .samHeaderTop_SignIn, #samHeaderTop_SignInIcon").on("mouseover",function(){
        if (samIsUserloggedIn() == true) {
            $("#samHeaderTop_AccountDiv").show(0);
        } else {
            $("#samHeaderTop_SignInDD").show(0);
        }
    });
    $(".samHeaderTop_Status, .samHeaderTop_SignIn, #samHeaderTop_SignInIcon").on("mouseout",function(){
        if (samIsUserloggedIn() == true) {
            $("#samHeaderTop_AccountDiv").hide(0);
        } else {
            $("#samHeaderTop_SignInDD").hide(0);
        }
    });
    //END TODO

    /* :::::::::::::::: END :::::::::::::::: */






    /* :::::::::::::::: RETURN TO TOP BUTTON :::::::::::::::: */

    if ($('.desktop-header').css("display") == "block") {
        if (document.getElementById('SamReturnToTop')) {
            if (document.getElementById('samUSPHeaderLogo')) {
                var samGallsLogoObserver = new IntersectionObserver(function(entries) {
                    if(entries[0].isIntersecting === true) {
                        document.getElementById('SamReturnToTop').style.display = "none";
    
                    } else {  
                        document.getElementById('SamReturnToTop').style.display = "block";
                    } 
                }, { threshold: [0] });
                samGallsLogoObserver.observe(document.getElementById("samUSPHeaderLogo"));
            }
        }
    } else {
        if (document.getElementById('SamReturnToTop')) {
            if (document.getElementById('samUSPHeaderLogo')) {
                var samGallsLogoObserver = new IntersectionObserver(function(entries) {
                    if(entries[0].isIntersecting === true) {
                        document.getElementById('SamReturnToTop').style.display = "none";
    
                    } else {  
                        document.getElementById('SamReturnToTop').style.display = "block";
                    } 
                }, { threshold: [0] });
                samGallsLogoObserver.observe(document.getElementById("samUSPHeaderLogo"));
            }
        }
    } 

    /* :::::::::::::::: END :::::::::::::::: */





    /* :::::::::::::::: FLOATING CHECKOUT BUTTON :::::::::::::::: */
    
    if (document.getElementsByName("PAGETYPE").length > 0) {
        if (document.getElementsByName("PAGETYPE")[0].value == "CHECKOUT") {
            if (document.getElementById("ProceedToCheckout")) {

                //Add CheckOut ButtonLet
                document.getElementById('SamFloatingCheckOut').innerHTML = '<a style="margin-top: 15px;" class="btn btn_sm btn--orange btn-block" href="/checkout">Checkout</a>';

                
                //Observe CheckOut Button
                var samCheckOutBtnObserver = new IntersectionObserver(function(samEntry) {
                    if(samEntry[0].isIntersecting === true) {
                        //CheckOut button is visible (element and viewport are overlapping)
                        document.getElementById('SamFloatingCheckOut').classList.remove("samShowCheckOutButtonBottom");                    
                    } else {  
                        document.getElementById('SamFloatingCheckOut').classList.add("samShowCheckOutButtonBottom"); 
                        if (document.getElementById('SamReturnToTop')) {
                            document.getElementById('SamReturnToTop').style.bottom = "90px";
                        }
                    } 
                }, { threshold: [0] });
                samCheckOutBtnObserver.observe(document.getElementById("ProceedToCheckout"));
            }
        } 
    }

    /* :::::::::::::::: END :::::::::::::::: */






    /* :::::::::::::::: 2 OF 2 - COUPON NAVIGATION BAR (SHOW PROMO CODE APPLIED) :::::::::::::::: */

    if (samGetURLParam('PMSRCE') != "NOTFOUND") {

        let samSRCEFromURL = samGetURLParam('PMSRCE');
        let samCurrentSRCE = samGetCurrentSRCE();
        let samExistingSRCE =  $("#samTopInfoBarDiv").html().substring(10,$("#samTopInfoBarDiv").html().length);

        if (samSRCEFromURL != "") {
            if (
                (samSRCEFromURL == samExistingSRCE) &&
                (samSRCEFromURL != samCurrentSRCE)
             ) {
                $("#samTopInfoBarDiv").html("Promo Code Applied");
                $("#samTopInfoBarDiv").slideToggle(500);

                //Wait 8 seconds and Close
                setTimeout(function(){
                    $("#samTopInfoBarDiv").slideToggle(500);
                },5000);
                sessionStorage.setItem("sam_current_srce",samSRCEFromURL); 
            }
        }

    } 

    /* :::::::::::::::: END :::::::::::::::: */






    /* :::::::::::::::: STICKY HEADER SEARCH BOX :::::::::::::::: */
    if (
        (window.location.href.toLocaleLowerCase().indexOf("cgbcsrpuc") < 0) &&
        (window.location.href.toLocaleLowerCase().indexOf("cgbccart?") < 0)
    ) {
        
        if (window.matchMedia("(min-width: 991px)").matches) {
            if ($("#samNewHeader_HeaderTopDiv").length > 0) {
                //Observe Main Menu
                var samMainMenuObserver = new IntersectionObserver(function(samEntry) {
                    if(samEntry[0].isIntersecting === true) {
                        document.getElementById('samNewHeader_HeaderTopDiv').classList.remove("header-top-sticky");                    
                        if (document.querySelector('.samTopNavBar')) {
                            document.querySelector('.samTopNavBar').classList.remove('anouncement-top-sticky');
                        }
                    } else {  
                        document.getElementById('samNewHeader_HeaderTopDiv').classList.add("header-top-sticky"); 
                        if (document.querySelector('.samTopNavBar')) {
                            document.querySelector('.samTopNavBar').classList.add('anouncement-top-sticky');
                        }
                    } 
                }, { threshold: [0] });
                samMainMenuObserver.observe(document.getElementById("navigation"));
            }
        } else {
            if ($("#mobilesearchDiv").length > 0) {
                //Observe Searchbox
                var samSearchBoxObserver = new IntersectionObserver(function(samEntry) {
                    if(samEntry[0].isIntersecting === true) {
                        document.getElementById('mobilesearchDiv').classList.remove("mobilesearchDiv-sticky");                    
                        if (document.querySelector('.samTopNavBar')) {
                            document.querySelector('.samTopNavBar').classList.remove('anouncement-top-sticky');
                        }
                    } else {  
                        document.getElementById('mobilesearchDiv').classList.add("mobilesearchDiv-sticky"); 
                        if (document.querySelector('.samTopNavBar')) {
                            document.querySelector('.samTopNavBar').classList.add('anouncement-top-sticky');
                        }
                    } 
                }, { threshold: [0] });
                samSearchBoxObserver.observe(document.getElementById("samHeaderTop"));
            }
        }
    }
    
    /* :::::::::::::::: END :::::::::::::::: */






    /* :::::::::::::::: 1 of 2: EXIT INTENT :::::::::::::::: */
    // samToggleExitIntent();
    /* :::::::::::::::: END :::::::::::::::: */



    /* :::::::::::::::: 1 of 2: NEW POPUP SUBSCRIBER :::::::::::::::: */
    samNPSStart();
    /* :::::::::::::::: END :::::::::::::::: */



    /* :::::::::::::::: MODIFY VIP TEXT PROGRAM :::::::::::::::: */
     $("#000000000000192L2 li").last().html(
        '<a onclick="samCloseMobileMenuNav();samShowNPS()">VIP Text Program</a>'
    )
    /* :::::::::::::::: END :::::::::::::::: */


});

/* :::::::::::::::::::::::::::::::: END DOCUMENT READY :::::::::::::::::::::::::::::::: */










/* :::::::::::::::: 1 OF 2 - COUPON NAVIGATION BAR (SHOW PROMO CODE APPLIED) :::::::::::::::: */

function samGetURLParam(paraName) {
    if (window.location.href.toLocaleUpperCase().indexOf(paraName+"=") > 0) { 
        var results = new RegExp('[\?&]' + paraName + '=([^&#]*)').exec(window.location.href);
        return results[1] || "";    //Will Return Empty if no value
    } else {
        return "NOTFOUND";  //If no Para Name found
    }
   
}
function samGetCurrentSRCE() {
    if (sessionStorage.getItem("sam_current_srce") !== null) {
        return sessionStorage.getItem("sam_current_srce");   
    } else {
        return "NOTFOUND";
    }
}

/* :::::::::::::::: END :::::::::::::::: */





/* :::::::::::::::: LEFT INFO MESSAGE AT TOP HEADER (CAROUSEL) :::::::::::::::: */

if (document.getElementById('samSRCEMSG')) {

    var samSRCEMSG = document.getElementById('samSRCEMSG').innerHTML.split(";");
    if (document.getElementById('samNavBarSection')) {
        var samSRCEMSG_Counter = 0;
        for (var i = 0; i < samSRCEMSG.length; i++) {
            if ($.trim(samSRCEMSG[i]) != '') {
                document.getElementById('samNavBarSection').innerHTML +=
                '<div class="samSRCE_Item">' + $.trim(samSRCEMSG[i]) + '</div>';
                samSRCEMSG_Counter++;
            }
        }

        //If only one item
        if (samSRCEMSG_Counter == 1) {
            $("#samNavBarSection").addClass("samSingleSRCE");
        }
    }
    
    $('#samNavBarSection').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      dots: false,
      pauseOnHover: true
    });
}

/* :::::::::::::::: END :::::::::::::::: */






/* :::::::::::::::: SHOW 99+ FOR CART ITEMS :::::::::::::::: */

if ($(".cart--total").length > 0) {
    if (parseInt($(".cart--total").html()) > 99) {
        $(".cart--total").html("99+");
    }
}

/* :::::::::::::::: END :::::::::::::::: */




/* :::::::::::::::: ADD CARD CAROUSEL TO A DIV :::::::::::::::: */

function samAddCardCarousel(divIDClass,arrProducts) {
	document.getElementById(divIDClass).innerHTML = '<div class="carousel ' + divIDClass + '">&nbsp;</div>';
	for (var i = 0; i < arrProducts.length; i++) {
		document.getElementsByClassName(divIDClass)[0].innerHTML +=
		'<div><div class="card">'+
		'	<div class="card-header">'+
		'		<a href="'+ arrProducts[i][6] + '"><img data-lazy src="/css/ajax-loader2.jpg" data-original="' + arrProducts[i][2] + '"></a>'+
		'	</div>'+
		'	<div class="card-body">'+
		'		<div class="card-content">'+
		'			<div class="card-title"><a href="'+ arrProducts[i][6] + '">' + arrProducts[i][1] + '</a></div>'+
		'			<div class="flex-grid">'+               
		'				<div class="card-brand">' + arrProducts[i][3] + '</div>'+
		'				<div class="card-rating">'+ arrProducts[i][5] + '</div>'+
		'			</div>'+
		'			<div class="card-price">'+
		'				<span>'+ arrProducts[i][4] + '</span>'+
		'			</div>'+
		'			<div>'+
		'				<a class="card-button" href="'+ arrProducts[i][6] + '">Shop Now</a>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+
		'</div></div>';
	}
}

function samGetProducts(samKeyword,samProdID,samProdTotal,samProdSort,samDivID) {

	var samArrProdList = [];
	
	$.ajax({
		url: "/CGBCSRCH",
		data: { 
            SISRCH: samKeyword, 
			SIWTNO: samProdID, 
			SIIPPG: samProdTotal, 
			SISORT: samProdSort,
			SIAJAXMODE: "Y",
			SIRFNO: 1,
			SIAJAXACTN: "FILTER" 
		},
		cache: false,
		type: "get",
		dataType: "html",
		success:
			function (data) { 

                //console.log(data);

                //All Required Variables
                var samTmpStyle = data.match(/<span class="samSRCHResult_Style">(.*)/g);     	//All STYLES
                var samTmpTitle = data.match(/<span class="samSRCHResult_Title">(.*)/g);     	//All TITLES
                var samTmpImage = data.match(/<span class="samSRCHResult_Image">(.*)/g);     	//All IMAGES
                var samTmpBrand = data.match(/<span class="samSRCHResult_Brand">(.*)/g);     	//All BRANDS
                var samTmpPrice = data.match(/<span class="samSRCHResult_Price">(.*)/g);     	//All PRICES
                var samTmpRating = data.match(/<span class="samSRCHResult_Ratings">(.*)/g);     //All RATINGS
                var samTmpURL = data.match(/<span class="samSRCHResult_Href">(.*)/g);     //All URL

                for (var i = 0; i < samTmpStyle.length; i++) {

                    samTmpStyle[i] = samTmpStyle[i].substring(34,samTmpStyle[i].length - 7);
                    samTmpTitle[i] = samTmpTitle[i].substring(34,samTmpTitle[i].length - 7);
                    samTmpImage[i] = samTmpImage[i].substring(34,samTmpImage[i].length - 7);
                    samTmpBrand[i] = samTmpBrand[i].substring(34,samTmpBrand[i].length - 7);
                    samTmpPrice[i] = samTmpPrice[i].substring(34,samTmpPrice[i].length - 7).replace(/<br>/g, "");;
                    samTmpRating[i] = samTmpRating[i].substring(36,samTmpRating[i].length);
                    samTmpURL[i] = samTmpURL[i].substring(33,samTmpURL[i].length - 7);

                    samArrProdList.push(
                    [
                        samTmpStyle[i],
                        samTmpTitle[i],
                        samTmpImage[i],
                        samTmpBrand[i],
                        samTmpPrice[i],
                        samTmpRating[i],
                        samTmpURL[i]
                    ]);

                }

                samAddCardCarousel(samDivID,samArrProdList);

                $('.' + samDivID).slick({
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
                            slidesToShow: 3,
                            slidesToScroll: 2,
                            speed: 500,
                        }
                    }
                    ]
                });

                samAddLazyLoadToImg();  //Add Lazy Load;

			}  
	});
	
}

/* :::::::::::::::: END :::::::::::::::: */







/* :::::::::::::::: 2 of 2: EXIT INTENT :::::::::::::::: */

function samToggleExitIntent() {
    
    if (
        (window.location.href.toLocaleLowerCase().indexOf('cgbccart') < 0) &&
        (window.location.href.toLocaleLowerCase().indexOf('cgbcsrpuc') < 0) &&
        (window.location.href.toLocaleLowerCase().indexOf('/checkout') < 0)
    ) {
    
        //First Time => No LS yet
        if (samGetLS_Value("shown_exit_intent") == null) {
            samSetLSWithExpiry("shown_exit_intent", "no");
        } else {
            
            let samExpiredDate = samGetLS_Expiry("shown_exit_intent");
            let samTodayDate = Date.now();
            
            //console.log("Expired Date: " + samExpiredDate);
            //console.log("Today Date: " + samTodayDate);
    
            if (samTodayDate > samExpiredDate) {
                //EXPIRED
                samSetLSWithExpiry("shown_exit_intent", "no");
            } else {
                //NOT EXPIRED YET
            }
    
        }
    
        //For Desktop
        document.querySelector("body").addEventListener("mouseleave", (event) => {
            //Make sure the LS exists
            if (samGetLS_Value("shown_exit_intent") !== null) {

                if ($("#PopupSignupForm_0").length < 1) {
                    if ((event.clientY <= 0) && (samGetLS_Value("shown_exit_intent") == "no")) {
    
                        if (samEnoughTimeSession() == true) {
                            //Add overlay background
                            var samBGOverlay = document.createElement("div");
                            samBGOverlay.setAttribute("id", "samWaitBckgd");
                            document.body.appendChild(samBGOverlay);
            
                            $("#samExitIntentForm").css({
                                "display":  "block"
                            });
                            $("#samExitIntentForm").html('<div class="samExitIntentTitle">Before You Leave</div><span id="samExitIntentCloseBtn" onclick="samCloseExitIntentDiv()">Close</span><iframe width="100%" height="100%" src="https://app.smartsheet.com/b/form/4156e89c6306462ca73016320aab71a9?collection_point=uspcom&use_case=visitorexit"></iframe>');
            
                            samSetLSWithExpiry("shown_exit_intent", "yes");
                        }
                        
                    } 
                }         
                       
            } 
        });
    
        //For Mobile and Tablets
        if (screen.width < 1024) {
            $(window).on('blur', function () {
    
                if ($("#PopupSignupForm_0").length < 1) {
                    //Make sure the LS exists
                    if (samGetLS_Value("shown_exit_intent") !== null) {
                        if (samGetLS_Value("shown_exit_intent") == "no") {
    
                            if (samEnoughTimeSession() == true) {
                                //Add overlay background
                                var samBGOverlay = document.createElement("div");
                                samBGOverlay.setAttribute("id", "samWaitBckgd");
                                document.body.appendChild(samBGOverlay);
        
                                $("#samExitIntentForm").css({
                                    "display":  "block"
                                });
                                $("#samExitIntentForm").html('<div class="samExitIntentTitle">Before You Leave</div><span id="samExitIntentCloseBtn" onclick="samCloseExitIntentDiv()">Close</span><iframe width="100%" height="100%" src="https://app.smartsheet.com/b/form/4156e89c6306462ca73016320aab71a9?collection_point=uspcom&use_case=visitorexit"></iframe>');
        
                                samSetLSWithExpiry("shown_exit_intent", "yes");
                            }
                            
                        } 
                    } 
                }
            });
        }
    
        //Outside of Exit Intent Div Is Clicked
        document.addEventListener('mouseup', function(e) {
            samCloseExitIntentDiv();
        });
    
    }

}

function samSetLSWithExpiry(lsName, value) {

    //Date.now() will be in milliseconds
    //86400000 is One Day (24 hours)
    let samExpiredDate = Date.now() + (86400000 * 15); //15 days from now

    const item = {
        value: value,
        expiry: samExpiredDate
    }   
    localStorage.setItem(lsName, JSON.stringify(item));
}

function samGetLS_Value(lsName) {
    const itemStr = localStorage.getItem(lsName);
	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);
	return item.value;
}

function samGetLS_Expiry(lsName) {
    const itemStr = localStorage.getItem(lsName);
	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);
	return item.expiry;
}

function samCloseExitIntentDiv() {
    if ($("#samExitIntentForm").css("display") != "none") {
        $("#samExitIntentForm").css({
            "display": "none"
        });


        //Remove Overlay background
        $("#samWaitBckgd").hide();
        $("#samWaitBckgd").remove();

    }
}

samSetSessionTime();
function samSetSessionTime() {
    if (samGetSessionTime() == null) {
        // (86400000/24)/60) is 1 minute
        sessionStorage.setItem("sam_start_time", Date.now() + ((86400000/24)/60));
    }
}

function samGetSessionTime() {
    if (sessionStorage.getItem("sam_start_time") !== null) {
        return sessionStorage.getItem("sam_start_time");
    } else {
        return null;
    }
}

function samEnoughTimeSession() {
    if (sessionStorage.getItem("sam_start_time") !== null) {

        let samShowableTime = sessionStorage.getItem("sam_start_time");
        let samCurrentTime = Date.now();

        if (samCurrentTime > samShowableTime) {
            return true;
        } else {
            return false;
        }

    }
}

/* :::::::::::::::: END :::::::::::::::: */






/* :::::::::::::::: CREATE UNIQUE META TITLES :::::::::::::::: */

//Account Page
if (window.location.href.toLocaleLowerCase() == 'https://www.uspatriottactical.com/cgbcacc') {
    document.title = "Profile | Manage Your Account Information - U.S. Patriot";
} 
//Order Status
else if (
    (window.location.href.toLocaleLowerCase() == 'https://www.uspatriottactical.com/order-status') ||
    (window.location.href.toLocaleLowerCase() == 'https://www.uspatriottactical.com/cgbclmoh')
) {
    document.title = "Order History | View Your Past Purchases - U.S. Patriot";
} 
//Your Shopping List
else if (window.location.href.toLocaleLowerCase() == 'https://www.uspatriottactical.com/cgbcmrsl') {
    document.title = "Shopping Lists | Organize and Manage Your Saved Items - U.S. Patriot";
}
//Cart Page
else if (
    (window.location.href.toLocaleLowerCase() == 'https://www.uspatriottactical.com/cart') ||
    (window.location.href.toLocaleLowerCase() == 'https://www.uspatriottactical.com/cgbccart')
) {
    document.title = "Cart | View and Manage Your Items - U.S. Patriot"; 
}
//Checkout Page
else if (
    (window.location.pathname.toLocaleLowerCase() == '/cgbccart') ||
    (window.location.pathname.toLocaleLowerCase() == '/cgbcsrpuc') ||
    (window.location.href.toLocaleLowerCase() == 'https://www.uspatriottactical.com/checkout')
) {
    document.title = "Secure Checkout | Complete Your Purchase Today - U.S. Patriot";
}

/* :::::::::::::::: END :::::::::::::::: */





/* :::::::::::::::: 2 of 2: NEW POPUP SUBSCRIBER :::::::::::::::: */

function samNPSStart() {

    if (window.location.href.toLocaleLowerCase().indexOf('showepscapture=y') >=0) {
        setTimeout(function() {
            samShowNPS();
        }, 1000);
    } else {
        //Avoid these pages
        if (
            (window.location.href.toLocaleLowerCase().indexOf('cgbccart') < 0) &&
            (window.location.href.toLocaleLowerCase().indexOf('/cart') < 0) &&
            (window.location.href.toLocaleLowerCase().indexOf('cgbcsrpuc') < 0) &&
            (window.location.href.toLocaleLowerCase().indexOf('/checkout') < 0)
        ) {

            //First Time => No LS yet
            if (samGetLS_Value("shown_new_popup") == null) {
                samSetLSWithExpiryInDays("shown_new_popup", "no", 60);
                sessionStorage.setItem("sam_page_1", window.location.pathname.toLocaleLowerCase());
            } else {
                //Not First Time

                //Check for Expiry => If Expired => Reset
                let samExpiredDate = samGetLS_Expiry("shown_new_popup");
                let samTodayDate = Date.now();
                if (samTodayDate > samExpiredDate) {
                    //EXPIRED => Reset
                    // samSetLSWithExpiryInDays("shown_new_popup", "no", 60);
                    localStorage.removeItem("shown_new_popup");
                } else {
                    //NOT EXPIRED YET
                }
            }

            //Make sure the LS exists
            if (samGetLS_Value("shown_new_popup") !== null) {
                if (samGetLS_Value("shown_new_popup") == "no") {

                    if (sessionStorage.getItem("sam_page_1") !== null) {
                        if (sessionStorage.getItem("sam_page_2") == null) {
                            let samPageOne = sessionStorage.getItem("sam_page_1");
                            if (window.location.pathname.toLocaleLowerCase() != samPageOne) {
                                //Create Page
                                sessionStorage.setItem("sam_page_2", window.location.pathname.toLocaleLowerCase());
                            }
                        } else {
                            //Create Page 3
                            let samPageOne = sessionStorage.getItem("sam_page_1");
                            let samPageTwo = sessionStorage.getItem("sam_page_2");
                            if (
                                (window.location.pathname.toLocaleLowerCase() != samPageOne) &&
                                (window.location.pathname.toLocaleLowerCase() != samPageTwo)
                            ) {
                                //Page 3 => Show Popup
                                setTimeout(function() {
                                    samShowNPS();
                                    samSetLSWithExpiryInDays("shown_new_popup", "yes", 60); //Done, not showing until it is expired.
                                }, 2000);
                                
                            }
                        }
                    } 
                } 
            }

        }
    }

}

//Show New Popup Subscriber (DX-0516 STAGE ONLY)
function samShowNPS() {
    samCloseNPS_ReopenDiv();
    $("#samNPS_ClaimCode").hide(0);
    $("#samNPS_Overlay").show(0);
    $("#samNPS_Wrapper").show(0);
    $("#samNPS_Content").slideDown(500);   //slideDown => Show
    if (screen.width < 992) {
        $("html").css("overflow-y","hidden");
    }
    $("#samNPS_CloseDiv img").attr('src','/images/popup_subscriber/x_white.svg');

    // //Outside of New Popup Is Clicked
    document.addEventListener('mouseup', function(e) {
        samCloseNPS_ClickedOutside();
    });

}

function samCloseNPS() {
    if ($("#samNPS_Overlay").css("display") != "none") {
        $("#samNPS_Content").slideUp(500); //slideUp => Hide
        $("#samNPS_Wrapper").hide(500);
        $("#samNPS_Overlay").hide(0);
        if (screen.width < 992) {
            $("html").css("overflow-y","scroll");
        } 

        //Enable Reopen Div
        setTimeout(function() {
            $("#samNPS_ReopenDiv img").attr('src','/images/popup_subscriber/x_white.svg');
            $("#samNPS_ReopenDiv").show(500);
        }, 2000); 
        
    }
}

function samCloseNPS_ClickedOutside() {
    if ($("#samNPS_Overlay").css("display") != "none") {
        //Outside Is Clicked
        document.addEventListener('mouseup', function(e) {
            if (document.getElementById('samNPS_Overlay').contains(e.target)) {
                $("#samNPS_Content").slideUp(500); //slideUp => Hide
                $("#samNPS_Wrapper").hide(500);
                $("#samNPS_Overlay").hide(0);
                if (screen.width < 992) {
                    $("html").css("overflow-y","scroll");
                } 

                //Enable Reopen Div
                setTimeout(function() {
                    $("#samNPS_ReopenDiv img").attr('src','/images/popup_subscriber/x_white.svg');
                    $("#samNPS_ReopenDiv").show(500);
                }, 2000); 
            }
        });
    }
}

function samShowNPS_FromReopen() {
    samCloseNPS_ReopenDiv();
    samShowNPS();
}

function samCloseNPS_ClaimCode() {
    if ($("#samNPS_Overlay").css("display") != "none") {
        $("#samNPS_ClaimCode").slideToggle(500);
        $("#samNPS_Wrapper").hide(500);
        $("#samNPS_Overlay").hide(0);
        if (screen.width < 992) {
            $("html").css("overflow-y","scroll");
        }
    }
}

function samCloseNPS_ReopenDiv() {
    $("#samNPS_ReopenDiv").hide(500);  
}

/* From CGBCHEAD.html */
function samNPSValidateInfo() {
    var email = $("#samNPSEmail").val(); 
    var profession = $("#samNPSProfession").val();
    var sms = $("#samNPSPhone").val(); 

    samNPSEmptyMessage();    //Message: Empty

    /* Case 1: (Email: NULL, Profession: NULL, SMS: NULL) */
    if (
        (email == '') && 
        (profession == null) &&
        (sms == '')
    ) {
        //Do Nothing
    }

    /* Case 2: (Email: NULL, Profession: NULL, SMS: YES) */
    else if (
        (email == '') && 
        (profession == null) &&
        (sms != '')
    ) {

        /* Wrong SMS Format */
        if (samValidatePhoneNumber(sms) == false) {
            alert("INVALID PHONE NUMBER..");
            $("#samNPSPhone").css("border","2px solid red");
        } 
        /* Correct SMS Format */
        else {
            //Check Existing SMS Subscriber
            $.ajax({
                url: '/cgi/CGBCXWEM?SISUSMS=' + sms,
                type: 'post',
                async: false,
                success: function(result) {
                    //New SMS Subscriber
                    if (result.toLocaleLowerCase().indexOf("new subscriber") > 0) {
                        samNPSShowMsgWithAnimation(
                            '<div class="samNPSOutput_SmallerLH">'+
                            '   ALMOST THERE!<br>'+
                            '<b>ADD YOUR EMAIL AND PROFESSION TO CLAIM <span style="color:#c42033">15% OFF</span><b>'+
                            '</div>'
                        );
                        $("#samNPSPhone").css("border","2px solid green");
                    } else {
                        //Existing SMS Subscriber
                        var existingProfession = result.split(' - ')[1].replace(/"}/g, "");
                        samNPSAutoFillEmail(existingProfession);
                        
                        samNPSShowMsgWithAnimation(
                            '<div class="samNPSOutput_SmallerLH">'+
                            '   ALMOST THERE!<br>'+
                            '<b>ADD YOUR EMAIL TO CLAIM <span style="color:#c42033">15% OFF</span><b>'+
                            '</div>'
                        );
                        $("#samNPSProfession").css("border","2px solid green");
                        $("#samNPSPhone").css("border","2px solid green");
                    }
                }
            });
        }

    }

    /* Case 3: (Email: NULL, Profession: YES, SMS: YES) */
    else if (
        (email == '') && 
        (profession != null) &&
        (sms != '')
    ) {

        /* Wrong SMS Format */
        if (samValidatePhoneNumber(sms) == false) {
            alert("INVALID PHONE NUMBER..");
            $("#samNPSPhone").css("border","2px solid red");
        } 
        /* Correct SMS Format */
        else {
            //Profession exists => No need to check for existing one.
            samNPSShowMsgWithAnimation(
                '<div class="samNPSOutput_SmallerLH">'+
                '   ALMOST THERE!<br>'+
                '<b>ADD YOUR EMAIL TO CLAIM <span style="color:#c42033">15% OFF</span><b>'+
                '</div>'
            );
            $("#samNPSProfession").css("border","2px solid green");
            $("#samNPSPhone").css("border","2px solid green");
        }
    }

    /* Case 4: (Email: NULL, Profession: YES, SMS: NULL) */
    else if (
        (email == '') && 
        (profession != null) &&
        (sms == '')
    ) {

        samNPSShowMsgWithAnimation(
            '<div class="samNPSOutput_SmallerLH">'+
            '   ALMOST THERE!<br>'+
            '<b>ADD YOUR EMAIL TO CLAIM <span style="color:#c42033">10% OFF</span><b>'+
            '</div>'
        );
        $("#samNPSProfession").css("border","2px solid green");
    }

    /* Case 5: (Email: YES, Profession: YES, SMS: YES) */
    else if (
        (email != '') && 
        (profession != null) &&
        (sms != '')
    ) {

        //Validate Email Address
        var validateEmail = samValidateEmailAddress(email);
        if (validateEmail == false) {
            $("#samNPSEmail").css("border","2px solid red");
            $("#samNPSProfession").css("border","2px solid green");
            $("#samNPSPhone").css("border","2px solid green");
            alert("INVALID EMAIL ADDRESS..");
        } else {
            
            //Check Existing SMS Subscriber
            $.ajax({
                url: '/cgi/CGBCXWEM?SISUSMS=' + sms,
                type: 'post',
                async: false,
                success: function(result) {
                    //New SMS Subscriber
                    if (result.toLocaleLowerCase().indexOf("new subscriber") > 0) {
                        samNPSShowMsgWithAnimation(
                            '<div>'+
                            '   <b>Congrats! You\'ve earned:</b><br><b><span class="samNPSOutput_Value">15% OFF</span><b>'+
                            '</div>'
                        );
                    } else {

                        //Existing SMS Subscriber => Check Existing Email Subscriber
                        $.ajax({
                            url: '/cgi/CGBCXWEM?SISUEMAL=' + email,
                            type: 'post',
                            async: false,
                            success: function(result) {
                                //New Subscriber
                                if (result.toLocaleLowerCase().indexOf("new subscriber") > 0) {
                                    samNPSShowMsgWithAnimation(
                                        '<div>'+
                                        '   <b>Congrats! You\'ve earned:</b><br><b><span class="samNPSOutput_Value">10% OFF</span><b>'+
                                        '</div>'
                                    );
                                } else {
                                    //Existing Email Subscriber => Compare Profession value between backend table and popup
                                    var existingProfession = result.split(' - ')[1].replace(/"}/g, "");
                                    var valueFromPopup = $('#samNPSProfession').val();
                                    if (existingProfession.toLocaleLowerCase() == valueFromPopup.toLocaleLowerCase()) {
                                        samNPSShowMsgWithAnimation(
                                            '<div>'+
                                            '   <b>Welcome back! As an existing member, enjoy: </b><br><b><span class="samNPSOutput_Value">5% OFF</span><b>'+
                                            '</div>'
                                        );
                                    } else {
                                        samNPSShowMsgWithAnimation(
                                            '<div>'+
                                            '   <b>Welcome back! As an existing member, enjoy: </b><br><b><span class="samNPSOutput_Value">10% OFF</span><b>'+
                                            '</div>'
                                        );
                                    } 

                                }

                                $("#samNPSEmail").css("border","2px solid green");
                                $("#samNPSProfession").css("border","2px solid green");
                                $("#samNPSPhone").css("border","2px solid green");
                                $("#samNPSSubmit").removeClass('disabled');

                            }
                        });
                        

                        
                    }

                    $("#samNPSEmail").css("border","2px solid green");
                    $("#samNPSProfession").css("border","2px solid green");
                    $("#samNPSPhone").css("border","2px solid green");
                    $("#samNPSSubmit").removeClass('disabled');

                }
            });

        }
        
    }

    /* Case 6: (Email: YES, Profession: YES, SMS: NULL) */
    else if (
        (email != '') && 
        (profession != null) &&
        (sms == '')
    ) {

        //Validate Email Address
        var validateEmail = samValidateEmailAddress(email);
        if (validateEmail == false) {
            $("#samNPSEmail").css("border","2px solid red");
            $("#samNPSProfession").css("border","2px solid green");
            alert("INVALID EMAIL ADDRESS..");
        } else {

            //Check Existing Email Subscriber
            $.ajax({
                url: '/cgi/CGBCXWEM?SISUEMAL=' + email,
                type: 'post',
                async: false,
                success: function(result) {
                    //New Subscriber
                    if (result.toLocaleLowerCase().indexOf("new subscriber") > 0) {
                        samNPSShowMsgWithAnimation(
                            '<div>'+
                            '   <b>Congrats! You\'ve earned:</b><br><b><span class="samNPSOutput_Value">10% OFF</span><b>'+
                            '</div>'
                        );
                        
                    } else {
                        //Existing SMS Subscriber => Compare Profession value between backend table and popup
                        var existingProfession = result.split(' - ')[1].replace(/"}/g, "");
                        var valueFromPopup = $('#samNPSProfession').val();
                        if (existingProfession.toLocaleLowerCase() == valueFromPopup.toLocaleLowerCase()) {
                            samNPSShowMsgWithAnimation(
                                '<div>'+
                                '   <b>Welcome back! As an existing member, enjoy: </b><br><b><span class="samNPSOutput_Value">5% OFF</span><b>'+
                                '</div>'
                            );
                        } else {
                            samNPSShowMsgWithAnimation(
                                '<div>'+
                                '   <b>Welcome back! As an existing member, enjoy: </b><br><b><span class="samNPSOutput_Value">10% OFF</span><b>'+
                                '</div>'
                            );
                        } 
                    }

                    $("#samNPSEmail").css("border","2px solid green");
                    $("#samNPSProfession").css("border","2px solid green");
                    $("#samNPSSubmit").removeClass('disabled');
                    
                }
            });

        }
        
    }

    /* Case 7: (Email: YES, Profession: NULL, SMS: NULL) */
    else if (
        (email != '') && 
        (profession == null) &&
        (sms == '')
    ) {

        //Validate Email Address
        var validateEmail = samValidateEmailAddress(email);
        if (validateEmail == false) {
            $("#samNPSEmail").css("border","2px solid red");
            alert("INVALID EMAIL ADDRESS..");
        } else {
            //Check Existing Email Subscriber
            $.ajax({
                url: '/cgi/CGBCXWEM?SISUEMAL=' + email,
                type: 'post',
                async: false,
                success: function(result) {
                    //New Subscriber
                    if (result.toLocaleLowerCase().indexOf("new subscriber") > 0) {
                        samNPSShowMsgWithAnimation(
                            '<div class="samNPSOutput_SmallerLH">'+
                            '   ALMOST THERE!<br>'+
                            '<b>ADD YOUR PROFESSION TO CLAIM <span style="color:#c42033">10% OFF</span><b>'+
                            '</div>'
                        );
                        $("#samNPSEmail").css("border","2px solid green");
                    } else {
                        //Existing Subscriber
                        var existingProfession = result.split(' - ')[1].replace(/"}/g, "");
                        samNPSAutoFillEmail(existingProfession);
                        
                        samNPSShowMsgWithAnimation(
                            '<div>'+
                            '   <b>Welcome back! As an existing member, enjoy: </b><br><b><span class="samNPSOutput_Value">5% OFF</span><b>'+
                            '</div>'
                        );
                        $("#samNPSEmail").css("border","2px solid green");
                        $("#samNPSProfession").css("border","2px solid green");
                        $("#samNPSSubmit").removeClass('disabled');
                    }
                }
            });
        }

        
    }

    /* Case 8: (Email: YES, Profession: NULL, SMS: YES) */
    else if (
        (email != '') && 
        (profession == null) &&
        (sms != '')
    ) {

        //Validate Email Address
        var validateEmail = samValidateEmailAddress(email);
        if (validateEmail == false) {
            $("#samNPSEmail").css("border","2px solid red");
            $("#samNPSPhone").css("border","2px solid green");
            alert("INVALID EMAIL ADDRESS..");
        } else {

            //Check Existing SMS Subscriber
            $.ajax({
                url: '/cgi/CGBCXWEM?SISUSMS=' + sms,
                type: 'post',
                async: false,
                success: function(result) {
                    //New SMS Subscriber
                    if (result.toLocaleLowerCase().indexOf("new subscriber") > 0) {
                        samNPSShowMsgWithAnimation(
                            '<div class="samNPSOutput_SmallerLH">'+
                            '   ALMOST THERE!<br>'+
                            '<b>ADD YOUR PROFESSION TO CLAIM <span style="color:#c42033">15% OFF</span><b>'+
                            '</div>'
                        );
                        $("#samNPSEmail").css("border","2px solid green");
                        $("#samNPSPhone").css("border","2px solid green");
                    } else {
                        //Existing Subscriber
                        var existingProfession = result.split(' - ')[1].replace(/"}/g, "");
                        samNPSAutoFillEmail(existingProfession);


                        //After Autofill, codes below should never run unless there is issue with autofill
                        //Check Existing Email Subscriber
                        $.ajax({
                            url: '/cgi/CGBCXWEM?SISUEMAL=' + email,
                            type: 'post',
                            async: false,
                            success: function(result) {
                                //New Subscriber
                                if (result.toLocaleLowerCase().indexOf("new subscriber") > 0) {
                                    samNPSShowMsgWithAnimation(
                                        '<div>'+
                                        '   <b>Congrats! You\'ve earned:</b><br><b><span class="samNPSOutput_Value">10% OFF</span><b>'+
                                        '</div>'
                                    );
                                } else {
                                    //Existing Email Subscriber => Compare Profession value between backend table and popup
                                    var existingProfession = result.split(' - ')[1].replace(/"}/g, "");
                                    var valueFromPopup = $('#samNPSProfession').val();
                                    if (existingProfession.toLocaleLowerCase() == valueFromPopup.toLocaleLowerCase()) {
                                        samNPSShowMsgWithAnimation(
                                            '<div>'+
                                            '   <b>Welcome back! As an existing member, enjoy: </b><br><b><span class="samNPSOutput_Value">5% OFF</span><b>'+
                                            '</div>'
                                        );
                                    } else {
                                        samNPSShowMsgWithAnimation(
                                            '<div>'+
                                            '   <b>Welcome back! As an existing member, enjoy: </b><br><b><span class="samNPSOutput_Value">10% OFF</span><b>'+
                                            '</div>'
                                        );
                                    } 
                                }

                                $("#samNPSEmail").css("border","2px solid green");
                                $("#samNPSProfession").css("border","2px solid green");
                                $("#samNPSPhone").css("border","2px solid green");
                                $("#samNPSSubmit").removeClass('disabled');

                            }
                        });
                        
                        

                    }


                }
            }); 
            
        }
    }

 
}

/* From CGBCHEAD.html (DX-0516 STAGE ONLY) */
function samNPSValidateInfo_New() {
    var email = $("#samNPSEmail").val(); 
    var profession = $("#samNPSProfession").val();
    var sms = $("#samNPSPhone").val(); 

    samNPSEmptyMessage();    //Message: Empty
    samNPSValidateEmail_N_Phone();  //Validate Email Address and Phone Number  

 
}

/* (DX-0516 STAGE ONLY) */
function samNPSValidateEmail_N_Phone() {
    var email = $("#samNPSEmail").val(); 
    var sms = $("#samNPSPhone").val(); 
    var successValidation = true;

    //Validate Email
    if (samValidateEmailAddress(email) == false) {
        if (email != '') {
            $("#samNPSEmail").css("border","2px solid red");
            successValidation = false;
        }
    } 

    //Validate Phone Number
    if (samValidatePhoneNumber(sms) == false) {
        if (sms != '') {
            $("#samNPSPhone").css("border","2px solid red");
            successValidation = false;
        }
    } 

    if ((email == '') && (sms == '')) {
        $("#samNPSSubmit").addClass('disabled');
    } else if ((email == '') && (sms != '')) {
        $("#samNPSSubmit").addClass('disabled');
    } else if (successValidation == false) {
        $("#samNPSSubmit").addClass('disabled');
        samNPSShowMsgWithAnimation(
            '<div class="samASC_Notification samASC_Notification_Caution">'+
            '    <div class="samASC_Notification_Desc">'+
            '       Invalid Email or Phone Number!'+
            '    </div>'+
            '</div>'
        );
    } else {
        $("#samNPSSubmit").removeClass('disabled');
    }

}

function samNPSEmptyMessage() {
    $("#samNPSEmail").css("border","1px solid #dddddd");
    $("#samNPSProfession").css("border","1px solid #dddddd");
    $("#samNPSPhone").css("border","1px solid #dddddd");
    $("#samNPSOutput").html('');
    $("#samNPSOutput").hide(0);
    $("#samNPSSubmit").addClass('disabled');
}

function samNPSShowMsgWithAnimation(text) {
    $("#samNPSOutput").slideUp(0, function() {
        $(this).html(text).slideDown(500);
        //slideUp = Hide
        //slideDown = Show
    });
}

/* From CGBCHEAD.html */
function samNPSClaimCode() {

    //Not allowed to go through if button is disabled.
    if ($("#samNPSSubmit").hasClass('disabled') == true) {
        return;
    }

    /* Close Current Popup */
    $("#samNPS_Content").hide(0);
    $("#samNPS_Wrapper").hide(0);
    $("#samNPS_Overlay").hide(0);
    if (screen.width < 992) {
        $("html").css("overflow-y","scroll");
    }


    var email = $("#samNPSEmail").val(); 
    var profession = $("#samNPSProfession").val();
    var sms = $("#samNPSPhone").val(); 

    samOptimove_Report_Account_Registration(email, "USP", "Popup");    //Send account_registration event to Optimove
    samOptimove_Report_Set_Email_Event(email,sms,profession);    //Send set_email event to Optimove
    
    $.ajax({
        url: 
            '/cgi/CGBCXEMAL?'+
            'SIMODE=SIGNUP&'+
            'SISULIST=GEN&'+
            'SISUEMAL=' + email + '&'+
            'SISUPROF=' + profession + '&'+
            'SISUSMS='  + sms +'&'+
            'SISUSORC=SUMODAL',
        type: 'post',
        async: false,
         
        success: function(result) {

            //New Email => {"9M6OZH1Q":"New Email Sign Up 10% Off"}
            //Existing Email + New Profession => {"JDU5UK3L":"Profession Update 10% Off"}
            //New SMS => {"O4M5FYO8":"New SMS Sign Up 15% Off"}
            //Existing Email + Existing Profession (NO SMS) => {"GNYHSATJ":"Existing Subscriber – 5% Off"}
            //Existing Email + Existing Profession (Unsubscribed) =>

            var successCode = result.split('":"')[0].replace(/{"/g, "");
            var successDiscount = result.split('":"')[1];
            if (successDiscount.indexOf("10%") > 0) {
                successDiscount = "Apply & Shop 10% Off";
            } else if(successDiscount.indexOf("15%") > 0) {
                successDiscount = "Apply & Shop 15% Off";
            } else if(successDiscount.indexOf("5%") > 0) {
                successDiscount = "Apply & Shop 5% Off";
            } else {
                successDiscount = "Apply & Shop Now";
            }
            
            showWait("B");
            setTimeout(function() {
                $("#samNPS_Overlay").show(0);
                $("#samNPS_Wrapper").show(0);
                $("#samNPS_ClaimCode").slideToggle(500);
                if (screen.width < 992) {
                    $("html").css("overflow-y","hidden");
                }
                $("#samNPS_ClaimCode_CloseDiv img").attr('src','/images/popup_subscriber/x_white.svg');
                hideWait();

                //Source Code
                $("#samNPS_ClaimCode_Value").html(
                    '<div class="samNPSClaimValueDiv">' + successCode + '</div>'+      
                    '<div class="samNPSCopyDiv" onclick="samNPSClaimCodeCopied()"><img src="/images/popup_subscriber/copy.svg"></div>'
                );

                //Apply Button
                $("#samNPS_ClaimCode_ApplyBtn").val(successDiscount);

            }, 500); 
            
            
            
        }
    })

}

/* From CGBCHEAD.html (DX-0516 STAGE ONLY) */
function samNPSClaimCode_New() {

    //Not allowed to go through if button is disabled.
    if ($("#samNPSSubmit").hasClass('disabled') == true) {
        return;
    }

    /* Close Current Popup */
    $("#samNPS_Content").hide(0);
    $("#samNPS_Wrapper").hide(0);
    $("#samNPS_Overlay").hide(0);
    if (screen.width < 992) {
        $("html").css("overflow-y","scroll");
    }
    
    var email = $("#samNPSEmail").val(); 
    var profession = $("#samNPSProfession").val();
    var sms = $("#samNPSPhone").val(); 

    $.ajax({
        url: 
            '/cgi/CGBCXEMAL?'+
            'SIMODE=SIGNUP&'+
            'SISULIST=GEN&'+
            'SISUEMAL=' + email + '&'+
            'SISUPROF=' + profession + '&'+
            'SISUSMS='  + sms +'&'+
            'SISUSORC=SUMODAL',
        type: 'post',
        async: false,
         
        success: function(result) {

            //New Email => {"9M6OZH1Q":"New Email Sign Up 10% Off"}
            //Existing Email + New Profession => {"JDU5UK3L":"Profession Update 10% Off"}
            //New SMS => {"O4M5FYO8":"New SMS Sign Up 15% Off"}
            //Existing Email + Existing Profession (NO SMS) => {"GNYHSATJ":"Existing Subscriber – 5% Off"}
            //Existing Email + Existing Profession (Unsubscribed) =>

            var successDiscount = result.split('":"')[1];
            var samMessageTitle = "";
            var samMessageContent = "";
            
            //New Email Signup
            if (successDiscount.indexOf("New Email Sign Up") >= 0) {
                samMessageTitle = "Honored to Have You!";
                samMessageContent = "Thank you for signing up. Check your inbox for a 20% off coupon and enjoy exclusive deals and updates from us.";

                samOptimove_Report_Account_Registration(email, "Galls", "Popup");    //Send account_registration event to Optimove
                samOptimove_Report_Set_Email_Event(email,sms,profession);    //Send set_email event to Optimove

            } 
            //Existing Email => Profession Update
            else if(successDiscount.indexOf("Profession Update") >= 0) {
                samMessageTitle = "Thank You!";
                samMessageContent = "You have already signed up.";
            } 
            //New SMS Signup
            else if(successDiscount.indexOf("New SMS Sign Up") >= 0) {
                samMessageTitle = "Thank You!";
                samMessageContent = "You have already signed up.";
            } 
            //Existing Email => NO SMS
            else if(successDiscount.indexOf("Existing Subscriber") >= 0) {
                samMessageTitle = "Thank You!";
                samMessageContent = "You have already signed up.";
            } else {
                samMessageTitle = "Thank You!";
                samMessageContent = "";
            }

            samNPSDynamicMessage(samMessageTitle,samMessageContent);

            //Disable the smaller popup
            $("#samNPS_ReopenDiv").html('');
            
        }
    })


}

/* (DX-0516 STAGE ONLY) */
function samNPSDynamicMessage(samMessageTitle,samMessageContent) {
    showWait("B");
    setTimeout(function() {
        $("#samNPS_Overlay").show(0);
        $("#samNPS_Wrapper").show(0);
        $("#samNPS_ClaimCode").slideToggle(500);
        if (screen.width < 992) {
            $("html").css("overflow-y","hidden");
        }
        $("#samNPS_ClaimCode_CloseDiv img").attr('src','/images/popup_subscriber/x_white.svg');
        hideWait();

        $("#samNPS_ClaimCode_Value").hide(0);   //NO Longer Used
        $("#samNPS_ClaimCode_ApplyBtn").hide(0);    //No Longer Used

        $("#samNPS_ClaimCode_H2").html(samMessageTitle);
        $("#samNPS_ClaimCode label").html(samMessageContent);

    }, 500);
}

function samNPSClaimCodeCopied() {
    var samTextToCopy = $("#samNPS_ClaimCode_Value .samNPSClaimValueDiv").html();
    navigator.clipboard.writeText(samTextToCopy);
    $("#samNPS_ClaimCode_H2").html('COPIED!');
    $("#samNPS_ClaimCode_H2").css("color","green");
}

/* From CGBCHEAD.html */
function samNPSApplynShop() {
    var samTextToCopy = $("#samNPS_ClaimCode_Value .samNPSClaimValueDiv").html();
    showWait("B");
    setTimeout(function() {
        //No Existing Promo in URL
        if (window.location.href.toLocaleUpperCase().indexOf("PMSRCE=") < 0) { 
            if (window.location.href.toLocaleUpperCase().indexOf("?") < 0) {
                window.location.href = "?PMSRCE=" + samTextToCopy;
            } else {
                window.location.href += "&PMSRCE=" + samTextToCopy;
            }
        } else {
            alert("Sorry, there is an active promo code. We cannot apply this promo code!");
        }
       
        hideWait();
    }, 500); 
}

function samNPSEmailChecker(email) {
    //Check Existing Email
    $.ajax({
        url: '/cgi/CGBCXWEM?SISUEMAL=' + email,
        type: 'post',
        async: false,
         
        success: function(result) {
            // console.log("EMAIL:" + result);
        }
    })
}

function samNPSSMSChecker(sms) {
    //Check Existing SMS
    $.ajax({
        url: '/cgi/CGBCXWEM?SISUSMS=' + sms,
        type: 'post',
        async: false,
         
        success: function(result) {
            // console.log("SMS:" + result);
        }
    })
}

function samSetLSWithExpiryInDays(lsName, value, day) {

    //Date.now() will be in milliseconds
    //86400000 is One Day (24 hours)
    let samExpiredDate = Date.now() + (86400000 * day); //days from now

    const item = {
        value: value,
        expiry: samExpiredDate
    }   
    localStorage.setItem(lsName, JSON.stringify(item));
}

function samNPSAutoFillEmail(existingProfession) {

    existingProfession = existingProfession.toLocaleLowerCase();
    var samAutoFillYes = false;
    $('#samNPSProfession > option').each(function() {
        //Matched
        if (existingProfession == $(this).val().toLocaleLowerCase()) {
            $("#samNPSProfession").val($(this).val());  //Select this option and break the loop;
            samAutoFillYes = true;
            return false;
        }
    });

    if (samAutoFillYes == false) {
        $("#samNPSProfession").val('');
    }

}

/* :::::::::::::::: END 2 of 2: NEW POPUP SUBSCRIBER :::::::::::::::: */






/* :::::::::::::::: CART DRAWER (DX-0309 STAGE ONLY) :::::::::::::::: */

//When Cart Icon At Top Right Is Clicked
$("#samHeaderCartTotal").click(function(){
    
    samCD_ShowCartDrawer(); //Show Cart Drawer
    samCD_FetchYouMightLikeItems(); //Fetch You Might Like Products

    //TITLE SECTION
    $("#samCD_Title").html(
        '<span class="samCD_Title_Left">Your Cart</span>'+
        '<span class="samCD_Title_Right">'+
        '   <img src="/images/cart_drawer/x.svg" id="samCartDrawer_Close" onclick="samCD_CloseCartDrawer()">'+
        '</span>'
    );


    //CART ITEM SECTION
    if (parseInt($(".cart--total").html()) == 0) {
        samCD_FetchEmptyCartContents();
    } else {
        samCD_FetchCartItems();
    }
        
});

//Outside of Cart Drawer Div Is Clicked
document.addEventListener('mouseup', function(e) {
    if ($("#samCartDrawer_Overlay").length > 0) {
        var samCartDrawer_Overlay = document.getElementById('samCartDrawer_Overlay');
        if (samCartDrawer_Overlay.contains(e.target)) {
            samCD_CloseCartDrawer();
        }
    }
});

//Show Cart Drawer Div
function samCD_ShowCartDrawer() {
    $("#samCartDrawer").show(0);    
    $("#samCartDrawer_Overlay").show(0);  
    $("#samCD_BottomSection_SubTotal").show(500);  
    $("#samCartDrawer").animate({opacity: 1}); 
    $("#samCartDrawer_Right").addClass("samCartDrawer_Right_Width");
    $("html").css("overflow-y","hidden");
}

//Hide Cart Drawer Div
function samCD_CloseCartDrawer() {
    $("#samCartDrawer").animate({opacity: 0});
    $(".samCD_Content_EmptyCart").hide(0);
    // $("#samCartDrawer_Right").animate({width: '0px'});
    $("#samCartDrawer_Right").removeClass("samCartDrawer_Right_Width");
    $("#samCD_BottomSection_SubTotal").hide(0);
    $("#samCartDrawer_Overlay").hide(500);
    $("#samCartDrawer").hide(0);
    $("html").css("overflow-y","scroll");
}

//Get You Might Like ITems (Recommended Products)
function samCD_FetchYouMightLikeItems(){

    $.ajax({
        url: "/CGBCSTYL?RECOMMEND=J",
        type: 'get',
        dataType: 'html',
        success:
            function (data) { 

                //console.log(data);
            
                var dataFromJSON_YouMightLike = JSON.parse(data); //Paste data into array
                var samArrCD_YouMightLike = [];
                for (var i = 0; i < dataFromJSON_YouMightLike.length; i++) {

                    //Get Top 3 only
                    if (i < 3) {
                        samArrCD_YouMightLike.push([
                            dataFromJSON_YouMightLike[i].image,
                            dataFromJSON_YouMightLike[i].desc,
                            dataFromJSON_YouMightLike[i].price,
                            dataFromJSON_YouMightLike[i].url
                        ]);
                    } else {
                        i = dataFromJSON_YouMightLike.length;
                    }
                    
                }

                //Desktop Version (You Might Like)
                $("#samCartDrawer_YouMightLike").html(
                    '<h5>You Might Like</h5>'+
                    '<div class="samCDYML_Flex" id="samCDYML_Container"></div>'
                )

                for (var i = 0; i < samArrCD_YouMightLike.length; i++) {
                    $("#samCDYML_Container").append(
                        '   <div class="samCDYML_Item">'+
                        '       <a href="' + samArrCD_YouMightLike[i][3] + '">'+
                        '           <img src="' + samArrCD_YouMightLike[i][0] + '">'+
                        '           <span class="samCDYML_Title">' + samArrCD_YouMightLike[i][1] + '</span>'+
                        '       </a>'+
                        '       <span class="samCDYML_Price">$' + samArrCD_YouMightLike[i][2] + '</span>'+
                        '       <a class="samCDYML_Item_ShopNow" href="' + samArrCD_YouMightLike[i][3] + '">Shop Now</a>'+
                        '   </div>'
                    )
                    
                }

            }  
    });

}

function samCD_FetchCartItems() {

    //Get Items In Cart
    $.ajax({
        url: "/CGBCCART?CARTDRAWER=Y",
        type: 'get',
        dataType: 'html',
        success:
            function (data) { 

                console.log(data);
                //     {
                //         "cdno": "000000047091218",
                //         "image": "/photos/styles/USPT_FX375_BLK_1500_1.jpg",
                //         "desc": "Oakley SI Light Assault Boots 2",
                //         "item": "FX375",
                //         "option1": "color                         : BLACK",
                //         "option2": "footwear_size                 : 09.5",
                //         "option3": "",
                //         "price": "<strong>$155.00</strong>",
                //         "qty": "1",
                //         "ext_price": "$155.00",
                //         "stock_msg": "<span style=\"font-weight:normal;color:green;\" class=\"stockmsg\"><div class=\"stocktooltip\">In stock, order now! Estimated ship date 11/28/2023&nbsp;<a class=\"tipClass\" style=\"float:none\" title=\"Orders of in-stock received Monday through Friday by 2:00pm. ET are usually shipped the same business day for receipt within 4-6 business days. Date subject to change on out-of-stock merchandise.\" href=\"javascript:void(0);\"><img border=\"0\" src=\"/images/Help1.png\" style=\"border:none;display:inline;\" ></a></div></span>",
                //         "vas": "",
                //         "subtotal": "",
                //         "customization_fee": "$XX.XX",
                //         "item_total": "XX.XX"
                //     }

                samCD_SetHeight();  //Set Height for scrolling

                //Items in Cart Section
                var dataFromJSON_CartItems = JSON.parse(data); //Paste data into array
                var samArrCD_CartItems = [];
                for (var i = 0; i < dataFromJSON_CartItems.length; i++) {

                    if (
                        (dataFromJSON_CartItems[i].option1 != "") &&
                        (dataFromJSON_CartItems[i].option2 != "") &&
                        (dataFromJSON_CartItems[i].option3 != "")
                    ) {
                        samArrCD_CartItems.push(
                        [
                            dataFromJSON_CartItems[i].image,
                            dataFromJSON_CartItems[i].desc,
                            "<span>" + dataFromJSON_CartItems[i].option1 + "</span><span>" + dataFromJSON_CartItems[i].option2 + "</span><span>" + dataFromJSON_CartItems[i].option3 + "</span>",
                            dataFromJSON_CartItems[i].stock_msg,
                            dataFromJSON_CartItems[i].vas,
                            dataFromJSON_CartItems[i].price,
                            dataFromJSON_CartItems[i].ext_price,
                            dataFromJSON_CartItems[i].cdno,
                            dataFromJSON_CartItems[i].qty,
                            dataFromJSON_CartItems[i].subtotal,
                            dataFromJSON_CartItems[i].customization_fee,
                            dataFromJSON_CartItems[i].item_total

                        ]);
                    } else {
                        samArrCD_CartItems.push(
                        [
                            dataFromJSON_CartItems[i].image,
                            dataFromJSON_CartItems[i].desc,
                            "",
                            dataFromJSON_CartItems[i].stock_msg,
                            dataFromJSON_CartItems[i].vas,
                            dataFromJSON_CartItems[i].price,
                            dataFromJSON_CartItems[i].ext_price,
                            dataFromJSON_CartItems[i].cdno,
                            dataFromJSON_CartItems[i].qty,
                            dataFromJSON_CartItems[i].subtotal,
                            dataFromJSON_CartItems[i].customization_fee,
                            dataFromJSON_CartItems[i].item_total
                        ]);
                    }
                    
                }
                
                document.getElementById("samCDIS_row_flex_wrapper").innerHTML = "";
                var samTmpVAS = "";
                var samTmpCustomizationFeeCSS = "";
                for (var i = 0; i < samArrCD_CartItems.length; i++) {

                    //If VAS (Customization) exists
                    if (samArrCD_CartItems[i][4] != "") {
                        samTmpVAS = '<button class="samCDIS_row_flex_accordion">Customizations Added</button>';
                        samTmpCustomizationFeeCSS = "";
                    } else {
                        samTmpVAS = "";
                        samTmpCustomizationFeeCSS = " style='display: none'";
                    }

                    $("#samCDIS_row_flex_wrapper").append(
                        '<div class="samCDIS_row_flex">'+
                        '   <div class="samCDIS_row_flex_image">'+
                        '       <img src="' + samArrCD_CartItems[i][0] + '">'+
                        '   </div>'+
                        '   <div class="samCDIS_row_flex_info">'+
                        '       <div class="samCDIS_row_flex_desc">' + samArrCD_CartItems[i][1] + '</div>'+
                        '       <div class="samCDIS_row_flex_options">' + samArrCD_CartItems[i][2] + '</div>'+
                        '       <div class="samCDIS_row_flex_options" ' + samTmpCustomizationFeeCSS + '>Item Price: ' + samArrCD_CartItems[i][6] + '</div>'+
                        '       <div class="samCDIS_row_flex_options" ' + samTmpCustomizationFeeCSS + '>Customization Fee: ' + samArrCD_CartItems[i][10] + '</div>'+
                        '       <div class="samCDIS_row_flex_stockmsg">' + samArrCD_CartItems[i][3] + '</div>'+
                        '       ' + samTmpVAS + '<div class="samCDIS_row_flex_accordion_panel">' + samArrCD_CartItems[i][4] + '</div>'+
                        '   </div>'+
                        '   <div class="samCDIS_row_flex_price_qty">'+
                        '       <span class="samCDIS_row_flex_price">' + samArrCD_CartItems[i][11] + '</span>'+
                        '       <span class="samCDIS_row_flex_qty" id="samCDIS_row_flex_qty_' + samArrCD_CartItems[i][7] + '">'+
                        '           Qty:'+
                        '           <select class="samCDIS_row_flex_qty_select" id="samCDIS_Select_' + samArrCD_CartItems[i][7] + '" onchange="samCD_QtyChanged(this, \'' + samArrCD_CartItems[i][7] + '\')">'+
                        '                   <option value="1">1</option>'+
                        '                   <option value="2">2</option>'+
                        '                   <option value="3">3</option>'+
                        '                   <option value="4">4</option>'+
                        '                   <option value="5">5</option>'+
                        '                   <option value="6">6</option>'+
                        '                   <option value="7">7</option>'+
                        '                   <option value="8">8</option>'+
                        '                   <option value="9">9</option>'+
                        '                   <option value="10">10+</option>'+
                        '           </select>'+
                        '   </div>'+
                        '   <a class="samCDIS_row_flex_remove" onclick="samCD_RemoveCartItem(\'' + samArrCD_CartItems[i][7] + '\')">'+
                        '       <svg class=\"samFeatherIcon\">'+
                        '           <use href="/images/icons/feather-sprite.svg#trash-2"></use>'+
                        '       </svg>'+
                        '   </a>'+
                        '</div>'
                    )
                }

                var samCDIS_row_flex_accordion = document.getElementsByClassName("samCDIS_row_flex_accordion");
                for (var i = 0; i < samCDIS_row_flex_accordion.length; i++) {
                    samCDIS_row_flex_accordion[i].addEventListener("click", function() {
                        this.classList.toggle("samCDIS_row_flex_accordion_active");
                        var panel = this.nextElementSibling;
                        if (panel.style.maxHeight) {
                            panel.style.maxHeight = null;
                        } else {
                            panel.style.maxHeight = panel.scrollHeight + "px";
                        } 
                    });
                }

                //AUTO SELECT QTY => If QTY > 10 => Change to Input Text
                //SUBTOTAL ITEM
                //SUBTOTAL PRICE
                var samCD_TmpSubTotal_Price = 0.0;
                var samCD_TmpTotal_Items = 0;
                for (var i = 0; i < samArrCD_CartItems.length; i++) {
                    //Auto sum SubTotal and Items
                    //samCD_TmpSubTotal_Price += parseFloat(samArrCD_CartItems[i][6].replaceAll("$","").replaceAll(",",""));
                    samCD_TmpSubTotal_Price = samArrCD_CartItems[i][9];
                    samCD_TmpTotal_Items++;

                    if (samArrCD_CartItems[i][8] < 10) {
                        $('#samCDIS_Select_' + samArrCD_CartItems[i][7] + ' option[value=' + samArrCD_CartItems[i][8] +']').prop('selected', true); 
                    } else {
                        $('#samCDIS_row_flex_qty_' + samArrCD_CartItems[i][7]).html(
                            '<div class="samCD_QtyTenPlus_Div">'+
                            '   <input onfocus="samCD_QtyTenPlus_ShowUpdateBtn()" id="samCD_QtyTPD_Input_' + samArrCD_CartItems[i][7] + '" type="text" maxlength="3" value="' + samArrCD_CartItems[i][8] + '">'+
                            '   <span onclick="samCD_QtyTenPlus(\'' + samArrCD_CartItems[i][7] + '\')" class="samCD_QtyTPDiv_Update" style="display: none">Update</span>'+
                            '</div>'
                        )
                    }
                } 

                samStockMessageABTest(); //Added Stock Message Overlay
                
                //Sub Total Item
                if (samCD_TmpTotal_Items > 1) {
                    samCD_TmpTotal_Items = samCD_TmpTotal_Items + " ITEMS";
                } else {
                    samCD_TmpTotal_Items = samCD_TmpTotal_Items + " ITEM";
                }

                //Sub Total Price
                $("#samCD_BottomSection_SubTotal").html(
                    '<div class="samCD_SubTotal">'+
                    '   <span class="samCD_SubTotal_Left">SUBTOTAL (' + samCD_TmpTotal_Items + ')</span>'+
                    '   <span  class="samCD_SubTotal_Right">' + samCD_TmpSubTotal_Price + '</span>'+
                    '   <a href="/checkout"><img src="/images/cart_drawer/lock.svg">Checkout</a>'+
                    '   <a href="/cart" class="samCD_SubTotal_ViewCart">View Cart</a>'+
                    '</div>'
                );

                //Update Cart Icon QTY
                samCD_UpdateCartIconQty();

            }  
    });

}

function samCD_FetchEmptyCartContents() {
    
    //$("#samCD_BottomSection_SubTotal").remove();
    
    $("#samCD_Content").html(
        '<div class="samCD_Content_EmptyCart">'+
        '    <img src="/images/cart_drawer/vector.svg" id="samCD_Vector">'+
        '    <img src="/images/cart_drawer/shopping-cart.svg" id="samCD_Cart">'+
        '    <span class="samCDTS_Empty">'+
        '        Empty cart report! Time to apprehend some amazing items!'+
        '    </span>'+
        '</div>'
    );

    $("#samCD_BottomSection_SubTotal").html(
        '<div class="samCD_Content_EmptyCart_Bottom">'+
        '   <h6>Popular Categories</h6>'+
        '   <ul>'+
        '       <li><a href="#">Riot Gear</a></li>'+
        '       <li><a href="#">Baton</a></li>'+
        '       <li><a href="#">Tactical Gear</a></li>'+
        '       <li><a href="#">Uniforms</a></li>'+
        '       <li><a href="#">Tactical Boots</a></li>'+
        '       <li><a href="#">Tactical Vests</a></li>'+
        '   </ul>'+
        '</div>'
    )

    $('.cart--total').html('0');
}

function samCD_SetHeight() {

    let samCD_Height = parseFloat($("#samCartDrawer_Right").outerHeight());
    let samCDTitle_Height = parseFloat($(".samCD_Title").outerHeight());
    let samCDBottomSectionSubTotal_Height = parseFloat($(".samCD_SubTotal").outerHeight());
    let samCD_FlexRow_Height = samCD_Height - (samCDTitle_Height + samCDBottomSectionSubTotal_Height);
    samCD_FlexRow_Height += 100; //Make it loooks better with scrollbar

    $(".samCDIS_row_flex_wrapper").css("height",samCD_FlexRow_Height + "px");
     
}

//When Qty Changed in Cart Item Section
function samCD_QtyChanged(eleThis, samCDNO) {
    if ($(eleThis).val() == "10") {
        $(eleThis).parent().html(
            '<div class="samCD_QtyTenPlus_Div">'+
            '   <input onfocus="samCD_QtyTenPlus_ShowUpdateBtn()" id="samCD_QtyTPD_Input_' + samCDNO + '" type="text" maxlength="3" value="">'+
            '   <span onclick="samCD_QtyTenPlus(\'' + samCDNO + '\')" class="samCD_QtyTPDiv_Update">Update</span>'+
            '</div>'
        );
        $("#samCD_QtyTPD_Input_" + samCDNO).focus();
    } else {
        $.ajax({
            url: "/CGBCCART",
            data: { 
                SIAJAXMODE: 'Y',
                SIAJAXACTN: 'UPDATECD',
                SICDNO: samCDNO,
                SIQTY: $(eleThis).val(),
            },
            type: "post",
            success:
                function (data) { 
                    showWait("B");
                    setTimeout(function(){
                        hideWait();
                        samCD_FetchCartItems();
                    },300);
                }  
        });
    }
}

//When More Than 10 Qty
function samCD_QtyTenPlus(samCDNO) {
    if (isNaN($('#samCD_QtyTPD_Input_' + samCDNO).val())) {
        alert("Number Only..");
        return;
    } else if ($('#samCD_QtyTPD_Input_' + samCDNO).val() == "") {
        alert("Field cannot be emtpy");
        return;
    }
    
    $.ajax({
        url: "/CGBCCART",
        data: { 
            SIAJAXMODE: 'Y',
            SIAJAXACTN: 'UPDATECD',
            SICDNO: samCDNO,
            SIQTY: $('#samCD_QtyTPD_Input_' + samCDNO).val(),
        },
        type: "post",
        success:
            function (data) { 
                showWait("B");
                setTimeout(function(){
                    hideWait();
                    samCD_FetchCartItems();
                },300);
                
            }  
    });

}

function samCD_QtyTenPlus_ShowUpdateBtn() {
    $('.samCD_QtyTPDiv_Update').show(0);
}

function samCD_UpdateCartIconQty() {
    //Update QTY from Cart Icon
    var samCD_NewIconQty = 0;
    for (var i = 0; i < $(".samCDIS_row_flex_qty_select").length; i++) {
        samCD_NewIconQty += parseInt($(".samCDIS_row_flex_qty_select:eq(" + i + ")").val());
    }
    for (var i = 0; i < $(".samCD_QtyTenPlus_Div input").length; i++) {
        samCD_NewIconQty += parseInt($(".samCD_QtyTenPlus_Div input:eq(" + i + ")").val());
    }
    $('.cart--total').html(samCD_NewIconQty);
}

//When Remove Icon is clicked
function samCD_RemoveCartItem(samCDNO) {

    $.ajax({
        url: "/CGBCCART",
        data: { 
            SIAJAXMODE: 'Y',
            SIAJAXACTN: 'DELETECD',
            SICDNO: samCDNO,
            SIQTY: 0,
		},
		type: "post",
        success:
            function (data) { 
                showWait("B");
                setTimeout(function(){
                    hideWait();
                    if (data == "[]") {
                        samCD_FetchEmptyCartContents();
                    } else {
                        samCD_FetchCartItems();
                    }
                },300);
            }  
    });

}

/* :::::::::::::::: END :::::::::::::::: */

