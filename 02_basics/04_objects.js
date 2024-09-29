//const tinderUser = new Object()//singleton object
const tinderUser = {}//non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Anjali",
            lastname: "Gagneja"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

//const obj3 = {obj1, obj2}; //this will include object in object like arrays.

//const obj3 = Object.assign({}, obj1, obj2, obj4);

//brackets are target and the values are source that will return the correct object.

const obj3 = {...obj1, ...obj2, ...obj4};
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 4,
        email: "t@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLogged')); // tells us if the property exits in our data or not


const course = {
    coursename: "js in hindi",
    price: "1000",
    courseInstructor: "Hitesh"
}

//course.courseInstructor


const {courseInstructor: instructor} = course
console.log(instructor); // this is called object destructuring

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")
//this is destructuring in react

// {
//     name: "Hitesh",
//     coursename: "js in hindi",
//     price: "free"
// }

// [
//     {},
//     {},
//     {}
// ]
