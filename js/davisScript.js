var result = "slow";

var firstRound = document.getElementsByClassName('gallery__img');
console.log(result);

// first round of selections - picture selection
for (var i = 0; i < firstRound.length; i++) {
	firstRound[i].onclick = function (event) {
		var value = event.target.getAttribute('data-value');
		console.log(value);
		result = value;
		console.log(result);
	}
};

new Vue({
	el: '#gallery2',
	methods: {
		showResult: function () {
		var value = event.target.getAttribute('data-value');
		console.log(value);
		// combination of both selections (concatinated)
		result = result + value;
		console.log(result);
		// result calculation
			if (result == "happyhappy" || result == "happyenergetic" || result == "energetichappy" || result == "energeticenergetic") {
				document.getElementById("HappyEndScreen").classList.add("topLayer");
				console.log(result);
			} 	else if (result == "sadsad" || result == "sadbored" || result == "boredsad" || result == "boredbored") {
				document.getElementById("SadEndScreen").classList.add("topLayer");
				console.log(result);
				} 	else {
				document.getElementById("SlowEndScreen").classList.add("topLayer");
				console.log(result);
					}
		}
	}
})