var numSquare = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector('h1');
var colorDisplay = document.querySelector("#colorDisplay");
var mass = document.querySelector('#mass');
var newColor = document.querySelector('#reset');
var mode = document.querySelectorAll('.mode');


init();

function init(){
	modeButtonListener();
	status();
	reset();
}

function modeButtonListener(){
		for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener('click',function(){
			mode[0].classList.remove('selected');
			mode[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
			reset();
		});
	}
}

function status(){
		for (var i = 0; i < squares.length; i++) {
		 squares[i].style.backgroundColor = colors[i];

		 squares[i].addEventListener('click',function(){
		 	if(this.style.backgroundColor === pickedColor){
		 		mass.innerHTML = 'Correct';
		 		changeColor(pickedColor);
		 		h1.style.backgroundColor = pickedColor;
		 		newColor.innerHTML = 'Play Again?';
		 	}
		 	else{
		 		this.style.backgroundColor = "#232323";
		 		mass.innerHTML = 'Try Again!';
		 	}
		 	
		 });
	}
}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function generateColor(num){
	mass.innerHTML = '';
	newColor.innerHTML = 'New Color';
	h1.style.backgroundColor = 'steelblue';
	var colors = [];
	var c1,c2,c3;
	for (var i = 0; i < num; i++) {
		c1 = Math.floor(Math.random() * 256);
		c2 = Math.floor(Math.random() * 256);
		c3 = Math.floor(Math.random() * 256);

	 colors[i] = 'rgb(' + c1 + ', ' + c2 + ', ' + c3 +')';
	}
	return colors;
}

newColor.addEventListener('click',function(){
	reset();
});

function reset(){
	colors = generateColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
	else
		squares[i].style.display = 'none';
	}


}