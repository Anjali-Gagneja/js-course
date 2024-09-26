const score = 400;
//console.log(score);

const balance = new Number(100);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNum = 123.8966;

//console.log(otherNum.toPrecision(3));

const hundred = 1000000;
//console.log(hundred.toLocaleString('en-IN'));

//************ Maths*********************/

//console.log(Math);
//console.log(Math.abs(-4));

// it changes negative value to positive but it doesn't change the positive value to negative.

//console.log(Math.round(8.3));//round of to the nearest
//console.log(Math.ceil(8.3));//round to the uppermost value
//console.log(Math.floor(8.3));//round to the lower value
//console.log(Math.max(4, 3, 6, 8));
//console.log(Math.min(4, 3, 6, 8));

console.log(Math.random());
// the value in math.random will always comes between 0 and 1.
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);