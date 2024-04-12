const squareContainer = document.querySelector('#squares');
const numberOfSquares = 16;

//while loop setup, initialzi var at 0

let i = 0;

let square1, square2;
let clickCount = 0;
let score = 0;

 document.querySelector('#score').style.visibility = 'hidden';
const playAgainBtn = document.querySelector('button');
playAgainBtn.style.visibility = 'hidden';
playAgainBtn.addEventListener('click', playAgain);
//array contaning colors

let colors = [
    '#EEAEAD',
    '#EEAEAD',
    '#EF3A5D',
    '#EF3A5D',
    '#71C1E8',
    '#71C1E8',
    '#C1FF72',
    '#C1FF72',
    '#FF914D',
    '#FF914D',
    '#5C7C80',
    '#5C7C80',
    '#5E17EB',
    '#5E17EB',
    '#00BF63',
    '#00BF63'
    

]



function selectColor(){
    //0-15
    //function to select random color and then remove it
    //randomize choosing of colors in the array, using math.floor to round off
    const random = Math.floor(Math.random() * colors.length);
    //goes into array to select random color
    const selected = colors[random];
    //use spice to remove selected color from the array, using 1 to remove single value
    colors.splice(random, 1);
    return selected;
}

//loop testing that when i less 16, create square
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
    
   // console.log(square1, square2);
    }
}
function checkMatch(){
    let match = square1.getAttribute("data-color") === square2.getAttribute("data-color");
if (!match){
    square1.classList.add("shake");
       square2.classList.add("shake");
    setTimeout(function() {
        noMatch();
    }, 500);
}else {
    isMatch();
    checkGameEnded();
}
}

function noMatch(){
    square1.style.background = '';
    square2.style.background = '';
    square1.classList.remove('shake');
      square2.classList.remove('shake');
    square1 = '';
    square2 = '';
    clickCount = 0;
   // console.log('no match');
}
function isMatch() {
    score ++;
    document.querySelector('#score').innerHTML = score;
    document.querySelector('#score').style.visibility = 'visible'
      square1.classList.add("pop");
        square2.classList.add("pop");
    square1.style.border = 'none';
      square2.style.border = 'none';
      square1.removeEventListener('click', squareClicked);
      square2.removeEventListener('click', squareClicked);
      clickCount = 0;
   //   console.log('is match');
}

//checking if game is ended by  testing if 8 square pairs are matched
function checkGameEnded(){
    const target = numberOfSquares / 2;
    const gameOver = score === target ? true : false;
    if(gameOver){
        playAgainBtn.style.visibility = "visible";
    }
}

function playAgain(){
    window.location.reload();
}