if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log(`Inner: ${a}`); // block scope
}

let a = 400
console.log(`Outer: ${a}`); //global scope
// console.log(b);
// console.log(c);