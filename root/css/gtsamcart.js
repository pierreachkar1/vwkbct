

//1. FEATURED PRODUCTS
var arrFeaturedProducts = [
    //Spot #1
    [   
        'FW1056',
        '/danner-resurgent-8-hot-weather-military-boots', 
        'DANNER RESURGENT 8" HOT WEATHER MILITARY BOOTS',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>',
        '$199.95', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
    ],
    //Spot #2
    [   
        'FX375', 
        '/oakley-si-light-assault-boots-2', 
        'OAKLEY SI LIGHT ASSAULT BOOTS 2',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>', 
        '$150.00', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/COY.PNG"></li></ul>'
    ],
    //Spot #3
    [   
        'FX743',
        '/danner-tanicus-8-combat-boots', 
        'DANNER TANICUS 8" COMBAT BOOTS',
        '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>', 
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
        '<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>', 
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
        '<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>', 
        '$190', 
        '<ul><li class="BkgTRANSPARENT selected"><img src="/photos/colors/BLK.PNG"> <img src="/photos/colors/COY.PNG"> <img src="/photos/colors/WOLF.png"></li></ul>'
    ]
   
];




$.ajax({
    url: '/cgi/CGBCXADON?SIMODE=CART',
    type: 'post',
    async: false,
    data: { }, 
    success: function(result) {

        var samCartAddOns = JSON.parse(result); //Paste cart value into array
        console.log(samCartAddOns);

        for (var i = 0; i < samCartAddOns.length; i++) { 
            
            document.getElementById('sambonus-cart-page').innerHTML =

            '<section class="image--slider--container slider" id="hp--featured--products">'+
            '</section>';

            // '<div class="col-md-12 text-center"><h2>Available Bonus Offers</h2></div>'+
            // '<section class="image--slider--container slider" id="sambonus-cart-page-section"></section>';

            for (i = 0; i < arrFeaturedProducts.length; i++) {
                document.getElementById('hp--featured--products').innerHTML +=
                '<div style="position: relative">'+
                '    <a href="Javascript:void(0)">'+
                '       <img src="/css/sam/homepage/images/' + arrFeaturedProducts[i][0] + '.jpg" class="category--image--slider--img">'+
                '       <span class="addon_desc">' + arrFeaturedProducts[i][2] + '</span>'+
                '       <div class="addon_price_button_div">'+
                '           <span class="addon_price">$XXX</span>'+
                '           <span class="addon_button"><i class="fa fa-cart-plus"></i></span>'+
                '       </div>'+
                '    </a>'+
                '</div>';

            }
            
        }


    }
})







//Add To Cart
function samAddGTBonus(sistyle,siedp,siopv1,siopv2,siopv3) {

    //MAIN
    var samProductMAIN = 
    "SIACTN=ADDTOCART"  + "&" + 
    "SISTYL="           + sistyle            + "&" +
    "SIEDP="            + siedp            + "&" +
    "SIOPV1="           + siopv1           + "&" +
    "SIOPV2="           + siopv2          + "&" +
    "SIOPV3="           + siopv3          + "&" +
    "SIQTY=001";

    showWait(); //Show Wait

    //Add Product
    $.ajax({
        url: '/CGBCSTYL',
        type: "post",
        dataType: 'html',
            data: samProductMAIN,
        success: function(html){ 
            if (html=="S") {
                location.reload();
            }
            else {
                hideWait();
                alert("Error adding product. Please try again!");            
            }
        }
    });


}




//END 1. FEATURED PRODUCTS



