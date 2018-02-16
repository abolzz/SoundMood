// JS file

// sound effect for buttons
var soundEffectAudio = document.getElementById('buttonSound');
// source of the sound effect
soundEffectAudio.src = "sounds/click.mp3";

// reload button
document.getElementById('reload').onclick = function() {
      location.reload();
    }

// loading screen dissapears
document.getElementById('ready').onclick = function() {
	// after 1 second the loading screen dissappears (thus giving time for animation to be played)
  setTimeout(function() {
    document.getElementById("loadingscreen").classList.add("hidden");
  }, 1000);
  // sound effect gets played when user clicks on button
  soundEffectAudio.play();
  // animation
  document.getElementById('loadingscreen').classList.add('bounceOutLeft');
  document.getElementById("instructionP").classList.add("zoomIn");
  document.getElementById("ok").classList.add("zoomIn");

};

// for setting and clearing timeouts
var error;

document.getElementById('ok').onclick = function() {
	// timer starts
	$('#timer').addClass('timer-quick');
  	$('.timer-quick').startTimer();
  // 1 second after user has clicked on "OK" button the instruction screen dissappears (thus giving the time for animation)
  setTimeout(function() {
    document.getElementById("instruction1").classList.add("hidden");
  }, 1000);
  // animation
  document.getElementById('instruction1').classList.add('bounceOutLeft');
  // sound effect gets played when user clicks on button
  soundEffectAudio.play();
  // if user did not click on one of the images then after 11 seconds error screen appears (1 second is for animation)
  error = setTimeout(function() {
  	  // after 0.3 deconds "SlowEndScreen" (or error screen) appears (by receiving a class which gives it the highest z-index)
      setTimeout(function() {
        document.getElementById('SlowEndScreen').classList.add('topLayer');
      }, 300);
    // animation
    document.getElementById("gallery1").classList.add("bounceOutLeft");
    document.getElementById("SlowEndScreen").classList.add("zoomIn");
    // error sound effect gets played
    document.getElementById("errorSound").play();
  }, 11000);
};

// default result
var result = "slow";

var firstRound = document.getElementsByClassName('gallery__img');
console.log(result);

// new Vue.js app for the first round of selections - picture selection
new Vue({
  el: '#gallery1',
  methods: {
    firstResult: function() {
    var value = event.target.getAttribute('data-value');
    console.log(value);
    // result becomes the first pick
    result = value;
    console.log(result);
    soundEffectAudio.play();
	    // because the user clicked on one of the images the timeout for error screen gets cleared
	    clearTimeout(error);
	     document.getElementById("gallery1").classList.add("bounceOutLeft");
	     setTimeout(function() {
	    document.getElementById("gallery1").classList.add("hidden");
	    }, 1000);
    // makes the gifScreen disappear after 10 seconds
    setTimeout(function() {
      // animation
      document.getElementById("instructionP2").classList.add("zoomIn");
      document.getElementById("ok2").classList.add("zoomIn");
    }, 6000);
              setTimeout(function() {
                document.getElementById("gifScreen").classList.add("bounceOutLeft");
              }, 6000);
              setTimeout(function() {
                    document.getElementById("gifScreen").classList.add("hidden");
              }, 7000);
    }
  }
});

document.getElementById('ok2').onclick = function() {
	// timer starts
	$('#timer2').addClass('timer-quick');
  	$('.timer-quick').startTimer();
  // button sound effect
  soundEffectAudio.play();
  // 1 second after user has clicked on "OK" button the instruction screen dissappears (thus giving the time for animation)
  setTimeout(function() {
    document.getElementById("instruction2").classList.add("hidden");
  }, 1000);
            document.getElementById("instruction2").classList.add("bounceOutLeft");
  // if user did not click on one of the images then after 11 seconds error screen appears (1 second is for animation)
  error = setTimeout(function() {
  	  // after 0.3 deconds "SlowEndScreen" (or error screen) appears (by receiving a class which gives it the highest z-index)
      setTimeout(function() {
          document.getElementById('SlowEndScreen').classList.add('topLayer');
      }, 300);
    document.getElementById("gallery2").classList.add("bounceOutLeft");
    document.getElementById("SlowEndScreen").classList.add("zoomIn");
    // error sound effect gets played
    document.getElementById("errorSound").play();
  }, 11000);
};

// second round of selections
new Vue({
  el: '#gallery2',
  methods: {
    showResult: function() {
      clearTimeout(error);
      setTimeout(function() {
        document.getElementById("gallery2").classList.add("hidden");
      }, 1000);
      document.getElementById("gallery2").classList.add("bounceOutLeft");
      var value = event.target.getAttribute('data-value');
      console.log(value);
      // combination of both selections (concatinated)
      result = result + value;
      console.log(result);
      soundEffectAudio.play();
      // result calculation
      if (result == "happyhappy" || result == "happyenergetic" || result == "energetichappy") {
              setTimeout(function() {
        document.getElementById("HappyEndScreen").classList.add("topLayer");
              }, 300);
        console.log(result);
      } else if (result == "boredsad" || result == "boredbored" ) {
              setTimeout(function() {
        document.getElementById("DepressedEndScreen").classList.add("topLayer");
              }, 300);
        console.log(result);
      }else if (result == "happysad" || result == "sadhappy" || result == "sadenergetic" || result == "energeticsad") {
              setTimeout(function() {
        document.getElementById("TiredEndScreen").classList.add("topLayer");
              }, 300);
        console.log(result);
      } else if (result == "sadsad" || result == "sadbored" ) {
              setTimeout(function() {
        document.getElementById("SadEndScreen").classList.add("topLayer");
              }, 300);
        console.log(result);
      } else {
        setTimeout(function() {
          document.getElementById("SlowEndScreen").classList.add("topLayer");
        }, 300);
        console.log(result);
      }
    }
  }
});

// play and pause buttons
var playButtons = document.getElementsByClassName('endScreen__button--play');

var pauseButtons = document.getElementsByClassName('endScreen__button--pause');

$(document).ready(function() {
  $(document.getElementsByClassName('endScreen__button--pause')).hide();
    for (var i = 0; i < pauseButtons.length; i++) {
    playButtons[i].onclick = function(event) {
      var value = $(this).attr('data-value');
      var thisPlayButton = playButtons[value];
      var audio = thisPlayButton.children[0];
      console.log(playButtons[value]);
      $(document.getElementsByClassName('endScreen__button--play')).hide();
      $(document.getElementsByClassName('endScreen__button--pause')).show();
      audio.play();

		  for (var i = 0; i < pauseButtons.length; i++) {
		    pauseButtons[i].onclick = function(event) {
		      $(document.getElementsByClassName('endScreen__button--pause')).hide();
		      $(document.getElementsByClassName('endScreen__button--play')).show();
		        audio.pause();
		    }
		  }
    }
  }
});

//similar songs
document.getElementById('moreSongs').onclick = function initAudio(event) {
  document.getElementById('mylist').style.display = 'block';
  var audio, dir, ext, mylist;
  dir = "audio/";
  ext = ".mp3";
  // Audio Object
  audio = new Audio();
  audio.src = dir + "Iwillbehere" + ext;
  audio.play();
  // Event Handling
  mylist = document.getElementById("mylist");
  mylist.addEventListener("change", changeTrack);
  // Functions
  function changeTrack(event) {
    audio.src = dir + event.target.value + ext;
    audio.play();
  }
}
//window.addEventListener("load", initAudio);
document.getElementById('moreSongs').addEventListener("click", initAudio);