

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nozyce';
}
printMessage('Komputer: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nozyce';
}
printMessage('Gracz: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Gracz wygrywa!');
  } else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
  } else if (computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Gracz wygrywa!');
  } else if (computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
  } else if (computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Gracz wygrywa!');
  } else if (computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('Komputer wygrywa!');
  } else if (computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
  } else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  } else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  } else if (computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('remis!');
  } else if (computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Spróbuj ponownie!');
  } else if (computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Spróbuj ponownie!');
  } else if (computerMove == 'nozyce' && playerMove == 'nieznany ruch'){
    printMessage('Spróbuj ponownie!');
  }