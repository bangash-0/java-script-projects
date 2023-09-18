const sounds = [
	"assets/sounds/crash.mp3",
	"assets/sounds/kick-bass.mp3",
	"assets/sounds/snare.mp3",
	"assets/sounds/tom-1.mp3",
	"assets/sounds/tom-2.mp3",
	"assets/sounds/tom-3.mp3",
	"assets/sounds/tom-4.mp3",
];

const keys = ["w", "a", "s", "d", "j", "k", "l"];

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	// handle clicks
	document.querySelectorAll(".drum")[i].addEventListener("click", () => {
		let sound = new Audio(sounds[i]);
		sound.play();
		buttonAnimation(i);
	});

	// Handle key press
	document.addEventListener("keypress", function (event) {
		if (event.key == keys[i]) {
			let sound = new Audio(sounds[i]);
			sound.play();
			buttonAnimation(i);
		}
	});
}

function buttonAnimation(counter) {
	document.querySelectorAll(".drum")[counter].classList.add("pressed");
	setTimeout(() => {
		document.querySelectorAll(".drum")[counter].classList.remove("pressed");
	}, 200);
}
