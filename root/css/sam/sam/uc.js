
/* =============== DOCUMENT READY =============== */
$(document).ready(function() {

	
	/* GENERATE CONTENTS FOR: COAT SECTION */
		//Left: Some Description
		samUC_GenerateLeftSectionDesc("uc_coat_section");

		//Right: Product Card Slider
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
		samUC_GenerateProdCardSlider(samArrProdList_Coat,"uc_coat_section");	


		//COAT 1
		samUC_GenerateMainImage_N_Details("uc_coat_1","/images/uniform-customizer/demo.png");								//Product Main Image
		samUC_GenerateProd_Feature_n_Specs("uc_coat_1");																	//Features and Specs
		samUC_GenerateProd_Details_Header("uc_coat_1", "Air Force Custom ECWCS Gen III Level 3 Fleece Jacket", "$62.99");	//Title and Price
		samUC_GenerateProd_Details_Options("uc_coat_1");																	//Product Options
		samUC_GenerateProd_Details_Footer("uc_coat_1");																		//Stock Message, QTY, and Add To Cart Button
		samUC_GenerateProd_Details_Customize("uc_coat_1");																//Customize Options

		//COAT 2
		samUC_GenerateMainImage_N_Details("uc_coat_2","/images/uniform-customizer/demo.png");								//Product Main Image
		samUC_GenerateProd_Feature_n_Specs("uc_coat_2");																	//Features and Specs
		samUC_GenerateProd_Details_Header("uc_coat_2", "Propper Gen 2 OCP ACU Coat", "$69.99 TO $73.99");					//Title and Price
		samUC_GenerateProd_Details_Options("uc_coat_2");																	//Product Options
		samUC_GenerateProd_Details_Footer("uc_coat_2");																		//Stock Message, QTY, and Add To Cart Button
		samUC_GenerateProd_Details_Customize("uc_coat_2");																	//Customize Options

	/* END */


	/* GENERATE CONTENTS FOR: PANTS SECTION */
		//Left: Some Description
		samUC_GenerateLeftSectionDesc("uc_pants_section");

		//Right: Product Card Slider
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
		samUC_GenerateProdCardSlider(samArrProdList_Pants,"uc_pants_section");


		//PANT 1
		samUC_GenerateMainImage_N_Details("uc_pants_1","/photos/styles/USPT_TR2736_1500_1.jpg");	//Product Main Image
		samUC_GenerateProd_Feature_n_Specs("uc_pants_1");																	//Features and Specs
		samUC_GenerateProd_Details_Header("uc_pants_1", "Tru-Spec Army Hot Weather Uniform Pants IHWCU", "$69.99");			//Title and Price
		samUC_GenerateProd_Details_Options("uc_pants_1");																	//Product Options
		samUC_GenerateProd_Details_Footer("uc_pants_1");																	//Stock Message, QTY, and Add To Cart Button
		$("#uc_pants_1 .uc_pd_option_step_title h3").html('Product Options');	//Change Step 1: Product Options => Product Options (No Customization Only)


		//PANT 2
		samUC_GenerateMainImage_N_Details("uc_pants_2","/photos/styles/USPT_TS1763_1500_1.jpg");	//Product Main Image
		samUC_GenerateProd_Feature_n_Specs("uc_pants_2");																	//Features and Specs
		samUC_GenerateProd_Details_Header("uc_pants_2", "Propper Men's OCP Uniform", "$69.99");								//Title and Price
		samUC_GenerateProd_Details_Options("uc_pants_2");																	//Product Options
		samUC_GenerateProd_Details_Footer("uc_pants_2");																	//Stock Message, QTY, and Add To Cart Button
		$("#uc_pants_2 .uc_pd_option_step_title h3").html('Product Options');												//Change Step 1: Product Options => Product Options (No Customization Only)

	/* END */



	/* GENERATE CONTENTS FOR: HAT SECTION */
		//Left: Some Description
		samUC_GenerateLeftSectionDesc("uc_hat_section");

		//Right: Product Card Slider
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
		samUC_GenerateProdCardSlider(samArrProdList_Hat,"uc_hat_section");
		/* END */


		//HAT 1
		samUC_GenerateMainImage_N_Details("uc_hat_1","/photos/styles/HW2829_OCP_1500_1.jpg");							//Product Main Image
		samUC_GenerateProd_Feature_n_Specs("uc_hat_1");																	//Features and Specs
		samUC_GenerateProd_Details_Header("uc_hat_1", "Tru-Spec Air Force OCP W2 Boonie Uniform Builder", "$19.99");	//Title and Price
		samUC_GenerateProd_Details_Options("uc_hat_1");																	//Product Options
		samUC_GenerateProd_Details_Footer("uc_hat_1");																	//Stock Message, QTY, and Add To Cart Button	
		samUC_GenerateProd_Details_Customize("uc_hat_1");																//Customize Options
																	


		//HAT 2
		samUC_GenerateMainImage_N_Details("uc_hat_2","/photos/styles/USPT_HW4204_1500_1.jpg");							//Product Main Image
		samUC_GenerateProd_Feature_n_Specs("uc_hat_2");																	//Features and Specs
		samUC_GenerateProd_Details_Header("uc_hat_2", "Air Force OCP Tactical Cap", "$19.99");							//Title and Price
		samUC_GenerateProd_Details_Options("uc_hat_2");																	//Product Options
		samUC_GenerateProd_Details_Footer("uc_hat_2");																	//Stock Message, QTY, and Add To Cart Button
		samUC_GenerateProd_Details_Customize("uc_hat_2");																//Customize Options

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






/* =============== GENERATE CONTENTS =============== */

/* Generate Left Section Description */
function samUC_GenerateLeftSectionDesc(sectionName){
	$("#" + sectionName + " .uc_product_section_bg").html(
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
}


/* Generate Product Card Slick Slider */
function samUC_GenerateProdCardSlider(arrProducts,sectionName) {

	$("#" + sectionName + " .uc_product_section_card").html('<div class="carousel">&nbsp;</div>');

	for (var i = 0; i < arrProducts.length; i++) {
		$("#" + sectionName + " .carousel").append(
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
			'				<a class="card-button" id="btn_' + arrProducts[i][5] + '" onclick="samUC_ToggleCategoryDiv(\'' + arrProducts[i][5] + '\')">' + arrProducts[i][4] + '</a>'+
			'			</div>'+
			'		</div>'+
			'	</div>'+
			'</div></div>'
		);
	}
	
	$("#" + sectionName + " .carousel").slick({
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

/* Generate Main Image */
function samUC_GenerateMainImage_N_Details(sectionCategory,imgURL) {
	$("#" + sectionCategory + " .uc_main_img").html(
		'<img src="' + imgURL + '"></img>'
	);
}

/* Generate Product Features and Section */
function samUC_GenerateProd_Feature_n_Specs(sectionCategory) {

	for (var i = 0; i < $("#" + sectionCategory + " .uc_prodct_accordion").length; i++) {

		$("#" + sectionCategory + " .uc_prodct_accordion:eq(" + i + ")").html(
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

			'</div>'
		);
		
	}

}

/* Generate Product Header: Title and Price */
function samUC_GenerateProd_Details_Header(sectionCategory, title, price) {

	//Title and Price
	$("#" + sectionCategory + " .uc_pd_header").html(
		'<span class="span_h2">' + title + '</span>'+
        '<span class="span_h2">' + price + '</span>'
	);

}

/* Generate Product Options */
function samUC_GenerateProd_Details_Options(sectionCategory) {

	$("#" + sectionCategory + " .uc_pd_option").html(

		//Step 1: Select Options
		'<div class="uc_pd_option_step_title"><h3 class="uc_minus">Step 1: Product Options</h3></div>'+

		//Option 1
		'<div class="product__options--row">'+
		'	<div class="product__options--row-label">'+
		'		<label class="form__label mr-1 samUC_Option1_Label">COLOR</label>'+
		'		<label class="form__label black" id="samUC_Option1_Selected">Select an Option</label>'+
		'	</div>'+
		'	<ul class="product__options--list choices product__options--color" id="opv1UL">'+
		'		<a title="BLACK">'+
		'			<li class="Bkg000000"><img src="/photos/colors/BLK.png"></li>'+
		'		</a>'+
		'		<a title="DARK NAVY">'+
		'			<li class="BkgTRANSPARENT"><img src="/photos/colors/NAV.png"></li>'+
		'		</a>'+
		'		<a title="STORM GRAY">'+
		'			<li class="BkgTRANSPARENT"><img src="/photos/colors/STRM.png"></li>'+
		'		</a>'+
		'		<a title="TDU GREEN">'+
		'			<li class="BkgTRANSPARENT"><img src="/photos/colors/TDGN.png"></li>'+
		'		</a>'+
		'	</ul>'+
		'</div>'+

		//Option 2
		'<div class="product__options--row">'+
		'	<div class="product__options--row-label">'+
		'		<label class="form__label mr-1 samUC_Option2_Label">Size</label>'+
		'		<label class="form__label mr-1"></label>'+
		'		<label class="form__label black" id="samUC_Option2_Selected">Select an Option</label>'+
		'	</div>'+
		'	<ul class="product__options--list choices product__options--boxes" id="opv2UL">'+
		'		<a title="4"><li>4</li></a>'+
		'		<a title="4.5"><li>4.5</li></a>'+
		'		<a title="5"><li>5</li></a>'+
		'		<a title="5.5"><li>5.5</li></a>'+
		'		<a title="6"><li>6</li></a>'+
		'		<a title="6.5"><li>6.5</li></a>'+
		'		<a title="7"><li>7</li></a>'+
		'		<a title="7.5"><li>7.5</li></a>'+
		'		<a title="8"><li>8</li></a>'+
		'		<a title="8.5"><li>8.5</li></a>'+
		'		<a title="9"><li>9</li></a>'+
		'		<a title="9.5"><li>9.5</li></a>'+
		'		<a title="10"><li>10</li></a>'+
		'		<a title="10.5"><li>10.5</li></a>'+
		'		<a title="11"><li>11</li></a>'+
		'		<a title="11.5"><li>11.5</li></a>'+
		'		<a title="12"><li>12</li></a>'+
		'		<a title="12.5"><li>12.5</li></a>'+
		'		<a title="13"><li>13</li></a>'+
		'		<a title="13.5"><li>13.5</li></a>'+
		'		<a title="14"><li>14</li></a>'+
		'		<a title="14.5"><li>14.5</li></a>'+
		'		<a title="15"><li>15</li></a>'+
		'	</ul>'+
		'</div>'+

		//Option 3
		'<div class="product__options--row">'+
		'	<div class="product__options--row-label">'+
		'		<label class="form__label mr-1 samUC_Option3_Label">Length</label>'+
		'		<label class="form__label black" id="samUC_Option3_Selected">Select an Option</label>'+
		'	</div>'+
		'	<ul class="product__options--list choices product__options--boxes" id="opv3UL">'+
		'		<a title="Short"><li>Short</li></a>'+
		'		<a title="Regular"><li>Regular</li></a>'+
		'		<a title="Long"><li>Long</li></a>'+
		'		<a title="Extra Long"><li>Extra Long</li></a>'+
		'	</ul>'+
		'</div>'

	);

}

/* Generate Product Footer: Stock Message, QTY, and Add To Cart Button  */
function samUC_GenerateProd_Details_Footer(sectionCategory) {

	$("#" + sectionCategory + " .uc_pd_footer").html(

		//Stock Message
		'<span class="product__stock-warning">'+
		'	<span style="color:green">'+
		'		In Stock! Usually Ships Within 24 Hours'+
		'	</span>'+
		'</span>'+

		//QTY and Add To Cart Button
		'<div class="row">'+
		'	<div class="col-sm-12 product__qty ">'+
		'		<select name="SIQTY" title="Quantity" id="SIQTY" class="form__select">'+
		'			<option value="1" selected="">1</option>'+
		'			<option value="2">2</option>'+
		'		</select>'+
		'		<div id="samUC_AddToCart">'+
		'			<a onclick="alert(\'No Function Created Yet\')" class="btn btn_lg btn-block btn--orange vwo-addtocart ">Add To Cart</a>'+
		'		</div>'+
		'	</div>'+
		'</div>'

	);

}

/* Generate Product Customize */
function samUC_GenerateProd_Details_Customize(sectionCategory) {

	$("#" + sectionCategory + " .uc_customized_option").html(
		//Step 2: Customize
		'<div class="uc_pd_option_step_title"><h3 class="uc_plus">Step 2: Customization</h3></div>'+

		'<div class="product__options--row">'+
			//Row - Branch and Name
		'	<div class="row uc_customized_row">'+
		'		<div class="col-md-6 uc_co_col">'+
		'			<span><img src="https://www.uspatriottactical.com/photos/styles/Name-Branch_Tapes-64x64.jpg"></span>'+
		'			<select>'+
		'				<option value="" disabled="" selected="">Select Branch</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'		</div>'+
		'		<div class="col-md-6 uc_co_col">'+
		'			<input type="text" placeholder="NAME">'+
		'			<div class="review_correct">'+
		'				<input type="checkbox" name="review_correct" id="review_correct">'+
		'				<label class="lbl_checkbox" for="review_correct">Reviewed & Correct</label> '+
		'			</div>'+
		'		</div>'+
		'	</div>'+
			
			//Row - Skill Badge and Rank
		'	<div class="row uc_customized_row">'+
		'		<div class="col-md-6 uc_co_col">'+
		'			<select style="width: 100%" class="uc_sel_skillbadge">'+
		'				<option value="" disabled="" selected="">Skill Badge Qty & Layout</option>'+
		'				<option value="1">1 Badge</option>'+
		'				<option value="2">2 Badge</option>'+
		'				<option value="3_standard">3 Badge Standard</option>'+
		'				<option value="3_stacked">3 Badge Stacked</option>'+
		'				<option value="4_grid">4 Badge Grid</option>'+
		'				<option value="4_stacked">4 Badge Stacked</option>'+
		'				<option value="5">5 Badge</option>'+
		'			</select>'+
		'			<select class="uc_sel_skillbadge_hidden uc_sel_skillbadge_position_1" style="width: 100%; display: none">'+
		'				<option value="" disabled="" selected="">Skill Badge Position 1</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'			<select class="uc_sel_skillbadge_hidden uc_sel_skillbadge_position_2" style="width: 100%; display: none">'+
		'				<option value="" disabled="" selected="">Skill Badge Position 2</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'			<select class="uc_sel_skillbadge_hidden uc_sel_skillbadge_position_3" style="width: 100%; display: none">'+
		'				<option value="" disabled="" selected="">Skill Badge Position 3</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'			<select class="uc_sel_skillbadge_hidden uc_sel_skillbadge_position_4" style="width: 100%; display: none">'+
		'				<option value="" disabled="" selected="">Skill Badge Position 4</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'			<select class="uc_sel_skillbadge_hidden uc_sel_skillbadge_position_5" style="width: 100%; display: none">'+
		'				<option value="" disabled="" selected="">Skill Badge Position 5</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'		</div>'+
		'		<div class="col-md-6 uc_co_col">'+
		'			<span><img src="/photos/colors/OCP.PNG"></span>'+
		'			<select>'+
		'				<option value="" disabled="" selected="">Select Rank</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'		</div>'+
		'	</div>'+
			
			//Row - Tabs and Unit Badge
		'	<div class="row uc_customized_row">'+
		'		<div class="col-md-6 uc_co_col">'+
		'			<span><img src="/photos/colors/OCP.PNG"></span>'+
		'			<select>'+
		'				<option value="" disabled="" selected="">Tabs</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'		</div>'+
		'		<div class="col-md-6 uc_co_col">'+
		'			<span><img src="/photos/colors/OCP.PNG"></span>'+
		'			<select>'+
		'				<option value="" disabled="" selected="">Unit Badge</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'		</div>'+
		'	</div>'+
			
			//Row - ID Badge (Right and Left)
		'	<div class="row uc_customized_row">'+
		'		<div class="col-md-6 uc_co_col">'+
		'			<span><img src="/photos/colors/OCP.PNG"></span>'+
		'			<select>'+
		'				<option value="" disabled="" selected="">Select Right ID Badge</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'		</div>'+
		'		<div class="col-md-6 uc_co_col">'+
		'			<span><img src="/photos/colors/OCP.PNG"></span>'+
		'			<select>'+
		'				<option value="" disabled="" selected="">Select Left ID Badge</option>'+
		'				<option>Option 1</option>'+
		'				<option>Option 2</option>'+
		'				<option>Option 3</option>'+
		'				<option>Option 4</option>'+
		'				<option>Option 5</option>'+
		'			</select>'+
		'		</div>'+
		'	</div>'+
		'</div>'
	);

	//Disabled By Default
	$("#" + sectionCategory + " .uc_customized_option").addClass('uc_customized_option_disabled');

}
/* =============== END GENERATE CONTENTS =============== */








/* =============== INTERACTIONS =============== */

/* When Button (Customize or View) is clicked */
function samUC_ToggleCategoryDiv(sectionCategory) {

	if ($('#btn_' + sectionCategory).html() == "Customizing") {
		$('#' + sectionCategory).slideUp(500);
		$('#btn_' + sectionCategory).html('Customize');
		$('#btn_' + sectionCategory).css("background-color","#000000");
	} else if ($('#btn_' + sectionCategory).html() == "Viewing") {
		$('.uc_pd_row').slideUp(500);	//Reset Div
		$('#btn_' + sectionCategory).html('View');
		$('#btn_' + sectionCategory).css("background-color","#000000");
	} else {
		$('.uc_pd_row').slideUp(0);	//Reset Div
		samUC_ResetCategoryDiv(); //Reset Btn Text

		//Changing Button Text
		if ($('#btn_' + sectionCategory).html() == "Customize") {
			$('#btn_' + sectionCategory).html('Customizing');
			$('#btn_' + sectionCategory).css("background-color","#c42033");
		} else if ($('#btn_' + sectionCategory).html() == "Customizing") {
			$('#btn_' + sectionCategory).html('Customize');
			$('#btn_' + sectionCategory).css("background-color","#000000");
		} else if ($('#btn_' + sectionCategory).html() == "View") {
			$('#btn_' + sectionCategory).html('Viewing');
			$('#btn_' + sectionCategory).css("background-color","#c42033");
		} else if ($('#btn_' + sectionCategory).html() == "Viewing") {
			$('#btn_' + sectionCategory).html('View');
			$('#btn_' + sectionCategory).css("background-color","#000000");
		}
		
		$('#' + sectionCategory).slideDown(500);

		var samScrollTo = $("#" + sectionCategory).offset().top - 100;
		window.scrollTo(0, samScrollTo);

	}

}

/* Reset Button (Customize or View) wording */
function samUC_ResetCategoryDiv() {
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

/* When Option Clicked */
function samUC_Option_Clicked(sectionName) {

	//Option 1 - Tracking Click Event
	$("#" + sectionName + " #opv1UL a").click(function() {
		if ($(this).children("li").hasClass("selected")) {
			$(this).children("li").removeClass("selected");
			$("#" + sectionName + " #samUC_Option1_Selected").html("Select an Option");
			// $("#" + sectionName + " #samUC_Option1_Selected").css("color","#939393");
		} else {
			$("#" + sectionName + " #opv1UL a li").removeClass("selected");
			$(this).children("li").addClass("selected");
			$("#" + sectionName + " #samUC_Option1_Selected").html($(this).attr("title"));
			// $("#" + sectionName + " #samUC_Option1_Selected").css("color","green");
		}
		samUC_AllOptionsSelected(sectionName);

	});

	//Option 2 - Tracking Click Event
	$("#" + sectionName + " #opv2UL a").click(function() {
		if ($(this).children("li").hasClass("selected")) {
			$(this).children("li").removeClass("selected");
			$("#" + sectionName + " #samUC_Option2_Selected").html("Select an Option");
			// $("#" + sectionName + " #samUC_Option2_Selected").css("color","#939393");
		} else {
			$("#" + sectionName + " #opv2UL a li").removeClass("selected");
			$(this).children("li").addClass("selected");
			$("#" + sectionName + " #samUC_Option2_Selected").html($(this).attr("title"));
			// $("#" + sectionName + " #samUC_Option2_Selected").css("color","green");
		}
		samUC_AllOptionsSelected(sectionName);
	});

	//Option 3 - Tracking Click Event
	$("#" + sectionName + " #opv3UL a").click(function() {
		if ($(this).children("li").hasClass("selected")) {
			$(this).children("li").removeClass("selected");
			$("#" + sectionName + " #samUC_Option3_Selected").html("Select an Option");
			// $("#" + sectionName + " #samUC_Option3_Selected").css("color","#939393");
		} else {
			$("#" + sectionName + " #opv3UL a li").removeClass("selected");
			$(this).children("li").addClass("selected");
			$("#" + sectionName + " #samUC_Option3_Selected").html($(this).attr("title"));
			// $("#" + sectionName + " #samUC_Option3_Selected").css("color","green");
		}
		samUC_AllOptionsSelected(sectionName);
	});

}

/* Check If All Required Options Selected */
function samUC_AllOptionsSelected(sectionName) {

	//Collapse When Each Option Section is selected
	if ($("#" + sectionName + " #opv1UL a li.selected").length > 0)  {
		$("#" + sectionName + " .uc_Option_Toggle:eq(0)").addClass("uc_Option_Toggle_Plus");
	}
	if ($("#" + sectionName + " #opv2UL a li.selected").length > 0)  {
		$("#" + sectionName + " .uc_Option_Toggle:eq(1)").addClass("uc_Option_Toggle_Plus");
	}
	if ($("#" + sectionName + " #opv3UL a li.selected").length > 0)  {
		$("#" + sectionName + " .uc_Option_Toggle:eq(2)").addClass("uc_Option_Toggle_Plus");
	}

	
	//If All Required Options Selected
	if (
		($("#" + sectionName + " #opv1UL a li.selected").length > 0) && 
		($("#" + sectionName + " #opv2UL a li.selected").length > 0) && 
		($("#" + sectionName + " #opv3UL a li.selected").length > 0)
	) {

		//Hide Product Option
		$("#" + sectionName + " .uc_pd_option .product__options--row").slideUp(500);
		$("#" + sectionName + " .uc_pd_option .uc_pd_option_step_title h3").addClass("uc_plus");

		//Show Product Option Summary
		$("#" + sectionName + " .uc_pd_option_summary").html(
			"<span>" + $("#" + sectionName + " .samUC_Option1_Label").html() + ": " + $("#" + sectionName + " #samUC_Option1_Selected").html() + "</span>"+
			"<span>" + $("#" + sectionName + " .samUC_Option2_Label").html() + ": " + $("#" + sectionName + " #samUC_Option2_Selected").html() + "</span>"+
			"<span>" + $("#" + sectionName + " .samUC_Option3_Label").html() + ": " + $("#" + sectionName + " #samUC_Option3_Selected").html() + "</span>"
		);
		$("#" + sectionName + " .uc_pd_option_summary").slideDown(500);

		//Show Customization Option
		$("#" + sectionName + " .uc_customized_option").removeClass('uc_customized_option_disabled');
		$("#" + sectionName + " .uc_customized_option .product__options--row").slideDown(500);
		$("#" + sectionName + " .uc_customized_option .uc_pd_option_step_title h3").addClass("uc_minus");

		//Show Stock Message
		$("#" + sectionName + " .product__stock-warning").show(0);

	} else {


		//Hide Product Option Summary
		$("#" + sectionName + " .uc_pd_option_summary").slideUp(500);

		//Hide Customization Option
		$("#" + sectionName + " .uc_customized_option .product__options--row").slideUp(500);
		$("#" + sectionName + " .uc_customized_option .uc_pd_option_step_title h3").removeClass("uc_minus");
		$("#" + sectionName + " .uc_customized_option").addClass("uc_customized_option_disabled");

		//Hide Stock Message
		$("#" + sectionName + " .product__stock-warning").hide(0);

		
	}


}

/* Toggle Plus/Minus Sign */
function samUC_OptionToggle(sectionName) {

	//Product Option
	$("#" + sectionName + " .uc_pd_option .uc_pd_option_step_title").click(function(){
		$("#" + sectionName + " .uc_pd_option .product__options--row").slideToggle(500);
		$("#" + sectionName + " .uc_pd_option .uc_pd_option_step_title h3").toggleClass("uc_plus");
	}); 


	//Customization
	$("#" + sectionName + " .uc_customized_option .uc_pd_option_step_title").click(function(){
		if ($("#" + sectionName + " .uc_customized_option").hasClass('uc_customized_option_disabled') != true) {
			$("#" + sectionName + " .uc_customized_option .product__options--row").slideToggle(500);
			$("#" + sectionName + " .uc_customized_option .uc_pd_option_step_title h3").toggleClass("uc_minus");
		}
	}); 
	

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

/* =============== INTERACTIONS =============== */