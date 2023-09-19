// all variables and arrays used
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
let counter = 0;
let levelCounter = 1;

// handle sounds as per color
function playSound(color) {
	sound = "assets/sounds/" + color + ".mp3";
	let audio = new Audio(sound);
	audio.play();
}

// handle user clicks and call check answer
$(".btn").click(function () {
	let color = $(this).attr("id");
	playSound(color);
	userClickedPattern.push(color);
	$(this).addClass("pressed");
	setTimeout(function () {
		$(".btn").removeClass("pressed");
	}, 100);
	counter++;
	clickChecker();

	if (counter === level) {
		checkAnswers();
	}

	console.log(userClickedPattern);
	console.log(gamePattern);
});

// handle next sequence generator

function nextSequence() {
	let randomNumber = Math.floor(Math.random() * 4);
	let chosenColor = buttonColors[randomNumber];
	gamePattern.push(chosenColor);

	$("#" + chosenColor)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);

	$("#level-title").text("Level " + level);

	console.log(userClickedPattern);
	console.log(gamePattern);
}

// hanlde keypress for starting the game
$(document).keypress(() => {
	setTimeout(() => {
		if (!started) {
			level++;
			levelCounter++;
			nextSequence();

			started = true;
		}
	}, 200);
});

// handle checking mechanism
function checkAnswers() {
	let checker = true;
	if (userClickedPattern.length === gamePattern.length) {
		for (let x = 0; x < gamePattern.length; x++) {
			if (gamePattern[x] != userClickedPattern[x]) {
				checker = false;
			}
		}

		if (checker) {
			for (let i = 1; i <= levelCounter; i++) {
				const id = setTimeout(() => {
					nextSequence();
				}, i * 300);
			}

			counter = 0;
			levelCounter++;
			level++;
		} else {
			gameOver();
		}

		userClickedPattern = [];
		gamePattern = [];
	}
}

// handle each wrong click
function clickChecker() {
	for (let x = 0; x < userClickedPattern.length; x++) {
		if (!(userClickedPattern[x] == gamePattern[x])) {
			gameOver();
			let sound = new Audio("assets/sounds/wrong.mp3");
			sound.play();
		}
	}
}

function gameOver() {
	$("body").addClass("game-over");
	setTimeout(function () {
		$("body").removeClass("game-over");
	}, 200);
	$("#level-title").text("Game Over, Press Any Key to Restart");

	level = 0;
	started = false;
}
