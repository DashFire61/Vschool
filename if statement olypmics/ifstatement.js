if( 5 > 3 ){
    console.log("is greater than");
}

if("cat".length === 3){
    console.log("is the length");
}

if("cat" === "dog"){
    console.log("the same");
}else{
    console.log("not the same");
}

// bronze //

var person = {
    name: "Bobby",
    age: 12
  }

    if(person.age >= 18){
        console.log(person.name+ " " + "is allowed to go to the movie");
    }else{
        console.log(person.name+ " " + "is not allowed to go to the movie");
    }

    if(person.name.startsWith("B")){
        console.log(person.name+ " " + "is allowed to go to the movie");
    }else{
        console.log(person.name+ " " + "is not allowed to go to the movie");
    }

    if(person.name.startsWith("B") && person.age >= 18){
        console.log(person.name+ " " + "is allowed to go to the movie");
    }else{
        console.log(person.name+ " " + "is not allowed to go to the movie");
    }

// Silver //

if(1 === "1"){
    console.log("strict");
}else if(1 == "1"){
    console.log("loose");
}else{
    console.log("not equal at all");
}

if(1<=2 && 2 === 4){
    console.log(yes);
}