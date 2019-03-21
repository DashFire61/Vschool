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

