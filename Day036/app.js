let productNameInputElement = document.getElementById('product-name');
let remainingChars = document.getElementById('remaining-chars');

// get the value of the max length from the Input tag
let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingChars.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);






