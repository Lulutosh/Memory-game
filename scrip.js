const squareContainer = document.querySelector('#squares');
const numberOfSquares = 16;

//while loop setup, initialzi var at 0

let i = 0;

let square1, square2;
let clickCount = 0;
let score = 0;

document.querySelector("#score").style.visibitly = "hidden";

//array contaning colors
let colors = [
    '#33ff33',
    '#33ff33',
    '#ff944d',
    '#ff944d', 
    '#00d0f7',
    '#00d0f7',
    '#00511f',
    '#00511f',
    '#ff4dff',
    '#ff4dff',
    '#ff1a1a',
    '#ff1a1a',
    '#dddddd',
    '#dddddd', 
    '#000992',
    '#000992'

]

function selectColor(){
    //0-15
    //function to select random color and then remove it
    //randomize choosing of colors in the array, using math.floor to round off
    const random = Math.floor(Math.random() * colors.length);
    //goes into array to select random color
    const selected = colors[random];
    //use spice to remove selected color, using 1 to remove single value
    colors.splice(random, 1);
    return selected;
}

while (i < numberOfSquares) {
    const square = document.createElement('li');
 
    const color = selectColor();
   // square.style.background = color;
   square.setAttribute("data-color", color);
    squareContainer.appendChild(square);
    i++;
}

const squares = document.querySelectorAll('li');
for(const square of squares){
    square.addEventListener('click', squareClicked);

    function squareClicked(){
        if (square1 == this) return;
        //first click = square 1 var and square 2 is second
        clickCount++;
if (clickCount > 2) return;
    clickCount === 1 ? (square1 = this) : (square2 = this);
        if (clickCount === 1){
            square1.style.background = square1.getAttribute("data-color");
        }else {
             square2.style.background = square2.getAttribute("data-color");
             checkMatch();
            }
    
    console.log(square1, square2);
    }
}
function checkMatch(){
    let match = square1.getAttribute("data-color") === square2.getAttribute("data-color");
if (!match){
    setTimeout(function() {
        noMatch();
    }, 500);
}else {
    isMatch()
}
}

function noMatch(){
    square1.style.background = '';
    square2.style.background = '';
    square1 = '';
    square2 = '';
    clickCount = 0;
    console.log('no match');
}
function isMatch() {
      square1.style.border = 'none';
      square2.style.border = 'none';
      square1.removeEventListener('click', squareClicked);
      square2.removeEventListener('click', squareClicked);
      clickCount = 0;
      console.log('is match');
}