
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName();

// function addTwoNumbers(number1, number2) /**the value passed in these brackets are known as parameteres**/ {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result;
    // console.log("Anjali"); // in function the code after return statement will not work

    return number1 + number2;
}

const result = addTwoNumbers(4, 5)// when we call a function and passes a value in it we call that value as an argument
//console.log("Result :", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Anjali"));
//console.log(loginUserMessage("Anjali"));

//... is known as rest operator or in arrays or objects case it is known as spread operator.

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

//console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Anjali",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 500, 600];

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));