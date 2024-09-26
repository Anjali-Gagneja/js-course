// Premitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);


const bigNumber = 3425654169846519846519461n;

// Non-Premitive or Reference

// Arrays, Objects, Functions


const heros = ["Shaktiman", "Naagraj", "Doga"];

//let myObj = {age = 23;}

const myFunction = function() {
    //console.log("Hello World!");
}

//console.log(typeof myFunction);



// **********************************

// Stack(Premitive), heap(non-premitive)

let myYoutubeName = "Anjali";


let anotherName = myYoutubeName;
anotherName = "Gagneja";
console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email: "123@gmail.com",
    upi: "user@yl"
}

let userTwo = userOne;

userTwo.email = "anjali@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);


// in stack memory if we make changes we are just making a copy of it and changes the copied value

// while in heap memory that is used for non-premitive datatypes we just take the reference of the memory i.e., we actually hange the original value n the heap memory not the copied one because we are just taking reference.