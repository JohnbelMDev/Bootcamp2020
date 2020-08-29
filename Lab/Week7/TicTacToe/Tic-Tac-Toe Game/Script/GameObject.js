// Group Project Collaborate with Shawn,Ibrahim,Carolin,Rahma




// create a two player Tic-Tac-Toe game. The users should be able to click to place
// their X or O and if they win the program should mention their win in the DOM.

//--------------Selector Variables------------------//
const button = document.getElementById('restartButton')
const cells = [...document.querySelectorAll('section')]
const title = document.getElementById('title')
const modeChanger = document.getElementById('modeChanger')
// declare game as an object with the properties
// board
// turn
// addClickEvents
// removeClickEvents
// addCompEvents
// removeCompEvents
// addCompEvents
// removeCompEvents
// nextTurn
// restart
// mode
// winState
const game = {
// properties of the game Object
board: ['','','','','','','','',''],
// properties of the game Object
turn: 0,
// properties of the game Object
addClickEvents: ()=>{
cells.forEach(x=>x.addEventListener('click', game.makeMoneyMove))
},
// properties of the game Objects
removeClickEvents: ()=>{
  cells.forEach(x=>x.removeEventListener('click', game.makeMoneyMove))
},
// properties of the game Object
addCompEvents: ()=>{
cells.forEach(x=>x.addEventListener('click', game.compMoneyMove))
},
// properties of the game Object
removeCompEvents: ()=>{
cells.forEach(x=>x.removeEventListener('click', game.compMoneyMove))
},
// properties of the game Object
nextTurn: ()=>{game.turn++},
// properties of the game Object
restart: ()=>{
  game.board=['','','','','','','','','']
  game.turn = 0
  cells.forEach(x=>x.classList='cell')
  if (game.mode===0){game.addClickEvents()}else{game.addCompEvents()}
  button.style.display='none'
  title.innerHTML = 'Tic-Tac-Toe'
  delete game.win
  modeChanger.classList = ''
},
// properties of the game Object
mode: 0,
// properties of the game Object
winState: [
[0, 1, 2], /*  collumns of cells*/
[3, 4, 5], /*  collumns of cells*/
[6, 7, 8],/*  collumns of cells*/
[0, 3, 6],/*  collumns of cells*/
[1, 4, 7],/*  Rows of cells*/
[2, 5, 8],/* Rows of cells*/
[0, 4, 8],/* This represents the diagonal cells */
[2, 4, 6]
],
// Use An arrow function expression for checking who the winner is
checkForWin: ()=>{
  // looping through the index of the index of the array inside the rows and collums
      for (var i = 0; i < 8; i++) {
        // declaring a place holder to access the elements inside the arrays

        let combo = game.winState[i]

        if ((game.board[combo[0]]=== game.board[combo[1]] && game.board[combo[1]]=== game.board[combo[2]]) && game.board[combo[0]]!==''){
game.win = 89
          //displaying wins on the dom if the Conditions is met for the win
          title.innerHTML = (game.board[combo[0]]+' wins')
          // invoke the removeClickEvents() method to remove the registered events
          game.removeClickEvents()
          // Conditions for when the user draw
          if(game.board.some(x=>x==='Computer')){game.removeCompEvents()}

          button.style.display='block'
          break
        }
  }
},

makeMoneyMove: (e)=>{
  modeChanger.classList = 'gone'
  e.target.removeEventListener('click', game.makeMoneyMove )

  if(game.turn%2){

    e.target.classList.add("x")

    game.board[e.target.id]='Player 2'

    game.checkForWin()
}
  else {
        e.target.classList.add('circle')

        game.board[e.target.id]='Player 1'

      game.checkForWin()
}

    game.nextTurn()
      if(game.board.indexOf('')===-1&&!(game.win)){

        title.innerHTML = ('Draw')

        button.style.display='block'
    }
},

compMoneyMove: (e)=>{
  modeChanger.classList = 'gone'
  e.target.removeEventListener('click', game.compMoneyMove )

    e.target.classList = "circle"

    game.board[e.target.id]='Player 1'

    game.checkForWin()
    game.nextTurn()
    if(!game.win){
      let ai = Math.floor(Math.random()*document.getElementsByClassName('cell').length)
        game.board[document.getElementsByClassName('cell')[ai].id]= 'Computer'
        document.getElementsByClassName('cell')[ai].classList = 'x'

      game.checkForWin()
    game.nextTurn()}

      if(game.board.indexOf('')===-1&&!(game.win)){

        title.innerHTML = ('Draw')

        button.style.display='block'
    }
},
impossible: ()=>{
  if(game.mode===0){
    game.removeClickEvents()
    game.addCompEvents()
    modeChanger.innerHTML = 'Easy Bot'
    game.mode=1
  }else if(game.mode===1){
  modeChanger.innerHTML = 'ImpossibleBot'
  game.mode=2
}else{
game.removeCompEvents()
game.addClickEvents()
modeChanger.innerHTML = 'Player vs. Player'
game.mode=0
}
},
}

game.addClickEvents()














// <================================== Object Oriented using class =================>

// class TicTacToeObject {
  // constructor(gameState, gameBoard) {
  //   this.gameState = gameState;
  //   this.gameBoard = gameBoard;
  // }
//   checkForWin(){
//     // three dimisasional array of winning Combinations, different winning combinations
//     //diagonal and horizontal
//     // let winningCombinations = [
//       // the cells represents a 3 by 3 row collums
//       [0, 1, 2], /*  collumns of cells*/
//       [3, 4, 5], /*  collumns of cells*/
//       [6, 7, 8], /*  collumns of cells*/
//       [0, 3, 6], /*  Rows of cells*/
//       [1, 4, 7], /*  Rows of cells*/
//       [2, 5, 8], /* Rows of cells*/
//       [0, 4, 8], /* This represents the diagonal cells */
//       [2, 4, 6]
//     ]; /* This represents the diagonal cells */
//     // looping through the winning Combinations until the end of the array
//     // for (var i = 0; i < winningCombinations.length; i++) {
//       // We declared combo as a form of a placeholder for the elements within the array
//       let combo = winningCombinations[i]
//
//       if (this.gameBoard[combo[0]] === '' || this.gameBoard[combo[1]] === '' || this.gameBoard[combo[2]] === '') {
//         continue
//       }
//       console.log(gameBoard.indexOf(''))
//       if (this.gameBoard[combo[0]] === this.gameBoard[combo[1]] && this.gameBoard[combo[1]] === this.gameBoard[combo[2]]) {
//         alert(this.gameBoard[combo[0]] + ' Won')
//
//         cells.forEach(x => x.removeEventListener('click', clickHandle))
//         this.gameState.innerHTML = ("You won");
//         break
//
//
//       }
//       else if (this.gameBoard.indexOf('') == -1) {
//         alert("Its a Draw")
//         this.gameState.innerHTML = ("Its a Draw");
//         break
//       }
//     }
//   }
// }




//Array that represents current state of the game, everything is empty at the beginning
// The gameBoard elements will hold each value that is click on the dom(document object model) aka the browser
//declared function
// the purpose of this function will be to check and declared which winners has won
// The checkForWin function will not be called because it's a prototype at it's current state

//declare gameBoard and gameState
// let gameBoard = ['', '', '', '', '', '', '', '', '']
// let gameState = document.getElementById("gameState");
// let gameObject = new TicTacToeObject(gameState, gameBoard);
// const cells = [...document.getElementsByClassName('cell')]
// const clickHandle = (e) => {
//   e.target.removeEventListener('click', clickHandle)
//   if (TicTacToe.turn % 2 === 0) {
//     e.target.classList.add("x")
//     gameObject.gameBoard[e.target.id] = 'x'
//     // console.log(gameBoard)
//     gameObject.checkForWin();
//   } else {
//     e.target.classList.add('circle')
//     gameObject.gameBoard[e.target.id] = '0'
//     // console.log(gameBoard)
//     gameObject.checkForWin();
//   }
//   TicTacToe.nextTurn()
// }
// cells.forEach(x => {
//   return x.addEventListener('click', clickHandle)
// })
//defining an object tictatoe
// const TicTacToe = {
//   turn: 0,
//   nextTurn: () => {
//     TicTacToe.turn++
//   },
// }
// TicTacToe.nextTurn()
// const restart = () => {
//   gameObject.gameBoard = ['', '', '', '', '', '', '', '', '']
//   TicTacToe.turn = 0
//   cells.forEach(x => x.classList = 'cell')
//   cells.forEach(x => x.addEventListener('click', clickHandle))
// }
// var restartButton = document.getElementById("restartButton");
// restartButton.addEventListener("click", restart);

//class - TicTacToe
//memebers - gamebord, gamestate
//methods - checkforwin(), restart(), next



//setting the property value to zero
//implemting nextTurn each time user click on the dom
//



// gameObject.checkForWin();
// function checkForWin() {
//   // three dimisasional array of winning Combinations, different winning combinations
//   //diagonal and horizontal
//     let winningCombinations=[
//       // the cells represents a 3 by 3 row collums
//       [0, 1, 2],/*  collumns of cells*/
//       [3, 4, 5],/*  collumns of cells*/
//       [6, 7, 8],/*  collumns of cells*/
//       [0, 3, 6],/*  Rows of cells*/
//       [1, 4, 7],/*  Rows of cells*/
//       [2, 5, 8], /* Rows of cells*/
//       [0, 4, 8], /* This represents the diagonal cells */
//       [2, 4, 6]];/* This represents the diagonal cells */
//
//     // looping through the winning Combinations until the end of the array
//     for (var i = 0; i < winningCombinations.length; i++) {
//       // We declared combo as a form of a placeholder for the elements within the array
//       let combo = winningCombinations[i]
//
//
//       if(gameBoard[combo[0]]==='' || gameBoard[combo[1]]=== '' || gameBoard[combo[2]]==='' ){
//         continue
//       }
//       console.log(gameBoard.indexOf(''))
//       if (gameBoard[combo[0]]=== gameBoard[combo[1]] && gameBoard[combo[1]]=== gameBoard[combo[2]] ){
//
//         alert(gameBoard[combo[0]]+' Won')
//
//
//         cells.forEach(x=>x.removeEventListener('click', clickHandle))
//         title.innerHTML = ("You won");
//         break
//       }
//       else if(gameBoard.indexOf('') == -1){
//         alert("Its a Draw")
//         gameState.innerHTML = ("Its a Draw");
//
//         break
//       }
//   }
// }
