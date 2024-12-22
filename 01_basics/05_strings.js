const name = "Mayank"
const repoCount = 11

// console.log(name + repoCount + " value");  No one use this method

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 // Now we use String Interpolation with ` normal string plus ${ value } `

const gameName = new String('nyonmous')

// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4)

console.log(anotherString);



