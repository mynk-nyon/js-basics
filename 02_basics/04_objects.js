// const tinderUser = new Object() -- Singleton Object
// const tinderUser = {} -- Non Singleton Object
//Here both are same

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "mayank@google.com",
    fullname: {
        userfullname: {
            firstname: "Mayank",
            lastname: "Shukla"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "abc@abc.com"
    },
    {
        id: 2,
        email: "mayank@aaa.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Mayank"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "Mayank",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// JSON Formatter to learn more about APIs
