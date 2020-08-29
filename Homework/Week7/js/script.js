// create a two player Tic-Tac-Toe game. The users should be able to click to place
// their X or O and if they win the program should mention their win in the DOM.
//


// this is the winning combinations.
// class Tictactoeobject {
//   constructor(sqaures, clear) {
//     this.sqaures =sqaures;
//     this.clear =sqaures;
//
//
//   }
//   function squares=
// }
//
//
// function cell{
//
// }
// create a two player Tic-Tac-Toe game. The users should be able to click to place
// their X or O and if they win the program should mention their win in the DOM.
//
//A game of Tic Tac Toe that will be played between two players.
//One of the players will choose 'O' and the other 'X' to mark their cells.
//The game ends when one of the players has one whole row/ column/ diagonal filled with their character ('O' or 'X').
//If no one wins, there will be an alert that says DRAW!
//If someone wins it'll alert Winner!
// this is the winning combinations.

// objectn winCombo


// var board = document.getElementById("board");
// var restartButton = document.getElementById("restartButton");
// call back function
// restartButton.addEventListener("click", function startTheGame() {
//
// });
// startTheGame();
// function startTheGame(){
//
// }
//defining an object tictatoe
const TicTacToe = {
turn: 0,
nextTurn: ()=>{TicTacToe.turn++},
}

TicTacToe.nextTurn()
console.log(TicTacToe.turn)
const cells = [...document.getElementsByClassName('cell')]
const disappear = (e) => {
  e.target.removeEventListener('click', disappear)
  if(TicTacToe.turn%2===0){
  e.target.classList.add("x")
}
  else {
  e.target.classList.add('circle')
}
  TicTacToe.nextTurn()
}
cells.forEach(x=>x.addEventListener('click', disappear))
  //setting the property value to zero
  //implemting nextTurn each time user click on the dom
//
