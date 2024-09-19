
/* :::::::::::::::: NEW ITEM CATEGORY PAGE :::::::::::::::: */

if (window.location.href.indexOf(".com/newitems") > 0) {
    $("#sam-srch-breadcrumb").css("display","none");
}

/* :::::::::::::::: END :::::::::::::::: */






/* :::::::::::::::: DISABLE PAGINATION IF PRODUCT LESS THAN 1 PAGE (FIRST TIME LOADED ONLY) :::::::::::::::: */

if (document.getElementById('total_pages')) {
    if (parseInt($("#total_pages").val()) <= 1) {
        $("#example_paginate").css("visibility","hidden");
        $("#example_paginate_bottom").css("visibility","hidden");  
    }
}

/* :::::::::::::::: END :::::::::::::::: */





/* :::::::::::::::: ADD HERO FOR CATEGORY PAGE ONLY (IN STAGE ONLY) :::::::::::::::: */

// if (document.getElementsByName("PAGETYPE").length > 0) {
//     if (document.getElementsByName("PAGETYPE")[0].value == "CATEGORY") {
//         if (document.getElementsByClassName('searchhero').length > 0) {

//             if (document.getElementsByClassName('searchhero')[0].style.display == "none") {
        
        
//                 let samCurrentPath = window.location.pathname;
//                 samCurrentPath = samCurrentPath.replace("/","");
        
//                 //Check if HERO image exists
//                 let samTmpHero;
//                 if (screen.width > 991) {
//                     samTmpHero = "/photos/uspt/category/hero/" + samCurrentPath + "-h1.jpg";
//                 } else {
//                     samTmpHero = "/photos/uspt/category/hero/" + samCurrentPath + "-m1.jpg";
//                 }
//                 fetch(samTmpHero, { method: 'HEAD' })
//                 .then(
//                     function (samX) {
//                         if (samX.ok) {
//                             samTmpHero = "/photos/uspt/category/hero/" + samCurrentPath;
//                         } else {
//                             //Check Mobile
//                             samTmpHero = "/photos/uspt/category/hero/default";
//                         }
        
//                         document.getElementsByClassName('searchhero')[0].style.display = "block";
//                         document.getElementsByClassName('searchhero')[0].innerHTML =
//                         '<div class="col-sm-12">'+
//                         '   <div class="sam-cate-hero-div">'+
//                         '       <img src="' + samTmpHero + '-h1.jpg" alt="' + samCurrentPath + '" class="img-responsive hidden-xs-sm" />'+
//                         '       <img src="' + samTmpHero + '-m1.jpg" alt="' + samCurrentPath + '" class="img-responsive visible-xs-sm" />'+
//                         '   </div>'+
//                         '</div>';
        
//                     }
//                 ).catch();
        
                
//             }
        
//         }
//     }
// }

/* :::::::::::::::: END :::::::::::::::: */






/* :::::::::::::::: ALLOW 4 PRODUCTS IN A ROW BY REMOVING CLEARFIX AND APPLY CSS :::::::::::::::: */

document.querySelectorAll('.clearfix').forEach(samClearFix => {
    samClearFix.remove();
}); 

samRemoveClearFix();
function samRemoveClearFix() {
    let samClearFixes = document.querySelectorAll('.clearfix');
    samClearFixes.forEach(samClearFix => {
        samClearFix.remove();
    });  
}
/* (Similar to main.js) */
function samProductPerPage(value,selectName) {
    
    if (value == "24") {
        $('select[name="'+ selectName +'"]').val("24");
        $("#pagination__dropdown").val(1);
        $("#SIIPPG").val(24);
        getSearch("FILTER");
    } else if (value == "48") {
        $('select[name="'+ selectName +'"]').val("48");
        $("#pagination__dropdown").val(1);
        $("#SIIPPG").val(48);
        getSearch("FILTER");
    } else if (value == "96") {
        $('select[name="'+ selectName +'"]').val("96");
        $("#pagination__dropdown").val(1);
        $("#SIIPPG").val(96);
        getSearch("FILTER");
    } else if (value == "AL") {
        $('select[name="'+ selectName +'"]').val("AL");
        $("#pagination__dropdown").val(1);
        $("#SIIPPG").val(500);
        getSearch("FILTER");
    } else {

    }
}

function samToggleCategoryMobileFilter() {
    $('#leftFilter').toggleClass("hidden-xs");
    $('#leftFilter').toggleClass("hidden-sm");   
}

/* :::::::::::::::: END :::::::::::::::: */






/* :::::::::::::::: MOVE BREADCRUMB TO BELOW HERO (IN STAGE ONLY) :::::::::::::::: */

// if (document.getElementById('scrollIndicator')) {
//     if (document.getElementById('sam-srch-breadcrumb')) {
//         document.getElementById('sam-srch-breadcrumb').innerHTML = document.getElementById('scrollIndicator').innerHTML;
//     }
// }

/* :::::::::::::::: END :::::::::::::::: */






/* :::::::::::::::: FOR BREADCRUMB SCHEMA :::::::::::::::: */

if (
    ($('#sam-srch-breadcrumb ol li').length > 1) &&
    (document.getElementById('samBreadcrumbSchema'))
) {
    //console.log($('#sam-srch-breadcrumb ol li').eq(0).html());

    //Get Breadcrumb
    const samListItem = $('#sam-srch-breadcrumb ol li');
    const samListItem_A = $('#sam-srch-breadcrumb ol li a');

    // create a new <script> element
    var samBreadCrumbSchema = document.createElement("script");
    samBreadCrumbSchema.type = "application/ld+json";

    if (samListItem.length == "1") {
        //Nothing
    } else if (samListItem.length == "2") {
        samBreadCrumbSchema.text = JSON.stringify(
            { 
                "@context": "http://schema.org" + "SAMBR",
                "@type": "BreadcrumbList",
                "itemListElement":
                [
                    {
                        "@type": "ListItem",  
                        "position": 1,
                        "item":
                        {
                            "@id": "https://"+ window.location.hostname,  
                            "name": samListItem.eq(0).text()
                        }
                    },
                    {
                        "@type": "ListItem",  
                        "position": 2,
                        "item":
                        {
                            "@id": window.location.href,  
                            "name": samListItem.eq(1).text()
                        }
                    }
                ]
            }, null, 6
        ).replace(/SAMBR/g, function (match, p1) {
            return '<br>'.repeat(p1.length);
        });
        document.getElementById("samBreadcrumbSchema").appendChild(samBreadCrumbSchema);    //Add Breadcrumb Schema
    } else if (samListItem.length == "3") {
        samBreadCrumbSchema.text = JSON.stringify(
            { 
                "@context": "http://schema.org" + "SAMBR",
                "@type": "BreadcrumbList",
                "itemListElement":
                [
                    {
                        "@type": "ListItem",  
                        "position": 1,
                        "item":
                        {
                            "@id": "https://"+ window.location.hostname,  
                            "name": samListItem.eq(0).text()
                        }
                    },
                    {
                        "@type": "ListItem",  
                        "position": 2,
                        "item":
                        {
                            "@id": "https:"+ samListItem_A.eq(1).attr('href'),  
                            "name": samListItem_A.eq(1).html()
                        }
                    },
                    {
                        "@type": "ListItem",  
                        "position": 3,
                        "item":
                        {
                            "@id": window.location.href,  
                            "name": samListItem.eq(2).text()
                        }
                    }
                ]
            }, null, 6
        ).replace(/SAMBR/g, function (match, p1) {
            return '<br>'.repeat(p1.length);
        });
        document.getElementById("samBreadcrumbSchema").appendChild(samBreadCrumbSchema);    //Add Breadcrumb Schema
    } else if (samListItem.length == "4") {
        samBreadCrumbSchema.text = JSON.stringify(
            { 
                "@context": "http://schema.org" + "SAMBR",
                "@type": "BreadcrumbList",
                "itemListElement":
                [
                    {
                        "@type": "ListItem",  
                        "position": 1,
                        "item":
                        {
                            "@id": "https://"+ window.location.hostname,  
                            "name": samListItem.eq(0).text()
                        }
                    },
                    {
                        "@type": "ListItem",  
                        "position": 2,
                        "item":
                        {
                            "@id": "https:"+ samListItem_A.eq(1).attr('href'),  
                            "name": samListItem_A.eq(1).html()
                        }
                    },
                    {
                        
                        "@type": "ListItem",  
                        "position": 3,
                        "item":
                        {
                            "@id": "https:"+ samListItem_A.eq(2).attr('href'),  
                            "name": samListItem_A.eq(2).html()
                        }
                    },
                    {
                        "@type": "ListItem",  
                        "position": 4,
                        "item":
                        {
                            "@id": window.location.href,  
                            "name": samListItem.eq(3).text()
                        }
                    }
                ]
            }, null, 6
        ).replace(/SAMBR/g, function (match, p1) {
            return '<br>'.repeat(p1.length);
        });
        document.getElementById("samBreadcrumbSchema").appendChild(samBreadCrumbSchema);    //Add Breadcrumb Schema
    }  else if (samListItem.length == "5") {
        samBreadCrumbSchema.text = JSON.stringify(
            { 
                "@context": "http://schema.org" + "SAMBR",
                "@type": "BreadcrumbList",
                "itemListElement":
                [
                    {
                        "@type": "ListItem",  
                        "position": 1,
                        "item":
                        {
                            "@id": "https://"+ window.location.hostname,  
                            "name": samListItem.eq(0).text()
                        }
                    },
                    {
                        "@type": "ListItem",  
                        "position": 2,
                        "item":
                        {
                            "@id": "https:"+ samListItem_A.eq(1).attr('href'),  
                            "name": samListItem_A.eq(1).html()
                        }
                    },
                    {
                        
                        "@type": "ListItem",  
                        "position": 3,
                        "item":
                        {
                            "@id": "https:"+ samListItem_A.eq(2).attr('href'),  
                            "name": samListItem_A.eq(2).html()
                        }
                    },
                    {
                        
                        "@type": "ListItem",  
                        "position": 4,
                        "item":
                        {
                            "@id": "https:"+ samListItem_A.eq(3).attr('href'),  
                            "name": samListItem_A.eq(3).html()
                        }
                    },
                    {
                        "@type": "ListItem",  
                        "position": 5,
                        "item":
                        {
                            "@id": window.location.href,  
                            "name": samListItem.eq(4).text()
                        }
                    }
                ]
            }, null, 6
        ).replace(/SAMBR/g, function (match, p1) {
            return '<br>'.repeat(p1.length);
        });
        document.getElementById("samBreadcrumbSchema").appendChild(samBreadCrumbSchema);    //Add Breadcrumb Schema
    } else {
        //Nothing
    }
}

/* :::::::::::::::: END :::::::::::::::: */






/* :::::::::::::::: LIMIT 3 COLOR SWATCHES and REMOVE <BR> from PRICE :::::::::::::::: */

samLimitColorSwatch();
function samLimitColorSwatch() {


    //Remove <BR> Tag for better UI/UX on Mobile
    let samRemoveBRs = document.querySelectorAll('.product-price br');
    samRemoveBRs.forEach(samRemoveBR => {
        samRemoveBR.remove();
    });  


    //document.getElementsByClassName('colorPalette')[7].childElementCount
    if (document.getElementsByClassName('colorPalette').length > 0) {
        for (let i = 0; i < document.getElementsByClassName('colorPalette').length; i++) {
            if (document.getElementsByClassName('colorPalette')[i].childElementCount > 3) {
                for (let x = 3; x < document.getElementsByClassName('colorPalette')[i].childElementCount; x++) {
                    document.getElementsByClassName('colorPalette')[i].children[x].style.display = "none";
                }   

                document.getElementsByClassName('colorPalette')[i].children[3].style.display = "inline";
                document.getElementsByClassName('colorPalette')[i].children[3].outerHTML = "<span style='font-weight: bolder; margin: 0 5px; font-size: 20px'>...</span>";
            }
        }
    }
}

/* :::::::::::::::: END :::::::::::::::: */






/* :::::::::::::::: 1 of 2 - SHOW READ MORE ON SRCH (ONE MORE IN DOCUMENT READY) (STAGE ONLY) :::::::::::::::: */

function samShowReadMoreSRCH() {


    var tmpParagraph = $('.samSRCH_Copy_Wrapper p');
    // Get the computed style of the paragraph
    var lineHeight = parseInt(tmpParagraph.css('line-height'), 10);
    var paragraphHeight = tmpParagraph.height();

    // Calculate the number of lines
    var totalLines = Math.round(paragraphHeight / lineHeight);


    console.log("TOTAL LINE: " + totalLines);

    // if (document.getElementsByClassName('samSRCH_Copy_Wrapper').length == 1) {

    //     if (document.getElementsByClassName('samSRCH_Copy_Wrapper')[0].getElementsByTagName('p').length > 0) {
            
    //             let samTotalLines = 0;
                
    //             for (let i = 0; i < document.getElementsByClassName('samSRCH_Copy_Wrapper')[0].getElementsByTagName('p').length; i++) {
    //                 samTotalLines += samGetTotalLines(document.getElementsByClassName('samSRCH_Copy_Wrapper')[0].getElementsByTagName('p')[i]);
    //             }

    //             var samLimitedLines = 2;
    //             if (samTotalLines > samLimitedLines) {

    //                 let samOriginalSearchCopy = "";
    //                 for (let i = 0; i < document.getElementsByClassName('samSRCH_Copy_Wrapper')[0].getElementsByTagName('p').length; i++) {
    //                     samOriginalSearchCopy += document.getElementsByClassName('samSRCH_Copy_Wrapper')[0].getElementsByTagName('p')[i].innerHTML + "<br><br>";
    //                     document.getElementsByClassName('samSRCH_Copy_Wrapper')[0].getElementsByTagName('p')[i].innerHTML = "";
    //                 }

    //                 document.getElementsByClassName('samSRCH_Copy_Wrapper')[0].getElementsByTagName('p')[0].innerHTML = samOriginalSearchCopy;
    //                 let samParagraph = document.getElementsByClassName('samSRCH_Copy_Wrapper')[0].getElementsByTagName('p')[0];
    //                 let samTotalCharNeeded = (samParagraph.innerHTML.length / samTotalLines) * samLimitedLines;
    //                 let samVisibleSearchCopy = samParagraph.innerHTML.substring(0, samTotalCharNeeded);
    //                 let samHiddenSearchCopy = samParagraph.innerHTML.substring(samTotalCharNeeded, samParagraph.innerHTML.length);
                    
    //                 //Noted: Added CSS for BR to lower the HEIGHT;
    //                 samParagraph.innerHTML = samVisibleSearchCopy + "<span id='samHiddenSearchCopy' style='display: none'></span>" + " <a id='samSearchCopyReadMoreBtn' style='font-weight: 600; text-decoration: underline; color: #000000; cursor: pointer'> // Show More</a>";
    //                 document.getElementById('samHiddenSearchCopy').innerHTML = samHiddenSearchCopy ;
                    
    //             }
            
    //     }
        
    // }

    // //Readmore clicked
    // $('#samSearchCopyReadMoreBtn').click(function() {
    //     $('#samHiddenSearchCopy').slideToggle(300);
    //     if ($('#samSearchCopyReadMoreBtn').text() == " // Show More") {
    //         $(this).text(" // Show Less");
    //     } else {
    //         $(this).text(" // Show More");
    //     }
    // });
}
function samGetTotalLines(elementName) {
    let samTotalLines = 0;
    let samElementHeight = parseInt(elementName.offsetHeight);    // Get total height of the content    
    let samLineHeight = parseInt(window.getComputedStyle(elementName).getPropertyValue('line-height'));
    samTotalLines = samElementHeight / samLineHeight;
    return samTotalLines;
}

/* :::::::::::::::: END :::::::::::::::: */










/* :::::::::::::::::::::::::::::::: DOCUMENT READY :::::::::::::::::::::::::::::::: */

$(document).ready(function(){


    /* :::::::::::::::: AUTO EXPAND CATEGORY (DESKTOP ONLY) :::::::::::::::: */

    if (screen.width > 990) {
        if (document.getElementsByName("PAGETYPE").length > 0) {

            if (document.getElementsByName("PAGETYPE")[0].value == "CATEGORY") {
                //CATEGORY PAGE
                var samGetBreadcrumbName = document.querySelectorAll('#scrollIndicator .breadcrumb li');
            
                if (samGetBreadcrumbName.length > 0) {
    
                    if ((document.getElementById('collapseCategory')) && (document.getElementById('fullCategory'))) {   
                    
                        //ALWAYS Expand First Attribute
                        document.getElementById('fullCategory').classList.toggle('collapsed');
                        document.getElementById('collapseCategory').style.display='block';
                        
                        //CHECK FIRST Level
                        var samTmpFirstLevelName = samGetBreadcrumbName[1].innerText.toLowerCase();
                        samTmpFirstLevelName = samTmpFirstLevelName.replace(" ","-");
                        if (document.getElementById('CATEG_____' + samTmpFirstLevelName)) {
                            document.getElementById('CATEG_____' + samTmpFirstLevelName).checked = true;
                        }
        
                        //CHECK SECOND Level
                        if (samGetBreadcrumbName.length == 3) {
                            if (document.getElementById('collapseCategory').getElementsByTagName('ul').length > 1) {
                                if (document.getElementById('collapseCategory').getElementsByTagName('ul')[1].getElementsByTagName('input').length > 0) {
                                    document.getElementById('collapseCategory').getElementsByTagName('ul')[1].getElementsByTagName('input')[0].checked = true;
                                }
                            }
                        } 
                        //CHECK SECOND and THIRD Level
                        else if (samGetBreadcrumbName.length == 4) {
                            //SECOND
                            if (document.getElementById('collapseCategory').getElementsByTagName('ul').length > 1) {
                                if (document.getElementById('collapseCategory').getElementsByTagName('ul')[1].getElementsByTagName('input').length > 0) {
                                    document.getElementById('collapseCategory').getElementsByTagName('ul')[1].getElementsByTagName('input')[0].checked = true;
                                }
                            }
        
                            //THIRD
                            if (document.getElementById('collapseCategory').getElementsByTagName('ul').length > 2) {
                                if (document.getElementById('collapseCategory').getElementsByTagName('ul')[2].getElementsByTagName('input').length > 0) {
                                    document.getElementById('collapseCategory').getElementsByTagName('ul')[2].getElementsByTagName('input')[0].checked = true;
                                }
                            }
                        } 
                        //CHECK SECOND, THIRD, and FOURTH Level
                        else if (samGetBreadcrumbName.length == 5) {
                            //SECOND
                            if (document.getElementById('collapseCategory').getElementsByTagName('ul').length > 1) {
                                if (document.getElementById('collapseCategory').getElementsByTagName('ul')[1].getElementsByTagName('input').length > 0) {
                                    document.getElementById('collapseCategory').getElementsByTagName('ul')[1].getElementsByTagName('input')[0].checked = true;
                                }
                            }
        
                            //THIRD
                            if (document.getElementById('collapseCategory').getElementsByTagName('ul').length > 2) {
                                if (document.getElementById('collapseCategory').getElementsByTagName('ul')[2].getElementsByTagName('input').length > 0) {
                                    document.getElementById('collapseCategory').getElementsByTagName('ul')[2].getElementsByTagName('input')[0].checked = true;
                                }
                            }
        
                            //FOURTH
                            if (document.getElementById('collapseCategory').getElementsByTagName('ul').length > 3) {
                                if (document.getElementById('collapseCategory').getElementsByTagName('ul')[3].getElementsByTagName('input').length > 0) {
                                    document.getElementById('collapseCategory').getElementsByTagName('ul')[3].getElementsByTagName('input')[0].checked = true;
                                }
                            }
                        } 
                        //CHECK SECOND, THIRD, FOURTH and FIFTH Level
                        else if (samGetBreadcrumbName.length == 6) {
                            //SECOND
                            if (document.getElementById('collapseCategory').getElementsByTagName('ul').length > 1) {
                                if (document.getElementById('collapseCategory').getElementsByTagName('ul')[1].getElementsByTagName('input').length > 0) {
                                    document.getElementById('collapseCategory').getElementsByTagName('ul')[1].getElementsByTagName('input')[0].checked = true;
                                }
                            }
        
                            //THIRD
                            if (document.getElementById('collapseCategory').getElementsByTagName('ul').length > 2) {
                                if (document.getElementById('collapseCategory').getElementsByTagName('ul')[2].getElementsByTagName('input').length > 0) {
                                    document.getElementById('collapseCategory').getElementsByTagName('ul')[2].getElementsByTagName('input')[0].checked = true;
                                }
                            }
        
                            //FOURTH
                            if (document.getElementById('collapseCategory').getElementsByTagName('ul').length > 3) {
                                if (document.getElementById('collapseCategory').getElementsByTagName('ul')[3].getElementsByTagName('input').length > 0) {
                                    document.getElementById('collapseCategory').getElementsByTagName('ul')[3].getElementsByTagName('input')[0].checked = true;
                                }
                            }
        
                            //FIFTH
                            if (document.getElementById('collapseCategory').getElementsByTagName('ul').length > 4) {
                                if (document.getElementById('collapseCategory').getElementsByTagName('ul')[4].getElementsByTagName('input').length > 0) {
                                    document.getElementById('collapseCategory').getElementsByTagName('ul')[4].getElementsByTagName('input')[0].checked = true;
                                }
                            }
                        }

                    }
        
                } 
    
            } else {
                //KEYWORD, SEARCH, or BRAND => Just expand the category
                if ((document.getElementById('collapseCategory')) && (document.getElementById('fullCategory'))) {   
                    document.getElementById('fullCategory').classList.toggle('collapsed');
                    document.getElementById('collapseCategory').style.display='block';
                }
            }
    
        }
    }
    
    /* :::::::::::::::: END :::::::::::::::: */





    /* :::::::::::::::: 2 of 2 - SHOW READ MORE ON SRCH :::::::::::::::: */

    samShowReadMoreSRCH();
    
    /* :::::::::::::::: END :::::::::::::::: */






    /* :::::::::::::::: DISABLE BREADCRUMB ON PARENT LEVEL ONLY (IN STAGE ONLY) :::::::::::::::: */
    if (document.getElementsByName("PAGETYPE").length > 0) {
        if (document.getElementsByName("PAGETYPE")[0].value == "CATEGORY") {

            //HOME is disabled using CSS
            //Disable Breadcrumb if only 1 remain
            if ($(".samSRCH_Breadcrumb ol.breadcrumb li").length == 2) {
                $(".samSRCH_Breadcrumb").hide(0);
                $(".samSRCH_h1").css('padding-top','20px');
            }

            //Hide Shop Category Button List if NONE
            if ($(".samSRCH_CateList_Wrapper a ").length == 0) {
                $('.samSRCH_CateList').hide(0);
            }
   
        } else if (
            (document.getElementsByName("PAGETYPE")[0].value == "SEARCH") ||
            (document.getElementsByName("PAGETYPE")[0].value == "KEYWORD")
        ) {
            //Must remove because of CSS important to override hide()
            $("main.category .breadcrumb").remove();    //Remove Search Term (Breadcrumb)
            $("main.category .samSRCH_CateList").remove(); //Remove Search Term (Breadcrumb)
        } else {
            //Brand Page Only 
        }
    } 

    /* :::::::::::::::: END :::::::::::::::: */


});

/* :::::::::::::::::::::::::::::::: END DOCUMENT READY :::::::::::::::::::::::::::::::: */



