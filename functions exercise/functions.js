a = 2
b = 7
c = 12
str = ('67923')
str2 = ('1234567890123456789012345632456789fghjk7890')


function sum(a,b){
    return (a + b);
}

console.log(sum(a,c));



function greatest(a,b,c){
    return Math.max(a,b,c);
}

console.log(greatest(a,b,c));



function evenodd(a){
    return (a % 2 ? "odd" : "even");
}

console.log(evenodd(b));



function weird(str){
    if (str.length <= 20)
        return str.concat(str)

    else
        return str.slice(0,(Math.floor(str.length/2)));
}

console.log(weird(str))

console.log(weird(str2))




