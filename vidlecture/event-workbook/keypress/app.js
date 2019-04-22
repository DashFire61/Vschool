/* You're task is to display to the user the key and key code they press

Example of output: You've pressed the "a" key. It's key code is 65

Wes Bos made this https://keycode.info/ for us to use as an example */


var myMessage = document.getElementById('myMessage')

 window.addEventListener("keypress", function(e){
     myMessage.textContent = `You pushed the character ${e.key} and it's code is ${e.keyCode}`
 })