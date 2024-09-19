{
$(document).ready(async function() {

	const coatsProductList = await getProducts('CAROUSEL-UC-COATS', '', '', 'BESTSELL');
	console.log('COATS', coatsProductList);

	const hatsProductList = await getProducts('CAROUSEL-UC-HATS', '', '', 'BESTSELL');
	console.log('HATS', hatsProductList);

	const pantsProductList = await getProducts('CAROUSEL-UC-PANTS', '', '', 'BESTSELL');
	console.log('PANTS', pantsProductList);

	// Initialize sections
	initializeSection(coatsProductList, "uc_coats_section");
	initializeSection(pantsProductList, "uc_pants_section");
	initializeSection(hatsProductList, "uc_hats_section");

	// Generate QTY options
	generateQtyOptions("#SIQTY", 3, 100);
});

function initializeSection(productList, sectionID) {
		// Generate left section description
		generateLeftSectionDesc(sectionID);

		// Generate product card slider
		generateProdCardSlider(productList, sectionID);

		// Generate dropdown content for each product
		generateProductDropdown(productList, sectionID);
}



/* =============== GENERATE CONTENTS =============== */

/* Generate Left Section Description */
function generateLeftSectionDesc(sectionName) {
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
function generateProdCardSlider(arrProducts, sectionName) {

	$(`#${sectionName} .uc_product_section_card`).html('<div class="carousel">&nbsp;</div>');

	arrProducts.forEach(product => {
		const {productSKU, title, imageURL, brand, ratingURL} = product;

			$(`#${sectionName} .carousel`).append(`
					<div class="b5-active id=${productSKU}">
							<div class="card justify-content-between">
									<div class="d-flex flex-column gap-10 mb-10">
											<img src="${imageURL}" class="img-fluid">
											<h6 class="product__name text-truncate">${title}</h6>
											<div class="d-flex justify-content-between">
													<h6 class="product__company text-nowrap">${brand}</h6>
													<img src="${ratingURL}" class="img-fluid">
											</div>
									</div>
									<div>
											<button class="product__customize btn btn-primary fs-6 w-100" id="btn_${productSKU}" onclick="toggleCategoryDiv('${productSKU}')">Customize</button>
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
		infinite: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                speed: 500,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                speed: 500,
                arrows: false,
            }
        }
    ]
	});
}

function generateProductDropdown(productList, sectionID) {
	productList.forEach(product => {
		const {productSKU, title, imageURL, price, colorURL} = product;

		generateProductContainerDiv(productSKU, sectionID);

		generateMainImageAndDetails(productSKU, imageURL);
		generateProd_FeatureAndSpecs(productSKU);
		generateProdDetailsHeader(productSKU, title, price);
		generateProdDetailsOptions(productSKU, colorURL);
		generateProdDetailsFooter(productSKU);

		if (productSKU.includes('coat') || productSKU.includes('hat')) {
			generateProdDetailsCustomize(productSKU);
		}
		
		// Initialize click behaviors for product option elements
		initializeOptionClickHandlers(productSKU);
		initializeOptionToggle(productSKU);

		// Initialize expand select option
		initializeExpandSelectOption(productSKU);
	});
}

function generateProductContainerDiv(productSKU, sectionID) {
  const section = document.querySelector(`#${sectionID} .container`);
  
  if (!section) {
    return;
  }

	const productDiv = document.createElement('div');
	productDiv.className = 'row uc_pd_row';
	productDiv.style.display = 'none';
	productDiv.id = productSKU;

	productDiv.innerHTML = `
		<div class="col-md-4 uc_pd_div_left">
				<div class="uc_main_img"></div>
				<div class="uc_prodct_accordion"></div>
		</div>
		<div class="col-md-8 uc_pd_div_right">
				<div class="uc_pd_header"></div>
				<div class="uc_pd_option"></div>
				<div class="uc_pd_option_summary"></div>
				<div class="uc_customized_option"></div>
				<div class="uc_pd_footer"></div>
		</div>
	`;

	section.appendChild(productDiv);
}


/* Generate Main Image */
function generateMainImageAndDetails(productSKU, imageURL) {
	$(`#${productSKU} .uc_main_img`).html(`
			<img src="${imageURL}"></img>
	`);
}

/* Generate Product Features and Specs Section */
function generateProd_FeatureAndSpecs(sectionCategory) {

	$(`#${sectionCategory} .uc_prodct_accordion`).each(function() {
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
function generateProdDetailsHeader(sectionCategory, title, price) {

	$(`#${sectionCategory} .uc_pd_header`).html(`
			<span class="span_h2">${title}</span>
			<span class="span_h2">${price}</span>
	`);

}

/* Generate Product Options */
function generateProdDetailsOptions(productSKU, colorURL) {
	// const color = extractColorFromURL(colorURL).toUpperCase();

	// const colorsHTML = `<a title=${color}><li class="Bkg000000"><img src=${colorURL}></li></a>`
	// ${colorsHTML}

	$(`#${productSKU} .uc_pd_option`).html(`
			<div class="uc_pd_option_step_title"><h3 class="uc_minus">Step 1: Product Options</h3></div>
			<div class="product__options--row">
					<div class="product__options--row-label">
							<label class="form__label mr-1 samUC_Option1_Label">COLOR</label>
							<label class="form__label black" id="samUC_Option1_Selected">Select an Option</label>
					</div>
					<ul class="product__options--list choices product__options--color" id="opv1UL">




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
function generateProdDetailsFooter(sectionCategory) {

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
function generateProdDetailsCustomize(sectionCategory) {

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

function initializeOptionClickHandlers(productSKU) {
	//Option 1 - Tracking Click Event
	$(`#${productSKU} #opv1UL a`).click(function() {
		if ($(this).children("li").hasClass("selected")) {
				$(this).children("li").removeClass("selected");
				$(`#${productSKU} #samUC_Option1_Selected`).html("Select an Option");
				// $(`#${productSKU} #samUC_Option1_Selected`).css("color","#939393");
		} else {
				$(`#${productSKU} #opv1UL a li`).removeClass("selected");
				$(this).children("li").addClass("selected");
				$(`#${productSKU} #samUC_Option1_Selected`).html($(this).attr("title"));
				// $(`#${productSKU} #samUC_Option1_Selected`).css("color","green");
		}
		allOptionsSelected(productSKU);
	});

	//Option 2 - Tracking Click Event
	$(`#${productSKU} #opv2UL a`).click(function() {
			if ($(this).children("li").hasClass("selected")) {
					$(this).children("li").removeClass("selected");
					$(`#${productSKU} #samUC_Option2_Selected`).html("Select an Option");
					// $(`#${productSKU} #samUC_Option2_Selected`).css("color","#939393");
			} else {
					$(`#${productSKU} #opv2UL a li`).removeClass("selected");
					$(this).children("li").addClass("selected");
					$(`#${productSKU} #samUC_Option2_Selected`).html($(this).attr("title"));
					// $(`#${productSKU} #samUC_Option2_Selected`).css("color","green");
			}
			allOptionsSelected(productSKU);
	});

	//Option 3 - Tracking Click Event
	$(`#${productSKU} #opv3UL a`).click(function() {
			if ($(this).children("li").hasClass("selected")) {
					$(this).children("li").removeClass("selected");
					$(`#${productSKU} #samUC_Option3_Selected`).html("Select an Option");
					// $(`#${productSKU} #samUC_Option3_Selected`).css("color","#939393");
			} else {
					$(`#${productSKU} #opv3UL a li`).removeClass("selected");
					$(this).children("li").addClass("selected");
					$(`#${productSKU} #samUC_Option3_Selected`).html($(this).attr("title"));
					// $(`#${productSKU} #samUC_Option3_Selected`).css("color","green");
			}
			allOptionsSelected(productSKU);
	});
}

function initializeExpandSelectOption(productSKU) {
	$(`${productSKU} select.uc_sel_skillbadge`).change(function() {
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
						$(`${productSKU} select.uc_sel_skillbadge_position_${pos}`).show(500);
				} else {
						$(`${productSKU} select.uc_sel_skillbadge_position_${pos}`).hide(500);
				}
		});
});
}

function initializeOptionToggle(productSKU) {
		optionToggle(productSKU);
}


/* =============== INTERACTIONS =============== */

/* Customize button is clicked */
function toggleCategoryDiv(sectionCategory) {
	const sectionId = `#${sectionCategory}`;
	const buttonId = `#btn_${sectionCategory}`;
	const buttonHtml = $(buttonId).html();

	if (buttonHtml === "Customizing") {
			$(sectionId).slideUp(500);
			$(buttonId).html('Customize').css("background-color", "#000000");
	} else {
			$('.uc_pd_row').slideUp(0); // Reset Div
			resetCategoryDiv(); // Reset Btn Text

			// Changing New Button
			switch (buttonHtml) {
					case "Customize":
							$(buttonId).html('Customizing').css("background-color", "#c42033");
							break;
					case "Customizing":
							$(buttonId).html('Customize').css("background-color", "#000000");
							break;
			}

			$(sectionId).slideDown(500);

			const samScrollTo = $(sectionId).offset().top - 100;
			window.scrollTo(0, samScrollTo);
	}
}

/* Reset Button (Customize) wording */
function resetCategoryDiv() {
	const buttons = document.querySelectorAll('button[id*="btn_"]');
	buttons.forEach(button => {
			if (button.innerHTML === "Customizing") {
					button.innerHTML = "Customize";
					button.style.backgroundColor = "#000000";
			}
	});
}

/* Check If All Required Options Selected */
function allOptionsSelected(sectionName) {

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
function optionToggle(sectionName) {

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
// function expandSelectOption(parentDiv) {
// 	$(`${parentDiv} select.uc_sel_skillbadge`).change(function() {
// 			const selectedOption = $(this).children("option:selected").val();
// 			const positions = [1, 2, 3, 4, 5];
// 			const showPositions = [];

// 			switch (selectedOption) {
// 					case "1":
// 							showPositions.push(1);
// 							break;
// 					case "2":
// 							showPositions.push(1, 2);
// 							break;
// 					case "3_standard":
// 					case "3_stacked":
// 							showPositions.push(1, 2, 3);
// 							break;
// 					case "4_grid":
// 					case "4_stacked":
// 							showPositions.push(1, 2, 3, 4);
// 							break;
// 					default:
// 							showPositions.push(1, 2, 3, 4, 5);
// 							break;
// 			}

// 			positions.forEach(pos => {
// 					if (showPositions.includes(pos)) {
// 							$(`${parentDiv} select.uc_sel_skillbadge_position_${pos}`).show(500);
// 					} else {
// 							$(`${parentDiv} select.uc_sel_skillbadge_position_${pos}`).hide(500);
// 					}
// 			});
// 	});
// }

function extractColor(htmlString) {
  const regexDataOriginal = /data-original="([^"]+)"/;
	const regexStyle = /style="([^"]+)"/;

  const match = htmlString.match(regexDataOriginal || regexStyle);
  return match ? match[1] : null;
}

function extractColorFromURL(url) {
  const colorRegex = /\/colors\/([^\/]+)\.png/i;
  const match = url.match(colorRegex);
  return match ? match[1] : null;
}

async function getProducts(keyword, categoryPage, productNumber, productSort) {
  const params = new URLSearchParams({
    SISRCH: keyword,
    SIWTNO: categoryPage,
    SIIPPG: productNumber,
    SISORT: productSort,
    SIAJAXMODE: 'Y',
    SIRFNO: 1,
    SIAJAXACTN: 'FILTER'
  });

  try {
    const response = await fetch("/propper-army-ocp-hot-weather-uniform-coat-ihwcu-uniform-builder", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    const data = await response.text();
		console.log(data);

    return parseData(data);
  } catch (error) {}
}

function parseData(data) {
  const productDetails = [];

  const productSKUs = data.match(/<span class="samSRCHResult_Style">(.*)/g) || [];
  const titles = data.match(/<span class="samSRCHResult_Title">(.*)/g) || [];
  const images = data.match(/<span class="samSRCHResult_Image">(.*)/g) || [];
  const ratings = data.match(/<span class="samSRCHResult_Ratings">(.*)/g) || [];
  const brands = data.match(/<span class="samSRCHResult_Brand">(.*)/g) || [];
  const prices = data.match(/<span class="samSRCHResult_Price">(.*)/g) || [];
  const categoryPageURLs = data.match(/<span class="samSRCHResult_Href">(.*)/g) || [];
	const colors = data.match(/<div class="colorPalette">(.*)/g) || [];

  for (let i = 0; i < productSKUs.length; i++) {
    const productSKU = productSKUs[i].substring(34, productSKUs[i].length - 7);
    const title = titles[i].substring(34, titles[i].length - 7);
    const imageURL = images[i].substring(34, images[i].length - 7);
    const brand = (brands[i].match(/<a [^>]*>([^<]+)<\/a>/) || [])[1] || '';
    const ratingURL = (ratings[i].match(/src="([^"]+)"/) || [])[1] || '';
		const price = (prices[i].match(/<span class="samSRCHResult_Price">.*?<b>([^<]+)<\/b>/) || [])[1] || '';
    const categoryPageURL = (categoryPageURLs[i].substring(62, categoryPageURLs[i].length - 7));
		const colorURL = extractColor(colors[i]);
		

    productDetails.push({
			productSKU: productSKU,
			title: title,
			imageURL: imageURL,
			brand: brand,
			price: price,
			ratingURL: ratingURL,
			categoryPageURL: categoryPageURL,
			colorURL: colorURL
		});
  }

  return productDetails;
}


function addToCart() {
  alert('Need to write function code');
}
}