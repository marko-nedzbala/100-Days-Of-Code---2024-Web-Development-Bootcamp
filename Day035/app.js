let paragraphElement = document.querySelector('p');
function changeParagraphText() {
    if (paragraphElement.textContent == 'Clicked') {
        paragraphElement.textContent = 'UnClicked';
    } else {
        paragraphElement.textContent = 'Clicked';
    }
}
paragraphElement.addEventListener('click', changeParagraphText);

// get user input
let inputElement = document.querySelector('input');
function retrieveUserInput(event) {
    // let eneteredText = inputElement.value;
    // let eneteredText = event.target.value;
    let eneteredText = event.data;
    console.log(eneteredText);
    // console.log(event);
}
inputElement.addEventListener('input', retrieveUserInput);