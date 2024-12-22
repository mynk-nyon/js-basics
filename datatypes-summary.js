// Data Types
// * Primitive  * Non Primitive

//Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

//both comes in number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// Reference (Non Primitive) - values of whos reference is directly allocated in memory
// 3 Types: Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "mayank",
    age: 21,
}

const myFunction = function(){
    // console.log("Hello World")
}

myFunction();

// console.log(typeof id);

// DOCUMENTATION :: https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primimtive), Heap(Non-Primitive)

let myYoutubeName = "Nyon's Life"

let anotherName = myYoutubeName
anotherName = "carryminati"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    user: 'user@google.com',
    upi: 'user@ybl'
}

let userTwo = userOne

userTwo.user = "abra@google.com"

console.log(userOne.user);
console.log(userTwo.user);



