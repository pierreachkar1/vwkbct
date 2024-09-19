
var samStaticPageURL = window.location.href.toLocaleLowerCase();    //GLOBAL VARIABLE FOR THIS PAGE





/* :::::::::::::::: ADD ROBOTS META TAG DYNAMICALLY :::::::::::::::: */

if (
    (samStaticPageURL.indexOf("uspatriottactical.com/pages/404") >= 0) ||
    (samStaticPageURL.indexOf("uspatriottactical.com/pages/accessibility") >= 0) ||
    (samStaticPageURL.indexOf("uspatriottactical.com/pages/ca-consumer-privacy") >= 0) ||
    (samStaticPageURL.indexOf("uspatriottactical.com/pages/ca-transparency") >= 0) ||
    (samStaticPageURL.indexOf("uspatriottactical.com/pages/gsa-contract-info") >= 0) ||
    (samStaticPageURL.indexOf("uspatriottactical.com/pages/idrestrict") >= 0) ||
    (samStaticPageURL.indexOf("uspatriottactical.com/pages/privacy-policy") >= 0) ||
    (samStaticPageURL.indexOf("uspatriottactical.com/pages/terms") >= 0)
 ) {
    //NOINDEX,NOFOLLOW
    var samMetaRobot = document.createElement('meta');
    samMetaRobot.name='robots';
    samMetaRobot.setAttribute('content', 'noindex,nofollow');
    document.getElementsByTagName('head')[0].appendChild(samMetaRobot);

} else {
    //INDEX,FOLLOW
    var samMetaRobot = document.createElement('meta');
    samMetaRobot.name='robots';
    samMetaRobot.setAttribute('content', 'index,follow');
    document.getElementsByTagName('head')[0].appendChild(samMetaRobot);
}

/* :::::::::::::::: END :::::::::::::::: */











/* :::::::::::::::::::::::::::::::: DOCUMENT READY :::::::::::::::::::::::::::::::: */

$(document).ready(function(){



    /* :::::::::::::::: CREATE HTML TEMPLATE FOR ALL STATIC PAGES :::::::::::::::: */

    if (document.getElementById('sam-static-left')) {

        if (
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/deals-discounts") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/online-promotions") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/retail-promotions") >= 0)
        ) {
            //DEALS & DISCOUNT
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>PROMOTIONS</h2>"+
            "   <h6><a href='/pages/promotions'>Promotions</a></h6>"+
            "   <h6><a href='/pages/faq'>FAQ</a></h6>"+
            "   <h6><a href='/sale'>Sale</a></h6>"+
            "</div>";
        } else if (
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/af-uniform-guide") >= 0) || 
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/army-uniform-guide") >= 0)
        ) {
            //Airforce Uniform Guide
            //Army Uniform Guide
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>SHOP UNIFORM COMPONENTS</h2>"+
            "   <h6><a href='/us-air-force-headgear'>Headgear</a></h6>"+
            "   <h6><a href='/us-air-force-uniform-tshirts'>Uniform T-Shirts</a></h6>"+
            "   <h6><a href='/us-air-force-uniform-tops-bottoms'>Uniform Tops & Bottoms</a></h6>"+
            "   <h6><a href='/us-air-force-uniform-accoutrements'>Uniform Accoutrements</a></h6>"+
            "   <h6><a href='/us-military-uniform-belts'>Belts</a></h6>"+
            "   <h6><a href='/us-air-force-authorized-boots'>Authorized Boots</a></h6>"+
            "   <h6><a href='/us-military-socks'>Socks</a></h6>"+
            "</div>";
        }  else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/womens-uniform-guide") >= 0) {
            //Womens Uniform Guide
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>SHOP UNIFORM COMPONENTS</h2>"+
            "   <h6><a href='/us-army'>US Army</a></h6>"+
            "   <h6><a href='/us-air-force'>US Air Force</a></h6>"+
            "   <h6><a href='/ecwcs'>ECWCS</a></h6>"+
            "   <h6><a href='/military-accessories'>Military Accessories</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/apel-eyewear") >= 0) {
            //APEL Eyewear
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>SHOP EYEWEAR</h2>"+
            "   <h6><a href='/eyewear-accessories'>Accessories</a></h6>"+
            "   <h6><a href='/glasses'>Glasses</a></h6>"+
            "   <h6><a href='/goggles'>Goggles</a></h6>"+
            "   <h6><a href='/kits-arrays'>Kits & Arrays</a></h6>"+
            "   <h6><a href='/lenses'>Lenses</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/wiley-x-gear-guide") >= 0) {
            //WILEY X GEAR GUIDE
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>SHOP EYEWEAR</h2>"+
            "   <h6><a href='/eyewear-accessories'>Accessories</a></h6>"+
            "   <h6><a href='/glasses'>Glasses</a></h6>"+
            "   <h6><a href='/goggles'>Goggles</a></h6>"+
            "   <h6><a href='/kits-arrays'>Kits & Arrays</a></h6>"+
            "   <h6><a href='/lenses'>Lenses</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/ppe") >= 0) {
            //PPE
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>SHOP ACCESSORIES</h2>"+
            "   <h6><a href='/face-covers'>Face Covers</a></h6>"+
            "</div>";
        }  else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/ruck-boots-guide") >= 0) {
            //Ruck Boots Guide
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>SHOP FOOTWEAR</h2>"+
            "   <h6><a href='/boots'>Boots</a></h6>"+
            "   <h6><a href='/footwear-accessories'>Footwear Accessories</a></h6>"+
            "   <h6><a href='/shoes'>Shoes</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/protective-plates") >= 0) {
            //Protective Plates
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>SHOP PROTECTIVE EQUIPMENT</h2>"+
            "   <h6><a href='/ballistic-body-armor-kits'>Ballistic Body Armor & Kits</a></h6>"+
            "   <h6><a href='/helmets-accessories'>Helmets & Accessories</a></h6>"+
            "   <h6><a href='/hearing-protection'>Hearing Protection</a></h6>"+
            "   <h6><a href='/knee-elbow-pads'>Knee & Elbow Pads</a></h6>"+
            "   <h6><a href='/specialty-equipment'>Specialty Equipment</a></h6>"+
            "</div>";
        } else if (
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/molle-gear-guide") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/top-tactical-gear") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/top-10-backpacks") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/top-10-plate-carrier") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/ranger-packing-guide") >= 0)
         ) {
            //Molle Gear Guide
            //Top Tactical Gear
            //Top 10 Backpacks
            //Top 10 Plate Carrier
            //Ranger Packing Guide
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>SHOP GEAR</h2>"+
            "   <h6><a href='/bags-packs'>Bags & Packs</a></h6>"+
            "   <h6><a href='/vests-rigs-carriers'>Vests, Rigs, & Carriers</a></h6>"+
            "   <h6><a href='/pouches'>Pouches</a></h6>"+
            "   <h6><a href='/protective-equipment'>Protective Equipment</a></h6>"+
            "   <h6><a href='/eyewear'>Eyewear</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/battle-belts-guide") >= 0) {
            //Battle Belt Guide
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>SHOP BELTS</h2>"+
            "   <h6><a href='/duty-belts'>Duty Belts</a></h6>"+
            "   <h6><a href='/riggers-belts'>Rigger's Belts</a></h6>"+
            "   <h6><a href='/cobra-belts'>Cobra Belts</a></h6>"+
            "   <h6><a href='/reflective-belts'>Reflective Belts</a></h6>"+
            "   <h6><a href='/belt-accessories'>Belt Accessories</a></h6>"+
            "</div>";
        } else if (
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/airforce-flight-boot") >= 0) || 
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/army-flight-boots") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/navy-flight-boots") >= 0)
        ) {
            //AirForce Flight Boot
            //Army Flight Boots
            //Navy Flight Boots
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>SHOP BOOTS</h2>"+
            "   <h6><a href='/military-boots'>Military Boots</a></h6>"+
            "   <h6><a href='/tactical-boots'>Tactical Boots</a></h6>"+
            "   <h6><a href='/dress-boots'>Dress</a></h6>"+
            "   <h6><a href='/work-boots'>Work Boots</a></h6>"+
            "   <h6><a href='/hiking-hunting-boots'>Hiking & Hunting Boots</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/shipping") >= 0) {
            //SHIPPING
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>ORDER AND RETURNS</h2>"+
            "   <h6><a href='/cgi/sign-in'>Order Status</a></h6>"+
            "   <h6><a href='/pages/returns'>Returns</a></h6>"+
            "   <h6><a href='/pages/promotions'>Payment, Pricing, and Promotions Policy</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/promotions") >= 0) {
            //PROMOTIONS
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>ORDER AND RETURNS</h2>"+
            "   <h6><a href='/cgi/sign-in'>Order Status</a></h6>"+
            "   <h6><a href='/pages/returns'>Returns</a></h6>"+
            "   <h6><a href='/pages/shipping'>Shipping</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/quote-request") >= 0) {
            //REQUEST A QUOTE
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>REQUEST A QUOTE</h2>"+
            "   <h6><a href='/cgi/sign-in'>Log-In/Sign Up</a></h6>"+
            "   <h6><a href='/pages/faq'>FAQ</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/uniform-info") >= 0) {
            //UNIFORM INFO
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>CUSTOMER SERVICE</h2>"+
            "   <h6><a href='/pages/contactus'>Contact US Patriot</a></h6>"+
            "   <h6><a href='/pages/faq'>FAQs | U.S. Patriot</a></h6>"+
            "   <h6><a href='/pages/gsa-contract-info'>GSA Contract | U.S. Patriot</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/gsa-contract-info") >= 0) {
            //GSA CONTRACT INFO
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>CUSTOMER SERVICE</h2>"+
            "   <h6><a href='/pages/contactus'>Contact US Patriot</a></h6>"+
            "   <h6><a href='/pages/faq'>FAQs | U.S. Patriot</a></h6>"+
            "   <h6><a href='/pages/uniform-info'>Uniform Information | U.S. Patriot</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/faq") >= 0) {
            //FAQ
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>CUSTOMER SERVICE</h2>"+
            "   <h6><a href='/pages/contactus'>Contact US Patriot</a></h6>"+
            "   <h6><a href='/pages/gsa-contract-info'>GSA Contract | U.S. Patriot</a></h6>"+
            "   <h6><a href='/pages/uniform-info'>Uniform Information | U.S. Patriot</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/contactus") >= 0) {
            //CONTACT US 
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>CUSTOMER SERVICE</h2>"+
            "   <h6><a href='/pages/faq'>FAQs | U.S. Patriot</a></h6>"+
            "   <h6><a href='/pages/gsa-contract-info'>GSA Contract | U.S. Patriot</a></h6>"+
            "   <h6><a href='/pages/uniform-info'>Uniform Information | U.S. Patriot</a></h6>"+
            "</div>";
        } else if (
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/resources") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/air-force-info") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/army-information") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/jrotc-information") >= 0) ||
            (samStaticPageURL.indexOf("uspatriottactical.com/pages/navy-information") >= 0)
         ) {
            //RESOURCES
            //AIR-FORCE-INFO
            //ARMY-INFORMATION
            //JROTC-INFORMATION
            //NAVY-INFORMATION
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>BRANCH</h2>"+
            "   <h6><a href='/pages/army-information'>Army</a></h6>"+
            "   <h6><a href='/pages/air-force-info'>Air Force</a></h6>"+
            "   <h6><a href='/pages/jrotc-information'>JROTC</a></h6>"+
            "   <h6><a href='/pages/navy-information'>Navy</a></h6>"+
            "</div>";

        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/terms") >= 0) {
            //TERMS OF USE
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>PRIVACY & POLICIES</h2>"+
            "   <h6><a href='/pages/privacy-policy'>Privacy Policy</a></h6>"+
            "   <h6><a href='/pages/ca-transparency'>California Transparency Act</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/privacy-policy") >= 0) {
            //PRIVACY POLICY
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>PRIVACY & POLICIES</h2>"+
            "   <h6><a href='/pages/terms'>Terms of Use</a></h6>"+
            "   <h6><a href='/pages/ca-transparency'>California Transparency Act</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/ca-consumer-privacy") >= 0) {
            //CA CONSUMER PRIVACY ACT
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>PRIVACY & POLICIES</h2>"+
            "   <h6><a href='/pages/terms'>Terms of Use</a></h6>"+
            "   <h6><a href='/pages/privacy-policy'>Privacy Policy</a></h6>"+
            "   <h6><a href='/pages/ca-transparency'>California Transparency Act</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/ca-transparency") >= 0) {
            //CA CONSUMER TRANSPARENCY ACT
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>PRIVACY & POLICIES</h2>"+
            "   <h6><a href='/pages/terms'>Terms of Use</a></h6>"+
            "   <h6><a href='/pages/privacy-policy'>Privacy Policy</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/about") >= 0) {
            //ABOUT US
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>COMPANY INFO</h2>"+
            "   <h6><a href='/pages/careers'>Careers</a></h6>"+
            "   <h6><a href='https://blog.uspatriottactical.com/'>U.S. Patriot Blog</a></h6>"+
            "</div>";
        } else if (samStaticPageURL.indexOf("uspatriottactical.com/pages/career") >= 0) {
            //CAREER
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>COMPANY INFO</h2>"+
            "   <h6><a href='/pages/about'>About Us | U.S Patriot</a></h6>"+
            "   <h6><a href='https://blog.uspatriottactical.com/'>U.S. Patriot Blog</a></h6>"+
            "</div>";
        } else {
            //COMPANY INFO
            document.getElementById('sam-static-left').innerHTML = 
            "<div class='sam-sl-company-info'>"+
            "   <h2>COMPANY INFO</h2>"+
            "   <h6><a href='/pages/about'>About Us | U.S Patriot</a></h6>"+
            "   <h6><a href='/pages/careers'>Careers</a></h6>"+
            "   <h6><a href='https://blog.uspatriottactical.com/'>U.S. Patriot Blog</a></h6>"+
            "</div>";
        }

        
        //if (samStaticPageURL.indexOf("uspatriottactical.com/pages/resources") < 0) {
            //NEED HELP? (HIDE ON RESOURCE PAGE)
            document.getElementById('sam-static-left').innerHTML += 
            "<br>"+
            "<div class='sam-sl-help'>"+
            "   <h5>NEED HELP?</h5>"+
            "   <h6><p>If you have any questions or need help with your account, you may Contact Us to assist you.</p></h6>"+

            "   <h5>CUSTOMER SERVICE</h5>"+
            "   <h6><p>Monday thru Friday</p></h6>"+
            "   <h6><p>8:00 AM to 8:00 PM EST</p></h6>"+
            "   <h6><p style='font-weight: 500'><a href='tel:844-877-4327'>844-USP-GEAR (844-877-4327)</a></p></h6>"+
            "</div>";
        //}

        /* :::::::::::::::: END :::::::::::::::: */

        


    }


});

/* :::::::::::::::::::::::::::::::: END DOCUMENT READY :::::::::::::::::::::::::::::::: */
