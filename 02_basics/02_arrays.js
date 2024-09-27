const marvel_heros = ["Thor", "IronMan", "SpiderMan"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


// concat method merges to arrays 
// push method will not merge the arrays together it will take the second array as a single element in the array.


const all_new_heros = [...marvel_heros, ...dc_heros]; // this is the easy method to merge two or more arrays together
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

//console.log(Array.isArray("Anjali")); //this data is not an array to convert it into array we use from 
//console.log(Array.from("Anjali"));// this method helps us to convert data of any type into array

//console.log(Array.from({name: "anjali"}));
// we haven't tell the array from which we want to connvert like we want it from key or the value.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
