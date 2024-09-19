
//SHOW ZOOM ICON FOR GALLERY IMAGES FOR MOBILE
if (document.getElementById('samPDPZoomIconDiv')) {

    //Show Zoom Icon
    document.getElementById('samPDPZoomIconDiv').innerHTML = '<i id="samPDPZoomIcon" class="fa fa-search-plus" onclick="samShowZoomIconPDP()"></i>';
    document.getElementById('samPDPZoomIcon').style.fontSize = '24px';
    document.getElementById('samPDPZoomIcon').style.color = '#555';
    document.getElementById('samPDPZoomIcon').style.padding = '5px';
    
}

function samShowZoomIconPDP() {
    if (document.getElementsByClassName('slick-active').length > 0) {
        
        //For mobile only => will be -1
        if (document.getElementsByClassName('slick-active')[0].getAttribute('src').indexOf("/css/ajax-loader") < 0) {   
            if (document.getElementById('samPDPImageZoom')) {
                
                var samTmpZoomImgURL = document.getElementsByClassName('slick-active')[0].getAttribute('src');
                samTmpZoomImgURL = samTmpZoomImgURL.replace("330_","1500_");
        
                //Check if HD image exists
                fetch(samTmpZoomImgURL, { method: 'HEAD' })
                .then(
                    function (samX) {
                        if (samX.ok) {

                        } else {
                            //If zoom image is not found => Use existed smaller image
                            //This is asynchronous. Image will be changed later once it is not found
                            document.getElementById('samTmpZoomImg').src = document.getElementsByClassName('slick-active')[0].getAttribute('src');
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
    
    //For AB Test - After scroll to top => Show button at bottom
    if ((document.getElementsByClassName('samShowAddToCartBottom').length > 0) || (document.getElementsByClassName('samShowAddToCartTop').length > 0)) {
        if (document.getElementById('AddToCartBtnForABTest')) {
            document.getElementById('AddToCartBtnForABTest').classList.remove("samShowAddToCartTop");
            document.getElementById('AddToCartBtnForABTest').classList.add("samShowAddToCartBottom");
        }
    }
    //END For AB Test - After scroll to top => Show button at bottom
}
//END SHOW ZOOM ICON FOR GALLERY IMAGES FOR MOBILE






//UNAVAILABLE ITEMS => SHOW SIMILIAR PRODUCTS
if (document.getElementById('sam--alt--item--container')) {

} else {

    if (document.getElementById('sam--product--not--available')) {

        //Make sure that the item is NOT AVAILABLE
        if (document.getElementById('sam--product--not--available').getElementsByTagName('p').length > 0) {
           
            //For Specific Styles and Unavailable Online only
            if (document.getElementById('style')) {
                if (
                    (document.getElementById('style').getAttribute("value") == "SP917") || 
                    (document.getElementById('style').getAttribute("value") == "SP918")
                ) {
    
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "FT2632",
                            "5.11 Tactical Company 3.0 CST Work Boots", 
                            "https://www.galls.com/photos/styles/FT2632_BLK_330_1.JPG",
                            "https://www.galls.com/ft2632-5-11-company-3-0-carbon-tac-toe-boot"
                        ],
                        [  
                            "FT2662",
                            "Thorogood 6\" Black Quick Release Station Work Boot w/ Translucent Bottom", 
                            "https://www.galls.com/photos/styles/FT2662_BLK_330_1.JPG",
                            "https://www.galls.com/thorogood-6-black-quick-release-station-work-boot-w-translucent-bottom"
                        ],
                        [  
                            "FW512",
                            "Thorogood SoftStreets 10\" Wellington Boot", 
                            "https://www.galls.com/photos/styles/FW512_BLK_330_1a.jpg",
                            "https://www.galls.com/thorogood-softstreets-10-inh-wellington-boot"
                        ],
                        [  
                            "SP833",
                            "Florsheim Quick Slip-Off Safety Toe Station Boot", 
                            "https://www.galls.com/photos/styles/SP833_330_1a.JPG",
                            "https://www.galls.com/florsheim-quick-slip-off-safety-toe-station-boot"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
    
    
                } else if (
                    (document.getElementById('style').getAttribute("value") == "BG006") || 
                    (document.getElementById('style').getAttribute("value") == "BG185")
                ) {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "BG395",
                            "5.11 Tactical Wingman Patrol Bag", 
                            "https://www.galls.com/photos/styles/BG395_BLK_330_1.JPG",
                            "https://www.galls.com/5-11-tactical-wingman-patrol-bag"
                        ],
                        [  
                            "BG186",
                            "Galls Duffel Bag", 
                            "https://www.galls.com/photos/styles/BG186_330_1.JPG",
                            "https://www.galls.com/galls-duffel-bag"
                        ],
                        [  
                            "BG237",
                            "5.11 Tactical Patrol Ready Bag", 
                            "https://www.galls.com/photos/styles/BG237_330_1.JPG",
                            "https://www.galls.com/5-11-tactical-patrol-ready-gear-bag"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
    
                } else if (document.getElementById('style').getAttribute("value") == "BG621") {
    
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "BG239",
                            "5.11 Tactical Range Ready Gear Bag", 
                            "https://www.galls.com/photos/styles/BG239_BLK_330_1.jpg",
                            "https://www.galls.com/5-11-tactical-range-ready-gear-bag"
                        ],
                        [  
                            "BB217",
                            "Galls Small Range Duffle Bag", 
                            "https://www.galls.com/photos/styles/BB217_BLK_330_1.JPG",
                            "https://www.galls.com/galls-small-range-duffle-bag"
                        ],
                        [  
                            "BG397",
                            "5.11 Tactical Bail Out Bag", 
                            "https://www.galls.com/photos/styles/BG397_330_1.JPG",
                            "https://www.galls.com/5-11-tactical-bail-out-bag"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "CP091") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "CP092",
                            "Galls Letter Size Clipboard", 
                            "https://www.galls.com/photos/styles/CP092_SIL_330_2.jpg",
                            "https://www.galls.com/galls-streetpro-top-open-legal-clipboard"
                        ],
                        [  
                            "CP003",
                            "Galls Letter Size Slim Clipboard", 
                            "https://www.galls.com/photos/styles/CP003_PLN_330_1.JPG",
                            "https://www.galls.com/galls-letter-size-slimline-a-report-holder"
                        ],
                        [  
                            "CP094",
                            "Galls Letter Size Side Open Clipboard", 
                            "https://www.galls.com/photos/styles/CP094_SIL_330_1.jpg",
                            "https://www.galls.com/galls-streetpro-side-open-letter-size-clipboard"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "FH122") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "FL222",
                            "Galls LED Flashlight with Wand Tips", 
                            "https://www.galls.com/photos/styles/FL222_BLK_330_1.jpg",
                            "https://www.galls.com/galls-200-lumens-led-tactical-light-with-wand-tips"
                        ],
                        [  
                            "FZ153",
                            "Streamlight ProTac 1L-1AA Tactical Flashlight", 
                            "https://www.galls.com/photos/styles/FZ153_BLK_330_1.JPG",
                            "https://www.galls.com/streamlight-protac-1l-1aa-tactical-flashlight"
                        ],
                        [  
                            "FH012",
                            "Streamlight ProTac 2L Tactical Flashlight", 
                            "https://www.galls.com/photos/styles/FH012_blk_330_1.JPG",
                            "https://www.galls.com/streamlight-protac-2l-tactical-flashlight"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "UA976") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "UA156",
                            "Penn Emblem American Flag Emblem for Right Sleeve", 
                            "https://www.galls.com/photos/styles/UA156_330_1.JPG",
                            "https://www.galls.com/penn-emblem-american-flag-emblem-for-right-sleeve"
                        ],
                        [  
                            "UA155",
                            "Penn Emblem American Flag Emblem for Left Sleeve", 
                            "https://www.galls.com/photos/styles/UA155_1_Z.jpg",
                            "https://www.galls.com/penn-emblem-american-flag-emblem-for-left-sleeve"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "HD077") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "HD622",
                            "5.11 Tactical Balaclava", 
                            "https://www.galls.com/photos/styles/HD622_BLK_330_1.JPG",
                            "https://www.galls.com/5-11-tactical-balaclava"
                        ],
                        [  
                            "HW678",
                            "Tru-Spec Gen III Level 2 ECWCS Balaclava", 
                            "https://www.galls.com/photos/styles/QM/ZOOM/S81-160.JPG",
                            "https://www.galls.com/tru-spec-gen-iii-level-2-ecwcs-balaclava"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "FW879") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "SP567",
                            "Galls 11\" Duty Boot Socks", 
                            "https://www.galls.com/photos/styles/SP567_330_1.JPG",
                            "https://www.galls.com/galls-11-duty-socks-with-extra-padding-in-toe-and-heel"
                        ],
                        [  
                            "FT1477",
                            "Galls Wool Boot Socks", 
                            "https://www.galls.com/photos/styles/FT1477_BLK_330_1.JPG",
                            "https://www.galls.com/galls-g-wool-boot-socks"
                        ],
                        [  
                            "FT1476",
                            "Galls G-Copper Socks", 
                            "https://www.galls.com/photos/styles/FT1476_BLK_330_1.JPG",
                            "https://www.galls.com/galls-g-copper-socks"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "BG847") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "BG1683",
                            "VERTX Gamut 2.0 Backpack", 
                            "https://www.galls.com/photos/styles/BG1683_BLK_330_1.JPG",
                            "https://www.galls.com/vertx-gamut-2-0-backpack"
                        ],
                        [  
                            "BG1819",
                            "5.11 Tactical RUSH 12 2.0 Backpack", 
                            "https://www.galls.com/photos/styles/BG1819_BLK_300_3.JPG",
                            "https://www.galls.com/5-11-tactical-rush-12-2-0-backpack"
                        ],
                        [  
                            "BB281",
                            "Tru-Spec Elite Three-Day Backpack", 
                            "https://www.galls.com/photos/styles/BB281_BLK_330_1.JPG",
                            "https://www.galls.com/tru-spec-elite-three-day-backpack"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "FW537") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "SP567",
                            "Galls 11\" Duty Boot Socks", 
                            "https://www.galls.com/photos/styles/SP567_330_1.JPG",
                            "https://www.galls.com/galls-11-duty-socks-with-extra-padding-in-toe-and-heel"
                        ],
                        [  
                            "FT1477",
                            "Galls Wool Boot Socks", 
                            "https://www.galls.com/photos/styles/FT1477_BLK_330_1.JPG",
                            "https://www.galls.com/galls-g-wool-boot-socks"
                        ],
                        [  
                            "FT1476",
                            "Galls G-Copper Socks", 
                            "https://www.galls.com/photos/styles/FT1476_BLK_330_1.JPG",
                            "https://www.galls.com/galls-g-copper-socks"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "GL409") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "GL1041",
                            "Worldwide Power Fleeece TouchScreen Gloves", 
                            "https://www.galls.com/photos/styles/GL1041_BLK_330_1.jpg",
                            "https://www.galls.com/worldwide-power-fleeece-touchscreen-gloves"
                        ],
                        [  
                            "GL489",
                            "Damascus Tempest All Weather Gloves", 
                            "https://www.galls.com/photos/styles/GL489_BLK_330_1.JPG",
                            "https://www.galls.com/damascus-tempest-all-weather-gloves"
                        ],
                        [  
                            "GL270",
                            "Damascus Stealth X Cold Weather Gloves w/GripSkin", 
                            "https://www.galls.com/photos/styles/b/501/37900L__37013.jpg",
                            "https://www.galls.com/damascus-stealth-x-cold-weather-gloves-w-gripskin"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "NP241") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "NP525",
                            "Galls Molded Nylon Double HandCuff Case", 
                            "https://www.galls.com/photos/styles/NP525_330_1.JPG",
                            "https://www.galls.com/galls-molded-nylon-double-handcuff-case"
                        ],
                        [  
                            "NP055",
                            "Lawpro Molded Single Handcuff Case", 
                            "https://www.galls.com/photos/styles/NP055_BLK_330_1.jpg",
                            "https://www.galls.com/lawpro-molded-single-handcuff-case"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "NP242") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "NY189",
                            "5.11 Tactical Sierra Double Mag Pouch", 
                            "https://www.galls.com/photos/styles/NY189_BLK_330_1.jpg",
                            "https://www.galls.com/5-11-tactical-sierra-double-mag-pouch"
                        ],
                        [  
                            "NP014",
                            "Lawpro Molded Double Mag Pouch", 
                            "https://www.galls.com/photos/styles/NP014_330_1.jpg",
                            "https://www.galls.com/lawpro-molded-double-mag-pouch"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "NY069") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "NP955",
                            "Sabre MK9 Spray Nylon Thigh Holster", 
                            "https://www.galls.com/photos/styles/NP955_BI_CL_330_1.jpg",
                            "https://www.galls.com/sabre-mk9-spray-nylon-thigh-holster"
                        ],
                        [  
                            "NY070",
                            "LawPro MK9 Spray Holster with Flashlight Pouch", 
                            "https://www.galls.com/photos/styles/S69-882_300_1.jpg",
                            "https://www.galls.com/lawpro-mk9-spray-holster-with-flashlight-pouch"
                        ],
                        [  
                            "NY104",
                            "Tuff Products Modular Gear MK-9 Holster", 
                            "https://www.galls.com/photos/styles/S71-106B_300_1.jpg",
                            "https://www.galls.com/tuff-products-modular-gear-mk-9-holster"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "RS121") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "RS210",
                            "Galls Black Pocket Handcuff Key", 
                            "https://www.galls.com/photos/styles/RS210_330_1.JPG",
                            "https://www.galls.com/galls-black-pocket-handcuff-key"
                        ],
                        [  
                            "RS732",
                            "Zak Tool Solid Stainless Handcuff Key", 
                            "https://www.galls.com/photos/styles/RS732_blk_330_1.jpg",
                            "https://www.galls.com/zak-tool-solid-stainless-handcuff-key"
                        ],
                        [  
                            "RS282",
                            "ASP Clip Handcuff Key", 
                            "https://www.galls.com/photos/styles/qm/zoom/S69-2461.jpg",
                            "https://www.galls.com/asp-clip-style-handcuff-key-black"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "GL631") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "GL234",
                            "Damascus Interceptor X™ Duty Gloves", 
                            "https://www.galls.com/photos/styles/GL234_BLK_330_1.JPG",
                            "https://www.galls.com/damascus-interceptor-xtm-duty-gloves"
                        ],
                        [  
                            "GL1268",
                            "5.11 Tactical Tac A3 Gloves", 
                            "https://www.galls.com/photos/styles/GL1268_BLK_330_1.jpg",
                            "https://www.galls.com/5-11-tactical-tac-a3-gloves"
                        ],
                        [  
                            "GL239",
                            "Mechanix Wear Original Glove", 
                            "https://www.galls.com/photos/styles/GL239_STH_330_1.JPG",
                            "https://www.galls.com/mechanix-wear-original-glove"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "TE242") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "TE210",
                            "Galls Gas Mask Pouch", 
                            "https://www.galls.com/photos/styles/TE210_600_1.JPG",
                            "https://www.galls.com/galls-gas-mask-pouch"
                        ],
                        [  
                            "TE080",
                            "BLACKHAWK! Omega Gas Mask Pouch", 
                            "https://www.galls.com/photos/styles/TE080_330_1.JPG",
                            "https://www.galls.com/blackhawk-omega-gas-mask-pouch"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (
                    (document.getElementById('style').getAttribute("value") == "KN348") || 
                    (document.getElementById('style').getAttribute("value") == "KN452")
                ) {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "KN556",
                            "SOG Escape Knife with Seatbelt Cutter and Tungsten Glass Breaker", 
                            "https://www.galls.com/photos/styles/KN556_330_1.JPG",
                            "https://www.galls.com/sog-escape-knife-with-seatbelt-cutter-and-tungsten-glass-breaker"
                        ],
                        [  
                            "KV143",
                            "Smith & Wesson S.W.A.T. M.A.G.I.C. Assisted Opening Knife with Serrated Edge", 
                            "https://www.galls.com/photos/styles/KV143_330_1.jpg",
                            "https://www.galls.com/smith-wesson-s-w-a-t-m-a-g-i-c-assisted-opening-knife-with-serrated-edge"
                        ],
                        [  
                            "KN1851",
                            "Coast FX200 Folding Knife", 
                            "https://www.galls.com/photos/styles/KN1851_BLK_330_1.JPG",
                            "https://www.galls.com/coast-fx200-folding-knife"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (
                    (document.getElementById('style').getAttribute("value") == "BG736") || 
                    (document.getElementById('style').getAttribute("value") == "BG623") ||
                    (document.getElementById('style').getAttribute("value") == "BG1728")
                ) {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "BG236",
                            "Galls StreetPro Gear Bag - GSA Approved", 
                            "https://www.galls.com/photos/styles/BG236_330_3.JPG",
                            "https://www.galls.com/galls-streetpro-gear-bag-gsa-approved"
                        ],
                        [  
                            "BG237",
                            "5.11 Tactical Patrol Ready Bag", 
                            "https://www.galls.com/photos/styles/BG237_330_1.JPG",
                            "https://www.galls.com/5-11-tactical-patrol-ready-gear-bag"
                        ],
                        [  
                            "BG395",
                            "5.11 Tactical Wingman Patrol Bag", 
                            "https://www.galls.com/photos/styles/BG395_BLK_330_1.JPG",
                            "https://www.galls.com/5-11-tactical-wingman-patrol-bag"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else if (document.getElementById('style').getAttribute("value") == "FE514") {
                    //Show Alternative Products
                    var arrSamAltSimilarProducts = 
                    [
                        [  
                            "FE001",
                            "Galls Standard Window Punch", 
                            "https://www.galls.com/photos/styles/FE001_330_1.JPG",
                            "https://www.galls.com/galls-standard-window-punch"
                        ],
                        [  
                            "FA306",
                            "EMI Standard Window Punch with Pocket Clip", 
                            "https://www.galls.com/photos/styles/qm/zoom/S69-2282.jpg",
                            "https://www.galls.com/emi-standard-window-punch-with-pocket-clip"
                        ]
                    ];
    
                    samShowSimilarProductsPDP(arrSamAltSimilarProducts);
                    
                } else {
                    //Do Nothing
                }
            }
        }
    
    }
}



function samShowSimilarProductsPDP(arrSamAltSimilarProducts) {

    //Apply CSS to Item Not Available Div for selected STYLES
    document.getElementById('sam--product--not--available').getElementsByTagName('p')[0].classList.add("sam--spna--p");
    document.getElementById('sam--product--not--available').style.marginTop = '20px';
    document.getElementById('sam--product--not--available').style.marginBottom = '10px';
    document.getElementById('sam--product--not--available').style.padding = '10px';
    document.getElementById('sam--product--not--available').style.backgroundColor = '#f2f2f2';
    document.getElementById('sam--product--not--available').style.border = '1px solid #dcdcdc';
    document.getElementById('sam--product--not--available').style.boxShadow = '1px 2px 5px 0px rgb(0 0 0 / 15%)';

    document.getElementById('sam--product--not--available').innerHTML += 
    '<div style="background-color: #f2f2f2; border-top: 1px solid #dcdcdc; padding: 20px; margin: 10px -10px -10px -10px;">'+
    '   <div style="float: left">'+
    '       <h6 style="margin: -5px 0 0 -4px; color: #007ac2">Similar Products Available Now</h6>'+
    '   </div>'+
    '   <div id="sam--alt--item--container"></div>'+
    '</div>';

    for (var samAlt = 0; samAlt < arrSamAltSimilarProducts.length; samAlt++) {
        document.getElementById('sam--alt--item--container').innerHTML +=
        '<div class="sam--alt--item--row">'+
        '    <div style="float: left; width: 40%">'+
        '        <a href="'+ arrSamAltSimilarProducts[samAlt][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('style').getAttribute("value") +'_'+ arrSamAltSimilarProducts[samAlt][0] +'\');"><img src="'+ arrSamAltSimilarProducts[samAlt][2] +'" style="width: 100%;"></a>'+
        '    </div>    '+
        '    <div style="float: right; width: 60%; padding: 10px 5px 20px 5px; background-color: #fff">'+
        '       <div class="sam-alt-item-title" style="font-weight: bold; "><a href="'+ arrSamAltSimilarProducts[samAlt][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('style').getAttribute("value") +'_'+ arrSamAltSimilarProducts[samAlt][0] +'\');">'+ arrSamAltSimilarProducts[samAlt][1] +'</a></div>'+
        '       <div class="sam-alt-item-details" style="padding-top: 5px">Item# '+ arrSamAltSimilarProducts[samAlt][0] +'</div>'+
        '       <div class="sam-alt-item-stock" style="padding-top: 5px; color: green">Status: In Stock</div> '+      
        '       <div class="sam-alt-item-shop-now" style="padding-top: 20px">'+
        '           <a href="'+ arrSamAltSimilarProducts[samAlt][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('style').getAttribute("value") +'_'+ arrSamAltSimilarProducts[samAlt][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:18px"></i>&nbsp;&nbsp;Shop Now</span></a>'+
        '       </div>'+
        '    </div>'+
        '</div> ';
    }
}
//END UNAVAILABLE ITEMS => SHOW SIMILIAR PRODUCTS







//SHOW HOLSTER FINDER LINK
if (document.getElementsByClassName('breadcrumb').length > 0) {

    var samGetFullBreadCrumb = document.getElementsByClassName('breadcrumb')[0].getElementsByTagName('li');  //Get full Category list

    if (samGetFullBreadCrumb.length > 0) {
        var samGetCategoryLength = samGetFullBreadCrumb.length - 2;     //Get last LI
        if (document.getElementsByClassName('breadcrumb')[0].getElementsByTagName('li')[samGetCategoryLength].getElementsByTagName('a').length > 0) {
            var samGetLastCategoryName = document.getElementsByClassName('breadcrumb')[0].getElementsByTagName('li')[samGetCategoryLength].getElementsByTagName('a')[0].innerHTML; //innerHTML of last Category
            var arrNeededHolsterCategory = [  "Equipment", 
                                            "Holsters | Duty Gear", 
                                            "Holsters", 
                                            "Holster Finder", 
                                            "Leather Duty Holsters", 
                                            "Nylon | Synthetic Duty Holsters",
                                            "Concealment Holsters"];
    
            for (var samTmpNHC = 0; samTmpNHC < arrNeededHolsterCategory.length; samTmpNHC++) {
                //If product is in holster category
                if (samGetLastCategoryName == arrNeededHolsterCategory[samTmpNHC]) {
    
                    //Check if it is a Taser Products
                    if (document.getElementsByClassName('product__title')[0]) {
                        if (document.getElementsByClassName('product__title')[0].innerHTML.toLowerCase().indexOf("taser") < 0) {
                            //Equipment and Holsters | Duty Gear Category
                            if (samTmpNHC < 2) {
                                samGetCategoryLength += 1;
                                if (document.getElementsByClassName('breadcrumb')[0].getElementsByTagName('li')[samGetCategoryLength]) {
                                    if (document.getElementsByClassName('breadcrumb')[0].getElementsByTagName('li')[samGetCategoryLength].innerHTML.toLowerCase().indexOf("holster") > 0) {
                                        //Show Holster Finder Link
                                        if (document.getElementById('holsterFinderLink')) {
                                            document.getElementById('holsterFinderLink').style.color = '#0a4495';
                                            document.getElementById('holsterFinderLink').style.backgroundColor = '#d9ddfd';
                                            document.getElementById('holsterFinderLink').style.textAlign = 'center';
                                            document.getElementById('holsterFinderLink').style.padding = '10px';
                                            document.getElementById('holsterFinderLink').style.display = 'block';
                                            document.getElementById('holsterFinderLink').style.border = '1px solid #99cdf2';
                                            document.getElementById('holsterFinderLink').innerHTML =
                                            '  <span id="holsterFinderLink--Text">    ' +
                                            '       <img style="height:50px;padding-right: 10px;" src="https://www.galls.com/photos/slide_images/ga/Cat_Holsters/holsters-finder-v3-trans.png"> '   +
                                            '       <a href="/holster-finder">Click here to use our holster finder tool</a>' +
                                            '  </span>';
                                            //End Show Holster Finder Link
    
                                            samTmpNHC = 7;
                                        }
                                    }
                                }
                            } else {
                                //Show Holster Finder Link
                                if (document.getElementById('holsterFinderLink')) {
                                    document.getElementById('holsterFinderLink').style.color = '#0a4495';
                                    document.getElementById('holsterFinderLink').style.backgroundColor = '#d9ddfd';
                                    document.getElementById('holsterFinderLink').style.textAlign = 'center';
                                    document.getElementById('holsterFinderLink').style.padding = '10px';
                                    document.getElementById('holsterFinderLink').style.display = 'block';
                                    document.getElementById('holsterFinderLink').style.border = '1px solid #99cdf2';
                                    document.getElementById('holsterFinderLink').innerHTML =
                                    '  <span id="holsterFinderLink--Text">    ' +
                                    '       <img style="height:50px;padding-right: 10px;" src="https://www.galls.com/photos/slide_images/ga/Cat_Holsters/holsters-finder-v3-trans.png"> '   +
                                    '       <a href="/holster-finder">Click here to use our holster finder tool</a>' +
                                    '  </span>';
                                    //End Show Holster Finder Link
    
                                    samTmpNHC = 7; 
                                }
                            }
                        }
    
                    } //END Check if it is a Taser Products
                }
            }
        }

    }



}
//END SHOW HOLSTER FINDER LINK






//WHEN DOCUMENT READY
$(document).ready(function() {

    //FOR HS393 - SHOW ONLY 19 QTYs
    if (document.getElementById('style')) {
        if (document.getElementById('style').getAttribute("value")) {
            if (document.getElementById('style').getAttribute("value") == "HS393") {
                if (document.getElementById('SIQTY')) {
                    var samTmpDDLQty = document.getElementById('SIQTY');
                    samTmpDDLQty.innerHTML = "";    //Remove all option
                    
                    var samSelOpt = document.createElement("OPTION");
                    for (var z = 1; z < 20; z++) {
                        samSelOpt = document.createElement("OPTION");
                        samSelOpt.innerHTML = z;
                        if (z < 10) {
                            samSelOpt.value = "00" + z;
                        } else {
                            samSelOpt.value = "0" + z;
                        }
                        samTmpDDLQty.options.add(samSelOpt);
                    }  
                    samTmpDDLQty.selectedIndex = "0"; 
                }
            }
        }
    }
    //END FOR HS393 - SHOW ONLY 19 QTYs


});
//END WHEN DOCUMENT READY