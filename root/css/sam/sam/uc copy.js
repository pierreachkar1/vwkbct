
/* =============== DOCUMENT READY =============== */
$(document).ready(function() {

	
	/* Generate Content - COAT */
	$("#uc_coat_section .uc_product_section_bg").html(
	'<div>'+
	'	<p>'+
	'		Discover durable and rugged workwear designed to withstand the demands of the construction industry. From reinforced clothing to protective gear, our construction workwear ensures both safety and comfort on the job site, so you can focus on getting the job done right.'+
	'	</p>'+
	'	<span class="span_h4">Need To Know, Hot Weather OCP Coat</span>'+
	'	<ul>'+
	'		<li>LIGHTER WEIGHT</li>'+         
	'		<li>5.8 OZ FABRIC</li>'+         
	'		<li>NO CHEST POCKETS</li>'+            
	'		<li>REINFORCED ELBOWS</li>'+           
	'		<li>CUSTOMIZED TO ORDER NAME TAPES, RANK, BADGES, PATCHES</li>'+
	'	</ul>'+
	'</div>'
	);
	var samArrProdList_Coat = 
	[
		[
			'Air Force Custom ECWCS Gen III Level 3 Fleece Jacket',
			'/photos/styles/JA3039_ECWCS_USAF_1.jpg',
			'US Patriot',
			'/images/icons/stars-four-half.png',
			'Customize',
			'uc_coat_1'
		],
		[
			'Propper Gen 2 OCP ACU Coat',
			'/css/sam/homepage/images/SH4600.jpg',
			'US Patriot',
			'/images/icons/stars-four-half.png',
			'Customize',
			'uc_coat_2'
		]
	];
	samUC_ProductCardSlider(samArrProdList_Coat,"uc_coat_pdp");
	/* END */


	/* Generate Content - PANTS */
	$("#uc_pants_section .uc_product_section_bg").html(
	'<div>'+
	'	<p>'+
	'		Discover durable and rugged workwear designed to withstand the demands of the construction industry. From reinforced clothing to protective gear, our construction workwear ensures both safety and comfort on the job site, so you can focus on getting the job done right.'+
	'	</p>'+
	'	<span class="span_h4">Need To Know, Hot Weather OCP Coat</span>'+
	'	<ul>'+
	'		<li>LIGHTER WEIGHT</li>'+         
	'		<li>5.8 OZ FABRIC</li>'+         
	'		<li>NO CHEST POCKETS</li>'+            
	'		<li>REINFORCED ELBOWS</li>'+           
	'		<li>CUSTOMIZED TO ORDER NAME TAPES, RANK, BADGES, PATCHES</li>'+
	'	</ul>'+
	'</div>'
	);
	var samArrProdList_Pants = 
	[
		[
			'Tru-Spec Army Hot Weather Uniform Pants IHWCU',
			'/photos/styles/USPT_TR2736_1500_1.jpg',
			'US Patriot',
			'/images/icons/stars-four-half.png',
			'View',
			'uc_pants_1'
		],
		[
			'Propper Men\'s OCP Uniform',
			'/photos/styles/USPT_TS1763_1500_1.jpg',
			'US Patriot',
			'/images/icons/stars-four-half.png',
			'View',
			'uc_pants_2'
		]
	];
	samUC_ProductCardSlider(samArrProdList_Pants,"uc_pants_pdp");
	/* END */


	/* Generate Content - HAT */
	$("#uc_hat_section .uc_product_section_bg").html(
	'<div>'+
	'	<p>'+
	'		Discover durable and rugged workwear designed to withstand the demands of the construction industry. From reinforced clothing to protective gear, our construction workwear ensures both safety and comfort on the job site, so you can focus on getting the job done right.'+
	'	</p>'+
	'	<span class="span_h4">Need To Know, Hot Weather OCP Coat</span>'+
	'	<ul>'+
	'		<li>LIGHTER WEIGHT</li>'+         
	'		<li>5.8 OZ FABRIC</li>'+         
	'		<li>NO CHEST POCKETS</li>'+            
	'		<li>REINFORCED ELBOWS</li>'+           
	'		<li>CUSTOMIZED TO ORDER NAME TAPES, RANK, BADGES, PATCHES</li>'+
	'	</ul>'+
	'</div>'
	);
	var samArrProdList_Hat = 
	[
		[
			'Tru-Spec Air Force OCP W2 Boonie Uniform Builder',
			'/photos/styles/HW2829_OCP_1500_1.jpg',
			'US Patriot',
			'/images/icons/stars-four-half.png',
			'Customize',
			'uc_hat_1'
		],
		[
			'Air Force OCP Tactical Cap',
			'/photos/styles/USPT_HW4204_1500_1.jpg',
			'US Patriot',
			'/images/icons/stars-four-half.png',
			'Customize',
			'uc_hat_2'
		]
	];
	samUC_ProductCardSlider(samArrProdList_Hat,"uc_hat_pdp");
	/* END */


	/* Generate Content - QTY */
	for (var i = 3; i < 100; i++) {
		$("#SIQTY").append('<option value="' + i + '">' + i + '</option>');
	}
	

	/* Generate Content - Features and Specs */
	for (var i = 0; i < document.getElementsByClassName('UC_Accordion_PlaceHolder').length; i++) {
		document.getElementsByClassName('UC_Accordion_PlaceHolder')[i].innerHTML =
		'<div aria-multiselectable="true" class="panel-group" id="features_accordion_' + i + '" role="tablist">'+

		'	<div class="panel panel-default">'+
		'		<div class="panel-heading" id="features_heading_' + i + '" role="tab">'+
		'			<a aria-controls="features_collapse_' + i + '" aria-expanded="true" data-parent="#features_accordion_' + i + '" data-toggle="collapse" href="#features_collapse_' + i + '" role="button">'+
		'				<h4 class="panel-title">Features</h4>'+
		'			</a>'+
		'		</div>'+
		'		<div aria-labelledby="features_heading_' + i + '" class="panel-collapse collapse in" id="features_collapse_' + i + '" role="tabpanel">'+
		'			<div class="panel-body">'+
		'				<ul>'+
		'					<li>Bullet Point 1</li>'+
		'					<li>Bullet Point 2</li>'+
		'					<li>Bullet Point 3</li>'+
		'					<li>Bullet Point 4</li>'+
		'					<li>Bullet Point 5</li>'+
		'				</ul>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+

		'	<div class="panel panel-default">'+
		'		<div class="panel-heading" id="specs_heading_' + i + '" role="tab">'+
		'			<a aria-controls="specs_collapse_' + i + '" aria-expanded="false" data-parent="#accordion_' + i + '" data-toggle="collapse" href="#specs_collapse_' + i + '" role="button">'+
		'				<h4 class="panel-title">Specs</h4>'+
		'			</a>'+
		'		</div>'+
		'		<div aria-labelledby="specs_heading_' + i + '" class="panel-collapse collapse" id="specs_collapse_' + i + '" role="tabpanel">'+
		'			<div class="panel-body">'+
		'				<ul>'+
		'					<li>Bullet Point 1</li>'+
		'					<li>Bullet Point 2</li>'+
		'					<li>Bullet Point 3</li>'+
		'					<li>Bullet Point 4</li>'+
		'					<li>Bullet Point 5</li>'+
		'				</ul>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+

		'</div>';
	}




	/* Options 1 Click Behaviour */
	samUC_Option_Clicked('uc_coat_1');
	samUC_Option_Clicked('uc_coat_2');
	samUC_Option_Clicked('uc_pants_1');
	samUC_Option_Clicked('uc_pants_2');
	samUC_Option_Clicked('uc_hat_1');
	samUC_Option_Clicked('uc_hat_2');
	

	/* When Skill Badges Option Changed */
	samUC_Expand_Select_Option("#uc_coat_1");
	samUC_Expand_Select_Option("#uc_coat_2");
	samUC_Expand_Select_Option("#uc_hat_1");
	samUC_Expand_Select_Option("#uc_hat_2");


	/* Show or Hide Plus/Minu Accordion Style */
	samUC_OptionToggle('uc_coat_1');
	samUC_OptionToggle('uc_coat_2');
	samUC_OptionToggle('uc_pants_1');
	samUC_OptionToggle('uc_pants_2');
	samUC_OptionToggle('uc_hat_1');
	samUC_OptionToggle('uc_hat_2');

	

	
});
/* =============== END DOCUMENT READY =============== */






/* Generate Product Card Slick Slider */
function samUC_ProductCardSlider(arrProducts,samDivID) {


	document.getElementById(samDivID).innerHTML = '<div class="carousel ' + samDivID + '">&nbsp;</div>';
	for (var i = 0; i < arrProducts.length; i++) {
		document.getElementsByClassName(samDivID)[0].innerHTML +=
		'<div><div class="card">'+
		'	<div class="card-header">'+
		'		<img src="' + arrProducts[i][1] + '">'+
		'	</div>'+
		'	<div class="card-body">'+
		'		<div class="card-content">'+
		'			<div class="card-title">' + arrProducts[i][0] + '</div>'+
		'			<div class="flex-grid">'+               
		'				<div class="card-brand">' + arrProducts[i][2] + '</div>'+
		'				<div class="card-rating"><img src="' + arrProducts[i][3] + '" class="product-item__stars img-responsive"></div>'+
		'			</div>'+
		'			<div>'+
		'				<a class="card-button" id="btn_' + arrProducts[i][5] + '" onclick="samUC_Expand_Div(\'' + arrProducts[i][5] + '\')">' + arrProducts[i][4] + '</a>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+
		'</div></div>';

	}
	
	$('.' + samDivID).slick({
		slidesToShow: 2,
		variableWidth: false,
		centerPadding: '0',
		dots: false,
		arrows: true,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500
			}
		}
		]
	});

}


/* When Button (Customize or View) is clicked */
function samUC_Expand_Div(name) {

	//Reset Options clicked
	// $("#opv1UL a li").removeClass("selected");
	// $("#opv2UL a li").removeClass("selected");
	// $("#opv3UL a li").removeClass("selected");

	if ($('#btn_' + name).html() == "Customizing") {
		$('#' + name).slideUp(500);
		// $('#' + name).hide(500);
		$('#btn_' + name).html('Customize');
		$('#btn_' + name).css("background-color","#000000");
	} else if ($('#btn_' + name).html() == "Viewing") {
		$('.uc_pd_div').slideUp(500);	//Reset Div
		// $('.uc_pd_div').hide(500);	//Reset Div
		$('#btn_' + name).html('View');
		$('#btn_' + name).css("background-color","#000000");
	} else {
		$('.uc_pd_div').slideUp(0);	//Reset Div
		samUC_Expand_Div_Reset(); //Reset Btn Text

		//Changing Button Text
		if ($('#btn_' + name).html() == "Customize") {
			$('#btn_' + name).html('Customizing');
			$('#btn_' + name).css("background-color","#c42033");
		} else if ($('#btn_' + name).html() == "Customizing") {
			$('#btn_' + name).html('Customize');
			$('#btn_' + name).css("background-color","#000000");
		} else if ($('#btn_' + name).html() == "View") {
			$('#btn_' + name).html('Viewing');
			$('#btn_' + name).css("background-color","#c42033");
		} else if ($('#btn_' + name).html() == "Viewing") {
			$('#btn_' + name).html('View');
			$('#btn_' + name).css("background-color","#000000");
		}
		
		$('#' + name).slideDown(500);

		var samScrollTo = $("#" + name + " .span_h2").offset().top - 100;
		window.scrollTo(0, samScrollTo);

	}

}

/* Reset Button (Customize or View) wording */
function samUC_Expand_Div_Reset() {
	for (var i = 0; i < document.getElementsByClassName('card-button').length; i++) {
		if (document.getElementsByClassName('card-button')[i].innerHTML == "Customizing") {
			document.getElementsByClassName('card-button')[i].innerHTML = "Customize";
			document.getElementsByClassName('card-button')[i].style.backgroundColor = "#000000";
		} else if (document.getElementsByClassName('card-button')[i].innerHTML == "Viewing") {
			document.getElementsByClassName('card-button')[i].innerHTML = "View";
			document.getElementsByClassName('card-button')[i].style.backgroundColor = "#000000";
		}
	}
}


/* Skill Badge select option changed */
function samUC_Expand_Select_Option(parentDiv) {
	$(parentDiv + " select.uc_sel_skillbadge").change(function(){
        var selectedOption = $(this).children("option:selected").val();
        if (selectedOption == "1") {
			$(parentDiv + " select.uc_sel_skillbadge_position_1").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_2").hide(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_3").hide(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_4").hide(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_5").hide(500);
		} else if (selectedOption == "2") {
			$(parentDiv + " select.uc_sel_skillbadge_position_1").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_2").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_3").hide(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_4").hide(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_5").hide(500);
		} else if (selectedOption == "3_standard") {
			$(parentDiv + " select.uc_sel_skillbadge_position_1").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_2").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_3").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_4").hide(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_5").hide(500);
		} else if (selectedOption == "3_stacked") {
			$(parentDiv + " select.uc_sel_skillbadge_position_1").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_2").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_3").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_4").hide(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_5").hide(500);
		} else if (selectedOption == "4_grid") {
			$(parentDiv + " select.uc_sel_skillbadge_position_1").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_2").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_3").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_4").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_5").hide(500);
		} else if (selectedOption == "4_stacked") {
			$(parentDiv + " select.uc_sel_skillbadge_position_1").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_2").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_3").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_4").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_5").hide(500);
		} else {
			$(parentDiv + " select.uc_sel_skillbadge_position_1").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_2").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_3").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_4").show(500);
			$(parentDiv + " select.uc_sel_skillbadge_position_5").show(500);
		}
    });
}



/* Option Clicked */
function samUC_Option_Clicked(name) {

	//Option 1 - Tracking Click Event
	$("#" + name + " #opv1UL a").click(function() {
		if ($(this).children("li").hasClass("selected")) {
			$(this).children("li").removeClass("selected");
			$("#" + name + " #samUC_Option1_Selected").html("Select an Option");
			$("#" + name + " #samUC_Option1_Selected").css("color","#939393");
		} else {
			$("#" + name + " #opv1UL a li").removeClass("selected");
			$(this).children("li").addClass("selected");
			$("#" + name + " #samUC_Option1_Selected").html($(this).attr("title"));
			$("#" + name + " #samUC_Option1_Selected").css("color","green");
		}
		samUC_AllOptionsSelected(name);

	});

	//Option 2 - Tracking Click Event
	$("#" + name + " #opv2UL a").click(function() {
		if ($(this).children("li").hasClass("selected")) {
			$(this).children("li").removeClass("selected");
			$("#" + name + " #samUC_Option2_Selected").html("Select an Option");
			$("#" + name + " #samUC_Option2_Selected").css("color","#939393");
		} else {
			$("#" + name + " #opv2UL a li").removeClass("selected");
			$(this).children("li").addClass("selected");
			$("#" + name + " #samUC_Option2_Selected").html($(this).attr("title"));
			$("#" + name + " #samUC_Option2_Selected").css("color","green");
		}
		samUC_AllOptionsSelected(name);
	});

	//Option 3 - Tracking Click Event
	$("#" + name + " #opv3UL a").click(function() {
		if ($(this).children("li").hasClass("selected")) {
			$(this).children("li").removeClass("selected");
			$("#" + name + " #samUC_Option3_Selected").html("Select an Option");
			$("#" + name + " #samUC_Option3_Selected").css("color","#939393");
		} else {
			$("#" + name + " #opv3UL a li").removeClass("selected");
			$(this).children("li").addClass("selected");
			$("#" + name + " #samUC_Option3_Selected").html($(this).attr("title"));
			$("#" + name + " #samUC_Option3_Selected").css("color","green");
		}
		samUC_AllOptionsSelected(name);
	});


}


/* Check If All Required Options Selected */
function samUC_AllOptionsSelected(name) {

	//Collapse When Each Option Section is selected
	if ($("#" + name + " #opv1UL a li.selected").length > 0)  {
		$("#" + name + " #opv1UL").hide(500);
		$("#" + name + " .uc_Option_Toggle:eq(0)").addClass("uc_Option_Toggle_Plus");
	}
	if ($("#" + name + " #opv2UL a li.selected").length > 0)  {
		$("#" + name + " #opv2UL").hide(500);
		$("#" + name + " .uc_Option_Toggle:eq(1)").addClass("uc_Option_Toggle_Plus");
	}
	if ($("#" + name + " #opv3UL a li.selected").length > 0)  {
		$("#" + name + " #opv3UL").hide(500);
		$("#" + name + " .uc_Option_Toggle:eq(2)").addClass("uc_Option_Toggle_Plus");
	}

	
	//If All Required Options Selected
	if (
		($("#" + name + " #opv1UL a li.selected").length > 0) && 
		($("#" + name + " #opv2UL a li.selected").length > 0) && 
		($("#" + name + " #opv3UL a li.selected").length > 0)
	) {
		//All Required Options Selected => Show Customize Section
		$("#" + name + " .uc_customized_options .uc_customized_row").show(0);
		$("#" + name + " .uc_customized_options").slideDown(500);
		$("#" + name + " .uc_Option_Toggle:eq(3)").removeClass("uc_Option_Toggle_Plus");
		$("#" + name + " .product__stock-warning").show(0);

	} else {
		$("#" + name + " .uc_customized_options .uc_customized_row").hide(0);
		$("#" + name + " .uc_customized_options").slideUp(500);
		$("#" + name + " .uc_Option_Toggle:eq(3)").addClass("uc_Option_Toggle_Plus");
		$("#" + name + " .product__stock-warning").hide(0);
	}


}


/* Toggle Plus/Minus Sign */
function samUC_OptionToggle(name) {


	//Plus or Minu Icon Clicked
	$("#" + name + " .uc_Option_Toggle").click(function(){
		var samUC_WhichOption = $(this).attr('class');
		if (samUC_WhichOption.indexOf('uc_Option_Toggle_1') > 0) {
			$("#" + name + " #opv1UL").slideToggle(500);
		} else if (samUC_WhichOption.indexOf('uc_Option_Toggle_2') > 0) {
			$("#" + name + " #opv2UL").slideToggle(500);
		} else  if (samUC_WhichOption.indexOf('uc_Option_Toggle_3') > 0) {
			$("#" + name + " #opv3UL").slideToggle(500);
		} else  if (samUC_WhichOption.indexOf('uc_Option_Toggle_Customize') > 0) {
			$("#" + name + " .uc_customized_options .uc_customized_row").slideToggle(500);
		} 
		$(this).toggleClass("uc_Option_Toggle_Plus");
	}); 

	//Label Click
	$("#" + name + " .samUC_Option1_Label").click(function(){
		$("#" + name + " #opv1UL").slideToggle(500);
		$("#" + name + " .uc_Option_Toggle:eq(0)").toggleClass("uc_Option_Toggle_Plus");
	}); 
	$("#" + name + " .samUC_Option2_Label").click(function(){
		$("#" + name + " #opv2UL").slideToggle(500);
		$("#" + name + " .uc_Option_Toggle:eq(1)").toggleClass("uc_Option_Toggle_Plus");
	}); 
	$("#" + name + " .samUC_Option3_Label").click(function(){
		$("#" + name + " #opv3UL").slideToggle(500);
		$("#" + name + " .uc_Option_Toggle:eq(2)").toggleClass("uc_Option_Toggle_Plus");
	}); 
	$("#" + name + " .samUC_Customize_Label").click(function(){
		$("#" + name + " .uc_customized_options .uc_customized_row").slideToggle(500);
		$("#" + name + " .uc_Option_Toggle:eq(3)").toggleClass("uc_Option_Toggle_Plus");
	}); 


	//Selected Option Label Click
	$("#" + name + " #samUC_Option1_Selected").click(function(){
		$("#" + name + " #opv1UL").slideToggle(500);
		$("#" + name + " .uc_Option_Toggle:eq(0)").toggleClass("uc_Option_Toggle_Plus");
	}); 
	$("#" + name + " #samUC_Option2_Selected").click(function(){
		$("#" + name + " #opv2UL").slideToggle(500);
		$("#" + name + " .uc_Option_Toggle:eq(1)").toggleClass("uc_Option_Toggle_Plus");
	}); 
	$("#" + name + " #samUC_Option3_Selected").click(function(){
		$("#" + name + " #opv3UL").slideToggle(500);
		$("#" + name + " .uc_Option_Toggle:eq(2)").toggleClass("uc_Option_Toggle_Plus");
	}); 

}