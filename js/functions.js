function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else if(argMoveId == 2){
	  return 'papier';
	} else if(argMoveId == 3){
	  return 'nozyce';
	} else {
		/*printMessage('Nie znam ruchu o id ' + argMoveId + '.');*/
	  return 'nieznany ruch!';
	}
  }

  function displayResult (argComputerMove, argPlayerMove){
	printMessage(' Komputer ' + argComputerMove + ' Gracz ' + argPlayerMove);
	
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  	return 'Ty wygrywasz!';
	} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		return 'Komputer wygrywa!';
	} else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
		return 'TY wygrywasz!';
	} else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
		return 'Komputer wygrywa!';
	} else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
		return 'Ty wygrywasz!';
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
		return 'Komputer wygrywa!';
	} else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
		return 'Komputer wygrywa!';
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		return 'Remis!';
	} else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
		return 'Remis!';
	} else if (argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
		return 'remis!';
	} else if (argComputerMove == 'nieznany ruch!'){
	    return 'Komputer tym razem przegrywa :(';
	} else {
	    return 'Tym razem przegrywasz :(';
	}
  }
  
  
