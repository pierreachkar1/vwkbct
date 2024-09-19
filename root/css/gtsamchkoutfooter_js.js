
/* Shipping Address Checkbox Checked */
$("#samOPC_ShippingAddressChk").click(function(){
    $("#samOPC_Shipping_Address_Hidden").slideToggle(500);
});  


/* Credit Card Details Option Changed */
$("input[name=SISLPI]").on("change", function() {
  togglePaymentDetails();
});

function togglePaymentDetails() {

  $("#samOPC_PayNowBtn").hide(0);
  $("#samOPC_PayPalBtn").hide(0);
  $("#samOPC_SezzleBtn").hide(0);
  $("#samOPC_ApplePayBtn").hide(0);
  
  //Change background for selected option
  toggleOptionActiveClass("samOPC_Payment_Section","SISLPI");    

  //If Credit is Checked
  if ($('#CreditCardChecked').is(':checked') == true) {
      $(".samOPC_CreditCard_Details").slideDown(500);
      $("#samOPC_PayNowBtn").show(0);
  } else {
      $(".samOPC_CreditCard_Details").slideUp(500);
  }

  //If Agency Account is Checked
  if ($('#AgencyAccountChecked').is(':checked') == true) {
      $(".samOPC_AgencyAccount_Details").slideDown(500);
      if($('#SIPOUPL').val()!='') $("#upload_POU").show(0);
      $("#samOPC_PayNowBtn").show(0);
  } else {
      $(".samOPC_AgencyAccount_Details").slideUp(500);
      $("#upload_POU").hide(0);
  }

  //If Apple Pay is Checked
  if ($('#ApplePayChecked').is(':checked') == true) {
      $(".samOPC_ApplePay_Details").slideDown(500);
      $("#samOPC_ApplePayBtn").show(0);
  } else {
      $(".samOPC_ApplePay_Details").slideUp(500);
  }

  //If PayPal is Checked
  if ($('#PayPalChecked').is(':checked') == true) {
      $(".samOPC_PayPal_Details").slideDown(500);
      $("#samOPC_PayPalBtn").show(0);
  } else {
      $(".samOPC_PayPal_Details").slideUp(500);
  }

  //If Sezzle is Checked
  if ($('#SezzleChecked').is(':checked') == true) {
      $(".samOPC_Sezzle_Details").slideDown(500);
      $("#samOPC_SezzleBtn").show(0);
  } else {
      $(".samOPC_Sezzle_Details").slideUp(500);
  }
}

/* END Credit Card Details Option Changed */



/* Shipping Option Changed */
$("input[name=SISHMT]").on("change", function() {   
    toggleOptionActiveClass("samOPC_Shipping_Section","SISHMT");    //Change background for selected option
});
function toggleOptionActiveClass(samOPC_Section, optionGroupName) {
    //Remove option-active from ALL
    $("#" + samOPC_Section + " .div-wrapper-row").removeClass("option-active");

    //Add back to selected option
    $('#' + $("input[name="+ optionGroupName +"]:checked").attr('id') + 'Div').addClass("option-active");
}
/* END Shipping Option Changed */



/* Galls Logo Clicked */
$("#samOPC_GallsLogo").click(function(){
    $("#samOPC_GallsLogoPopup").slideToggle(500);

    if ($("#samOPC_GallsCartIconPopup").css("display") == "block") {
        $("#samOPC_GallsCartIconPopup").slideToggle(500);
    }
});
$("#samOPC_GallsLogoBtnWhite").click(function(){
    $("#samOPC_GallsLogoPopup").slideToggle(500);
});



/* Cart Icon Clicked */
$("#samOPC_CartIcon").click(function(){
    $("#samOPC_GallsCartIconPopup").slideToggle(500);

    if ($("#samOPC_GallsLogoPopup").css("display") == "block") {
        $("#samOPC_GallsLogoPopup").slideToggle(500);
    }
});
$("#samOPC_CartIconBtnWhite").click(function(){
    $("#samOPC_GallsCartIconPopup").slideToggle(500);
});






/* Text Me Checked */
$("#SIWEMT").click(function(){
    $(".samOPC_TextMe_Details").slideToggle(500);
});


/* E-Gift Card Checked */
$("#samOPC_EGiftCard").click(function(){
    $(".samOPC_EGiftCard_Details").slideToggle(500);
});


/* Toggle Order Summary on Mobile */
$(".samOPC_Mobile_Order_Summary_Top").click(function(){
    $(".samOPC_Content .samOPC_Right").slideToggle(500);
    $(".samOPC_Content #samOPC_Show_Order_Summary_Top").slideToggle(0);
    $(".samOPC_Content #samOPC_Hide_Order_Summary_Top").slideToggle(0);
});
$(".total_item_bottom_title").click(function(){
    $("#samOPC_Cart_Item_Mobile").slideToggle(500);
    $("#samOPC_Show_Order_Summary_Bottom #samOPC_Show_Order_Summary_Bottom_Show").slideToggle(0);
    $("#samOPC_Show_Order_Summary_Bottom #samOPC_Show_Order_Summary_Bottom_Hide").slideToggle(0);    
});



/* Upload For Restricted Item Checked */
$("#SIRSTCPO").click(function(){
    $("#hr-or-PO").slideToggle(500);
    $("#upload-section-PO").slideToggle(500);
    clearErrMsg('upload-section-PO');
});
$("#SIRSTCKF").click(function(){
    $("#hr-or-KF").slideToggle(500);
    $("#upload-section-KF").slideToggle(500);
    clearErrMsg('upload-section-KF');
});
$("#SIRSTCPA").click(function(){
    $("#hr-or-PA").slideToggle(500);
    $("#upload-section-PA").slideToggle(500);
    clearErrMsg('upload-section-PA');
});
function defaultUploads() {
  if($('#SIRQPO').val()!='') {
    $("#upload_PO").show(0);
  } else {
    $("#upload_PO").hide(0);
  }
  if($('#SIRQKF').val()!='') {
    $("#upload_KF").show(0);
  } else {
    $("#upload_KF").hide(0);
  }
  if($('#SIRQPA').val()!='') {
    $("#upload_PA").show(0);
  } else {
    $("#upload_PA").hide(0);
  }
  if($('#SIPOUPL').val()!='' && $('#AgencyAccountChecked').is(':checked') == true) {
    $("#upload_POU").show(0);
  } else {
    $("#upload_POU").hide(0);
  }

  if($('#SIRSTCPO').is(':checked') == true) {
    $("#hr-or-PO").slideUp(500);
    $("#upload-section-PO").slideUp(500);
  }
  if($('#SIRSTCKF').is(':checked') == true) {
    $("#hr-or-KF").slideUp(500);
    $("#upload-section-KF").slideUp(500);
  }
  if($('#SIRSTCPA').is(':checked') == true) {
    $("#hr-or-PA").slideUp(500);
    $("#upload-section-PA").slideUp(500);
  }
}
function clearErrMsg(id) {
  $("#"+id).removeClass("samOPC_error");
  $("#error_"+id).remove();
}


/* Observe Top Galls Logo */
var samOPC_TopNav = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        $('#samOPC_Right_Fixed').removeClass("samOPC_Fixed_Display");
        $('#samOPC_Total_Section_Desktop').css("padding-bottom","10px");
    } else {  
        $('#samOPC_Right_Fixed').addClass("samOPC_Fixed_Display");
        $('#samOPC_Total_Section_Desktop').css("padding-bottom","10px")
    } 
}, { threshold: [0] });
samOPC_TopNav.observe(document.getElementsByClassName("samOPC_TopNav_Row")[0]);





/* Observe Total Section */
var samOPC_Total_Section = new IntersectionObserver(function(entries) {

    if(entries[0].isIntersecting === true) {
    } else {  
        $('#samOPC_Right_Desktop').addClass("samOPC_Right_100vh");
        $('#samOPC_Cart_Items_Section_Desktop').addClass("samOPC_Cart_Items_Scrollable");
        $('#samOPC_Total_Section_Desktop').addClass("samOPC_Total_Bottom_Fixed");
    } 
     
    //Fix issue when switching between Widths
    if ($('.samOPC_CheckOut_Centered').css("display") == "none") {
        $('#samOPC_Right_Desktop').removeClass("samOPC_Right_100vh");
        $('#samOPC_Cart_Items_Section_Desktop').removeClass("samOPC_Cart_Items_Scrollable");
        $('#samOPC_Total_Section_Desktop').removeClass("samOPC_Total_Bottom_Fixed");
    }
    
}, { threshold: [0] });
samOPC_Total_Section.observe(document.getElementsByClassName("total_item_total")[0]);






/* Refund Policy Links */
$(".samOPC_BottomLinks_Open").click(function(){

    if (screen.width < 991) {
        $("#samOPC_BottomLinksInfo").animate({
            width: '90%',
            opacity: 1
        });
    } else {
        $(".samOPC_BottomLinksInfo").animate({
            width: '50%',
            opacity: 1
        });
    }

    
    
    
    var samBottomIframe = document.getElementById('samBottomLinksIframe');
    document.getElementById('samPastedFromIframe').innerHTML = '';

    var samOPC_BottomLinks_Index = $(".samOPC_BottomLinks_Open").index(this);
    if (samOPC_BottomLinks_Index == 0) {
        samBottomIframe.setAttribute('src','/pages/returns');
    } else if (samOPC_BottomLinks_Index == 1) {
        samBottomIframe.setAttribute('src','/pages/shipping');
    } else if (samOPC_BottomLinks_Index == 2) {
        samBottomIframe.setAttribute('src','/pages/privacy-policy');
    } else if (samOPC_BottomLinks_Index == 3) {
        samBottomIframe.setAttribute('src','/pages/terms');
    } 
    
    setTimeout(function() {
        if (samBottomIframe.contentWindow.document.getElementsByClassName('main__wrapper').length > 0) {
            document.getElementById('samPastedFromIframe').innerHTML = samBottomIframe.contentWindow.document.getElementsByClassName('main__wrapper')[0].innerHTML;
            document.getElementById('sam-static-left').style.display = "none";
            document.getElementById('sam-static-breadcrumb').style.display = "none";
        } else {
            setTimeout(function() {
                document.getElementById('samPastedFromIframe').innerHTML = samBottomIframe.contentWindow.document.getElementsByClassName('main__wrapper')[0].innerHTML;
                document.getElementById('sam-static-left').style.display = "none";
                document.getElementById('sam-static-breadcrumb').style.display = "none";
            }, 2000);
        }
    }, 1000);


    // //Add link to CSS for Iframe
    // var samiFrameCSSLink = document.createElement("link");
    // samiFrameCSSLink.href = "/css/gtsamchkheader_css.css"; 
    // samiFrameCSSLink.rel = "stylesheet"; 
    // samiFrameCSSLink.type = "text/css"; 
    // samBottomIframe.contentWindow.document.head.appendChild(samiFrameCSSLink);

});
$(".samOPC_BottomLinks_Close").click(function(){
    $("#samOPC_BottomLinksInfo").animate({
        width: 0,
        opacity: 0
    });
});

//Outside of Div Is Clicked
document.addEventListener('mouseup', function(e) {
    if ($("#samOPC_BottomLinksInfo").length > 0) {
        if (!$("#samOPC_BottomLinksInfo").is(e.target) && $("#samOPC_BottomLinksInfo").has(e.target).length === 0) {
            $(".samOPC_BottomLinksInfo").animate({
                width: 0,
                opacity: 0
            });
        }
    }
});





//If Pre-Charge Card is Checked
if ($('#SIDEBTd').is(':checked') == true) {
    $(".samOPC_PCC_Details").show(0);
} 
$("#SIDEBTd").click(function(){
    $(".samOPC_PCC_Details").slideToggle(500);
});




//Coupon Input Text On Enter
$('#SISRCEF').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        applySrce2('F');
    }
});



//Gift Card Apply Button Enter (Card Number, Pin, and Amount)
$('#SIGCNO').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        validateGc2('ADDGC');;
    }
});
$('#SIPIN').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        validateGc2('ADDGC');;
    }
});
$('#SIGAMT').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        validateGc2('ADDGC');;
    }
});



//1 of 2: Format Phone Number
function samFormatPhoneNumberCountryCode(phoneNumber) {
    var cleaned = ('' + phoneNumber).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
}
function samFormatPhoneNumber(phoneNumber) {
    var cleaned = ('' + phoneNumber).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}


//Transform Production Options
function samTransformProductOptions(className) {
    for (var i = 0; i < $(className).length; i++) {
        //Convert To LowerCase
        $(className + ':eq( ' + i + ')').html($(className + ':eq( ' + i + ')').html().toLowerCase());
        $(className + ':eq( ' + i + ')').css("text-transform", "capitalize");

        //Remove unwanted characters from Option
        if ($(className + ':eq( ' + i + ')').html().toLowerCase().indexOf("_") > 0) {
            $(className + ':eq( ' + i + ')').html(
                $(className + ':eq( ' + i + ')').html().replace(/_/g, " ")
            );
        }
    }
}



//DOCUMENT READY
$(document).ready(function() {

    //2 of 2: Format Phone Number
    if (samFormatPhoneNumber($("#SITELS").val()) !== null) {
        $("#SITELS").val(samFormatPhoneNumber($("#SITELS").val()));
    }

    //Security Code to CSS
    if (screen.width < 992) {
        $("#SICCV").attr('placeholder', 'CVV');
    }

    samTransformProductOptions('.samOPC_row_flex_options'); //Transform Product Options

    
});

function samCK_Terms_Clicked() {
    $("#samOPC_BL_ToS").trigger("click");
}

function samCK_Privacy_Clicked() {
    $("#samOPC_BL_PrivacyPolicy").trigger("click");
}
