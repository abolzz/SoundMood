//endScreen
var imgEmoji = document.getElementsByClassName('gallery__img--emoji');
/*var endScreen = document.getElementById('finalScreen').style.display = 'none';

for (let i = 0; i < imgEmoji.length; i++) {
  imgEmoji[i].onclick = function() {
    //endScreen.style.display = 'block';
    endScreen.show();
  }
}
*/
//experiment
for (let i = 0; i < imgEmoji.length; i++) {
  imgEmoji.onclick = function() {
    var endScreen = document.getElementById('finalScreen');
    if (endScreen.style.display !== 'none') {
      endScreen.style.display = 'none';
    } else {
      endScreen.style.display = 'block';
    }
  };
}