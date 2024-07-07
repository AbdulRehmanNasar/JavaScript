// understanding the concepts of scope (block scope, global scope)


let a = 100
const b = 200
var c = 300
if(true){
let a = 10
const b = 20
var c = 30
}
// console.log(a); // cannot be access due to declare in scope of if
// console.log(b); // cannot be access due to declare in scope of if
console.log(c); // accessable and it creates bugs for programmers
// there will be no effect on the values of a and b due to scope declaration
console.log(a); 
console.log(b);

// understanding scope through functions
function one(){
    const userName = "User"

    function two(){
        const websiteName = "Website"
        console.log(userName);
    }
    // console.log(websiteName);  cannot be accessed due to scope
    two()
}
one()


//++++++++++++++++++++++++++++++++++++ Mini Hoisting ++++++++++++++++++++++++++++++++++++

// there will be no error by calling function before intialization
console.log(addOne(5));
function addOne(num){
    return num+1
}


// error will occur if fuction will be called before fuction initialization

console.log(addTwo(5)); // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2
}