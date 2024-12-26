const user = {
    username: "Mayank",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "Himanshi"
// user.welcomeMessage()



// function chai(){
//     let username = "Mayank"
//     console.log(this.username); 
// }

// chai()

// const chai = function(){
//     let username = "Mayank"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Mayank"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // Explicit Arrow function

// const addTwo = (num1, num2) => num1 + num2 // implicit arrow function

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(4, 6));