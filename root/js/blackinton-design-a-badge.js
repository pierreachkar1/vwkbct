
 // dab v2.0 (c)Blackinton
 var _buttonText = 'Exit';        // change the button-face on thankyou.php

 var _disableEmail = false;        // don't send an email at the thank you page
 var _emailTo = 'Tag-assistance@galls.com; badge.quote@galls.com';    // if _disableEmail=false, then email is sent to these addresses, more than one is supported
               // sperate values with ; for multiple addresses (i.e. user1@domain.com; user2@domain.com)

 var _postOnLoad = false;        // if using the HTTP POST back, indicates if postBack should occur without pressing EXIT "BUTTON" 

 var _switches = '10011100'        // feature switches that turn on/off features, format 0101010, 0=off, 1=on
               // position-1 = show pricing, i.e. _switches='10000000'
               // position-2 = supress top header and left column, i.e. _switches='01000000'
               // position-3 = use HTTP POST sequence, suppress emails and subsequent steps (value of 1=HTTP FIELDS POSTED, 2=JSON formated single field)
               // position-4 = not used
               // position-5 = not used
               // position-6 = not used
               // position-7 = not used
 
 var dealerId   = '40507GI';        // blackinton provided dealer ID number, this must be valid
 var userId = 'vhbdab'+new Date().getTime();

 String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g,"");
 }

 $(document).ready(function() { 
 
   // use either redirect.aspx, redirect.asp, or redirect.php, or a file of your choice that contains the code for the required functionality.
   // if you plan to use the designStatusCheck even then use either postback.aspx, postback.asp, or postback.php, or a file of your choice that contains the code for the required functionality.
   var dealerURL = getClientURL()+'index.html';

   // set skipcontact=no to prompt the web vistor for contact information
   var userContactDetails = 'skipcontact=no&full_name=.&title_rank=.&department_company=.&phone=000 000 0000&email=user@domain.com&street_address=.&';
   userContactDetails +='contact_me=yes';
 
   if(typeof designCompleted == 'function') { 
    designStatusCheckTimerId=setTimeout("designStatusCheck()", 1000);  // 1000=indicates the polling interval in ms (1000ms=1sec) 
   }
 
      startFrame(dealerURL, userId, dealerId, userContactDetails, _buttonText, false, _disableEmail, _emailTo, _postOnLoad, _switches);
 });

 // utility related functions
 var getClientURL = function() {
  var urlParts = window.location.pathname.toString();
  var baseURL = "";
  urlParts =urlParts.split("/");
  for (var i=0; i < urlParts.length-1; i++) {
   urlParts[i] = urlParts[i].trim()
   if (urlParts[i] != "") baseURL=baseURL + urlParts[i] + "/";
  }
  return window.location.protocol + "//" + window.location.hostname + "/" + baseURL;
 }
 
 // iframe UI tigger
 var startFrame = function(dealerURL,userId,dealerId,userContactDetails,buttonText,useAJAX,disableEmail,emailTo,POL,switches) {
  urlTarget = '//www4.blackinton.com/design-a-badge/index.php?did='+dealerURL+'&uid='+userId+'&dud='+dealerId+'&'+userContactDetails+'&HTTPPOST=HTTPPOST&uiintegration='+'embedded'+'&bt='+buttonText+'&useAJAX='+useAJAX+'&noemail='+disableEmail+'&emailTo='+encodeURI(emailTo)+"&POL="+POL+"&switches="+switches;
  $("#dabframe").attr("src", urlTarget);
  return true;
 }
 
 /*
 
 // this secion of code can be used to obtain access to a client side event that will fire within the hosting page of the IFRAME
 // this client side event works around the limitation of cross-site scripting.  Before removing the comments aroudn this coding
 // segment, please review the documentation realted to "designStatusCheck".
 
 var designStatusCheck = 
  function(){
   var ran_number=Math.floor(Math.random()*5); 
   var restCall = getClientURL()+'checkdesignstatus.php';
   $.ajax({
                 type: "POST",
                 url: restCall,
                 dataType: "xml",
     data: "r="+ran_number+"&id="+userId+"&p=postData",   //postData is the name of the folder where we will poll for the existance of the .completed text file
                 success: function(xml) {
      $(xml).find('status').each(function(){
      if ($(this).text() == '1') {
        if(typeof designCompleted == 'function') { 
        clearTimeout (designStatusCheckTimerId);
        designCompleted(); 
       }
      } 
      else  {
       designStatusCheckTimerId=setTimeout("designStatusCheck()",1000);
      }
                     });
                 },
     error: function (XMLHttpRequest, textStatus, errorThrown){ alert( "designStatusCheck(): AJAX Response Error--> " + textStatus ); } 
             }); 
      }
 
 function designCompleted() {
  alert('designCompleted(): fired;');
 }
 */
 
