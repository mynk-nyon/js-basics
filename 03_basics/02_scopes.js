if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log(`Inner: ${a}`); // block scope
}

let a = 400
// console.log(`Outer: ${a}`); //global scope
// console.log(b);
// console.log(c);


function one(){
    const username = "Mayank"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
    
}
one()

if(true){
    const username = "MaYank"
    if(username === "MaYank"){
        const website = " youtube"
        // console.log(username + website);   
    }
    // console.log(website);
    
}

// console.log(username);


// +++++++++++++++++++ interesting +++++++++++
console.log(addone(3)); //this will work fine
function addone(num){
    return num + 1
}



addTwo(3) // this will not work because we are assigning function in a variable constant
const addTwo = function(num){
    return num + 2
}

// addTwo(3)