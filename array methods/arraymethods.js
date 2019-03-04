var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function foods(fruit, vegetables){
    // console.log("fruit: ", fruit);
    // console.log("vegetables: ", vegetables);

    vegetables.pop(vegetables)
    fruit.shift(fruit)

    // console.log("fruit: ", fruit);
    // console.log("vegetables: ", vegetables);

    fruit.indexOf("orange")

    // console.log("fruit: ", fruit.indexOf("orange"));

    fruit.push(fruit.indexOf("orange"))

    // console.log("fruit: ", fruit);
    // console.log("vegetables: ", vegetables);

    function veglength(vegetables){
        return vegetables.length 
    }

    // console.log(veglength(vegetables))

    vegetables.push(veglength(vegetables))

    // console.log("fruit: ", fruit);
    // console.log("vegetables: ", vegetables);

    var food = fruit.concat(vegetables)

    // console.log("food: ", food);

    food.splice(4,2)

    // console.log("food: ", food);

    food.reverse(food)

    // console.log("food: ", food);

    food.toString(food)

    // console.log("food: ", food);

    return food;
}
    console.log(foods(fruit,vegetables));



