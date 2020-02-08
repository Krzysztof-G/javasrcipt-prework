function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function printResult(gameResult) {
	var div = document.createElement('div');
	div.innerHTML = gameResult;
	document.getElementById('result').appendChild(div);
}

function clearResult() {
	document.getElementById('result').innerHTML = '';
}

function buttonClicked() {
	document.getElementById('buttons').innerHTML = '';
}