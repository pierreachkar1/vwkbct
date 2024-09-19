
/* :::::::::::::::: TRANSITIONAL AND CANCELLED PRODUCTS [IN STAGE ONLY] :::::::::::::::: */

if (document.getElementById('style')) {
    $.ajax({
        url: 
            '/cgi/CGBCXSSUB?'+
            'SISTYL=' + $("#style").val(),
        type: 'get',
        dataType: 'html',
        success: function(result) {

            // console.log(result);

            if (result == "[]") {
                // console.log("NOT A TRANSITIONAL OR CANCELLED PRODUCTS");
            } else {

                $('.social-box').css("display","none");
                
                var samPDPItemIsCancelled = false;
                var samPDPItemIsTrasitionalNoATC = false;
                var samPDPSubSimilarItemsJSON = JSON.parse(result); 
                for (var x = 0; x < samPDPSubSimilarItemsJSON.length; x++) { 

                    //If Cancelled
                    if (
                        (samPDPItemIsCancelled == false) &&
                        (samPDPSubSimilarItemsJSON[x].pdp_status.toLowerCase() == "cancelled")
                    ) {
                        $('.samTranCanMsgNew').html("This product is currently unavailable.");
                        samPDPItemIsCancelled = true;
                        $("#sam_main_product__info .product__box__upper").css("display","none");
                        $("#sam_main_product__info .product__title--item").css("display","none");
                        $("#sam_main_product__info #sam--product--not--available").css("display","none");   //Only exists for Cancelled
                        $("#sam_main_product__info").css("border","none");
                        
                        $("#samTranCanMsgSpanNew").addClass('samTranCanMsgVisibleNew');
                        $("#samTranCanMsgSpanMobile").addClass('samTranCanMsgVisibleNewMobile');

                        $("#sam--product--not--available").css("padding", "0"); //FOR USP ONLY
                    }

                    //If Transitional and Add To Cart Disabled => Same logic as Cancelled
                    if (
                        (samPDPItemIsTrasitionalNoATC == false) &&
                        (samPDPSubSimilarItemsJSON[x].pdp_status.toLowerCase() == "transitional") &&
                        ($("#samPDPAddToCartBtn").hasClass('hidden') == true)
                    ) {
                        $('.samTranCanMsgNew').html("This product is currently unavailable");
                        samPDPItemIsTrasitionalNoATC = true;
                        $("#sam_main_product__info .product__box__upper").css("display","none");
                        $("#sam_main_product__info .product__title--item").css("display","none");
                        $("#sam_main_product__info .product__options").css("display","none");   //Only exists for Transitional
                        $("#sam_main_product__info").css("border","none");

                        $("#samTranCanMsgSpanNew").addClass('samTranCanMsgVisibleNew');
                        $("#samTranCanMsgSpanMobile").addClass('samTranCanMsgVisibleNewMobile');

                        $("#sam--product--not--available").css("padding", "0"); //FOR USP ONLY
                    }

                    

                    /* Applied to both CANCELLED and TRANSITIONAL Products */
                    //SUBSTITUTE Product (If Available)
                    if (samPDPSubSimilarItemsJSON[x].sub_type.toLowerCase() == "substitute") {
                        $("#samTranCanSubstitute").addClass('samTranCanSubstituteVisible');
                        document.getElementById("samTranCanSubstitute").innerHTML =
                        "<h6>Here's a new version of this item</h6>"+
                        "<span class='samTranCanFlex'>"+
                        "   <a href='" + samPDPSubSimilarItemsJSON[x].seo_url + "'><img src='" + samPDPSubSimilarItemsJSON[x].image + "'></a>"+
                        "   <span class='samTCF_Wrapper'>"+
                        "       <span class='samTCF_Title'><a href='" + samPDPSubSimilarItemsJSON[x].seo_url + "'>" + samPDPSubSimilarItemsJSON[x].desc.toLowerCase() + "</a></span>"+
                        "       <span class='samTCF_Price'>$" + samPDPSubSimilarItemsJSON[x].price + "</span>"+
                        "       <a href='" + samPDPSubSimilarItemsJSON[x].seo_url + "'><span class='samTCF_Button'>Shop Now</span></a>"+
                        "   </span>"+
                        "</span>";
                    } 
                    //SIMILAR Product (Always Available)
                    else if (samPDPSubSimilarItemsJSON[x].sub_type.toLowerCase() == "similar") {
                        if (document.getElementById("samTranCanSimilar").innerHTML == "") {
                            document.getElementById("samTranCanSimilar").innerHTML = "<h6>Similar Products Available Now</h6>"
                        }

                        $("#samTranCanSimilar").addClass('samTranCanSimilarVisible');
                        document.getElementById("samTranCanSimilar").innerHTML +=
                        "<span class='samTranCanFlex'>"+
                        "   <a href='" + samPDPSubSimilarItemsJSON[x].seo_url + "'><img src='" + samPDPSubSimilarItemsJSON[x].image + "'></a>"+
                        "   <span class='samTCF_Wrapper'>"+
                        "       <span class='samTCF_Title'><a href='" + samPDPSubSimilarItemsJSON[x].seo_url + "'>" + samPDPSubSimilarItemsJSON[x].desc.toLowerCase() + "</a></span>"+
                        "       <span class='samTCF_Price'>$" + samPDPSubSimilarItemsJSON[x].price + "</span>"+
                        "       <a href='" + samPDPSubSimilarItemsJSON[x].seo_url + "'><span class='samTCF_Button'>Shop Now</span></a>"+
                        "   </span>"+
                        "</span>";
                    } else {
                        //Nothing
                    }

                    
                   
                }
                

            }
        }
    })
}

/* :::::::::::::::: END :::::::::::::::: */




/* :::::::::::::::: MOBILE - SHOW ZOOM ICON FOR GALLERY IMAGES :::::::::::::::: */

if (document.getElementById('samPDPZoomIconDiv')) {

    //Show Zoom Icon
    document.getElementById('samPDPZoomIconDiv').innerHTML = '<i id="samPDPZoomIcon" class="fa fa-search-plus" onclick="samShowZoomIconPDP()"></i>';
    document.getElementById('samPDPZoomIcon').style.fontSize = '24px';
    document.getElementById('samPDPZoomIcon').style.color = '#555';
    document.getElementById('samPDPZoomIcon').style.padding = '5px';
    
}

function samShowZoomIconPDP() {
    if (document.getElementById('sam_main_product__info').getElementsByClassName('slick-active').length > 0) {
        
        //For mobile only => will be -1
        if (document.getElementById('sam_main_product__info').getElementsByClassName('slick-active')[0].getAttribute('src').indexOf("/css/ajax-loader") < 0) {   
            if (document.getElementById('samPDPImageZoom')) {
                
                var samTmpZoomImgURL = document.getElementById('sam_main_product__info').getElementsByClassName('slick-active')[0].getAttribute('src');
                samTmpZoomImgURL = samTmpZoomImgURL.replace("330_","1500_");
        
                //Check if HD image exists
                fetch(samTmpZoomImgURL, { method: 'HEAD' })
                .then(
                    function (samX) {
                        if (samX.ok) {

                        } else {
                            //If zoom image is not found => Use existed smaller image
                            //This is asynchronous. Image will be changed later once it is not found
                            document.getElementById('samTmpZoomImg').src = document.getElementById('sam_main_product__info').getElementsByClassName('slick-active')[0].getAttribute('src');
                            document.getElementById('samTmpZoomImg').style.width = '100%';
                            document.getElementById('samTmpZoomImg').style.left = '0';
                        }
                    }
                ).catch();


                document.getElementById('samPDPImageZoom').style.display = 'block';
                document.getElementById('samPDPImageZoom').innerHTML = '<i class="fa fa-close samZoomImgCloseBtn" onclick="samCloseZoomDivPDP()"></i><div class="samZoomPDP"><img id="samTmpZoomImg" src="' + samTmpZoomImgURL + '"></div>';
                document.getElementById('samPDPImageZoom').style.position = "fixed";
                document.getElementById('samPDPImageZoom').style.width = '100%';
                document.getElementById('samPDPImageZoom').style.height = '100%';
                document.getElementById('samPDPImageZoom').style.backgroundColor = '#ffffff';
                document.getElementById('samPDPImageZoom').style.left = '0';
                document.getElementById('samPDPImageZoom').style.top = '0';
                document.getElementById('samPDPImageZoom').style.zIndex = '9999';
                document.getElementById('samPDPImageZoom').style.textAlign = 'center';
                document.getElementById('samPDPImageZoom').style.overflowX = 'scroll';
                document.getElementById('samPDPImageZoom').style.overflowY = 'hidden';

                document.getElementById('samPDPZoomIcon').style.display = 'none';   //Hide Zoom Icon

            }   
        } 
    }
}

function samCloseZoomDivPDP() {
    document.getElementById('samPDPImageZoom').style.display = 'none';
    document.getElementById('samPDPZoomIcon').style.display = 'block';   //Hide Zoom Icon
    window.scrollTo(0, 0);  
}

/* :::::::::::::::: END :::::::::::::::: */










/* :::::::::::::::::::::::::::::::: DOCUMENT READY :::::::::::::::::::::::::::::::: */

$(document).ready(function() {


    /* :::::::::::::::: MOBILE - MODIFY DESIGN ON PDP :::::::::::::::: */

    // if (screen.width < 991) {
    //     $("#mobilesearchDiv").addClass("samHideSearchBoxPDP");
    //     document.getElementsByClassName('main__wrapper')[0].style.marginTop = "-10px";
    //     $('.samHeaderTop_SearchIconPDP').css("display","block");
    // }

    /* :::::::::::::::: END :::::::::::::::: */
    




    /* :::::::::::::::: SHOW STICKY ADD TO CART BUTTON :::::::::::::::: */

    document.getElementById('SamFloatingAddToCart').innerHTML = '<a href="javascript:void(0)" onclick="addToCartItem()" class="btn btn_lg btn-block btn--orange vwo-addtocart">Add To Cart</a>';

    //Observe Add To Cart Button
    var samAddToCartObserver = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            //AddToCart button is visible (element and viewport are overlapping)
            document.getElementById('SamFloatingAddToCart').classList.remove("samShowAddToCartBottom");
        } else {  

            if (window.pageYOffset > 1000) {
                document.getElementById('SamFloatingAddToCart').classList.add("samShowAddToCartBottom");
            }

            //Return To Top Button
            if (document.getElementById('SamReturnToTop')) {
                document.getElementById('SamReturnToTop').style.bottom = "90px";
            }
        } 

    }, { threshold: [0] });
    samAddToCartObserver.observe(document.getElementById("samPDPAddToCartDiv"));

    /* :::::::::::::::: END :::::::::::::::: */





    /* :::::::::::::::: TURNTO: SHOW ZERO STAR RATINGS :::::::::::::::: */

    $.ajax({
        url: 'https://cdn-ws.turnto.com/v5/sitedata/3aox9j7t5wDODGnsite/' + $('#style').val() + '/d/ugc/counts/' + turnToConfig.locale,
        type: "get",
        dataType: 'html',
        success: function(html){
            var samSuccessTTCount = JSON.parse(html);
            if (samSuccessTTCount.reviews == "0") {
                setTimeout(function() {
                    let samTTZeroStar = '<div class="tt-c-rating__star"><svg class="tt-o-icon tt-o-icon--star--half tt-o-icon--sm tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false"><!--v-if--><use xlink:href="#tt-icon-star--empty"></use></svg></div>';
                    $(samTTZeroStar + samTTZeroStar + samTTZeroStar + samTTZeroStar + samTTZeroStar).insertBefore(".tt-c-teaser__write-review");  
                }, 1000);
            } 
        }
    });
    
    /* :::::::::::::::: END :::::::::::::::: */


    
});

/* :::::::::::::::::::::::::::::::: END DOCUMENT READY :::::::::::::::::::::::::::::::: */

