
//UNAVAILABLE ITEMS => SHOW SIMILIAR PRODUCTS
if (document.getElementById('sam--alt--item--container')) {

} else {
    if (document.getElementById('sam--product--not--available--quickview')) {

        //Make sure that the item is NOT AVAILABLE
        if (document.getElementById('sam--product--not--available--quickview').getElementsByTagName('p').length > 0) {
           
            //For Specific Styles and Unavailable Online only
            if (document.getElementById('Qstyle')) {
    
                if (
                    (document.getElementById('Qstyle').getAttribute("value") == "SP917") || 
                    (document.getElementById('Qstyle').getAttribute("value") == "SP918")
                ) {
                
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                
                
                } else if (
                    (document.getElementById('Qstyle').getAttribute("value") == "BG006") || 
                    (document.getElementById('Qstyle').getAttribute("value") == "BG185")
                ) {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                
                } else if (document.getElementById('Qstyle').getAttribute("value") == "BG621") {
                
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "CP091") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "FH122") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "UA976") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "HD077") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "FW879") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "BG847") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "FW537") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "GL409") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "NP241") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "NP242") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "NY069") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "RS121") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "GL631") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "TE242") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
                
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (
                    (document.getElementById('Qstyle').getAttribute("value") == "KN348") || 
                    (document.getElementById('Qstyle').getAttribute("value") == "KN452")
                ) {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
    
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (
                    (document.getElementById('Qstyle').getAttribute("value") == "BG736") || 
                    (document.getElementById('Qstyle').getAttribute("value") == "BG623") ||
                    (document.getElementById('Qstyle').getAttribute("value") == "BG1728")
                ) {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
    
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else if (document.getElementById('Qstyle').getAttribute("value") == "FE514") {
                    //Show Alternative Products
                    var arrSamAltSimilarProductsQV = 
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
    
                    samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV);
                    
                } else {
                    //Do Nothing
                }
    
            }
    
        }
    
    }
} 



function samShowSimilarProductsPDPQV(arrSamAltSimilarProductsQV) {

    //Apply CSS to Item Not Available Div for selected STYLES
    document.getElementById('sam--product--not--available--quickview').getElementsByTagName('p')[0].style.margin = '-10px';
    document.getElementById('sam--product--not--available--quickview').getElementsByTagName('p')[0].style.padding = '10px 15px';

    document.getElementById('sam--product--not--available--quickview').style.marginTop = '20px';
    document.getElementById('sam--product--not--available--quickview').style.marginBottom = '10px';
    document.getElementById('sam--product--not--available--quickview').style.padding = '10px';
    document.getElementById('sam--product--not--available--quickview').style.backgroundColor = '#f2f2f2';
    document.getElementById('sam--product--not--available--quickview').style.border = '1px solid #dcdcdc';
    document.getElementById('sam--product--not--available--quickview').style.boxShadow = '1px 2px 5px 0px rgb(0 0 0 / 15%)';


    document.getElementById('sam--product--not--available--quickview').innerHTML += 
    '<div style="background-color: #f2f2f2; border-top: 1px solid #dcdcdc; padding: 20px 20px 12px 20px; margin: 10px -10px -10px -10px; overflow: hidden">'+
    '   <div style="float: left; width: 100%; margin-bottom: 5px">'+
    '       <h6 style="margin: -5px 0 0 -4px; color: #007ac2">Similar Products Available Now</h6>'+
    '   </div>'+
    '   <div id="sam--alt--item--container" style="float: left; width: calc(100% + 20px); margin-bottom: 0px; margin-left: -10px;"></div>'+
    '</div>';


    if (arrSamAltSimilarProductsQV.length == 1) {

        document.getElementById('sam--alt--item--container').innerHTML +=
        '<div id="myHeroCarousel" class="carousel slide" data-ride="carousel">'+
        '    <div class="carousel-inner" style="padding: 0 10px">'+
        '        <div class="item active">'+
                    //Product 1
                    '<div class="sam--alt--item--row" style="width: 50%; float: left">'+
                    '   <div style="float: left; width: 100%; height: 200px; text-align: center; overflow: hidden">'+
                    '       <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');"><img src="'+ arrSamAltSimilarProductsQV[0][2] +'" style="height: 200px; width: auto"></a>'+
                    '   </div>'+
                    '   <div style="float: right; width: 100%; padding: 10px 10px 15px 10px; background-color: #fff">'+
                    '       <div class="sam-alt-item-title" style="font-weight: bold; font-size: 15px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden; height: 40px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');">'+ arrSamAltSimilarProductsQV[0][1] +'</a>'+
                    '       </div>'+
                    '       <div class="sam-alt-item-details" style="padding-top: 10px; float: left; font-size: 12px">Item# '+ arrSamAltSimilarProductsQV[0][0] +'</div>'+
                    '       <div class="sam-alt-item-stock" style="padding-top: 10px; color: green; float: right; font-size: 12px">Status: In Stock</div>'+
                    '       <div class="sam-alt-item-shop-now" style="padding-top: 40px; font-size: 14px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:16px"></i>&nbsp;&nbsp;Shop Now<span></a>'+
                    '       </div>'+
                    '   </div>'+
                    '</div>'+
        '       </div>'+
        '    </div>'+
        '</div>';

    } else if (arrSamAltSimilarProductsQV.length == 2) {

        document.getElementById('sam--alt--item--container').innerHTML +=
        '<div id="myHeroCarousel" class="carousel slide" data-ride="carousel">'+
        '    <div class="carousel-inner" style="padding: 0 10px">'+
        '        <div class="item active">'+
                    //Product 1 and 2
                    '<div class="sam--alt--item--row" style="width: 50%; float: left">'+
                    '   <div style="float: left; width: 100%; height: 200px; text-align: center; overflow: hidden">'+
                    '       <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');"><img src="'+ arrSamAltSimilarProductsQV[0][2] +'" style="height: 200px; width: auto"></a>'+
                    '   </div>'+
                    '   <div style="float: right; width: 100%; padding: 10px 10px 15px 10px; background-color: #fff">'+
                    '       <div class="sam-alt-item-title" style="font-weight: bold; font-size: 15px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden; height: 40px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');">'+ arrSamAltSimilarProductsQV[0][1] +'</a>'+
                    '       </div>'+
                    '       <div class="sam-alt-item-details" style="padding-top: 10px; float: left; font-size: 12px">Item# '+ arrSamAltSimilarProductsQV[0][0] +'</div>'+
                    '       <div class="sam-alt-item-stock" style="padding-top: 10px; color: green; float: right; font-size: 12px">Status: In Stock</div>'+
                    '       <div class="sam-alt-item-shop-now" style="padding-top: 40px; font-size: 14px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:16px"></i>&nbsp;&nbsp;Shop Now<span></a>'+
                    '       </div>'+
                    '   </div>'+
                    '</div>'+
                    '<div class="sam--alt--item--row" style="width: 49%; float: right">'+
                    '   <div style="float: left; width: 100%; height: 200px; text-align: center; overflow: hidden">'+
                    '       <a href="'+ arrSamAltSimilarProductsQV[1][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[1][0] +'\');"><img src="'+ arrSamAltSimilarProductsQV[1][2] +'" style="height: 200px; width: auto"></a>'+
                    '   </div>'+
                    '   <div style="float: right; width: 100%; padding: 10px 10px 15px 10px; background-color: #fff">'+
                    '       <div class="sam-alt-item-title" style="font-weight: bold; font-size: 15px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden; height: 40px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[1][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[1][0] +'\');">'+ arrSamAltSimilarProductsQV[1][1] +'</a>'+
                    '       </div>'+
                    '       <div class="sam-alt-item-details" style="padding-top: 10px; float: left; font-size: 12px">Item# '+ arrSamAltSimilarProductsQV[1][0] +'</div>'+
                    '       <div class="sam-alt-item-stock" style="padding-top: 10px; color: green; float: right; font-size: 12px">Status: In Stock</div>'+
                    '       <div class="sam-alt-item-shop-now" style="padding-top: 40px; font-size: 14px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[1][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[1][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:16px"></i>&nbsp;&nbsp;Shop Now<span></a>'+
                    '       </div>'+
                    '   </div>'+
                    '</div>'+
        '       </div>'+
        '    </div>'+
        '</div>';

    } else if (arrSamAltSimilarProductsQV.length == 3) {

        document.getElementById('sam--alt--item--container').innerHTML +=
        '<div id="myHeroCarousel" class="carousel slide" data-ride="carousel">'+
        '    <div class="carousel-inner" style="padding: 0 10px">'+
        '        <div class="item active">'+
                    //Product 1 and 2
                    '<div class="sam--alt--item--row" style="width: 50%; float: left">'+
                    '   <div style="float: left; width: 100%; height: 200px; text-align: center; overflow: hidden">'+
                    '       <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');"><img src="'+ arrSamAltSimilarProductsQV[0][2] +'" style="height: 200px; width: auto"></a>'+
                    '   </div>'+
                    '   <div style="float: right; width: 100%; padding: 10px 10px 15px 10px; background-color: #fff">'+
                    '       <div class="sam-alt-item-title" style="font-weight: bold; font-size: 15px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden; height: 40px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');">'+ arrSamAltSimilarProductsQV[0][1] +'</a>'+
                    '       </div>'+
                    '       <div class="sam-alt-item-details" style="padding-top: 10px; float: left; font-size: 12px">Item# '+ arrSamAltSimilarProductsQV[0][0] +'</div>'+
                    '       <div class="sam-alt-item-stock" style="padding-top: 10px; color: green; float: right; font-size: 12px">Status: In Stock</div>'+
                    '       <div class="sam-alt-item-shop-now" style="padding-top: 40px; font-size: 14px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:16px"></i>&nbsp;&nbsp;Shop Now<span></a>'+
                    '       </div>'+
                    '   </div>'+
                    '</div>'+
                    '<div class="sam--alt--item--row" style="width: 49%; float: right">'+
                    '   <div style="float: left; width: 100%; height: 200px; text-align: center; overflow: hidden">'+
                    '       <a href="'+ arrSamAltSimilarProductsQV[1][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[1][0] +'\');"><img src="'+ arrSamAltSimilarProductsQV[1][2] +'" style="height: 200px; width: auto"></a>'+
                    '   </div>'+
                    '   <div style="float: right; width: 100%; padding: 10px 10px 15px 10px; background-color: #fff">'+
                    '       <div class="sam-alt-item-title" style="font-weight: bold; font-size: 15px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden; height: 40px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[1][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[1][0] +'\');">'+ arrSamAltSimilarProductsQV[1][1] +'</a>'+
                    '       </div>'+
                    '       <div class="sam-alt-item-details" style="padding-top: 10px; float: left; font-size: 12px">Item# '+ arrSamAltSimilarProductsQV[1][0] +'</div>'+
                    '       <div class="sam-alt-item-stock" style="padding-top: 10px; color: green; float: right; font-size: 12px">Status: In Stock</div>'+
                    '       <div class="sam-alt-item-shop-now" style="padding-top: 40px; font-size: 14px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[1][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[1][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:16px"></i>&nbsp;&nbsp;Shop Now<span></a>'+
                    '       </div>'+
                    '   </div>'+
                    '</div>'+
        '       </div>'+
        '       <div class="item">'+
                    //Product 3
                    '<div class="sam--alt--item--row" style="width: 50%; float: left">'+
                    '   <div style="float: left; width: 100%; height: 200px; text-align: center; overflow: hidden">'+
                    '       <a href="'+ arrSamAltSimilarProductsQV[2][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[2][0] +'\');"><img src="'+ arrSamAltSimilarProductsQV[2][2] +'" style="height: 200px; width: auto"></a>'+
                    '   </div>'+
                    '   <div style="float: right; width: 100%; padding: 10px 10px 15px 10px; background-color: #fff">'+
                    '       <div class="sam-alt-item-title" style="font-weight: bold; font-size: 15px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden; height: 40px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[2][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[2][0] +'\');">'+ arrSamAltSimilarProductsQV[2][1] +'</a>'+
                    '       </div>'+
                    '       <div class="sam-alt-item-details" style="padding-top: 10px; float: left; font-size: 12px">Item# '+ arrSamAltSimilarProductsQV[2][0] +'</div>'+
                    '       <div class="sam-alt-item-stock" style="padding-top: 10px; color: green; float: right; font-size: 12px">Status: In Stock</div>'+
                    '       <div class="sam-alt-item-shop-now" style="padding-top: 40px; font-size: 14px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[2][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[2][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:16px"></i>&nbsp;&nbsp;Shop Now<span></a>'+
                    '       </div>'+
                    '   </div>'+
                    '</div>'+
        '       </div>'+
        '    </div>'+
        '    <a class="left carousel-control" href="#myHeroCarousel" data-slide="prev" style="background-image: none; margin-left: -20px; margin-top: 100px; height: 50px">'+
        '       <span class="glyphicon glyphicon-chevron-left" style="color: red"></span>'+
        '       <span class="sr-only">Previous</span>'+
        '    </a>'+
        '    <a class="right carousel-control" href="#myHeroCarousel" data-slide="next" style="background-image: none; margin-right: -20px; margin-top: 100px; height: 50px">'+
        '        <span class="glyphicon glyphicon-chevron-right" style="color: red"></span>'+
        '        <span class="sr-only">Next</span>'+
        '    </a>'+
        '</div>';

    } else {

        document.getElementById('sam--alt--item--container').innerHTML +=
        '<div id="myHeroCarousel" class="carousel slide" data-ride="carousel">'+
        '    <div class="carousel-inner" style="padding: 0 10px">'+
        '        <div class="item active">'+
                    //Product 1 and 2
                    '<div class="sam--alt--item--row" style="width: 50%; float: left">'+
                    '   <div style="float: left; width: 100%; height: 200px; text-align: center; overflow: hidden">'+
                    '       <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');"><img src="'+ arrSamAltSimilarProductsQV[0][2] +'" style="height: 200px; width: auto"></a>'+
                    '   </div>'+
                    '   <div style="float: right; width: 100%; padding: 10px 10px 15px 10px; background-color: #fff">'+
                    '       <div class="sam-alt-item-title" style="font-weight: bold; font-size: 15px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden; height: 40px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');">'+ arrSamAltSimilarProductsQV[0][1] +'</a>'+
                    '       </div>'+
                    '       <div class="sam-alt-item-details" style="padding-top: 10px; float: left; font-size: 12px">Item# '+ arrSamAltSimilarProductsQV[0][0] +'</div>'+
                    '       <div class="sam-alt-item-stock" style="padding-top: 10px; color: green; float: right; font-size: 12px">Status: In Stock</div>'+
                    '       <div class="sam-alt-item-shop-now" style="padding-top: 40px; font-size: 14px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[0][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[0][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:16px"></i>&nbsp;&nbsp;Shop Now<span></a>'+
                    '       </div>'+
                    '   </div>'+
                    '</div>'+
                    '<div class="sam--alt--item--row" style="width: 49%; float: right">'+
                    '   <div style="float: left; width: 100%; height: 200px; text-align: center; overflow: hidden">'+
                    '       <a href="'+ arrSamAltSimilarProductsQV[1][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[1][0] +'\');"><img src="'+ arrSamAltSimilarProductsQV[1][2] +'" style="height: 200px; width: auto"></a>'+
                    '   </div>'+
                    '   <div style="float: right; width: 100%; padding: 10px 10px 15px 10px; background-color: #fff">'+
                    '       <div class="sam-alt-item-title" style="font-weight: bold; font-size: 15px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden; height: 40px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[1][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[1][0] +'\');">'+ arrSamAltSimilarProductsQV[1][1] +'</a>'+
                    '       </div>'+
                    '       <div class="sam-alt-item-details" style="padding-top: 10px; float: left; font-size: 12px">Item# '+ arrSamAltSimilarProductsQV[1][0] +'</div>'+
                    '       <div class="sam-alt-item-stock" style="padding-top: 10px; color: green; float: right; font-size: 12px">Status: In Stock</div>'+
                    '       <div class="sam-alt-item-shop-now" style="padding-top: 40px; font-size: 14px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[1][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[1][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:16px"></i>&nbsp;&nbsp;Shop Now<span></a>'+
                    '       </div>'+
                    '   </div>'+
                    '</div>'+
        '       </div>'+
        '       <div class="item">'+
                    //Product 3 and 4
                    '<div class="sam--alt--item--row" style="width: 50%; float: left">'+
                    '   <div style="float: left; width: 100%; height: 200px; text-align: center; overflow: hidden">'+
                    '       <a href="'+ arrSamAltSimilarProductsQV[2][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[2][0] +'\');"><img src="'+ arrSamAltSimilarProductsQV[2][2] +'" style="height: 200px; width: auto"></a>'+
                    '   </div>'+
                    '   <div style="float: right; width: 100%; padding: 10px 10px 15px 10px; background-color: #fff">'+
                    '       <div class="sam-alt-item-title" style="font-weight: bold; font-size: 15px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden; height: 40px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[2][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[2][0] +'\');">'+ arrSamAltSimilarProductsQV[2][1] +'</a>'+
                    '       </div>'+
                    '       <div class="sam-alt-item-details" style="padding-top: 10px; float: left; font-size: 12px">Item# '+ arrSamAltSimilarProductsQV[2][0] +'</div>'+
                    '       <div class="sam-alt-item-stock" style="padding-top: 10px; color: green; float: right; font-size: 12px">Status: In Stock</div>'+
                    '       <div class="sam-alt-item-shop-now" style="padding-top: 40px; font-size: 14px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[2][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[2][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:16px"></i>&nbsp;&nbsp;Shop Now<span></a>'+
                    '       </div>'+
                    '   </div>'+
                    '</div>'+
                    '<div class="sam--alt--item--row" style="width: 49%; float: right">'+
                    '   <div style="float: left; width: 100%; height: 200px; text-align: center; overflow: hidden">'+
                    '       <a href="'+ arrSamAltSimilarProductsQV[3][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[3][0] +'\');"><img src="'+ arrSamAltSimilarProductsQV[3][2] +'" style="height: 200px; width: auto"></a>'+
                    '   </div>'+
                    '   <div style="float: right; width: 100%; padding: 10px 10px 15px 10px; background-color: #fff">'+
                    '       <div class="sam-alt-item-title" style="font-weight: bold; font-size: 15px;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden; height: 40px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[3][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[3][0] +'\');">'+ arrSamAltSimilarProductsQV[3][1] +'</a>'+
                    '       </div>'+
                    '       <div class="sam-alt-item-details" style="padding-top: 10px; float: left; font-size: 12px">Item# '+ arrSamAltSimilarProductsQV[3][0] +'</div>'+
                    '       <div class="sam-alt-item-stock" style="padding-top: 10px; color: green; float: right; font-size: 12px">Status: In Stock</div>'+
                    '       <div class="sam-alt-item-shop-now" style="padding-top: 40px; font-size: 14px">'+
                    '           <a href="'+ arrSamAltSimilarProductsQV[3][3] +'" onclick="ga(\'send\', \'event\', \'SimilarProducts\', \'click\', \''+ document.getElementById('Qstyle').getAttribute("value") +'_'+ arrSamAltSimilarProductsQV[3][0] +'\');"><span class="btnSimilarProdPDP"><i class="fa fa-cart-plus" style="font-size:16px"></i>&nbsp;&nbsp;Shop Now<span></a>'+
                    '       </div>'+
                    '   </div>'+
                    '</div>'+
        '       </div>'+
        '    </div>'+
        '    <a class="left carousel-control" href="#myHeroCarousel" data-slide="prev" style="background-image: none; margin-left: -20px; margin-top: 100px; height: 50px">'+
        '       <span class="glyphicon glyphicon-chevron-left" style="color: red"></span>'+
        '       <span class="sr-only">Previous</span>'+
        '    </a>'+
        '    <a class="right carousel-control" href="#myHeroCarousel" data-slide="next" style="background-image: none; margin-right: -20px; margin-top: 100px; height: 50px">'+
        '        <span class="glyphicon glyphicon-chevron-right" style="color: red"></span>'+
        '        <span class="sr-only">Next</span>'+
        '    </a>'+
        '</div>';

    }
    

}
//END UNAVAILABLE ITEMS => SHOW SIMILIAR PRODUCTS







//SHOW HOLSTER FINDER LINK
var arrNeededHolsterCategory = [  ".com/equipment", 
                                ".com/holsters-duty-gear", 
                                ".com/holsters", //share "holsters" => < 3
                                ".com/leather-duty-holsters", 
                                ".com/nylon-synthetic-duty-holsters",
                                ".com/concealment-holsters"];

for (var samTmpNHCQV = 0; samTmpNHCQV < arrNeededHolsterCategory.length; samTmpNHCQV++) {

    //If product is in holster category
    if (window.location.href.includes(arrNeededHolsterCategory[samTmpNHCQV])) {
        if (samTmpNHCQV < 3) {
            if (document.getElementsByClassName('product__title')[0].getElementsByTagName('h3').length > 0) {
                if (document.getElementsByClassName('product__title')[0].getElementsByTagName('h3')[0].innerHTML.toLowerCase().indexOf("holster") > 0) {
                    //Check if it is a Taser Products
                    if (document.getElementsByClassName('product__title')[0].getElementsByTagName('h3')[0].innerHTML.toLowerCase().indexOf("taser") < 0) {
                        //Show Holster Finder Link
                        if(document.getElementById('holsterFinderLink')) {
                            document.getElementById('holsterFinderLink').style.color = '#0a4495';
                            document.getElementById('holsterFinderLink').style.backgroundColor = '#d9ddfd';
                            document.getElementById('holsterFinderLink').style.textAlign = 'center';
                            document.getElementById('holsterFinderLink').style.padding = '5px';
                            document.getElementById('holsterFinderLink').style.display = 'block';
                            document.getElementById('holsterFinderLink').style.border = '1px solid #99cdf2';
                            document.getElementById('holsterFinderLink').style.marginTop = '-20px';
                            document.getElementById('holsterFinderLink').style.marginBottom = '20px';
                            document.getElementById('holsterFinderLink').style.width = '400px';
                            document.getElementById('holsterFinderLink').innerHTML =
                            '  <span id="holsterFinderLink--Text">    ' +
                            '       <img style="height:50px;padding-right: 10px;" src="https://www.galls.com/photos/slide_images/ga/Cat_Holsters/holsters-finder-v3-trans.png"> '   +
                            '       <a href="/holster-finder">Click here to use our holster finder tool</a>' +
                            '  </span>';
                            //END Show Holster Finder Link
                            
                            samTmpNHCQV = 7;
                        }
                    }
                } 
            }   
        } else {
            //Check if it is a Taser Products
            if (document.getElementsByClassName('product__title')[0].getElementsByTagName('h3').length > 0) {
                if (document.getElementsByClassName('product__title')[0].getElementsByTagName('h3')[0].innerHTML.toLowerCase().indexOf("taser") < 0) {
                    //Show Holster Finder Link
                    if(document.getElementById('holsterFinderLink')) {
                        document.getElementById('holsterFinderLink').style.color = '#0a4495';
                        document.getElementById('holsterFinderLink').style.backgroundColor = '#d9ddfd';
                        document.getElementById('holsterFinderLink').style.textAlign = 'center';
                        document.getElementById('holsterFinderLink').style.padding = '5px';
                        document.getElementById('holsterFinderLink').style.display = 'block';
                        document.getElementById('holsterFinderLink').style.border = '1px solid #99cdf2';
                        document.getElementById('holsterFinderLink').style.marginTop = '-20px';
                        document.getElementById('holsterFinderLink').style.marginBottom = '20px';
                        document.getElementById('holsterFinderLink').style.width = '400px';
                        document.getElementById('holsterFinderLink').innerHTML =
                        '  <span id="holsterFinderLink--Text">    ' +
                        '       <img style="height:50px;padding-right: 10px;" src="https://www.galls.com/photos/slide_images/ga/Cat_Holsters/holsters-finder-v3-trans.png"> '   +
                        '       <a href="/holster-finder">Click here to use our holster finder tool</a>' +
                        '  </span>';
                        //END Show Holster Finder Link

                        samTmpNHCQV = 7;
                    }
                }
            }
            //END Check if it is a Taser Products
        }
        
    }

}
//END SHOW HOLSTER FINDER LINK





//FOR HS393 - SHOW ONLY 19 QTYs
if (document.getElementById('Qsku')) {
    if (document.getElementById('Qsku')) {
        if (document.getElementById('Qsku').innerText == "HS393") {
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


