{

  let computerPoints = 0;
  let playerPoints = 0;
  let numberOfRounds = prompt('Ile rund ma trwać rozgrywka?');

  function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce'
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    function displayResult(argComputerMove, argPlayerMove) {
      printMessage('Komputer: ' + argComputerMove + ' || ' + 'Gracz: ' + argPlayerMove);

      if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
        playerPoints++;
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Przegrywasz!');
        computerPoints++;
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Przegrywasz!');
        computerPoints++;
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
        playerPoints++;
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
        playerPoints++;
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Przegrywasz!');
        computerPoints++;
      } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
      }

    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);

    let playerMove = getMoveName(playerInput);
    console.log('Gracz wpisał: ' + playerInput);
    let getResult = displayResult(computerMove, playerMove);
  }

  let showWinner = function () {
    if (computerPoints == numberOfRounds || playerPoints == numberOfRounds) {
      document.getElementById('play-rock').style.display = 'none';
      document.getElementById('play-paper').style.display = 'none';
      document.getElementById('play-scissors').style.display = 'none';
      document.getElementById('result').style.display = 'none';
    }

    if (computerPoints == numberOfRounds && computerPoints > playerPoints) {
      printMessage('Wygrywa komputer!');
    } else if (playerPoints == numberOfRounds && computerPoints < playerPoints) {
      printMessage('Wygrywa gracz!')
    }
  }

  let playRock = document.getElementById('play-rock');
  let playPaper = document.getElementById('play-paper');
  let playScissors = document.getElementById('play-scissors');
  let launchGame = document.getElementById('launch-game');

  document.getElementById('play-rock').style.display = 'none';
  document.getElementById('play-paper').style.display = 'none';
  document.getElementById('play-scissors').style.display = 'none';
  document.getElementById('result').style.display = 'none';

  launchGame.addEventListener('click', function () {
    document.getElementById('play-rock').style.display = 'inline';
    document.getElementById('play-paper').style.display = 'inline';
    document.getElementById('play-scissors').style.display = 'inline';
    document.getElementById('result').style.display = 'inline';
    document.getElementById('launch-game').style.display = 'none';
  });

  playRock.addEventListener('click', function () {
    playGame(1);
    clearResult();
    printResult('Komputer ' + computerPoints + ' : ' + playerPoints + ' Gracz');
    showWinner();
  });

  playPaper.addEventListener('click', function () {
    playGame(2);
    clearResult();
    printResult('Komputer ' + computerPoints + ' : ' + playerPoints + ' Gracz');
    showWinner();
  });

  playScissors.addEventListener('click', function () {
    playGame(3);
    clearResult();
    printResult('Komputer ' + computerPoints + ' : ' + playerPoints + ' Gracz');
    showWinner();
  });

}