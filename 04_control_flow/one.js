// if

// if(true){

// }

const isUserLoggedIn = true

// if(2 == "2"){
//     console.log("executed");
// }

// operators - <, >, <=, >=, ==, !=, ===
// = - assignment
// == check if condition is comatible or not

// const temperature = 55
// if(temperature < 50){
//     console.log(`the temperature of india is ${temperature}, which is less than 50 `);   
// } else{
//     console.log("No! its Greater than 50");
// }


// const score = 200
// if(score > 100){
//     const power = "Fly"
//     console.log(`User Power: ${power}`);
// }


// short hand notation
// const balance = 500
// if (balance > 200) console.log("tesst");

// const balance = 1000

// if (balance < 500) {
//     console.log("less than");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");    
// }else{
//     console.log("It is equal to 1000");
// }


const userLoggedIn = false
const debitCard = true

if(userLoggedIn && debitCard){
    // console.log("Allow to buy course");
} // AND Statement (All conditions must be true for the execution)

if(userLoggedIn || 2==2){
    // console.log("Test");
} // OR Statemnet (if any one of them is true then execute)