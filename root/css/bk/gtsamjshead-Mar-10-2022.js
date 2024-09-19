//VIP Shipping
if(document.getElementById('my--vip')){
    document.getElementById('my--vip').innerHTML = '<span class="samtooltip samtooltip-showbox" style="margin-left: 0"><sup><i style="font-size:10px" class="fa">&#xf05a;</i></sup><span class="samtooltip-content clearfix"><span class="samtooltip-text">Get VIP shipping and get discounted, fast delivery right to your door.  In-stock, non-customized orders generally ship same or next day. At just $4.99 VIP shipping is a big savings over our standard fee of $8.95. <a href="https://www.galls.com/pages/shippinginfo" class="samtooltip-a">LEARN MORE</a></span></span></span>';  
}
//END VIP Shipping



//Add Help Center at top right IF promo code is visible
if(document.getElementById('mobileHeader')){
    //Only apply if promo code text is visible
    if(document.getElementsByClassName('fl-r').length > 0) {
        var samMyTmpHC = document.getElementsByClassName('fl-r')[0].innerHTML;
        if (samMyTmpHC.indexOf('use code') != -1) {
            if(document.getElementsByClassName('header-banner').length > 0) {
                //Change Text
                document.getElementsByClassName('header-banner')[0].style.textAlign = 'left';
                document.getElementsByClassName('header-banner')[0].innerHTML = '<span id="samLeftHeaderText">Proud to serve america&rsquo;s public safety professionals</span> <span id="samRightHeaderText"><a href="https://www.galls.com/pages/help-center" style="color: #fff; position: absolute; right: 10px">Help Center</a></span>';
                
                //Hide Help Center and show Promo Code
                if(document.getElementById('samMobileHC')) {
                    document.getElementById('samMobileHC').style.display = 'none';
                }
            }
        }
    }  
}
//END Add Help Center at top right IF promo code is visible



//DEALS Menu Navigation
// For Desktop
if(document.getElementById('deal--nav')){
    document.getElementById('deal--nav').innerHTML = '<span style="color: red; font-size: 22px">Deals</span>';
}

////For Mobile => Change to red color
if(document.getElementsByClassName('subnav__l1').length > 6){
    document.getElementsByClassName('subnav__l1')[6].style.color = 'red';
}
//END DEALS Menu Navigation




//Hide HOLSTERS WM attributes
var samTmpCountFoundWm = 0;
// For Desktop
if (document.getElementById('headingwmmul1')) {document.getElementById('headingwmmul1').style.display = "none";samTmpCountFoundWm++;}
if (document.getElementById('headingwmmul2')) {document.getElementById('headingwmmul2').style.display = "none";samTmpCountFoundWm++;}
if (document.getElementById('headingwmmul3')) {document.getElementById('headingwmmul3').style.display = "none";samTmpCountFoundWm++;}
if (document.getElementById('headingwmmul4')) {document.getElementById('headingwmmul4').style.display = "none";samTmpCountFoundWm++;}
if (document.getElementById('headingwmmul5')) {document.getElementById('headingwmmul5').style.display = "none";samTmpCountFoundWm++;}
if (document.getElementById('headingwmsaf')) {document.getElementById('headingwmsaf').style.display = "none";samTmpCountFoundWm++;}
if (document.getElementById('headingwmbbg')) {document.getElementById('headingwmbbg').style.display = "none";samTmpCountFoundWm++;}

//For Mobile
if (document.getElementById('Mwmmul1L2')) {document.getElementById('Mwmmul1L2').style.display = "none";}
if (document.getElementById('Mwmmul2L2')) {document.getElementById('Mwmmul2L2').style.display = "none";}
if (document.getElementById('Mwmmul3L2')) {document.getElementById('Mwmmul3L2').style.display = "none";}
if (document.getElementById('Mwmmul4L2')) {document.getElementById('Mwmmul4L2').style.display = "none";}
if (document.getElementById('Mwmmul5L2')) {document.getElementById('Mwmmul5L2').style.display = "none";}
if (document.getElementById('MwmsafL2')) {document.getElementById('MwmsafL2').style.display = "none";}
if (document.getElementById('MwmbbgL2')) {document.getElementById('MwmbbgL2').style.display = "none";}

if (samTmpCountFoundWm > 0) {
    for (var samTmpWMIndex = 1; samTmpWMIndex <= samTmpCountFoundWm; samTmpWMIndex++) {
        document.getElementsByClassName('panel')[document.getElementsByClassName('panel').length - samTmpWMIndex].style.border = "0";
    }
}
//END Hide HOLSTERS WM attributes




//Show PROMO CODE Applied
if (document.getElementsByClassName('sam--promocode--div').length > 0) {
    for (var samTmpPromo1 = 0; samTmpPromo1 < document.getElementsByClassName('sam--promocode--div').length; samTmpPromo1++) {
        if (document.getElementById('SISRCEI')) {
            if (document.getElementsByClassName('sam--promocode--div')[samTmpPromo1].getElementsByTagName('span').length == 0) {
                if (document.getElementById('SISRCEI').value != "" ) {
                    document.getElementsByClassName('sam--promocode--div')[samTmpPromo1].innerHTML = '<span style="color: green">Promo code applied</span>';
                }
            }
        } else if (document.getElementById('SISRCE')) {
            if (document.getElementsByClassName('sam--promocode--div')[samTmpPromo1].getElementsByTagName('span').length == 0) {
                if (document.getElementById('SISRCE').value != "" ) {
                    document.getElementsByClassName('sam--promocode--div')[samTmpPromo1].innerHTML = '<span style="color: green">Promo code applied</span>';
                }
            }
        } else {

        }
    }
}

//Promo Code Text at Checkout and Checkout Summary
if (document.getElementsByClassName('sam--promocode--text').length > 0) {
    for (var samTmpPromo2 = 0; samTmpPromo2 < document.getElementsByClassName('sam--promocode--text').length; samTmpPromo2++) {
        document.getElementsByClassName('sam--promocode--text')[samTmpPromo2].innerHTML = ' applied';
    }
}
//END Show PROMO CODE Applied


//Only allow ONE expandable menu on mobile
var samMobileMenuSidebar = $('#mobile-sidebar .subnav');
samMobileMenuSidebar.on('show.bs.collapse','.collapse', function() {
    samMobileMenuSidebar.find('.collapse.in').collapse('hide');
});
$('#mobile-sidebar .subnav .subnav__l2--header').click(function(){
    if (document.getElementById('mobile-sidebar')) {
        document.getElementById('mobile-sidebar').scrollTo(0,0);
    }
});
//END Only allow ONE expandable menu on mobile



//Show Short Shipping Info
if (document.getElementById('samShortShippingInfo')) {
    document.getElementById('samShortShippingInfo').innerHTML = "(4-6 business days)";
    document.getElementById('samShortShippingInfo').style.display = "block";
    document.getElementById('samShortShippingInfo').style.padding = "5px 0 5px 35px";
    document.getElementById('samShortShippingInfo').style.color = "#464646";
}
//END Show Short Shipping Info


//Agency Tooltip
// if(document.getElementById('my--agency')){
//     document.getElementById('my--agency').innerHTML = '<span class="agencytooltip agencytooltip-showbox"><a>Agency</a><span class="agencytooltip-content clearfix"><span class="agencytooltip-text-agency" style="padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">Our agency resource is a great way for agencies to check order status, learn how to sign up for an agency B2B site, place an order and much more. <a href="https://www.galls.com/pages/resource-center" onclick="ga(\'send\', \'event\', \'header\', \'click\', \'agencyrc\');">CLICK HERE</a></span></span></span>';
    
//     //Tooltip on top of searchbox
//     if(document.getElementById('headerSearchAutofill')){ 
//         $(function() {
//             $('#my--agency').hover(function() {
//                 $('#headerSearchAutofill').css('z-index', '0');
//             }, function() {
//                 $('#headerSearchAutofill').css('z-index', '1000');
//             });
//         });
//     }
// }










//Call this function when page is loaded initially
samSwapFeaturedPants();


//a. Fix SortBy same index issue on MOBILE
function samSwapFeaturedAddClass(evt) {
    //document.getElementById('samGallsLogoABTest').alt = evt.target.selectedIndex;
    document.getElementById('samGallsLogoABTest').setAttribute('class',evt.target.selectedIndex);   //Top Galls Logo
}

function samSwapFeaturedPants() {

    //FOR AB TEST

    //Append URL to all styles in /gear-bags
    if ((window.location.href.indexOf(".galls.com/gear-bags") > 0) || (window.location.href.indexOf(".galls.com/tactical-gloves") > 0)) {
        if (document.getElementsByClassName('product-item-link').length > 0) {
            var samTmpPDPLink = "";
            var samTmpProductItemLink = document.getElementsByClassName('product-item-link');
            for (var i = 0; i < samTmpProductItemLink.length; i++) {
                samTmpPDPLink = samTmpProductItemLink[i].getAttribute('href').toString() + "&sampmpdp=y";
                samTmpProductItemLink[i].setAttribute('href', samTmpPDPLink);
            }
        }
    }
    

    //Variant 2 only
    if (document.getElementById('samGallsLogoBottomABTest')) {
        if (document.getElementById('samGallsLogoBottomABTest').alt == "Galls-Featured") {
            //For Featured Product AB Test
            if ((window.location.href.indexOf(".galls.com/gear-bags") > 0) || (window.location.href.indexOf(".galls.com/tactical-gloves") > 0)) {

                //1. Add "Featured" option to dropdown (No Need to add this step to MAIN.JS)
                if (document.getElementById('samFeaturedSortBy')) {
                    //Not first time loaded
                } else {

                    //First time page loaded => Add "Featured" to Sort By

                    //Sort By Desktop
                    var samSortByDesktop = document.getElementById("product-grid__filter--sortf");
                    var samNewoption = document.createElement("option");
                    samNewoption.text = "Featured";
                    samNewoption.id = "samFeaturedSortBy";
                    samNewoption.value = "MOSTPPLR";
                    samNewoption.selected = "selected";
                    samSortByDesktop.add(samNewoption, 0);

                    //Sort By Mobile 1
                    var samSortByM1 = document.getElementsByTagName('select')[1];
                    var samNewoptionM1 = document.createElement("option");
                    samNewoptionM1.text = "Featured";
                    samNewoptionM1.id = "samFeaturedSortByM1";
                    samNewoptionM1.value = "MOSTPPLR";
                    samNewoptionM1.selected = "selected";
                    samSortByM1.add(samNewoptionM1, 0);
                    samSortByM1.setAttribute("onchange","samSwapFeaturedAddClass(event)");    //b. Fix SortBy same index issue on MOBILE

                    //Sort By Mobile 2 (Sticky at Top)
                    var samSortByM2 = document.getElementsByTagName('select')[2];
                    var samNewoptionM2 = document.createElement("option");
                    samNewoptionM2.text = "Featured";
                    samNewoptionM2.id = "samFeaturedSortByM2";
                    samNewoptionM2.value = "MOSTPPLR";   
                    samNewoptionM2.selected = "selected";  
                    samSortByM2.add(samNewoptionM2, 0);
                    samSortByM2.setAttribute("onchange","samSwapFeaturedAddClass(event)");    //b. Fix SortBy same index issue on MOBILE

                }
                //END

                
                //c. Fix SortBy same index issue on MOBILE
                var samSortByMobile = 0;
                if (document.getElementById('samGallsLogoABTest').getAttribute('class')) {
                    //0 => Featured
                    //1 => Most popular
                    var samGallsLogoABTestClass = parseInt(document.getElementById('samGallsLogoABTest').getAttribute('class'));;
                    
                    if (window.innerWidth < 1000) {
                        samSortByMobile = samGallsLogoABTestClass
                        //document.getElementsByTagName('select')[1].selectedIndex = document.getElementById('samGallsLogoABTest').alt;
                        //document.getElementsByTagName('select')[2].selectedIndex = document.getElementById('samGallsLogoABTest').alt;
                        document.getElementsByTagName('select')[1].selectedIndex = samGallsLogoABTestClass;
                        document.getElementsByTagName('select')[2].selectedIndex = samGallsLogoABTestClass; 
                    }
                    //END
                }
                

                //Only IF featured is selected
                if (
                    (document.getElementById("product-grid__filter--sortf").options[document.getElementById("product-grid__filter--sortf").selectedIndex].innerText == "Featured") &&
                    (samSortByMobile != 1)
                 ) {

                    //2. Find INDEX POSITION of selected styles
                    var samSwapSelectedStyles;

                    if (window.location.href.indexOf(".galls.com/gear-bags") > 0) {
                        samSwapSelectedStyles = ["#BG186","#BG237","#BG239","#BG736","#BG395","#BG043"];
                    } else if (window.location.href.indexOf(".galls.com/tactical-gloves") > 0) {
                        samSwapSelectedStyles = ["#GL1396","#GL269","#GL239","#GL527","#GL215","#GL1345"];
                    } else {

                    }

                    var samSwapPosition = [];   //store INDEX POSITION in this variable
                    var samSwapIncrement = 0;
                    for (var i = 0; i < document.getElementsByClassName('product-style').length; i++) {
                        for (var y = 0; y < samSwapSelectedStyles.length; y++) {
                            if (document.getElementsByClassName('product-style')[i].innerText == samSwapSelectedStyles[y]) {
                                samSwapPosition[samSwapIncrement] = i;
                                samSwapIncrement++;
                            }
                        }
                    }
                    //END


                    //3. Store INNERHTML of selected styles
                    var samTmpProdGridRow = ""; //store INNER HTML in this variable
                    var samTmpAddedFeaturedText = "";
                    for (var i = 0; i < samSwapPosition.length; i++) {

                        //Will be used to append to TOP of the list
                        samTmpAddedFeaturedText = document.getElementsByClassName('product-grid__row')[0].getElementsByClassName('product-grid__col')[samSwapPosition[i]];
                        samTmpAddedFeaturedText.getElementsByClassName('product-item__sale')[0].classList.remove("hidden");
                        samTmpAddedFeaturedText.getElementsByClassName('product-item__sale')[0].innerHTML = "Featured";
                        samTmpProdGridRow += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 product-grid__col ">' + samTmpAddedFeaturedText.innerHTML + '</div>';   
                
                    }
                    //END


                    //4. Remove STYLES that need to be moved to the top
                    var tmpCountRemovalOccurences = 0;
                    for (var i = 0; i < samSwapPosition.length; i++) {

                        //Grab current position to be removed after each removal since INDEX will be changed accordingly
                        var samRemoveThisPosition = samSwapPosition[i] - tmpCountRemovalOccurences;

                        document.getElementsByClassName('product-grid__row')[0].getElementsByClassName('product-grid__col')[samRemoveThisPosition].remove();
                        tmpCountRemovalOccurences++;    //Need to count it because after removal => TOTAL length will be short => INDEX need to be different for next removal        
                        
                    }
                    //END


                    //5. Append selected STYLES at top to the current styles;
                    if (samTmpProdGridRow != "") {

                        var samCurrentProdGrid = document.getElementsByClassName('product-grid__row')[0].innerHTML;

                        //Append new styles at the top and current styles
                        var samNewProdGrid = samTmpProdGridRow + samCurrentProdGrid;

                        
                        
                        //Remove all clearfix
                        samNewProdGrid = samNewProdGrid.replace(/<div class="clearfix row hidden hidden-md hidden-lg clearfix1"><\/div>/g, "");
                        samNewProdGrid = samNewProdGrid.replace(/<div class="clearfix row hidden hidden-md hidden-lg clearfix2 "><\/div>/g, "");
                        samNewProdGrid = samNewProdGrid.replace(/<div class="clearfix row hidden-xs hidden-sm clearfix3 "><\/div>/g, "");
                        samNewProdGrid = samNewProdGrid.replace(/<div class="clearfix row hidden-xs hidden-sm clearfix3 hidden"><\/div>/g, "");
                        samNewProdGrid = samNewProdGrid.replace(/<div class="clearfix row hidden-xs hidden-sm clearfix3"><\/div>/g, "");
                        samNewProdGrid = samNewProdGrid.replace(/<div class="clearfix row hidden hidden-md hidden-sm hidden-xs clearfix4"><\/div>/g, "");
                        samNewProdGrid = samNewProdGrid.replace(/<div class="clearfix row hidden-md hidden-sm hidden-xs clearfix4"><\/div>/g, "");

                        //When filter on/off
                        if (document.getElementById('leftFilter').style.display == "none") {
                            samNewProdGrid = samNewProdGrid.replace(/col-lg-4/g, "col-lg-3");
                        } 

                        //New STYLES without clearfix
                        document.getElementsByClassName('product-grid__row')[0].innerHTML = samNewProdGrid;

                        //Add clearfix1, clearfix2, clearfix3, clearfix4
                        for (var i = 1; i < document.getElementsByClassName('product-grid__row')[0].getElementsByClassName('product-grid__col').length; i++) {

                            var samReferenceNode = document.getElementsByClassName('product-grid__row')[0].getElementsByClassName('product-grid__col')[i];

                            //clearfix1
                            var samClearFix1 = document.createElement('div');
                            samClearFix1.className = "clearfix row hidden hidden-md hidden-lg clearfix1";
                            samReferenceNode.parentNode.insertBefore(samClearFix1,samReferenceNode);

                            //clearfix2
                            if (i % 2 == 0) {
                                var samClearFix2 = document.createElement('div');
                                samClearFix2.className = "clearfix row hidden hidden-md hidden-lg clearfix2";
                                samReferenceNode.parentNode.insertBefore(samClearFix2,samReferenceNode);
                            }

                            //clearfix3
                            if (i % 3 == 0) {
                                var samClearFix3 = document.createElement('div');
                                samClearFix3.className = "clearfix row hidden-xs hidden-sm clearfix3";

                                //When filter on/off
                                if (document.getElementById('leftFilter').style.display == "none") {
                                    samClearFix3.className = "clearfix row hidden-xs hidden-sm clearfix3 hidden";
                                } 
                                samReferenceNode.parentNode.insertBefore(samClearFix3,samReferenceNode);
                            }
                            
                            //clearfix4
                            if (i % 4 == 0) {
                                var samClearFix4 = document.createElement('div');
                                samClearFix4.className = "clearfix row hidden-md hidden-sm hidden-xs clearfix4 hidden";

                                //When filter on/off
                                if (document.getElementById('leftFilter').style.display == "none") {
                                    samClearFix4.className = "clearfix row hidden-md hidden-sm hidden-xs clearfix4";
                                } 
                                samReferenceNode.parentNode.insertBefore(samClearFix4,samReferenceNode);
                            }

                        } 
                        
                    }
                    //END
                }
                
            }
            
        }
    }
    //END For Featured Product AB Test
       
}








$(document).ready(function(){

    // //SHOW CHECKOUT for AB Test
    if (document.getElementsByName("PAGETYPE").length > 0) {
        if (document.getElementsByName("PAGETYPE")[0].value == "CHECKOUT") {

            if (document.getElementById("ProceedToCheckout")) {

                //Add CheckOut Button
                document.getElementById('CheckOutBtnForABTest').innerHTML = '<a style="margin-top: 15px;" class="btn btn_sm btn--orange btn-block" href=\'javascript:void(0)\' onclick="submit_form(\'f\', \'CHECKOUT\')">Checkout</a>';

                //Observe CheckOut Button
                var samCheckOutBtnObserver = new IntersectionObserver(function(samEntry) {
                    if(samEntry[0].isIntersecting === true) {
                        //CheckOut button is visible (element and viewport are overlapping)
                        document.getElementById('CheckOutBtnForABTest').classList.remove("samShowCheckOutButtonBottom");                    
                    } else {  
                        document.getElementById('CheckOutBtnForABTest').classList.add("samShowCheckOutButtonBottom"); 
                    } 
                }, { threshold: [0] });
                samCheckOutBtnObserver.observe(document.getElementById("ProceedToCheckout"));
            }
        } 
    }
    // //END SHOW CHECKOUT for AB Test


    //New Mobile Breadcrumb
    if(document.getElementById('samArrowBreadcrumb')) {

        $("<div id='samArrowBreadcrumbMobile'></div>").insertAfter("#samArrowBreadcrumb");  //Insert new div after breadcrumb for mobile


        if (window.location.href.indexOf(".galls.com/brands/") > 0) {

            var samTmpBreadCrumbLength = document.getElementById('samArrowBreadcrumb').getElementsByTagName('li').length;
        
            if (samTmpBreadCrumbLength == 2) {
                document.getElementById('samArrowBreadcrumbMobile').innerHTML = "<span style='font-size: 20px'>" + document.getElementById('samArrowBreadcrumb').getElementsByTagName('li')[1].innerHTML + "</span>";
            } else if (samTmpBreadCrumbLength > 2) {
                var samPrevBC = "<span class='samBCArrowLeft' style='color:#007ac2;font-size: 14px;'>\u276E</span>&nbsp;&nbsp;" + document.getElementById('samArrowBreadcrumb').getElementsByTagName('li')[samTmpBreadCrumbLength-2].innerHTML;
                var samCurrentBC = "<span style='font-size: 20px; display: block; padding: 20px 0 10px 0'>" + document.getElementById('samArrowBreadcrumb').getElementsByTagName('li')[samTmpBreadCrumbLength-1].innerHTML + "</span>";
                document.getElementById('samArrowBreadcrumbMobile').innerHTML = samPrevBC + samCurrentBC;
            } else {
                //Nothing
            }

        } else {

            var samTmpBreadCrumbLength = document.getElementById('samArrowBreadcrumb').getElementsByTagName('li').length;
            if (samTmpBreadCrumbLength == 1) {
                document.getElementById('samArrowBreadcrumbMobile').innerHTML = "<span style='font-size: 20px'>" + document.getElementById('samArrowBreadcrumb').getElementsByTagName('li')[0].innerHTML + "</span>";
            } else if(samTmpBreadCrumbLength > 1) {
                var samPrevBC = "<span class='samBCArrowLeft' style='color:#007ac2;font-size: 14px;'>\u276E</span>&nbsp;&nbsp;" + document.getElementById('samArrowBreadcrumb').getElementsByTagName('li')[samTmpBreadCrumbLength-2].innerHTML;
                var samCurrentBC = "<span style='font-size: 20px; display: block; padding: 20px 0 10px 0'>" + document.getElementById('samArrowBreadcrumb').getElementsByTagName('li')[samTmpBreadCrumbLength-1].innerHTML + "</span>";
                document.getElementById('samArrowBreadcrumbMobile').innerHTML = samPrevBC + samCurrentBC;
            } else {
                //Nothing
            }
        }

        
    }
    

});