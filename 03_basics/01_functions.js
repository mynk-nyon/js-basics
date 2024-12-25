// console.log();

function sayMyName(){
    console.log("M");
    console.log("a");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("k");
}

// sayMyName()

// function addTwoNumbers(number1, number2) // these are parameters
// {
//     // console.log(number1 + number2);
// }

// addTwoNumbers(3, 4) // these are arguments

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(3, 5)

// console.log("Result :",result)

// console.log(addTwoNumbers(3, 5));

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please ennter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mayank")) // mayank just logged in

// console.log(loginUserMessage("Mayank")); // undefined just logged in


function calculateCartPrice(val1, val2, ...num1){
    return num1
}


// console.log(calculateCartPrice(2, 55, 100));

const user = {
    username: "Mayank",
    price: "50000"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
 

// handleObject(user) can do this also
handleObject({
    username: "samer",
    price: 400
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); can do this also

console.log(returnSecondValue([300, 500, 600]));
