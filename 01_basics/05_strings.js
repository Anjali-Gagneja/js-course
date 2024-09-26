const name = "Anjali";
const repoCount = 50;

//console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// This way of writing a string is known as string interpolation.

const gameName = new String('Anjali-hc-com');

//console.log(gameName[0]);

//console.log(gameName.__proto__); // we can see objects by using this syntax

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 4);
//console.log(newString);

// we cannot pass negative value in subbstring 

const anotherString = gameName.slice(-8, 4);
//console.log(anotherString);


// we can pass negative value in slice method

const newStringOne = "              anjali       ";
//console.log(newStringOne);
//console.log(newStringOne.trim());

//trim method remove the extra or unwanted spaces from the string.

const url = "https://hitesh.com/hitesh%20Choudhary";


//console.log(url.replace('%20', '-'));

// this will replace the word from the string 

//console.log(url.includes('hitesh'));
// this will check if the word or anything you've writed in the braces is present there or not.

console.log(gameName.split('-'));