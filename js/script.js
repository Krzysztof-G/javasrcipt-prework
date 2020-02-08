function playGame(playerInput) {

  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nozyce';
    } else {
      return 'nieznany ruch!';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage(' Komputer ' + argComputerMove + ' Gracz ' + argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') { 
      return 'Ty wygrywasz!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      return 'Komputer wygrywa!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
      return 'TY wygrywasz!';
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier') {
      return 'Komputer wygrywa!';
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
      return 'Ty wygrywasz!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce') {
      return 'Komputer wygrywa!';
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier') {
      return 'Komputer wygrywa!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      return 'Remis!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      return 'Remis!';
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'nozyce') {
      return 'remis!';
    } else if (argComputerMove == 'nieznany ruch!') {
      return 'Komputer tym razem przegrywa :(';
    } else {
      return 'Tym razem przegrywasz :(';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Wynik: ' + displayResult(computerMove, playerMove)); 
}
function buttonClicked(){
  printMessage('Guzik został kliknięty');
}
let playRock = document.getElementById('play-rock');
  
  playRock.addEventListener('click', function () { 
    playGame(1);
  })
let playPaper = document.getElementById('play-paper');
   
  playPaper.addEventListener('click', function() {
    playGame(2);
  })

let playScissors = document.getElementById('play-scissors');
   
  playScissors.addEventListener('click', function() {
    playGame(3);
  })  
  
  