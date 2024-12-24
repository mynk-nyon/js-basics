const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["flash", "superman", "batman"]


//Push
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//concat
// const new_superheros = marvel_heros.concat(dc_heros)
// console.log(new_superheros);


//using spread operator

// const all_heros = [...marvel_heros, ...dc_heros]

// console.log(all_heros);


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("Mayank"));
// console.log(Array.from("Mayank"));
// console.log(Array.from({name: "Hitesh"})); //Important case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


