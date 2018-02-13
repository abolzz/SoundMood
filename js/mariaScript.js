/*var myAudio = document.getElementById('myAudio');
var audio = document.getElementsByTagName('audio');


function playAudio() {
  myAudio.play();
}

function pauseAudio() {
  myAudio.pause();
}*/
var audio = document.getElementsByTagName('audio');
var playButton = document.getElementsByClassName('endScreen__button--play');
var pauseButton = document.getElementsByClassName('endScreen__button--pause');

document.getElementById('playAudioSlow').onclick = function playAudioSlow() {
  for (var i = 0; i < audio.length; i++) {
    audio[0].play();
  }
}

document.getElementById('playAudioDay').onclick = function playAudioDay() {
  for (var i = 0; i < audio.length; i++) {
    audio[1].play();
  }
}

document.getElementById('playAudioHappy').onclick = function playAudioHappy() {
  for (var i = 0; i < audio.length; i++) {
    audio[2].play();
  }

}

function pauseAudio() {
  for (var i = 0; i < audio.length; i++) {
    audio[i].pause();
  }
}