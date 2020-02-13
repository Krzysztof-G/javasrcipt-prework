{

  let computerPoints = 0;
  let playerPoints = 0;
  let numberOfRounds = 0;

  const displayResult = function (argComputerMove, argPlayerMove) {
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

  const getMoveName = function (argMoveId) {
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

  const playGame = function (playerInput) {
    clearMessages();
    clearResult();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);
    console.log('Gracz wpisał: ' + playerInput);
    let getResult = displayResult(computerMove, playerMove);
  }

  const showWinner = function () {
    if (computerPoints == numberOfRounds || playerPoints == numberOfRounds) {
      document.getElementById('play-rock').style.display = 'none';
      document.getElementById('play-paper').style.display = 'none';
      document.getElementById('play-scissors').style.display = 'none';
      document.getElementById('result').style.display = 'none';
      document.getElementById('play-again').style.display = 'inline';
    }

    if (computerPoints == numberOfRounds && computerPoints > playerPoints) {
      printMessage('Wygrywa komputer!');
    } else if (playerPoints == numberOfRounds && computerPoints < playerPoints) {
      printMessage('Wygrywa gracz!')
    }
  }

  const playRock = document.getElementById('play-rock');
  const playPaper = document.getElementById('play-paper');
  const playScissors = document.getElementById('play-scissors');
  const launchGame = document.getElementById('launch-game');
  const playAgain = document.getElementById('play-again');

  document.getElementById('play-rock').style.display = 'none';
  document.getElementById('play-paper').style.display = 'none';
  document.getElementById('play-scissors').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('play-again').style.display = 'none';

  launchGame.addEventListener('click', function () {
    computerPoints = 0;
    playerPoints = 0;
    numberOfRounds = prompt('Ile rund ma trwać rozgrywka?');
    document.getElementById('play-rock').style.display = 'inline';
    document.getElementById('play-paper').style.display = 'inline';
    document.getElementById('play-scissors').style.display = 'inline';
    document.getElementById('result').style.display = 'inline';
    document.getElementById('launch-game').style.display = 'none';
    document.getElementById('play-again').style.display = 'none';
  });

  playAgain.addEventListener('click', function () {
    document.getElementById('play-rock').style.display = 'none';
    document.getElementById('play-paper').style.display = 'none';
    document.getElementById('play-scissors').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('launch-game').style.display = 'inline';
    document.getElementById('play-again').style.display = 'none';
    clearMessages();
    clearResult();
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
