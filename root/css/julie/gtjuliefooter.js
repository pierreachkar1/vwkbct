$(document).ready(function() {
  displayDynamicCopyright();
});


function displayDynamicCopyright() {
  const date = new Date().getFullYear();

  if (document.getElementById('dynamic-date')) {
    document.querySelector('#dynamic-date').innerHTML = `\u00A9 Copyright ${date} US Patriot Tactical, All Rights Reserved.`;
  }

  if (document.getElementById('dynamic-date-mobile')) {
    document.querySelector('#dynamic-date-mobile').innerHTML = `\u00A9 Copyright ${date} US Patriot Tactical, All Rights Reserved.`;
  }
}


// Julie: Add/Remove name strip length options depending on last name character size
// function julieRemoveLetterSizeOption() {
//   const lastNameInput = document.querySelector('input[prompt="Enter Last Name"]');
//   const selectElement = document.querySelector('select[prompt="Letter Size (Use 1/2 inch if over 10 Characters)"]') || document.querySelector('select[prompt="Letter Size (Use 1/2 inch if over 11 Characters)"]');
  
//   if (!lastNameInput || !selectElement) return;

//   const lastName = lastNameInput.value;
  
//   const optionHalf = selectElement.querySelector('option[value="1/2 INCH"]');
//   const optionThreeQuarters = selectElement.querySelector('option[value="3/4 INCH"]');
  
//   const hideOption = (option) => { if (option) option.style.display = 'none'; };
//   const showOption = (option) => { if (option) option.style.display = ''; };
  
//   if (lastName.length > 10 || lastName.length > 11) {
//       selectElement.value = '1/2 INCH';
//       hideOption(optionThreeQuarters);
//       showOption(optionHalf);
//   } else {
//       selectElement.value = '3/4 INCH';
//       hideOption(optionHalf);
//       showOption(optionThreeQuarters);
//   }
// }

// Remove the letter size input display from the name strip customization
function removeLetterSizeInput() {
  const selectElement = document.querySelector('select[prompt*="Letter Size"]');
  const promptText = selectElement ? selectElement.getAttribute('prompt') : null;
  const match = promptText ? promptText.match(/over (\d+) Characters/) : null;
  const charCutoff = match ? match[1] : '';
  const name = selectElement ? selectElement.getAttribute('name') : null;

  if (selectElement) {
    const parentDiv = selectElement.closest('div');
    
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = name;
    hiddenInput.id = "letterSize" + (charCutoff ? `_${charCutoff}` : '');

    if (parentDiv && selectElement) {
      parentDiv.insertAdjacentElement('beforebegin', hiddenInput);
      parentDiv.remove();
    }
  }
}


