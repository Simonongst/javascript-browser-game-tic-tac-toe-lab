/*-------------------------------- Constants --------------------------------*/
const board = ['', '', '', '', '', '', '', '', '',];


/*---------------------------- Variables (state) ----------------------------*/
let turn = 'X';
let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector('.sqr');
const messageEl = document.querySelector('#message');

console.log(squareEls);
console.log(messageEl);


/*-------------------------------- Functions --------------------------------*/
const init = () => {
    
    render();
};

init()

const render = () => {

};

const updateBoard = (cell, idx) => {
  board.forEach((cell, idx) => {
    if (cell === 'X') {
      squareEls[idx].textContent = 'X';
    } else if (cell === 'O') {
      squareEls[idx].textContent = 'O';
    } else {
      squareEls[idx].textContent = '';
    }
  });
};


/*----------------------------- Event Listeners -----------------------------*/



