// all Premitive DataTypes use Stack
// changes will be occured in copy of variables and not in original variables
let score = 85
let score2 = score
score2 = 90
console.log(score, score2);


//all non-premitive DataTypes use Heap
//changes will be occured in original variables because of Raference to the variables
let obj = {
    name: "Alice",
    age: 21
}
let obj1 = obj
obj1.name = "Bob"
console.log(obj.name, obj1.name);