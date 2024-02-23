// document.body.children[1].children[0].href = 'https://google.com';

let h1 = document.querySelector('h1');
console.dir(h1);

// create an element
let newElement = document.createElement('a');

// set the element contentsß
newElement.href = "https://google.com";
newElement.textContent = "This leads elsewhere";

// get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');

// insert the new element into the parent element content
firstParagraph.append(newElement);

let paragraphElement = document.querySelector('p');
function changeParagraphText() {
    if (paragraphElement.textContent == 'Clicked') {
        paragraphElement.textContent = 'UnClicked';
    } else {
        paragraphElement.textContent = 'Clicked';
    }
}
paragraphElement.addEventListener('click', changeParagraphText);





