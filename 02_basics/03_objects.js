// Singleton

// Object Literals


const mySym = Symbol("Key1")

const jsUser = {
    name: "Mayank",
    "full name": "Mayank Kumar Shukla",
    [mySym]: "myKey1",
    age: 21,
    location: "Punjab",
    email: "mynk@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(jsUser["email"]);
// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "mayank@micro.com"
// Object.freeze(jsUser)


// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS USer");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

