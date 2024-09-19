//Wait Loader Section ==============================================||||||||||==
var iosOverlay=function(a){"use strict";var b,c=function(){},d={onbeforeshow:c,onshow:c,onbeforehide:c,onhide:c,text:"",icon:null,spinner:null,duration:null,id:null,parentEl:null},e=function(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c},f=function(){var a=document.body||document.documentElement,b=a.style,c="transition";if("string"==typeof b[c])return!0;var d=["Moz","Webkit","Khtml","O","ms"];c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}(),g=e(d,a),h=function(a){"ios-overlay-show"===a.animationName&&g.onshow(),"ios-overlay-hide"===a.animationName&&(k(),g.onhide())},j=(function(){b=document.createElement("div"),b.className="ui-ios-overlay",b.innerHTML+='<span class="title">'+g.text+"</span",a.icon?b.innerHTML+='<img src="'+a.icon+'">':a.spinner&&b.appendChild(a.spinner.el),f&&(b.addEventListener("webkitAnimationEnd",h,!1),b.addEventListener("msAnimationEnd",h,!1),b.addEventListener("oAnimationEnd",h,!1),b.addEventListener("animationend",h,!1)),a.parentEl?document.getElementById(a.parentEl).appendChild(b):document.body.appendChild(b),g.onbeforeshow(),f?b.className+=" ios-overlay-show":"function"==typeof $&&$(b).fadeIn({duration:200},function(){g.onshow()}),g.duration&&window.setTimeout(function(){j()},g.duration)}(),function(){g.onbeforehide(),f?b.className=b.className.replace("show","hide"):"function"==typeof $&&$(b).fadeOut({duration:200},function(){k(),g.onhide()})}),k=function(){a.parentEl?document.getElementById(a.parentEl).removeChild(b):document.body.removeChild(b)};return{hide:j,destroy:k,update:function(a){a.text&&(b.getElementsByTagName("span")[0].innerHTML=a.text),a.icon&&(g.spinner&&g.spinner.el.parentNode.removeChild(g.spinner.el),b.innerHTML+='<img src="'+a.icon+'">')}}};!function(a,b,c){function d(a,c){var e,d=b.createElement(a||"div");for(e in c)d[e]=c[e];return d}function e(a){for(var b=1,c=arguments.length;b<c;b++)a.appendChild(arguments[b]);return a}function f(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(n.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",n.cssRules.length),l[e]=1),e}function g(a,b){var e,f,d=a.style;if(d[b]!==c)return b;for(b=b.charAt(0).toUpperCase()+b.slice(1),f=0;f<k.length;f++)if(e=k[f]+b,d[e]!==c)return e}function h(a,b){for(var c in b)a.style[g(a,c)||c]=b[c];return a}function i(a){for(var b=1;b<arguments.length;b++){var d=arguments[b];for(var e in d)a[e]===c&&(a[e]=d[e])}return a}function j(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}var m,k=["webkit","Moz","ms","O"],l={},n=function(){var a=d("style",{type:"text/css"});return e(b.getElementsByTagName("head")[0],a),a.sheet||a.styleSheet}(),o={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"},p=function a(b){if(!this.spin)return new a(b);this.opts=i(b||{},a.defaults,o)};p.defaults={},i(p.prototype,{spin:function(a){this.stop();var g,i,b=this,c=b.opts,e=b.el=h(d(0,{className:c.className}),{position:c.position,width:0,zIndex:c.zIndex}),f=c.radius+c.length+c.width;if(a&&(a.insertBefore(e,a.firstChild||null),i=j(a),g=j(e),h(e,{left:("auto"==c.left?i.x-g.x+(a.offsetWidth>>1):parseInt(c.left,10)+f)+"px",top:("auto"==c.top?i.y-g.y+(a.offsetHeight>>1):parseInt(c.top,10)+f)+"px"})),e.setAttribute("aria-role","progressbar"),b.lines(e,b.opts),!m){var k=0,l=c.fps,n=l/c.speed,o=(1-c.opacity)/(n*c.trail/100),p=n/c.lines;!function a(){k++;for(var d=c.lines;d;d--){var f=Math.max(1-(k+d*p)%n*o,c.opacity);b.opacity(e,c.lines-d,f,c)}b.timeout=b.el&&setTimeout(a,~~(1e3/l))}()}return b},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=c),this},lines:function(a,b){function c(a,c){return h(d(),{position:"absolute",width:b.length+b.width+"px",height:b.width+"px",background:a,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/b.lines*g+b.rotate)+"deg) translate("+b.radius+"px,0)",borderRadius:(b.corners*b.width>>1)+"px"})}for(var i,g=0;g<b.lines;g++)i=h(d(),{position:"absolute",top:1+~(b.width/2)+"px",transform:b.hwaccel?"translate3d(0,0,0)":"",opacity:b.opacity,animation:m&&f(b.opacity,b.trail,g,b.lines)+" "+1/b.speed+"s linear infinite"}),b.shadow&&e(i,h(c("#000","0 0 4px #000"),{top:"2px"})),e(a,e(i,c(b.color,"0 0 1px rgba(0,0,0,.1)")));return a},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),function(){function a(a,b){return d("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',b)}var b=h(d("group"),{behavior:"url(#default#VML)"});!g(b,"transform")&&b.adj?(n.addRule(".spin-vml","behavior:url(#default#VML)"),p.prototype.lines=function(b,c){function d(){return h(a("group",{coordsize:i+" "+i,coordorigin:-g+" "+-g}),{width:i,height:i})}function f(b,f,i){e(k,e(h(d(),{rotation:360/c.lines*b+"deg",left:~~f}),e(h(a("roundrect",{arcsize:c.corners}),{width:g,height:c.width,left:c.radius,top:-c.width>>1,filter:i}),a("fill",{color:c.color,opacity:c.opacity}),a("stroke",{opacity:0}))))}var l,g=c.length+c.width,i=2*g,j=2*-(c.width+c.length)+"px",k=h(d(),{position:"absolute",top:j,left:j});if(c.shadow)for(l=1;l<=c.lines;l++)f(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=c.lines;l++)f(l);return e(b,k)},p.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,(e=e&&e.firstChild)&&(e.opacity=c))}):m=g(b,"animation")}(),"function"==typeof define&&define.amd?define(function(){return p}):a.Spinner=p}(window,document);
var lookAheadReq;
var lookAheadWordLen = 0;
var prevValue="";
var timeouts = [];
var jsDeleteMsg = "";
var jsDeleteMsgB = "";
var jsDeleteMsgC = "";
var jsDeleteMsgD = "";
var loginmode ="";
var GCardCtr;
var addedGC = [];
var HashDelimeter = "*";
var recentHash = "";
var PageNo = "page_no";
var SortBy = "sort_by";     
var perPage = "per_page";
var clicked = "filters"
var filters=[];
var compStyle = [];
var posCtr = 0;
var imgCtr = 0;
var boxes =[];
var opv1 = "";
var opv2 = "";
var opv3 = "";
var value,desc;
var processing ="";
var styl = $("#style").val();
var origDesc1="";
var origDesc2="";
var origDesc3="";
var prevScroll;
var filteExp = [];
var headShowing = true;
hideWait();
freeItem();
var iOS = parseFloat(
	('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
	.replace('undefined', '3_2').replace('_', '.').replace('_', '')
) || false;
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-*
//Window Resizing
$( window ).resize(function() {showHideSearch();});
//On Load Search page

$( document ).ready(function(){
    showErrors();
    $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"});    
    $('.waitlink').click(function(){
        var linkaddr =$(this).attr("href1");
        
        showWait();setTimeout(function(){ 
             window.location.href = linkaddr; if(iOS)hideWait();}, 100);});
    $("#mobileSearchIcon , #mobileSearchButton").click(function(){$("html, body").animate({ scrollTop:0 }, 500);});
    setInterval(function() {prevScroll = self.pageYOffset;}, 250);
    $("#mobile-header-search").focus;
    //Scroll functions header fixing
    $(window).scroll(function(){ affixSearch(); showHideSearch(); });
    searchMain();
    AccountMain();
    styleMain();
    VariousMain();
    
});
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function VariousMain(){
    if($("#SISTEP").length) dfltGC();
     if ($('#showups').val() == 'Y') $("#upsMessage").modal();  
     $("#SISAMEBOX").change(function(){
        if($(this).is( ":checked" )){
      $(".shipSectn").slideUp();
        }
        else{
        $(".shipSectn").slideDown();
        }
    });
    window.onpageshow = function(event) { if (event.persisted) { hideWait(); }};
    
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function AccountMain(){
    if(!$(".diffForms").length) return false;
    $(".diffForms").submit(function(){
        var thisform = $( this ); 
           showWait(); 
           $(".actionAlerts").remove();
        $.ajax({
            url: '/CGBCXACC?'+$( this ).serialize(),
	   type: "post",
       dataType: 'html',
        success: function(html){
                    hideWait();
                    var info = jQuery.parseJSON( html );
                    var success="";
                    $.each(info, function(key, value) {
                        //Errors
                        if(key=="E"){
                          thisform.prepend("<div style=\"display:none\" class=\"alert alert-danger actionAlerts\"><strong>"+value+"</strong></div>");
                          success = "N";
                        }
                        //Success
                        if(key=="S"){
                          thisform.prepend("<div style=\"display:none\" class=\"alert alert-success actionAlerts\"><strong>"+value+"</strong></div>"); 
                          if (success=="") success="Y";
                        }
						//PanoB
						if(key == "PANOB"){
							$("#mobileBillingInformationValue").html($("#SISAD1B").val() +', ' 
																   + $("#SISCTYB").val() + ' '  
																   + $("#SISSTAB").val() + ' '  
																   + $("#SISZIPB").val()); 
							$("#desktopBillingInformationValue").html($("#SISAD1B").val() +', ' 
																   + $("#SISCTYB").val() + ' '  
																   + $("#SISSTAB").val() + ' '  
																   + $("#SISZIPB").val());
						}
                        //Pano
                        if(key=="PANO"){
                            $("#SIPANOS").val(value);
                            $("#SIACTNPANOS").val("EDITPANOS");
                            $("#saveNewShipping").html("Save Changes");
							showWait();
                            setTimeout(function(){ $("#closeShippingbtn").trigger("click"); hideWait();}, 1000);
							//Full
							var row = '<p class="account__value--desktop clickableAddress" id="shippingF'+value+'" title="Edit" '+
									  'onclick="editShipping(\''+ $("#SINAMES").val() +'\',\''
															    + $("#SISAD1S").val() + '\',\''
															    + $("#SISAD2S").val() + '\',\''
																+ $("#SISCTYS").val() + '\',\''
																+ $("#SISSTAS").val() + '\',\''
																+ $("#SISZIPS").val() + '\',\''
																+ $("#SICNTYS").val() + '\',\''
																+ value+'\')">'
																+ $("#SISAD1S").val() +', ' 
																+ $("#SISCTYS").val() + ' '  
																+ $("#SISSTAS").val() + ' '  
																+ $("#SISZIPS").val() +
																'<span class="icon edit"></span></p>';
																
							var oldRow = $("#shippingF"+value);
							if(oldRow.length){
								$(row).insertAfter(oldRow); 
								oldRow.remove();
							}
							else
								$(row).appendTo("#fullShp");
							//Mobile
							var row = '<p class="account__value--mobile clickableAddress" id="shippingM'+value+'" title="Edit" '+
									  'onclick="editShipping(\''+ $("#SINAMES").val() +'\',\''
															    + $("#SISAD1S").val() + '\',\''
																+ $("#SISAD2S").val() + '\',\''
																+ $("#SISCTYS").val() + '\',\''
																+ $("#SISSTAS").val() + '\',\''
																+ $("#SISZIPS").val() + '\',\''
																+ $("#SICNTYS").val() + '\',\''
																+ value+'\')">'
																+ $("#SISAD1S").val() +', ' 
																+ $("#SISCTYS").val() + ' '  
																+ $("#SISSTAS").val() + ' '  
																+ $("#SISZIPS").val() +
																'<span class="icon edit"></span></p>';
					
                            var oldRow = $("#shippingM"+value);
							if(oldRow.length){
								
								$(row).insertAfter(oldRow);
								oldRow.remove();
							}
							else
								$(row).appendTo("#mobileShp");
                        }
						//Pnno
                        if(key=="PNNO"){
                            $("#SIPNNO").val(value);
                            $("#SIACTNPNNO").val("EDITPNNO");
                            $("#saveNewPhone").html("Save Changes");
							showWait();
                            setTimeout(function(){ $("#closePhonebtn").trigger("click"); hideWait();}, 1000);
							//Full
							var row = '<p class="account__value--desktop clickablePhone" id="phoneF'+value+'" title="Edit" '+
									     'onclick="editPhone(\''+ $("#SITYPE").val() +'\',\''
															    + $("#SITEL").val() + '\',\''
															    + $("#SIEXT").val() + '\',\''															
																+ value+'\')">'
																+ $("#SITEL").val() + ' - ' 
																+ $("#SITYPE  option:selected").text() +
																'<span class="icon edit"></span></p>';
																
							var oldRow = $("#phoneF"+value);
							if(oldRow.length){
								$(row).insertAfter(oldRow); 
								oldRow.remove();
							}
							else
								$(row).appendTo("#fullPhn");
							//Mobile
							var row = '<p class="account__value--mobile clickableAddress" id="shippingM'+value+'" title="Edit" '+
									  'onclick="editPhone(\''+ $("#SITYPE").val() +'\',\''
															    + $("#SITEL").val() + '\',\''
															    + $("#SIEXT").val() + '\',\''															
																+ value+'\')">'
																+ $("#SITEL").val() +' - ' 
																+ $("#SITYPE").val() + 
																'<span class="icon edit"></span></p>';
					
                            var oldRow = $("#phoneM"+value);
							if(oldRow.length){
								
								$(row).insertAfter(oldRow);
								oldRow.remove();
							}
							else
								$(row).appendTo("#mobilePhn");
                        }
                        $(".actionAlerts").slideDown("slow");
                        if(success=="Y"){
                            switch(thisform.attr("id")){
                                //Saved Profession    
                                case("accountProfessionForm"):
                                    $("#mobileProfessionValue").html($("#SIPTNO :selected").text());
                                    $("#desktopProfessionValue").html($("#SIPTNO :selected").text());
                                    break;
                                //Saved Email    
                                case("accountEmailAddressForm"):
                                    $("#mobileEmailAddressValue").html($("#SIEMALB").val());
                                    $("#desktopEmailAddressValue").html($("#SIEMALB").val());
                                    $("#SIEMAL").val($("#SIEMALB").val());
                                    $("#SIEMALB").val("");
                                    $("#SIEMALC").val("");
                                    break;
								//Saved Password    
                                case("accountPasswordForm"):
                                    $("#SIPSWD").val("");
                                    $("#SIPSWDB").val("");
									$("#SIPSWDC").val("");
                                    break;
                                //Saved Username    
                                case("accountUsernameForm"):
                                    $("#mobileUsernameValue").html($("#SIUSERB").val());
                                    $("#desktopUsernameValue").html($("#SIUSERB").val());
                                    $("#SIUSER").val($("#SIUSERB").val());
                                    $("#SIUSERB").val("");
                                    $("#SIUSERC").val("");
                                    break;
                                    
                            }
                        }
                        
                    });
                    
            }
        });
       
});
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function styleMain(){
     if(!$("#styleForm").length) return false;        
            imgCtr = $(".product__gallery--thumbnail").length;
            
            choices('CGBCSTYL');
            imageListners();
    
    //Customize Button
            $('.customize-button').click(function () {
                    showWait();
                    var edp = $("#SIEDP").val();
		    var qty = $("#SIQTY").val();
        $.ajax({
            url: '/CGBCXSTYL?SIACTN=LOADALL&SIEDP='+edp+'&SIQTY='+qty,
	   type: "get",
       dataType: 'html',
        success: function(html){ 
                  $('#customBody').html(html);
                  hideWait();
                  $('#customizeModal').modal();
            }
        });
    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function searchMain(){
    if (!$('.category').length) { return false;} 
  setInterval(checkHash, 100);  
  //Cache html Controls
  var filterResult    = $("#filter__results");
  var filterResultM   = $("#mobile-filter__results");

  var perpage24       = $("#perpage24");
  var perpage48       = $("#perpage48");
  var perpage96       = $("#perpage96");
  var perpageAl       = $("#perpageAll");
  var previousB       = $("#pagination__link--prev");
  var nextB           = $("#pagination__link--next");
  var pagenumber      = $("#pagination__dropdown");
  var leftMenu        = $(".leftMenu");
  var leftMenu1       = $(".leftMenu1");
  var leftMenuM       = $(".leftMenuM");
  var leftMenuMC      = $(".leftMenuMC label");
  var sortf           = $("#product-grid__filter--sortf");
  var sortm           = $(".product-grid__filter--sort");
  var viewGrid        = $("#viewGrid");
  var viewList        = $("#viewList");
  
  markCompare();
  //Listeners On load
perpage24.click(function(){ //Clicked 24 Per Page+++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(24);
                getSearch("FILTER");
});

perpage48.click(function(){ //Clicked 48 Per Page+++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(48);
                getSearch("FILTER");
});

perpage96.click(function(){ //Clicked 96 Per Page+++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(96);
                getSearch("FILTER");
});

perpageAl.click(function(){ //Clicked View All++++++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(99999);
                getSearch("FILTER");
});

nextB.click(function(){ //Clicked Next Button+++++++++++++++++++++++++++++++++++
               var next = parseInt($("#pagination__dropdown").val()) + 1;
               $("#pagination__dropdown").val(next);
               SetHashValue(PageNo,next);               
});

previousB.click(function(){  //Clicked Previous Button++++++++++++++++++++++++++
               var prev = parseInt($("#pagination__dropdown").val()) - 1; if(prev<=0) prev=1;
               $("#pagination__dropdown").val(prev);
               SetHashValue(PageNo,prev);               
});

viewList.click(function(){
    $("#viewList span").addClass("selected");
    $("#viewGrid span").removeClass("selected");
    showWait();
    $(".product-grid__col").removeClass("col-xs-6 col-sm-6");
    $(".clearfix1").removeClass("hidden");
    $(".clearfix2").addClass("hidden");
    hideWait();
});

viewGrid.click(function(){
    $("#viewList span").removeClass("selected");
    $("#viewGrid span").addClass("selected");
    showWait();
    $(".product-grid__col").addClass("col-xs-6 col-sm-6");
    $(".clearfix1").addClass("hidden");
    $(".clearfix2").removeClass("hidden");
    hideWait();
});

sortf.change(function(){ //Sorting Change Full+++++++++++++++++++++++++++++++
                SetHashValue('page_no', '1');             
                getSearch("FILTER");
});

sortm.change(function(){ //Sorting Change Mobile+++++++++++++++++++++++++++++
                sortm.val($(this).val());
                sortf.val($(this).val());
                SetHashValue('page_no', '1');             
                getSearch("FILTER");
});

pagenumber.change(function(){ //Changed Page++++++++++++++++++++++++++++++++++++

               var next = parseInt($(this).val());
               $("#pagination__dropdown").val(next);
               SetHashValue(PageNo,next);
               
             

  });
  
$("#clearMobileFilter").click(function(){
     $(".leftMenuM").each(function(){
            $(this).removeClass("selected");
            var mid = $(this).attr("id").substring(1);
            $("#"+mid+' input').prop('checked', false);
     });
     $(".leftMenuMC").each(function(){
            $(this).removeClass("selected");
            var mid = $(this).attr("id").substring(1);
            $("#"+mid+' input').prop('checked', false);
     });
        SetHashValue('page_no', '1');             
        getSearch("FILTER");
});  
$(".resetfilters").click(function(){
	$(this).parentsUntil('.panel-body').parent().find('input').prop("checked",false);
	SetHashValue('page_no', '1');             
    getSearch("FILTER");
});
$("#filter__toggle").click(function(){
    showWait("B");
    adjustClearFix();
    hideWait();  
        
});

$( "body main.category" ).click(function( event ) {
  if( event.target.className == undefined) return false;
  if( String(event.target.className).indexOf("compare")>=0) return false;
  if( String(event.target.parentElement.className).indexOf("compare")>=0) return false;
   $(".compare-tooltip").hide();
});

//Filters Listners
leftMenuM.click(function(){ //Clicked any Mobile filter+++++++++++++++++++++++++
                
                $('#SICURRM').val("M" + $( this ).parent('.subnav__l2').attr("id"));
				var mid = $(this).attr("id").substring(1);
                if($(this).hasClass("selected"))
                    $("#"+mid+' input:first').prop('checked', true);
                else
                    $("#"+mid+' input:first').prop('checked', false);
                SetHashValue('page_no', '1');             
                getSearch("FILTER");                
});

leftMenuMC.click(function(){ //Clicked any Mobile filter+++++++++++++++++++++++++
               $('#SICURRM').val("MCategoryL2");
                
                var mid = $(this).parent("li").attr("id").substring(1);
                if($(this).hasClass("selected")){
                    $(this).next('ul').find('li').slideDown();
                    $("#"+mid+' input:first').prop('checked', true);
                }                    
                else{
                    $("#"+mid+' input:first').prop('checked', false);
                    $(this).next('ul').find('li').each(function(){
                        $(this).slideUp();
                        var mid = $(this).attr("id").substring(1);
                        $("#"+mid+' input:first').prop('checked', false);
                        $(this).find("label").first().removeClass("selected");
                    });
                }
                SetHashValue('page_no', '1');             
                getSearch("FILTER");
});

leftMenu.change(function(event){ //Clicked any Full filter+++++++++++++++++++++++++++
				event.stopPropagation();	
                if($(this).hasClass("disabled")) {$(this).find('input:first')["0"].checked=false;return false;}
                $('#SICURR').val($(this).parentsUntil('.panel-collapse').parent().attr('id'));
                SetHashValue('page_no', '1');             
                if($(this).find('input:first')["0"].checked){         
                      $( this ).children('div').children().children().each(function(){
                              $(this).slideDown();
                          }); }
                else{
                      $( this ).children('div').find('li').slideUp();
                      $( this ).children('div').children().children().find('input').each(function(){ 
                      $(this)["0"].checked = false;
                      });
                     }
                     getSearch("FILTER");
});
leftMenu1.change(function(event){ //Clicked any Full filter+++++++++++++++++++++++++++
				event.stopPropagation();	
                if($(this).hasClass("disabled")) {$(this).find('input:first')["0"].checked=false;return false;}
                $('#SICURR').val($(this).parentsUntil('.panel-collapse').parent().attr('id'));
                SetHashValue('page_no', '1');             
                if($(this).find('input:first')["0"].checked){         
                      $( this ).children('div').children().children().each(function(){
                              $(this).slideDown();
                          }); }
                else{
                      $( this ).children('div').find('li').slideUp();
                      $( this ).children('div').children().children().find('input').each(function(){ 
                      $(this)["0"].checked = false;
                      });
                     }
                     getSearch("FILTER");
});

//Filter Collapse expand
$(".panel-link").click(function(){
        $("#openFilter").val('');
        $("#firstClick").val("N");
        var collapsed = $(this).hasClass("collapsed");
        $(".panel .panel-collapse").slideUp();
        $(".panel-link").addClass("collapsed");
        if (!collapsed) $(this).removeClass("collapsed");
        $(this).toggleClass("collapsed");
        if(!$(this).hasClass("collapsed")) { $("#"+$(this).attr("expand")).slideDown(); $("#openFilter").val($(this).attr("targetid"))}
});
//Filter Collapse expand mobile 
$(".subnav__l1").click(function(){
        $("#openFilter").val('');
        $("#firstClick").val("N");
        var collapsed = $(this).hasClass("collapsed");
        $(".subnav__l2").slideUp();
        $(".subnav__l1").addClass("collapsed");
        if (!collapsed) $(this).removeClass("collapsed");
        $(this).toggleClass("collapsed");
        if(!$(this).hasClass("collapsed")){ $("#"+$(this).attr("expand")).slideDown(); $("#openFilter").val($(this).attr("targetid"))}
});

affixSearch();
$("#clearAllFilters").click(function(){
    $('.panel-body').find('input').prop("checked",false);
        syncMtoFull();
	SetHashValue('page_no', '1');             
    getSearch("FILTER");
});

//Reload filters on back button.
if($("#firstClick").val()!=="Y"){ 
        $("#onUnload").val("Y");
        if ($(".chkselection:checked").length > 0 || $(".fstlvl:checked").length > 0) { getSearch("FILTER"); }
        if($("#filters").val()=="N") adjustClearFix();
        if($("#openFilter").val()!==""){
                $("#full"+$("#openFilter").val()).removeClass("collapsed");
                $("#collapse"+$("#openFilter").val()).slideDown();
                $("#mobil"+$("#openFilter").val()).removeClass("collapsed");
                $("#"+$("#openFilter").val()+"L2").slideDown();
        }
        syncMtoFull();
        
}

}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showHideSearch(){
    if($(window).width() > 991) {$(".main__wrapper").css("padding-top","0px");return false;}
    if(self.pageYOffset < 170 || prevScroll >= self.pageYOffset   ) {
        //$("#mobileHeader").css("visibility","visible");
        $("#mobileHeader").css("top","0");
        headShowing = true;
        if(self.pageYOffset < 170) $(".main__wrapper").css("padding-top","170px")
    }
    else{
        //$("#mobileHeader").css("visibility","hidden");
        $("#mobileHeader").css("top","-170px");
        $(".main__wrapper").css("padding-top","124px");
        headShowing = false;
    }
    	 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function toggleHemming(){
    if($("#SIHEMD").is( ":checked" )){
        $("#opv3ULH").removeClass("hidden");
        $("#opv3ULH").fadeIn();  
        
        }else{
        $("#opv3ULH").fadeOut();
        $("#opv3ULH").addClass("hidden");        
        var topselect = 'N'
        $("#opv3UL li").each(function(){
        if($(this).hasClass('selected')){ topselect = 'Y';return false;}
            });
        if(topselect == 'Y') return false;
         origDesc3 = "Select "+ $("#origDesc3").html();
        $("#product__options--size2").html(origDesc3);
        $("#opv3ULH li").each(function(){
        if($(this).hasClass('selected')){
           $(this).removeClass('selected');
           $("#SIOPV3").val("");
        }
            });
            
        }
        if(! $("#opv3ULH li").first().hasClass("disabled"))
            $("#opv3ULH li").first().addClass("selected").trigger("click");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hideWait(){
    $('.ui-ios-overlay').hide();  //fade them both out
    $("#waitBckgd").hide();
    $("#waitBckgd").remove();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showWait(mode){   
    var opts = {
		lines: 13, // The number of lines to draw
		length: 11, // The length of each line
		width: 5, // The line thickness
		radius: 17, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		color: '#FFF', // #rgb or #rrggbb
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: 'auto', // Top position relative to parent in px
		left: 'auto' // Left position relative to parent in px
	};
	var target = document.createElement("div");
        target.setAttribute("id", "waitDiv");
	document.body.appendChild(target);
        if (mode =="B"){
            var target = document.createElement("div");
            target.setAttribute("id", "waitBckgd");
            document.body.appendChild(target);
        }
	var spinner = new Spinner(opts).spin(target);
	var overlay = iosOverlay({
		text: "Loading",
		spinner: spinner
	});
}  
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showBckg(){
            var target = document.createElement("div");
            target.setAttribute("id", "waitBckgd");
            document.body.appendChild(target);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getLookAheadL(mode){
        var words = $("#header-search").val();
	if (mode == "M") words = $("#mobile-header-search").val(); 
        submitSearch(words);
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getLookAhead(e,mode){
    var words = $("#header-search").val();
	if (mode == "M") words = $("#mobile-header-search").val(); 
        if($.trim(words).length<2){hideLookAhead();clearTimeoutAll();return;} 
    if(e.keyCode == 13){
        submitSearch(words);
        hideLookAhead();
        clearTimeoutAll();
        return;
    }
    if($.trim(words).length == lookAheadWordLen){
    hideLookAhead();
    clearTimeoutAll();
    return;
    }
    clearTimeoutAll();
 timeouts.push( setTimeout(function() {
  var word = $("#header-search").val();
  if (mode == "M") word = $("#mobile-header-search").val(); 
  if($.trim(word).length == lookAheadWordLen){
    return;
  }
  if($.trim(word).length != (word).length){
    return;
  }
  
  if(e.keyCode == 13 || e.keyCode == 9){
      
    return;
  }
  
  if(lookAheadReq){
    clearTimeoutAll(); 
    return;
  }
  
  hideLookAhead();
  if($.trim(word).length < 3){
  clearTimeoutAll();
   return;
  }
  
  if(prevValue!=$.trim(word)){
  lookAheadReq = true;
  clearTimeoutAll();
  $(".autofill__search-for").html(word);
  
  $.ajax({
    url: "/CGBCXSUGG?SIWORD="+word+"&SIMODE="+mode,
    success: function(result){
        var words = $("#header-search").val();
	if (mode == "M") words = $("#mobile-header-search").val(); 
        if($.trim(words).length < 3){return false;}
      if(result != "*EMPTY"){
        $("#suggestDropDown"+mode).html(result);
        if(result!="")
         $(".suggestDropDown"+mode).fadeIn();
        else
         $(".suggestDropDown"+mode).fadeOut();

      }     lookAheadReq = false;
      $("#suggestDropDown"+mode+" li ul li").mouseenter(lookAheadMouseEnter);
      $("#suggestDropDown"+mode+" li ul li").mousemove(lookAheadMouseEnter);
      $("#suggestDropDown"+mode+" li ul li").mouseleave(lookAheadMouseLeave);
  }}); }
  prevValue=$.trim(word);
  },200));
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function resetLookAhead(){  
  hideLookAhead();
  $("#header-search").val("");
  $("#mobile-header-search").val("");
  $("#suggestDropDownF").html("");
  $("#suggestDropDownM").html("");
  $(".suggestDropDownF").hide();
  $(".suggestDropDownM").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hideLookAhead(){  
  prevValue ="";
  if($(".pts_ac_suggestion:hover").length) {
    return;
  }
  if($(".pts_ac_product:hover").length) {
    return;
  }  
  $(".suggestDropDown").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function clearTimeoutAll(){
for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
}
//quick reset of the timer array you just cleared
timeouts = [];} 
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function PlayVideo(vcode){
  var width = $("#galleryMain").width()-20;
  var height = $("#galleryMain").height()-150;
  $(".product__gallery--thumbnail").removeClass("active");
  $("#videoDiv").removeClass("hidden");
  $("#videoDiv").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}                     
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function lookAheadMouseEnter(e) {
  var lookAheadActive = document.getElementsByClassName("pts_ac_active");
  cur = lookAheadActive[0];
  $(cur).removeClass("pts_ac_active");
  $(e.target).parentsUntil("ul",".pts_ac_level").addClass("pts_ac_active");    
}                      
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function lookAheadMouseLeave(e) {
  var lookAheadActive = document.getElementsByClassName("pts_ac_active");
  cur = lookAheadActive[0];
  $(cur).removeClass("pts_ac_active");    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function submitSearch(word){  
    showWait("B");
 clearCrossScript();
 word = word.replace("&", "|"); 
if(word=="") {hideWait();return false;}
if(word.length < 3){ hideWait();return false;}
hideLookAhead();
resetLookAhead();
clearTimeoutAll();
$("#mobile-header-search").val("");
$("#header-search").val("");
$(".autofill__input").blur();
setTimeout(function(){
        window.location.href = "/search/"+word;
        },100);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function clearCrossScript(){
var inputs = $(':input');
    inputs.each(function() {
    if ($(this).val()!=''){ 
//Clean Input    
    var content = $(this).val();
    if(content !== undefined && content!=null){
    content = content.replace(/<script(.*)/gi, "");
    content = content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    content = content.replace(/[\"\'][\s]*javascript:(.*)[\"\']/gi, "\"\"");
    content = content.replace(/eval\((.*)\)/gi, "");
    }
    //$(this).val(content);
    }
    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function viewList(mode){
    if(mode!=="Y") return false;
    $("#viewList span").addClass("selected");
    $("#viewGrid span").removeClass("selected");
    showWait();
    $(".product-grid__col").removeClass("col-xs-6 col-sm-6");
    $(".clearfix1").removeClass("hidden");
    $(".clearfix2").addClass("hidden");
    hideWait();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function adjustClearFix(){
    var leftfilter =  $("#leftFilter");
    var products   =  $(".product-grid__col");
    var productgrid=  $("#product-gridp");
    var clearfix3  =  $(".clearfix3")
    var clearfix4  =  $(".clearfix4")
 
  if(leftfilter.hasClass("hiddenf")){
        $("#filters").val("Y");
        productgrid.addClass("col-md-9");
        productgrid.removeClass("col-sm-12");
        
        products.addClass("col-lg-4");         
        products.removeClass("col-lg-3");
        
        clearfix4.addClass("hidden");
        clearfix3.removeClass("hidden");
        
        leftfilter.removeClass("hiddenf");
        leftfilter.fadeIn();
    }
  else{ $("#filters").val("N");
        productgrid.addClass("col-sm-12");
        productgrid.removeClass("col-md-9");
        
        clearfix4.removeClass("hidden");
        clearfix3.addClass("hidden");
  
        leftfilter.addClass("hiddenf");
        leftfilter.hide();        
        
        products.addClass("col-lg-3");
        products.removeClass("col-lg-4");        
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function adjustClearFix2(){
    var leftfilter =  $("#leftFilter");
    var products   =  $(".product-grid__col");
    var productgrid=  $("#product-gridp");
    var clearfix3  =  $(".clearfix3")
    var clearfix4  =  $(".clearfix4")
 
  if(!leftfilter.hasClass("hiddenf")){
        
        productgrid.addClass("col-sm-12");
        productgrid.removeClass("col-md-9");
        
        products.addClass("col-lg-4");         
        products.removeClass("col-lg-3");
        
        clearfix4.addClass("hidden");
        clearfix3.removeClass("hidden");
    }
  else{ productgrid.addClass("col-md-9");
        productgrid.removeClass("col-sm-12");
        
        clearfix4.removeClass("hidden");
        clearfix3.addClass("hidden");
  
        products.addClass("col-lg-3");
        products.removeClass("col-lg-4");
        
        
  }
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function SetHashValue(HashParameter, HashValue) {     
    var hash = window.location.hash.substr(1);
    if (hash == "") {
        window.location.hash = HashParameter + "=" + HashValue + HashDelimeter;
    }
    else if (hash.search(HashParameter) == -1) {
        window.location.hash = hash + HashParameter + "=" + HashValue + HashDelimeter;
    }
    else {
        var PostSplit = hash.split(HashDelimeter);
        var NewHash = "";

  //new loop ie8 issue
  var i=0, len = PostSplit.length;
  for ( i; i<len; i++ ) {   
            if (PostSplit[i] != "") {
                if (PostSplit[i].search(HashParameter) != -1) {
                    PostSplit[i] = HashParameter + "=" + HashValue;
                }
                NewHash = NewHash + PostSplit[i] + HashDelimeter;
            }
        }
        window.location.hash = NewHash;
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function GetHashValue(HashParameter) {
    var hash = window.location.hash.substr(1);
    if (hash == "") {
        return null;
    }
    var PostSplit = hash.split(HashDelimeter);
    //new loop ie8 issue
    var i=0, len = PostSplit.length;
    for ( i; i<len; i++ ) {   

        if (PostSplit[i].search(HashParameter) != -1) {
            return PostSplit[i].substr(HashParameter.length + 1); 
        }
    }
    return null;
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function checkHash() {
    var hash = document.location.hash;
    hash = hash.substr(1);
    if (hash == recentHash || (hash=="page_no=1*" && recentHash=="")) {
        return;
    }
    recentHash = hash;
    loadPage();
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function BuildUrl(pageLength, sortBy) {
    var keywords, wtno, url, indxt, indxb;
    keywords  = $("#SISRCH").val();
    wtno      = $("#SIWTNO").val();
    indxt     = $("#SIINDXT").val();
    indxb     = $("#SIINDXB").val();

    url = "/CGBCSRCH?SIAJAXMODE=Y&SIAJAXACTN=FILTER&SIWTNO=" + wtno + "&SIINDXT=" + indxt + "&SIINDXB=" + indxb + "&SIIPPG=" + pageLength + "&SISORT=" + sortBy;
  
    return url;
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-** 
function getFilters(){
    $("#firstClick").val("N");
var filterList = "";
      $(".leftMenu").each(function(){
                var inp = $(this).find('input:first')["0"];  
                var nochildchkd = true;
                    $(this).find('.leftMenu1').each(function(){
                     var inp1 = $(this).find('input:first')["0"];
                     if(!$("#"+inp1.id).parentsUntil('li').parent().find('div input:checked').length)
                            if(inp1.checked){
                                nochildchkd = false;
                                if(filterList=="") 
                                    filterList += inp1.id;
                                else
                                    filterList += "," + inp1.id; }
                    });
                
                if(inp.checked && nochildchkd){
                    if(filterList=="") 
                       filterList += inp.id;
                    else
                       filterList += "," + inp.id; }
      });
    return filterList;
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function loadPage() {
    var page_no = GetHashValue(PageNo);
    var per_page = GetHashValue('per_page');
    if(parseInt(page_no)<1)page_no=1;
    if(parseInt(per_page)!=24 || parseInt(per_page)!=48 || parseInt(per_page)!=96 || parseInt(per_page)!=9999 ){ per_page = $("#SIIPPG").val(); if(per_page<=0) per_page =24;}
    $("#pagination__dropdown").val(page_no);
    $("#SIIPPG").val(per_page);
    getSearch("PAGE");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function viewListG(){
    $("#viewGridG span").removeClass("selected");
    $("#viewListG span").addClass("selected");
    $("#viewList").trigger("click");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function viewGridG(){
    $("#viewListG span").removeClass("selected");
    $("#viewGridG span").addClass("selected");
    $("#viewGrid").trigger("click");
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getSearch(action) {  //Old RefreshResults()
    
    
    var keywords, wtno, url, brand, atid, avno, indxt, indxb, ippg, sort, cler,nlpr, avds, nwit, rfno;
    showWait("B");
    keywords = $("#SISRCH").val();
    wtno     = $("#SIWTNO").val();
    atid     = $("#SIATID").val();
    avno     = $("#SIAVNO").val();
    indxt    = $("#SIINDXT").val();
    indxb    = $("#SIINDXB").val();
    ippg     = $("#SIIPPG").val();
    sort     = $("#product-grid__filter--sortf").val();
    cler     = $("#SICLER").val();
    nlpr     = $("#SINLPR").val();
    avds     = $("#SIAVDS").val();
    nwit     = $("#SINWIT").val();
    list     = "";
    
    if($("#viewList span").hasClass("selected"))
        list = "Y";
    else
        list = "N";
    
    
    if (action == "FILTER"){
      rfno = 1;
    }
    else 
    if (action == "SORT"){
      rfno = sort;
    }
    else if (action == "PAGE"){
      rfno = parseInt($("#pagination__dropdown").val());
    }
    
    $.ajax({
        url: "/CGBCSRCH",
	     data: { SISRCH: keywords, 
		           SIWTNO: wtno,  
		           SIATID: atid, 
		           SIAVNO: avno, 
		           SIINDXT: indxt, 
		           SIINDXB: indxb,  
		           SIIPPG: ippg, 
		           SISORT: sort,
		           SICLER: cler,
		           SINLPR: nlpr,
		           SIAVDS: avds,
		           SINWIT: nwit, 
		           SIAJAXMODE: "Y",
		           SIRFNO: rfno,
		           SIFILT: getFilters(),
		           SIAJAXACTN: action },
	    cache: false,
	     type: "post",
	 dataType: "html",
        
        success:
            function (data) { 
               
               
               var products= data.substring(1,data.indexOf("["));
               if(data.indexOf("[")>0)
                  var leftData= data.substring(data.indexOf("["));
               else
                  var lefData =""; 
               
               adjustleft(leftData);
               $("#product-grid").html(products);
               adjustClearFix2();
               buildButtons();
               markCompare();
               viewList(list)
               hideWait();
			   if ($(window).width() < 991) 
					$("html, body").animate({ scrollTop:$("#scrollIndicatorf").position().top -15}, 1000);
				else
					$("html, body").animate({ scrollTop:$("#scrollIndicatorf").position().top -15 }, 1000);
           }  
    });
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-** 
function buildButtons(){
    var currentPage   = parseInt($("#current_page").val());
    var pagelength    = parseInt($("#SIIPPG").val());
    var totalPages    = parseInt($("#total_pages").val());
    var totalResults  = parseInt($("#total_results").val());
    var maxviewall    = parseInt($("#maxviewall").val());
    var i;
    $(".mobile-filter__results").html(format(totalResults)+" Results");
    $(".filter__results").html(format(totalResults)+" Results");
    $("#total_pages").val(totalPages);
    $("#pagination__dropdown option").remove();
    
    for (i = 1; i <= totalPages; i++) { 
            $( "<option value=\""+i+"\">"+i+"</option>" ).appendTo( "#pagination__dropdown" );
        }
    if(totalPages<=1) 
        $("#product-grid__pagination").css("visibility","hidden");
    else
        $("#product-grid__pagination").css("visibility","visible");
    
    $("#pagination__dropdown").val(currentPage);
    
    if(currentPage>1) 
        $("#pagination__link--prev").removeClass("hidden");
    else
        $("#pagination__link--prev").addClass("hidden");
    
    if(currentPage<totalPages)
        $("#pagination__link--next").removeClass("hidden");
    else
        $("#pagination__link--next").addClass("hidden");
    $("#ttlpages").html("of "+totalPages);
    if(totalResults > maxviewall || totalResults <=24){$("#perpageAll").addClass("hidden");} else {$("#perpageAll").removeClass("hidden");} 
    if(totalResults < 24 || totalResults <=0 ){$("#perpage24").addClass("hidden");} else {$("#perpage24").removeClass("hidden");} 
    if(totalResults < 48 || totalResults <=0 ){$("#perpage48").addClass("hidden");} else {$("#perpage48").removeClass("hidden");} 
    if(totalResults < 96 || totalResults <=0 ){$("#perpage96").addClass("hidden");} else {$("#perpage96").removeClass("hidden");}
    
    $("#perpageAll").removeClass("active");
    $("#perpage24").removeClass("active");
    $("#perpage48").removeClass("active");
    $("#perpage96").removeClass("active");
    switch (parseInt(pagelength)){
        case 24:
            $("#perpage24").addClass("active");
            break;
        case 48:
            $("#perpage48").addClass("active");
            break;
        case 96:
            $("#perpage96").addClass("active");
            break;
        default:
            $("#perpageAll").addClass("active");
            break;
        
    }
            
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncMtoFull(){
$(".leftMenuM").each(function(){ 
		var mid = $(this).attr("id").substring(1);
                if($("#"+mid+' input:first').is(':checked'))
                    $(this).addClass("selected");
                else
                    $(this).removeClass("selected");
                             
});

$(".leftMenuMC label").each(function(){                 
                var mid = $(this).parent("li").attr("id").substring(1);
                if($("#"+mid+' input:first').is(':checked')){
                    $(this).next('ul').find('li').slideDown();
                    $(this).addClass("selected");
                }                    
                else{
                    $(this).next('ul').find('li').slideUp();
                    $(this).removeClass("selected");
                }
});
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function adjustleft(data){ 
if(typeof(data) != "undefined"){
    var sectn = $('#SICURR').val();
    var sectnM = $('#SICURRM').val();
    var obj = jQuery.parseJSON( data );

    //Zero Out
    $( ".leftMenu span.count" ).each(function( ) {
        var cnt = $(this).parentsUntil('.panel').parent().find('input:checked').length;
        if( $( this ).parentsUntil('.panel-collapse').parent().attr('id')!=sectn || $("#onUnload").val()=="Y" || cnt==0)
            { $(this).html("(0)");
              //$( this ).parentsUntil('.panel-collapse').parent().parent('.panel').hide();
              $( this ).parentsUntil('.leftMenu').parent().addClass("disabled");
            }
    });
    //Zero Out Mobile
    $( ".leftMenuM span.count" ).each(function( ) {
        if($(this).parentsUntil('.mobileGroup').last().parent().attr("id")!=sectnM)
            { $(this).html("(0)");
              //$( this ).parentsUntil('.mobileGroup').parent().hide();    
            }
    });
    $( ".leftMenuMC span.count" ).each(function( ) {
        if($(this).parentsUntil('.mobileGroup').last().parent().attr("id")!=sectnM)
            { $(this).html("(0)");
             // $( this ).parentsUntil('.mobileGroup').parent().hide();   
            }
    });
    
    
    //Update Counts
    for (var i = 0, len = obj.length; i < len; ++i) {
        var leftid = obj[i].id;
        var leftcnt= obj[i].count;
        var cnt = $( '#'+leftid ).parentsUntil('.panel').parent().find('input:checked').length;
        if($( '#'+leftid ).parentsUntil('.panel-collapse').parent().attr('id')!=sectn || $("#onUnload").val()=="Y" || cnt==0)
            {
                $('#'+leftid+' span.count:first').html('('+leftcnt+')'); 
            }
                //if($('#M'+leftid).parentsUntil().attr("id")!=sectnM){
                if($('#M'+leftid).parentsUntil('.mobileGroup').parent().attr("id")!=sectnM){
                    $('#M'+leftid+' span.count:first').html('('+leftcnt+')'); 
                }
            
        } 
	//Enable valid
	$( ".leftMenu , .leftMenu1" ).each(function( ) {
		if( $(this).find('span.count').first().html()!=="(0)") 
			$(this).removeClass("disabled");
		else
			$(this).addClass("disabled");
	});
	var nfilters = 0;
        $(".panel-link").each(function(){
			var chekn = $(this).parentsUntil('.panel').parent().find('input:checked').length;
                        nfilters = nfilters + chekn;
			$(this).find(".checkn").first().remove();
			if (chekn > 0){
				$(this).html($(this).html()+'<span class="checkn"> - ('+ chekn +') SELECTED</span>');
				$(this).parentsUntil('div.panel-heading').parent().parent().find('.panel-body .resetdiv').css("visibility","visible");
			}else{
				$(this).parentsUntil('div.panel-heading').parent().parent().find('.panel-body .resetdiv').css("visibility","hidden");
			}	
	});
        if(nfilters>0){
            $("#clearAllFilters").fadeIn();
            $("#clearAllFilters").html("Clear All Filters ("+nfilters+")");
        }
        else{
            $("#clearAllFilters").fadeOut();
            $("#clearAllFilters").html("");
        }
	$("#onUnload").val("");
        return false;
    //Hide Zeros
    $( ".leftMenu span.count" ).each(function( ) {
        var parentli = $( this ).parentsUntil('li').parent();
        if( $( this ).parentsUntil('.panel-collapse').parent().attr('id')!=sectn)
            {
                if( $( this ).html()=="(0)")
                { 
                    parentli.hide();
                }
                    else
                {   
                        //Special Case for Categories leftMenu1
                        if(parentli.hasClass("leftMenu1")){
                            if(parentli.parentsUntil('div').parent().prev('label').find('input').is(":checked"))
                                parentli.show();
                        }
                        else
                        parentli.show();
                        
                    $( this ).parentsUntil('.panel-collapse').parent().parent('.panel').show();  
                }
            }
    });
    //Mobile
    $( ".leftMenuM span.count" ).each(function( ) {
        var parentli = $( this ).parentsUntil('li').parent();
        if( $( this ).parentsUntil('.mobileGroup').parent().attr('id')!=sectnM)
            {
                if( $( this ).html()=="(0)")
                { 
                   // parentli.hide();
                }
                    else
                {   
                       
                       // parentli.show();
                        
                    $( this ).parentsUntil('.mobileGroup').last().parent().show();  
                }
            }
    });
    //Mobile Categories
    $( ".leftMenuMC span.count" ).each(function( ) {
        var parentli = $( this ).parentsUntil('li').parent();
        if( $( this ).parentsUntil('.mobileGroup').last().parent().attr('id')!=sectnM)
            {
                if( $( this ).html()=="(0)")
                { 
                    //parentli.hide();
                }
                    else
                {   
                        //Special Case for Categories leftMenu1
                        if(parentli.hasClass("leftMenu1M")){
                            if(parentli.parentsUntil('.leftMenu1M').parent().next('label').find('input').is(":checked")){
                               // parentli.show();
                           }
                        }
                        else{
                        //parentli.show();
                    //$( this ).parentsUntil('.mobileGroup').parent().show(); 
                        }
                }
            }
    });
 }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function resetCompare(){
    compStyle = [];
    $(".compare-item").remove();
     $(".compare-tooltip").hide();
     markCompare();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function clearComp(styl){
            var index = compStyle.indexOf(styl);
            compStyle.splice(index,1);
            $("#COMP"+styl).remove(); 
            $("#COMPC"+styl).prop('checked', false);
            if(compStyle.length>0)
                $(".compare-tooltip").show();
            else{
                $(".compare-tooltip").hide();
                $('#compareModal').modal('hide');
            }
        
            if(compStyle.length>1){
              $("#compareBtn").removeClass("disabled");
              $("#compareBtn").prop('disabled',false);
            }
            else{
              $("#compareBtn").addClass("disabled");
              $("#compareBtn").prop('disabled',true);                
            }
            $("#row"+styl).remove();
                
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function markCompare(){
    $(".compCheck").prop("checked",false);
    for (i = 0; i < compStyle.length; i++) { 
        $("#COMPC"+compStyle[i]).prop('checked', true);
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function checkCompare(obj){
    var inp = obj.find('input').first();
    var styl = inp.attr("stylname");
    var href = inp.attr("stylhref");
    var desc = inp.attr("styldesc");
    var img  = inp.attr("stylimg");
    var host = inp.attr("imghost");
    var itemHtml;
    if(!inp.is(':checked')){
            inp.prop('checked', true);
            compStyle.push(styl);
         itemHtml = '<li class="compare-item" id="COMP' + styl + '">' +
                      '<img class="compare-item__thumbnail" src="' + img + '" height="50">' +
                      '<a href="' + href + '" class="compare-item__name">' + desc + '</a>' +
                      '<a href="javascript:void(0)" onclick="clearComp(\'' + styl + '\')" class="compare-item__remove" stylname="' + styl + '"><svg class="icon close--circle"><use xlink:href="' + host + '/images/sprite.svg#close--circle"></use></svg></a>' +
                    '</li>';
        $( itemHtml ).appendTo("#compareBody");
        $(".compare-tooltip").css("top",obj.offset().top-30);
        $(".compare-tooltip").css("left",obj.offset().left+30);
        $(".compare-tooltip").show();
        
        
        
        
    }else{
        inp.prop('checked', false);
        var index = compStyle.indexOf(styl);
            compStyle.splice(index,1);
        $("#COMP"+styl).remove(); 
        $(".compare-tooltip").css("top",obj.offset().top-30);
        $(".compare-tooltip").css("left",obj.offset().left+30);
        if(compStyle.length>0)
            $(".compare-tooltip").show();
        else
            $(".compare-tooltip").hide();
    }
    if(compStyle.length>1){
              $("#compareBtn").removeClass("disabled");
              $("#compareBtn").prop('disabled',false);
            }
            else{
              $("#compareBtn").addClass("disabled");
              $("#compareBtn").prop('disabled',true);                
            }
    //alert(JSON.stringify(compStyle));
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function format(num){
    var n = num.toString(), p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
        return p<0 || i<p ? ($0+',') : $0;
    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function comparestyles(){
showWait();
var styles="";
styles =compStyle.join("$");
var clrnc = $('#SICLER').val();
$.ajax({
        url: '/CGBCCOMPR?PMCLER='+clrnc+'&PMDATA='+styles,
       type: "get",
   dataType: 'html',
    success: function(html){
                  $('#compareModal .modal-content').html(html);
                  hideWait();
                  $("#compareModal").modal()
            }
			
        });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function imageListners(){
    //Images Listeners
            $(".product__gallery--thumbnail").click(function(){ 
                $(".product__gallery--thumbnail").removeClass("active"); 
                $(this).addClass("active");
                $("#product__gallery--active").attr("src",$(this).attr("src"));
            });
            if(imgCtr > 5){$("#product__thumbnails--next").show();} else{$("#product__thumbnails--next").hide();}
    //Next Image Button        
            $("#product__thumbnails--next").click(function(){
               var hght = $("#product__thumbnails--scroll").find('img').first().height();
               var hght = parseInt(hght)+12;
                posCtr = posCtr + 1;
                if(posCtr > (imgCtr-5)){posCtr = (imgCtr -5); return false;}
               var posTop = - posCtr*hght;
               setPrevNext();
            });
    //Previous Image Button
            $("#product__thumbnails--prev").click(function(){
               var hght = $("#product__thumbnails--scroll").find('img').first().height();
               var hght = parseInt(hght)+12;
                posCtr = posCtr - 1;
                if(posCtr < 0){posCtr = 0; return false;}
               var posTop = - posCtr*hght;
               setPrevNext();
            });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function affixSearch(){
	if($(".shopping-cart__header").length){
	if(headShowing) 
		$(".shopping-cart__header").css("top","170px");
	else
		$(".shopping-cart__header").css("top","0px");
	}
    if (!$('.category').length) { return false;} 
    var top1 = $('#scrollIndicator').offset().top + 170;
    var top2 = self.pageYOffset;
//Full
    if(top1 < top2){
        if($(window ).height()>750)$('#affixed2').addClass("affix");    
        $('#affixed1').addClass("affix");
    }
    else{if(top1 > top2){
        $('#affixed2').removeClass("affix");    
        $('#affixed1').removeClass("affix");
        }
    }
//Mobile

    var top1 = $('#scrollIndicator').offset().top ;
	var top2 = self.pageYOffset;
	if(! headShowing) top1 = top1 +170;
	
//Full
    if(top1 < top2){
		if(headShowing)
			$('#mobileFilterAffix').css("top",$("#mobileHeader").height());
		else
			$('#mobileFilterAffix').css("top",0);
        $('#mobileFilterAffix').removeClass("hidden");    
    }
    else{
        $('#mobileFilterAffix').addClass("hidden");    
        
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function choices(program){
     origDesc1 = "Select "+ $("#origDesc1").html();
     origDesc2 = "Select "+ $("#origDesc2").html();
     origDesc3 = "Select "+ $("#origDesc3").html();
    $(".choices li").unbind('click');
    if($("#opv3UL li").length<2) $("#prehemmedMesg").hide();
    $(".choices li").click(function(){  
               
            if(processing =="P") return false;
             boxes =[];
            if($(this).hasClass('disabled')) return false;
             $("#SIOPV1P").val($("#SIOPV1").val());
             $("#SIOPV2P").val($("#SIOPV2").val());
             $("#SIOPV3P").val($("#SIOPV3").val());
             $("#SIOPV1").val("");
             $("#SIOPV2").val("");
             $("#SIOPV3").val("");
            if($(this).hasClass('selected')) 
                $(this).removeClass("selected");
            else
                $(this).addClass("selected");
                showWait("B");  
                $("#product__options--color-selected").html(origDesc1);
                $("#product__options--size").html(origDesc2);
                $("#product__options--size2").html(origDesc3);
            processing ="P";    
            var clicked = $(this);
            var section = $(this).parent().parent().attr("id");
            $("#stockMsg").html("");       
            $("#opv1UL li").each(function(){
           //Opv1 Can be color or size...
                  if($(this).parent().attr('data-class')!= undefined)   
                       value = $(this).parent().attr('data-class');
                    else
                       value = $(this).parent().attr('data-size');
                   desc = $(this).parent().attr('title');
                   if($(this).attr("id") !=clicked.attr("id") && section == "opv1UL") $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv1 = value;
                       desc = $(this).parent().attr('title');
                       $("#product__options--color-selected").html(desc);
                       colorImage(opv1);
                       $("#SIOPV1").val(opv1);
                   }  
                   
                   var val = '{"opv1"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); 
                    });  
                   
            $("#opv2UL li").each(function(){
                   value = $(this).parent().attr('data-size');
                   
                   if($(this).attr("id") !=clicked.attr("id") && section == "opv2UL") $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv2 = value;desc = $(this).parent().attr('title');
                       $("#product__options--size").html(desc);$("#SIOPV2").val(opv2);
                       $("#SIOPV2").val(opv2);
                   }
                   var val = '{"opv2"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj);                   
                    });
                   
            $("#opv3UL li").each(function(){
                   value = $(this).parent().attr('data-size');
                   if($(this).attr("id") !=clicked.attr("id") && (section=="opv3ULH" || section == "opv3UL")) $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv3 = value;desc = $(this).parent().attr('title');
                       $("#product__options--size2").html(desc);
                       $("#SIOPV3").val(opv3);}
                   var val = '{"opv3"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); });           
            $("#opv3ULH li").each(function(){
                   value = $(this).parent().attr('data-size');
                   if($(this).attr("id") !=clicked.attr("id") && (section=="opv3ULH" || section == "opv3UL")) $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv3 = value;desc = $(this).parent().attr('title');
                       $("#product__options--size2").html(desc);
                       $("#SIOPV3").val(opv3);}
                   var val = '{"opv3"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); });           
         
         opv1 =  $("#SIOPV1").val();
         opv2 =  $("#SIOPV2").val();
         opv3 =  $("#SIOPV3").val();
         opv1p =  $("#SIOPV1P").val();
         opv2p =  $("#SIOPV2P").val();
         opv3p =  $("#SIOPV3P").val();
         if(program=='CGBCSTYLQ') styl  = $("#style").val()

            $.ajax({    url:"/cgi/"+program,
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : JSON.stringify(boxes)+"&SIAJAXACTN=SELOPTION&SIAJAXMODE=Y&SIOPV1="+opv1+"&SIOPV2="+opv2+"&SIOPV3="+opv3+"&SIOPV1P="+opv1p+"&SIOPV2P="+opv2p+"&SIOPV3P="+opv3p+"&SISTYL="+styl  ,
                  success: function (json) { 
                                            json = jQuery.parseJSON(json)
                                            $.each(json, function(key, value) {
                                                    switch (true){
                                                        case (key == "SIEDP" || key == "SIOPV1" || key == "SIOPV2" || key == "SIOPV3"  ):
                                                            $("#"+key).val(value); 
                                                        break;
                                                        case (key == "vasable" ):
                                                            $("#"+key).val($.parseHTML(value)); 
                                                            if(value=="Y") $("#vasbutton").removeClass("hidden"); else $("#vasbutton").addClass("hidden");
                                                        case (key == "requiredvas" ):
                                                            $("#"+key).val(value); 
                                                            if(value=="Y") $("#vasbutton").removeClass("hidden");
                                                                   
                                                        break;
                                                    case (key =='hemmingMesg'):
                                                            $("#"+key).html($.parseHTML(value));  
                                                    break;
                                                        case (key != "stockMsg" && key!="priceMsg" && key!="sku" && key!="mfgn"):
                                                            if(value=="disabled") 
                                                                $("#"+key).addClass("disabled"); 
                                                            else{ 
                                                                if(value=="selected"){
                                                                   $("#"+key).addClass("selected");
                                                                   $("#"+key).removeClass("disabled"); 
                                                                   var xdesc = $("#"+key).parent().attr('title');
                                                                   var xid = $("#"+key).parent().parent().attr('id');
                                                                   if(xid=="opv1UL") $("#product__options--color-selected").html(xdesc);
                                                                   if(xid=="opv2UL") $("#product__options--size").html(xdesc);
                                                                   if(xid=="opv3UL") $("#product__options--size2").html(xdesc);
                                                                   if(xid=="opv3ULH") $("#product__options--size2").html(xdesc);
                                                                   
                                                            
                                                            }  
                                                                else
                                                                    $("#"+key).removeClass("disabled"); 
                                                            }
                                                        break;
                                                        default:
                                                            $("#"+key).html($.parseHTML(value));  
                                                        break;
                                                    }
                                                });                         
                                              
                                              $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"}); 
                                              hideWait();
                                              processing ="";
                                            }            
                    })
       
            }); 
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function selColr(colorid){
        $("#videoDiv").html("");
        $("#videoDiv").addClass("hidden");
        if($("#"+colorid).hasClass('disabled')) return false;
        if($("#"+colorid).hasClass('selected')) return false;
        $("#"+colorid).trigger("click");
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function colorImage(opv1){
    if($(".colr"+opv1).length<1) return false;
    $(".colr"+opv1).trigger("click");
    var colrPos = parseInt($(".colr"+opv1).first().attr("position"));
    if(colrPos > 0)  $('#product__mobile-slider').slick('slickGoTo',colrPos-1);
    
    if((colrPos-5)>posCtr) posCtr = colrPos -5;
    if((colrPos)>(posCtr+5))  posCtr = colrPos -5;
    if(colrPos<= posCtr)  posCtr = colrPos -5;
    if(posCtr<0) posCtr = 0;
    setPrevNext(); 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function setPrevNext(){ 
    var hght = $("#product__thumbnails--scroll").find('img').first().height(); 
        hght = parseInt(hght)+12;
    var posTop = - posCtr*hght;
               $("#hiddenOverflow").animate({"top":posTop+"px"});
            
    if(imgCtr<=5){ $("#product__thumbnails--next").fadeOut(); $("#product__thumbnails--prev").fadeOut();return true;} 
    if(posCtr == 0){ $("#product__thumbnails--prev").fadeOut(); $("#product__thumbnails--next").show();return true;} 
    if(posCtr == (imgCtr -5)){ $("#product__thumbnails--prev").show(); $("#product__thumbnails--next").fadeOut();return true;} 
    if(posCtr > 0){ $("#product__thumbnails--prev").show();$("#product__thumbnails--next").show(); } 
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function onlyClear(){
    showWait();
    $("#SIACTN").val("CLEARONLY");
    setTimeout(function(){$("#styleForm").submit();},100);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCart(){
    var errors="N";
    $(".iv2s").each(function(){
        if($.trim($(this).val())==""){
            alert($(this).attr("prompt")+' is required!');
            errors ="Y";
            return false;
        }
    });
    if(errors=="Y") return false;
    showWait();
    $("#SIACTN").val("ADDTOCART");
    setTimeout(function(){
            $("#customizeModal").modal("hide");
            $("#styleForm").submit();
        },100);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showErrors(){
    if(!$('#SIERR').length) return false;
var array = $('#SIERR').val();
if(array != ""){
var data = JSON.parse(decodeURIComponent(array));

for (var i = 0, len = data.length; i < len; ++i) {     
     var id = data[i].id;
     var id1 = id.replace("f.", ""); 
     if(i==0)$('#'+id1).focus();
     $('#'+id1).css("outline","1px solid #f990a2");
     var mesg= data[i].errmsg;
$('#'+id1).after('<span class="fldError"><small>'+mesg+'</small></span>');


    } 
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function loadGcInfo(edp) {
var ajaxurl = '/CGBCXSRGC';
var cdno =  $('#SICDNO').val();    

  $.ajax({       url: '/CGBCXSRGC',
			          type: 'get',
            dataType: 'html',
                data: {SIEDP: edp, SICDNO:cdno},
           
          success: function (html) {        
                $("#gcInfoBody").html(html);
                $("#gcInfo").modal();       
            }
        })		
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function togldt(){
if($('#SIDLMT').val()=='FUTURE') $('#deliveryDate').show();
else $('#deliveryDate').hide(); 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addGiftCard(){ 
        showWait();
        var edp  =  $('#SIEDP').val();
        var cdno =  $('#SICDNO').val();        
        var sore = $("#SISORE").val();    
	      var srky = $("#SISRKY").val();    
	      var info = $("#SIINFO").val(); 
        
        var rcfn = $('#SIRCFN').val(); 
        var rcln = $('#SIRCLN').val();
        var rcem = $('#SIRCEM').val();
        var frnm = $('#SIFRNM').val();
        var pmsg = $('#SIPMSG').val(); 
        var dlmt = $('#SIDLMT').val();
        var dldt = $('#SIDLDT').val();
           
 
     $.ajax({
                 url: '/CGBCXSRGC',
			          type: 'get',
            dataType: 'html',
                data: {
                   SIEDP: edp,
                   SIRCFN: rcfn,
                   SIRCLN: rcln,
                   SIRCEM: rcem,
                   SIFRNM: frnm,
                   SIPMSG: pmsg,
                   SIDLMT: dlmt,
                   SIDLDT: dldt,                   
                   SICDNO: cdno,
                   SISORE: sore,
                   SISRKY: srky,
                   SIINFO: info,                   
                   SIACTN: 'SAVE'
                     },            
         success:function (html) {hideWait();
           if(html.indexOf('<CloseDomeWindow>') == -1){
                $("#gcInfoBody").html(html);
                $("#gcInfo").modal();  
                countChar();       
                showErrors();
                }
                else
                {   showWait();
                    window.location.href = "/cart";
                    
                    }
                
            }
        })
			
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartItem(){
    var errors = "N";
    $(".styleOption").each(function(){
        if($(this).attr("mesg")!=="" && $(this).val()==""){
            alert("Please Select " + $(this).attr("mesg"));
            errors ="Y";
            return false;
        }
    });
    if(errors == "N"){
        var styl = $( "input[name*='SISTYL']" ).val(); 
if(styl=='GIFT'){
var edp = $("#SIEDP").val();
loadGcInfo(edp);      
return true;
}
    }
    
    if(errors == "N"){
        if (document.f.SIOPV3)
    {
    var option = document.f.SIOPV3.value;
     if($.trim(option) =='*OB') {
    var msg=confirm("Please customize your hemming in the customization screen.");
    if (msg)
        $('.customize-button').click(); return false;  
    }
    }
    if($('#requiredvas').val()=='Y' && $("#SIEDP").val()!=""){
    var msg=confirm("Please customize your item in the customization screen.");
    if (msg)
        $('.customize-button').click(); return false;
  } 
    } 
    if(errors=="N"){
        showWait();
        $("#SIACTN").val("ADDTOCART");
        setTimeout(function(){$("#styleForm").submit();},100);
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartQV(){
    var errors = "N";
    $(".styleOption").each(function(){
        if($(this).attr("mesg")!=="" && $(this).val()==""){
            alert("Please Select " + $(this).attr("mesg"));
            errors ="Y";
            return false;
        }
    });
    if(errors=="N"){
        showWait("B");
        $("#SIAJAXACTN").val("ADDTOCART");
        $("#SIAJAXMODE").val("Y");
        $.ajax({
            url: '/CGBCSTYLQ',
	   type: "post",
       dataType: 'html',
           data: $("#QuickViewForm").serialize(),
        success: function(html){ 
            if(html=="S"){ 
                    window.location.href = "/cart";
                       // $("#quickViewModal").modal("hide");
                        //miniCart();
                    }
            else{hideWait();
                alert("Error happened...please add to cart again!");               
                }
            }
        });
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncQty(R){
                   $("#SIQTY"+R).val($("#GSIQTY"+R).val());
              }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncSrce(){
    $("#SISRCE").val($("#SISRCEI").val());
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncQtyG(R){
                   $("#GSIQTY"+R).val($("#SIQTY"+R).val());
              }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function submit_form(form,actn) {
//------------------------------------------------------------------------------
//Select Text/Text Areas/Password Types Inputs
    clearCrossScript();
//------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
        if(actn=='DELETE' && $.trim(jsDeleteMsg) != ""){
            if(!confirm(jsDeleteMsg)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEB' && $.trim(jsDeleteMsgB) != ""){
            if(!confirm(jsDeleteMsgB)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEC' && $.trim(jsDeleteMsgC) != ""){
            if(!confirm(jsDeleteMsgC)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETED' && $.trim(jsDeleteMsgD) != ""){
            if(!confirm(jsDeleteMsgD)){
                submitted = false;
                return;
            }
        }
        showWait();
        setTimeout(function(){
        eval('document.' + form + '.SIACTN.value=actn');
        eval('document.' + form + '.submit()');
        },100);
        
        
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function submit_Rfno(form,rfno,actn) {
//------------------------------------------------------------------------------
//Select Text/Text Areas/Password Types Inputs
    clearCrossScript();
//------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
 
        if(actn=='DELETE' && $.trim(jsDeleteMsg) != ""){
            if(!confirm(jsDeleteMsg)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEB' && $.trim(jsDeleteMsgB) != ""){
            if(!confirm(jsDeleteMsgB)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEC' && $.trim(jsDeleteMsgC) != ""){
            if(!confirm(jsDeleteMsgC)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETED' && $.trim(jsDeleteMsgD) != ""){
            if(!confirm(jsDeleteMsgD)){
                submitted = false;
                return;
            }
        }
       
        showWait();
        eval('document.' + form + '.SIACTN.value=actn');
        eval('document.' + form + '.SIRFNO.value=rfno');
        setTimeout(function(){eval('document.' + form + '.submit()');},100);
        
        
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function headerLogin(){
    var username = $("#signInModalForm #usernameHead");
    var password = $("#signInModalForm #passwordHead");
    if(username.val()==="") return false;
    if(password.val()==="") return false;
    $("#signInModal .alert").hide();
    
    showWait();
    $.ajax({
            url: '/CGBCXLGIN?SIUSER='+username.val()+'&SIPSWD='+password.val(),
	   type: "post",
       dataType: 'html',
        success: function(html){
            hideWait();
             switch (html){
                 case("S"):
                     $("#signInModal #successMsg").slideDown();
                     setTimeout(function(){showWait();location.reload();},1000);
                    break; 
                 case("E"):
                    $("#signInModal #errorMsg").slideDown();
                    break; 
                 case("M"):
                    $("#signInModal #multMsg").slideDown();
                     setTimeout(function(){showWait();window.location.href = "/sign-in";},3000);
                    break; 
             }
                  
            }
        });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function removeSdno(sdno,parentid){
    //Mode
    //RSD = Remove SDNO
     $.ajax({
            url: '/CGBCXSHPL?SIMODE=RSD&SISDNO='+sdno,
	   type: "post",
       dataType: 'html'});
    
    var parentSd = $("#sdno"+sdno).parentsUntil(".shopping-list__item").parent().slideUp(600, function() { $(this).remove();});
    var count = parseInt($("#countRows"+parentid).html())-1;
    if(count == 1)
        $("#countRows"+parentid).html("1 item");
    else
        $("#countRows"+parentid).html(count+" items");
    
   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToList(mode,slno,style){
    $("#successAddToList").hide();
    $("#quickViewModal").modal("hide");
    //Modes
    //A = add List from item page
    //I = open popup from item page
    //S = add Style to list from item page
    
    if(mode==="I") $("#styleList").val(style)
    if($("#loggedIn").hasClass("hidden")) { $("#signInModal").modal();loginmode="L";return false;}
    if(mode=="A" && $("#list-name").val()=="") return false;
    if(mode=="I")$("#list-name").val("");
    showWait();
    $.ajax({
            url: '/CGBCXSHPL?SIMODE='+mode+'&SISLNO='+slno+'&SINAME='+$("#list-name").val()+'&SISTYL='+$("#styleList").val(),
	   type: "post",
       dataType: 'html',
        success: function(html){
            hideWait();
                 $("#addToListModal #listBody").html(html);
                 $("#addToListModal").modal();
                 if(mode == "S"){
                     $("#successAddToList").html("<strong>Success!</strong> Item added to your shopping list.");
                     $("#successAddToList").slideDown();
                 }
                 if(mode == "A"){
                     $("#successAddToList").html("<strong>Success!</strong> New shopping list created.");
                     $("#successAddToList").slideDown();
                 }
                  
            }
        });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function EditList(slno,mode,name){
    $("#editListModal #successMsg").hide();
    if(mode=="D"){if(!confirm("Delete this shopping list?")) return false;}
    if(mode == "I"){
        $("#slnoEdit").val(slno);
        $("#editListModal").modal();
        $("#list-name").val(name);
        return false;
    }
    if(mode == "E" || mode=="D"){
        if($("#list-name").val()=="") return false;
        showWait();
        $.ajax({
            url: '/CGBCXSHPL?SISLNO='+$("#slnoEdit").val()+'&SINAME='+$("#list-name").val()+'&SIMODE='+mode,
	   type: "post",
       dataType: 'html',
        success: function(html){
                    hideWait();
                    if(mode=="E"){
                        $("#editListModal #successMsg").html("<strong>Success!</strong> Shopping list saved, Reloading...");
                        $("#editListModal #successMsg").slideDown();                        
                    }
                    if(mode=="D"){
                        $("#editListModal #successMsg").html("<strong>Success!</strong> Shopping list deleted, Reloading...");
                        $("#editListModal #successMsg").slideDown();  
                    }
                  setTimeout(function(){showWait();location.reload();},1000);
            }
        });
        
    }
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function newShopList(){
    $("#newListModal #successMsg").hide();
    
        if($("#list-name-new").val()=="") return false;
        showWait();
        $.ajax({
            url: '/CGBCXSHPL?&SINAME='+$("#list-name-new").val()+'&SIMODE=N',
	   type: "post",
       dataType: 'html',
        success: function(html){
                    hideWait();
                        $("#newListModal #successMsg").html("<strong>Success!</strong> Shopping list created, Reloading...");
                        $("#newListModal #successMsg").slideDown();                        
                  setTimeout(function(){showWait();location.reload();},1000);
            }
        });
        
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addNewPhone(){
	$("#SITEL").val("");
    $("#SITYPE").val("M");
    $("#SIACTNPNNO").val("NEWPNNO");
    $("#saveNewPhone").html("Save New");
	$("#deletePnno").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addNewShipping(){
    $("#SINAMES").val("");
    $("#SISAD1S").val("");
    $("#SISAD2S").val("");
    $("#SISZIPS").val("");
    $("#SISCTYS").val("");
    $("#SISSTAS").val("");
    $("#SICNTYS").val("");
    $("#SIPANOS").val("");
    $("#SIACTNPANOS").val("NEWPANOS");
    $("#saveNewShipping").html("Save New");
	$("#deletePanos").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function editPhone(type,tel,ext,pnno){
	if($("#accountPhoneNumber").attr("aria-expanded")!="true") $("#addNewPhonebtn").trigger("click");
	$(".actionAlerts").remove();
	$("#SITYPE").val(type);
    $("#SITEL").val(tel);
	$("#SIPNNO").val(pnno);
    $("#SIEXT").val(ext);
	$("#SIACTNPNNO").val("EDITPNNO");
    $("#saveNewPhone").html("Update");
	$("#deletePnno").show();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function editShipping(name,adr1,adr2,city,sta,zip,cnty,pano){
    if($("#accountShippingInformation").attr("aria-expanded")!="true") $("#addNewShippingbtn").trigger("click");
    $(".actionAlerts").remove();
    //$(".bs.collapse").show();
    $("#SINAMES").val(name);
    $("#SISAD1S").val(adr1);
    $("#SISAD2S").val(adr2);
    $("#SISZIPS").val(zip);
    $("#SISCTYS").val(city);
    $("#SISSTAS").val(sta);
    $("#SICNTYS").val(cnty);
    $("#SIPANOS").val(pano);
    $("#SIACTNPANOS").val("EDITPANOS");
    $("#saveNewShipping").html("Update");
	$("#deletePanos").show();
   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function deletePanos(){
	if(confirm("Delete this address?")){
		var pano = $("#SIPANOS").val();
		$.ajax({
            url: '/CGBCXACC?SIACTN=DELETEPGA&SIPANO='+pano,
	   type: "post",
		dataType: 'html'
		 });
		 $("#accountShippingInformationForm").prepend("<div style=\"display:none\" class=\"alert alert-danger actionAlerts\"><strong>Address deleted</strong></div>");
		showWait();
		$("#shippingF"+pano).remove();
		$("#shippingM"+pano).remove();
		setTimeout(function(){ $("#closeShippingbtn").trigger("click"); hideWait();}, 1000);
	}	
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function deletePnno(){
	if(confirm("Delete this phone number?")){
		var pnno = $("#SIPNNO").val();
		$.ajax({
            url: '/CGBCXACC?SIACTN=DELETEPGN&SIPNNO='+pnno,
	   type: "post",
		dataType: 'html'
		 });
		 $("#accountPhoneNumber").prepend("<div style=\"display:none\" class=\"alert alert-danger actionAlerts\"><strong>Phone number deleted</strong></div>");
		showWait();
		$("#phoneF"+pnno).remove();
		$("#phoneM"+pnno).remove();
		setTimeout(function(){ $("#closePhonebtn").trigger("click"); hideWait();}, 1000);
	}	
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function applySrce(){
  $("#SISRCE").val($("#SISRCEF").val());
  submit_form('f', 'SAVE');
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function validateGc(actn){
var cno = $('#SIGCNO').val();cno = $.trim(cno);
var pin = $('#SIPIN').val();pin = $.trim(pin);
var amt = $('#SIGAMT').val();amt = $.trim(amt);
$('.fldErrorgc').remove();
$('.fldError').remove();
//$('#SIGCNO').css("background","white");
//$('#SICCNO').css("background","white");
//$('#SICCEX').css("background","white");
//$('#SICCV').css("background","white"); 
//$('.SICCRF').css("background","white");
//$('#SIPIN').css("background","white");
if(cno==""){$('#SIGCNO').after('<span class="fldErrorgc">! Required</span>');$('#SIGCNO').focus();}
if(pin==""){$('#SIPIN').after('<span class="fldErrorgc">! Required</span>');if(!cno=="")$('#SIPIN').focus();return;}
//if(amt=="" && actn=="ADDGC"){$('#gcerrors').html('Amount is required');return false;} 
$('#gcerrors').html('');
$('#available').html('');
 $.post(  '/CGBCCART',
              { SIAJAXACTN: actn, 
                SIAJAXMODE: 'Y',
                    SIGCNO: cno,
                     SIPIN: pin,
                    SIGAMT: amt               
            },
             function (html) { 
              var data = JSON.parse(decodeURIComponent(html));
             if(data["gcerror"]!=""){$('#gcerrors').html(data["gcerror"]);return;}
             else{
              if(actn=="CHKGC"){$('#available').html('Available ($'+data["avlamnt"]+')');return;}
              
             //add payment
             if(actn=="ADDGC"){
                     var total = parseFloat($('#SICHCC').val());
                     var avlbl = parseFloat(data["avlamnt"]);
                     var amont = parseFloat(amt)|| 0;
                     if(amont > avlbl){$('#gcerrors').html('Only ($'+data["avlamnt"]+') available');return false;}
                     if(amont > total || total<=0){$('#gcerrors').html('Amount cannot exceed ($'+total.toFixed(2)+')');return false;} 
                     if(amont==0 && avlbl>=total)amont=total;
                     if(amont==0 && avlbl<total) amont=avlbl;
                     amont = amont.toFixed(2);
                     
                     $('#giftTable').slideDown();
                     var result = $.grep(addedGC, function(e){ return e.gcno == cno; });
                     if(result.length==0){
                      
                       addedGC.push({'gcno': cno,'pin':pin,'amount':amont,'available':data["avlamnt"]});paintTable();
                       $('#SIGCNO').val("");$('#SIPIN').val("");$('#SIGAMT').val("");  }
                     else
                      $('#gcerrors').html('Gift card "'+cno+'" has already been added'); 
            
             
             }
             
             }
            }
        );
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function removeGC(idno){
$('#gcerrors').html('');
addedGC = $.grep(addedGC, function(e){return e.gcno != idno; });
paintTable(); 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function paintTable(){
$('#SIGIFT').val(encodeURIComponent(JSON.stringify(addedGC)));
$('.gcrow').remove();
var total = parseFloat($('#cartTotal').val());
var ctr=0; 
$.each(addedGC, function( key, value ) {
ctr+=1;
$('#giftTable tr:last').after('<tr class="gcrow" id="row'+value.gcno+'">'+
                                                         '<th align="center"><a href="javascript:void(0)" onclick="removeGC(\''+value.gcno+'\')"><img src="/images/icon-delete.png"></a></th>'+
                                                         '<td align="left">'+value.gcno+'<input type="hidden" id="SIGCNO__'+ctr+'" name="SIGCNO__'+ctr+'" value="'+value.gcno+'">'+
                                                         '<input type="hidden" id="SIPIN__'+ctr+'" name="SIPIN__'+ctr+'" value="'+value.pin+'"></td>'+
                                                         '<td align="right">$'+value.available+'</td>'+
                                                         '<td align="right">$'+value.amount+'<input type="hidden" id="SIAMNT__'+ctr+'" name="SIAMNT__'+ctr+'" value="'+value.amount+'"></td></tr>');
                                                          total -= value.amount; 
  
});
$('#SICHOA').val(total.toFixed(2));
$('#SICHCC').val(total.toFixed(2));
$('#SICHPP').val(total.toFixed(2));
if(total==0){
$('#SICCNO').prop('disabled', true);$('#SICCNO').val('');
$('#SICCTP1').prop('disabled', true);$('#SICCTP1').val('');
$('#SICCEX').prop('disabled', true);$('#SICCEX').val('');
$('#SICCV').prop('disabled', true);$('#SICCV').val(''); 
$('.SICCRF').prop('disabled', true);$('.SICCRF').val(''); 
$('#SIUPOF').prop('disabled', true);
}
else
{
if($('#SICCNO').prop('disabled')){ 
$('#SICCNO').prop('disabled', false);
$('#SICCTP1').prop('disabled', false);
$('#SICCEX').prop('disabled', false);
$('#SICCV').prop('disabled', false);
$('.SICCRF').prop('disabled', false);
$('#SIUPOF').prop('disabled', false);
 }
}
if(addedGC.length==0){$('#giftTable').hide();} else{$('#giftTable').show();} 
$('#SIGIFTN').val(addedGC.length);

}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function dfltGC(){
if(!($('#SIGIFT').length)) return false;    
if($('#SIGIFT').val()!="")
 addedGC = JSON.parse(decodeURIComponent($('#SIGIFT').val()));
 paintTable();
 if($("#SISTEP").val()=="2"){
        if($( window ).width()>991){
            $("html, body").animate({ scrollTop: $('#stepTwo').offset().top-30 }, 600);}
        else{
            $("html, body").animate({ scrollTop: $('#stepTwo').offset().top-140 }, 600);}
    }
 if($("#SISTEP").val()=="3"){
    if($( window ).width()>991){ 
        $("html, body").animate({ scrollTop: $('#stepThree').offset().top-30 }, 600);}
    else{
        $("html, body").animate({ scrollTop: $('#stepThree').offset().top-140 }, 600);}
 }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function saveGC() {
  var giftn = parseFloat($("#SIGIFTN").val());
  if (isNaN(giftn)) {
    giftn = 0;
  }
  if(giftn == 0) return false;
  var giftCards = "&SIGIFTN="+giftn;
  for (i=1; i <= giftn; i++) {
    giftCards += '&SIGCNO__'+i+'='+$("#SIGCNO__"+i).val()+
                 '&SIPIN__' +i+'='+$("#SIPIN__" +i).val()+
                 '&SIAMNT__'+i+'='+$("#SIAMNT__"+i).val();
  }  
 // ajaxOnChangeFunc('f','','SAVEGC','CGBCCART','SICHNO,SIGIFTN'+giftCards,'handleAjaxReply');

  $.ajax({    url:"/cgi/CGBCCART",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=SAVEGC&SIAJAXMODE=Y"+giftCards});
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function radioPayment(){
    var sectn =  $('input[name=SISLPI]:checked').val();
    $("#SICCRFO").val('');
    $("#SICCRF").val('');
	$("#SIONFL").prop('checked', false);
    if(sectn=="P"){
        $('.ccSection').slideUp();
        $('.oaSection').slideUp();
        $("#SICCV").removeAttr('required');
        $("#SICCNO").removeAttr('required');
        $("#SICCRFO").prop('disabled',true);
        $("#SICCRF").prop('disabled',true);
    }
    
    if(sectn=="C"){
        $('.ccSection').slideDown();
        $('.oaSection').slideUp();
        $("#SICCV").prop('required',true);
        $("#SICCNO").prop('required',true);
        $("#SICCRFO").prop('disabled',true);
        $("#SICCRF").prop('disabled',false);
    }
    if(sectn=="O"){
        $('.oaSection').slideDown();
        $('.ccSection').slideUp();
        $("#SICCV").removeAttr('required');
        $("#SICCNO").removeAttr('required');
        $("#SICCRFO").prop('disabled',false);
        $("#SICCRF").prop('disabled',true);
    }
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addrB(index){
$('#SIBAD1').val($('#SIBAD1H'+index).val());
$('#SIBAD2').val($('#SIBAD2H'+index).val());
$('#SIBCTY').val($('#SIBCTYH'+index).val());
$('#SIBZIP').val($('#SIBZIPH'+index).val());
$('#SIBSTA').val($('#SIBSTAH'+index).val());

if ($("#SISAMEBOX:checked").val())
{
$('#SISAD1').val($('#SIBAD1H'+index).val());
$('#SISAD2').val($('#SIBAD2H'+index).val());
$('#SISCTY').val($('#SIBCTYH'+index).val());
$('#SISZIP').val($('#SIBZIPH'+index).val());
$('#SISSTA').val($('#SIBSTAH'+index).val());
}
$("#upsMessage").modal('hide');    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addrS(index){
$('#SISAD1').val($('#SISAD1H'+index).val());
$('#SISAD2').val($('#SISAD2H'+index).val());
$('#SISCTY').val($('#SISCTYH'+index).val());
$('#SISZIP').val($('#SISZIPH'+index).val());
$('#SISSTA').val($('#SISSTAH'+index).val());
$("#upsMessage").modal('hide');
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function useCC(obj,pgm,actn,checked){
 if(checked) {
  $(".ccFields").fadeOut();
 }
 else
 {
  document.f.SICCNO.value="";
  document.f.SICCV.value="";
  $(".ccFields").fadeIn();
 }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showPaypalPopup() {
  $(".btn-place-order").hide();
  $(".please-wait").show();
  $("#rstrBckg").fadeIn("slow");
	$("#paypalPopup").fadeIn("slow");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hidePaypalPopupMsg() {
  $("#rstrBckg").hide();
	$("#paypalPopup").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hidePaypalPopup() {
  $("#rstrBckg").fadeOut("slow");
	$("#paypalPopup").fadeOut("slow");
  showPlaceOrder();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function loadUpload(){
    var cnnotmp = $("#SICNNOTMP").val();
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=UPLOADAJX&SIAJAXMODE=Y&SICNNOTMP="+cnnotmp  ,
                  success: function (html) { $("#popup").html(html); }                                         
                                            
                                    
                  });
    
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function uploadFILE(ext,pgm){
   var fileName;
   var pos;
   var message;
   if (!document.FILEForm.SIFILEUPL.value){
        alert('Please select a file before submitting.');
        count=0;
        return false;
   }else{
        fileName=document.FILEForm.SIFILEUPL.value;
        pos=fileName.lastIndexOf("\\");
        if (pos < 0){
         pos = fileName.lastIndexOf("/");
        }
        if (pos > 0){
         fileName = fileName.substring(pos+1);
        }
        pos=fileName.lastIndexOf(".");
        //message may be extra code
        message="";
        if (!(pos >= 0)){
             alert('Your file must have an extension.');
             count=0;
             return false;
        }
        //
        var extension = fileName.slice(pos+1);
        extension = extension.toLowerCase();
        //
        validExt   = ext;
        validExt = validExt.toLowerCase();
        //
        extFoundAt = validExt.indexOf(extension);
        if (extension.length > 2 && validExt.length > 2 && extFoundAt < 0){
              alert('Your file extension must be one of the following: ' + validExt);
              count=0;
              return false;
        }
                                                                          
        document.FILEForm.action=pgm;
        return true;
   }
   return true;
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function setSIRSTRCHK() {
  $("#generalModal").modal("hide");
  if($('#SIRSTRCHK').is(':checked')){
   document.f.SIRSTRCHK.value='Y';
  } else {
   document.f.SIRSTRCHK.value='';
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function openFraud(){
    $('#fraudInfo').modal('show');
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function closeUpload(){
    var cnnotmp = $("#SICNNOTMP").val();
    var chno = $("#SICHNO").val();
    var rqpo = $("#SIRQPO").val();
    var rqkf = $("#SIRQKF").val();
    var rqpa = $("#SIRQPA").val();
    var rstrchk = $("#SIRSTRCHK").val();
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=RSTRAJX&SIAJAXMODE=Y&SICHNO="+chno+"&SICNNOTMP="+cnnotmp+"&SIRQPO="+rqpo+"&SIRQKF="+rqkf+"&SIRQPA="+rqpa+"&SIRSTRCHK="+rstrchk   ,
                  success: function (html) {
                                            var json = html.substr(0, html.indexOf('}')+1);
                                            $("#popup").html(html.substr(html.indexOf('}')+1));
                                            json = jQuery.parseJSON(json)
                                            $.each(json, function(key, value) {
                                                    $("#"+key).val(value); 
                                                });
                                            
                                           
                                           }
                                    });
            return showRstr();        
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function chkRstr() {
    var cnnotmp = $("#SICNNOTMP").val();
    var chno = $("#SICHNO").val();
    var rqpo = $("#SIRQPO").val();
    var rqkf = $("#SIRQKF").val();
    var rqpa = $("#SIRQPA").val();
    var rstrchk = $("#SIRSTRCHK").val();
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=CHKRSTR&SIAJAXMODE=Y&SICHNO="+chno+"&SICNNOTMP="+cnnotmp+"&SIRQPO="+rqpo+"&SIRQKF="+rqkf+"&SIRQPA="+rqpa+"&SIRSTRCHK="+rstrchk   ,
                  success: function (html) {
                                            var json = html.substr(0, html.indexOf('}')+1);
                                            $("#popup").html(html.substr(html.indexOf('}')+1));
                                            json = jQuery.parseJSON(json)
                                            $.each(json, function(key, value) {
                                                    $("#"+key).val(value); 
                                                });
                                            
                                           
                                           }
                                    });
            return showRstr();                          
 // ajaxOnChangeFunc('f','','CHKRSTR','CGBCCART','SICHNO,SICNNOTMP,SIRQPO,SIRQKF,SIRQPA,SIRSTRCHK','handleAjaxReply');
  //return showRstr();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showRstr(){
  if ($('#SIRQPO').val()!='' || $('#SIRQPA').val()!='' || $('#SIRQKF').val()!='') 
    {
    /*$('#SIRQPO').val('N');*/
		$("#generalModal").modal("show");hideWait();
    return true;
		} else {
    return false;
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getTax(){
    $("#getTaxbtn").hide();
    $("#errorZip").hide();
    $("#successZip").hide();
    
    showWait();
    $.ajax({
            url: '/CGBCSRPUC',
	   type: "post",
       dataType: 'html',
           data:{ SIAJAXMODE: "Y", SIXZIP: $("#SIXZIP").val()}, 
        success: function(html){
             var info = jQuery.parseJSON( html );
                    
                    $.each(info, function(key, value) {
                        if(key=="E"){$("#errorZip").html(value);$("#errorZip").slideDown();}
                        if(key=="S"){$("#successZip").html("Success");$("#successZip").slideDown();$("#totalincTax").html(value);}
                    })
            hideWait();
            $("#getTaxbtn").show();
        }
    });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hideRstr(){
		$("#rstrBckg").fadeOut("slow");
		$("#rstr").fadeOut("slow");
    document.f.SIRQPO.value='';
    document.f.SIRQKF.value='';
    document.f.SIRQPA.value='';
    document.f.SICNNOTMP.value='';
    showPlaceOrder();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showPlaceOrder() {
  $('.btn-place-order').attr("disabled",false);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function placeOrder() {
		
        $('.btn-place-order').attr("disabled",true);
        submit_form('f','CHECKOUTC');
       
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getMenu(thno){
     if ($('#div'+thno).html()== '' )
     {
        $('#div'+thno).html("Loading...");    
     $.ajax({
                 url: '/cgi/CGBCXMENU',
		type: 'get',
            dataType: 'html',
                data: {SITHNO : thno },
             success: function (html) {$("#div"+thno).html(html);}
           })         
    }
} 
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function Quickview(style){
    showWait();
    $.ajax({
                 url: '/cgi/CGBCSTYLQ',
               cache: false,
		type: 'get',
            dataType: 'html',
                data: {PMSTYL : style,PMCLER: $("#SICLER").val() },
             success: function (html) {
                 if(html.charAt(0)=="R"){window.location = html.substring(1);return false;}
                 $("#QuickViewBody").html(html);
                 $("#quickViewModal").modal();
                 choices('CGBCSTYLQ');
                 hideWait();
                 imgCtr = $(".product__gallery--thumbnail").length;
                 imageListners();
             }
           })   
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function miniCart(){
    showWait();
    $.ajax({
                 url: '/cgi/CGBCCARTQ',
               cache: false,
		type: 'get',
            dataType: 'html',
             success: function (html) {
                 var maxh = $(window ).height() - $("#miniCartBody").position().top - 220;
                 $("#miniCartBody").html(html);
                 $("#miniCart").modal();
                 $(".miniCartBody").css("max-height", maxh+"px");
                 hideWait();
                 $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"});  
             }
           })   
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function closeMiniCart(){
    $("#miniCart").modal("hide");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function onlyClearQ(style){
    var clearance = "";
    if($("#SICLERQ").is(":checked")) clearance="Y";
    showWait();
    $.ajax({
                 url: '/cgi/CGBCSTYLQ',
               cache: false,
		type: 'get',
            dataType: 'html',
                data: {PMSTYL : style,PMCLER: clearance },
             success: function (html) {
                 if(html.charAt(0)=="R"){window.location = html.substring(1);return false;}
                 $("#QuickViewBody").html(html);
                 $("#quickViewModal").modal();
                 choices('CGBCSTYLQ');
                 hideWait();   
             }
           })   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function freeChange(){  var data =$("#freeSelec").val();
        var arr = data.split('$$');
       $("#freeitem").attr("styleid",arr[0]);
       $("#freemrno").val(arr[1]);
       freeItem();
     }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function freeItem(){
    
     if($("#freeitem").val()!=='true' ) return false;
        showWait();
        var edpNo  = $("#freeitem").attr("styleid");
        var fqty  = $("#freeitem").attr("freeqty");
        var styles = $("#freeitems").val();
        var mrnos = $("#freemrnos").val();
        var mrno  = $("#freemrno").val();
        var fqtys = $("#freeqtys").val();
        var message = $("#message").val();
            $.ajax({
            url: '/CGBCSTYLX',
            cache: false,
            dataType: 'html',
            data: {
                PMSTYL: edpNo,
                PMFQTY : fqty,
                PMSTYLES:styles,
                PMFQTYS :fqtys,
                PMMRNOS:mrnos,
                PMMRNO:mrno,
                PMMESG :message,
                PMPATH: 'CART'
            },
            success: function (html) {
                $("#freeItemBody").html(html);
                $("#freeItem").modal();
                hideWait();
              }
        });
    
    
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartFree(){
    $("#SIAJAXMODE").val("");
    $("#SIAJAXACTN").val("");
    setTimeout(function(){$('#freeItemForm').submit();},100);    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function optChange(pgm,actn){
    $("#SIAJAXMODE").val("Y");
    $("#SIEDP").val("");
    $("#SIAJAXACTN").val(actn);
	    $.ajax({    url:"/cgi/"+pgm,
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : $("#freeItemForm").serialize(),  
                  success: function (html) {
                                            handleAjaxReply(html);
                                            $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"}); 
                                            if ($("#SIEDP").val() !=='')
                                               $(".btns").slideDown();   
                                            else
                                                $(".btns").slideUp();
                                           
                                           }
                                    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function handleAjaxReply(responseText){
    var ajaxStartValuesDelim = "**STARTVALUES**";
    var ajaxFieldDelim = "$_$";
    var ajaxValueDelim = "!=!";
    var ajaxOptionDelim = ";";      
    var allFields   = new Array;
    var fieldsStart = responseText.indexOf(ajaxStartValuesDelim);
    var oneField    = new Array;
    var newOptionArr= new Array;
    var bigAlert    = new Array;
    
    if (fieldsStart >= 0)
        var allFields = responseText.substr(fieldsStart+ajaxStartValuesDelim.length).split(ajaxFieldDelim);
    
    for (x in allFields){    
        if ($.trim(allFields[x]) == ""){break;}
        oneField = $.trim(allFields[x]).split(ajaxValueDelim);
              if (oneField[0] == "*JSALERT*"){
                  if ($.trim(oneField[1]) != ""){
                      bigAlert.length = bigAlert.length + 1;
                      bigAlert[bigAlert.length-1] = $.trim(oneField[1]); 
                  }
                  continue;
              }
              
              if (oneField[0] == "*JS*"){
                  //alert(oneField[1]);
                  if ($.trim(oneField[1]) != ""){
                      try{eval($.trim(oneField[1]));} catch(e){alert('Could not execute javascript:\n'+$.trim(oneField[1]))}                       
                  }
                  continue;
              }
              replaceSelectQualifier = 'new Option(';
              replaceSelectIdx = oneField[1].toUpperCase().indexOf(replaceSelectQualifier.toUpperCase());
              if (replaceSelectIdx != 0){
                  replaceSelectQualifier = '*EMPTY';
                  replaceSelectIdx = oneField[1].toUpperCase().indexOf(replaceSelectQualifier.toUpperCase());
              }
                   
              alertMsg = "oneField[0]="+oneField[0]
                       + "\ndocument.getElementById(oneField[0])="+document.getElementById(oneField[0])
                       + "\nreplaceSelectQualifier="+replaceSelectQualifier
                       + "\nreplaceSelectIdx="+replaceSelectIdx
              try{
                  alertMsg += "\nobj.type=" + document.getElementById(oneField[0]).type;
              }
              catch(e){alert("failed to retrieve object type\n"+alertMsg)}


              obj = document.getElementById(oneField[0]);
              if ((obj.type == 'text'     || obj.type == 'hidden' ||
                   obj.type == 'password' || obj.type == 'file')
                   && !obj.disabled){
                  obj.value=oneField[1];
              }
              else if ((obj.type == 'textarea')
                   && !obj.disabled){
                  obj.value=oneField[1];
                  //alert("oneField[0].substr(7)="+oneField[0].substr(7))
                  limitLen(0,oneField[0].substr(7)) // in compliance with LimitLen expectations
              }
              else if (obj.type == 'select-one' && !obj.disabled && replaceSelectIdx != 0){
                  alertMsg += "\nCurrent obj.style.display=" + obj.style.display
                           +  "\nSetting to=" + oneField[1];
                  //alert(alertMsg); 
                  for(optX=0; optX < obj.options.length; optX++){                          
                      if(obj.options[optX].value == oneField[1]){
                          obj.selectedIndex = optX;
                          break;
                      }
                  }                      
              }
              else if (obj.type == 'select-one' && !obj.disabled && replaceSelectIdx == 0){
                  alertMsg += "\nCurrent obj.style.display=" + obj.style.display
                           +  "\nReplacing options with=" + oneField[1];
                  obj.options.selectedIndex=-1;
                  obj.options.length=0;
                  if ($.trim(oneField[1]) != "*EMPTY"){
                      newOptionArr = oneField[1].split(ajaxOptionDelim);
                      for(optX=0; optX < newOptionArr.length; optX++){                          
                          if ($.trim(newOptionArr[optX]) == "") break;
                          evalStr = "obj.options["+optX+"]="+newOptionArr[optX].replace(/(\r\n)/g,"").replace('"','\"')+";";
                          eval(evalStr);
                      }  
                  }
              }
              else if (obj.type == 'checkbox' && !obj.disabled){
                  eval("obj.checked="+oneField[1]);
              }
              else if (obj.type == 'button' && !obj.disabled){
                  obj.style.display=oneField[1];
              }
              else {
                  try{obj.innerHTML=oneField[1];} catch(e){alert("Could not set value of " + oneField[0] + " with value " + oneField[1] + "\nType is " + obj.type)}
              }
    }
    
    if (bigAlert.length > 0){
        for (var i = 0; i < bigAlert.length; ++i){
            alert(bigAlert[i]);
        }
    }                                
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartKit(){
    var errors = false;
    $(".compEdp").each(function(){
         if($(this).val()==""){
             errors = true;
             alert($(this).attr("reqmsg"));
             return false;
             
         }
    });
    if( errors ) return false;
        showWait();
        $("#SIACTN").val("ADDTOCART");
        $("#SIAJAXMODE").val("N");
        setTimeout(function(){$("#styleForm").submit();},100);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function optChangeKit(){
    prepArray('');
    $("#SIAJAXMODE").val("Y");
    $("#SIEDP").val("");
	    $.ajax({    url:"/cgi/CGBCSTYLK",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : $("#styleForm").serialize(),  
                  success: function (html) {
                                            handleAjaxReply(html);
                                            $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"}); 
                                        }
                                    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getStock(){
prepArray('');
if($('#qty').val()!='' && $('#SIAREDP').val()!='')
{
//Valid Number inputed
 var qty = $('#qty').val();
 var aredp = $('#SIAREDP').val();
 var arname = $('#SIARNAME').val();
 var edp = $('#SIEDP').val();
 var styl = $('#SISTYL').val();
 qty = parseInt(qty);
 if (qty >= 1)
    $('#qty').val(qty);
 else
    {$('#qty').val('1'); qty=1;}
//Ajax Request to  get stockMessage.
   $.ajax({
                 url: '/cgi/CGBCSTYLK',
			          type: 'post',
            dataType: 'html',
                data: {
                      SIAJAXMODE: 'Y' ,
                      SIAJAXACTN: 'QTY',
                      SIAREDP: aredp,
                      SIARNAME: arname,
                      SIEDP: edp,
                      SISTYL: styl,
                      SIQTY: qty
                      }
           })
        .success(function (html) {
        //swap Inner Html
        $("#stockMsg").html(html);
        rndTip();
        $("#SIAREDP").val('');
        $("#SIARNAME").val('');
         })
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function prepArray(actn){

if(actn!='')
{
 actn=actn.substring(6);
if( $('#'+actn).length )
{
    $('#'+actn).val('');
}
}
var listedp='';
var listname='';
$(".compEdp").each(function() {
      if($(this).val()!='')
       if (listedp=='')
       {
        listedp =$(this).val();
        listname =$(this).attr('name');
        }
       else
        {
        listedp  =$.trim(listedp)+'$'+$(this).val();
        listname =$.trim(listname)+'$'+$(this).attr('name')
        }
		})
if(listedp!='')
   {
   $('#SIAREDP').val(listedp);
   $('#SIARNAME').val(listname);
   }
   }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function THIShandleEnterKeyQty(inField, e) {
  var charCode;
  if(e && e.which){
    charCode = e.which;
  }else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }
  if(charCode == 13) {
    showWait();
    submit_form('f','SAVE');
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function THIShandleEnterKeySrce(inField, e) {
  var charCode;
  if(e && e.which){
    charCode = e.which;
  }else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }
  if(charCode == 13) {
    showWait();
    submit_form('f','APPLYSRCE');
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function EnterActn(action, e) {
  var charCode;
  if(e && e.which){
    charCode = e.which;
  }else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }
  if(charCode == 13) {
    showWait();
    submit_form('f',action);
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function applySrce(){
    syncSrce();
   submit_form('f', 'APPLYSRCE');
   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**