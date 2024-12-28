const userEmail = []

// if(userEmail){
//     console.log("Got user Email");
// }else{
//   console.log("Don't have user email");
// }

// Falsy Value = False, 0, -0, BigInt 0n, "", Null, undefined, NaN

// Truly Value = all that are not false
// "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty");  
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("My object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 25

console.log(val1);

// Terniary Operator

//condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");