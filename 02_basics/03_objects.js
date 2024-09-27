// singleton
//Object.create
//object literals

const mySym = Symbol("Key1");

const JsUser = {
    name: "Anjali",
    "full name": "Anjali Gagneja",
    [mySym]: "myKey1",
    age: 23,
    location: "New York",
    email: "anjali@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "anjali@123.com";
//Object.freeze(JsUser)
JsUser.email = "anjali@micro.com"; // this value will not propagate because we have already freezed the value of this key in the above line.
//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greeting2 = function() {
    console.log(`Hello JS User ${this.name}`);
}

console.log(JsUser.greeting2());