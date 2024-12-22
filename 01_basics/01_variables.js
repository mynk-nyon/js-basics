const accountId = 144553
let accountEmail = "mayankshukla.acc@gmail.com"
var accountPassword = "12345"
accountCity = "Punjab"
let accountState;

// accountId = 2   Not allowed as accountID is constant in line 1
accountEmail = "mynk2308@gmail.com"
accountPassword = "1847569238"
accountCity = "Lakhimpur kheri"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//One more method

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table
([accountId, accountEmail, accountPassword, accountCity, accountState])