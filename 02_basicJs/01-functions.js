// functions in JavaScript
// declaring fuction
function sayGreetings(){
    console.log("Hello, from sayGreetings function");
}
// calling function
sayGreetings()

// another way
function sayGreetings1(){
    return console.log("Hello, from sayGreetings1 function");
}
sayGreetings1()

// using parameters and giving argument
function sayGreetings2(user){
    return console.log(`Hello ${user} from sayGreetings2 function`);
}
sayGreetings2("AbdulRehman")

//  basic function to return Sum of two numbers
function sum(number1, number2){
    return number1+number2
}
const sumPrint = sum(1,4)
console.log(sumPrint);

// another way
function sum1(number1, number2){
    console.log(number1+number2);
}
sum1(3,4)

// another way
function sum2(number1, number2){
    return console.log(number1+number2);
}
sum2(5,4)

// another way
function sum3(number1, number2){
    const sumResult = number1+number2
    return console.log(sumResult)
}
sum3(1,2)

// another way
function sum4(number1, number2){
    let result = number1+number2
    console.log("AbdulRehman"); // this log will execute because its before return
    return result
    console.log("AbdulRehman"); // this log will not execute because its after return
}
const ab = sum4(5,7)
console.log("Result:", ab);

// investigating what will happen if we will not give empty parameters
function userLoggenInMessage(userName){
    console.log(`${userName} just logged in!`);
}
userLoggenInMessage("")

// investigatin if we will not give any parameter
userLoggenInMessage() // undefined will be return in the place of userName

// to handle situations like above we use the conditions in JS
function userLoggenInMessage1(userName){
    if(!userName && userName === ""){
        return console.log("Please enter your username.");
    }
    return console.log(`${userName} just logged in!`);
}
// console.log(userLoggenInMessage1())
userLoggenInMessage1("AbdulRehman")


// using rest operator to get multiple parameters in function
// rest operator is similar in syntax of spread operator
// the spread operator expands elements,
// the rest operator condenses them into a single entity within function parameters or array destructuring

function cartPrice(...price){
    console.log(typeof price);
    return price;
}
const typeCheck = cartPrice(100, 500, 900, 300) // it will return values in Array
console.log(typeCheck);
console.log(typeof typeCheck); // returns object

function cartPrice1(...price){
    console.log(typeof price);
    return console.log(...price); // it will return value but not in Array
}
const typeChecking = cartPrice1(100, 500, 900, 300)


// passing Objects and Arrays to function as parameter

// passing Object
const user = {
    name: "AR",
    email: "ar@gmail.com",
    age: 21
}
function handleObject(anyObject){
        console.log(`My name is ${anyObject.name}, my email is ${anyObject.email} and my age is ${anyObject.age}.`);
    }
    handleObject(user)

// we can also pass an object using de-structuring
function handleObject1(){
const {name} = user
const {email} = user
const {age} = user
    console.log(`My name is ${name}, my email is ${email} and my age is ${age}.`);
}
handleObject1()

// we can also pass object by creating it in argument
function handleObject2(anyObject){
    console.log(`My name is ${anyObject.name}, my email is ${anyObject.email} and my age is ${anyObject.age}.`);
}
handleObject({
    name: "Riz",
    email: "riz@gmail.com",
    age: 18
})


// passing Array
const array = [100, 200, 300, 400, 500]
function accessArraySecondValue(getArray){
    console.log(getArray[1]);
}
accessArraySecondValue(array)

// we can also pass array by creating it in argument
function accessArrayThirdValue(getArray){
    console.log(getArray[2]);
}
accessArrayThirdValue([100, 200, 300, 400, 500])