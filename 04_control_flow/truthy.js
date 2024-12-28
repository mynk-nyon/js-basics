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