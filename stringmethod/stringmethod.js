let str = 'Hello'




function capilizeAndLowercase(str){
    var upstr = str.toUpperCase();
    var lowstr = str.toLowerCase();
    var uplowstr = upstr.concat(lowstr);
    return uplowstr;
}

console.log(capilizeAndLowercase(str))





function findmiddleindex(str){
    var halfstr = str.length/2;
    var roundedstr = Math.floor(halfstr);;
    return roundedstr;
}

console.log(findmiddleindex(str))






function returnfirsthalf(str){
    var halved = str.slice(0,findmiddleindex(str));
    return halved;
}

console.log(returnfirsthalf(str))






function returnlasthalf(str){
    var halvedtwo = str.slice(findmiddleindex(str));
    return halvedtwo;
}

console.log(returnlasthalf(str))





function capLowWord(str){
    var capfirst = returnfirsthalf(str).toUpperCase();
    var lowsecond = returnlasthalf(str).toLowerCase();
    var caplow = capfirst.concat(lowsecond);
    return caplow;
}

console.log(capLowWord(str))