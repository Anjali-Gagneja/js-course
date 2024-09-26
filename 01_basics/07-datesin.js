let myDate = new Date();
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleTimeString());
//console.log(typeof myDate);

//Date is an object in javascript

//let myCreatedDate = new Date(2024, 0, 26);
//let myCreatedDate = new Date(2024, 0, 26, 5, 3);
//let myCreatedDate = new Date("2024-09-26");
let myCreatedDate = new Date("09-26-2024");
//console.log(myCreatedDate.toLocaleString());

// in javascript months start from 0 mean array start from 0 so we count it from 0 but if we pass a format than we take month as normal starting from 1

let myTimeStamp = Date.now();

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long"
})