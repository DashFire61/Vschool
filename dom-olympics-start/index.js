var sh = document.createElement("h4");
    var subTxt = sh.innerHTML = "<span>Aspen</span> wrote the JavaSCript";
    var sub = document.querySelector("body");
    // var hFour = sh.appendChild(subTxt);
     

    sh.id = "hh4";
    sh.className += 'name';
  
     sub.prepend(sh);

    sh.style.marginLeft = "45% ";
     
     
     
var h = document.createElement("h1");
    var txt = document.createTextNode("JavaScript Made This!!");
    var body = document.querySelector("body");
    var hOne = h.appendChild(txt);
  
    
    h.id = "hh1";
    h.className += 'header';

     body.prepend(h);


var lefts = document.getElementsByClassName('left');
     for (var i = 0; i < lefts.length; i++ ) {
         lefts[i].id = left;
         console.log(left);
     }

var rights = document.getElementsByClassName('right');
     for (var i = 0; i < rights.length; i++ ) {
         rights[i].id = right;
     }


let leftButton = document.createElement("button");
leftButton.innerHTML = "your chat color";                   
document.body.appendChild(leftButton);
leftButton.id = "leftButton";              

let rightButton = document.createElement("button");
rightButton.innerHTML = "recipient chat color";                   
document.body.appendChild(rightButton);
rightButton.id = "rightButton";


let leftText = document.getElementById("left");
let rightText = document.getElementById("right");

leftButton.addEventListener("click", left());

rightButton.addEventListener("click", right());

function leftColor(){
     document.leftText.style.backgroundColor = getRandomColor();
     
     document.leftText.style.color = getRandomColor();
}

function rightColor(){
     
     document.rightText.style.backgroundColor = getRandomColor();
     document.rightText.style.color = getRandomColor();
}

function getRandomColor() {
     'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
}