////Spot #1
// [   
//     'URL', 
//     'TITLE',
//     '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>',
//     '$PRICE', 
//     'COLOR', 
//     'IMAGE'
// ],






//1. FEATURED PRODUCTS
var arrFeaturedProducts = [
    //Spot #1
    [   
        'FW1056',
        '/danner-resurgent-8-hot-weather-military-boots', 
        'DANNER RESURGENT 8" HOT WEATHER MILITARY BOOTS',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>',
        '$199.95', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
    ],
    //Spot #2
    [   
        'FT1409', 
        '/garmont-t8-extreme-200g-thinsulate-tactical-boots-with-ortholite-insoles', 
        'GARMONT T8 EXTREME 200G THINSULATE TACTICAL BOOTS WITH ORTHOLITE INSOLES',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$169.99', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
    ],
    //Spot #3
    [   
        'FX743',
        '/danner-tanicus-8-combat-boots', 
        'DANNER TANICUS 8" COMBAT BOOTS',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$189.95', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
    ],
    //Spot #4
    [      
        'FT2628',
        '/oakley-elite-assault-boot-coyote', 
        'OAKLEY ELITE ASSAULT BOOT COYOTE',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$195.00', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
    ],
    //Spot #5
    [      
        'FT2645',
        '/under-armour-loadout-boots', 
        'UNDER ARMOUR LOADOUT BOOTS',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$150.00', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
    ],
    //Spot #6
    [      
        'FT751',
        '/5-11-6-inch-evo-sz-water-proof-boots', 
        '5.11 6" EVO SZ WATER PROOF BOOTS',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$145.00 <span class="old-price">MSRP: $155.00</span>', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/BLK.PNG"></li></ul>'
    ],
    //Spot #7
    [     
        'SP909', 
        '/merrell-moab-2-tactical-shoes', 
        'MERRELL MOAB 2 TACTICAL SHOES',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$114.95', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/BLK.PNG"> <img src="/photos/colors/COY.PNG"></li></ul>' 
    ],
    //Spot #8
    [      
        'FW2419',
        '/zephyr-gtx-lo-tf-shoes-lowa-shoes', 
        'ZEPHYR GTX LO TF SHOES LOWA SHOES',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$190', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/BLK.PNG"> <img src="/photos/colors/COY.PNG"> <img src="/photos/colors/WOLF.png"></li></ul>'
    ]
   
];

document.getElementById('sam_hp_featured_footwear').innerHTML =
'<section class="image--slider--container slider" id="hp--featured--products">'+
'</section>';

for (i = 0; i < arrFeaturedProducts.length; i++) {
    document.getElementById('hp--featured--products').innerHTML +=
    '<div class="hp--product--div" style="width: 100%; display: inline-block;">'+
    '    <div class="hp--product--image">'+
    '        <a href="' + arrFeaturedProducts[i][1] + '"><img src="/css/ajax-loader.gif" data-original="/css/sam/homepage/images/' + arrFeaturedProducts[i][0] + '.jpg" data-lazy></a>'+
    '    </div>'+
    '    <div class="hp--product--title"><a href="' + arrFeaturedProducts[i][1] + '">' + arrFeaturedProducts[i][2] + '</a></div>'+
    '    <div class="hp--product--rating">'+
    '        <div class="rating" tabindex="-1">' + arrFeaturedProducts[i][3] + '</div>'+
    '    </div>'+
    '    <div class="hp--product--price">'+
    '        <span>' + arrFeaturedProducts[i][4] + '</span>'+
    '    </div>'+
    '    <div class="hp--product--color">' + arrFeaturedProducts[i][5] + '</div>'+
    '</div>';
}

//END 1. FEATURED PRODUCTS






//2. TOP SELLERS
var arrTopSellers = [
    //Spot #1
    [   
        'SH4604',
        '/air-force-ocp-hot-weather-uniform-coat-ihwcu-uniform-builder', 
        'AIR FORCE OCP HOT WEATHER UNIFORM COAT IHWCU UNIFORM BUILDER',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>',
        '$69.95', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/OCP.PNG"></li></ul>'
    ],
    //Spot #2
    [   
        'SH4602',
        '/propper-air-force-100-cotton-nfpa-ocp-uniform-coat-uniform-builder', 
        'PROPPER AIR FORCE 100% COTTON NFPA OCP UNIFORM COAT UNIFORM BUILDER',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>',
        '$69.99', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/OCP.PNG"></li></ul>'
    ],
    //Spot #3
    [   
        'SH4601',
        '/air-force-50-50-nyco-ocp-uniform-coat-uniform-builder', 
        'AIR FORCE 50/50 NYCO OCP UNIFORM COAT UNIFORM BUILDER',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$69.99', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/OCP.PNG"></li></ul>'
    ],
    //Spot #4
    [      
        'SH4600',
        '/propper-gen-2-ocp-acu-coat-uniform-builder', 
        'PROPPER GEN 2 OCP ACU COAT UNIFORM BUILDER',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$69.99', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/OCP.PNG"></li></ul>'
    ],
    //Spot #5
    [      
        'JA3039',
        '/air-force-custom-ecwcs-gen-iii-level-3-fleece-jacket', 
        'AIR FORCE CUSTOM ECWCS GEN III LEVEL 3 FLEECE JACKET',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$62.95', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
    ],
    //Spot #6
    [      
        'JA3038',
        '/ecwcs-gen-iii-level-3-fleece-jacket-uniform-builder', 
        'ECWCS GEN III LEVEL 3 FLEECE JACKET UNIFORM BUILDER',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$62.95', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
    ],
    //Spot #7
    [     
        'HW4211', 
        '/army-ocp-helmet-cover-uniform-builder', 
        'ARMY OCP HELMET COVER UNIFORM BUILDER',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$14.99', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/OCP.PNG"></li></ul>' 
    ],
    //Spot #8
    [      
        'HW2839',
        '/propper-helmet-cover', 
        'PROPPER HELMET COVER',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
        '$14.99 <span class="old-price">MSRP: $19.99</span>', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/OCP.PNG"></li></ul>'
    ]


];

document.getElementById('sam_hp_top_sellers').innerHTML =
'<section class="image--slider--container slider" id="hp--top--sellers">'+
'</section>';

for (i = 0; i < arrTopSellers.length; i++) {
    document.getElementById('hp--top--sellers').innerHTML +=
    '<div class="hp--product--div" style="width: 100%; display: inline-block;">'+
    '    <div class="hp--product--image">'+
    '        <a href="' + arrTopSellers[i][1] + '"><img src="/css/ajax-loader.gif" data-original="/css/sam/homepage/images/' + arrTopSellers[i][0] + '.jpg" data-lazy></a>'+
    '    </div>'+
    '    <div class="hp--product--title"><a href="' + arrTopSellers[i][1] + '">' + arrTopSellers[i][2] + '</a></div>'+
    '    <div class="hp--product--rating">'+
    '        <div class="rating" tabindex="-1">' + arrTopSellers[i][3] + '</div>'+
    '    </div>'+
    '    <div class="hp--product--price">'+
    '        <span>' + arrTopSellers[i][4] + '</span>'+
    '    </div>'+
    '    <div class="hp--product--color">' + arrTopSellers[i][5] + '</div>'+
    '</div>';
}

//END 2. TOP SELLERS





// //3. NEW!
// var arrNewProducts = [
//     //Spot #1
//     [   
//         'FW1056',
//         '/danner-resurgent-8-hot-weather-military-boots', 
//         'DANNER RESURGENT 8" HOT WEATHER MILITARY BOOTS',
//         '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>',
//         '$199.95', 
//         '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
//     ],
//     //Spot #2
//     [   
//         'FT1409', 
//         '/garmont-t8-extreme-200g-thinsulate-tactical-boots-with-ortholite-insoles', 
//         'GARMONT T8 EXTREME 200G THINSULATE TACTICAL BOOTS WITH ORTHOLITE INSOLES',
//         '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
//         '$169.99', 
//         '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
//     ],
//     //Spot #3
//     [   
//         'FX743',
//         '/danner-tanicus-8-combat-boots', 
//         'DANNER TANICUS 8" COMBAT BOOTS',
//         '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
//         '$189.95', 
//         '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
//     ],
//     //Spot #4
//     [      
//         'FT2628',
//         '/oakley-elite-assault-boot-coyote', 
//         'OAKLEY ELITE ASSAULT BOOT COYOTE',
//         '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
//         '$195.00', 
//         '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
//     ],
//     //Spot #5
//     [      
//         'FT2645',
//         '/under-armour-loadout-boots', 
//         'UNDER ARMOUR LOADOUT BOOTS',
//         '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
//         '$150.00', 
//         '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
//     ],
//     //Spot #6
//     [      
//         'FT751',
//         '/5-11-6-inch-evo-sz-water-proof-boots', 
//         '5.11 6" EVO SZ WATER PROOF BOOTS',
//         '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
//         '$145.00 <span class="old-price">MSRP: $155.00</span>', 
//         '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/BLK.PNG"></li></ul>'
//     ],
//     //Spot #7
//     [     
//         'SP909', 
//         '/merrell-moab-2-tactical-shoes', 
//         'MERRELL MOAB 2 TACTICAL SHOES',
//         '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
//         '$114.95', 
//         '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/BLK.PNG"> <img src="/photos/colors/COY.PNG"></li></ul>' 
//     ],
//     //Spot #8
//     [      
//         'SP063',
//         '/danner-radical-452-gore-tex-hiking-boots', 
//         'DANNER RADICAL 452 GORE-TEX HIKING BOOTS',
//         '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>', 
//         '$179.95', 
//         '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/BRN.PNG"></li></ul>'
//     ]
    

// ];

// document.getElementById('sam_hp_new_products').innerHTML =
// '<section class="image--slider--container slider" id="hp--new--products">'+
// '</section>';

// for (i = 0; i < arrNewProducts.length; i++) {
//     document.getElementById('hp--new--products').innerHTML +=
//     '<div class="hp--product--div" style="width: 100%; display: inline-block;">'+
//     '    <div class="hp--product--image">'+
//     '        <a href="' + arrNewProducts[i][1] + '"><img src="/css/sam/homepage/images/' + arrNewProducts[i][0] + '.jpg"></a>'+
//     '    </div>'+
//     '    <div class="hp--product--title"><a href="' + arrNewProducts[i][1] + '">' + arrNewProducts[i][2] + '</a></div>'+
//     '    <div class="hp--product--rating">'+
//     '        <div class="rating" tabindex="-1">' + arrNewProducts[i][3] + '</div>'+
//     '    </div>'+
//     '    <div class="hp--product--price">'+
//     '        <span>' + arrNewProducts[i][4] + '</span>'+
//     '    </div>'+
//     '    <div class="hp--product--color">' + arrNewProducts[i][5] + '</div>'+
//     '</div>';
// }

// //END 3. NEW!


