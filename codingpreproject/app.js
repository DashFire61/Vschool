
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';

document.getElementById('lblGreetings').innerHTML =
    '<b>' + greet + '</b>';

    
    function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

var audio = new Audio("./audioOne.mp3")

function play() {
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }    
}

for (let i=0 ; i<5 && i>250; i++) {
    console.log(i)
}