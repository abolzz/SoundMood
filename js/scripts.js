/* Script for timer */var seconds;
  var temp;
 
  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
      temp = document.getElementById('countdown');
      temp.innerHTML = "done";
      return;
    }
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  } 
 
  countdown();
/*jump page */
   document.getElementById("myButton").onclick = function () {
     location.href = "#instructionjump";
    };
     document.getElementById("myButton2").onclick = function () {
     location.href = "#galleryjump";
    };
