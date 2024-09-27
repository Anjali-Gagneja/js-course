// arrays
// arrays are resizable in js and we can add mix elements in arrays. 
// arrays elements cannot be accessed using arbitary strings as indexes.
// Javascript array-copy-operations create shallow copy.
// shallow copies share the same reference like heap memory i.e., if we make any change it will change the original elements of the array.
// deep copies does not share the same reference like stack memory i.e., it will make a copy refrenece and change the copied element.

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Iron Man", "Batman", "Thor", "Thanos", "Black Widow", "Malificient"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]);

// Array methods

//myArr.push(6);
//myArr.push(7);
//myArr.pop();

//myArr.unshift(9); // this will add the element in the very first place of the array by shifting all the exisiting array which is not a good practice because if we have many elements in our array it will impact our computer performance.


//myArr.shift();

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));


//const newArr = myArr.join(); // this will bind and convert the array into string

//console.log(myArr);
//console.log(typeof newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

//slice will give you all the elements same as they are 
//whereas splice will give you the remaining elements from the array


