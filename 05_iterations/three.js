// for of (Loops for arrays)

["", "", ""] //array with strings
[{}, {}, {}] //array with objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(`Each char is ${greetings}`);
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")
map.set(`Pk`, "Pakistan")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);  
}
