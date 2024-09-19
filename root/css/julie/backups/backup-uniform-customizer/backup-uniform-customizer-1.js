
const samArrProdList_Coat = [
	['Air Force Custom ECWCS Gen III Level 3 Fleece Jacket', '/photos/styles/JA3039_ECWCS_USAF_1.jpg', 'US Patriot', '/images/icons/stars-four-half.png', 'Customize', 'uc_coat_1'],
	['Propper Gen 2 OCP ACU Coat', '/css/sam/homepage/images/SH4600.jpg', 'US Patriot', '/images/icons/stars-four-half.png', 'Customize', 'uc_coat_2']
];

const samArrProdList_Pants = [
		['Tru-Spec Army Hot Weather Uniform Pants IHWCU', '/photos/styles/USPT_TR2736_1500_1.jpg', 'US Patriot', '/images/icons/stars-four-half.png', 'View', 'uc_pants_1'],
		['Propper Men\'s OCP Uniform', '/photos/styles/USPT_TS1763_1500_1.jpg', 'US Patriot', '/images/icons/stars-four-half.png', 'View', 'uc_pants_2']
];

const samArrProdList_Hat = [
		['Tru-Spec Air Force OCP W2 Boonie Uniform Builder', '/photos/styles/HW2829_OCP_1500_1.jpg', 'US Patriot', '/images/icons/stars-four-half.png', 'Customize', 'uc_hat_1'],
		['Air Force OCP Tactical Cap', '/photos/styles/USPT_HW4204_1500_1.jpg', 'US Patriot', '/images/icons/stars-four-half.png', 'Customize', 'uc_hat_2']
];

$(document).ready(function() {
		// Initialize sections
		initializeSection("uc_coat_section", samArrProdList_Coat);
		initializeSection("uc_pants_section", samArrProdList_Pants);
		initializeSection("uc_hat_section", samArrProdList_Hat);

		// Generate QTY options
		generateQtyOptions("#SIQTY", 3, 100);

		// Initialize option click behaviors
		initializeOptionClicks(['uc_coat_1', 'uc_coat_2', 'uc_pants_1', 'uc_pants_2', 'uc_hat_1', 'uc_hat_2']);

		// Initialize expand select option
		initializeExpandSelectOption(['#uc_coat_1', '#uc_coat_2', '#uc_hat_1', '#uc_hat_2']);

		// Initialize option toggle
		initializeOptionToggle(['uc_coat_1', 'uc_coat_2', 'uc_pants_1', 'uc_pants_2', 'uc_hat_1', 'uc_hat_2']);
});

function initializeSection(sectionId, productList) {
		// Generate left section description
		samUC_GenerateLeftSectionDesc(sectionId);

		// Generate product card slider
		samUC_GenerateProdCardSlider(productList, sectionId);

		// Generate content for each product
		productList.forEach(product => {
				const productId = product[5];
				samUC_GenerateMainImage_N_Details(productId, "/images/uniform-customizer/demo.png");
				samUC_GenerateProd_Feature_n_Specs(productId);
				samUC_GenerateProd_Details_Header(productId, product[0], product[4]);
				samUC_GenerateProd_Details_Options(productId);
				samUC_GenerateProd_Details_Footer(productId);
				samUC_GenerateProd_Details_Customize(productId);
		});
}



/* =============== GENERATE CONTENTS =============== */

/* Generate Left Section Description */
function samUC_GenerateLeftSectionDesc(sectionName) {
	const htmlContent = `
			<div>
					<p>
							Discover durable and rugged workwear designed to withstand the demands of the construction industry. From reinforced clothing to protective gear, our construction workwear ensures both safety and comfort on the job site, so you can focus on getting the job done right.
					</p>
					<span class="span_h4">Need To Know, Hot Weather OCP Coat</span>
					<ul>
							<li>LIGHTER WEIGHT</li>         
							<li>5.8 OZ FABRIC</li>         
							<li>NO CHEST POCKETS</li>            
							<li>REINFORCED ELBOWS</li>           
							<li>CUSTOMIZED TO ORDER NAME TAPES, RANK, BADGES, PATCHES</li>
					</ul>
			</div>
	`;

	$(`#${sectionName} .uc_product_section_bg`).html(htmlContent);
}


/* Generate Product Card Slick Slider */
function samUC_GenerateProdCardSlider(arrProducts, sectionName) {

	$(`#${sectionName} .uc_product_section_card`).html('<div class="carousel">&nbsp;</div>');

	arrProducts.forEach(product => {
			$(`#${sectionName} .carousel`).append(`
					<div class="b5-active">
							<div class="card justify-content-between">
									<div class="d-flex flex-column gap-10 mb-10">
											<img src="${product[1]}" class="img-fluid">
											<h6 class="product__name text-truncate">${product[0]}</h6>
											<div class="d-flex justify-content-between">
													<h6 class="product__company text-nowrap">${product[2]}</h6>
													<img src="${product[3]}" class="img-fluid">
											</div>
									</div>
									<div>
											<button class="product__customize btn btn-primary fs-6 w-100" id="btn_${product[5]}" onclick="samUC_ToggleCategoryDiv('${product[5]}')">${product[4]}</button>
									</div>
							</div>
					</div>
			`);
	});

	$(`#${sectionName} .carousel`).slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			variableWidth: false,
			centerPadding: '0',
			dots: false,
			arrows: true,
			responsive: [
					{
							breakpoint: 992,
							settings: {
									slidesToShow: 2,
									slidesToScroll: 1,
									speed: 500,
									arrows: false,
							}
					}
			]
	});
}

/* Generate Main Image */
function samUC_GenerateMainImage_N_Details(sectionCategory, imgURL) {
	$(`#${sectionCategory} .uc_main_img`).html(`
			<img src="${imgURL}"></img>
	`);
}

/* Generate Product Features and Specs Section */
function samUC_GenerateProd_Feature_n_Specs(sectionCategory) {

	$(`#${sectionCategory} .uc_prodct_accordion`).each(function(index) {
			$(this).html(`
					<div aria-multiselectable="true" class="panel-group" id="features_accordion_${sectionCategory}" role="tablist">
							<div class="panel panel-default">
									<div class="panel-heading" id="features_heading_${sectionCategory}" role="tab">
											<a aria-controls="features_collapse_${sectionCategory}" aria-expanded="true" data-parent="#features_accordion_${sectionCategory}" data-toggle="collapse" href="#features_collapse_${sectionCategory}" role="button">
													<h4 class="panel-title">Features</h4>
											</a>
									</div>
									<div aria-labelledby="features_heading_${sectionCategory}" class="panel-collapse collapse in" id="features_collapse_${sectionCategory}" role="tabpanel">
											<div class="panel-body">
													<ul>
															<li>Bullet Point 1</li>
															<li>Bullet Point 2</li>
															<li>Bullet Point 3</li>
															<li>Bullet Point 4</li>
															<li>Bullet Point 5</li>
													</ul>
											</div>
									</div>
							</div>
							<div class="panel panel-default">
									<div class="panel-heading" id="specs_heading_${sectionCategory}" role="tab">
											<a aria-controls="specs_collapse_${sectionCategory}" aria-expanded="false" data-parent="#accordion_${sectionCategory}" data-toggle="collapse" href="#specs_collapse_${sectionCategory}" role="button">
													<h4 class="panel-title">Specs</h4>
											</a>
									</div>
									<div aria-labelledby="specs_heading_${sectionCategory}" class="panel-collapse collapse" id="specs_collapse_${sectionCategory}" role="tabpanel">
											<div class="panel-body">
													<ul>
															<li>Bullet Point 1</li>
															<li>Bullet Point 2</li>
															<li>Bullet Point 3</li>
															<li>Bullet Point 4</li>
															<li>Bullet Point 5</li>
													</ul>
											</div>
									</div>
							</div>
					</div>
			`);
	});
}

/* Generate Product Header: Title and Price */
function samUC_GenerateProd_Details_Header(sectionCategory, title, price) {

	$(`#${sectionCategory} .uc_pd_header`).html(`
			<span class="span_h2">${title}</span>
			<span class="span_h2">${price}</span>
	`);

}

/* Generate Product Options */
function samUC_GenerateProd_Details_Options(sectionCategory) {

	$(`#${sectionCategory} .uc_pd_option`).html(`
			<div class="uc_pd_option_step_title"><h3 class="uc_minus">Step 1: Product Options</h3></div>
			<div class="product__options--row">
					<div class="product__options--row-label">
							<label class="form__label mr-1 samUC_Option1_Label">COLOR</label>
							<label class="form__label black" id="samUC_Option1_Selected">Select an Option</label>
					</div>
					<ul class="product__options--list choices product__options--color" id="opv1UL">
							<a title="BLACK"><li class="Bkg000000"><img src="/photos/colors/BLK.png"></li></a>
							<a title="DARK NAVY"><li class="BkgTRANSPARENT"><img src="/photos/colors/NAV.png"></li></a>
							<a title="STORM GRAY"><li class="BkgTRANSPARENT"><img src="/photos/colors/STRM.png"></li></a>
							<a title="TDU GREEN"><li class="BkgTRANSPARENT"><img src="/photos/colors/TDGN.png"></li></a>
					</ul>
			</div>
			<div class="product__options--row">
					<div class="product__options--row-label">
							<label class="form__label mr-1 samUC_Option2_Label">Size</label>
							<label class="form__label mr-1"></label>
							<label class="form__label black" id="samUC_Option2_Selected">Select an Option</label>
					</div>
					<ul class="product__options--list choices product__options--boxes" id="opv2UL">
							<a title="4"><li>4</li></a>
							<a title="4.5"><li>4.5</li></a>
							<a title="5"><li>5</li></a>
							<a title="5.5"><li>5.5</li></a>
							<a title="6"><li>6</li></a>
							<a title="6.5"><li>6.5</li></a>
							<a title="7"><li>7</li></a>
							<a title="7.5"><li>7.5</li></a>
							<a title="8"><li>8</li></a>
							<a title="8.5"><li>8.5</li></a>
							<a title="9"><li>9</li></a>
							<a title="9.5"><li>9.5</li></a>
							<a title="10"><li>10</li></a>
							<a title="10.5"><li>10.5</li></a>
							<a title="11"><li>11</li></a>
							<a title="11.5"><li>11.5</li></a>
							<a title="12"><li>12</li></a>
							<a title="12.5"><li>12.5</li></a>
							<a title="13"><li>13</li></a>
							<a title="13.5"><li>13.5</li></a>
							<a title="14"><li>14</li></a>
							<a title="14.5"><li>14.5</li></a>
							<a title="15"><li>15</li></a>
					</ul>
			</div>
			<div class="product__options--row">
					<div class="product__options--row-label">
							<label class="form__label mr-1 samUC_Option3_Label">Length</label>
							<label class="form__label black" id="samUC_Option3_Selected">Select an Option</label>
					</div>
					<ul class="product__options--list choices product__options--boxes" id="opv3UL">
							<a title="Short"><li>Short</li></a>
							<a title="Regular"><li>Regular</li></a>
							<a title="Long"><li>Long</li></a>
							<a title="Extra Long"><li>Extra Long</li></a>
					</ul>
			</div>
	`);
}

/* Generate Product Footer: Stock Message, QTY, and Add To Cart Button */
function samUC_GenerateProd_Details_Footer(sectionCategory) {

	$(`#${sectionCategory} .uc_pd_footer`).html(`
			<span class="product__stock-warning">
					<span style="color:green">
							In Stock! Usually Ships Within 24 Hours
					</span>
			</span>
			<div class="row">
					<div class="col-sm-12 product__qty">
							<select name="SIQTY" title="Quantity" id="SIQTY" class="form__select">
									<option value="1" selected="">1</option>
									<option value="2">2</option>
							</select>
							<div id="samUC_AddToCart">
									<a onclick="addToCartItem()" class="btn btn_lg btn-block btn--orange vwo-addtocart">Add To Cart</a>
							</div>
					</div>
			</div>
	`);

}

/* Generate Product Customize */
function samUC_GenerateProd_Details_Customize(sectionCategory) {

	$(`#${sectionCategory} .uc_customized_option`).html(`
			<div class="uc_pd_option_step_title"><h3 class="uc_plus">Step 2: Customization</h3></div>
			<div class="product__options--row">
					<div class="row uc_customized_row">
							<div class="col-md-6 uc_co_col">
									<span><img src="https://www.uspatriottactical.com/photos/styles/Name-Branch_Tapes-64x64.jpg"></span>
									<select>
											<option value="" disabled="" selected="">Select Branch</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
							</div>
							<div class="col-md-6 uc_co_col">
									<input type="text" placeholder="NAME">
									<div class="review_correct">
											<input type="checkbox" name="review_correct" id="review_correct">
											<label class="lbl_checkbox" for="review_correct">Reviewed & Correct</label>
									</div>
							</div>
					</div>
					<div class="row uc_customized_row">
							<div class="col-md-6 uc_co_col">
									<select style="width: 100%" class="uc_sel_skillbadge">
											<option value="" disabled="" selected="">Skill Badge Qty & Layout</option>
											<option value="1">1 Badge</option>
											<option value="2">2 Badge</option>
											<option value="3_standard">3 Badge Standard</option>
											<option value="3_stacked">3 Badge Stacked</option>
											<option value="4_grid">4 Badge Grid</option>
											<option value="4_stacked">4 Badge Stacked</option>
											<option value="5">5 Badge</option>
									</select>
									<select class="uc_sel_skillbadge_hidden uc_sel_skillbadge_position_1" style="width: 100%; display: none">
											<option value="" disabled="" selected="">Skill Badge Position 1</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
									<select class="uc_sel_skillbadge_hidden uc_sel_skillbadge_position_2" style="width: 100%; display: none">
											<option value="" disabled="" selected="">Skill Badge Position 2</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
									<select class="uc_sel_skillbadge_hidden uc_sel_skillbadge_position_3" style="width: 100%; display: none">
											<option value="" disabled="" selected="">Skill Badge Position 3</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
									<select class="uc_sel_skillbadge_hidden uc_sel_skillbadge_position_4" style="width: 100%; display: none">
											<option value="" disabled="" selected="">Skill Badge Position 4</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
									<select class="uc_sel_skillbadge_hidden uc_sel_skillbadge_position_5" style="width: 100%; display: none">
											<option value="" disabled="" selected="">Skill Badge Position 5</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
							</div>
							<div class="col-md-6 uc_co_col">
									<span><img src="/photos/colors/OCP.PNG"></span>
									<select>
											<option value="" disabled="" selected="">Select Rank</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
							</div>
					</div>
					<div class="row uc_customized_row">
							<div class="col-md-6 uc_co_col">
									<span><img src="/photos/colors/OCP.PNG"></span>
									<select>
											<option value="" disabled="" selected="">Tabs</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
							</div>
							<div class="col-md-6 uc_co_col">
									<span><img src="/photos/colors/OCP.PNG"></span>
									<select>
											<option value="" disabled="" selected="">Unit Badge</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
							</div>
					</div>
					<div class="row uc_customized_row">
							<div class="col-md-6 uc_co_col">
									<span><img src="/photos/colors/OCP.PNG"></span>
									<select>
											<option value="" disabled="" selected="">Select Right ID Badge</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
							</div>
							<div class="col-md-6 uc_co_col">
									<span><img src="/photos/colors/OCP.PNG"></span>
									<select>
											<option value="" disabled="" selected="">Select Left ID Badge</option>
											<option>Option 1</option>
											<option>Option 2</option>
											<option>Option 3</option>
											<option>Option 4</option>
											<option>Option 5</option>
									</select>
							</div>
					</div>
			</div>
	`);

	$(`#${sectionCategory} .uc_customized_option`).addClass('uc_customized_option_disabled');
}

/* =============== INITIALIZE UNIFORM CUSTOMIZER =============== */
function generateQtyOptions(selector, start, end) {
	for (let i = start; i < end; i++) {
			$(selector).append(`<option value="${i}">${i}</option>`);
	}
}

function initializeOptionClicks(productIds) {
	productIds.forEach(productId => {
			samUC_Option_Clicked(productId);
	});
}

function initializeExpandSelectOption(selectors) {
	selectors.forEach(selector => {
			samUC_Expand_Select_Option(selector);
	});
}

function initializeOptionToggle(productIds) {
	productIds.forEach(productId => {
			samUC_OptionToggle(productId);
	});
}


/* =============== INTERACTIONS =============== */

/* Customize/View button is clicked */
function samUC_ToggleCategoryDiv(sectionCategory) {
	const sectionId = `#${sectionCategory}`;
	const buttonId = `#btn_${sectionCategory}`;
	const buttonHtml = $(buttonId).html();

	if (buttonHtml === "Customizing") {
			$(sectionId).slideUp(500);
			$(buttonId).html('Customize').css("background-color", "#000000");
	} else if (buttonHtml === "Viewing") {
			$('.uc_pd_row').slideUp(500); // Reset Div
			$(buttonId).html('View').css("background-color", "#000000");
	} else {
			$('.uc_pd_row').slideUp(0); // Reset Div
			samUC_ResetCategoryDiv(); // Reset Btn Text

			// Changing New Button
			switch (buttonHtml) {
					case "Customize":
							$(buttonId).html('Customizing').css("background-color", "#c42033");
							break;
					case "Customizing":
							$(buttonId).html('Customize').css("background-color", "#000000");
							break;
					case "View":
							$(buttonId).html('Viewing').css("background-color", "#c42033");
							break;
					case "Viewing":
							$(buttonId).html('View').css("background-color", "#000000");
							break;
			}

			$(sectionId).slideDown(500);

			const samScrollTo = $(sectionId).offset().top - 100;
			window.scrollTo(0, samScrollTo);
	}
}

/* Reset Button (Customize or View) wording */
function samUC_ResetCategoryDiv() {
	const buttons = document.querySelectorAll('button[id*="btn_"]');
	buttons.forEach(button => {
			if (button.innerHTML === "Customizing") {
					button.innerHTML = "Customize";
					button.style.backgroundColor = "#000000";
			} else if (button.innerHTML === "Viewing") {
					button.innerHTML = "View";
					button.style.backgroundColor = "#000000";
			}
	});
}

/* When Option Clicked */
function samUC_Option_Clicked(sectionName) {

	//Option 1 - Tracking Click Event
	$(`#${sectionName} #opv1UL a`).click(function() {
			if ($(this).children("li").hasClass("selected")) {
					$(this).children("li").removeClass("selected");
					$(`#${sectionName} #samUC_Option1_Selected`).html("Select an Option");
					// $(`#${sectionName} #samUC_Option1_Selected`).css("color","#939393");
			} else {
					$(`#${sectionName} #opv1UL a li`).removeClass("selected");
					$(this).children("li").addClass("selected");
					$(`#${sectionName} #samUC_Option1_Selected`).html($(this).attr("title"));
					// $(`#${sectionName} #samUC_Option1_Selected`).css("color","green");
			}
			samUC_AllOptionsSelected(sectionName);
	});

	//Option 2 - Tracking Click Event
	$(`#${sectionName} #opv2UL a`).click(function() {
			if ($(this).children("li").hasClass("selected")) {
					$(this).children("li").removeClass("selected");
					$(`#${sectionName} #samUC_Option2_Selected`).html("Select an Option");
					// $(`#${sectionName} #samUC_Option2_Selected`).css("color","#939393");
			} else {
					$(`#${sectionName} #opv2UL a li`).removeClass("selected");
					$(this).children("li").addClass("selected");
					$(`#${sectionName} #samUC_Option2_Selected`).html($(this).attr("title"));
					// $(`#${sectionName} #samUC_Option2_Selected`).css("color","green");
			}
			samUC_AllOptionsSelected(sectionName);
	});

	//Option 3 - Tracking Click Event
	$(`#${sectionName} #opv3UL a`).click(function() {
			if ($(this).children("li").hasClass("selected")) {
					$(this).children("li").removeClass("selected");
					$(`#${sectionName} #samUC_Option3_Selected`).html("Select an Option");
					// $(`#${sectionName} #samUC_Option3_Selected`).css("color","#939393");
			} else {
					$(`#${sectionName} #opv3UL a li`).removeClass("selected");
					$(this).children("li").addClass("selected");
					$(`#${sectionName} #samUC_Option3_Selected`).html($(this).attr("title"));
					// $(`#${sectionName} #samUC_Option3_Selected`).css("color","green");
			}
			samUC_AllOptionsSelected(sectionName);
	});

}

/* Check If All Required Options Selected */
function samUC_AllOptionsSelected(sectionName) {

	// Collapse When Each Option Section is selected
	if ($(`#${sectionName} #opv1UL a li.selected`).length > 0) {
			$(`#${sectionName} .uc_Option_Toggle:eq(0)`).addClass("uc_Option_Toggle_Plus");
	}
	if ($(`#${sectionName} #opv2UL a li.selected`).length > 0) {
			$(`#${sectionName} .uc_Option_Toggle:eq(1)`).addClass("uc_Option_Toggle_Plus");
	}
	if ($(`#${sectionName} #opv3UL a li.selected`).length > 0) {
			$(`#${sectionName} .uc_Option_Toggle:eq(2)`).addClass("uc_Option_Toggle_Plus");
	}

	// If All Required Options Selected
	if (
			$(`#${sectionName} #opv1UL a li.selected`).length > 0 &&
			$(`#${sectionName} #opv2UL a li.selected`).length > 0 &&
			$(`#${sectionName} #opv3UL a li.selected`).length > 0
	) {

			// Hide Product Option
			$(`#${sectionName} .uc_pd_option .product__options--row`).slideUp(500);
			$(`#${sectionName} .uc_pd_option .uc_pd_option_step_title h3`).addClass("uc_plus");

			// Show Product Option Summary
			$(`#${sectionName} .uc_pd_option_summary`).html(`
					<span>${$(`#${sectionName} .samUC_Option1_Label`).html()}: ${$(`#${sectionName} #samUC_Option1_Selected`).html()}</span>
					<span>${$(`#${sectionName} .samUC_Option2_Label`).html()}: ${$(`#${sectionName} #samUC_Option2_Selected`).html()}</span>
					<span>${$(`#${sectionName} .samUC_Option3_Label`).html()}: ${$(`#${sectionName} #samUC_Option3_Selected`).html()}</span>
			`);
			$(`#${sectionName} .uc_pd_option_summary`).slideDown(500);

			// Show Customization Option
			$(`#${sectionName} .uc_customized_option`).removeClass('uc_customized_option_disabled');
			$(`#${sectionName} .uc_customized_option .product__options--row`).slideDown(500);
			$(`#${sectionName} .uc_customized_option .uc_pd_option_step_title h3`).addClass("uc_minus");

			// Show Stock Message
			$(`#${sectionName} .product__stock-warning`).show(0);

	} else {

			// Hide Product Option Summary
			$(`#${sectionName} .uc_pd_option_summary`).slideUp(500);

			// Hide Customization Option
			$(`#${sectionName} .uc_customized_option .product__options--row`).slideUp(500);
			$(`#${sectionName} .uc_customized_option .uc_pd_option_step_title h3`).removeClass("uc_minus");
			$(`#${sectionName} .uc_customized_option`).addClass("uc_customized_option_disabled");

			// Hide Stock Message
			$(`#${sectionName} .product__stock-warning`).hide(0);
	}
}

/* Toggle Plus/Minus Sign */
function samUC_OptionToggle(sectionName) {

	// Product Option
	$(`#${sectionName} .uc_pd_option .uc_pd_option_step_title`).click(function() {
			$(`#${sectionName} .uc_pd_option .product__options--row`).slideToggle(500);
			$(`#${sectionName} .uc_pd_option .uc_pd_option_step_title h3`).toggleClass("uc_plus");
	});

	// Customization
	$(`#${sectionName} .uc_customized_option .uc_pd_option_step_title`).click(function() {
			if (!$(`#${sectionName} .uc_customized_option`).hasClass('uc_customized_option_disabled')) {
					$(`#${sectionName} .uc_customized_option .product__options--row`).slideToggle(500);
					$(`#${sectionName} .uc_customized_option .uc_pd_option_step_title h3`).toggleClass("uc_minus");
			}
	});

}

/* Skill Badge select option changed */
function samUC_Expand_Select_Option(parentDiv) {
	$(`${parentDiv} select.uc_sel_skillbadge`).change(function() {
			const selectedOption = $(this).children("option:selected").val();
			const positions = [1, 2, 3, 4, 5];
			const showPositions = [];

			switch (selectedOption) {
					case "1":
							showPositions.push(1);
							break;
					case "2":
							showPositions.push(1, 2);
							break;
					case "3_standard":
					case "3_stacked":
							showPositions.push(1, 2, 3);
							break;
					case "4_grid":
					case "4_stacked":
							showPositions.push(1, 2, 3, 4);
							break;
					default:
							showPositions.push(1, 2, 3, 4, 5);
							break;
			}

			positions.forEach(pos => {
					if (showPositions.includes(pos)) {
							$(`${parentDiv} select.uc_sel_skillbadge_position_${pos}`).show(500);
					} else {
							$(`${parentDiv} select.uc_sel_skillbadge_position_${pos}`).hide(500);
					}
			});
	});
}

function addToCart() {
  alert('Need to write function code');
}