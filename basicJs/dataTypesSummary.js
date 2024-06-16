/* Dynamic vs Static Languages
Dynamic Lang -> not require declaration of dataType during code
Statc Lang -> require declaration of dataType during code else return error

JAVASCRIPT is a Dynamic Language
*/

// Premitive DataTypes -> compared by Values, cannot be modified directly, values stored in memory directly
// Numbers, Boolean, String, Null, Undefined, Symbol, BigInt

// COMPARISION

let number1 = 5
let number2 = 5
console.log(number1===number2);
let name1 = "AbdulRehman"
let name2 = "AbdulRehman"
console.log(name1===name2);

// But the case of Symbol is unique because Sybmol assign a unique value to every variable
const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1===id2);

// Modification

let age = 21
age = age+1
//change is not occured in original age (21) variable, the change occurs in Copy variable of age
//JavaScript creates a new copy of the data and assigns that copy to the variable
console.log(age);


// Non-premitive DataTypes -> compared by reference, can modified after creation, stored by reference
// Array, Object, Function

//Comparison
let arr = [1, 2, 3]
let arr1 = [1, 2, 3]
console.log(arr===arr1);
//output will be false because in non-premitive dt comparison is occured by using reference not using values

// let obj = {
//     name: "Alice",
//     age: 22
// }
let obj1 = {age: 22}
let obj2 = {age: 22}
console.log(obj1===obj2); // output will be false due to comparison by reference

// let someFunc = function(){
//     console.log("Hello there!");
// }

//Modification of Non-premitive DT
// modification in the care of NPDT, modify the original variable
let fruits = ["apple", "banana"]
fruits.push("oranges")
console.log(fruits); // change occurin original array named fruits